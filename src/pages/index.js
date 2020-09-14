import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Project from '../components/Projects'
import Footer from '../components/Footer'
import Hobbie from "../components/Hobbies"



const IndexPage = () => (
  <div>
   
    <Navbar></Navbar>
    <div style={{display:`block`,height:`1600px`}}>
 <div style={{display:"inline-block",height:`1500px`,width:`250px`,float:`left`}}>
  
  <About></About>
  </div>
  <div style={{display:"inline-block",height:`100px`,width:`300px`,marginLeft:`200px`,float:`left`}}>
  
  <Project></Project>
  </div>
  <div style={{display:"inline-block",height:`100px`,width:`150px`,marginLeft:`100px`,float:`left`}}>
  
  <Hobbie></Hobbie>
  </div>
  </div>
  <div style={{display:`block`}}>
  <Footer></Footer>
  </div>
  </div>
)

export default IndexPage
