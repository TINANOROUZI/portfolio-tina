export default function Contact(){
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <h2 className="section-title">CONTACT</h2>
      <p className="mt-4 max-w-2xl text-muted">Want to collaborate or hire me?</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a className="btn-primary" href="mailto:you@email.com">Say hello</a>
        <a className="btn-ghost" href="https://calendly.com/" target="_blank">Book a call</a>
      </div>
    </section>
  );
}
