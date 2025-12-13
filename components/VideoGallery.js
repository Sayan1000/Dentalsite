import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VideoGallery({ items = [] }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i) => { setIndex(i); setOpen(true) }
  const close = () => setOpen(false)
  const prev = () => setIndex((index - 1 + items.length) % items.length)
  const next = () => setIndex((index + 1) % items.length)

  return (
    <section id="work" className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-semibold">Work Demos</h2>
        <p className="muted text-sm mt-1">Click a thumbnail to open a video player.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {items.map((it, i) => (
            <button key={it.id || i} onClick={() => openAt(i)} className="card overflow-hidden p-0" style={{border:0}}>
              <div style={{position:'relative'}}>
                <img src={it.thumb || it.src} alt={it.caption} className="w-full h-40 object-cover" loading="lazy" />
                <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <div style={{background:'rgba(0,0,0,0.45)', padding:10, borderRadius:999}}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff"><path d="M5 3v18l15-9-15-9z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
              <div className="p-3 muted text-sm">{it.caption}</div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div className="lightbox-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} style={{position:'fixed', inset:0, zIndex:80, display:'flex', alignItems:'center', justifyContent:'center'}}>
              <motion.div className="lightbox-panel" initial={{scale:0.98}} animate={{scale:1}} exit={{scale:0.98}} style={{maxWidth:1100, width:'95%', maxHeight:'90vh', background:'rgba(0,0,0,0.85)', borderRadius:12, overflow:'hidden'}}>
                <div style={{position:'relative'}}>
                  <button aria-label="Close" onClick={close} style={{position:'absolute', right:12, top:12, zIndex:10, background:'rgba(255,255,255,0.06)', border:0, padding:8, borderRadius:8, color:'#fff'}}>✕</button>
                  <button aria-label="Prev" onClick={prev} style={{position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', zIndex:10, background:'rgba(255,255,255,0.06)', border:0, padding:8, borderRadius:8, color:'#fff'}}>◀</button>
                  <button aria-label="Next" onClick={next} style={{position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', zIndex:10, background:'rgba(255,255,255,0.06)', border:0, padding:8, borderRadius:8, color:'#fff'}}>▶</button>

                  <div style={{padding:16, display:'flex', alignItems:'center', justifyContent:'center', maxHeight:'75vh'}}>
                    <video src={items[index].src} controls style={{maxWidth:'100%', maxHeight:'75vh'}} autoPlay={true} />
                  </div>
                  <div style={{padding:'12px 16px', color:'#fff', background:'rgba(0,0,0,0.25)'}}>
                    <div style={{fontWeight:600}}>{items[index].caption}</div>
                    <div style={{fontSize:13, opacity:0.85}}>{items[index].type === 'video' ? 'Video' : 'Image'}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
