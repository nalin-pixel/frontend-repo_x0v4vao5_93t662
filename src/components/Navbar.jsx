import { useState, useEffect } from 'react'
import { Menu, X, Languages, Map, Image, BookOpenText, CalendarDays, Home, Info, Compass } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About', icon: Info },
  { to: '/culture', label: 'Culture', icon: BookOpenText },
  { to: '/nature', label: 'Nature', icon: Map },
  { to: '/history', label: 'History', icon: BookOpenText },
  { to: '/travel', label: 'Travel', icon: Compass },
  { to: '/gallery', label: 'Gallery', icon: Image },
  { to: '/events', label: 'Events', icon: CalendarDays },
  { to: '/info', label: 'Visitor Info', icon: Info },
]

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-emerald-600 to-red-600 shadow ring-1 ring-white/20">
            <span className="absolute inset-0 rounded-full bg-white/10 mix-blend-overlay" />
          </span>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-tight">Land of Origins</div>
            <div className="text-xs text-amber-200/80">Ethiopia</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${isActive ? 'text-white bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'}`}>
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="Toggle language" onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="inline-flex items-center gap-2 text-slate-200 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5">
            <Languages className="w-5 h-5" />
            <span className="text-sm uppercase">{lang}</span>
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200 hover:text-white p-2 rounded-lg hover:bg-white/5" aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="px-4 py-4 space-y-1">
            {navItems.map(({ to, label }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `block px-3 py-2 rounded-lg text-sm font-medium ${isActive ? 'text-white bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'}`}>{label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
