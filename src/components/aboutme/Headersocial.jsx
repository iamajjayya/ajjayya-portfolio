import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'



const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href="https:/www.linkedin.com/in/ajjayya-gv" target="__blank"><BsLinkedin /></a>
        <a href="https:/www.github.com/iamajjayya" target="__blank"><BsGithub /></a>
        <a href="https:/www.twitter.com" target="__blank"><BsTwitter/></a>

    </div>
  )
}

export default Headersocial