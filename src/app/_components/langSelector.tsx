'use client';

import { getCookie, setCookie } from 'cookies-next'

import { setLocale } from '@/middleware';

const LangSelector = () => {
    function setLang(lang:string){
        setLocale(lang);
    }

    return (<div>
            {/* <button onClick={setLang('en')}>EN</button> */}
            <button onClick={() => setLang('en')}>FR</button>
        </div>
    );
}

export default LangSelector;
