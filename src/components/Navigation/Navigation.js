import React, { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import { img } from '../../assets/img/img';
import './navigation.scss';

function Navigation() {
  const [active, setActive] = useState('home');
  const [scrolled, setStrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const onScrolled = () => {
      if (window.scrollY > 50) {
        setStrolled(true);
      } else {
        setStrolled(false);
      }
    };
    window.addEventListener('scroll', onScrolled);

    return () => window.removeEventListener('scroll', onScrolled);
  }, []);

  const handleActive = (value) => {
    setActive(value);
  };

  return (
    <>
      <nav id="home" className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="logo">
            <img src={img.logo} alt="" />
            <span>Vincent</span>
          </div>
          <div className="navbar">
            <div className="navbarLink">
              <a
                href="#banner"
                className={active === 'home' ? 'active' : ''}
                onClick={() => {
                  handleActive('home');
                }}
              >
                Home
              </a>
              <a
                href="#skill"
                className={active === 'skill' ? 'active' : ''}
                onClick={() => {
                  handleActive('skill');
                }}
              >
                Skills
              </a>
              <a
                href="#project"
                className={active === 'project' ? 'active' : ''}
                onClick={() => {
                  handleActive('project');
                }}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={active === 'contact' ? 'active' : ''}
                onClick={() => {
                  handleActive('contact');
                }}
              >
                Contact
              </a>
            </div>
            <div className="navbarSocial">
              <a href="https://github.com/MinhPhung97" target="_blank">
                <i className="bi bi-github" />
              </a>
              <a href="https://www.facebook.com/minhphung.nguyen.100/" target="_blank">
                <i className="bi bi-facebook" />
              </a>
              <a href="https://www.instagram.com/viencent97/" target="_blank">
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>
          <div className="menu" onClick={toggleDrawer}>
            <i className="bi bi-list"></i>
          </div>
        </div>
      </nav>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left" className="drawer" zIndex={100}>
        <div className="drawerLogo">
          <img src={img.logo} alt="" />
          <span>Vincent</span>
        </div>
        <div className="drawerContent">
          <a
            href="#banner"
            className={active === 'home' ? 'active' : ''}
            onClick={() => {
              handleActive('home');
            }}
          >
            Home
          </a>
          <a
            href="#skill"
            className={active === 'skill' ? 'active' : ''}
            onClick={() => {
              handleActive('skill');
            }}
          >
            Skills
          </a>
          <a
            href="#project"
            className={active === 'project' ? 'active' : ''}
            onClick={() => {
              handleActive('project');
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={active === 'contact' ? 'active' : ''}
            onClick={() => {
              handleActive('contact');
            }}
          >
            Contact
          </a>
        </div>
        <div className="drawerLink">
          <a href="https://github.com/MinhPhung97" target="_blank">
            <i className="bi bi-github" />
          </a>
          <a href="https://www.facebook.com/minhphung.nguyen.100/" target="_blank">
            <i className="bi bi-facebook" />
          </a>
          <a href="https://www.instagram.com/viencent97/" target="_blank">
            <i className="bi bi-instagram" />
          </a>
        </div>
      </Drawer>
    </>
  );
}

export default Navigation;
