function About() {
  return (
    <section id="about" className="bio-section fade-in">
      <div className="container bio-content">
        <div className="bio-text">
          <div className="bio-image">
            <img src="img/no-whitebackground-Photoroom.png" alt="Profile Picture" />
          </div>
          <h2>About Me</h2>
          <p>I’m an IT student passionate about programming, web development, and creative problem-solving. Skilled in Java, PHP, JavaScript, Python (Django), C, and HTML, I’ve worked on diverse projects that turn theory into real-world solutions — many of which are on my GitHub. Outside of coding, I bring a unique edge with my narrator-style voice, perfect for voiceovers and creative work. Always eager to learn, collaborate, and contribute to innovative tech projects.</p>
          <p>I also like the color blue.</p>
          <h3>Education</h3>
          <p className="university-logos">
            <a href="https://www.clsu.edu.ph" target="_blank" rel="noopener noreferrer">
              <img src="img/clsu-logo-green.png" alt="CLSU Logo" className="university-logo" title="Central Luzon State University, Nueva Ecija, Philippines" />
            </a>
            <a href="https://www.wup.edu.ph" target="_blank" rel="noopener noreferrer">
              <img src="img/wup.png" alt="WUP Logo" className="university-logo wup-logo" title="Wesleyan University - Philippines, Cabanatuan City, Nueva Ecija" />
            </a>
          </p>
          <a href="https://www.linkedin.com/in/f-dave-damon-v-pararuan-6100b8282/" className="btn-secondary" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a href="https://github.com/Strel-k" className="btn-secondary" target="_blank"><i className="fab fa-github"></i> GitHub</a>
        </div>
      </div>
    </section>
  );
}

window.About = About;
