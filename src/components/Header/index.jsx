/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavbarStyled, HeaderStyled, HambugerBtnStyled } from './style';

export default function Header(props) {
  const { home, projects, contacts } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <HeaderStyled>
      <NavbarStyled isVisible={isActive}>
        {!home && <Link to="/" className="link" onClick={() => setIsActive(false)} style={{ textDecoration: 'none' }}>{'< Home />'}</Link>}
        {!projects && <Link to="/projects" className="link" onClick={() => setIsActive(false)} style={{ textDecoration: 'none' }}>{'< Projetos />'}</Link>}
        {!contacts && <Link to="/contacts" className="link" onClick={() => setIsActive(false)} style={{ textDecoration: 'none' }}>{'< Contato />'}</Link>}
      </NavbarStyled>
      <HambugerBtnStyled onClick={({ target }) => {
        target.classList.toggle('active');
        isActive ? setIsActive(false) : setIsActive(true);
      }}
      />
    </HeaderStyled>
  );
}

Header.propTypes = {
  home: PropTypes.bool,
  projects: PropTypes.bool,
  contacts: PropTypes.bool,
};

Header.defaultProps = {
  home: false,
  projects: false,
  contacts: false,
};
