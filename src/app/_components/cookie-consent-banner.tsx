'use client'

import React from "react";
import CookieConsent from "react-cookie-consent";
import Cookies from 'js-cookie';
import Link from "next/link";

const CookieConsentBanner = () => {
  return (
        <CookieConsent
            location="bottom"
            buttonText="Accept All"
            declineButtonText="Decline"
            enableDeclineButton
            overlay
            cookieName="pixiumdigital-website"
            style={{ background: "#2B373B", color: "#FFF" }}
            buttonStyle={{ backgroundColor: "#4CAF50", color: "#FFF", fontSize: "14px", width: "140px" }}
            declineButtonStyle={{ backgroundColor: "#2B373B", color: "#fff", fontSize: "12px", width: "140px" }}
            expires={365}  // Number of days before the cookie expires
            onAccept={() => {
                // Add functionality when user accepts cookies
                // console.log("Cookies accepted");
                Cookies.set('pixiumdigital-website', 'enabled', { expires: 365 });
            }}
            onDecline={() => {
                // Add functionality when user declines cookies
                // console.log("Cookies declined");
                Cookies.set('pixiumdigital-website', 'false', { expires: 1 });
            }}
            >
            <div className="text-left">
                We use cookies to improve your experience on our site, 
                analyze website traffic, and understand where our visitors are coming from.
                 By clicking "Accept All," you consent to our use of cookies. 
            </div>
        </CookieConsent>
    );
};

export default CookieConsentBanner;