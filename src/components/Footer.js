import React from 'react';

const Footer = () => {
  return (
    <section id="footer">
      <div className="inner">
        <div className="footer-icons">
          <a href="https://twitter.com/jbrancha">
            <span className="icon fab fa-twitter" />
          </a>
          <a href="https://github.com/jbranchaud">
            <span className="icon fab fa-github" />
          </a>
          <a href="https://www.instagram.com/jbranchaud">
            <span className="icon fab fa-instagram" />
          </a>
        </div>
        <div className="copyright">
          © Untitled Design: <a href="https://templated.co/">TEMPLATED</a>.
          Images <a href="https://unsplash.com/">Unsplash</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
