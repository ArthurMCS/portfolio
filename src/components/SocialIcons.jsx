import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import SocialIconsStyled from '../StyledComponents/SocialIcons';

export default function Icons() {
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
      </ul>
    </SocialIconsStyled>

  );
}
