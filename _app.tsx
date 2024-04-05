import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import React from 'react';

export default function App({ Component, pageProps }:{ Component:any, pageProps:any}) {
    return (
        <I18nProvider i18n={i18n}>
            <Component {...pageProps} />
        </I18nProvider>
    );
}