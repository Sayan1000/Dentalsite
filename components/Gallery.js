import { motion } from 'framer-motion'
export default function Gallery({ items=[] }){
  return (
    <section id="gallery" className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-semibold">Selected Cases</h2>
        <p className="muted text-sm mt-1">Before & after — patient privacy respected. Replace placeholders with real images.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {items.map((it, i)=>(
            <motion.div key={i} className="card overflow-hidden" whileHover={{scale:1.02}} transition={{type:'spring'}}>
              <img src={it.src} alt={it.alt} className="w-full h-44 object-cover" />
              <div className="p-3 text-sm muted">{it.caption || ''}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}