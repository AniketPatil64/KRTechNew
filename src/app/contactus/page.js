'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Styles from "../page.module.css"

export default function contactus() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:aniketpatil6400@gmail.com?subject=Let's Connect&body=Email: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={Styles.contact_container}>
      <h1 className={Styles.form_header}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label className={Styles.email_label} htmlFor="email">Enter your email:</label><br />
        <input className={Styles.email_input_box}
          type="email" 
          id="email" 
          placeholder='Enter Email'
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        /><br /><br />
        <button className={Styles.submit_form_btn} type="submit">Submit</button>
      </form>
    </div>
  );
}