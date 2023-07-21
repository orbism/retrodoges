"use client"; // this is a client component

import { useState, useEffect } from "react";
import { Nav } from "./nav";

export const HeaderRD = () => {
  
  useEffect(() => {
    const header = document.querySelector('.header');

    const handleScroll = () => {
      if (header) {
        if (window.scrollY > window.innerHeight * 5) {
          header.classList.add('header--small');
        } else {
          header.classList.remove('header--small');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header w-full mb-1">
                <Nav />
    </header>
  );
};