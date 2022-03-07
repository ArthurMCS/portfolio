import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion/dist/framer-motion';
import styled from 'styled-components';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const ContactsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  left: auto;
  right: auto;

  h1 {
    font-size: 60px;
    margin-top: 80px;
    margin-bottom: 5px;
  }

  p {
    font-size: 40px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;

    a {
        text-decoration: none;
        color: #3cff00;
        margin: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;

        P { 
            margin-top: 40px;
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
   
  }

  @media (max-width: 1200px){
    h1 {
      font-size: 40px;
    }


    p {
        font-size: 22px;
      }
  }

  }
`;

export default function Contacts() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <Header contacts/>
    <ContactsStyled>
      <h1>E-mail:</h1>
      <p>arthurmoreiradev@gmail.com</p>
      <h1>Telefone:</h1>
      <p>55 27 992879229</p>
      <div>
        <a href="https://www.linkedin.com/in/arthurmoreiracostasousa/" target="_blank" rel="noreferrer">
        <AiFillLinkedin />
        <p>linkedin</p>
        </a>
        <a  href="https://github.com/ArthurMCS" target="_blank" rel="noreferrer" >
        <AiFillGithub />
        <p>github</p>
        </a>
      </div>
    </ContactsStyled>
    </motion.div>
  )
}
