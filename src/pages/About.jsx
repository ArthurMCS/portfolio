import React from 'react';
import styled from 'styled-components';
import { GrReactjs } from 'react-icons/gr';
import {
  SiTestinglibrary, SiJavascript, SiCss3, SiHtml5, SiRedux, SiGit,
} from 'react-icons/si';
import { motion } from 'framer-motion/dist/framer-motion';
import Header from '../components/Header';

const ArticleStyled = styled.article`
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 1000px; 
    margin-top: 100px;
    h1 { 
        font-size: 50px
    }

    a {
        text-decoration: none;
        color: #3cff00;

        P { 
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translateY(-5vh);
            visibility: hidden;
            transition: 0.3s;
            color: transparent;

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

    p {
        text-align: justify;
        font-size: 28px;
    }

    div {
        display: flex;
        justify-content: space-around;
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
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 30px;

        h1 {
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 35px;
        }

       p {
           width: 300px;
           font-size: 19px;
           margin-bottom: -40px;
       } 

       div {
           margin-top: 20px;
           display: flex;
           align-items: center;
           justify-content: center;
           flex-direction: column;   
       }

       a {
           margin-bottom: 10px;

           p {
               margin-top: 50px;
               display: flex;
               align-items: center;
               justify-content: center;
               margin-bottom: 5px;
               visibility: visible;
               color: #3cff00;
            }
       }
    }
    }
`;

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header about />
      <ArticleStyled>
        <h1>Arthur Moreira</h1>
        <p>
          No final de 2020, comecei a entrar em contato com a programação,
          por curiosidade e por diversos outros motivos,
          mas ainda sem muita seriedade. No entanto, enxerguei
          as possibilidades que a carreira de programador pode oferecer e iniciei
          minha transição de carreira, do Direito para a Programação. Deste modo, entrei na
          {' '}
          <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer"> TRYBE </a>
          em julho de 2021, a fim de cumprir este objetivo.
        </p>
        <h1 style={{ marginTop: '80px' }}>Skills</h1>
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
        </div>
      </ArticleStyled>
    </motion.div>

  );
}
