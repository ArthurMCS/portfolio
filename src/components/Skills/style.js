import styled from 'styled-components';

const SkillsDiv = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    text-align: center;
    max-width: 1000px;
    overflow: hidden;

    h1 { 
        font-size: 55px
    }

    div {
      margin-top: 50px;
    }

    p {
        text-align: justify;
        font-size: 30px;
        margin-bottom: 5px;
    }

    a {
        text-decoration: none;
        color: #3cff00;
        height: 150px;
        width: 150px;
        margin: 15px;

        P { 
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translateY(-5vh);
            visibility: hidden;
            transition: 0.3s;
            color: transparent;
            text-align: justify;
            font-size: 28px;

        }
    }

    a:hover {
        svg {
            filter: drop-shadow(3px 5px 10px #3cff00);
        }

        p { 
            transform: translateY(0vh);
            margin-top: 25px;
            visibility: visible;
            color: #3cff00;   
        }
    }


    div {
        display: flex;
        width: 1000px;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    a svg {
        font-size: 80px;
        transition: transform 0.5s ease;
    }

    & a svg:hover {
        transform: scale(1.5);
    }

    @media (max-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 50px;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
        width: 300px;

        h1 {
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 35px;
        }

       p {
           width: 305px;
           font-size: 17.8px;
           margin-bottom: 5px;
       } 

       div {
           margin-top: 20px;
           width: 350px;
           display: flex;
           align-items: center;
           justify-content: center;
          

           a {
              margin-bottom: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              height: 80px;
              width: 80px;
               
               svg {
                 height: 55px;
               }
    
               p {
                  transform: none;
                  margin-top: 10px;
                  font-size: 16px;
                  width: 0;
                  margin-bottom: 10px;
                  visibility: visible;
                  color: #fff;
                }
            }

          a:hover {
            transform: none;
          }

          svg:hover {
            transform: none;
          }
       }

    }
`;

export default SkillsDiv;
