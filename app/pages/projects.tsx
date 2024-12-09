import { withHeader } from "../components";

const projects = [
  {
    title: "Tractor Junction Mobile App",
    description:
      "A mobile app designed to manage tractor sales and customer interactions. Optimized for rural performance, financial tools, and seamless UI.",
    features: [
      "1M+ downloads showcasing user trust and value.",
      "EMI calculator for financial planning.",
      "Custom animations to enhance interactivity.",
      "Rural-friendly performance with optimized data handling.",
    ],
    techStack: ["React Native", "Firebase", "Redux"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.tractorjunction&hl=en",
    sourceLink: "#",
    image: "/assets/tractor.png",
    bgColor: "#4a90e2",
  },
  {
    title: "Truck Junction",
    description:
      "A comprehensive solution for truck dealers and buyers with advanced search filters and personalized features.",
    features: [
      "Dynamic truck listings and filters.",
      "Interactive UI for diverse users.",
      "Performance-focused architecture.",
      "Seamlessly managed increasing user data.",
    ],
    techStack: ["React Native", "Laravel", "Firebase"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.truckjunction&hl=en",
    sourceLink: "#",
    image: "/assets/truck.png",
    bgColor: "#f36f45",
  },
  {
    title: "Valuation App",
    description:
      "An app for calculating valuations of used vehicles with user-friendly interfaces and accurate results.",
    features: [
      "Accurate valuation algorithms for used vehicles.",
      "Intuitive, easy-to-use UI for all users.",
      "Optimized for low-end devices with efficient performance.",
      "Secure data handling with Firebase integration.",
    ],
    techStack: ["React Native", "Node.js", "MongoDB"],
    liveLink: "",
    sourceLink: "#",
    image: "/assets/valuation.png",
    bgColor: "#8bc34a",
  },
  {
    title: "Traco - Vehicle Maintenance System",
    description:
      "A system for tracking vehicle maintenance schedules and tasks. Features intuitive design for fleet managers and customers.",
    features: [
      "Integrated tracking for maintenance schedules.",
      "Custom reminders for upcoming tasks.",
      "Secure document storage and management.",
      "Seamless syncing between mobile and backend.",
    ],
    techStack: ["React Native", "Express.js", "MongoDB"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.tractorjunction.traco&hl=en",
    sourceLink: "#",
    image: "/assets/traco.png",
    bgColor: "#ff5722",
  },
  {
    title: "CRMS for Call Centre Team",
    description:
      "A CRM system for managing customer calls efficiently with advanced analytics and team collaboration features.",
    features: [
      "Real-time call tracking for better customer service.",
      "Analytics dashboard for team performance insights.",
      "Integrated ticketing for follow-up tasks.",
      "Cross-platform functionality for desktops and mobiles.",
    ],
    techStack: ["React", "Node.js", "MongoDB"],
    liveLink: "",
    sourceLink: "#",
    image: "/assets/crms.png",
    bgColor: "#009688",
  },
  {
    title: "Vehicle Management System (VMS)",
    description:
      "System for nationwide inventory and sales management. Seamless integration with enterprise workflows.",
    features: [
      "Defined task assignments per user role.",
      "Optimized image and video uploads for efficiency.",
      "Connected seamlessly with existing systems.",
      "Managed complex inventory and sales data.",
    ],
    techStack: ["React", "Node.js", "MongoDB", "GraphQl"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.tractorjunction.vms&hl=en",
    sourceLink: "#",
    image: "/assets/vms.png",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-gray-800">
      {/* Top Section */}
      <div className="">
        <img
          src={project.image}
          alt={project.title}
          style={{
            height: "250px", // Adjust this for 2/3 visible
            width: "500px", // Adjust for aspect ratio
          }}
        />
      </div>

      {/* Bottom Section */}
      <div className="p-4">
        <div className="h-16 mb-4">
          <h5 className="text-gray-400 font-bold text-sm ">{project.title}</h5>
          <p className="text-gray-300 text-sm  ">{project.description}</p>
        </div>

        <ul className="text-gray-300 text-sm mb-4 space-y-1">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-400 font-bold mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-xs text-white px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={project.liveLink}
            className={
              project.liveLink
                ? "bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-md"
                : "bg-gray-500 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-md"
            }
          >
            {project.liveLink ? "Live Preview " : "Confidential"}
          </a>
          {/* <a
            href={project.sourceLink}
            className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-md"
          >
            Source Code
          </a> */}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="py-16 px-20">
      <h2 className="text-3xl font-bold text-white mb-12 ">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default withHeader(ProjectsSection);
