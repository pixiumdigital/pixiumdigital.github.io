'use client';

import { useRouter, usePathname } from '@/navigation';
import { useEffect, useState } from 'react';
// import Cookies from "universal-cookie";

export default function LanguageChanger() {
  const router = useRouter();
  const pathname = usePathname();

  // const _cookies = new Cookies();
  const [lang, setLang] = useState("");

  useEffect(() => {
        // setLang(_cookies.get('NEXT_LOCALE'));
  }, []);

  const handleChange = (e:any) => {
    router.push(pathname, { locale: e.target.value });
  };


  return (
    <select value={lang} onChange={handleChange} style={{color:"#222"}}>
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}