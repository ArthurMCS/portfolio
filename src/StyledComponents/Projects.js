import styled from 'styled-components';

const ProjectsSection = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1 {
            font-weight: 400;
            font-size: 63px;
        }

        div {
            transition: all 0.5s;
        }


        @media(max-width: 1200px){
            h1 {
                font-size: 45px;
                margin-top: 50px;
                margin-bottom: 50px;
            }

            div:active {
            box-shadow: 0 0 5px #3cff00,
            0 0 25px #3cff00, 0 0 50px #3cff00, 0 0 100px #3cff00;
            cursor: pointer;

        }
        }
`;

export default ProjectsSection;
