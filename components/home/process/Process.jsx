import React, { useEffect, useState } from 'react'
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { BiSearchAlt2 } from 'react-icons/bi'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { IoIosGitNetwork } from 'react-icons/io'
import { VscServerProcess } from 'react-icons/vsc'
import { BiTimeFive } from 'react-icons/bi'
import Image from 'next/image'
import { BsCheckCircle } from 'react-icons/bs'



const Process = () => {


    useEffect(() => {

        let func = () => {
            let process = document.getElementsByClassName('process-bg')[0];
            let dots = document.getElementsByClassName('dots');
            let logo = document.getElementsByClassName('process-logo');
            let title = document.getElementsByClassName('pro-title');
            let bool = true
            window.addEventListener('scroll', () => {
                let top = process.getBoundingClientRect().y;
                if (top <= window.screen.height / 3) {
                    if (bool) {
                        Array.from(dots).forEach((dot, index) => {
                            dot.classList.add('dota' + index);
                        });
                        setTimeout(() => {
                            Array.from(logo).forEach((dot, index) => {
                                dot.style.animation = `expand .4s ease ${(index * .3)}s 1 both`
                            });
                            setTimeout(() => {
                                Array.from(title).forEach((dot, index) => {
                                    dot.style.animation = `titleexpand .3s ease ${(index * .3)}s 1 both`
                                });
                            }, 1800);
                            bool = false
                        }, 2000);

                        setTimeout(() => {

                            bool = false
                        }, 3500);
                    }
                }


            })
        }
        func()
    })

    let po = () => {
        let dots = document.getElementsByClassName('dots');
        let logo = document.getElementsByClassName('process-logo');

        Array.from(dots).forEach((dot, index) => {
            dot.classList.toggle('dota' + index);
        });
        Array.from(logo).forEach((dot, index) => {
            dot.style.transform = 'scale(0)'
        });
    }
    const process = [
        {
            title: "Research",
            p: "Until iron is hot with the research, our design head specialists never command the designers to hit.",
            logo: <BiSearchAlt2 />
        },
        {
            title: "Idea",
            p: "Ideation is a very necessary step to optimize the process. An idea must be well-versed with the research",
            logo: <HiOutlineLightBulb />
        }, {
            title: "Strategy",
            p: "Strategic planning is a crucial step to deliver the projects on time. Never underestimate the strategy makers.",
            logo: <IoIosGitNetwork />
        },
        {
            title: "Process",
            p: "Processing the project with detailed research, ideas, and pre-planning is always a cherry on the cake.",
            logo: <VscServerProcess />
        }, {
            title: "Time",
            p: "We value your time. Playing with client’s deadlines is not our area. Timeline delivery is our First priority.",
            logo: <BiTimeFive />
        }, {
            title: "Goal",
            p: "Our goal-oriented vision always gives us fruitful results. Connect with us to achieve your design goals.",
            logo: <BsCheckCircle />
        },
    ]
    return (
        <>
            <div className="process-bg">
                <div className="process-bakchod">
                    <div className='ser-title ' >
                        <div className='main-title  wbg' data-scroll data-scroll-speed="6">Our Process</div>
                        <p>Our chronological Process always starts with well-driven research, consolidating the ideas, preparing a strategy, processing the work, timely delivery, and then, hitting the goal.</p>                {/* <p></p> */}
                    </div>
                    <div className=" process-cont">
                        {/* <div className='dots-cont'> */}
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        {/* </div> */}
                        <div className="dash-cont">
                            <div className="dash"></div>
                        </div>
                        {
                            process.map((process, index) => {
                                return (
                                    <div className={`process-div ${'pro' + index}`} key={index}>
                                        <div className="process-logo flex-all">{process.logo}</div>
                                        <div className="pro-title"><div className='circ'><svg
                                            className="BorderText_around__C9qhM"
                                            preserveAspectRatio="none"
                                            width={140}
                                            height={74}
                                            viewBox="0 0 110 54"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M46.4441 8.97133C26.9879 10.8401 11.6872 16.9928 4.46435 31.1899C2.06959 35.8969 0.720882 41.0995 5.64058 45.2663C13.3403 51.7875 26.2002 52.6929 36.9152 52.3129C52.2503 51.7691 67.7641 49.6309 81.0704 43.743C92.4921 38.689 106.16 30.2755 107.912 19.6561C110.92 1.42138 65.3825 2.97772 51.2492 2.12367"
                                                stroke="currentColor"
                                                strokeWidth={3}
                                                strokeLinecap="round"
                                                style={{ strokeDashoffset: -246, strokeDasharray: "245px, -2px" }}
                                            />
                                        </svg>
                                            {process.title}</div></div>
                                        <div className="pro-p">
                                            {process.p}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>


                {/* <div className="clients-bg">
                    <div className='clients-title'>
                        <div className='b-t process-title'>Businesses we have empowered digitally!</div>

                        <div className='c-t'>
                            Our innovative business framework is faster, superior, tested way to unlock your digital
                        </div>


                    </div>
                    <div className='clients-container flex-all'>
                        {
                            clients.map((client, index) => {
                                return (
                                    <div className="client" key={index}>
                                        <div className="client-info flex-all">
                                            <div className="client-title">{client.title}</div>
                                            <div className="client-area">{client.area}</div>
                                        </div>

                                        {client.imgsrc && <Image src={client.imgsrc} layout="fill" />}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
                            <div className="bg-line"></div>

            </div>
        </>
    )
}

export default Process