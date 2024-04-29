import React from 'react'
import s4img from "../assets/images/s4img.webp";
import { Container } from 'react-bootstrap';
const Areyou = () => {
    return (
        <div className=' s4-padding' id="are">
            <Container  >
                <div className=' d-flex flex-column flex-lg-row   align-items-center  justify-content-between '>
                    <div className=''>
                        <img src={s4img} alt="s4img" className=' s4img w-100  h-100 ' data-aos="zoom-in"/>
                    </div>
                    <div className=' max-w-570 mx-auto mx-lg-0 mt-4 mt-lg-0'>
                        <h2 className=' fs-3lg lh-68 fw-medium color-offwhite mb-sm-2 mb-1 text-center text-lg-start ' data-aos="zoom-in">Are You A Good Fit For Our Program?</h2>
                        <p className=' fw-normal  fs-2sm lh-23 color-offwhite-e4 mb-sm-3 mb-2  text-center text-lg-start ' data-aos="zoom-in">About Who The Program is For</p>
                        <p className=' fw-semibold   fs-2sm lh-23 font-gradient mb-sm-2 mb-1 mt-1  text-center text-lg-start  ' data-aos="zoom-in">Our 6-Month Software Engeering Course is for individuals that...</p>
                        <p className=' fw-normal  fs-2sm lh-23 color-offwhite2 mb-sm-3 mb-2 text-center text-lg-start  ' data-aos="zoom-in">Want to take action now but don't have years to waste in university Are extremely motivated and want to succeed Have dreamed of becoming a software engineer but don't have hundreds of thousands of dollars lying around</p>
                        <p className=' fw-semibold   fs-2sm lh-23 font-gradient mb-sm-2 mb-1 mt-1  text-center text-lg-start  ' data-aos="zoom-in">It isn't for...</p>
                        <p className=' fw-normal  fs-2sm lh-23 color-offwhite2 mb-0 text-center text-lg-start  ' data-aos="zoom-in">People that aren't self-starters People that don't have a sense of urgency to become a software engineeer People that aren't serious about fulfilling their dream</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Areyou