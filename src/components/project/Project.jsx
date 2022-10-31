import React from 'react'
import '../project/project.css'
import VI from '../../assets/vi.png'
import BA from '../../assets/ba.png'
import Nav from '../nav/Nav'
const Project = () => {
  return (
    <section id='project' data-aos="slide-right" data-aos-delay="50">
     
     <h5>My</h5>
    <h2>Projects</h2>
      <div className="c">
      <div className="cards">
        <div className="card">
          <img src={BA} alt="Bangalore University" className='card_img' />
             <div className="wrapper">
              <div className="dynamic-txts">
            <span className='card__category'>It’s on online web Application, in this user can sell and buy their second 
 hand/ old products</span>
 </div>
             </div>
        </div>
      </div>
      
      <div className="cards">
        <div className="card">
          <img src={VI} alt="Bangalore University" className='card_img' />
          <div className="card__info">
            <span className='card__category'>Tracking visitors who check in and check out, recording their details what 
 purpose them came and also recording details of apartment workers.
</span>
           
          </div>
        </div>
      </div>
      </div>
      <Nav />
    </section>
  )
}


export default Project