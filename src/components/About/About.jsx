import React from 'react';
import AboutArticle from './style';

export default function About() {
  return (
    <AboutArticle>
      <h1>Arthur Moreira</h1>
      <p>
        Comecei a entrar em contato com a programação, por curiosidade e por diversos outros
        motivos, como por exemplo: a flexibilidade da carreira, o constante desenvolvimento que
        a área possui, e os desafios que a carreira de programador proporciona. Deste modo, iniciei
        minha transição de carreira, do Direito para a Programação.
      </p>
      <p>
        Em Julho de 2021, entrei na
        <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer"> TRYBE </a>
        ,
        uma escola de programação que proporciona uma real experiência do cotidiano de uma pessoa
        desenvolvedora.
      </p>
      <p>
        Como desenvolvedor Front-End, domino algumas tecnologias como HTML, CSS, JavaScript, React,
        Redux, Context API,
        React Hooks, Bootstrap, Styled Components. Já como desenvolvedor Back-End, possuo
        experiência com Node-js, Express, Sequelize, Mysql, APIs REST/RESTful, dentre outras.
      </p>
      <p>
        Além disso, tenho experiência com metodologias ágeis, como kanban e Scrum.
      </p>
    </AboutArticle>
  );
}
