import React, { useEffect } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import {
  Img, ImgWrapper, MainArticle, MainWrapper,
} from './style';
import me from '../../images/me2.jpeg';

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
    <MainWrapper>
      <ImgWrapper>
        <Img src={me} alt="Arthur Moreira" />
      </ImgWrapper>
      <ul>
        <li>
          <a href="https://github.com/ArthurMCS" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/arthurmoreiracs/" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
      <MainArticle>
        <h1>Olá, Mundo!</h1>
        <p className="p1">Meu nome é Arthur Moreira.</p>
        <p className="p2">Desenvolvedor Full-Stack, com foco em Javascript, React, Node-JS, mas sempre disposto a aprender e contribuir mais. </p>
        <a
          href="https://drive.google.com/file/d/1eg7RMzxIxUMlmUK4zpiMtHY75JZ68ogh/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {'< currículo />'}
        </a>
      </MainArticle>
    </MainWrapper>
  );
}
