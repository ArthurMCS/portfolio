import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarStyled, HeaderStyled, HambugerBtnStyled } from '../styles/Header';

export default function Header(props) {
  const { home, projects, about, contacts } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <HeaderStyled>
      {isActive && 
      (
      <NavbarStyled isVisible={isActive}>
        {!home && <Link to="/" className="link" onClick={() => setIsActive(false)} style={{ textDecoration: 'none' }}>{'< Home />'}</Link>}
        {!about && <Link to="/about" className="link" onClick={() => setIsActive(false)} style={{ textDecoration: 'none' }}>{'< Sobre />'}</Link>}
        {!projects && <Link to="/projects" className="link" onClick={() => setIsActive(false)} style={{ textDecoration: 'none' }}>{'< Project />'}</Link>}
        {!contacts && <Link to="/contacts" className="link" onClick={() => setIsActive(false)} style={{ textDecoration: 'none' }}>{'< Contatos />'}</Link>}
      </NavbarStyled>
      )
      }
      <HambugerBtnStyled onClick={({ target }) => {
        target.classList.toggle('active');
        if (target.className.includes('active')) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }}
      />
    </HeaderStyled>
  );
}
