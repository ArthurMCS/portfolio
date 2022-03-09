import styled from 'styled-components';


export const Container = styled.div`
    border-radius: 50%;
    margin-top: -110px;
    margin-left: 180px;
    width: 400px;
    height: 400px;
    overflow: hidden;
    position: absolute;
    border: 8px solid  #fff;


  @media (max-width: 1200px) {
        margin-top: 20px;;
        width: 150px;
        height: 150px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border: 5px solid  #3cff00;
  }


`

export const ImgStyled = styled.img`
    position: absolute;
    width: 100%;
    bottom: -140px;

    @media (max-width: 1200px) {
     bottom: -55px;
  }
`