// app/page.tsx
import { SITE_CONFIG } from '@/config/config';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';


export default function RootPage() {
  redirect('/en');
}


export function generateMetadata(): Metadata {
  const title = `Pixium Digital | Top Digital Development Company - Singapore`;
  const description = `Digital consulting and software development. Enhance operations, productivity, and profitability through scalable software, IT, and staffing solution.`;
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title,
    description: description,
    openGraph: {
      title: title,
      type:"website",
      description: description,
      images: [`https://${SITE_CONFIG.domain}/assets/images/pixium-logo.webp`]
    },
  };
}