import React from 'react'
import Landing from '../components/home/Landing'
import Responsiveness from '../components/home/Responsiveness'
import About from '../components/home/About';
import Head from 'next/head';
import Zerrorian from '../components/home/Zerrorian';
import GetItCode from '../components/home/GetItCode';
import Process from '../components/home/process/Process';
import Navbar from '../components/Navbar';
import Homework from '../components/home/Homework'
import Shit from '../components/home/Shit';
import Work from '../components/home/Work';
import Footer from '../components/home/Footer'
import Services from '../components/home/services/Services';
import Cursor from '../components/contact/cursor/ContactCursor';


const home = () => {
  return (
    <>
      <Head>

        <link rel="shortcut icon" href="/zerror studios.png" type="image/png" />
        <link rel="apple-touch-icon" href="/zerror studios.png" type="image/png" />

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name='author' content='Zerror Studios' />

        <link rel="icon" href="/favicon.ico" />
        <title>Zerror Studios</title>
        <meta
          name="description"
          property='og:description'
          content="Hello there. Zerror Studios is a design and development studio based in India. Got a minute? Click on
  those blue words up there to get started."
        />
        <meta name="image" property="og:image" content="https://d1fdloi71mui9q.cloudfront.net/uInFdo9pStCSUl3uFIkq_uX88Jif1NgOUPE9h" />
        <meta name="twitter:image" content='/zerror studios.png' />

        <link rel="canonical" href="https://www.zerrorstudios.com/" />
        <meta property="og:url" content="https://www.zerrorstudios.com/"></meta>
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content="Zerror Studios" />
        <meta
          name="title"
          property='og:title'
          content="Zerror Studios"
        />
        <meta
          name="twitter:title"
          content="Zerror Studios"
        />
        <meta name="twitter:description" content="Hello there. Zerror Studios is a design and development studio based in India. Got a minute? Click on
  those blue words up there to get started." />
      </Head>
      <div className='cnone'>
      <Navbar page={"home"} />
      <Cursor />
      <Landing />
      <Shit />
      <About />
      <Responsiveness />
      <Services />
      <GetItCode />
      <Homework />
      <Process />
      <Work />
      <Zerrorian />
      <Footer />
      </div>
    </>
  )
}

export default home