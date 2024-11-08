'use client';
import Link from "next/link";

import { useEffect } from "react";
import { useState } from "react";
import Cookies from "universal-cookie";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

const Header = () => {
    const [scrollingClass, setScrollingClass] = useState("");
    const [navBarClass, setNavBarClass] = useState("");
    // const [lang, setLang] = useState("");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const _cookies = new Cookies();
    // useEffect(() => {
    //       const isProd = process.env.NODE_ENV != 'development'
    //       if(isProd)
    //           setLang('/'+_cookies.get('NEXT_LOCALE'));
    // }, []);

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

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);     
    }, []);

    function toggleNavbar(event:any){
        setNavBarClass("active");
    };
    function closeNavbar(event:any){
        setNavBarClass("");
    };

    const menuItems = [
      {
        "url": "/services",
        "text": "Services",
      },
      {
        "url": "/about-us",
        "text": "About Us",
      },
      {
        "url": "/use-case",
        "text": "Use Case",
      },
      {
        "url": "/contact-us",
        "text": "Contact Us",
      },
    ];
    
    
  return (

    <header className={"header "+scrollingClass} data-header>
      <Navbar 
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}>

        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
                <a href="/" className="logo">
                  <img src="/assets/images/pixium-logo.png" style={{height:"60px"}} />
                </a>
            </NavbarBrand>
        </NavbarContent>

        {/* ORIGINAL MENU DESKTOP */}
        <NavbarContent className="hidden sm:flex gap-6 mr-3" justify="center">
          <NavbarBrand>
            <a href="/" className="logo">
              <img src="/assets/images/pixium-logo.png" style={{height:"60px"}} />
            </a>
          </NavbarBrand>
          
          <NavbarItem>
            <Link href={"/services"} className="navbar-link" aria-current="page" data-nav-link>
            Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"/about-us"} className="navbar-link" aria-current="page" data-nav-link>
            About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"/use-case"} className="navbar-link" aria-current="page" data-nav-link>
            Use Case
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"/contact-us"} className="navbar-link" aria-current="page" data-nav-link>
            Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <a href="mailto:contactus@pixiumdigital.com" className="btn btn-primary has-before has-after">Let’s Talk 👋</a>
          </NavbarItem>
        </NavbarContent>


        <NavbarMenu className="mobileMenu" >
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                onClick={()=>{setIsMenuOpen(false)}}
                className="w-full p-2 m-4 text-2=4xl"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href={item.url}
                // size="lg"
              >
                {item.text}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      </header>
  )
};

export default Header;
