/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import projectsData from '../ProjectsDatas';
import ProjectsCard from '../components/ProjectsCard';
import ProjectsSection from '../StyledComponents/Projects';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <>
        <Header projects />
        <ProjectsSection>
          <h1>{'< Projetos />'}</h1>
          <div className="projectsContainer">
            {projectsData.map((project) => <ProjectsCard {...project} key={project.id} />)}
          </div>
        </ProjectsSection>
      </>
    </motion.div>
  );
}
