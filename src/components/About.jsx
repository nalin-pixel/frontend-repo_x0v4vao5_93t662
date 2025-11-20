import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900" id="about">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_0%,rgba(99,102,241,0.08),transparent_45%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Ethiopia</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              A cradle of humanity and a crossroads of civilizations, Ethiopia holds stories carved in stone and sung across highlands. From Aksum’s ancient obelisks to the rock-hewn sanctuaries of Lalibela, history lives in the landscape.
            </p>
            <div className="mt-6 overflow-x-auto">
              <ol className="flex gap-6 min-w-max">
                {[
                  { year: 'First Humans', text: 'Lucy (Dinknesh) and early hominid discoveries in the Afar region.' },
                  { year: 'Aksum', text: 'A major ancient kingdom renowned for trade, culture, and monumental stelae.' },
                  { year: 'Lalibela', text: '12th–13th century rock-hewn churches — a living pilgrimage site.' },
                  { year: 'Gondar', text: 'Royal enclosure of castles, art, and scholarship.' },
                ].map((t, i) => (
                  <li key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 w-64">
                    <div className="text-amber-300 text-xs tracking-wider uppercase">{t.year}</div>
                    <div className="mt-1 text-white font-semibold">{t.text}</div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <img src="https://images.unsplash.com/photo-1709449952298-5fdfaf1ae2a2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYWxpYmVsYSUyMHJvY2staGV3biUyMGNodXJjaHxlbnwwfDB8fHwxNzYzNjY3NDA2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Lalibela rock-hewn church" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl bg-gradient-to-tr from-amber-500/40 to-emerald-500/40 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
