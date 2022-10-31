import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import {VscProject} from 'react-icons/vsc'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
  <nav>
  
 <Link to="/"> <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === 'about' ? 'active':''} ><AiOutlineUser /></a></Link>
 <Link to="/education"><a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === 'education' ? 'active':''}>< BiBook/></a></Link>
 <Link to="/skills"><a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === 'skills' ? 'active':''}>< RiServiceLine /></a></Link>
 <Link to="/project"><a href='#project' onClick={() => setActiveNav('#project')} className={activeNav === 'project' ? 'active':''}><VscProject/></a></Link>
 <Link to="/contact"> <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === 'contact' ? 'active':''}><BiMessageSquareDetail /></a></Link>
  </nav>
   
    
  )
}

export default Nav