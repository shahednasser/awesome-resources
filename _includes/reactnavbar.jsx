import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineDocumentText } from "react-icons/hi";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";

const Navbar = () => {
  const sliderRef = useRef(null);
  const navGlassRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const lastScrollY = useRef(0);

  // Scroll listener with direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Agar top par hai to expand
      if (currentScrollY < 50) {
        setScrolled(false);
      }
      // Agar scroll down ho raha hai to compress
      else if (currentScrollY > lastScrollY.current) {
        setScrolled(true);
      }
      // Agar scroll up ho raha hai to expand
      else if (currentScrollY < lastScrollY.current) {
        setScrolled(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div>      
    </div>
      <nav
        className={`navbar navbar-dark bg-transparent custom-nav position-fixed ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div
          className="container-fluid justify-content-center align-items-center"
          style={{ overflow: "visible" }}
        >
          {/* Nav links - Desktop only */}
          <div
            className="nav-glass px-3 py-2  d-flex position-relative"
            ref={navGlassRef}
          >
            <a className="nav-link active fs-6" href="#">
              <HiOutlineHome className="fs-5 me-1 homeicon" />
              <span className="navbarlink text-white">Home</span>
            </a>
            <a className="nav-link fs-6 aboutnav-link" href="#">
              <HiOutlineDocumentText className="fs-5 me-1" />
              <span className="navbarlink">About</span>
            </a>
            <a className="nav-link fs-6 projectnav-link" href="#projectpage">
              <PiSuitcaseSimpleBold className="fs-5 me-1" />
              <span className="navbarlink">Project</span>
            </a>
            <a className="nav-link fs-6 contactnav-link" href="#contactpage">
              <IoMailOutline className="fs-5 me-1" />
              <span className="navbarlink">Contact</span>
            </a>
            <div className="slider" ref={sliderRef}></div>
          </div>
        </div>
      </nav>

      {/* Styles */}
      <style>{`
    .custom-nav {
  top: 20px;
  width: 100%;
  z-index: 999 !important;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
}

  .nav-glass {
    border: 1px solid #141417;
    background: #000000b3;
    padding: 12px 0px !important;
    gap: 0px;
    border-radius: 51px !important;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}
.stagelight {
 content: '';
  position: absolute;
  width: 50%;
  // text-align: center;
  height: 250px;
  background: radial-gradient(ellipse 80% 150% at 50% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.25) 20%, rgba(255, 255, 255, 0.12) 40%, transparent 70%);
  pointer-events: none;
  left: 0;
  top: 0;
  opacity: 1;
  filter: blur(2px);
}
// .nav-glass::before {
//   content: '';
//   position: absolute;
//   width: 100%;
//   height: 250px;
//   background: radial-gradient(ellipse 80% 150% at 50% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.25) 20%, rgba(255, 255, 255, 0.12) 40%, transparent 70%);
//   pointer-events: none;
//   left: 0;
//   top: 0;
//   opacity: 1;
//   filter: blur(2px);
// }
 
         .custom-nav.navbar-scrolled .nav-glass {
    padding: 8px 0px !important;
    gap: 0px !important;
}

        .navbarlink {
          font-size: 14px;
          white-space: nowrap;
          display: inline-block;
          transition: opacity 0.3s ease, max-width 0.3s ease;
          max-width: 200px;
        }

        .custom-nav.navbar-scrolled .navbarlink {
          opacity: 0;
          max-width: 0;
          overflow: hidden;
        }

        .nav-link {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 12px;
          transition: all 0.3s ease;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
          z-index: 1;
        }

        .nav-link.active {
          color: white;
        }

        .custom-nav.navbar-scrolled .nav-link {
          padding: 6px 8px !important;
        }

        .custom-nav.navbar-scrolled .nav-link svg {
          font-size: 18px;
        }

      .custom-nav.navbar-scrolled .slider {
        height: 30px !important;
        width: 35px !important;
        border-radius: 70px !important;
        left: 3% !important;
      }
          .homeicon {
          margin-left: 3px !important;
          }
        
.aboutnav-link:hover {
  background: #262626;
  border-radius: 20px;
  transform: scale(1.1) !important;
        transition: all 0.4s ease !important;
        }
.projectnav-link:hover {
  background: #262626;
  border-radius: 20px;
  transform: scale(1.1) !important;
        transition: all 0.4s ease !important;
        }
.contactnav-link {
right: 2% !important;}
.contactnav-link:hover {
  background: #262626;
  border-radius: 20px;
  right: 2% !important;
  transform: scale(1.1) !important;
        transition: all 0.4s ease !important;
        }

      .slider {
        position: absolute;
        bottom: 0;
        left: 2% !important;
        height: 50px;
        width: 90px !important;
        background: transparent;
        border-radius: 25px;
        transition: all 0.3s ease;
        top: 50%;
        transform: translateY(-50%);
        z-index: 0;
      }
      `}</style>
    </>
  );
};

export default Navbar;