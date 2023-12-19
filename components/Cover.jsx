import React,{useEffect} from 'react'
import { gsap } from "gsap/dist/gsap";

const Cover = () => {
    useEffect(() => {
        gsap.to(".cover-first", {
          height: 0,
          duration: 1.5,
          delay:.8,
          ease: "expo",
        })
        gsap.to(".cover-second", {
            height: 0,
            duration: 1.8,
            ease: "power4",
            delay:1
          })
    }, [])

    return (
        <>
            <div className="cover-first cover"></div>
            <div className="cover-second cover"></div>
            {/* <div className="cover-third cover"></div> */}
        </>
    )
}

export default Cover