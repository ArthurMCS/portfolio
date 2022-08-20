import styled from 'styled-components';

const ContactsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  left: auto;
  right: auto;

  h1 {
    font-size: 63px;
    margin-top: 80px;
    margin-bottom: 5px;
  }

  p {
    font-size: 40px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;

    a {
        text-decoration: none;
        color: #3cff00;
        margin: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;

        P { 
           color: #fff;    
        }
    }

    div {
        display: flex;
        justify-content: space-around;
    }

    a svg {
        font-size: 80px;
    }
   
  }

  @media (max-width: 1200px){
    h1 {
      font-size: 45px;
    }


    p {
        font-size: 22px;
      }

  }
`;

export default ContactsStyled;
