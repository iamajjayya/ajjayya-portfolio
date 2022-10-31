import React from 'react'
import CV from '../../assets/ajr.pdf'
import '../aboutme/about.css'
import { Link } from 'react-router-dom'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Download Resume</a>
       <Link to="/contact"> <a href='#contact' className='btn btn-primary'>Contact </a></Link>
    </div>
  )
}

export default CTA