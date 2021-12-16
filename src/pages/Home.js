import React from 'react'
import Header from "../components/Header";
import Photo from "../components/Photo";
import Article from "../components/Article";
import styled from 'styled-components';
import Footer from '../components/Footer';

const Sidebar = styled.div`
  width: 20%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color:#3cff00;
`

export default function Home() {
    const home = true;
    return (
        <>
        <Header home={home}/>
        <Sidebar/>
        <Photo/>
        <Article/>
        <Footer/>
        </>
    )
}
