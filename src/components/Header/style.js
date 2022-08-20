import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 15px;
    height: 100px;
    width: 100%;

    @media (max-width: 1200px){
        height: 50px;
        .active {
          position: fixed;
      }
    }
`;

export const NavbarStyled = styled.section`
    display: flex;
    align-items: center;
    font-size: 40px;
    transition: 0.6s;

    & .link{
        color: #3cff00;
        margin-right: 50px;
        transition: transform 0.5s;
        margin-left: 20px;
        cursor: pointer;
    }

    & .link:hover {
        text-shadow: 0 0 5px #3cff00,
            0 0 25px #3cff00, 0 0 50px #3cff00, 0 0 200px #3cff00;
        transform: scale(1.3);
    } 
    
    @media (max-width: 1200px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: fixed !important;
      width: 100%;
      top: 0px;
      right: 0px;
      background-color: #111;
      height: 100%;
      width: 100%;
      z-index: 1000;
      opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
      transition: 0.6s;
      transform: translateY(
        ${({ isVisible }) => (isVisible ? '0' : '-100vh')}
      );

      svg {
        display: none;
      }

      .link {
          color: #3cff00;
          font-size: 35px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 30px;
          font-weight: 600;
      }
    }

`;

export const HambugerBtnStyled = styled.div`
    display: none;
 @media (max-width: 1200px) {
     display: flex;
     width: 50px;
     height: 50px;
     border-radius: 10%;
     position: absolute;
     margin-left: 40px;
     cursor: pointer;
     margin-right: 10px;
     z-index: 1001;
 
     &:after {
         content: '';
         position: absolute;
         width: 70%;
         height: 10%;
         border-radius: 20px;
         top: 30%;
         left: 15%;
         box-shadow: 2px 2px 15px #3cff00;
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
         box-shadow: 2px 2px 15px #3cff00;
         transition: all 1s ease;
 
     }
 
     &.active::after{
         transform: rotate(225deg);
         top: 45%;
     }
 
     &.active::before{
         transform: rotate(-405deg);
         top: 45%;
     }
 }

`;
