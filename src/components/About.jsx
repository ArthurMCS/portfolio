import React from 'react';
import styled from 'styled-components';
import { GrReactjs } from 'react-icons/gr';
import {
  SiTestinglibrary, SiJavascript, SiCss3, SiHtml5, SiRedux, SiGit,
  SiDocker, SiMysql, SiNodedotjs, SiJest, SiUbuntu, SiExpress, SiSequelize,
  SiJsonwebtokens
} from 'react-icons/si';

const ArticleStyled = styled.article`
    display: block;
    margin-left: 650px;
    margin-right: auto;
    text-align: center;
    max-width: 1000px; 
    margin-top: 195px;

    .skills {
      margin-top: 195px;
      margin-bottom: 195px;
    }

    h1 { 
        font-size: 50px
    }

    div {
      margin-top: 60px;
    }

    p {
        text-align: justify;
        font-size: 30px;
        margin-bottom: 5px;
    }

    a {
        text-decoration: none;
        color: #3cff00;
        height: 150px;
        width: 150px;
        margin-bottom: 15px;

        P { 
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translateY(-5vh);
            visibility: hidden;
            transition: 0.3s;
            color: transparent;
            text-align: justify;
          font-size: 28px;

        }
    }

    a:hover {
        svg {
            filter: drop-shadow(5px 5px 35px #3cff00);
        }
        p { 
            transform: translateY(0vh);
            visibility: visible;
            color: #3cff00;   
        }
    }


    div {
        display: flex;
        width: 1000px;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    a svg {
        font-size: 80px;
        transition: transform 0.5s ease;
    }

    & a svg:hover {
        transform: scale(1.5);
    }
    
    @media (max-width: 1000px) {
        display: flex;
        margin-left: auto;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 195px;

        .skills {
          margin-top: 30px
        }

        h1 {
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 35px;
        }

       p {
           width: 305px;
           font-size: 17.8px;
           margin-bottom: 5px;
       } 

       div {
           margin-top: 20px;
           height: 100px;
           width: 300px;
           display: flex;
           align-items: center;
           justify-content: center;
          

           a {
              margin-bottom: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              height: 80px;
              width: 80px;
               
               svg {
                 height: 55px;
               }
    
               p {
                  transform: none;
                  margin-top: 10px;
                  font-size: 16px;
                  width: 0;
                  margin-bottom: 10px;
                  visibility: visible;
                  color: #fff;
                }
            }

          a:hover {
            transform: none;
          }

          svg:hover {
            transform: none;
          }
       }

    }
    }
`;

export default function About() {
  return (
      <ArticleStyled>
        <h1>Arthur Moreira</h1>
        <p>
          Comecei a entrar em contato com a programação,por curiosidade e por diversos outros motivos, 
          como por exemplo: a flexibilidade da carreira, o constante desenvolvimento que a área possui, e os 
          desafios que a carreira de programador proporciona. Deste modo, iniciei minha transição de carreira, 
          do Direito para a Programação.
        </p>
        <p> 
          Em Julho de 2021, entrei na <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer"> TRYBE </a>, 
          uma escola de programação que proporciona uma real experiência do cotidiano de uma pessoa desenvolvedora.
        </p>
        <p> 
          Como desenvolvedor Front-End, domino algumas tecnologias como HTML, CSS, JavaScript, React, Redux, Context API, 
          React Hooks, Bootstrap, Styled Components. Já como desenvolvedor Back-End, possuo experiência com Node-js, Express, 
          Sequelize, Mysql, APIs REST/RESTful, Docker, dentre outras.
        </p>
        <p>
          Além disso, tenho experiência com metodologias ágeis, como kanban e Scrum. 
        </p>
        <div className="skills">
        <h1 style={{ marginTop: '35px' }}>Skills</h1>
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
            <SiMysql/>
            <p>Mysql</p>
          </a>
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noreferrer"
          >
            <SiNodedotjs/>
            <p>Node.js</p>
          </a>
          <a
            href="https://jestjs.io/pt-BR/"
            target="_blank"
            rel="noreferrer"
          >
            <SiJest/>
            <p>Jest</p>
          </a>
          <a
            href="https://ubuntu.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SiUbuntu/>
            <p>Ubuntu</p>
          </a>
          <a
            href="https://expressjs.com/pt-br/"
            target="_blank"
            rel="noreferrer"
          >
            <SiExpress/>
            <p>Express</p>
          </a>
          <a
            href="https://sequelize.org/"
            target="_blank"
            rel="noreferrer"
          >
            <SiSequelize/>
            <p>Sequelize</p>
          </a>
          <a
            href="https://jwt.io/"
            target="_blank"
            rel="noreferrer"
          >
            <SiJsonwebtokens/>
            <p>JWT</p>
          </a>
        </div>
        </div>
      </ArticleStyled>
  );
}
