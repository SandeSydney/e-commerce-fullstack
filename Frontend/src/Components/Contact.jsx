import React, { useRef } from 'react'
import { useEffect } from 'react'

function Contact() {
  useEffect(()=>{
    nameRef.current.focus()
  },[])

  const nameRef = useRef(null)
  return (
    <div className="container containerContact">
      <div className='largeFormDiv'>
        <form className='contactForm'>
          <h2><u>Contact Us</u></h2>
          <div className="form-element">
            <label htmlFor="contactName">Name:</label>
            <input ref={nameRef} type="text" name='contactName' />
          </div>
          <div className="form-element">
            <label htmlFor="subject">Subject:</label>
            <input type="text" name='subject' />
          </div>
          <div className="form-element">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" cols={''} rows={'6'}></textarea>
          </div>
          <div className="formBtns">
            <button className='resetBtn' type="reset">Reset</button>
            <button className='submitBtn' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact