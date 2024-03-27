import React from 'react';
import "./style.css"


function Project(props) {
  return (
    <div className='wrapper'>{props.children} </div>
  );
}

export default Project;
