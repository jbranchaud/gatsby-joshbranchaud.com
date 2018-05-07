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
          <div>© 2018 Josh Branchaud</div>
          <div>
            Untitled Design: <a href="https://templated.co/">TEMPLATED</a>
          </div>
          <div>
            Images <a href="https://unsplash.com/">Unsplash</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
