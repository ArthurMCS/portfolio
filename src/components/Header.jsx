import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import { NavbarStyled, HeaderStyled, HambugerBtnStyled } from '../styles/Header';



export default function Header(props) {
    const {home, projects, about } = props;
    const [isActive, setIsActive] = useState(false)
    const navBar = (
    <NavbarStyled >
        {!home && 
        <Link to='/' className='link' style={{ textDecoration: 'none' }}>Home</Link>}
        {!about
        && <Link to='/about'  className='link'  style={{ textDecoration: 'none' }}>About</Link>}
        {!projects
        && <Link to='/projects'  className='link'  style={{ textDecoration: 'none' }}>Projects</Link>}
   </NavbarStyled>
   )
    return (
       <HeaderStyled>
           {isActive && navBar}
           <HambugerBtnStyled onClick={({target}) => {

               target.classList.toggle('active');

               document.querySelectorAll('Link')
               .forEach((link) => {link.classList.add('active')})

               if(target.className.includes('active')){
                   setIsActive(true)
               } else {
                    setIsActive(false)
               }}}/>
       </HeaderStyled>
    )
}
