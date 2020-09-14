import React from 'react';
import Image from "../components/image"
import './layout.css'

const Navbar =()=>{
    return(
        <div >
        <div style={{ marginLeft:`450px`,maxWidth: `300px`}}  >
        
        <Image   />
        
         </div>
         <h1 style={{marginLeft:`410px`}}>Shagoto Rahman Shrestho</h1>
            <nav>
                <ul>
                   <a href='/'> <li>Home</li></a>
                   <a href='/about/'> <li>About</li></a>
                   <a href='/projects/'> <li >Projects</li></a>
                   <a href='/hobbie/'> <li >Hobbies</li></a>
                   
                </ul>
            </nav>
       
        </div>
    )
}
export default Navbar