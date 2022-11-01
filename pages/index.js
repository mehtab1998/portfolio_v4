import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import FavIcon from '../public/assets/MR.png'

export default function Home() {
  return (
    <div>
    <Main />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    </div>
  )
}
