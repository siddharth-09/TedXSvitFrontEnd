import Link from "next/link";
import GlassSurface from "../../Reactbits/GlassSurface/GlassSurface";
import "../styles/page.css";
export default function Navbar(){
    return(
         <div className="NavBar" style={{ padding: "1rem" }}>
      <GlassSurface
        width="100%"
        height="100%"
        borderRadius={24}
        className="glassNavbarContainer"
      >
        <div className="navbar-content">
          <div className="logo">
          
         
          <img src="/logoNav.png" alt="" />
          </div>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/team">Team</Link>
            <Link href="/sponsors">Sponsors</Link>
            <Link href="/about">About</Link>
          </div>

          <div className="get-tickets">
            <Link href="/ticketForm">
              <button className="tickets-button">Get Tickets</button>
            </Link>
          </div>
        </div>
      </GlassSurface>
    </div>
    )
}