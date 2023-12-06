import React from 'react'
import html from "./Images/Html.png"
import java from  "./Images/Javascript.png"
import tail from "./Images/Tailwind.png"
import redux from "./Images/Redux.png"
import Rest from "./Images/Restapi.png"
import gitHub from "./Images/Github.png"
import Reacdt from "./Images/react.png"
import node from "./Images/Node.png"
import express from "./Images/Express.png"
import Mongo from "./Images/Mongo.png"
import leet from "./Images/leetcode.png"
import Contact from './Contact'
import { animateScroll as  scroller } from 'react-scroll';

import github from "./Images/Github.png";
import Linkedin from "./Images/Linkedin.png";
const Footer = () => {


  
    const scrollToElement = (element) => {
      scroller.scrollTo(element, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    };



  

  return (
    <div name="section3">
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className='grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-11 gap-4 '>
    <img src={html} alt='/'></img>
    <img src={tail} alt='/'></img>
    <img src={java} alt='/'></img>
    <img src={redux} alt='/'></img>
    <img src={Rest} alt='/'></img>
    <img src={gitHub} alt='/'></img>
    <img src={node} alt='/'></img>
    <img src={express} alt='/'></img>
    <img src={Mongo} alt='/'></img>
    <img src={leet} alt='/'></img>
    <img src={Reacdt} alt='/'></img>
    </div>
  <nav className="grid grid-flow-col gap-4">
    <div  onClick={() => scrollToElement('section1')}   className="link link-hover">Home</div>
    <div onClick={() => scrollToElement('section4')}  className="link link-hover">Projects</div>
    <div onClick={() => scrollToElement('section2')}  className="link link-hover">About</div>
    
  </nav> 
  <nav>
   
  </nav> 
  <div className="flex justify-start">
              {/* <a rel="noopener noreferrer" href={CV} target="_blank" > 
              <button className="btn flex btn-primary">Get my CV</button>

              </a> */}
              <a href="https://github.com/sahil-saini28"    ><img
                className=" btn mx-5 rounded-lg max-h-full"
                alt="/"
                src={github}
              ></img></a>
              <a href="https://www.linkedin.com/in/sahilsaini28" ><img
                className=" btn  rounded-lg max-h-full"
                alt="/"
                src={Linkedin}
              ></img></a>
            </div>
<Contact></Contact>

  
    <p>Copyright © 2023 - All right reserved by  SAHIL SAINI</p>
</footer>
      <div className='flex justify-center  bg-base-200  rounded'>

      </div>
    </div>
  )
}

export default Footer
