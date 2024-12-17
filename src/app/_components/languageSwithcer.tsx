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
    <div style={{textAlign:"left"}}>
      { locale === 'en' ? 
        (<Link rel="canonical" href={switchLocale('fr')}>
          <img src="/assets/images/flag-fr.png" width="30" height="30" loading="lazy" style={{display:"inline"}}
                            alt="service icon" />
        </Link>) :
        (<Link rel="canonical" href={switchLocale('en')} className={locale === 'en' ? 'active' : ''}>
          <img src="/assets/images/flag-en.png" width="30" height="30" loading="lazy" style={{display:"inline"}}
                            alt="service icon" />
        </Link>)
      }
      
    </div>
  );
}
