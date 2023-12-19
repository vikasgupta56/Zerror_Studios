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
  const links = ["/RC Hinduja.mov","/Hefty Art.mov", "/Sensei Hub.mov", "/Khelo Esports.mov", "/IR Esports.mov","/Harshad Dhage.mov", "/TravGlow.mov" , "/HIndustan Talkies.mov", "/CareerSure.mov", "/Rayo Racing.mov","/Sensei Hub.mov"]

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