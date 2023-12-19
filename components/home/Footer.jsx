import React, { useState, useEffect } from 'react'
import Image from 'next/image'
// import logo from '../public/logo.png';
import { IoCallSharp } from 'react-icons/io5'
import { AiFillMail } from 'react-icons/ai'
// import Logo from './logo/Logo';
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from 'react-icons/ai'
import Link from 'next/link';
import { IoLocationSharp } from 'react-icons/io5'
import { gsap } from "gsap/dist/gsap";



const Footer = () => {

  useEffect(() => {

    let fill = document.getElementsByClassName('footer-black')[0];
    window.addEventListener('mousemove', (e) => {
        let x = e.clientX - fill.parentElement.getBoundingClientRect().left;
        let y = e.clientY - fill.parentElement.getBoundingClientRect().top;
        fill.style.top = y + 'px';
        fill.style.left = x + 'px';
    })

    var mArea = document.querySelector('#magnetic-area');

// 1. Set the function and variables
function parallaxIt(e, target, movement = 1){
  var boundingRect = mArea.getBoundingClientRect();
  var relX = e.pageX - boundingRect.left;
  var relY = e.pageY - boundingRect.top;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  gsap.to(target, {
    x: ((relX - boundingRect.width/2) * movement)/4.5,
    y: ((relY - boundingRect.height/2 - scrollTop) * movement)/4.5,
    ease: "power1",
    duration: 0.6
  });
}

// 2. Call the function
function callParallax(e){
  parallaxIt(e, '#magnetic-content');
}


mArea.addEventListener('mousemove', function(e){
  callParallax(e);
});

mArea.addEventListener('mouseleave', function(e){
  gsap.to('#magnetic-content', {
    scale:1,
    x: 0,
    y: 0,
    ease: "power3",
    duration: 0.6
  });
});
  }, [])



  return (
    <>
      {/* <div className='footer'>
      <div className='logo-footer'>
        <div className="foc">
        <div className='footer-logo-cont'>
          <Image src={logo} layout="intrinsic" quality={1} />
        </div>
        <div className="footer-text">
          Zerror Studios aims to develop the next generation of dynamic websites and mobile applications to help entrepreneurs, industrialists, and businesses unleash new possibilities and take their business to the next level.
        </div>
        <ul className="social-icons">
          <li><a href="https://wa.me/917738302421" target="_blank" rel="noreferrer">
            <BsWhatsapp />
          </a></li>
          <li>
            <a href="https://instagram.com/zerror_studios?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
              <BsInstagram />
            </a></li>
          <li className='lii'><a href="https://www.linkedin.com/in/zerror-studios/" target="_blank" rel="noreferrer">
            <AiOutlineLinkedin />
          </a></li>

        </ul>
        <div className="copy">© All rights reserved by <span >Zerror Studios</span></div>
        </div>
      </div>
      <div className='office-footer'>
        <div className='officep'>OFFICE</div>
        <div className='mumbai'><IoLocationSharp />Mumbai</div>
        <div className='address'>
          B/109, Jai sai pooja apt, Jain Nagar, Navghar Road, Bhayander East.
        </div>
        <a style={{ color: "black", textDecoration: "none" }} href="tel:+91773802421"><div className='phone-cont first-phone-cont cont-cont'><IoCallSharp />+91 7738302421</div></a>
        <a style={{ color: "black", textDecoration: "none" }} href="tel:+91703946638"><div className='phone-cont second-phone-cont cont-cont'><IoCallSharp />+91 7039446638</div></a>
        <a href="mailto:zerrorstudios@gmail.com" ><div className='email-cont cont-cont'><AiFillMail />zerrorstudios@gmail.com</div></a>
      </div>
      <div className='contact-footer'>
        <div className="git">Get in touch</div>
        <svg className="foot-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 729.43 729.425"><defs><filter id="a" x="0" y="0" width="729.43" height="729.425" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"></feOffset><feGaussianBlur stdDeviation="15" result="blur"></feGaussianBlur><feFlood floodOpacity=".02"></feFlood><feComposite operator="in" in2="blur"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs><g data-name="Group 1200"><g filter="url(#a)" data-name="Group 1199"><path data-name="Path 418" d="M556.58 105.892A319.757 319.757 0 0 0 45.004 361.709c0 176.559 143.154 319.712 319.713 319.712 173.826 0 315.135-138.746 319.541-311.495q.176-4.109.176-8.218V41.997a159.711 159.711 0 0 0-127.854 63.895Z" fill="#fff"></path></g></g></svg>
      </div>

    </div> */}


      <div className="last-footer flex-all">
    
      <div className="safe-wrap">
        <Link href="/contact">
  <a id="magnetic-wrap">
    <div id="magnetic-area" className="magnetic-size"></div>
    <div id="magnetic-content">
      {/* <div className="my-burger">
      </div> */}
       <div className="footer-circle flex-all">
       <div className="git-new">
          <div className="gc">Click to</div>
          <div className='gt'>Get in touch</div>
      </div>
          <div className="footer-black"></div>
        </div>
    </div>
  </a>
  </Link>
</div>
       
      
      </div>
    </>
  )
}

export default Footer