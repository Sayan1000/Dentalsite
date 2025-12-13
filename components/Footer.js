export default function Footer(){
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-6 text-center muted text-sm">
        © {new Date().getFullYear()} Dhananjoy Mondal — Dental Technician. Based at Chetla Smile Dental Clinic.
      </div>
    </footer>
  );
}
