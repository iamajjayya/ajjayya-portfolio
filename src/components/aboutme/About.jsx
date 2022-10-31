import React from 'react'
import '../aboutme/about.css'
import CTA from '../aboutme/CTA'
import Headersocial from '../aboutme/Headersocial'
import AJ from '../../assets/AJ.png'
import Nav from '../nav/Nav'

const About = () => {
  return (
    <section id="about" data-aos="slide-right" data-aos-delay="30">
      
    <div className='about__container'>
      <div className="about__details">
    <img src={AJ} alt="ajay"  className='image'/>
     <h5> 👋 Hello</h5>
     <h5>I am</h5>
    <h2> Ajjayya</h2>

        <Headersocial />
<div className="social">
<CTA  />
</div>
    <pre>"  
    To work on innovative and challenging job  where there are opportunities  to expose <br />
    my talent 🧿 and prove my ability to undertake job responsibility and strive for the <br/>
    success of an organization 🏢.
      
      "</pre>
      <Nav />
      </div>
     
    </div>
   
    </section>
  )
}

export default About