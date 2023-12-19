import React, { useEffect } from 'react'
import { gsap } from "gsap/dist/gsap";
import { BsArrow90DegDown } from 'react-icons/bs'
import Cover from '../Cover';

const NewLanding = () => {
  useEffect(() => {
    gsap.to(".zerror", {
      y: 0,
      duration: 1.,
      delay: 2.8,
      ease: "power4",
      scale: 1
      // stagger: 0.05
    })
    gsap.to(".studios", {
      y: 0,
      delay: 3.1,
      duration: 1.3,
      ease: "power4",
      scale: 1
      // stagger: 0.05
    })
    gsap.to(".creative", {
      delay: 4.3,
      duration: 1,
      ease: "power3",
      opacity: 1
    })
    gsap.to(".design-cont", {
      delay: 4.3,
      duration: 1,
      ease: "ease",
      opacity: 1
    })
    gsap.to(".time-cont", {
      delay: 4.3,
      duration: 1,
      ease: "ease",
      opacity: 1
    })
    gsap.to(".arrow-abs", {
      delay: 4.3,
      duration: 1,
      ease: "ease",
      opacity: 1
    })

  }, [])


  return (
    <>
      <div className="landing-cont">
        {/* <div className="pli-cont flex-all">
          <div className="pli-cont-inside flex-all">
          {
            tags.map((tag,index)=>{
              return (
                <div className='flex-all' key={index}>
                <div className='tag-name' >{tag}</div>
                <div className="tag-dot"></div>
                </div>
              )
            })
          }
        </div>
        </div> */}
        <Cover />
        {/* <Particles /> */}
        <div className="zerror-cont">
          <div className="z-cont">
            {/* <div className="design-cont">
              <div className='first-p'>Creative</div><div className='second-p'> Development agency</div>
            </div> */}
            <div className="first-word z-word">
              <div className="arrow-abs flex-all"><BsArrow90DegDown /></div>
              <div className='z-height'>
                <div className="zerror">Zerror</div>
              </div>
            </div>
          </div>
          <div className="z-cont">
            <div className="time-cont">
              <div className="time-inner">Our local time (GMT :5:30)</div>
              <div className="time-inner">Let&apos;s make some good shit</div>
            </div>
            <div className="second-word z-word">
              <div className="creative">Creative</div>
              <div className='z-height'>
                <div className="studios">Studios</div>
              </div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewLanding