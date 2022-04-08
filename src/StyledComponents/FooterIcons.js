import styled from 'styled-components';

export const SocialIconsStyled = styled.div`
    right: 25px;
    bottom: 35px;
    position: fixed;

    ul {
        list-style: none;
        text-align: center;
    }

    li {
        margin-bottom: 20px;
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


    @media (max-width: 1200px){
        display: none;
    }

`;