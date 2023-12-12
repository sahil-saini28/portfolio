import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {

  
    
const addNote = async(title, description, tag) => {
   toast("Thank you for reaching out!");
  const response = await fetch(`https://note-suit.onrender.com/api/notes/addnotes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2ODc2YTE4Y2YyNjY2NjJmMTcyNTA1In0sImlhdCI6MTcwMTc1MzI1Nn0.D1tKFQSaPurR6wFE5n_IXEObHHEXHFULby-aZs19kMU',
    },
    body: JSON.stringify({ title, description, tag })
  });
  toast("Noted!");
   

};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(formData.name, formData.email, formData.message)
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
    <div className=" min-w-max  p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 h-16 resize-none"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>
        <button 
          type="submit"
          className="btn btn-primary w-full"
        >
          Submit
          
        </button>
      </form>
      
    </div>
    <ToastContainer />
    </>
  );
};

export default ContactForm;
