"use client"; // this is a client component

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faDiscord,
    faTelegramPlane
  } from "@fortawesome/free-brands-svg-icons";

export const FooterRD = () => {
  
  useEffect(() => {
    const header = document.querySelector('.header');

    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 0) {
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
    <footer className="footer w-full mb-1">
            <div className="float-left">
                <div className="social-icons">
                <a href="https://twitter.com/RetroDogeNFT">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://discord.com/invite/JNKbZur9gd">
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
                <a href="https://t.me/+1Ucic398KYA1NjNh">
                  <FontAwesomeIcon icon={faTelegramPlane} />
                </a>
              </div>
            </div>
            <div className="float-right">
              <p>Powered by <a href="https://twitter.com/NFDtoken" target="_blank">FeistyDAO</a></p>
              <p>All Rights Reserved | Copyright 2023 <span>RetroDoges</span></p>
            </div>
    </footer>
  );
};