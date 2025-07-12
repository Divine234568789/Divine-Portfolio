import { ArrowRight, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bakery Delight",
      description: "A wonderful landing page website using HTML and CSS",
      image: "/projects/BakeryDelight.png",
      tags: ["HTML", "CSS"],
      demoUrl: "https://divine234568789.github.io/Bakery-Website/",
      githubUrl: "https://github.com/Divine234568789/Bakery-Website",
    },
    {
      id: 2,
      title: "Sales Project",
      description: "A wonderful landing page website using HTML, CSS and JS",
      image: "/projects/SalesProjects.png",
      tags: ["HTML", "CSS", "JS"],
      demoUrl: "https://divine234568789.github.io/Sales-Project/",
      githubUrl: "https://github.com/Divine234568789/Sales-Project",
    },
    {
      id: 3,
      title: "Calculator",
      description: "A functional calculator built with HTML, CSS and JS",
      image: "/projects/Calculator.png",
      tags: ["HTML", "CSS", "JS"],
      demoUrl: "https://divine234568789.github.io/Calculator/",
      githubUrl: "https://github.com/Divine234568789/Calculator",
    },
  ];

  return (
    <div
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#282C33] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Featured <span className="text-pink-500">Projects</span>
        </h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          Here are some of my recent projects. Each project was a stepping stone
          to help me learn the basics of the Web-Designing World.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-800 text-white border border-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {project.title}
                </h3>
                <p className="text-center text-sm text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex justify-center gap-10">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition-colors"
                  >
                    <ExternalLink size={28} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition-colors"
                  >
                    <Github size={28} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Divine234568789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
