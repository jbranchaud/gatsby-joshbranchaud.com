import React from 'react';

import styled from 'styled-components';

const FooterIconsWrapper = styled.div`
  font-size: 2rem;
  display: flex;
`;

const FooterIcon = styled.a`margin: 0.5rem;`;

const Icon = styled.span`
  :hover {
    text-decoration: none;
    color: #ffffff88;
  }
`;

const Footer = () => {
  return (
    <section id="footer">
      <div className="inner">
        <FooterIconsWrapper>
          <FooterIcon href="https://twitter.com/jbrancha">
            <Icon className="icon fab fa-twitter" />
          </FooterIcon>
          <FooterIcon href="https://github.com/jbranchaud">
            <Icon className="icon fab fa-github" />
          </FooterIcon>
          <FooterIcon href="https://www.instagram.com/jbranchaud">
            <Icon className="icon fab fa-instagram" />
          </FooterIcon>
        </FooterIconsWrapper>
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
