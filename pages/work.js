import React from 'react'
import Head from 'next/head'
import Cover from '../components/Cover'
import Projects from '../components/Projects'
import Cursor from '../components/contact/cursor/ContactCursor'

const projects = () => {

  return (
    <>
      <Head>

        <link rel="shortcut icon" href="/zerror studios.png" type="image/png" />
        <link rel="apple-touch-icon" href="/zerror studios.png" type="image/png" />

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name='author' content='Zerror Studios' />

        <link rel="icon" href="/favicon.ico" />
        <title>Discover our work</title>
        <meta
          name="description"
          property='og:description'
          content="Across gaming, technology, lifestyle and retail we have worked with a
  number of industries. Discover our projects."
        />
        <meta name="image" property="og:image" content="/zerror studios.png" />
        <meta name="twitter:image" content='/zerror studios.png' />

        <link rel="canonical" href="https://www.zerrorstudios.com/work" />
        <meta property="og:url" content="https://www.zerrorstudios.com/work"></meta>
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content="Zerror Studios" />
        <meta
          name="title"
          property='og:title'
          content="Discover our work"
        />
        <meta
          name="twitter:title"
          content="Discover our work"
        />
        <meta name="twitter:description" content="Across gaming, technology, lifestyle and retail we have worked with a number of industries. Discover our projects." />
      </Head>
      <Cursor />
      <Cover />
      <Projects />
    </>
  )
}

export default projects