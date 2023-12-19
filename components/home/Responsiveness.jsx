import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Responsiveness = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to(".phone-scale", {
            scrollTrigger: {
                trigger: ".responsive-wrapper-ui",
                start: "top top",
                end: "28% top",
                scrub: true,
            },
            scale:1,
        }
        )
        gsap.to(".phone-scale", {
            scrollTrigger: {
                trigger: ".responsive-wrapper-ui",
                start: "28% top",
                end: "45% top",
                scrub: true,
            },
            rotation:90,
        }
        )
        gsap.to(".phone-video-cont", {
            scrollTrigger: {
                trigger: ".responsive-wrapper-ui",
                start: "28% top",
                end: "45% top",
                scrub: true,
            },
            rotation:-90,
            scale:2
        }
        )
        // let tx = window.innerWidth;
        // if(window.innerWidth<=768){
        //     tx = 3.8*window.innerWidth;
        // }
        gsap.to(".left-word", {
            scrollTrigger: {
                trigger: ".responsive-wrapper-ui",
                start: "45% top",
                end: "bottom bottom",
                scrub: true,
            },
            x:0,
        }
        )
        gsap.to(".right-word", {
            scrollTrigger: {
                trigger: ".responsive-wrapper-ui",
                start: "45% top",
                end: "bottom bottom",
                scrub: true,
            },
            x:0,
        }
        )
    }, [])
    

    return (
        <>
            <div className='responsive-wrapper-ui'>
                <div className='ui-sticky' data-scroll-sticky>
                    <div className='ui-wrapper'>
                        <div className='phone-container-abs'>
                            <div className="pos-rel-full phone-scale">
                                <Image id="mobile-frame" layout="fill" className='phone-img' src='/phone.png' />
                                <div className="pos-abs-full phone-video-cont">
                                    <video loop autoPlay muted >
                                        <source src='https://www.blublustudios.com/images/video/main.mp4' type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className='responsive-container flex-all'>
                            <div className='res-cont res-left'>
                                <div className='res-left-word'>
                                    <div className='word-rel pos-rel-full'>
                                        <div className='left-word'>
                                                Next level
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='res-cont res-right'>
                                <div className='res-right-word'>
                                    <div className='word-rel pos-rel-full'>

                                        <div className='right-word'>
                                            Dynamic websites
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Responsiveness