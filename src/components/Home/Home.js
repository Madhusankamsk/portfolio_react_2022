import React from 'react'
import './Home.css'
import Profile from '../../assets/profile.jpg'

const Home = () => {
  return (
    <section id='home' >
        <div className='home-text' >
            <strong>Hello, it's me</strong>
            <h1>Andrew PT</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
            <a href='#summery' className='btn-link'>Scroll Fro Me</a>
        </div>
        <div className='home-img' >
            <div className='img-box'>
                <img src={Profile} alt='Profile' />
                <h2>DevAt-USA<br/><span>Full-Stack Developer</span></h2>
                <div className='social' >
                    <a href='#!' >
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                    <a href='#!' >
                        <i className='fa-brands fa-youtube'></i>
                    </a>
                </div>
                <a href='#!' className='hire-me' >Hire me</a>
            </div>
        </div>
    </section>
  )
}

export default Home