import React from 'react'
import Head from 'next/head'
import Contact from '../components/contact/Contact'
import Cover from '../components/Cover'
import ContactCursor from '../components/contact/cursor/ContactCursor'

const contact = () => {
  return (
    <>
      <Head>

        <link rel="shortcut icon" href="/zerror studios.png" type="image/png" />
        <link rel="apple-touch-icon" href="/zerror studios.png" type="image/png" />

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name='author' content='Zerror Studios' />

        <link rel="icon" href="/favicon.ico" />
        <title>Let&apos;s connect</title>
        <meta
          name="description"
          property='og:description'
          content="Questions? We'll put you on the right path.Ask about website pricing, app development, or anything else. We are at stand by,
          ready to help."
        />
        <meta name="image" property="og:image" content="/zerror studios.png" />
        <meta name="twitter:image" content='/zerror studios.png' />

        <link rel="canonical" href="https://www.zerrorstudios.com/contact" />
        <meta property="og:url" content="https://www.zerrorstudios.com/contact"></meta>
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content="Zerror Studios" />
        <meta
          name="title"
          property='og:title'
          content="Let's connect"
        />
        <meta
          name="twitter:title"
          content="Let's connect"
        />
        <meta name="twitter:description" content="Questions? We'll put you on the right path.Ask about website pricing, app development, or anything else. We are at stand by,
          ready to help." />
      </Head>

      <ContactCursor />
      <Cover />
      <Contact />
    </>
  )
}

export default contact