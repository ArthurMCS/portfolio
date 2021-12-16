import React, {useEffect} from 'react'
import styled from 'styled-components'

const ArticleStyled = styled.article`
    margin-left: 300px;
    position: relative;
    margin-top: 300px;
    margin-left: 900px;

    h1 {
        font-size: 40px;
        font-weight: 500;
    }

    p {
        color: #e9e6e6;
        font-size: 25px;
        margin-bottom: 0px;
        margin-top: 0px;

    }
`

export default function Article() {

    useEffect(() => {
        const p1 = document.querySelector('.p1')
        const p2 = document.querySelector('.p2')
        const p1txtArray = p1.innerHTML.split('');
        const p2txtArray = p2.innerHTML.split('');
        p1.innerHTML = '';
        p2.innerHTML = '';
        p1txtArray.forEach((letra, index) => {
            setTimeout(() => {
            p1.innerHTML += letra;
            }, 75 * index)
        })
        setTimeout(() => {
            p2txtArray.forEach((letra, index) => {
                setTimeout(() => {
                p2.innerHTML += letra;
                }, 75 * index)
            })
        }, 2000)
    }, []);

    return (
        <ArticleStyled>
            <h1>Olá, Mundo!</h1>
            <p className='p1'>Meu nome é Arthur Moreira.</p>
            <p className='p2'>Sou estudante de desevolvimento web full stak na Trybe.</p>
        </ArticleStyled>
    )
}
