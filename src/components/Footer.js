import React from 'react';
import Image from "./image"
import './layout'


const Footer =()=>{
    return(
        <div style={{backgroundColor:`black`,color:`white`}}> 
            <div style={{display:`inline-block`,marginLeft:`100px`,float:"left",paddingTop:`30px`}}>
                <h1>Address </h1>
                <p>18/2 Tootpara EastLink Road,Khulna</p>
            </div>
            <div className="foot" style={{display:`inline-block`,marginLeft:'100px',color:`white`}}>
                <ul style={{color:`white`}}>
                   <li>
                <h2>LinkedIn</h2>
                <a href="https://www.linkedin.com/in/shagoto-rahman-656996188/">
                <p>www.linkedin.com/shagotorahman</p></a>
                </li>
                
                
               <li>
               <h2>Facebook</h2> <a href="https://www.facebook.com/roakstar.shrestho">
                <p>www.facebook.com/shagotorahman</p></a>
                </li>
                
                <li>
                <h2>Mail</h2>
                <p style={{color:`white`}}>shagoto1710@cseku.ac.bd</p>
                </li>
                
                </ul>
            </div>

            <div style={{display:`inline-block`,marginLeft:`100px`,float:"right",marginRight:`100px`,paddingTop:`30px`}}>
                <h2>Github</h2>
                <a href="https://github.com/shrestho10">
                <p style={{color:`white`}}>www.github.com/shrestho10</p>
                </a>
            </div>
        </div>
    )
}
export default Footer