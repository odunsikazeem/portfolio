import React, { useEffect, useState } from "react";
import RightNav from "../RightNav/RightNav";
import "./style.css";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  const toggleMenu=()=>{
    setIsOpen(!isOpen);
    console.log (isOpen)
  };


  useEffect (
    ()=>{
      const hideRightNav=()=>{
        if (window.innerWidth > 768) {
          setIsOpen(true);
      } else {
           setIsOpen(false);
      }
      }
      window.addEventListener("resize", hideRightNav)
      return () => {
        window.removeEventListener("resize", hideRightNav);
     };
    }, []
 )


  return (
    <>
    <div className="burger"  onClick={toggleMenu}>
      <div className="hamburger"/>
      <div className="hamburger"/>
      <div className="hamburger"/>
    </div>
     {isOpen && < RightNav />}
    </>
  );
}
export default Hamburger;

