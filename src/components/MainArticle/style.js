import styled from 'styled-components';

export const MainWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ul {
        list-style: none;
        text-align: center;
        display: flex;
        margin-top: 640px;
        margin-left: 85px;
    }

    li {
        margin: 20px;
    }

    a { 
        text-decoration: none;
    }

    a svg {
        font-size: 50px;
        color: #3cff00;
        transition: transform 0.5s ease;
    }

    & a svg:hover {
        transform: scale(1.5);
        filter: drop-shadow(5px 5px 20px #3cff00);
    }

    @media (max-width: 1200px) {
      justify-content: center;

      ul {
        display: none;
      }
    }

`;

export const MainArticle = styled.article`
    margin-left: 300px;
    position: relative;
    margin-top: 300px;
    margin-left: 300px;
    height: 400px;

    h1 {
        font-size: 50px;
        font-weight: 800;
    }

    p {
        text-align: justify-all;
        color: #e9e6e6;
        font-size: 25px;
        margin-bottom: 20px;
        margin-top: 20px;
        width: 500px ;
    }

    .p2 {
      margin-bottom: 55px;
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
        margin-top: 200px;
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

export const ImgWrapper = styled.div`
    border-radius: 50%;
    margin-top: 140px;
    margin-right: 700px;
    width: 400px;
    height: 400px;
    position: absolute;
    overflow: hidden;
    border: 8px solid  #3cff00;


  @media (max-width: 1200px) {
        position: absolute;
        top: -50px;
        width: 150px;
        height: 150px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border: 5px solid  #3cff00;
  }


`;

export const Img = styled.img`
    position: absolute;
    width: 100%;
    bottom: -140px;

    @media (max-width: 1200px) {
     bottom: -55px;
  }
`;
