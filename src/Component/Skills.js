import React from 'react';

const SkillsSection = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Tailwind CSS',
    'Redux',
    'RESTful APIs',
    'MongoDB',
    'Express.js',
    'Git/GitHub',
    'Responsive Web Design',
    'Version Control',
    'Postman',
    'Problem Solving',
    'Agile Methodologies',
    'UI/UX Design ',
    'Testing and Debugging',
    'Cross-browser Compatibility',
  ];
  
  return (
    <>    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="  ease-linear skeleton  transform hover:scale-125 transition duration-400 rounded-lg shadow-md p-4 text-center">
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>

  );
};

export default SkillsSection;
