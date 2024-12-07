import { CustomCarousel } from "../components";

const projects = {
  organization: [
    {
      orgName: "Tractor Junction",
      projectName: "Tractor Junction Mobile App",
      description:
        "A mobile app to manage tractor sales and customer interactions.",
      images: ["/assets/dummy.png", "/assets/dummy.png", "/assets/dummy.png"],
    },
  ],
  self: [
    {
      projectName: "Personal Portfolio",
      description: "A portfolio to showcase my skills and projects.",
      images: ["/assets/dummy.png", "/assets/dummy.png"],
    },
  ],
};

const ProjectsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">My Projects</h2>

      {/* Organization Projects */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Organization Projects</h3>
        {projects.organization.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center mb-8"
          >
            <div className="w-full lg:w-1/3 pr-6 mb-4 lg:mb-0">
              <h4 className="text-xl font-bold">{project.projectName}</h4>
              <p>{project.description}</p>
            </div>
            <div className="w-full lg:w-2/3">
              <CustomCarousel images={project.images} />
            </div>
          </div>
        ))}
      </section>

      {/* Self Projects */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Self Projects</h3>
        {projects.self.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center mb-8"
          >
            <div className="w-full lg:w-1/3 pr-6 mb-4 lg:mb-0">
              <h4 className="text-xl font-bold">{project.projectName}</h4>
              <p>{project.description}</p>
            </div>
            <div className="w-full lg:w-2/3">
              <CustomCarousel images={project.images} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsPage;
