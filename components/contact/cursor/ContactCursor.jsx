import React, { useEffect } from 'react'

const Cursor = () => {

    useEffect(() => {
        let outcursor = document.getElementsByClassName('outer-cursor')[0];
        let incursor = document.getElementsByClassName('inner-cursor')[0];
        let x;
        let y;
        window.addEventListener('mousemove', (e) => {
            x = e.clientX;
            y = e.clientY;
            // topf = bg.getBoundingClientRect().y;

            outcursor.style.top = `${y}px`
            outcursor.style.left = `${x}px`
            incursor.style.top = `${y}px`
            incursor.style.left = `${x}px`
        })

    }, [])


    return (
        <div className='cursor-cont'>
            {/* <div className="cursor-cont "> */}
                {/* <div className="pos-rel cw"> */}
                    <div className="outer-cursor"></div>
                    <div className="inner-cursor"></div>
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Cursor