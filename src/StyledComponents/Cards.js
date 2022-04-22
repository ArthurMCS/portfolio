import styled from 'styled-components';

const StyledCard = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    height: 450px;
    border: 1px solid #3cff00;
    border-radius: 5%;
    background-color: #272727c3;

    section {
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 20px;

        a {
            margin: 20px;
        }
    }
    
    .title {
        margin-top: 50px;
        text-decoration: none;
        font-size: 50px;
        color: #3cff00;
        text-align: center;
        transition: transform 0.5s ease;
    }

    p {
        text-align: justify;
        max-width: 400px;
        margin-top: 10px;
        margin-bottom: 50px;
        font-size: 25px;
    }

    svg { 
        color: #3cff00;
        height: 70px; 
        width: 70px;
        transition: transform 0.5s ease;
    }

    svg:hover {
        color: #fff;
        transform: scale(1.2);
    }
    
    @media (max-width: 1200px) {
        width: 250px;
        height: 250px;
        margin-bottom: 50px;
        margin-top: 25px;

        section { margin-bottom: 20px;}

        .title {
            margin: 0px;
            margin-top: 35px;
            font-size: 30px;
        }

        p {
            margin-top: 20px;
            margin-bottom: 10px;
            max-width: 200px;
            text-align: justify;
            font-size: 14px;
        }

        svg {
            height: 40px;
            width: 40px;
        }
    }
`;

export default StyledCard;
