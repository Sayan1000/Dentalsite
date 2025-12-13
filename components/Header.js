import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Header(){
  const [scrolled,setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(()=> {
    const onScroll=()=> setScrolled(window.scrollY>12);
    onScroll(); window.addEventListener('scroll',onScroll);
    return ()=> window.removeEventListener('scroll',onScroll);
  },[]);

  // close mobile menu on resize > md
  useEffect(()=> {
    const onResize = () => {
      if(window.innerWidth >= 768 && open) setOpen(false);
    }
    window.addEventListener('resize', onResize);
    return ()=> window.removeEventListener('resize', onResize);
  },[open]);

  const navClass = 'text-sm muted hover:text-white transition';
  const smooth = (id)=> {
    const el = document.querySelector(id);
    if(el){
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 70,
        behavior:'smooth'
      });
    }
    if(open) setOpen(false);
  };

  return (
    <motion.header initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} className={`fixed w-full top-0 z-50 ${scrolled?'shadow-lg backdrop-blur-md':''}`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6b21a8] to-[#ff1fb6] flex items-center justify-center text-white font-bold">DM</div>
          <div>
            <div className="font-semibold">Dhananjoy Mondal</div>
            <div className="text-xs muted">Dental Technician — Chetla Smile Dental Clinic</div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={()=>smooth('#about')} className={navClass}>About</button>
          <button onClick={()=>smooth('#services')} className={navClass}>Services</button>
          <button onClick={()=>smooth('#portfolio')} className={navClass}>Portfolio</button>
          <button onClick={()=>smooth('#testimonials')} className={navClass}>Testimonials</button>
          <button onClick={()=>smooth('#contact')} className={navClass}>Contact</button>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={()=>setOpen(!open)} className="p-2 rounded focus:outline-none focus:ring">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'} bg-white/90 backdrop-blur-sm shadow-md`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
          <button onClick={()=>smooth('#about')} className="text-base text-gray-800 text-left">About</button>
          <button onClick={()=>smooth('#services')} className="text-base text-gray-800 text-left">Services</button>
          <button onClick={()=>smooth('#portfolio')} className="text-base text-gray-800 text-left">Portfolio</button>
          <button onClick={()=>smooth('#testimonials')} className="text-base text-gray-800 text-left">Testimonials</button>
          <button onClick={()=>smooth('#contact')} className="text-base text-gray-800 text-left">Contact</button>
        </div>
      </div>
    </motion.header>
  );
}
