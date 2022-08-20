import React from 'react';
import { GrReactjs } from 'react-icons/gr';
import {
  SiTestinglibrary, SiJavascript, SiCss3, SiHtml5, SiRedux, SiGit,
  SiDocker, SiMysql, SiNodedotjs, SiJest, SiUbuntu, SiExpress, SiSequelize,
  SiJsonwebtokens, SiTypescript, SiMongodb, SiPython, SiStyledcomponents,
} from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import SkillsDiv from './style';

export default function Skills() {
  return (
    <SkillsDiv>
      <h1>Skills</h1>
      <div>
        <a
          href="https://pt-br.reactjs.org/"
          target="_blank"
          rel="noreferrer"
        >
          <GrReactjs />
          <p>React</p>
        </a>
        <a
          href="https://redux.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <SiRedux />
          <p>Redux</p>
        </a>
        <a
          href="https://testing-library.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SiTestinglibrary />
          <p>R.T.L</p>
        </a>
        <a
          href="https://www.javascript.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SiJavascript />
          <p>Javascript</p>
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <SiTypescript />
          <p>Typescript</p>
        </a>
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
          target="_blank"
          rel="noreferrer"
        >
          <SiCss3 />
          <p>CSS</p>
        </a>
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
          target="_blank"
          rel="noreferrer"
        >
          <SiHtml5 />
          <p>HTML</p>
        </a>
        <a
          href="https://git-scm.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SiGit />
          <p>Git</p>
        </a>
        <a
          href="https://www.docker.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SiDocker />
          <p>Docker</p>
        </a>
        <a
          href="https://www.mysql.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SiMysql />
          <p>Mysql</p>
        </a>
        <a
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noreferrer"
        >
          <SiNodedotjs />
          <p>Node.js</p>
        </a>
        <a
          href="https://jestjs.io/pt-BR/"
          target="_blank"
          rel="noreferrer"
        >
          <SiJest />
          <p>Jest</p>
        </a>
        <a
          href="https://ubuntu.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SiUbuntu />
          <p>Ubuntu</p>
        </a>
        <a
          href="https://expressjs.com/pt-br/"
          target="_blank"
          rel="noreferrer"
        >
          <SiExpress />
          <p>Express</p>
        </a>
        <a
          href="https://sequelize.org/"
          target="_blank"
          rel="noreferrer"
        >
          <SiSequelize />
          <p>Sequelize</p>
        </a>
        <a
          href="https://jwt.io/"
          target="_blank"
          rel="noreferrer"
        >
          <SiJsonwebtokens />
          <p>JWT</p>
        </a>
        <a
          href="https://www.mongodb.com/pt-br"
          target="_blank"
          rel="noreferrer"
        >
          <SiMongodb />
          <p>MongoDB</p>
        </a>
        <a
          href="https://python.org.br/"
          target="_blank"
          rel="noreferrer"
        >
          <SiPython />
          <p>Python</p>
        </a>
        <a
          href="https://styled-components.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SiStyledcomponents />
          <p>StyledComp. </p>
        </a>
        <a
          href="https://sass-lang.com/"
          target="_blank"
          rel="noreferrer"
        >
          <DiSass />
          <p>Sass</p>
        </a>
      </div>
    </SkillsDiv>
  );
}
