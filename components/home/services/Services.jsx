import React from 'react';
import { GrAppsRounded } from 'react-icons/gr'
import { BiCodeBlock } from 'react-icons/bi';
import { BiCartAlt } from 'react-icons/bi';
import { MdOutlineManageSearch } from 'react-icons/md';
import { MdWeb } from 'react-icons/md';
import { FaWix } from 'react-icons/fa'

import Service from './Service';

const Services = () => {
    const green = "#1db954"
    const services = [
        {
            title: "UI/UX Design",
            logo: <MdWeb />,
            p: "We design consumer experience in a way that attracts loyalty to your brand. Our UI/UX designers help brands and enterprises navigate any and all facets of the digital landscape, keeping the focus on customers and being able to deliver tangible business results.",
            color: green
        },
        {
            title: "Website Development",
            logo: <BiCodeBlock />,
            p: "Website design & development is a combination of both, experience  and approach. We start by tackling what you want to convey, the problem you want to solve, or the reaction you want to provoke. We then utilize an agile methodology to execute rapidly.",
            color: green

        },
        {
            title: "App Development",
            logo: <GrAppsRounded />,
            p: "The world of mobile apps is fast moving with over 748 million smartphone users relying on their daily needs with a mobile app. Get your mobile app developed with the best industry-standards to give your users a fulfilling experience.",
            color: green,

        },
        {
            title: "E-commerce Enablement",
            logo: <BiCartAlt />,
            color: green,
            p: "E-commerce plays a vital role in gaining and retaining customers. Incorporate directory management or have more targeted marketing behind it, your business can do all of these and more with the right e-commerce solution.",
        },
        {
            title: "Wix Development",
            logo: <FaWix />,
            p: "Wix empowers businesses to bring their ideas to life. It’s intuitive technology and powerful built-in features combined with our creativity gives you the website you’re proud of. We design, manage and grow your online presence—all from one powerful platform.",
            color: green
        }, {
            title: "SEO Services",
            logo: <MdOutlineManageSearch />,
            p: "Our team has created more than 80 projects. Thus, we have scrutinized the patterns of user behavior. This has enabled us to achieve maximum efficiency in solving our client’s problems through SEO.",
            color: green
        }
    ]
    return (
        <>

<div className='webs-container'>
        <div className='flex-all webs-up'>

          <div className='ser-up'>
            <div className='ser-inside'>
              <div className='ser-title' >
                <div className='serve process-title' data-scroll data-scroll-speed="6">Our Expertise</div>
                <p>We help you translate a simple idea into an exotic digital design transformation vision.</p>
                {/* <p></p> */}
              </div>
              <div className='services-container'>
                {services.map((service, index) => {
                    return (
                        <Service key={index} service={service} />
                    )
                })}
            </div>
            </div>
          </div>
        </div>
    </div>

           
        </>
    )
}

export default Services