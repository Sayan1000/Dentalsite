import { motion } from 'framer-motion';

export default function Testimonials({ items = [] }) {
  const defaultItems = [
    { quote: 'Excellent craftsmanship — very pleased with my dentures.', author: 'Patient A' },
    { quote: 'Comfort and finish were excellent. Highly recommended.', author: 'Patient B' },
    { quote: 'Professional and timely service, outstanding fit.', author: 'Patient C' },
  ];

  const list = items.length ? items : defaultItems;

  return (
    <section id="testimonials" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-xl font-semibold text-center">Client Testimonials</h3>
        <p className="muted text-center mt-2">Real words from satisfied patients</p>

        {/* Stagger container */}
        <motion.div
          className="mt-8 grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >

          {list.map((t, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 180, damping: 15 }}
              className="relative p-6 rounded-xl shadow-lg bg-white/60 backdrop-blur-sm border border-white/40 cardGlow"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.222 3.764a1 1 0 00.95.69h3.95c.969 0 1.371 1.24.588 1.81l-3.2 2.323a1 1 0 00-.364 1.118l1.224 3.764c.3.921-.755 1.688-1.54 1.118l-3.2-2.322a1 1 0 00-1.175 0L6.1 16.436c-.784.57-1.838-.197-1.539-1.118l1.224-3.764a1 1 0 00-.364-1.118L2.22 9.19c-.783-.57-.38-1.81.588-1.81h3.95a1 1 0 00.95-.69l1.222-3.764z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div className="text-gray-800 font-medium leading-relaxed">“{t.quote}”</div>

              {/* Footer */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                  {t.author.charAt(0)}
                </div>
                <span className="muted text-sm">— {t.author}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Glow style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .cardGlow {
        position: relative;
        overflow: hidden;
      }
      .cardGlow::before {
        content: "";
        position: absolute;
        inset: -20%;
        background: radial-gradient(circle at top left, rgba(255,0,180,0.25), transparent 60%);
        opacity: 0.5;
      }
    `,
        }}
      />
    </section>
  );
}
