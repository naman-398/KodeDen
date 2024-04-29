import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Navcross, Navline } from '../icon/Icon';


const Navbarpage = () => {
    const [first, setfirst] = useState(false)
    function show() {
        setfirst(!first)  
        if (first === false) {
          document.body.classList.add('overflow_hidden')
        }
        else {
          document.body.classList.remove('overflow_hidden')
        }
    }
  return (
            <div>
         <Container className=' pt-18 w-100   '>
            <div className=' d-flex  align-items-center  justify-content-end '>
<div className= "d-flex  align-items-center  mb-0  ps-0 gap-5" >
<ul className={`${first ? "nav-true" : "nav-false"} d-flex  align-items-center  mb-0  ps-0 gap-nav-links   mobile-view w-100 `}>
    <li className=' list-unstyled '><a href="#home" onClick={show} className=' fw-medium   lh23 color-offwhite2  mb-0  pagelinks position-relative text-decoration-none '>Home</a></li>
    <li className=' list-unstyled '><a href="#us" onClick={show} className=' fw-medium   lh23 color-offwhite2  mb-0  pagelinks position-relative text-decoration-none  '>About</a></li>
    <li className=' list-unstyled '><a href="#are" onClick={show} className=' fw-medium   lh23 color-offwhite2  mb-0  pagelinks position-relative text-decoration-none  '>Program</a></li>
    <li className=' list-unstyled '><a href="#why" onClick={show} className=' fw-medium   lh23 color-offwhite2  mb-0  pagelinks position-relative text-decoration-none  '>How it works</a></li>
    <li className=' list-unstyled '><a href="#faq" onClick={show} className=' fw-medium   lh23 color-offwhite2  mb-0  pagelinks   position-relative text-decoration-none  '>FAQs</a></li>
    <span>
    <button className=' navbtn position-relative  overflow-hidden  d-none d-sm-block '>
    <span className=' fw-900 fs-1sm lh-20 color-offwhite position-relative  z-1 '>Book a Call NOW</span>
</button>
    </span>
</ul>
</div>
<span>
    <button className=' navbtn position-relative  overflow-hidden  d-sm-none d-block  z-2 '>
    <span className=' fw-900 fs-1sm lh-20 color-offwhite position-relative  z-1 '>Book a Call NOW</span>
</button>
    </span>
<span onClick={show} className=' d-sm-none d-block  position-relative z-11'>{first === false ? <Navline/>: <Navcross/>}</span>
</div>
        </Container>
    </div>
  )
}

export default Navbarpage