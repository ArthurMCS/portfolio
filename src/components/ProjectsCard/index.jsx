/* eslint-disable react/jsx-indent */
import React from 'react';
import { SiGithub } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import StyledCard from './style';

export default function ProjectsCard(project) {
  const {
    link, name, description, github,
  } = project;

  return (
        <StyledCard>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="title">{ name }</h1>
          </a>
            <p>{ description }</p>
            <section>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
            >
             <SiGithub />
              gitHub
            </a>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
            <CgWebsite />
             site
            </a>
            </section>
        </StyledCard>
  );
}
