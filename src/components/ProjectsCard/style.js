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
    background:  #1C1C1C;

    a {
        cursor: pointer;
        text-decoration: none;
    }

    section {
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 20px;

        a {
            margin: 20px;
            flex-direction: column;
            display: inherit;
            flex-direction: column;
            text-align: center;
            text-decoration: none;
            color: #fff;
            margin-bottom: 35px;
            font-size: 18px;
            cursor: pointer;
        }
    }
    
    .title {
        margin-top: 55px;
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
        margin-bottom: 15px;
        font-size: 25px;
    }

    svg { 
        color: #3cff00;
        height: 52px; 
        width: 52px;
        transition: transform 0.5s ease;
        margin: 10px;
    }

    svg:hover {
        color: #fff;
        transform: scale(1.2);
    }
    
    @media (max-width: 1200px) {
        width: 250px;
        height: 350px;
        margin-bottom: 50px;
        margin-top: 25px;

        .title {
            margin: 0px;
            margin-top: 35px;
            font-size: 35px;
        }

        p {
            margin-top: 20px;
            margin-bottom: 0;
            max-width: 200px;
            text-align: justify;
            font-size: 15px;
        }


        svg {
            height: 35px;
            width: 35px;
        }
    }
`;

export default StyledCard;
