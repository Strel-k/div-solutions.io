function ProjectCard({
  project
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "project-card"
  }, /*#__PURE__*/React.createElement("h3", null, project.title), /*#__PURE__*/React.createElement("p", null, project.description), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Technologies:"), " ", project.technologies), /*#__PURE__*/React.createElement("a", {
    href: project.link,
    className: "btn-secondary",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-external-link-alt"
  }), " View Project"));
}
function Projects() {
  const projects = [{
    title: "CalmnConnect: Mental Health Website for OSA",
    description: "A modern Web Application that utilizes OpenAI for feedback, Websocket for live session conferences, and utilizes Python Django for its backend.",
    technologies: "OpenAI, Python, Django, HTML5, CSS3, JavaScript, WebSocket, API",
    link: "https://github.com/Strel-k/CalmConnect-Mental-Health"
  }, {
    title: "B-Cash: E Wallet Web Application",
    description: "A modern Web E Wallet Application that utilizes facial recognition that matches the face of the user's face via camera and compares them with the ID they present. Utilized MySQL for its backend.",
    technologies: "Facial Recognition, MySQL, HTML5, CSS3, JavaScript, API",
    link: "https://github.com/Strel-k/Bank-Cash-AJAX-Project"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    className: "projects-section fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h2", null, "Projects"), /*#__PURE__*/React.createElement("div", {
    className: "projects-grid"
  }, projects.map((project, index) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: index,
    project: project
  })))));
}
window.Projects = Projects;