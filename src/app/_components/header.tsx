'use client';
import Link from "next/link";

import { useEffect } from "react";
import { useState } from "react";
import Cookies from "universal-cookie";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons'

import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, 
  Dropdown, DropdownMenu, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

import Image from 'next/image'

import { Post } from "@/interfaces/post";
import { SUPPORTED_LOCALES } from "@/config/config";


export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}



type Props = {
  services: Post[];
  locale: string;
  messages: any;
};

export default function Header({ services, locale, messages }: Props) {
    const [scrollingClass, setScrollingClass] = useState("");
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
      {
        "id": 1,
        "url": `/${locale}/services/`,
        "text": messages.navigation ? messages.navigation.services : '',
        "desktop": false,
      },
      {
        "id": 2,
        "url": `/${locale}/about-us/`,
        "text": messages.navigation ? messages.navigation.about : '',
        "desktop": true,
      },
      {
        "id": 3,
        "url": `/${locale}/use-case/`,
        "text": messages.navigation ? messages.navigation.usecase : '',
        "desktop": true,
      },
      {
        "id": 4,
        "url": `/${locale}/blog/`,
        "text": messages.navigation ? messages.navigation.blog : '',
        "desktop": true,
      },
      {
        "id": 5,
        "url": `/${locale}/contact-us/`,
        "text": messages.navigation ? messages.navigation.contact : '',
        "desktop": true,
      },
    ];
    

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
    
    
  return (

    <header className={"header "+scrollingClass} data-header>

      <div className="container">
        <Navbar 
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}>

          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          </NavbarContent>

          {/* ORIGINAL MENU DESKTOP */}
          <NavbarBrand>
              <a rel="canonical" href={"/"+locale} className="logo">
                <img src="/assets/images/pixium-logo.webp" alt="Pixium Digital | top web development" />
              </a>
            </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4 mr-3" justify="center">
            <Dropdown>
              <NavbarItem key={"navbaritem-button"}>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    // endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    Services <FontAwesomeIcon icon={faChevronDown}/>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu aria-label="service-menu" className="submenu" itemClasses={{base: "gap-3"}}>
                { services.map( (service) => (
                    <DropdownItem
                      key={service.title}
                      // description={service.slug}
                      // startContent={<Image src={service.coverImage} alt="" width={30} height={30} />}
                      // classNames={{base:"bbb", wrapper:"my_wrap"}}
                    >
                      <Link rel="canonical" href={`/${locale}/services/`+service.slug+`/`} className="navbar-link px-4 py-2" aria-current="page" data-nav-link>
                        {service.title}
                      </Link>
                    </DropdownItem>)
                  )
                }
              </DropdownMenu>
            </Dropdown>


            {menuItems.map((item, index) => (
              (item.desktop ?
              <NavbarItem key={"navbaritem-"+item.id}>
                <Link rel="canonical" href={item.url} className="navbar-link px-4" aria-current="page" data-nav-link>
                  {item.text}
                </Link>
              </NavbarItem>  : "" )
            ))}

          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem key={"navbaritem-contactus"} className="lg:flex">
              <a rel="canonical" href="mailto:contactus@pixiumdigital.com" className="btn btn-primary has-before has-after">{messages.button ? messages.button.letstalk : ''}</a>
            </NavbarItem>
          </NavbarContent>


          <NavbarMenu className="mobileMenu" >
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  rel="canonical"
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
      </div>
    </header>
  )
};
