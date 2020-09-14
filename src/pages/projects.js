import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import Project from '../components/Projects'
import Footer from '../components/Footer'
export default class project extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <Project></Project>
                <Footer></Footer>
                </div>
        )
    }
}
