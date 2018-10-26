import React from 'react';
import { Link, navigate } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';

const navItems = [
  { id: 'home', text: 'Home', to: '/' },
  { id: 'about', text: 'About', to: '/about' },
  { id: 'writing', text: 'Writing', to: '/writing' },
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
              navigate(to);
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
            <Link to="/" className="logo">
              Josh Branchaud
            </Link>
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
