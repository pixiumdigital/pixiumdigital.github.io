// app/page.tsx
import { SITE_CONFIG } from '@/config/config';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';


export default async function RootPage() {
  redirect('/en');

  return null;
}


export function generateMetadata(): Metadata {
  const title = `Pixium Digital | Top Digital Development Company - Singapore`;
  const description = `Digital consulting and software development. Enhance operations, productivity, and profitability through scalable software, IT, and staffing solution.`;
  // const previousImages = (await parent).openGraph?.images || []

  const canonicalUrl = `https://${SITE_CONFIG.domain}`;

  return {
    title,
    description: description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: title,
      type:"website",
      description: description,
      siteName: "Pixium Digital",
      url: canonicalUrl,
      images: [`https://${SITE_CONFIG.domain}/assets/images/pixium-logo.webp`]
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      site: canonicalUrl,
      description: description,
      images: [`https://${SITE_CONFIG.domain}/assets/images/pixium-logo.webp`],
    },
  };
}