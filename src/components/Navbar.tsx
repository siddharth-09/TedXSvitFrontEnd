"use client";
import Link from "next/link";
import GlassSurface from "../../Reactbits/GlassSurface/GlassSurface";
import MobileNavPopup from "./MobilePopup"; // Import the mobile popup component
import "../styles/page.css";

export default function Navbar() {
  return (
    <>
      {/* Mobile Navigation Popup - Separate from navbar */}
      
      {/* Main Navbar */}
      <div className="NavBar" style={{ padding: "1rem" }}>
      <MobileNavPopup />
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
          </div>
        </GlassSurface>
      </div>
    </>
  );
}