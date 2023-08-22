"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';

const ScrollCircle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-10 right-5 ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop}>
      <div className="transition-all hover:scale-110 flex justify-center items-center bg-white h-16 w-16 rounded-full cursor-pointer shadow-lg border border-slate-300">
        <FontAwesomeIcon icon={faAngleUp} className="text-2xl text-gray-900 fa-solid fa-angle-up" />
      </div>
    </div>
  );
};

export default ScrollCircle;
