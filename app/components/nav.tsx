"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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

export const Nav = () => {
  const navigation = useRouter();
  const pathname = usePathname();

  const path = usePathname();
  useEffect(() => {
      document.body.className = path || "";
  });

  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`nav-container ${isSticky ? "sticky" : ""}`}>
        <nav className="nav">
          <div className="logo">
            <Link href="/home">
              <img src="/RetroDoges.png" alt="RetroDoges Logo" className="flicker-image"/>
            </Link>
          </div>
          <div className={`menu ${isOpen ? "open" : ""}`}>

            <Link legacyBehavior href="/about">
              <a onClick={handleLinkClick} className={pathname === "/about" ? "active" : ""}>About</a>
            </Link>
            <Link  legacyBehavior href="/token">
              <a onClick={handleLinkClick} className={pathname === "/token" ? "active" : ""}>Token</a>
            </Link>
            <Link  legacyBehavior href="/utility">
              <a onClick={handleLinkClick} className={pathname === "/utility" ? "active" : ""}>Utility</a>
            </Link>
            <Link  legacyBehavior href="/faq">
              <a onClick={handleLinkClick} className={pathname === "/faq" ? "active" : ""}>FAQ</a>
            </Link>
            <Link legacyBehavior href="/mint">
              <a onClick={handleLinkClick} className={pathname === "/mint" ? "active" : ""}>Sold Out!</a>
            </Link>
            {/* <ConnectWallet /> */}
            
          </div>
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

              <a className="opensea" target="_blank" href="https://opensea.io/collection/retrodogesnft">
                <span>Opensea</span>
              </a>
              <a className="etherscan" target="_blank" href="https://etherscan.io/address/0xeeecde100b55f135a40ca9d92a52bd7723235814">
                <span>Etherscan</span>
              </a>

            </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </nav>
      </div>
    </>
  );
};
