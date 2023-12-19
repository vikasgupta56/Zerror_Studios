import React, { useState, useEffect } from 'react'
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import Navbar from './Navbar';
import { BsArrowUpRight, BsVolumeDown } from 'react-icons/bs';

// import hefty from '../public/iPad Air Mockup - Hefty1.png'
import VideoList from './home/VideoList';
// import heftyvid from "../public/Hefty art.mov"


const Projects = () => {
    const [vidName, setVidName] = useState("");
    const [vidNo, setVidNo] = useState(0);
    const [bg, setBg] = useState("#f3f3f3");
    let videoNo = [0, 1, 2, 3, 4];
    let vidlist = ["Hefty Arts", "Sensei Hub", "Khelo Esports", "Career Sure", "TravGlow"]

    useEffect(() => {


        let projs = document.getElementsByClassName('proj');
        let video = document.getElementsByClassName("proj-video-cont")[0];
        window.addEventListener('mousemove', (e) => {
            let x = e.clientX;
            let y = e.clientY;
            video.style.left = x + 'px'
            video.style.top = y + 'px'
        })
        Array.from(projs).forEach(proj => {
            proj.addEventListener('mouseenter', () => {
                video.style.opacity = '1';
            })
            proj.addEventListener('mouseleave', () => {
                video.style.opacity = '0';
            })
        });
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".projimg3", {
            scrollTrigger: {
                trigger: ".proj3",
                start: "top 90%",
                end: "bottom 10%",
                scrub: 1,
                // markers:true

            },
            y: 200,
        })
        gsap.to(".projimg5", {
            scrollTrigger: {
                trigger: ".proj5",
                start: "top 90%",
                end: "bottom 10%",
                scrub: 1,
                // markers:true

            },
            y: 200,
        })
        gsap.to(".projimg4", {
            scrollTrigger: {
                trigger: ".proj4",
                start: "top 90%",
                end: "bottom 10%",
                scrub: 1,
                // markers:true

            },
            y: 200,
        })
        gsap.to(".projimg1", {
            scrollTrigger: {
                trigger: ".proj1",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                // markers:true

            },
            y: 200,
        })
        gsap.to(".projimg2", {
            scrollTrigger: {
                trigger: ".proj1",
                start: "top 10%",
                end: "bottom top",
                scrub: 1,
                // markers:true

            },
            y: 100,
        })
    }, [])

   
    let works = [
        {
            name: "IR Esports",
            link: "https://www.iresports.in/",
            imgsrc: "/IR Esports.png"

        },
        {
            name: "Rotaract Club Of Hinduja College",
            link: "https://www.rchinduja.com/",
            imgsrc: "/RCHC.png"
        },
        {
            name: "Harshad Dhage",
            link: "https://www.harshaddhage.com/",
            imgsrc: "/Harshad Dhage.png"
        },
        {
            name: "Sensei store",
            link: "https://www.thesenseisstore.com/",
            imgsrc: "/The Sensei Store.png"
        },
        {
            name: "TravGlow Trip (Editor-X Version)",
            link: "https://zerrorstudios.editorx.io/travglowtrips",
            imgsrc: "/TravGlow Trips Editor-X Version.png"
        },
        {
            name: "RTC Planters",
            link: "https://www.rtcplanters.com/",
            imgsrc: "/RTC Planters.png"
        },
        {
            name: "SRWS",
            link: "https://www.srws.org.in/",
            imgsrc: "/SRWS.png"
        },
        {
            name: "Sunrise Builders",
            link: "https://www.sunrisebuilders.in/",
            imgsrc: "/Sunrise Builders.png"
        },
        {
            name: "Rayo Racing",
            link: "https://www.rayoracing.com/",
            imgsrc: "/Rayo Racing.png"
        },
        {
            name: "Design Fusion",
            link: "https://www.roopalisethi.com/",
            imgsrc: "/DesignFusion.png"
        },
        {
            name: "Diletto Cake Shop",
            link: "https://zerrorstudios.wixsite.com/diletto",
            imgsrc: "/Diletto.png"
        },
        {
            name: "AMS Enterprise",
            link: "https://zerrorstudios.wixsite.com/ams-enterprises",
            imgsrc: "/AMS.png"
        },
        {
            name: "Ajmera Indikarting",
            link: "https://www.ajmeraindikarting.com/",
            imgsrc: "/AJIK.png"
        },
        {
            name: "High Definition",
            link: "https://www.highdefinition.in/",
            imgsrc: "/High Definition.png"
        },
        {
            name: "Indikarting",
            link: "https://www.indikarting.com/",
            imgsrc: "/IK.png"
        },
        {
            name: "For Future India",
            link: "https://www.forfutureindia.org/",
            imgsrc: "/For Future India.png"
        },
        {
            name: "PSC Bharat",
            link: "https://www.pscbharat.in/",
            imgsrc: "/PSC Bharat.png"
        },

    ]



    return (
        <>
            <Navbar mobnav={true} page="work" />
            <div className="proj-video-cont" data-scroll-section>
                <div className="pvt-cont" data-scroll>
                    <div className="pv-dots-cont"><div className="pv-dot"></div>
                        <div className="pv-dot"></div>
                        <div className="pv-dot"></div></div>
                    <div className="proj-circle"></div>
                    <div className="proj-name flex-all">{vidName}</div>
                </div>
                <div className="pv-cont">
                    <div className="pv-div">
                        <div className="pos-rel-full">
                            {
                                vidNo == 0 && <video loop autoPlay muted >
                                    <source src="/Hefty Art.mov" type="video/mp4" />
                                </video>
                            }
                            {
                                vidNo == 1 && <video loop autoPlay muted >
                                    <source src="/Sensei Hub.mov" type="video/mp4" />
                                </video>
                            }
                            {
                                vidNo == 2 && <video loop autoPlay muted >
                                    <source src="/Khelo Esports.mov" type="video/mp4" />
                                </video>
                            }
                            {
                                vidNo == 3 && <video loop autoPlay muted >
                                    <source src="/CareerSure.mov" type="video/mp4" />
                                </video>
                            }
                            {
                                vidNo == 4 && <video loop autoPlay muted >
                                    <source src="/TravGlow.mov" type="video/mp4" />
                                </video>
                            }
                        </div></div>
                </div>
            </div>
            <div data-scroll-section style={{ background: bg }} className="projects-cont">
                <div className="first-proj" >
                    <div className="proj1 proj proj-max" onMouseEnter={() => { setBg("#ff9d5e"); setVidName(vidlist[0]); setVidNo(0) }} onMouseLeave={() => { setBg("#f3f3f3") }} >
                        <div className='pos-rel-full'>
                            <div className="prd-cont">
                                <div className="prd-name flex-all">Hefty Art</div>
                                <Link href="https://hefty.art"><a target={"_blank"} ><div className="prd-arr flex-all"><BsArrowUpRight /></div></a></Link>
                            </div>
                            <div className='img-div'>
                                <img className='projimg1' src='iPad Air Mockup - Hefty7.png' />
                            </div>
                        </div>
                    </div>
                    <div className="proj2 proj proj-min" onMouseEnter={() => { setBg("#f7a2a7"); setVidName(vidlist[1]); setVidNo(1) }} onMouseLeave={() => { setBg("#f3f3f3") }} >
                        <div className='pos-rel-full'>
                            <div className="prd-cont">
                                <div className="prd-name flex-all">Sensei Hub</div>
                                <Link href="https://www.senseishub.com/"><a target={"_blank"} ><div className="prd-arr flex-all"><BsArrowUpRight /></div></a></Link>
                            </div>
                            <div className='img-div'>
                                <img className='projimg2' src="/Free 3-fold and Landscape Brochures Mockup.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="proj3 proj" onMouseEnter={() => { setBg("#2784ce"); setVidName(vidlist[2]); setVidNo(2) }} onMouseLeave={() => { setBg("#f3f3f3") }} >
                    <div className='pos-rel-full'>
                    <div className="prd-cont">
                                <div className="prd-name flex-all">Khelo Esports</div>
                                <Link href="https://khelo-esports.vercel.app/"><a target={"_blank"} ><div className="prd-arr flex-all"><BsArrowUpRight /></div></a></Link>
                            </div>
                        <div className='img-div'>
                            <img className='projimg3' src="/Free iPhone Xr - Khelo1.png" />
                        </div>
                    </div>
                </div>
                <div className="second-proj">
                    <div className="proj4 proj proj-min" onMouseEnter={() => { setBg("#a187e4"); setVidName(vidlist[3]); setVidNo(3) }} onMouseLeave={() => { setBg("#f3f3f3") }} >
                        <div className="pos-rel-full">
                        <div className="prd-cont">
                                <div className="prd-name flex-all">Career Sure</div>
                                <Link href="https://zerrorstudios.wixsite.com/careersure"><a target={"_blank"} ><div className="prd-arr flex-all"><BsArrowUpRight /></div></a></Link>
                            </div>
                            <div className='img-div'>
                                <img className='projimg4' src="/[PS] iPad Pro Free Scene.png" />
                            </div>
                        </div>
                    </div>
                    <div className="proj5 proj proj-max" onMouseEnter={() => { setBg("#ea741c"); setVidName(vidlist[4]); setVidNo(4) }} onMouseLeave={() => { setBg("#f3f3f3") }} >
                        <div className='pos-rel-full'>
                        <div className="prd-cont">
                                <div className="prd-name flex-all">TravGlow</div>
                                <Link href="https://www.travglowtrips.com/"><a target={"_blank"} ><div className="prd-arr flex-all"><BsArrowUpRight /></div></a></Link>
                            </div>
                            <div className='img-div'>
                                <img className='projimg5' src="/Galaxy S20 Ultra.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoList works={works} pro={false} bg={bg} />
            <div className="exs"></div>
        </>
    )
}

export default Projects