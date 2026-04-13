interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  location?: string;
  message?: string;
  source?: string;
}

const json = (response: any, status: number, body: Record<string, string>) =>
  response.status(status).json(body);

export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    return json(response, 405, { message: 'Method not allowed.' });
  }

  const payload = (request.body ?? {}) as ContactPayload;
  const requiredFields = ['name', 'email', 'phone', 'service', 'location', 'message'] as const;

  for (const field of requiredFields) {
    if (!payload[field] || !String(payload[field]).trim()) {
      return json(response, 400, { message: `Missing required field: ${field}.` });
    }
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationRecipients = (process.env.CONTACT_NOTIFICATION_EMAIL || 'admin@solvesxx.com')
    .split(',')
    .map((value: string) => value.trim())
    .filter(Boolean);
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'website@solvesxx.com';

  if (!resendApiKey) {
    return json(response, 503, {
      message:
        'Contact delivery is not configured yet. Add RESEND_API_KEY and CONTACT_NOTIFICATION_EMAIL in Vercel to enable form submissions.',
    });
  }

  if (!isValidEmail(String(payload.email))) {
    return json(response, 400, { message: 'Please enter a valid email address.' });
  }

  const html = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name || '')}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email || '')}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone || '')}</p>
    <p><strong>Company / Society:</strong> ${escapeHtml(payload.company || 'Not provided')}</p>
    <p><strong>Service:</strong> ${escapeHtml(payload.service || '')}</p>
    <p><strong>Location:</strong> ${escapeHtml(payload.location || '')}</p>
    <p><strong>Source:</strong> ${escapeHtml(payload.source || 'website')}</p>
    <hr />
    <p>${escapeHtml(payload.message || '').replace(/\n/g, '<br />')}</p>
  `;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: notificationRecipients,
        reply_to: payload.email,
        subject: `Solvesxx enquiry: ${payload.service}`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return json(response, 502, {
        message: `Unable to deliver your enquiry right now. ${errorText.slice(0, 160)}`,
      });
    }

    return json(response, 200, {
      message: 'Your enquiry has been submitted. Our team will get back to you shortly.',
    });
  } catch {
    return json(response, 500, {
      message: 'Unexpected delivery error. Please email admin@solvesxx.com directly.',
    });
  }
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
