'use client';
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [scrollingClass, setScrollingClass] = useState("");
    const [navBarClass, setNavBarClass] = useState("");

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 80) 
          {
              if(!scrollingClass){
                  setScrollingClass("active");
              }
          }else{
              setScrollingClass("");
          }
        }
        window.addEventListener('scroll', handleScroll);
          
    }, []);

    function toggleNavbar(event:any){
        setNavBarClass("active");
    };
    function closeNavbar(event:any){
        setNavBarClass("");
    };
    
  return (<header className={"header "+scrollingClass} data-header>
    <div className="container">

      <a href="/" className="logo">
        <img src="/assets/images/pixium-logo.png" style={{height:"60px"}} />
      </a>

      <nav className={"navbar "+navBarClass} data-navbar>

        <div className="wrapper">
          <a className="nav-close-btn" aria-label="close menu" data-nav-toggler onClick={closeNavbar} style={{width:"80px"}}>
             {/* <ion-icon name="close-outline" aria-hidden="true"></ion-icon> */}
             <FontAwesomeIcon icon={faClose} />
          </a>
        </div>

        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="/services" className="navbar-link" data-nav-link>Services</a>
          </li>

          <li className="navbar-item">
            <a href="/about-us" className="navbar-link" data-nav-link>About Us</a>
          </li>

          <li className="navbar-item">
            <a href="/use-case" className="navbar-link" data-nav-link>Use case</a>
          </li>

          <li className="navbar-item">
            <a href="/contact-us" className="navbar-link" data-nav-link>Contact Us</a>
          </li>

          {/* <li className="navbar-item">
            <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
          </li> */}

        </ul>

      </nav>

      <button className="nav-open-btn" aria-label="open menu" data-nav-toggler onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} />
        {/* <ion-icon name="menu-outline" aria-hidden="true"></ion-icon> */}
        {/* <MenuOutline /> */}
      </button>

      <a href="mailto:contactus@pixiumdigital.com" className="btn btn-primary has-before has-after">Let’s Talk 👋</a>

      <div className={"overlay "+navBarClass} data-nav-toggler data-overlay></div>

    </div>
  </header>
  );
};

export default Header;
