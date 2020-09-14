import React from 'react';
import Image from "./image"
import './layout.css'

const About =()=>{
    return(
        <div>
        <div style={{marginLeft:`100px`, display:`inline-block`}}>
        <ul >
            <h1>Education</h1>
            <li>
                <p>BSc,Computer Science and Engineering
                </p>
                <p>-Khulna University
                </p>
                <p>2017-2021</p>
                </li>
                <li>
                <p>HSC
                    </p>
                    <p>-M M City College,Khulna
                </p>
                <p>2016</p>
                </li>
                <li>
                <p>SSC
                    </p>
                    <p>-Khulna Zilla School
                </p>
                <p>2014</p>
                </li>
        </ul>
        </div>

        <div style={{marginLeft:`100px`, display:`inline-block`}}>
        <ul>
            <h1>Certifications</h1>
            <li>
                <p>Divisional Math Olympiad
                </p>
                <p>1st Runner-up
                </p>
                <p>2009,2010</p>
                </li>
                <li>
                <p>ProthomAlo i-Genius
                    </p>
                    <p>2nd Runner-up
                </p>
                <p>2013</p>
                </li>
                <li>
                <p>Coursera Online Certifications</p>
                   
                   
                       <p>Machine Learning,
                       Deep Learning,
                       Coursera,</p>
                      <p> Web Development,
                       Data Science,
                       </p>
                   
                </li>
        </ul>
        </div>


      
       
        
        </div>

    )
}

export default About