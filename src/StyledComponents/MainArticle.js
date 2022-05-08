import styled from 'styled-components';

const MainArticle = styled.article`
    margin-left: 300px;
    position: relative;
    margin-top: 260px;
    margin-left: 900px;
    height: 400px;

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
        width: 500px ;
    }

    .p2 {
      margin-bottom: 40px;
    }

    a {
      text-decoration: none;
      font-size: 35px;
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
        margin-top: 250px;
        width: 200px;
        text-align: center;
        margin-bottom: 0;
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 225px;

        h1 {
            font-size: 30px;
            text-align: center;
        }

        p {
            display: block;
            font-size: 18px;
            text-align: justify-all;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
            width: 185px;  
        }

        a {
          font-size: 28px;
        }
    }

`;

export default MainArticle;
