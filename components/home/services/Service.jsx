import React, { useEffect } from 'react'

const Service = ({ service }) => {

    useEffect(() => {
        let func = () => {
            var x;
            var y;
            var lastScrolledTop = 0;


            let cursor = document.getElementById('custom-cursor');
            let explore = document.getElementsByClassName('explore');
            let bg = document.getElementsByClassName('diff-background')[0];
            window.addEventListener('mousemove', (e) => {
                x = e.clientX;
                y = e.clientY
                //  - bg.getBoundingClientRect().y;

                Array.from(explore).forEach((elm) => {
                    elm.style.top = `${y}px`
                    elm.style.left = `${x}px`
                })

            })

          
        }
    })


    return (
        <>
            <div className='service'>
                <div className='service-logo' style={{backgroundColor:service.color}}>
{service.logo || ""}
                </div>
                <div className='service-title'>
                    {service.title}
                </div>
                <div className='service-p'>
                    {service.p}
                </div>

            </div>
        </>
    )
}

export default Service