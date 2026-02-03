function Badges() {
  return (
    <section id="badges" className="badges-section fade-in">
      <div className="container">
        <h2>Certifications & Badges</h2>
        <div className="badges-container">
          <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="be0707b5-642b-44b2-9da2-ab853066a3d8" data-share-badge-host="https://www.credly.com"></div>
          <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="4c005ca1-109d-418c-8c7f-201e7707b4b1" data-share-badge-host="https://www.credly.com"></div>
        </div>
        <a href="https://www.credly.com/users/f-dave-damon-v-pararuan/edit#credly" target="_blank" className="btn-secondary">
          <i className="fas fa-external-link-alt"></i> View on Credly
        </a>
      </div>
    </section>
  );
}

window.Badges = Badges;
