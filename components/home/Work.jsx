import React from 'react'
import VideoList from './VideoList';


const Work = () => {
    
    let works = [
        {
            name: "Hefty Art",
            link: "https://hefty-arts.vercel.app/",
            imgsrc:"/Hefty Art.png"
        },
        {
            name: "Hindustan Talkies",
            link: "https://hindustan-talkies.vercel.app/",
            imgsrc:"/Hindustan Talkies.png"
        },
        {
            name: "Khelo Esports",
            link: "https://khelo-esports.vercel.app/",
            imgsrc:"/Khelo Esports.png"
        },
    ]
  
  
    return (
       <>
       <VideoList works={works} pro={true} />
       </>
    )
}

export default Work