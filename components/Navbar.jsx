import React,{useEffect} from 'react';
import Script from 'next/script'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaBorderStyle } from 'react-icons/fa'
import Link from 'next/link';

const Navbar = ({ mobnav,page }) => {
  if (!mobnav) { mobnav = false; }
  useEffect(() => {
    let top = document.getElementsByClassName('top-div')[0]
    window.addEventListener('scroll',()=>{

      if (document.body.scrollTop > window.innerHeight*.3 || document.documentElement.scrollTop > window.innerHeight*.3) {
        top.style.transform = 'scale(1)'
      }
      else{
        top.style.transform = 'scale(0)'

      }
    })

  }, [])
  
  return (
    <>
    <Script src="https://cdn.lordicon.com/qjzruarw.js" />
      <div className="navbar">
        <Link href={"/home"} ><a><div className='main-nav'><div className={`${mobnav ? 'mob-nav' : null} ${page=="home"?"nav-active":null} nav-items`}>Home</div></div></a>
        </Link>
        <Link href="/work">
          <a><div className='main-nav'><div className={`${mobnav ? 'mob-nav' : null} ${page=="work"?"nav-active":null} nav-items`}>Work</div></div></a>
        </Link>
        {/* <Link href="#"> */}
        <a><div className='main-nav mh'>
          <div className="sub-nav">
            {/* <div className="item-top"></div> */}
            <Link href="https://www.instagram.com/zerror_studios/">
              <a target="_blank"><div className="sub-nav-items"><FaInstagram />Instagram</div></a></Link>
            <Link href="https://www.fiverr.com/zerrorstudios">
              <a target="_blank"><div className="sub-nav-items"><FaFacebookF />Fiverr</div></a></Link>
            <Link href="https://www.linkedin.com/company/zerrorstudios">
              <a target="_blank"><div className="sub-nav-items"><FaLinkedinIn />LinkedIn</div></a></Link>
          </div>
          <div className={`${mobnav ? 'mob-nav' : null} nav-items`}>Social</div></div></a>
        {/* </Link> */}
        <Link href={"/contact"} ><a><div className='main-nav'><div className={`${mobnav ? 'mob-nav' : null}  ${page=="contact"?"nav-active":null} nav-items`}>Contact</div></div></a>
        </Link>
      </div>

      <div className="top-div flex-all" onClick={()=>{window.scrollTo(0,0)}}>
      <lord-icon
    src="https://cdn.lordicon.com/xsdtfyne.json"
    trigger="morph"
    colors="primary:#f2f2f2"
    state="hover-1"
    style={{width:"50px",height:"50px"}}
    >
</lord-icon>
      </div>
    </>

  )
}

export default Navbar