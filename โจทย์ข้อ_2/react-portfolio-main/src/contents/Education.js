 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard title="Information System" where="Bachelor Degree in Business Administration (Information System) Rajamangala University of Technology Isan. My certificate is as follows." from="2016" to="2020" />
                 <Widecard title="Science-Mathematics" where="Secondary School Mahitsaratibodee School. I am in High School, major science-mathematics" from="2013" to="2016" />
             </div>
         );
     }
 }
 
 export default Education;