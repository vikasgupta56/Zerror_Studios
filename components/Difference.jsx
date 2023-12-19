import React, { useEffect,useCallback } from 'react';
import Script from 'next/script'
import Router from 'next/router'
import { FaAngleDoubleRight,  } from 'react-icons/fa'
import { useLongPress } from 'use-long-press';


const Difference = () => {
    let timet = 1700;
    useEffect(() => {
        // timet = 1700;
        if(window.innerWidth<1450){
            // timet = 100;
        }

        let hoverfunc = () => {
            let area = document.getElementsByClassName('bwrel')[0];
            area.addEventListener('mouseenter', () => {
                let cursor = document.getElementById('custom-cursor');
                cursor.style.animation = 'bw 1s ease 0s 1, bwa 1s ease 1s infinite ';
            }
            )

        }
        let func = () => {
            var x;
            var y;
            let topf;
            let cursor = document.getElementById('custom-cursor');
            let bg = document.getElementsByClassName('diff-background')[0];
            window.addEventListener('mousemove', (e) => {
                x = e.clientX;
                y = e.clientY - bg.getBoundingClientRect().y;
                topf = bg.getBoundingClientRect().y;

                cursor.style.top = `${y}px`
                cursor.style.left = `${x}px`
            })

        }
        func()
        hoverfunc()
    }, [])


    
    let enter = () => {
        let rel = document.getElementsByClassName('bwrel')[0];
        let cursor = document.getElementById('custom-cursor');
        cursor.classList.add("small-cursor");
    }
    let leave = () => {
        let rel = document.getElementsByClassName('bwrel')[0];
        let cursor = document.getElementById('custom-cursor');
        cursor.classList.remove("small-cursor");

        // rel.style.cursor = "none";
    }
    let click = () => {
        let cursor = document.getElementById('custom-cursor');

        cursor.classList.remove('small-cursor');
        cursor.classList.add('big-cursor');
        // cursor.style.transition=' all 5s ease!important';
        let timer = 1700;
        if (window.screen.width >= 1400) {
            timer = 2100;
        }
        setTimeout(() => {
            Router.push('/home')
        }, timer);
    }

    let colorenter = () => {
        let btn = document.getElementsByClassName('skip')[0];
        btn.style.background = 'white';
        btn.style.color = 'black';
    }
    let colorleave = () => {
        let btn = document.getElementsByClassName('skip')[0];
        btn.style.background = 'rgba(255,255,255,.3)';
        btn.style.color = 'white';
    }
    const callback = useCallback(event => {
        Router.push('/home');
      }, []);

      const bind = useLongPress(callback , {
        // onStart: event => console.log('Press started'),
        // onFinish: event => console.log('Long press finished'),
        // onCancel: event => console.log('Press cancelled'),
        // onMove: event => console.log('Detected mouse or touch movement'),
        filterEvents: event => true, // All events can potentially trigger long press
        threshold: 1700,
        captureEvent: true,
        cancelOnMovement: false,
        detect: 'both',
      });
    


    return (
        <>

           
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" strategy="beforeInteractive" referrerpolicy="no-referrer"></Script>

            {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.2/gsap.min.js" integrity="sha512-kVlGhj2qFy+KBCFuvjBJTGUMxbdqJKs4yK2jh0e0VPhWUPiPC87bzm4THmaaIee3Oj7j6sDpTTgm2EPPiESqBg==" strategy="beforeInteractive" crossOrigin="anonymous" referrerpolicy="no-referrer"></Script>
<Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.2/CSSRulePlugin.min.js" integrity="sha512-nmbVSK2gya+HjrjgyAm6twWNbWJdb/VyyAH6JVYdW/CMZ3Fmpc4211e9F3iXLRRB6p2v2PlFNDUc5mAuHlkW7A==" strategy="beforeInteractive" crossOrigin="anonymous" referrerpolicy="no-referrer"></Script>
<Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.2/Draggable.min.js" integrity="sha512-5Kl75W1zLasI8nSnc+5zQc2MwwYUjwR6Ko9/0rDPXmP6pKaCZPf9C+JmV3HBV0jB6DERyCcMk0jPIPGjWSBr9Q==" strategy="beforeInteractive" crossOrigin="anonymous" referrerpolicy="no-referrer"></Script> */}

            <div className='bwrel'>
                <div className='skip flex-all' onClick={click}>
                    Skip<FaAngleDoubleRight />
                </div>
                <div className="pooo" onMouseEnter={enter} onMouseLeave={leave} >
                    <div className="pos-rel p-in">
                        <div className="p-skip" onMouseEnter={colorenter} onMouseLeave={colorleave} onClick={click}></div>
                    </div>
                </div>
                <div className='diff-background'>
                    <div className='cursor-hover'>
                    </div>
                    <div className='overflow-visible'>
                        <div className='diff-head'>
                            <div className='click'>Click </div>
                            <div className='mtop'>&amp; hold</div>
                        </div>
                        <div className='diff-p'>
                            Click and hold to see the magic : )
                        </div>
                        {/* <div className='flex-all dbc'></div> */}
                    </div>
                </div>
                <div id='custom-cursor' {...bind()}>
                </div>
            </div>

        </>
    )
}

export default Difference