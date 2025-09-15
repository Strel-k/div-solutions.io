<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My Portfolio</title>
    <link rel="stylesheet" href="css/index.css" />
    <script defer src="js/script.js"></script>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="container">
                <a href="#" class="logo">MyPortfolio</a>
                <ul class="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button class="theme-toggle" aria-label="Toggle Dark Mode">🌓</button>
            </div>
        </nav>
    </header>

    <main>
        <section id="hero" class="hero-section">
            <div class="container hero-content">
                <h1>Hello, I'm Your Name</h1>
                <p>I'm a passionate web developer creating modern and responsive websites.</p>
                <a href="#projects" class="btn-primary">View My Work</a>
            </div>
        </section>

        <section id="about" class="about-section">
            <div class="container">
                <h2>About Me</h2>
                <p>
                    I am a web developer with experience in building modern websites using HTML, CSS, JavaScript, and PHP.
                    I enjoy creating clean, user-friendly, and performant web applications.
                </p>
            </div>
        </section>

        <section id="skills" class="skills-section">
            <div class="container">
                <h2>Skills</h2>
                <ul class="skills-list">
                    <li>HTML5 &amp; CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>PHP &amp; Laravel</li>
                    <li>Responsive Design</li>
                    <li>Git &amp; Version Control</li>
                </ul>
            </div>
        </section>

        <section id="projects" class="projects-section">
            <div class="container">
                <h2>Projects</h2>
                <div class="projects-grid">
                    <article class="project-card">
                        <h3>Project One</h3>
                        <p>A modern web application built with React and Node.js.</p>
                        <a href="#" class="btn-secondary">View Project</a>
                    </article>
                    <article class="project-card">
                        <h3>Project Two</h3>
                        <p>A responsive portfolio website built with HTML, CSS, and JavaScript.</p>
                        <a href="#" class="btn-secondary">View Project</a>
                    </article>
                    <article class="project-card">
                        <h3>Project Three</h3>
                        <p>A Laravel-based CMS for managing content efficiently.</p>
                        <a href="#" class="btn-secondary">View Project</a>
                    </article>
                </div>
            </div>
        </section>

        <section id="contact" class="contact-section">
            <div class="container">
                <h2>Contact Me</h2>
                <form action="#" method="POST" class="contact-form">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>

                    <button type="submit" class="btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <div class="container footer-content">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
