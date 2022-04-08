import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import Header from '../components/Header';
import { projectsData } from '../ProjectsDatas';
import ProjectsCard from '../components/ProjectsCard';

const ProjectsSection = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1 {
            font-weight: 400;
            font-size: 63px;
        }

        div {
            transition: all 0.5s;
        }

        div:hover {
            box-shadow: 0 0 5px #3cff00,
            0 0 25px #3cff00, 0 0 50px #3cff00, 0 0 100px #3cff00;
            cursor: pointer;

        }

        @media(max-width: 1200px){
            h1 {
                font-size: 45px;
                margin-top: 50px;
                margin-bottom: 50px;
            }

            div:active {
            box-shadow: 0 0 5px #3cff00,
            0 0 25px #3cff00, 0 0 50px #3cff00, 0 0 100px #3cff00;
            cursor: pointer;

        }
        }
`;

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
          {projectsData.map((project, index) => <ProjectsCard {...project} key={index} />)}
        </ProjectsSection>
      </>
    </motion.div>
  );
}
