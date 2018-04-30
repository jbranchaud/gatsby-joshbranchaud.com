import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import { slide as Menu } from 'react-burger-menu';

const NavItems = () => {
  return (
    <div>
      <Link id="home" className="menu-item" to="/">
        Home
      </Link>
      <Link id="about" className="menu-item" to="/about">
        About
      </Link>
      <Link id="contact" className="menu-item" to="/contact">
        Contact
      </Link>
    </div>
  );
};

const navItems = [
  { id: 'home', text: 'Home', to: '/' },
  { id: 'about', text: 'About', to: '/about' },
  { id: 'contact', text: 'Contact', to: '/contact' },
];

const BurgerMenu = ({ isOpen, handleMenuStateChange, toggleMenu }) => {
  return (
    <Menu right isOpen={isOpen} onStateChange={handleMenuStateChange}>
      {navItems.map(({ id, text, to }) => {
        return (
          <a
            id={id}
            key={id}
            href="#"
            onClick={e => {
              e.preventDefault();
              navigateTo(to);
              toggleMenu();
            }}
          >
            {text}
          </a>
        );
      })}
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
          toggleMenu={this.toggleMenu}
        />
        <header id="header">
          <div className="inner">
            <a to="/" className="logo">
              Josh Branchaud
            </a>
            <nav id="nav">
              {navItems.map(({ id, text, to }) => {
                return (
                  <Link id={id} key={id} to={to}>
                    {text}
                  </Link>
                );
              })}
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
