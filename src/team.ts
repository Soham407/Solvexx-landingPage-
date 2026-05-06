export const TEAM_MEMBERS = [
  {
    name: 'Vandanaa Mahadeo Chougulay',
    title: 'Director, Marketing & Strategic Alliances',
    image: '/team/Vandana.avif',
    imagePosition: 'object-center',
    bio: 'With 30 years of diverse professional experience, Vandanaa brings a dynamic blend of business acumen, innovation, and leadership to Solvesxx. She holds a Master’s degree and has built a multifaceted career spanning manufacturing, international business, and strategic marketing. At Solvesxx, she drives marketing strategy and project alliances, building strong business relationships and aligning growth opportunities with market demand. She also leads her own sports brand, LGM Sports, a skating manufacturing and international trading business focused on custom skate design and innovation. Her earlier experience in the food industry further strengthens her operational and business management perspective across sectors. Known for her hard work, innovation-driven thinking, and strategic collaboration, she continues to add significant value to the company’s growth vision.',
  },
  {
    name: 'Nafis Shaikh',
    title: 'Director, Project Management & Execution Specialist',
    image: '/team/nafis-shaikh.jpg',
    imagePosition: 'object-top',
    bio: 'With more than 20 years of industry experience, Nafis Shaikh brings a strong blend of design insight and execution expertise to Solvesxx. A graduate in Interior Design, she has built her career around precision, coordination, and delivering projects that meet both functional and aesthetic expectations. She has served as a Senior Designer and Project Coordinator, where she played a central role in turning concepts into well-executed outcomes. Her core strength is execution excellence: managing timelines, coordinating stakeholders, and ensuring every phase of delivery is handled with discipline and clarity. Driven by a deep passion for project management, she believes successful projects are built on planning, coordination, and flawless execution.',
  },
  {
    name: 'Sharada Vitthal Dhumal',
    title: 'Director, Administrative Management & Operations',
    image: '/team/Sharada.avif',
    imagePosition: 'object-center',
    bio: 'With over 25 years of professional experience, Sharada brings deep expertise in administrative management, financial discipline, and organizational efficiency to Solvesxx. She holds an M.Com with specialization in Business Entrepreneurship, giving her a strong foundation in both business strategy and operations. She oversees administrative systems and project organization, ensuring operations run with structure, accountability, and precision. Her career spans CA firms, legal firms, advertising, printing, media, and the gems and jewellery sector, including 15 years in accounts and 10 years in administration with organizations such as Times of India and P. N. Gadgil & Sons Ltd. Her cross-industry exposure has made her highly adaptable and detail-oriented, with strong capability in managing complex workflows and ensuring seamless coordination across departments.',
  },
  {
    name: 'Adv. Kamal Dashrath Sawant',
    title: 'Director, Legal Advisory & Governance',
    image: '/team/kamal-sawant.jpeg',
    imagePosition: 'object-center',
    bio: 'Advocate Kamal brings a rare combination of legal expertise, leadership experience, and sporting excellence to Solvesxx. She holds BA and LLB degrees and has built a distinguished career rooted in governance, public service, and legal advisory. At Solvesxx, she guides the organization on legal frameworks, compliance, and strategic decision-making, helping ensure operations align with regulatory standards and ethical practices. Her professional journey is complemented by an inspiring sports background as a former national-level cricket player who played as an opening bowler. She has also held major leadership positions, including member of the Apex Council of the Maharashtra Cricket Association and Chairperson of Zilla Parishad, Ahilyanagar. Her experience across law, sports, and governance adds a distinctive strength to the company’s leadership foundation.',
  },
  {
    name: 'Adv. Ashwini Jagtap',
    title: 'Director, Legal Advisory - Civil & Family Law',
    image: '/team/Ashwini.jpeg',
    imagePosition: 'object-center',
    bio: 'Advocate Ashwini brings strong legal expertise and practical understanding of civil and family law to the leadership team at Solvesxx. She holds B.Com and LLB degrees, combining a foundation in commerce with professional legal proficiency. She actively practices at Shivajinagar Court, handling matters related to civil and family law with structured guidance, and client-focused mindset, she plays an important role in safeguarding the company’s interests while enabling informed and compliant decision-making.',
  },
] as const;

export const getInitials = (name: string) =>
  name
    .replace('Adv.', '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
