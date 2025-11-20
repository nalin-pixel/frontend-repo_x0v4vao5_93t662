import { motion } from 'framer-motion'
import { Landmark, Map, Music4, MountainSnow, Palette, Camera } from 'lucide-react'

const cards = [
  {
    icon: Landmark,
    title: 'History & Heritage',
    text: 'Walk through the rock-hewn churches of Lalibela, castles of Gondar, and the ancient obelisks of Aksum.',
    img: 'https://images.unsplash.com/photo-1606621237351-3f36dfa7a339?q=80&w=1400&auto=format&fit=crop',
    href: '/history',
  },
  {
    icon: Music4,
    title: 'Culture & Traditions',
    text: 'Experience the rhythms of Ethiopian dance, the aroma of the coffee ceremony, and vibrant festivals like Meskel.',
    img: 'https://images.unsplash.com/photo-1616311270794-7eef5f88ceeb?q=80&w=1400&auto=format&fit=crop',
    href: '/culture',
  },
  {
    icon: MountainSnow,
    title: 'Nature & Landscapes',
    text: 'From the Simien Mountains to the Danakil Depression, encounter Africa’s most dramatic terrains.',
    img: 'https://images.unsplash.com/photo-1563220014-5a560b9e6e2b?q=80&w=1400&auto=format&fit=crop',
    href: '/nature',
  },
  {
    icon: Palette,
    title: 'Art & Creativity',
    text: 'Discover contemporary art scenes, Zoma Museum, and fashion that reimagines traditional textiles.',
    img: 'https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?q=80&w=1400&auto=format&fit=crop',
    href: '/art',
  },
  {
    icon: Map,
    title: 'Travel & Experiences',
    text: 'Curated journeys, regional guides, and immersive tours to help plan your visit.',
    img: 'https://images.unsplash.com/photo-1516307704669-2711a4989757?q=80&w=1400&auto=format&fit=crop',
    href: '/travel',
  },
  {
    icon: Camera,
    title: 'Gallery',
    text: 'A curated collection of landscapes, portraits, festivals, and daily life.',
    img: 'https://images.unsplash.com/photo-1491554150235-3604f3bbd57c?q=80&w=1400&auto=format&fit=crop',
    href: '/gallery',
  },
]

export default function Highlights() {
  return (
    <section className="relative py-20 bg-slate-950" id="highlights">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_110%,rgba(245,158,11,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Themes to Explore</h2>
          <p className="mt-3 text-slate-300">Dive into stories of history, culture, art, and nature through an interactive, immersive lens.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, text, img, href }, i) => (
            <motion.a
              key={title}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] backdrop-blur-sm"
            >
              <img src={img} alt={title} className="h-56 w-full object-cover object-center transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="flex items-center gap-2 text-amber-300">
                  <Icon className="w-4 h-4" />
                  <span className="text-xs tracking-wider uppercase">Explore</span>
                </div>
                <h3 className="mt-2 text-white text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-slate-200/90 text-sm">{text}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
