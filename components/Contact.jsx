function Contact() {
  return (
    <section id="contact" className="contact-section fade-in">
      <div className="container">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/xqadopwk" method="POST" className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

window.Contact = Contact;
