import { BASE_URL } from '@/lib/constants';

export async function GET() {
  const projects = [
    {
      title: "Let'sTrip Travel Platform",
      description:
        'Comprehensive travel booking platform with mobile and web applications for hotels, flights, and tour packages.',
      url: 'https://letstrip.travel',
      pubDate: new Date('2024-03-01').toUTCString(),
      category: 'Travel',
    },
    {
      title: 'Najot Talim LMS',
      description:
        'Learning Management System for educational courses with student progress tracking and interactive lessons.',
      url: 'https://najottalim.uz',
      pubDate: new Date('2023-06-01').toUTCString(),
      category: 'Education',
    },
    {
      title: 'Apple Store Clone',
      description:
        'Pixel-perfect clone of Apple Store showcasing frontend development skills and attention to detail.',
      url: 'https://apple-clone-app.vercel.app',
      pubDate: new Date('2023-01-15').toUTCString(),
      category: 'E-commerce',
    },
    {
      title: 'Lyriks Music Platform',
      description:
        'Music streaming platform with lyrics display and song discovery features.',
      url: 'https://lyriks-music.firebaseapp.com',
      pubDate: new Date('2022-09-20').toUTCString(),
      category: 'Entertainment',
    },
    {
      title: 'Metaverse Landing',
      description:
        'Modern landing page for metaverse project with 3D animations and interactive elements.',
      url: 'https://metaverses-app.vercel.app',
      pubDate: new Date('2022-07-10').toUTCString(),
      category: 'Web3',
    },
    {
      title: 'Hoo Bank Landing',
      description:
        'Banking application landing page with modern design and smooth animations.',
      url: 'https://project-hoobank-app.netlify.app',
      pubDate: new Date('2022-05-15').toUTCString(),
      category: 'Finance',
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Liil Dev - Projects</title>
    <link>${BASE_URL}/projects</link>
    <description>Latest projects and portfolio work by Liil Dev - Frontend Developer</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/me.webp</url>
      <title>Liil Dev</title>
      <link>${BASE_URL}</link>
    </image>
    ${projects
      .map(
        (project) => `
    <item>
      <title>${escapeXml(project.title)}</title>
      <link>${escapeXml(project.url)}</link>
      <description>${escapeXml(project.description)}</description>
      <pubDate>${project.pubDate}</pubDate>
      <category>${escapeXml(project.category)}</category>
      <guid isPermaLink="false">${escapeXml(project.url)}</guid>
    </item>`,
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
