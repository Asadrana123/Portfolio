import Head from 'next/head';
import React from 'react';
import Navbar from "../components/Navbar"
import  Main from "../components/Main"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

 function Home() {
  return (
    <div>
      <Head>
        <title>Asad Lukman</title>
        <meta name="description" content="generative" />
        <link rel="icon"/>
      </Head>
      <Navbar />
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
