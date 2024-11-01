import React, { useState } from 'react'
import "./Module.css"

const Module = () => {

    const[module, showModule] = useState(false);

  return (
    <div className='moduleMainCnt'>
        <button onClick={() => showModule(true)} className='enqBtn'>
          Enquiry
        </button>
      {
        module &&
        <div className='moduleCnt'>
          <h1 className=''>Enquiry</h1>
          <form>
            <label>Name:</label>
            <input type='text' placeholder='Enter Your Name' />
            <label>Email:</label>
            <input type='email' placeholder='Enter Your Email' />
            <label>Phone Number:</label>
            <input type='text' placeholder='Enter Your Phone Number' />
            <label>Message:</label>
            <textarea placeholder='Enter Your Message'></textarea>
            <button className='sbmBtn'>Submit</button>
          </form>
          <button onClick={() => showModule(false)} className='clsBtn'>&times;</button>
        </div>
      }
    </div>  
  )
}

export default Module
