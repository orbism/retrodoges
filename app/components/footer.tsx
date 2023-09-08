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

  import { PlayerRD } from "./player";


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
    <div className="stickyfooter w-full mb-1">

      <PlayerRD />

      <div className="social-icons">
        <a target="_blank" href="https://twitter.com/RetroDogesNFT">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a target="_blank" href="https://discord.com/invite/JNKbZur9gd">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a target="_blank" href="https://t.me/+B7vcvhfeyeYzMDZk">
          <FontAwesomeIcon icon={faTelegramPlane} />
        </a>
      </div>

      <div className="copyright">
        <p>Powered by <a href="https://twitter.com/NFDtoken" target="_blank">FeistyDAO</a></p>
        <p>All Rights Reserved | Copyright 2023 <span>RetroDoges</span></p>
      </div>
    </div>
            
  );
};