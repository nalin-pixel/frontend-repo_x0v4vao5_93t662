export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-white font-semibold">Land of Origins</div>
          <p className="mt-2 text-slate-300 text-sm">A modern, immersive introduction to Ethiopia — its history, culture, and nature.</p>
        </div>
        <div>
          <div className="text-white font-semibold">Explore</div>
          <ul className="mt-2 space-y-2 text-slate-300 text-sm">
            <li><a href="/history" className="hover:text-white">History</a></li>
            <li><a href="/culture" className="hover:text-white">Culture</a></li>
            <li><a href="/nature" className="hover:text-white">Nature</a></li>
            <li><a href="/travel" className="hover:text-white">Travel</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Community</div>
          <ul className="mt-2 space-y-2 text-slate-300 text-sm">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contribute a Story</a></li>
            <li><a href="#" className="hover:text-white">Newsletter</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Contact</div>
          <p className="mt-2 text-slate-300 text-sm">hello@landoforigins.org</p>
          <div className="mt-3 text-slate-400 text-xs">© {new Date().getFullYear()} Land of Origins</div>
        </div>
      </div>
    </footer>
  )
}
