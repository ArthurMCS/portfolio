import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { GrReactjs } from 'react-icons/gr';
import { SiTestinglibrary, SiJavascript, SiCss3, SiHtml5, SiRedux, SiGit } from 'react-icons/si';


const ArticleStyled = styled.article`
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 1000px; 
    margin-top: 100px;

    a {
        text-decoration: none;
        color: #3cff00;
    }

    p {
        text-align: justify;
        font-size: 28px;
    }
    div {
        margin-top: 50px;
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
`





export default function About() {
    const about = true;
    return (
       <>
           <Header about={about}/>
            <ArticleStyled>
                <h1>Arthur Moreira</h1>
                <p>No final de 2020, comecei a entrar em contato com a programação, por curiosidade e por diversos outros motivos,
                mas sem muita seriedade. Ainda assim, enxerguei as possibilidades que a carreira de programador pode oferecer, como o dinamismo do mercado,
                o pragmatismo em buscar novos conhecimentos, mas principalmente o prazer  que tenho em estudar programação. Entrei na
                 <a href='https://www.betrybe.com/' target="_blank" rel="noreferrer"> TRYBE</a> em julho de 2021, desde então a minha evolução tem sido enorme. </p> 
                 <h1 style={{marginTop: "80px"}}>Conhecimento </h1>
                 <div>
                     <a href='https://pt-br.reactjs.org/' target="_blank" rel="noreferrer"><GrReactjs /></a>
                     <a href='https://redux.js.org/' target="_blank" rel="noreferrer"><SiRedux/></a>
                     <a href='https://testing-library.com/' target="_blank" rel="noreferrer"><SiTestinglibrary /></a>
                     <a href='https://www.javascript.com/' target="_blank" rel="noreferrer"><SiJavascript /></a>
                     <a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target="_blank" rel="noreferrer"><SiCss3/></a>
                     <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML' target="_blank" rel="noreferrer"><SiHtml5/></a>
                     <a href='https://git-scm.com/' target="_blank" rel="noreferrer"><SiGit/></a>
                </div>
            </ArticleStyled>
       </>
       
    )
}
