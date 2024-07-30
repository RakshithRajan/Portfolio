import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar.jsx";

function Home() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" data-cursor-dot></div>
      <div
        ref={cursorOutlineRef}
        className="cursor-outline"
        data-cursor-outline
      ></div>
      <div className="home_body">
        <Navbar />
        <div className="home_para1">
          I’m Rakshith, a{" "}
          <span className="home_para1_cd">creative developer</span> focused on
          producing top-notch
          <div className="thirdline">
            <div className="home_para1_1">experiences in</div>
            <div className="words">
              <span className="changing">user experience.</span>
              <span className="changing">dynamic aesthetics.</span>
              <span className="changing">customer journey.</span>
              <span className="changing">brand experience.</span>
            </div>
          </div>
        </div>
        <div className="home_projects_body">
          <div className="home_projects_title">projects</div>
        </div>
      </div>
    </>
  );
}

export default Home;
