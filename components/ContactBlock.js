export default function ContactBlock(){
  return (
    <section id="contact" className="section">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-start">
        <div>
          <h3 className="text-xl font-semibold">Contact Me</h3>
          <p className="muted mt-2">
            For appointments, lab collaborations or custom work.
          </p>

          <div className="mt-6 space-y-3">
            <div className="muted"><strong>Clinic:</strong> Chetla Smile Dental Clinic</div>
            <div className="muted"><strong>Phone:</strong> +91 9051932025</div>
            <div className="muted"><strong>Email:</strong> dmondal100100@gmail.com</div>
          </div>
        </div>

        <div className="card p-4">
          <div className="rounded-md overflow-hidden h-[220px]">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.72053570416!2d88.3350324734881!3d22.514666135094686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270b372c93c7f%3A0x63d7aacab0c53d59!2sSmile%20Dental%20Clinic!5e0!3m2!1sen!2sus!4v1765602419150!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
