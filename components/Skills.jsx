function Skills() {
  return (
    <section id="skills" className="skills-section fade-in">
      <div className="container">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>
            <div className="flip-card">
              <div className="flip-card-front">
                <i className="fab fa-html5" style={{fontSize: '3rem'}}></i>
                <p>HTML5 &amp; CSS3</p>
              </div>
              <div className="flip-card-back">
                <p>Used for structuring and styling all my web projects, including this portfolio. Implemented responsive layouts and modern CSS features like Flexbox and Grid.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flip-card">
              <div className="flip-card-front">
                <i className="fab fa-js-square" style={{fontSize: '3rem'}}></i>
                <p>JavaScript (ES6+)</p>
              </div>
              <div className="flip-card-back">
                <p>Applied for interactive features like theme toggle, smooth scrolling, and animations. Used in projects for dynamic content and user interactions.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flip-card">
              <div className="flip-card-front">
                <i className="fab fa-php" style={{fontSize: '3rem'}}></i>
                <p>PHP &amp; Laravel</p>
              </div>
              <div className="flip-card-back">
                <p>Developed backend for web applications, handling server-side logic, database interactions, and API endpoints in Laravel projects.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flip-card">
              <div className="flip-card-front">
                <i className="fas fa-mobile-alt" style={{fontSize: '3rem'}}></i>
                <p>Responsive Design</p>
              </div>
              <div className="flip-card-back">
                <p>Ensured all websites work seamlessly across devices using media queries, flexible layouts, and mobile-first approach.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flip-card">
              <div className="flip-card-front">
                <i className="fab fa-git-alt" style={{fontSize: '3rem'}}></i>
                <p>Git &amp; Version Control</p>
              </div>
              <div className="flip-card-back">
                <p>Managed project versions, collaborated with teams, and maintained code history for all development projects.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flip-card">
              <div className="flip-card-front">
                <i className="fab fa-python" style={{fontSize: '3rem'}}></i>
                <p>Python</p>
              </div>
              <div className="flip-card-back">
                <p>Developed scripts and backend services using Python for automation and data processing.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flip-card">
              <div className="flip-card-front">
                <i className="fas fa-server" style={{fontSize: '3rem'}}></i>
                <p>Django</p>
              </div>
              <div className="flip-card-back">
                <p>Built robust web applications and APIs using the Django framework.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flip-card">
              <div className="flip-card-front">
                <i className="fas fa-database" style={{fontSize: '3rem'}}></i>
                <p>MySQL</p>
              </div>
              <div className="flip-card-back">
                <p>Designed and managed relational databases using MySQL for various projects.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

window.Skills = Skills;
