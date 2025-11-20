export default function Placeholder({ title, blurb, image }) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="relative h-72 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="absolute bottom-6 left-6 right-6 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold">{title}</h1>
          <p className="mt-2 text-slate-200 max-w-2xl">{blurb}</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert">
          <p>We will craft this section with interactive storytelling, maps, galleries, and rich articles. Tell me what content you want to prioritize and we will make it dynamic with a content system.</p>
        </div>
      </div>
    </div>
  )
}
