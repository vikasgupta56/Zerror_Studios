import React, { useState, useEffect, useCallback } from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import Script from 'next/script'
import { gsap } from "gsap/dist/gsap";
import Router from 'next/router';
import Link from 'next/link';
import { useLongPress } from 'use-long-press';

const VideoList = ({ works, pro, bg }) => {


    const [show, setShow] = useState(false)
    const [num, setNum] = useState(0);

    useEffect(() => {
        let video = document.getElementsByClassName('work-fix')[0];
        window.addEventListener('mousemove', (e) => {
            let x = e.clientX;
            let y = e.clientY;
            video.style.left = x + 'px'
            video.style.top = y + 'px'
        })
    }, [])
    useEffect(() => {
    let x,y;
    let workCont = document.getElementsByClassName('work-inner-cont')[0];
    let works = document.getElementsByClassName('home-work-div');
    window.addEventListener('mousemove',(e)=>{
        x = e.clientX;
        y = e.clientY;
    })
    window.addEventListener('scroll',()=>{
        if(workCont.getBoundingClientRect().top<y && workCont.getBoundingClientRect().bottom>=y){
            setShow(true);
        }
        else{
            setShow(false)
        }
        Array.from(works).forEach((work,index)=>{
            if(work.getBoundingClientRect().top<y && work.getBoundingClientRect().bottom>=y){
                setNum(index);
            }
        })
        
    })
    }, [])
    

    let enter = () => {
        let ch = document.getElementsByClassName('ch-cont')[0];
        let elm = document.getElementsByClassName('ch-inner')[0];
        ch.addEventListener('mousemove', (e) => {
            let x = e.clientX - elm.parentElement.getBoundingClientRect().left;
            let y = e.clientY - elm.parentElement.getBoundingClientRect().top;
            elm.style.top = y + 'px'
            elm.style.left = x + 'px';
        })
    }
    let leave = () => {
        gsap.to(".ch-inner", {
            duration: 1,
            ease: "ease",
            left: 0,
            top: 0

        })
    }
    const callback = useCallback(event => {
        Router.push('/work');
    }, []);

    const bind = useLongPress(callback, {
        // onStart: event => console.log('Press started'),
        // onFinish: event => console.log('Long press finished'),
        // onCancel: event => console.log('Press cancelled'),
        // onMove: event => console.log('Detected mouse or touch movement'),
        filterEvents: event => true, // All events can potentially trigger long press
        threshold: 2000,
        captureEvent: true,
        cancelOnMovement: false,
        detect: 'both',
    });




    return (
        <>
            <>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" strategy="beforeInteractive" referrerpolicy="no-referrer"></Script>

                <div className="work-fix" style={{ transform: show ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0)" }}>
                    <div className="work-fix-inner" style={{ transform: `translateY(-${num * 100}%)` }}>
                        {works.map((work, index) => {
                            return (
                                <div className="work-pic" key={index}>
                                    <img src={work.imgsrc} />
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="work-home-cont" style={!pro ? { backgroundColor: bg } : {}}>

                    <div className="work-inner-cont" onMouseEnter={() => { setShow(true) }} onMouseLeave={() => setShow(false)}>
                        {
                            works.map((work, index) => {
                                return (
                                    <div className='home-work-div' onMouseEnter={() => { setNum(index) }} key={index}>
                                        <Link href={work.link}>
                                            <a target={"_blank"}>
                                                <div className="hw-arrow-cont flex-all" >
                                                    <div className="pos-rel-full flex-all">
                                                        <div className="hwa-black"></div>
                                                        <BsArrowUpRight />
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                        {work.name}
                                    </div>
                                )
                            })
                        }

                    </div>


                </div>
                {
                    pro &&
                    <div className="ch-outer-cont">
                        <div className='ch-cont' onMouseEnter={enter} onMouseLeave={leave}>
                            <div className="ch-ch flex-all" >
                                <div className="pos-rel-full flex-all"><div className="pos-abs-full flex-all ch-inner" {...bind()}> Click &amp; hold</div></div></div>

                            <div className="ch-black"></div>
                            All work<div className='flex-all ch-arr'> <BsArrowUpRight /></div>

                        </div>
                    </div>
                }

            </>
        </>
    )
}

export default VideoList