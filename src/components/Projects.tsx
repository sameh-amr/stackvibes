import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce solution with seamless checkout process.',
      category: 'Web Development',
      imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      title: 'Property Managment Mobile Application',
      description: 'Application for selling and renting properties online',
      category: 'Mobile App',
      imageUrl: 'data:image/jpeg;base64,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',
    },
    {
      id: 3,
      title: 'Corporate Website',
      description: 'Modern corporate website with CMS integration.',
      category: 'Web Design',
      imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      title: 'Online booking website',
      description: 'Website for booking hotels online',
      category: 'Web Development',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent work. We take pride in delivering pixel-perfect, mobile-first solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition duration-300">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;