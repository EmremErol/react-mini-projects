import React from "react";
import { useFormik } from "formik";
import validation from "./Validation.js";
import "./style.css";

function Contact() {
  const { handleSubmit, handleChange, values, isSubmitting, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
      validationSchema: validation, // Validation.js YUP schema ise böyle olmalı
      onSubmit: async (values, bag) => {
        await new Promise((r) => setTimeout(r, 1000));
        console.log(values);
        bag.resetForm();
      },
    });

  return (
    <div>
      <h2>İletişim</h2>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            value={values.firstName}
            placeholder="Jane"
            disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.firstName && errors.firstName && (
            <div className="error">{errors.firstName}</div>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            value={values.lastName}
            placeholder="Doe"
            disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.lastName && errors.lastName && (
            <div className="error">{errors.lastName}</div>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            value={values.email}
            disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            value={values.message}
            disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.message && errors.message && (
            <div className="error">{errors.message}</div>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
