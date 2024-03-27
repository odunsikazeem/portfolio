import React from 'react';
import Card from '../card/Card';
import projectlist from '../projectlist';
import Project from "../project-folder/Project"
import Title from '../Title/Title';
import "./style.css"




function createCard(projectlist){
  return (
  <Card 
  id={projectlist.id}
  key = {projectlist.id}
  title ={projectlist.title}
  image ={projectlist.image}
  project = {projectlist.projectURL}
  github = {projectlist.github}
  info = {projectlist.info}
  />
  )
  }

function Projectspage() {
  return (
    <Project>
          <Title>Feel from to go through and peruse my work</Title>
            {projectlist.map(createCard)}
    </Project>        
  
  );
}

export default Projectspage;
