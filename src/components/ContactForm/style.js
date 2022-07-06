import styled from 'styled-components';

const FormWrap = styled.section`
    margin-top: 100px;
    text-align: center;
    color:  #3cff00;

    h1 {
        font-weight: 400;
        font-size: 60px;
    }

    form {
        margin-top: 50px;
        max-width: 900px;
        display: block;
        margin-left: auto;
        margin-right: auto;

        label {
            display: block;
            font-size: 25px;
        }

        button {
            width: 900px;
            margin-top: 20px;
            background:  #3cff00;
            border: 1px solid #3cff00;
            color: black;
            font-weight: bold;

            &:hover {
                background:  #3cff00;
                border: 1px solid #3cff00;
                background: #111;
            }
        }


        .form-control:focus {
            border-color: #3cff00;
            box-shadow: inset 0 1px 1px #3cff00, 0 0 15px #3cff00;
        }

        @media (max-width: 1200px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            button {
                width: 328px;
                margin-bottom: 20px;
            }

        }
    }

    @media (max-width: 1200px) {
        margin-top: 50px;

        h1 {
            font-size: 45px;
        }
    }
`;

export default FormWrap;
