import React, { useEffect } from 'react'
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Homework = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hm", {
      scrollTrigger: {
        trigger: ".hm",
        start: "10% top",
        end: "30% top",
        scrub: true,
        // markers:true
      },
      backgroundColor: "#f3f3f3",
    })
    let move = window.innerWidth * .2;
    if (window.innerWidth < 900) {
      move = window.innerWidth * 1
    }
    gsap.to(".hm-one", {
      scrollTrigger: {
        trigger: ".hm",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        // markers:true
      },
      x: move,
    })
    gsap.to(".hm-two", {
      scrollTrigger: {
        trigger: ".hm",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        // markers:true
      },
      x: -move,
    })
    gsap.to(".process-bg", {
      scrollTrigger: {
        trigger: ".hm",
        start: "10% top",
        end: "30% top",
        scrub: true,
        // markers:true
      },
      backgroundColor: "#f3f3f3",
    })

  }, [])
  const links = ["https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/RC+Hinduja.mov","https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/Hefty+Art.mov", "https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/Sensei+Store.mov", "https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/Khelo+Esports.mov", "https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/IR+Esports.mov","https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/Harshad+Dhage.mov", "https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/TravGlow.mov" , "https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/HIndustan+Talkies.mov", "https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/CareerSure.mov", "https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/Rayo+Racing.mov","https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/Sensei+Hub.mov"]

  return (
    <>
      <div className="hm flex-all">
        <div className="hm-cont hm-one flex-all">
          {
            links.slice(0, 5).map((link, index) => {
              return (
                <div className="work-oc" key={index}>
                  <div className="work-video-cont" >
                    <video loop autoPlay muted >
                      <source src={link} type="video/mp4" />
                    </video>
                  </div>
                </div>
              )

            })
          }
        </div>
        <div className="hm-cont hm-two flex-all">
          {
            links.slice(5, 10).map((link, index) => {
              return (
                <div className="work-oc" key={index}>
                  <div className="work-video-cont">
                    <video loop autoPlay muted >
                      <source src={link} type="video/mp4" />
                    </video>
                  </div>
                </div>
              )

            })
          }
        </div>
      </div>
    </>
  )
}

export default Homework