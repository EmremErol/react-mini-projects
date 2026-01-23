import React from 'react'
import {object, string } from 'yup';

const required_message = "Bu alan zorunludur";

const contactSchema = object({
  firstName: string().required(required_message),
  lastName:string().required(required_message),
  email: string().email('Geçerli Bir E-mail Adresi Giriniz').required(required_message),
  message:string().min(5, 'Minimum 5 Karakter Geçerli').required(required_message)
});

export default contactSchema;