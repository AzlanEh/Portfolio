const Projects = () => {
  const projects = [
    {
      title: "DashStream Mobile App",
      description:
        "A comprehensive mobile platform for booking and managing vehicle services, connecting customers with professionals. The app features distinct interfaces for customers, service professionals, and administrators, providing a seamless and efficient experience for all user types.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Tailwind CSS",
        "Jest",
      ],
      githubLink: "https://github.com/SatyamK1703/DashStream_Apk",
      liveLink: "https://github.com/SatyamK1703/DashStream_Apk/releases",
      features: [
        "Role-based access for customers, professionals, and admins",
        "Real-time service booking and management",
        "Secure in-app payment processing",
        "Membership and offer management system",
        "Location-based service area detection",
      ],
    },
    {
      title: "Trip List App",
      description:
        "A responsive weather application that displays current weather conditions and 5-day forecasts. Built with vanilla JavaScript and integrated with OpenWeatherMap API for real-time data.",
      technologies: ["React"],
      githubLink: "https://github.com/azlaneh/travel-list",
      liveLink: "https://azlan-duckanoo-1f2dca.netlify.app/",
      features: [
        "A simple and interactive travel checklist app built with React.",
        "Features state management, dynamic item handling, and responsive design",
        "Location search",
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my web development projects and skills in a clean, responsive layout.",
      technologies: ["React", "Tailwind CSS"],
      githubLink: "https://github.com/azlaneh/Aman-protfolio",
      liveLink: "https://azlan-protfolio-ashen.vercel.app/",
      features: [
        "A personal portfolio to showcase skills, projects, and contact info.",
        "Designed with a clean, modern layout and fully responsive.",
        "Includes project previews and social/contact links.",
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web
            development and problem-solving.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-black transition-colors duration-300 group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-black mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-black text-white text-center py-2 px-4 hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-black text-black text-center py-2 px-4 hover:bg-black hover:text-white transition-colors duration-300 text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
