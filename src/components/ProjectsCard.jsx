/* eslint-disable react/jsx-indent */
import React from 'react';
import { SiGithub } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import StyledCard from '../StyledComponents/Cards';

export default function ProjectsCard(project) {
  const {
    link, name, description, github,
  } = project;

  return (
        <StyledCard>
            <h2 className="title">{ name }</h2>
            <p>{ description }</p>
            <section>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
            >
             <SiGithub />
            </a>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
            <CgWebsite />
            </a>
            </section>
        </StyledCard>
  );
}
