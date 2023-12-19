import React, { useEffect } from 'react'
import { gsap } from "gsap/dist/gsap";
import { BsArrowDownRight } from "react-icons/bs";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Shit = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (window.innerWidth > 425) {
            let t1 = gsap.timeline({
                // yes, we can add it to an entire timeline!
                scrollTrigger: {
                    trigger: ".shit-outer",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            });
            t1.from(".shit-overflow", {
                y: 110,
                opacity: 0
            })
            t1.to(".shitout-cont", {
                y: -200
            }
            )
            t1.to(".shit-overflow", {
                y: -110,
                opacity: 0
            })
            t1.to(".simg-cont", {
                backgroundColor: "#111517"
            })
        }
        let h = window.innerHeight * .08
        gsap.to(".shitimg", {
            scrollTrigger: {
                trigger: ".shit-outer",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                // markers:true

            },
            rotation: 15,
            y: h
        })
    }, [])
    return (
        <>
            <div className="shit-outer">

                <div className="sticky-shit">
                    <div className="simg-cont">
                        <div className="shit-cont">
                            <div className="shit-arrow">
                                <BsArrowDownRight />
                            </div>
                            <div className='shit-overflow'>
                                <div className='shitout-cont'>
                                    {/* <div className="shit-first">We do <div className='swap-cont'><div className="swap-one">Design.</div><div className="swap-two">Devevlopment.</div></div></div> */}
                                    <div className="shit-first">Fueled by <div className='swap-cont'>Creativity.</div></div>
                                    <div className="shit-first">Powered by <div className='swap-cont'>Skills.</div></div>
                                    <div className="shit-first">Driven by <div className='swap-cont'>Design.</div></div>

                                </div>
                            </div>
                        </div>
                        <div className="simg-inner">
                            <div className="pos-rel">
                                <div className="simg">

                                    <img src="/main1.png" className='shitimg' />

                                </div>
                                <div className="simg">

                                    <img src="/main2.png" className='shitimg' />

                                </div>
                                <div className="simg">


                                    <img src="/main3.png" className='shitimg' />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shit