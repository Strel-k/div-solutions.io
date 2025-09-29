// JavaScript for smooth scrolling, theme toggle, hamburger menu, and animations

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('open');
        });
    });

    const themeToggleBtn = document.querySelector('.theme-toggle');
    themeToggleBtn.addEventListener('click', () => {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('open');
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    const projects = [
        {
            title: "CalmnConnect: Mental Health Websie for OSA",
            description: "A modern Wenb Application that utilizes OpenAI for feedback, Websocket for live session conferences, and utilizes Python Django for its backend.",
            technologies: "OpenAI, Python, Django, HTML5, CSS3, JavaScript, WebSocket, API",
            link: "https://github.com/Strel-k/CalmConnect-Mental-Health"
        },
        {
            title: "B-Cash: E Wallet Web Application",
            description: "A modern Web E Wallet Application that utilizes facial recognition that matches the face of the user's face via camera and compares them with the ID they present. Utilized MySQL for its backend.",
            technologies: "Facial Recognition, MySQL, HTML5, CSS3, JavaScript, API",
            link: "https://github.com/Strel-k/Bank-Cash-AJAX-Project"
        }
    ];

    function ProjectCard({ project }) {
        return React.createElement('article', { className: 'project-card' },
            React.createElement('h3', null, project.title),
            React.createElement('p', null, project.description),
            React.createElement('p', null, React.createElement('strong', null, 'Technologies:'), ' ' + project.technologies),
            React.createElement('a', { href: project.link, className: 'btn-secondary', target: '_blank' },
                React.createElement('i', { className: 'fas fa-external-link-alt' }), ' View Project'
            )
        );
    }

    function Projects() {
        return React.createElement('div', { className: 'projects-grid' },
            projects.map((project, index) => React.createElement(ProjectCard, { key: index, project: project }))
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('projects-root'));
    root.render(React.createElement(Projects));
});
