import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect'

class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'myskills': ['HTML', 'CSS', 'JS', 'ReactJS', 'PHP', 'SQL']
        }
    }

    render() {  
        return(
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1><ReactTypingEffect text={[ '" I never dreamed that the future will be the best. "', '" But I will do my best today. "'  ]} speed={100} eraseDelay={200}  /></h1>
            </div>
        );
    }
}

export default Skills;
