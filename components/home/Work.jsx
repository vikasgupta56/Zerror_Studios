import React from 'react'
import VideoList from './VideoList';


const Work = () => {
    
    let works = [
        {
            name: "Hefty Art",
            link: "https://hefty-arts.vercel.app/",
            imgsrc:"https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/Hefty+Art.png"
        },
        {
            name: "Hindustan Talkies",
            link: "https://hindustan-talkies.vercel.app/",
            imgsrc:"https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/Hindustan+Talkies.png"
        },
        {
            name: "Khelo Esports",
            link: "https://khelo-esports.vercel.app/",
            imgsrc:"https://zerrorstudios.s3.ap-south-1.amazonaws.com/public/Khelo+Esports.png"
        },
    ]
  
  
    return (
       <>
       <VideoList works={works} pro={true} />
       </>
    )
}

export default Work