import { ArrowRight, CodeXml, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bakery Delight",
      description: "A wonderful landing page website using HTMl and CSS",
      image: "projects/BakeryDelight.png",
      tags: ["HTML", "CSS"],
      demoUrl: " https://divine234568789.github.io/Bakery-Website/",
      githubUrl: "https://github.com/Divine234568789/Bakery-Website",
    },
    {
      id: 2,
      title: "Sales Project",
      description: "A wonderful landing page website using HTMl,CSS and JS",
      image: "projects/SalesProjects.png",
      tags: ["HTML", "CSS", "JS"],
      demoUrl: " https://divine234568789.github.io/Sales-Project/",
      githubUrl: "https://github.com/Divine234568789/Sales-Project",
    },
    {
      id: 3,
      title: "Calculator",
      description: "A wonderful landing page website using HTMl,CSS and JS",
      image: "projects/Calculator.png",
      tags: ["HTML", "CSS", "JS"],
      demoUrl: " https://divine234568789.github.io/Calculator/",
      githubUrl: "https://github.com/Divine234568789/Calculator",
    },
  ];
  return (
    <div id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-pink-500">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was a stepping stone
          to help me learn the basics of the Web-Designing World.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-38 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform rounded-lg duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 bg-gray-950">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-900 border border-black text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-center">
                  {" "}
                  {project.title}
                </h3>
                <p className="text-center text-sm pb-5">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    <ExternalLink size={35} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="hover:text-pink-500 transition-colors duration-300 relative right-20"
                  >
                    <Github size={35} />
                  </a>
                  <div className="flex space-x-3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Divine234568789"
            target="_blank"
            className="w-fit flex items-center mx-auto bg-pink-500 p-2 rounded-xl gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
