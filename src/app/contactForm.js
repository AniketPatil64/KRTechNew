'use client';
import { useState } from 'react';

export default function contactForm() {
  const [email, setEmail] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:aniketpatil6400@gmail.com?subject=Let's Connect&body=Email: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email:</label><br />
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
