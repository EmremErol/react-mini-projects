import React from 'react';
import { useFormik } from 'formik';

function Contact() {
  const {handleSubmit, handleChange, values, isSubmitting} = useFormik({
    initialValues:{
        firstName: '',
        lastName: '',
        email: '',
        message:'',
      },
      onSubmit: async(values, bag) => {
        await new Promise((r) => setTimeout(r, 1000));
        console.log(values);

        bag.resetForm();
      }
  })
  return (
    <div>
      <h2>İletişim</h2>

   
        <form onSubmit={handleSubmit} className="form">
          <div>
        <label htmlFor="firstName">First Name</label>
        <input 
            id="firstName" 
            name="firstName"
            placeholder="Jane" 
            disabled={isSubmitting}
            onChange={handleChange('firstName')

        }  value={values.firstName}/>
          </div>
          <div>
        <label htmlFor="lastName">Last Name</label>
        <input 
            id="lastName"
            name="lastName"
            placeholder="Doe"
            disabled={isSubmitting}
            onChange={handleChange('lastName')

             } value={values.lastName} />
          </div>
          <div>
        
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
          disabled={isSubmitting}
          onChange={handleChange('email')}
        />
        </div>
        <div>
          <label htmlFor="email">Message</label>
          <textarea
          id="message"
          name="message"
          placeholder="your Message ..."
          type="text"
          value={values.message}
          disabled={isSubmitting}
          onChange={handleChange('message')}
        />
        </div>
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
      



    </div>
  )
}

export default Contact
