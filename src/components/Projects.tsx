import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  url?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A fully responsive e-commerce solution with seamless checkout process.",
      category: "Web Development",
      imageUrl:
        "https://t3.ftcdn.net/jpg/04/07/95/92/240_F_407959290_GT9rPBgRKJfk8w3hdhpIbu6tHw439gzG.jpg",
      url: "https://react-ecommerce-template-lac.vercel.app/",
    },
    {
      id: 2,
      title: "Property Managment Mobile Application",
      description: "Application for selling and renting properties online",
      category: "Mobile App",
      imageUrl:
        "https://t4.ftcdn.net/jpg/01/71/46/69/240_F_171466951_rXXCgcX7n04WwuAHTndbWzLox2JlGLWx.jpg",
    },
    {
      id: 3,
      title: "AI Chatbot",
      description: "Chatbot which utlizes AI to answer the users questions",
      category: "Web Development",
      imageUrl:
        "https://t3.ftcdn.net/jpg/02/83/07/16/240_F_283071689_lmQNl1INWQGEUgEzPpkuzKA52LAUDkgp.jpg",
      url: "https://ai-chatbot-demo-coral-nu.vercel.app/",
    },
    {
      id: 4,
      title: "Corporate Website",
      description: "Modern corporate website with CMS integration.",
      category: "Web Design",
      imageUrl:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      url: "https://company-demo-khaki.vercel.app/",
    },
    {
      id: 5,
      title: "CRM Web App",
      description: "A web-based customer relationship management (CRM) platform for managing client interactions, sales, and business processes online.",
      category: "Web Development",
      imageUrl:
        "https://t4.ftcdn.net/jpg/05/39/08/33/360_F_539083351_DbZXB3Q3xjDXWwvpOu1SFDCXpV0OS7VX.jpg",
      url: "https://crm-demo-chi.vercel.app/",
    },

  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent work. We take pride in delivering
            pixel-perfect, mobile-first solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
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
                <button
                  className="mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition duration-300"
                  onClick={() => {
                    if (project.url) {
                      window.open(project.url, "_blank", "noopener,noreferrer");
                    } else {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {project.url ? "View Demo →" : "Request Demo →"}
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
