'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { GoogleAnalytics } from '@next/third-parties/google';

const GoogleAnalyticsWrapper = () => {
//   const [showGA, setShowGA] = useState(false);

//   useEffect(() => {
//     // Check if analytics cookie exists and is enabled
//     const analyticsCookie = Cookies.get('pixiumdigital-website');
//     if (analyticsCookie === 'true') {
//       setShowGA(true);
//     }
//   }, []);
    const showGA = true;

    return showGA ? <GoogleAnalytics gaId="G-2H458FMSSG" /> : null;
};

export default GoogleAnalyticsWrapper;
