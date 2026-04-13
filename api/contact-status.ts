export default function handler(_request: any, response: any) {
  response.status(200).json({
    configured: Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_NOTIFICATION_EMAIL),
  });
}
