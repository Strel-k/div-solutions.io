function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Technologies:</strong> {project.technologies}</p>
      <a href={project.link} className="btn-secondary" target="_blank">
        <i className="fas fa-external-link-alt"></i> View Project
      </a>
    </article>
  );
}

function Projects() {
  const projects = [
    {
      title: "CalmnConnect: Mental Health Website for OSA",
      description: "A modern Web Application that utilizes OpenAI for feedback, Websocket for live session conferences, and utilizes Python Django for its backend.",
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

  return (
    <section id="projects" className="projects-section fade-in">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.Projects = Projects;
