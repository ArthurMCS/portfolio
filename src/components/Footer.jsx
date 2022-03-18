import React from 'react';
import styled from 'styled-components';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const SocialIconsStyled = styled.div`
    right: 25px;
    bottom: 35px;
    position: fixed;

    ul {
        list-style: none;
        text-align: center;
    }

    li {
        margin-bottom: 20px;
    }

    a { 
        text-decoration: none;
    }

    a svg {
        font-size: 50px;
        color: #3cff00;
        transition: transform 0.5s ease;
    }

    & a svg:hover {
        transform: scale(1.5);
        filter: drop-shadow(5px 5px 20px #3cff00);
    }


    @media (max-width: 1200px){
        display: none;
    }

`;

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
