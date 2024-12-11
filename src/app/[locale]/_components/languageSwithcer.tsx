'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  
  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    return `/${newLocale}${currentPath}`;
  };

  return (
    <div>
      <Link href={switchLocale('en')} className={locale === 'en' ? 'active' : ''}>
        English
      </Link>
      <Link href={switchLocale('fr')} className={locale === 'fr' ? 'active' : ''}>
        Français
      </Link>
    </div>
  );
}
