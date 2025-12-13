import { motion } from 'framer-motion'

const heroVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Hero() {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center relative">
        {/* LEFT: Text */}
        <motion.div variants={heroVariants} initial="hidden" animate="show" className="space-y-6 z-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            I am a professional
            <span
              className="block mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #ff1fb6 0%, #6b21a8 100%)'
              }}
            >
              Dental Technician
            </span>
          </h2>

          <p className="muted max-w-xl text-lg leading-relaxed">
            Specializing in denture fabrication, prosthodontic lab work, and smile rehabilitation, with over 35 years of experience. Associated with {''}
            <strong className="text-current">Chetla Smile Dental Clinic</strong>.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#portfolio"
              className="inline-flex items-center btn-primary shadow-lg transform hover:-translate-y-0.5 transition"
            >
              View Portfolio
            </a>

            <a
              href="#services"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-white/10 muted hover:border-white/20 transition"
            >
              My Services
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Blob background + Circular denture image */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex justify-center">
          <div className="card p-4 w-full sm:w-[420px]">
            <img src="/media/banner.png" alt="prosthetic" className="w-full h-64 object-cover rounded-md" />
            <div className="mt-3 muted text-sm">Precision denture finishing with accurate fit, smooth margins, and natural aesthetics.</div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
