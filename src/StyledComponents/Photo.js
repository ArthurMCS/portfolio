import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 50%;
    margin-top: 225px;
    margin-left: 150px;
    width: 400px;
    height: 400px;
    overflow: hidden;
    position: fixed;
    border: 8px solid  #3cff00;


  @media (max-width: 1200px) {
        position: absolute;
        margin-top: 50px;;
        width: 150px;
        height: 150px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border: 5px solid  #3cff00;
  }


`;

export const ImgStyled = styled.img`
    position: absolute;
    width: 100%;
    bottom: -140px;

    @media (max-width: 1200px) {
     bottom: -55px;
  }
`;
