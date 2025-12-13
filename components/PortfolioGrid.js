import { motion } from 'framer-motion';

export default function PortfolioGrid({ items=[] }){
  return (
    <section id="portfolio" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-xl font-semibold text-center">Portfolio</h3>
        <p className="muted text-center max-w-2xl mx-auto mt-2">Before & after — selected work.</p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it,i)=>(
            <motion.div key={it.id || i} className="port-item" whileHover={{scale:1.02}} transition={{type:'spring'}}>
              <img src={it.src} alt={it.title} className="w-full h-48 object-cover" />
              <div className="port-overlay">
                <div className="port-cta">View Details</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a href="#more" className="btn-primary">See More</a>
        </div>
      </div>
    </section>
  );
}