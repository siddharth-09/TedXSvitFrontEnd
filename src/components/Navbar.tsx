"use client";
import Link from "next/link";
import { useState } from "react";
import GlassSurface from "../../Reactbits/GlassSurface/GlassSurface";
import "../styles/page.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="NavBar" style={{ padding: "1rem" }}>
      <GlassSurface
        width="100%"
        height="85%"
        borderRadius={24}
        className="glassNavbarContainer"
      >
        <div className="navbar-content">
          <div className="logo">
            <img src="/logoNav.png" alt="" />
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/team">Team</Link>
            <Link href="/sponsors">Sponsors</Link>
            <Link href="/about">About</Link>
          </div>

          {/* Desktop Get Tickets Button */}
          <div className="get-tickets desktop-nav">
            <Link href="/ticketForm">
              <button className="tickets-button">Get Tickets</button>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
          <div className="mobile-nav-links">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/team" onClick={closeMenu}>Team</Link>
            <Link href="/sponsors" onClick={closeMenu}>Sponsors</Link>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <div className="mobile-get-tickets">
              <Link href="/ticketForm" onClick={closeMenu}>
                <button className="tickets-button">Get Tickets</button>
              </Link>
            </div>
          </div>
        </div>
      </GlassSurface>
    </div>
  );
}