import React from 'react'
import { Container } from 'react-bootstrap'
import Commonbtn from '../commonbtn/Commonbtn'
import s6img from "../assets/images/s6img.webp";
import { Arrowellp4 } from '../icon/Icon';
const Ourgurantted = () => {
    return (
        <div className=' s6-padding position-relative z-1'>
            <span className=' position-absolute z-0 arrowelispse4'> <Arrowellp4/></span>
            <Container className=' position-relative z-1'>
                <div className=' d-flex align-items-center justify-content-between flex-column-reverse  flex-lg-row '>
                    <div className=' max-w-592 mx-3 mt-4  mt-lg-0 '>
                        <h2 className=' fs-3lg lh-72 fw-medium color-offwhite-e4 mb-sm-2 mb-1 text-center text-lg-start ' data-aos="zoom-in">Our Guarantee</h2>
                        <p className=' fw-normal  fs-lg lh-41 color-offwhite3 mb-sm-3 mb-2  text-center text-lg-start ' data-aos="zoom-in">If you decide coding isn’t right for you within 15 days of starting the program, we’ll give you your money back. </p>
                        <p className=' fw-semibold  fs-2sm lh-23 font-gradient mb-sm-5 mb-3 text-center text-lg-start  ' data-aos="zoom-in">I want to become a software engineer in 6 months!</p>
                        <div className=' mt-1 d-flex  justify-content-center justify-content-lg-start ' data-aos="zoom-in"><Commonbtn /></div>
                    </div>
                    <div>
                        <img src={s6img} alt="s6img" className=' s6-img w-100  h-100 'data-aos="zoom-in" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Ourgurantted