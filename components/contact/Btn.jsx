import React, { useState } from 'react'

const Btn = ({ word }) => {
    const [click, setClick] = useState(false);
    const [des, setDes] = useState(false);
    let func = () => {
        if (!click) {
            setClick(true);
        }
        else {
            if(!des)
            setDes(true);
            else
            setDes(false);
            // setTimeout(() => {
            //    
            // }, 400);
        }
    }
    let out = () => {
        if (click && des) {
            setDes(false);
            setClick(false);
        }
    }
    return (
        <>
            <div className='btn-oc'>
                <div className={`cont-need ${click ? des ? 'cont-uns' : "cont-s" : null}`} onMouseLeave={out} onClick={func}><div className="need-word">{word}</div></div>
            </div>
        </>
    )
}

export default Btn