import styled from 'styled-components';

const SocialIconsStyled = styled.div`
    margin-top: 100px;
    bottom: 100px;
    left: 235px;
    position: fixed;

    ul {
        list-style: none;
        text-align: center;
        display: flex;
    }

    li {
        margin: 20px;
    }

    a { 
        text-decoration: none;
    }

    a svg {
        font-size: 49px;
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

export default SocialIconsStyled;
