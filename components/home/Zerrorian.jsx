import React, { useState, useEffect } from 'react';
import tilt from '../../public/tilted-phone-new.png';
import Image from 'next/image';
import { BsClock } from 'react-icons/bs'
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Zerrorian = () => {
    const [light, setLight] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [y, setY] = useState(false)
    const hours = 0;
    const projects = 0;
    const clients = 0;
    const time = 0;


    useEffect(() => {


        let height = document.getElementsByClassName('we-img-cont')[0].getBoundingClientRect().height;
        let width = document.getElementsByClassName('we-img-cont')[0].getBoundingClientRect().width;
        let black = document.getElementsByClassName('black-div')[0];



        let scaled = false;


        let func = () => {
            let cont = document.getElementsByClassName('we-img-cont')[0];
            let zerror = document.getElementsByClassName('we-cont')[0];
            let title = document.getElementsByClassName('we-title')[0];
            // let bg = do
            // let transtwo = document.getElementsByClassName('trans-cont')[1];
            let bool = false;
            var x;
            window.addEventListener('mousemove', (e) => {
                if (scaled) {
                    x = e.clientX;

                    let size = window.screen.width;
                    let bool = 0.1 * size < x && x < 0.9 * size
                    if (bool) {
                        black.style.left = `${x}px`;
                        cont.style.left = `${x}px`
                    }

                }
            })
            window.addEventListener('scroll', () => {
                if (zerror.getBoundingClientRect().y < window.screen.height / 2) {
                    title.style.display = 'block';

                    setTimeout(() => {
                        if (!clicked) {
                            setClicked(true)
                            setLight(true)
                        }
                    }, 6000);
                    if (!scaled) {
                        setTimeout(() => {
                            cont.style.transform = ' scale(1)'
                            black.style.transform = ' scale(1)'
                            setY(true);
                            scaled = true;
                            bool = true;
                        }, 3000);
                    }
                }

            })
        }
        func()
    }, [])


    return (
        <>
            <div className='white-bg' >
                <div className='we-cont '>
                    <div className='we-title'>

                        <svg viewBox="0 0 1350 600">
                            <text x="50%" y="50%" fill="transparent" textAnchor='middle' className="svg-text">
                                We are Zerrorrian
                            </text>

                        </svg>
                    </div>
                    <div className='black-div'>

                    </div>

                    <div className='we-img-cont' >
                        <div className='pos-rel zerimg'>
                            <Image src={tilt} layout="fill" />

                        </div>

                    </div>

                </div>
                <div className='color-switch'>
                </div>

                <div className='zerror-about' data-aos-offset="90"
                    data-aos-easing="ease-in-out-back"
                    data-aos-duration="1000"
                    data-aos-once={true}
                    data-aos-delay="3000"
                    data-aos="fade-up">
                    We call our community of Zerror Studios employees, clients, and partners &quot;Zerrorians.&quot; We&apos;re a one-of-a-kind. We meet our clients wherever they are on their paths to change and partner with them to create lasting value in every direction.

                    We deliver on the promise of technology and we focus on specific goals that add up to a larger vision. We value transparency and honest communication with our clients. We believe when our customers succeed, we succeed.
                </div>
            </div>
        </>
    )
}

export default Zerrorian