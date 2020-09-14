import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer'
export default class about extends Component{
    render(){
        return(
            <div  >
            <Navbar></Navbar>
            <About></About>
            <Footer
            ></Footer>

           
            </div>
        )
    }
}