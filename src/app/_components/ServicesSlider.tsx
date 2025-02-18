'use client'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react';


export interface SliderCard {
    id: number;
    title: string;
    description: string;
    icon?: string;
    link?: string;
  }
  

type ServiceSliderProps = {
  services: SliderCard[];
  cardsPerView: number;
  autoPlay?: boolean;
  interval: number;
  messages?: any;
}

export default function ServiceSlider( params: ServiceSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === params.services.length - params.cardsPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? params.services.length - params.cardsPerView : prev - 1
    );
  };

  // Auto play functionality
  useEffect(() => {
    if (!params.autoPlay) return;

    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [params.autoPlay]);

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setTouchStart(null);
    }
  };

  return (
    <div className="service-slider-container">
      <div 
        className="service-slider"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div 
          className="slider-track gap-4"
          style={{
            transform: `translateX(-${currentIndex * (100 / params.cardsPerView)}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {params.services.map((service) => (
            <div 
              key={service.id}
              className="slider-card"
              style={{ width: `${100 / params.cardsPerView}%` }}
            >
              {/* {service.icon && (
                <div className="service-icon">{service.icon}</div>
              )} */}
              <h3 className="h3 service-title">{service.title}</h3>
              {/* <p className="service-description">{service.description}</p> */}
              {service.link && (
                <a href={service.link} className="service-link">
                  {params.messages.learnmore}
                  <FontAwesomeIcon 
                                    icon={faArrowRight} 
                                    height="20" 
                                    className="inline-flex ps-2" 
                                  />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <button 
        className="slider-button prev" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button 
        className="slider-button next" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
};
