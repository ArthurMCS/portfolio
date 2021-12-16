import styled from 'styled-components';

export const HeaderStyled = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 15px;
    margin-right: 20px;
`

export const NavbarStyled = styled.section`
    display: flex;
    font-size: 30px;

    & .link{
        color: #3cff00;
        margin-right: 50px;
        transition: transform 0.6s ease;
        animation-name: display;
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
        opacity: 0;
    }

    @keyframes display {
        to { opacity: 1; }
    }


    & .link:hover {
        transform: scale(1.5);
        cursor: pointer;
        color: #e9e6e6;
    } 
    

`

export const HambugerBtnStyled = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 10%;
    position: relative;
    margin-left: 40px;
    cursor: pointer;

    &:after {
        content: '';
        position: absolute;
        width: 70%;
        height: 10%;
        border-radius: 20px;
        top: 30%;
        left: 15%;
        background-color: #3cff00;
        transition: all 1s ease;

    }

    &:before {
        content: '';
        position: absolute;
        width: 70%;
        height: 10%;
        border-radius: 20px;
        top: 60%;
        left: 15%;
        background-color: #3cff00;
        transition: all 1s ease

    }

    &.active::after{
        transform: rotate(225deg);
        top: 45%;
        background-color: #e9e6e6
    }

    &.active::before{
        transform: rotate(-405deg);
        top: 45%;
        background-color: #e9e6e6
    } 
`