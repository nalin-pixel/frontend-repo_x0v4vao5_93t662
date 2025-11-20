import { motion } from 'framer-motion'

export default function Hero({ onExplore }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571047399553-051f1b4f4e08?q=80&w=1600&auto=format&fit=crop"
          alt="Simien Mountains at golden hour"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-3xl"
        >
          Discover the Land of Origins
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-amber-100/90 max-w-2xl"
        >
          Ethiopia — where ancient history, living culture, and breathtaking landscapes meet.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button onClick={onExplore} className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-amber-500 text-white font-semibold shadow-lg shadow-emerald-900/30 hover:opacity-95 transition">
            Start Exploring
          </button>
          <a href="#about" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
}
