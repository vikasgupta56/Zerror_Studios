import Difference from '../components/Difference'
import AOS from "aos";
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Head from 'next/head';
import Router from 'next/router';

export default function Home() {
  const [touch, setTouch] = useState(true);
  useEffect(() => {

    AOS.init({});
    var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if (supportsTouch) {
      Router.push('/home')
    }
    else {
      setTouch(false);
    }
  }, [])


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
        <meta name="image" property="og:image" content="/zerror studios.png" />
        <meta name="twitter:image" content='/zerror studios.png' />

        <link rel="canonical" href="https://www.zerrorstudios.com/" />
        <meta property="og:url" content="https://www.zerrorstudios.com/" />
        <meta property="og:type" content="website" />
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
      {!touch &&
        <Difference />
      }
    </>


  )
}