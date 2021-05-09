import React, { useEffect,useState } from "react";
import './nav.css'

const Nav = () => {

  const [show, handleShow] = useState(false);

  // useEffect(()=> {

  //   function handleScroll() {
  //     window.scrollY > 100 ? handleShow(true) : handleShow(false);
  //   }
  //   window.addEventListener('scroll', handleScroll);

  //   // cleanUp
  //   return ()=> window.removeEventListener('scroll', handleScroll);
  // }, [])
  


  // useEffect(()=> {
  //   window.addEventListener('scroll', ()=> {
  //     window.scrollY > 100 ? handleShow(true) : handleShow(false);
  //   });


  //   const cleanup=()=> {
  //     window.removeEventListener('scroll');
  //   }
  //   return cleanup;
  // }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
{      console.log("show=",show)}
      <img className="nav_logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix_logo" />
        <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Nav;
