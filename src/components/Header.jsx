import React from 'react'
import Navbarpage from './Navbarpage'
import { Container } from 'react-bootstrap'
import headremainimg from "../assets/images/headremainimg.webp";
import Commonbtn from '../commonbtn/Commonbtn';
import { Arrowellp1 } from '../icon/Icon';

const Header = () => {
    return (
        <div className=' header-bg '>
            <Navbarpage />
            <header id='home'>
                <Container className=' position-relative z-1'>
                    <span className=' position-absolute arrowelipse1'> <Arrowellp1/></span>
                    <p className=' fw-semibold  fs-2lg lh-41 text-center text-white mt-header-heading mb-3 position-relative z-1 '>Start the Mini-Course: 
                    <span className='font-gradient '> Rapidly Learning New  <span className=' d-lg-block  font-gradient'>
                    Technical Skills </span></span>
                    </p>
                    <p className=' fw-semibold  fs-lg lh-31 text-center color-offwhite mt-1 mb-4 position-relative z-1'>Learn All The Skills You Need To Become a 
                        <span className=' d-block '> Software Engineer!</span></p>
                        <img src={headremainimg} alt="header" className=' header_main_img w-100  h-100  d-flex mt-1 mb-1    mx-auto ' />
                        <p className=' fw-semibold fs-lg text-center lh-31 text-white mt-3 mb-2 '>Become a <span className=' font-gradient'>Software</span> Engineer Now!</p>
                        <p className=' fw-normal  fs-2sm color-offwhite3 lh-25 text-center mb-0  '>No Math or Science Background Needed</p>
                        <div className='  d-flex  justify-content-center header-btn-mt '>
                            <Commonbtn/>
                        </div>
                </Container>
            </header>
        </div>
    )
}

export default Header