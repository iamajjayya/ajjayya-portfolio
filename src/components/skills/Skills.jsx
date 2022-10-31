import React from 'react'
import '../skills/skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import Nav from '../nav/Nav'
const Skills = () => {
  return (
    <section id='skills' data-aos="slide-right" data-aos-delay="50" >

<h5>My</h5>
    <h2> Skills</h2>
  <div className="container skills__container">
    <div className="skills__frontend">
      <h3>Frontend Development</h3>
      <div className="skills__content">
        <article className='skills_details'>
       <BsFillPatchCheckFill className='icon' />
       <div>
       <h4>HTML</h4>
       <small className='text-light'>Intermediate</small>
       </div>
        </article>
        <article className='skills_details'>
       <BsFillPatchCheckFill className='icon' />
       <div>
       <h4>CSS</h4>
       <small className='text-light'>Intermediate</small>
       </div>
        </article>
        <article className='skills_details'>
       <BsFillPatchCheckFill className='icon' />
       <div>
       <h4>BOOTSTRAP</h4>
       <small className='text-light'>Basic</small>
       </div>
        </article>
        <article className='skills_details'>
       <BsFillPatchCheckFill className='icon' />
       <div>
       <h4>Java Script</h4>
       <small className='text-light'>Intermediate</small>
       </div>
        </article>
        <article className='skills_details'>
       <BsFillPatchCheckFill className='icon' />
       <div>
       <h4>React</h4>
       <small className='text-light'>Beginner</small>
       </div>
        </article>
      </div>
      </div>
      <div className="skills__Backend">
      <h3>Backend Development</h3>
      <div className="skills__content">
        <article className='skills_details'>
       <BsFillPatchCheckFill className='icon' />
       <div>
       <h4>C,C++</h4>
       <small className='text-light'>Basic</small>
       </div>
        </article>
        
        <article className='skills_details'>
       <BsFillPatchCheckFill className='icon' />
       <div>
       <h4>Java</h4>
       <small className='text-light'>Basic</small>
       </div>
        </article>
        <article className='skills_details'>
       <BsFillPatchCheckFill className='icon' />
       <div>
       <h4>Python</h4>
       <small className='text-light'>Intermediate</small>
       </div>
        </article>
        <article className='skills_details'>
       <BsFillPatchCheckFill className='icon' />
       <div>
       <h4>SQL</h4>
       <small className='text-light'>Intermediate</small>
       </div>
        </article>
       
      </div>
    </div>
  </div>
  <Nav />
    </section>

    
  )
}

export default Skills