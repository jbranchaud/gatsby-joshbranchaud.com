import React from 'react';
import Link from 'gatsby-link';
import { slide as Menu } from 'react-burger-menu';

const NavItems = () => {
  return [
    <a href="index.html">Home</a>,
    <a href="generic.html">Generic</a>,
    <a href="elements.html">Elements</a>,
  ];
};

const BurgerMenu = ({ isOpen, handleMenuStateChange }) => {
  return (
    <Menu right isOpen={isOpen} onStateChange={handleMenuStateChange}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a onClick={() => {}} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

class Header extends React.Component {
  state = {
    menuStatus: 'closed',
  };

  toggleMenu = () => {
    if (this.state.menuStatus === 'closed') {
      this.setState({ menuStatus: 'open' });
    } else if (this.state.menuStatus === 'open') {
      this.setState({ menuStatus: 'closed' });
    }
  };

  handleMenuStateChange = ({ isOpen }) => {
    if (isOpen) {
      this.setState({ menuStatus: 'open' });
    } else {
      this.setState({ menuStatus: 'closed' });
    }
  };

  render() {
    const { siteTitle } = this.props;
    return (
      <div>
        <BurgerMenu
          isOpen={this.state.menuStatus === 'open'}
          handleMenuStateChange={this.handleMenuStateChange}
        />
        <header id="header">
          <div className="inner">
            <a href="index.html" className="logo">
              Josh Branchaud
            </a>
            <nav id="nav">
              <a href="index.html">Home</a>
              <a href="generic.html">Generic</a>
              <a href="elements.html">Elements</a>
            </nav>
          </div>
        </header>
        <a
          href="#menu"
          className="navPanelToggle"
          onClick={e => {
            e.preventDefault();
            this.toggleMenu();
          }}
        >
          <span className="fa fa-bars" />
        </a>
      </div>
    );
  }
}

export default Header;
