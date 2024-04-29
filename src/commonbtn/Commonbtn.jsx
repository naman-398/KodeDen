import React from 'react'
import { Phonedail } from '../icon/Icon'

const Commonbtn = (props) => {
  return (
<>
<button className=' commonbtn position-relative d-flex  align-items-center  '>
    <span className=' position-relative  z-1 '><Phonedail/></span>
    <span className=' fw-900 fs-3sm lh-26 color-offwhite position-relative  z-1 '>Book a Call NOW</span>
</button>
</>
    )
}

export default Commonbtn