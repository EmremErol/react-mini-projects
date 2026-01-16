import React from 'react';
import { useFormik } from 'formik';

function Contact() {
  const {handleSubmit, handleChange} = useFormik({
    initialValues:{
        firstName: '',
        lastName: '',
        email: '',
        message:'',
      },
      onSubmit:(values) => {
        console.log(values);
      }
  })
  return (
    <div>
      <h2>İletişim</h2>

   
        <form onSubmit={handleSubmit} className="form">
          <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane" onChange={handleChange('firstName')} />
          </div>
          <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe" onChange={handleChange('lastName')} />
          </div>
          <div>
        
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange('email')}
        />
        </div>
        <div>
          <label htmlFor="email">Message</label>
          <textarea
          id="message"
          name="message"
          placeholder="your Message ..."
          type="email"
          onChange={handleChange('message')}
        />
        </div>
        <button type="submit">Submit</button>
      </form>
      



    </div>
  )
}

export default Contact
