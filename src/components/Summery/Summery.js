import React from 'react'
import './Summery.css'
import CV from '../../assets/cv.pdf'

const Summery = () => {
  return (
    <section id='summery' >
        <div className='summery-heading' >
            <strong>My Skillset</strong>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            <a href={CV} download className='btn-link'>
                Get CV <i className='fa-solid fa-download' ></i>
            </a>
        </div>
        <div className='summery-details' >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            </p>
        </div>
    </section>
  )
}

export default Summery