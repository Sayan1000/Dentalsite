export default function Services(){
  const items = [
    {title:'Denture Fabrication', desc:'High-quality complete and partial dentures', icon:'🦷'},
    {title:'Shade Matching', desc:'Precise tooth shade selection and finishing', icon:'🎨'},
    {title:'Repairs & Relines', desc:'Fast repairs and relines for comfort', icon:'⚙️'},
  ];
  return (
    <section id="services" className="section">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-xl font-semibold text-center">My Services</h3>
        <p className="muted text-center max-w-2xl mx-auto mt-2">Skilled in prosthetics, finishing and lab collaborations.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {items.map((s,i)=>(
            <div key={i} className="card p-6 text-center">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-semibold">{s.title}</div>
              <div className="muted text-sm mt-2">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}