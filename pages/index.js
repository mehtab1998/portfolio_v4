import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import FavIcon from '../public/assets/MR.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mehtab | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href={FavIcon} />
      </Head>
    <Main />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    </div>
  )
}
