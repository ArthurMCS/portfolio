import React, { useEffect } from 'react';
import styled from 'styled-components';

const ArticleStyled = styled.article`
    margin-left: 300px;
    position: relative;
    margin-top: 260px;
    margin-left: 900px;

    h1 {
        font-size: 50px;
        font-weight: 500;
    }

    p {
        text-align: justify-all;
        color: #e9e6e6;
        font-size: 25px;
        margin-bottom: 20px;
        margin-top: 0px;
        width: 450px ;
    }

    .p2 {
      margin-bottom: 40px;
    }

    a {
      text-decoration: none;
      font-size: 30px;
      animation-name: display;
      animation-duration: 2.5s;
      animation-delay: 10s;
      animation-fill-mode: forwards;
      opacity: 0;
      color: #3cff00;
      transition: all 0.3s;
    }

    a:hover {
      text-shadow: 0 0 5px #3cff00,
      0 0 25px #3cff00, 0 0 50px #3cff00, 0 0 200px #3cff00;
    }

    @keyframes display {
        to {
          opacity: 1;
        }
      }



    @media (max-width: 1200px) {
        margin-top: 180px;
        width: 200px;
        text-align: center;
        margin-bottom: 0;
        justify-content: center
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 220px;

        h1 {
            font-size: 30px;
            text-align: center;
        }

        p {
            font-size: 18px;
            text-align: justify-all;
            margin-top: 20px;
            width: 185px;  
            margin-left: 5px ;
        }
    }

`;

export default function Article() {
  useEffect(() => {
    const p1 = document.querySelector('.p1');
    const p2 = document.querySelector('.p2');
    const p1txtArray = p1.innerHTML.split('');
    const p2txtArray = p2.innerHTML.split('');
    p1.innerHTML = '';
    p2.innerHTML = '';
    p1txtArray.forEach((letra, index) => {
      setTimeout(() => {
        p1.innerHTML += letra;
      }, 75 * index);
    });
    setTimeout(() => {
      p2txtArray.forEach((letra, index) => {
        setTimeout(() => {
          p2.innerHTML += letra;
        }, 75 * index);
      });
    }, 2000);
  }, []);

  return (
    <ArticleStyled>
      <h1>Olá, Mundo!</h1>
      <p className="p1">Meu nome é Arthur Moreira.</p>
      <p className="p2">Desenvolvedor Full-Stack, com foco em Javascript, React, Node-JS, mas sempre disposto a aprender e contribuir mais. </p>
      <a href="#" download>{'< currículo />'}</a>
    </ArticleStyled>
  );
}
