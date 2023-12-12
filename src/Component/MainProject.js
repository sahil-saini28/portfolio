import React from 'react'
import news from "./Images/News.jpeg";
import github from "./Images/Github.png";
import Note from "./Images/NoteSuit.jpeg";
import visit from "./Images/visit.png"
const MainProject = () => {
  return (
    <>
      <div  name="section4" className=" pt-6 bg-base-200">
      {/* <h1 className="text-5xl p-4 font-bold"> NOTE SUIT - "Harmonize Your Notes"! </h1> */}
  <div className=" flex justify-start sm:flex-col  lg:flex-row">
    <img 
    alt='/'
     className="rounded-3xl h-1/2 w-1/2 p-4 inline-block  "
     src={Note} />
    <div className='flex-col  '>
    <h1 className="text-5xl p-4 font-bold  "> NOTE SUIT - <span className='text-gray-600 ' >"Harmonize Your Notes"!</span> </h1>
    <h1 className="text-2xl  p-4 "> MERN Full Stack Web Application with Login Feature</h1>
      
    <a href='https://notesuit.netlify.app/' target="_blank" rel="noopener noreferrer"><img 
    alt='/'
     className="btn bg-gray-100 ml-6  "
     src={visit} /> Visit </a>
      <div className=" dropdown dropdown-top dropdown-end">
  <div tabIndex={0} role="button" className="
    m-1 ml-6 ">  <img 
    alt='/'
     className="btn bg-gray-100  "
     src={github} ></img> </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a  href='https://github.com/sahil-saini28/Note-Suit-app' target="_blank" rel="noopener noreferrer"  >Front-End </a></li>
    <li><a href='https://github.com/sahil-saini28/Note-Suit-Backend' target="_blank" rel="noopener noreferrer" >Back-End</a></li>
  </ul>
</div>
    </div>
  </div>
  <div className=' p-5'>
      <div className="max-w-4xl mx-auto  mt-4">
      <ul className="list-disc pl-4">
        <li>
          <strong>Frontend (React.js)</strong>: State Management with Redux: Employing Redux for efficient state management, ensuring smooth and predictable workflows within the application.
        </li>
        <li>
          <strong>User Authentication</strong>: Utilizing bcrypt.js and JSON Web Tokens (JWT) for secure user authentication, ensuring data privacy and controlled access.
        </li>
        <li>
          <strong>Backend (Node.js/Express.js)</strong>: RESTful API: Providing a robust RESTful API via Node.js and Express.js, ensuring standardized and efficient communication between the frontend and backend.
        </li>
        <li>
          <strong>Secure Data Storage in MongoDB</strong>: Safeguarding data integrity and confidentiality in MongoDB using Mongoose, incorporating 'salt & pepper' password hashing techniques for enhanced security.
        </li>
        <li className='mb-6'>
          <strong>Input Validation with Express-validator</strong>: Implementing Express-validator for stringent input validation, bolstering data integrity and fortifying against potential vulnerabilities.
        </li>
      </ul>
    </div>
  </div>
</div>
<div className='h-6'>

</div>






<div className=" pt-4 bg-base-200">
  <div className=" flex justify-start lg:flex-row">
   
    <div className='flex-col  '>
      <h1 className="text-5xl p-4 font-bold"> News App -"Your Daily News Blend!"</h1>
      <div className='fles ' >
    <h1 className="text-2xl p-4 "> A NEWS app that fetches real-time news from a pre-existing API.</h1>
      <a href='https://sahil-saini28.github.io/Media-string-/' target="_blank" rel="noopener noreferrer"  ><img 
    alt='/'
     className="btn bg-gray-100 ml-10 mt-10  "
     src={visit} /></a>
      <a href='https://github.com/sahil-saini28/Media-string-.git' target="_blank" rel="noopener noreferrer"  ><img 
    alt='/'
     className="btn bg-gray-100  ml-10 mt-10 "
     src={github} /></a>

    </div>
    </div>
    <img 
    alt='/'
     className=" rounded-xl h-2/6 w-1/2 p-4 inline-block  "
     src={news} />
  </div>
  <div className=' p-5'>
      <div className="max-w-4xl mx-auto  mt-4">
      <ul className="list-disc list-inside">
    <li>
      <strong>Technologies and Libraries Used</strong>
      <ul className="list-disc list-inside ml-4">
        <li><strong>React.js</strong>: Utilized for building the frontend components and managing the application's state.</li>
        <li><strong>Tailwind CSS</strong>: Employed for responsive and efficient styling, ensuring the app looks good across different devices and screen sizes.</li>
        <li><strong>React states</strong>: Used to manage the dynamic state of components, enabling the app to react to user interactions or changes in data.</li>
        <li><strong>useEffect</strong>: Leveraged to perform side effects in functional components, such as fetching data, managing subscriptions, or changing the DOM.</li>
        <li><strong>Fetch API</strong>: Utilized to fetch dynamic content, such as news articles, from an external API or source.</li>
        <li><strong>Loading spinner and progress bar</strong>: Implemented to provide visual feedback to users while content is being loaded, enhancing the user experience.</li>
        <li><strong>Categories</strong>: Included categories like sports, politics, sci-tech, etc., enabling users to filter and access news based on their interests.</li>
      </ul>
    </li>
  </ul>
    </div>
    
  </div>
</div>





</>
   
  )
}

export default MainProject
