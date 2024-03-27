import React from "react"
import "../Footer/Footer.css"

const currentDate = new Date();
let currentYear = currentDate.getFullYear();


function Footer () {
	return (
				
  		<footer >
    		<p> Copyright © {currentYear}</p>
  		</footer>	
			
	)
};
export default Footer;
