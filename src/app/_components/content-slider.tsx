'use client'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export interface ContentCard {
    id: number;
    title: string;
    description: string;
    icon?: string;
    link?: string;
  }
  

type ContentSliderProps = {
  services: ContentCard[];
  slidePerPreview: number,
  messages?: any;
  url: string;
  title: string;
}

export default function ContentSlider( params: ContentSliderProps) {
  

  return (
      <div className="container service-slider bg-white">
          <div className="section mt-16 mb-16 md:mb-12 text-center">
              <h2 className="h2 section-title text-center" dangerouslySetInnerHTML={{__html:params.title}}>
              </h2>

              <a href={params.url} title="services">
                  {params.messages.viewall}
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    height="20" 
                    className="inline-flex ps-2" 
                  />
              </a>

              <div className="mt-4"></div>
              <Swiper
                className='p-4'
                modules={[Navigation, Scrollbar, A11y, Mousewheel]}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    576: {
                      // width: 576,
                      slidesPerView: 1,
                    },
                    768: {
                      // width: 768,
                      slidesPerView: 2,
                    },
                    // 992: {
                    //   // width: 768,
                    //   slidesPerView: 3,
                    // },
                    1224: {
                      // width: 768,
                      slidesPerView: 3,
                    },
                }}
              
                navigation
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
              >
                  {params.services.map((service) => (
                      <SwiperSlide 
                        key={service.id}
                        className="p-[20px] h-100"
                      >
                          <div className='bg-gray-100 p-[30px] rounded-2xl h-100'>
                              <a href={service.link} title={service.title}>
                                  <h3 className="h3 service-title">{service.title}</h3>
                              </a>

                              {service.link && (
                                  <a href={service.link} title={service.title}>
                                    {params.messages.learnmore}
                                    <FontAwesomeIcon 
                                        icon={faArrowRight} 
                                        height="20" 
                                        className="inline-flex ps-2" 
                                      />
                                  </a>
                              )}
                          </div>
                      </SwiperSlide>
                  ))}
              </Swiper>

          </div>
      </div>);
};
