import styled from 'styled-components';

const HomePage = styled.div`
    overflow-y: hidden;
     @media (max-width:1200px){
      display: flex;
      align-items: center;     
      flex-direction: column;
      margin: 0;

      ::-webkit-scrollbar {
        display: none;
      }
        
      .activeMenu {
          display: none;
      }
     }
`;

export default HomePage;
