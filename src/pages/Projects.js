import React from 'react'
import Header from '../components/Header';


export default function Projects() {
    const projects = true;
    return (
        <>
            <Header projects={projects}/>
            <h1>Projects</h1>
        </>
    )
}
