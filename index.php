<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="css/index.css" />
    <script defer src="js/script.js"></script>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="container">
                <a href="#" class="logo">MyPortfolio</a>
                <ul class="nav-links">
                    <li><a href="#hero"><i class="fas fa-home"></i> Home</a></li>
                    <li><a href="#about"><i class="fas fa-user"></i> About</a></li>
                    <li><a href="#skills"><i class="fas fa-tools"></i> Skills</a></li>
                    <li><a href="#projects"><i class="fas fa-project-diagram"></i> Projects</a></li>
                    <li><a href="#badges"><i class="fas fa-award"></i> Badges</a></li>
                    <li><a href="#contact"><i class="fas fa-envelope"></i> Contact</a></li>
                </ul>
                <button class="theme-toggle" aria-label="Toggle Dark Mode">🌓</button>
            </div>
        </nav>
    </header>

    <main>
        <section id="hero" class="hero-section">
            <div class="container hero-content">
                <div class="profile-pic">
                    <i class="fas fa-user-circle"></i>
                </div>
                <h1>Hello, I'm <span class="highlight">Your Name</span></h1>
                <p>I'm a passionate web developer creating modern and responsive websites with cutting-edge technologies.</p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn-primary">View My Work</a>
                    <a href="#contact" class="btn-secondary">Get In Touch</a>
                </div>
            </div>
        </section>

        <section id="about" class="about-section">
            <div class="container">
                <h2>About Me</h2>
                <div class="bio-content">
                    <div class="bio-text">
                        <p>
                            I am a passionate web developer with experience in building modern websites using HTML, CSS, JavaScript, and PHP.
                            I enjoy creating clean, user-friendly, and performant web applications.
                        </p>
                        <h3>Education</h3>
                        <div class="education-logos">
                            <a href="https://www.harvard.edu/" target="_blank" rel="noopener"><i class="fas fa-university"></i> Harvard</a>
                            <a href="https://www.mit.edu/" target="_blank" rel="noopener"><i class="fas fa-university"></i> MIT</a>
                        </div>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" class="linkedin-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    </div>
                    <div class="bio-image">
                        <i class="fas fa-user-circle profile-icon"></i>
                    </div>
                </div>
            </div>
        </section>

        <section id="skills" class="skills-section">
            <div class="container">
                <h2>Skills</h2>
                <ul class="skills-list">
                    <li>
                        <div class="flip-card">
                            <div class="flip-card-front">
                                <i class="fas fa-code"></i>
                                <h3>HTML5 & CSS3</h3>
                            </div>
                            <div class="flip-card-back">
                                <p>Proficient in creating responsive and semantic web layouts using modern HTML5 and CSS3 techniques.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flip-card">
                            <div class="flip-card-front">
                                <i class="fab fa-js-square"></i>
                                <h3>JavaScript (ES6+)</h3>
                            </div>
                            <div class="flip-card-back">
                                <p>Experienced in modern JavaScript, including ES6+ features, DOM manipulation, and asynchronous programming.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flip-card">
                            <div class="flip-card-front">
                                <i class="fab fa-php"></i>
                                <h3>PHP & Laravel</h3>
                            </div>
                            <div class="flip-card-back">
                                <p>Skilled in server-side development with PHP and the Laravel framework for building robust web applications.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flip-card">
                            <div class="flip-card-front">
                                <i class="fas fa-mobile-alt"></i>
                                <h3>Responsive Design</h3>
                            </div>
                            <div class="flip-card-back">
                                <p>Expert in creating mobile-first, responsive designs that work seamlessly across all devices.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flip-card">
                            <div class="flip-card-front">
                                <i class="fab fa-git-alt"></i>
                                <h3>Git & Version Control</h3>
                            </div>
                            <div class="flip-card-back">
                                <p>Proficient in version control with Git, including branching, merging, and collaborative workflows.</p>
                            </div>
                        </div>
                    </li>
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

        <section id="badges" class="badges-section">
            <div class="container">
                <h2>Certifications & Badges</h2>
                <div class="badges-container">
                    <div class="badge-placeholder">
                        <i class="fas fa-certificate"></i>
                        <p>Web Dev Cert</p>
                    </div>
                    <div class="badge-placeholder">
                        <i class="fas fa-award"></i>
                        <p>JS Expert</p>
                    </div>
                    <div class="badge-placeholder">
                        <i class="fas fa-medal"></i>
                        <p>PHP Master</p>
                    </div>
                </div>
                <a href="https://www.credly.com/users/yourprofile" target="_blank" class="btn-secondary">View All Badges</a>
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
