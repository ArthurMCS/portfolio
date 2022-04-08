/* eslint-disable react/jsx-indent */
import React from 'react';
import { StyledCard } from '../StyledComponents/Cards';
import { SiGithub } from 'react-icons/si';


export default function ProjectsCard(project) {
  const {
    link, name, description, github,
  } = project;
  return (
        <StyledCard>
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
        </StyledCard>
  );
}
