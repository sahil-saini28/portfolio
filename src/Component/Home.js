import React from "react";

import Sahilpng from "./Images/sahilphoto.png";
import github from "./Images/Github.png";
import Linkedin from "./Images/Linkedin.png";
import CV from "./Images/SAHIL_CV.pdf"
const Home = () => {
  return (
    <div>
      
      <div  name="section1" className="  glass  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={Sahilpng}
            alt="im"
            className="ease-linear  transform hover:scale-125 transition duration-500  px-6 py-2 m-6 inline max-w-sm rounded-lg shadow-2xl sm:h-1/2"
          />
          <div>
            <div className="sm:word-wrap" >
            <h1 className="text-4xl font-bold">
              
              Full Stack Web Developer!
            </h1>
            <p className="py-6  ">
              <h1> Hi, i'am <h1 className="text-5xl font-bold">
              
              SAHIL
            </h1> 👋 </h1>
              Welcome to a world where design meets functionality, weaving
              seamless user experiences in the front end while engineering
              robust solutions in the back end – a fusion of creativity and
              technical prowess encapsulated in my portfolio.
            </p>
            </div>
            <div className="flex justify-start">
              <a rel="noopener noreferrer" href={CV} target="_blank" > 
              <button className="btn flex btn-primary">Get my CV</button>

              </a>
              <a href="https://github.com/sahil-saini28"   target="_blank" rel="noopener noreferrer"  ><img
                className=" btn mx-5 rounded-lg max-h-full"
                alt="/"
                src={github}
              ></img></a>
              <a href="https://www.linkedin.com/in/sahilsaini28" target="_blank" rel="noopener noreferrer" ><img
                className=" btn  rounded-lg max-h-full"
                alt="/"
                src={Linkedin}
              ></img></a>
            </div>
          </div>
        </div>
      </div>
      <div name="section2" className=" grid  place-items-center">
        <div className="card my-6 w-2/3 bg-base-100 shadow-xl">
          <div className="card-body min-w-full ">
            <h2 className="card-title ">About ME!</h2>
            <div className=" p-6 rounded-lg shadow-md">
      <p className="text-lg">
        Today, equipped with a comprehensive grasp of full-stack development, I'm enthusiastic about contributing impactful solutions to the dynamic realm of web development. My journey taught me that setbacks are springboards for success, fueling my eagerness to make meaningful strides in this field.
      </p>
      <p className="text-lg mb-4">
        This immersive experience shaped me into a problem solver and a creative thinker, fostering a relentless pursuit of excellence. The challenges encountered fortified my character and fueled my resolve.
      </p>
      <p className="text-lg mb-4">
        Diving headfirst into mastering web development, I spent countless hours refining skills, solving intricate problems, and crafting robust applications. Each line of code penned reflected my perseverance and hunger for knowledge.
      </p>
      <p className="text-lg mb-4">
        In March 2022, I embraced a transformative journey into Full Stack Web Development. This transition symbolized my determination, resilience, and unwavering commitment to growth.
      </p>
      <p className="text-lg">
        Graduating in B.Tech amidst the challenges of the pandemic in July 2020, I initially pursued govt.Tech job opportunities without success. However, this setback inspired a pivotal shift in my career path.
      </p>
    </div>
          </div>
        </div>
      </div>
      <div>  <h1 className="text-5xl p-4 flex justify-center font-bold">  Projects </h1></div>

      {/* <div className="my-6">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div name="section2" className="timeline-start md:text-end mb-10">
              <div className="text-4xl text-start mx-8">Projects</div>
              <time className="font-mono italic">September 2023</time>
              <div className="text-lg font-black">Notes App</div>
              <div className="card card-side bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    MERN Full Stack Web Application with Login Feature!
                  </h2>
                  <p className="justify-start">
                    Teck Stack: React, Node, Express,MongoDB{" "}
                  </p>
                  <img
                    className=" rounded-lg max-h-full"
                    alt="/"
                    src={Note}
                  ></img>
                  <div className="w-full max-w-2xl mx-auto mt-8">
                    <table className="min-w-full  shadow-md rounded-lg overflow-hidden">
                      <thead className="bg-gray-800 text-white">
                        <tr>
                          <th className="text-left py-2 px-4">
                             Technologies and Features Used
                          </th>
                          <th className="text-left py-2 px-4">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 px-4 font-semibold">
                            Frontend (React.js)
                          </td>
                          <td className="py-3 px-4">
                            State Management with Redux: Employing Redux for
                            efficient state management, ensuring smooth and
                            predictable workflows within the application.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold">
                            User Authentication
                          </td>
                          <td className="py-3 px-4">
                            Utilizing bcrypt.js and JSON Web Tokens (JWT) for
                            secure user authentication, ensuring data privacy
                            and controlled access.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold">
                            Backend (Node.js/Express.js)
                          </td>
                          <td className="py-3 px-4">
                            RESTful API: Providing a robust RESTful API via
                            Node.js and Express.js, ensuring standardized and
                            efficient communication between the frontend and
                            backend.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold">
                            Secure Data Storage in MongoDB
                          </td>
                          <td className="py-3 px-4">
                            Safeguarding data integrity and confidentiality in
                            MongoDB using Mongoose, incorporating 'salt &
                            pepper' password hashing techniques for enhanced
                            security.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold">
                            Input Validation with Express-validator
                          </td>
                          <td className="py-3 px-4">
                            Implementing Express-validator for stringent input
                            validation, bolstering data integrity and fortifying
                            against potential vulnerabilities.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">preview</button>
                    <button className="btn btn-primary">Code</button>
                  </div>
                </div>
              </div>
              
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">August 2023</time>
              <div className="text-lg font-black">News App</div>
              <div className="card card-side bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                  A NEWS app that fetches real-time news from a pre-existing API.
                  </h2>
                  <p className="justify-start">
                    Teck Stack: React, Rest Api, ontext Api
                  </p>
                  <img
                    className=" rounded-lg max-h-full"
                    alt="/"
                    src={news}
                  ></img>
               <div className="w-full max-w-2xl mx-auto mt-8">
      <table className="min-w-ful shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-left py-2 px-4">Technologies and Libraries Used</th>
            <th className="text-left py-2 px-4">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-semibold">React.js</td>
            <td className="py-3 px-4">Utilized for building the frontend components and managing the application's state.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-semibold">Tailwind CSS</td>
            <td className="py-3 px-4">Employed for responsive and efficient styling, ensuring the app looks good across different devices and screen sizes.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-semibold">React states</td>
            <td className="py-3 px-4">Used to manage the dynamic state of components, enabling the app to react to user interactions or changes in data.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-semibold">useEffect</td>
            <td className="py-3 px-4">Leveraged to perform side effects in functional components, such as fetching data, managing subscriptions, or changing the DOM.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-semibold">Fetch API</td>
            <td className="py-3 px-4">Utilized to fetch dynamic content, such as news articles, from an external API or source.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-semibold">Loading spinner and progress bar</td>
            <td className="py-3 px-4">Implemented to provide visual feedback to users while content is being loaded, enhancing the user experience.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-semibold">Categories</td>
            <td className="py-3 px-4">Included categories like sports, politics, sci-tech, etc., enabling users to filter and access news based on their interests.</td>
          </tr>
        </tbody>
      </table>
    </div>

                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">preview</button>
                    <button className="btn btn-primary">Code</button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">June 2023</time>
              <div className="text-lg font-black">Currency Converter Using Api</div>
                         
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Home;
