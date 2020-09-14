import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import Hobbie from '../components/Hobbies'
import Footer from '../components/Footer'
export default class hobbie extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <Hobbie></Hobbie>
                <Footer></Footer>
                </div>
        )
    }
}
