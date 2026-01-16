import React from 'react';
import { Formik} from 'formik';

function Contact() {
  return (
    <div>
      <h2>İletişim</h2>

    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({handleSubmit, handleChange}) => (
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane" onChange={handleChange('firstName')} />

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe" onChange={handleChange('lastName')} />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange('email')}
        />
        <button type="submit">Submit</button>
      </form>
      )

      }
    </Formik>
    </div>
  )
}

export default Contact
