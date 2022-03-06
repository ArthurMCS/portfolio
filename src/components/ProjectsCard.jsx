/* eslint-disable react/jsx-indent */
import React from 'react';
import styled from 'styled-components';
import { SiGithub } from 'react-icons/si';

const CardStyled = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    height: 450px;
    border-radius: 5%;
    background-color: #272727c3;
    
    .title {
        margin-top: 20px;
        text-decoration: none;
        font-size: 50px;
        color: #3cff00;
        text-align: center;
        transition: transform 0.5s ease;
    }

    p {
        text-align: justify;
        max-width: 400px;
        margin-top: 50px;
        margin-bottom: 50px;
        font-size: 25px;
    }

    svg { 
        color: #3cff00;
        height: 80px; 
        width: 80px;
        transition: transform 0.5s ease;
    }

    svg:hover {
        color: #fff;
        transform: scale(1.2);
    }
    
    @media (max-width: 1200px) {
        width: 250px;
        height: 250px;
        margin-bottom: 50px;
        margin-top: 25px;

        .title {
            font-size: 30px;
        }

        p {
            margin-top: 20px;
            margin-bottom: 20px;
            max-width: 200px;
            text-align: justify;
            font-size: 14px;
        }

        svg {
            height: 40px;
            width: 40px;
        }
    }
`;

export default function ProjectsCard(project) {
  const {
    link, name, description, github,
  } = project;
  return (
        <CardStyled>
            <a
              className="title"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
            { name }
            <p>{ description }</p>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
            >
             <SiGithub />
            </a>
            </a>
        </CardStyled>
  );
}
