import React from "react";
import Myimage from "../../../asset/picture.jpg"
import Skills from "../../Skills/Skills"
import "./style.css"

function Homepage() {
  return (
    <div className="profile">
    <div className="homepage">
      <div className="homepage-row">
      <img className="avatar"  src={Myimage}  alt="profile-image"/>
      </div>
     <div className="homepage-column">
      <div className="column-item">
        <h1>Odunsi Akorede</h1>
      </div>
      <div className="column-item">
        <p>
          A Frontend Developer with passion for problems-solving and
          with keen interest in emerging technologies. I have honed my skill
          in Frontend development by using programming languages like
          HTML5, CSS, JavaScript, MediaQueries, Bootstraps, Git, GitHub and some modern framework like React and Nodejs.I am a product of edX
          bootcamp.
        </p>
      </div>
      </div>
    </div>
    <Skills/> 
    </div>
  );
}

export default Homepage;
