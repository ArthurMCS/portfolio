import styled from 'styled-components';

const AboutArticle = styled.article`
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 1000px; 
    margin-top: 150px;
    margin-bottom: 265px;

    h1 { 
        font-size: 55px;
    }

    p {
        text-align: justify;
        font-size: 30px;
        margin-bottom: 5px;
    }

    a {
        text-decoration: none;
        color: #3cff00;
    }


    
    @media (max-width: 1200px) {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 195px;
        margin-bottom: 0;
        overflow-y: hidden;
        position: relative;


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
    }
`;

export default AboutArticle;
