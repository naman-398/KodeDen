import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import s3img1 from "../assets/images/s3img1.webp";
import s3img2 from "../assets/images/s3img2.webp";
import s3img3 from "../assets/images/s3img3.webp";
import { Arrow, Arrowellp3 } from '../icon/Icon';
const Fromconfused = () => {
    return (
        <div className=' s3-padding position-relative z-1' id="why">
            <span className=' position-absolute  z-0 arrowellipse3'> <Arrowellp3/></span>
            <Container className=' position-relative z-1'>
                <h2 className=' fs-3lg lh-68 fw-medium color-offwhite mb-2 text-center  ' data-aos="zoom-in">“From Confused to Coder”: Kodeden's <span className=' d-xl-block '> Exclusive 6-Month <span className=' font-gradient'>Software Engineering </span>Course</span></h2>
                <p className=' fw-normal  fs-2sm lh-23 color-offwhite-e4 text-center mb-3  ' data-aos="zoom-in">Through twice-weekly live lectures and at-home exercises, you’ll:</p>
                <p className=' fw-normal  fs-2sm lh-23 color-offwhite2 text-center mb-sm-3 ' data-aos="zoom-in">Learn everything you need to know to break into tech from senior engineers with experience at <span className=' d-block '>Apple, Amazon, and the DOD.</span></p>
                <Row className=' max-w-941 mx-auto mt-md-5 mt-3 pt-3 justify-content-center justify-content-lg-start  position-relative z-1'>
                    <Col >
                        <div className=' s3-card mx-auto h-100 d-flex flex-column justify-content-end position-relative' data-aos="zoom-in">
                            <div className=' position-absolute end-0 top-0'>
                                <div className=' position-relative z-0'>
                                <img src={s3img1} alt="s3img1" className=' s3-img-bg position-relative  z-0' />
                                <img src={s3img1} alt="s3img1" className=' s3-img position-absolute start-0 top-0  z-0' />
                                </div>
                            </div>
                            <div className=' d-flex justify-content-between align-items-end '>
                                <p className=' fw-semibold  fs-1lg lh-47 color-offwhite2 mt-auto mb-0 '>01</p>
                            </div>
                            <p className=' fw-bold fs-3sm lh-26 color-offwhite-e4'> <span className=' d-block '>Master </span>
Full-Stack Coding Skills <span className='ms-1'> <Arrow/></span>
</p>
                        </div>
                        </Col>
                        <Col lg={4} md={6} className=' col-12 mt-sm-4 mt-3 mt-md-0 '>
                        <div className=' s3-card mx-auto h-100 d-flex flex-column justify-content-end position-relative' data-aos="zoom-in">
                            <div className=' position-absolute card2-s3 end-0'>
                                <div className=' position-relative z-0'>
                                <img src={s3img2} alt="s3img1" className=' s3-img-bg position-relative  z-0' />
                                <img src={s3img2} alt="s3img1" className=' s3-img position-absolute start-0 top-0  z-0' />
                                </div>
                            </div>
                            <div className=' d-flex justify-content-between align-items-end '>
                            <p className=' fw-semibold  fs-1lg lh-47 color-offwhite2 mt-auto mb-0 '>02</p>
                            </div>
                            <p className=' fw-bold fs-3sm lh-26 color-offwhite-e4'> <span className=' d-block '>Build a </span>
 Standout Portfolio <span className='ms-1'> <Arrow/></span>
</p>
                        </div>
                    </Col>
                        <Col lg={4} md={6} className=' col-12 mt-lg-0 mt-sm-4 mt-3 '>
                        <div className=' s3-card mx-auto h-100 d-flex flex-column justify-content-end position-relative' data-aos="zoom-in">
                            <div className=' position-absolute top-0 end-0'>
                                <div className=' position-relative z-0'>
                                <img src={s3img3} alt="s3img1" className=' s3-img-bg position-relative  z-0' />
                                <img src={s3img3} alt="s3img1" className=' s3-img position-absolute start-0 top-0  z-0' />
                                </div>
                            </div>
                            <div className=' d-flex justify-content-between align-items-end '>
                            <p className=' fw-semibold  fs-1lg lh-47 color-offwhite2 mt-auto mb-0 '>03</p>
                            </div>
                            <p className=' fw-bold fs-3sm lh-26 color-offwhite-e4'> <span className=' d-block '>Launch  </span>
                            Your Tech Career <span className='ms-1'> <Arrow/></span>
</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Fromconfused