import React, { Component } from 'react'
// import profilepic from '../img/profile.jpg'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.0-9/79238081_1259012480973029_7598320192036274176_n.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_eui2=AeHs1-sKIERg-l2Cr7Rs0Nn7tsASIj1B7g62wBIiPUHuDtsCjaUP96eNn7-Sg5cvjYnGhTq3Vc_FqoWnWudZHb9d&_nc_ohc=m9WbH_EGwNkAX_YTZbE&_nc_ht=scontent.fbkk13-2.fna&oh=9c8d4d373bd757e34ff2f4754d024830&oe=5FC1B2B5" alt="profile" className="profilepic" />
                {/* <img src={profilepic} /> */}
                <h3>Hi, I'm Yanaranop.Nau</h3>
                <div>Hi I'm Yanaranop Naulrahaeng I worked on the website development. I love the programming because of it's challenge. There are many stories about me to tell you.I used to work at a company revelsoft as a web developer. I got a job for Develop a website for a somboon printing company and Website development ERP System used in organizations. My skills as React, javascript, php, asp.net, HTML5, CSS</div>
            </div>
        );
    }
}

export default About;
