import React from 'react';
import { SocialIconsStyled } from '../StyledComponents/FooterIcons';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';


export default function Footer() {
  return (
    <SocialIconsStyled>
      <ul>
        <li>
          <a href="https://github.com/ArthurMCS" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/arthurmoreiracostasousa/" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/arthur.moreiracs/" target="_blank" rel="noreferrer">
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </SocialIconsStyled>

  );
}
