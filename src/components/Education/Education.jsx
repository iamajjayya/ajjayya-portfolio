
import '../Education/education.css'
import BU from '../../assets/bu.jpg'
import PU from '../../assets/pu.png'
import SL from '../../assets/sslc.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import React, {useEffect } from "react";
import Nav from '../nav/Nav'

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 400, 
      easing: 'ease', 
      once: false,
  });
  });
  return (
    <section id='education' data-aos="slide-right" data-aos-delay="50">
      <h5>My</h5>
    <h2> Education</h2>
      <div className="c" >
      <div className="cards" >
        <div className="card" >
          <img src={BU} alt="Bangalore University" className='card_img' />
         
            <span className='card__category'>Bacehlor of Computer Application</span>
            <h3 className='card__title'>College : AMC College </h3>
            <h3>82%</h3>
        
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src={PU} alt="Bangalore University" className='card_img' />
          <div className="card__info">
            <span className='card__category'>PU Karnataka</span>
            <h3 className='card__title'>College : Loyola Pu College </h3>
            <h3>90.4%</h3>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src={SL} alt="Bangalore University" className='card_img' />
          <div className="card__info">
            <span className='card__category'>SSLC</span>
            <h3 className='card__title'>College : LOYOLA School</h3>
            <h3>82%</h3>
          </div>
        </div>
      </div>
      </div>
      <Nav />
    </section>
  )
}

export default Education