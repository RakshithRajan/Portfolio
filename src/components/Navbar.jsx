import React, { useState, useEffect } from "react";
import "../styles/Navbar.css"
function Navbar() {
    const [active, setActive] = useState(false);
    
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
        <div className={active ? "activeNav" : ""}>
        <div className="navbar">
          <a className="navbar_name" href="/home">Rakshith Rajan</a>
          <nav>
            <a href="/About">about</a>
            <a href="/Projects">projects</a>
            <a href="/Contact">contact</a>
          </nav>
        </div>
      </div>
    </>
)
}

export default Navbar