import React, { useEffect } from 'react';
import { BsLaptopFill,BsEyeglasses, BsWhatsapp, BsFillDice6Fill, BsFillEmojiHeartEyesFill, BsFillEnvelopeFill, BsFillMoonFill, BsFillPaletteFill, BsFillCreditCardFill, BsFillCursorFill, BsFillClockFill, BsFillCloudCheckFill, BsInstagram, BsFillChatSquareDotsFill } from 'react-icons/bs';
import { FaLaptop,FaNodeJs,FaReact,FaPlaystation,FaItunesNote,FaHotjar } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import Image from 'next/image';
import pictureone from '../../public/1.png'
import picturetwo from '../../public/2.png'
import picturethree from '../../public/3.png'
import picturefour from '../../public/4.png'
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const GetItCode = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let target = '.code-cont';
        if(window.innerWidth<768){
            target= '.code-right';
        }

        let t1 = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
                trigger: target,
                // pin: true,   // pin the trigger element while active
                start: "top top",
                // endTrigger: ".land-video-cont",// when the top of the trigger hits the top of the viewport
                end: "bottom bottom", // end after scrolling 500px beyond the start
                scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                // markers:true
            }
        });
        t1.to(".x", {
            height: 0
        }
        )
        t1.to(".y", {
            height: 0
        }
        )
        t1.to(".z", {
            height: 0
        }
        )
        // t1.to()
    }, [])

    let code = [];
    let svg = [];
    for (let i = 0; i <= 3; i++) {
        svg.push(<>
            <BsLaptopFill />
            <FaLaptop />
            <BsFillChatSquareDotsFill />
            <BsFillCloudCheckFill />
            <BsFillClockFill />
            <BsFillCursorFill />
            <BsFillCreditCardFill />
            <BsFillDice6Fill />
            <BsFillEmojiHeartEyesFill />
            <BsFillEnvelopeFill />
            <BsFillMoonFill />
            <BsFillPaletteFill />
            <BsWhatsapp />
            <BsInstagram />
            <BsEyeglasses />
            <FaHotjar />
            <FaItunesNote />
            <FaPlaystation />
            <FaReact /></>)
    }
    for (let i = 0; i <= 30; i++) {
        code.push(<div className='code-svg'>
            {svg}
        </div>)
    }


    useEffect(() => {
        let svgs = document.getElementsByClassName('code-svg');
        Array.from(svgs).map((svg, index) => {
            svg.style.left = `-${index * 5}%`;
        })
    }, [])


    return (
        <>
            <div className='codemar'></div>
            <div className='code'>
                <div className='code-bg-wrapper'>
                    {/* <div className='title-code flex-all'>
                    <div className='getcode' >Get It <span className='color'>Code.</span></div>
                </div> */}
                    <div className='code-bg'>

                        {code}
                    </div>
                </div>
                <div className='code-it'>
                    <div className='title-code flex-all'>
                        <div className='getcode' data-aos-offset="90"
                            data-aos-easing="ease-in-out-back"
                            data-aos-duration="1000"
                            data-aos="fade-up" >Get It <span className='color'>Code.</span></div>
                    </div>


                    <div className='flex-all code-cont'>
                        <div className='bottom-shadow-code'></div>
                        <div className='code-left'>
                            <div className='p-cont'>
                            <div className="p-one">
                                    <div className='img-side'>
                                        <div className='p-title'>
                                            We code it

                                        </div>
                                      <div className='gc-p'>  <span className='pspan'>We focus on creating dynamic websites
                                        </span> with a sustainable backend and easy to use database which delivers a great e-commerce and business friendly websites
                                        </div>
                                    </div>
                                </div>
                                <div className="p-one ">
                                    <div className='img-side'>
                                        <div className='p-title'>
                                            We build it awesome.
                                        </div>
                                        <div className='gc-p'>
                                            <span className='pspan'>Get your website a beautiful frontend</span> delivering a great UI/UX thus increasing the traffic in your website .
                                        </div>
                                    </div>
                                </div>
                                <div className="p-one second-slide">
                                    <div className='img-side'>

                                        <div className='p-title'>
                                            We keep it up-to-date
                                        </div>
                                        <div className='gc-p'> Always built with the modern up-to-date<span className='pspan'>&nbsp;technologies and frameworks to keep you ahead.</span>
                                        </div>
                                        <div className='icons-cont'>
                                            <div className='icon-cont flex-all'>
                                                <FaReact />
                                                <div className='abs-icon'>
                                                    <div className='inner-icon flex-all'>
                                                        <FaReact id="react-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='icon-cont flex-all'>
                                                <SiFirebase />
                                                <div className='abs-icon'>
                                                    <div className='inner-icon flex-all'>
                                                        <SiFirebase id="firebase-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='icon-cont flex-all'>
                                                <DiMongodb />
                                                <div className='abs-icon'>
                                                    <div className='inner-icon flex-all'>
                                                        <DiMongodb id='mongo-icon' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='icon-cont flex-all'>
                                                <FaNodeJs />
                                                <div className='abs-icon'>
                                                    <div className='inner-icon flex-all'>
                                                        <FaNodeJs id='node-icon' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-one third-slide">
                                    <div className='img-side'>

                                        <div className='p-title'>
                                            We make it easy.
                                        </div>
                                        <div className='gc-p'>
                                            <span className='pspan'>Smooth and clean code writing</span>to debug it quick, which never let your website stops even for a second.
                                        </div>
                                    </div>
                                </div>
                               

                            </div>
                        </div>
                        <div className='code-right'>
                            <div className='code-div'>
                                <div className='code-img-wrapper'>
                                    <div className='lap-img-cont x'>
                                        <div className='laprel'>
                                            <Image src={pictureone} layout="fill" />
                                        </div>
                                    </div>
                                    <div className='lap-img-cont y'>
                                        <div className='laprel'>
                                            <Image src={picturetwo} layout="fill" />
                                        </div>                                    </div>
                                    <div className='lap-img-cont z'>
                                        <div className='laprel'>
                                            <Image src={picturethree} layout="fill" />
                                        </div>                                    </div>
                                    {/* <Image src={pictureone} layout="fill" /> */}
                                    <div className='lap-img-cont '>
                                        <div className='laprel'>
                                            <Image src={picturefour} layout="fill" />
                                        </div>                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div></>
    )
}

export default GetItCode