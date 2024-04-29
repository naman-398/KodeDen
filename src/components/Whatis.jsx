import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Commonbtn from '../commonbtn/Commonbtn'
import s2img from "../assets/images/s2img.webp";
import { Arrowellp2 } from '../icon/Icon';
const Whatis = () => {
    return (
        <div className=' section2-padding position-relative z-1' id="us">
            <span className=' position-absolute arrowelippse2'><Arrowellp2/></span>
            <Container className=' position-relative z-1'>
                <div className=' d-flex  -mx-3 flex-lg-row flex-column-reverse justify-content-between '>
                    <div className=' mt-4  mt-lg-0 px-3 px-lg-0'>
                        <h2 className=' fs-3lg lh-68 fw-medium color-offwhite mb-2 text-center text-lg-start  ' data-aos="zoom-in">What is KodeDen's <span className=' font-gradient'>6-Month</span> <span className=' d-xl-block '>Software Engineering Course?</span></h2>
                        <ul className=' fw-normal  fs-2sm lh-32 color-offwhite3 mb-2  ps-3 d-flex flex-column align-items-lg-start  align-items-center ' data-aos="zoom-in">
                            <li className=' text-center text-md-start' >With 6-figure salaries, unlimited PTO, and the flexibility to work anywhere in the world—(or</li>
                            <li>simply pick your kids up from school), you want in.</li>
                            <li>But who has $25k+ to drop on a bootcamp?</li>
                            <li>Or semesters of free time to dedicate to going back to school?</li>
                            <li className=' text-center text-sm-start'>Or YEARS to go through the trial and error involved in teaching yourself?</li>
                            <li>Heck, most people don’t even know where to start.</li>
                            <li className=' text-center text-lg-start '>If that's you, you’ve been dreaming of a high-paying tech career but paralyzed when it <span className=' d-lg-block '>comes time to take action.</span></li>
                        </ul>
                        <p className=' font-gradient fw-semibold  fs-2sm lh-23 text-center  text-lg-start mb-md-5 mb-sm-3 mb-2 ' data-aos="zoom-in">I want to Start My Software Engineering Journey!</p>
                        <div className=' pt-1 d-flex  justify-content-center justify-content-lg-start ' data-aos="zoom-in"><Commonbtn /></div>
                    </div>
                    <div className=' px-3 px-lg-0'>
                        <img src={s2img} alt="s2img" className=' s2_img w-100  h-100 mx-auto d-flex mx-lg-0  ' data-aos="zoom-in" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Whatis