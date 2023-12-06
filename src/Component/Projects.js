import React from 'react'

const Projects = () => {
  return (
    <>
    <div>  <h1 className="text-5xl p-4 flex justify-center font-bold"> Insignificant projects </h1></div>
    <div className='flex justify-center '>
      
  <div className="card w-96 mx-4 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">TextUtils App</h2>
    <p>A React.js frontend application for text manipulation, featuring various functions like changing text case, removing extra spaces, and offering an intuitive user interface with responsive design using React components and Tailwind CSS.</p>
    <div className="card-actions justify-end">
     <a href='https://github.com/sahil-saini28/Text-utils.git' > <button className="btn btn-primary">Code</button></a>
    </div>
  </div>
</div>
<div className="card w-96 mx-4 bg-base-100  shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Currency Converter Using Api</h2>
    <p> A dynamic web application built with API integration allowing users to perform real-time conversion between various currencies, offering ease of use and accurate exchange rates fetched from an external API source."</p>
    <div className="card-actions justify-end">
    <a href='https://github.com/sahil-saini28/pass.git'>  <button className="btn btn-primary">Code</button></a>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Projects
