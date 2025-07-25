import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Ai Food-Nutrition Detection WebApp",
    description: "FoodSnap AI is a smart web application that allows users to snap or upload pictures of food—especially Kerala traditional dishes—and instantly receive detailed macro nutrient information, including calories, protein, carbs, sugar, fat, and fiber. It solves the lack of nutrition data available for local Kerala food by using a custom-trained AI model.",
    image: "projects/foodsnap.png",
    tags: ["Reactjs", "Expressjs", "Mongodb","tensorflow.js"],
    demoUrl: "https://foodsnap-ai.onrender.com/",
    githubUrl: "https://github.com/Sourav4554/foodsnap-ai/tree/solution-sourav-krishna",
  },
  {
    id: 2,
    title: "E-commerce WebApp",
    description: "AquaCart is a full-fledged e-commerce platform for buying and selling ornamental fish. It provides a seamless shopping experience with features like product management, secure payments, shopping cart, wishlist, promo codes, and an AI chatbot for fish-related queries.",
    image: "projects/aquacart.png",
    tags: ["React", "Expressjs", "Mongodb"],
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7316149980191211520/",
    githubUrl: "https://github.com/Sourav4554/AquaCart",
  },
  {
    id: 3,
    title: "Quiz Website",
    description:
      "Excited to present my interactive Quiz App built with HTML, CSS, Bootstrap, and JavaScript! It features 10 engaging multiple-choice questions, a scoring system (1 point per correct answer), and sleek CSS animations for a dynamic user experience.",
    image: "/projects/quizz.png",
    tags: ["HTML", "CSS", "JS","Bootstrap"],
    demoUrl: "https://sourav4554.github.io/Quiz-application/",
    githubUrl: "https://github.com/Sourav4554/Quiz-application",
  },
  
  // add more projects as needed
];

const PROJECTS_PER_PAGE = 3;

export const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-amber-600"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 mt-[-5%]"
                />
              </div>

              <div className="p-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-muted text-muted-foreground hover:bg-muted/80  hover:text-amber-600 disabled:opacity-50 cursor-pointer"
          >
            Previous
          </button>
          <span className="px-4 py-2  text-muted-foreground text-amber-600 text-sm">
           <span className="text-white"> Page</span> <span className="text-lg">{currentPage}</span> <span className="text-white">of</span> <span className="text-white">{totalPages}</span>
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-muted text-muted-foreground hover:bg-muted/80 hover:text-amber-600 disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 bg-amber-600"
            target="_blank"
            href="https://github.com/Sourav4554"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
