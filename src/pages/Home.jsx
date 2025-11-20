import { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  const [lang, setLang] = useState('en')
  const highlightsRef = useRef(null)

  return (
    <div className="bg-slate-900 text-slate-100">
      <Navbar lang={lang} setLang={setLang} />
      <main className="pt-16">
        <Hero onExplore={() => highlightsRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        <div ref={highlightsRef} />
        <Highlights />
        <About />
      </main>
      <Footer />
    </div>
  )
}
