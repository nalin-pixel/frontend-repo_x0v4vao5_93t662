import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Placeholder from './pages/Placeholder'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Placeholder title="About Ethiopia" blurb="Origins, civilizations, and enduring legacy — an interactive overview of Ethiopia’s past and present." image="https://images.unsplash.com/photo-1582955428085-1c4bebb436b5?q=80&w=1600&auto=format&fit=crop" />} />
      <Route path="/culture" element={<Placeholder title="Culture & Traditions" blurb="Music, dance, festivals, languages, and the intimate ritual of coffee." image="https://images.unsplash.com/photo-1520975693416-35a3cb1e1bf0?q=80&w=1600&auto=format&fit=crop" />} />
      <Route path="/nature" element={<Placeholder title="Natural Beauty & Landscapes" blurb="Simien peaks to Danakil fire — dramatic terrains and diverse wildlife." image="https://images.unsplash.com/photo-1605275236161-4ccba1e9770a?q=80&w=1600&auto=format&fit=crop" />} />
      <Route path="/history" element={<Placeholder title="Historical Sites & Monuments" blurb="Lalibela, Gondar, Aksum — stones that speak across centuries." image="https://images.unsplash.com/photo-1583422409515-4c57a1b79966?q=80&w=1600&auto=format&fit=crop" />} />
      <Route path="/travel" element={<Placeholder title="Travel & Experiences" blurb="Curated routes, regional guides, and immersive tours for every traveler." image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop" />} />
      <Route path="/gallery" element={<Placeholder title="Gallery" blurb="High-resolution photography — landscapes, portraits, and festivals." image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop" />} />
      <Route path="/events" element={<Placeholder title="Events & News" blurb="Festivals, exhibitions, and cultural calendars across Ethiopia and the diaspora." image="https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?q=80&w=1600&auto=format&fit=crop" />} />
      <Route path="/info" element={<Placeholder title="Visitor Information" blurb="Visas, etiquette, safety, and practical tips for a respectful journey." image="https://images.unsplash.com/photo-1486706892813-4443e201ffe0?q=80&w=1600&auto=format&fit=crop" />} />
    </Routes>
  )
}

export default App
