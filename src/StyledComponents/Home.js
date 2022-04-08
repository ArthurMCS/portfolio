import styled from 'styled-components';

export const HomePage = styled.div`
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

export const Sidebar = styled.div`
  width: 20%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color:#3cff00;

  @media (max-width: 1200px) {
      display: none;
  }

`;
