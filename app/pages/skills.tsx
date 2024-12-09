import {
  SiAmazon,
  SiAndroid,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGoogleplay,
  SiGraphql,
  SiHtml5,
  SiIos,
  SiJavascript,
  SiJira,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiSwift,
  SiTailwindcss,
  SiVsco,
} from "react-icons/si";
import { withHeader } from "../components";

const iconSize = 28;
const iconColor = "white";

const SkillsPage = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        {
          name: "React Js",
          description: "Dynamic web app development",
          icon: <SiReact size={iconSize} color={iconColor} />,
        },
        {
          name: "Next Js",
          description: "React framework for SSR",
          icon: <SiNextdotjs size={iconSize} color={iconColor} />,
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS for styling",
          icon: <SiTailwindcss size={iconSize} color={iconColor} />,
        },
        {
          name: "HTML5",
          description: "Structure web content effectively",
          icon: <SiHtml5 size={iconSize} color={iconColor} />,
        },
        {
          name: "CSS3",
          description: "Style and layout web pages",
          icon: <SiCss3 size={iconSize} color={iconColor} />,
        },
        {
          name: "JavaScript (ES6+)",
          description: "Interactive and modern JavaScript",
          icon: <SiJavascript size={iconSize} color={iconColor} />,
        },
      ],
    },
    {
      category: "Mobile Development",
      items: [
        {
          name: "React Native",
          description: "Cross-platform mobile app development",
          icon: <SiReact size={iconSize} color={iconColor} />,
        },
        {
          name: "Expo",
          description: "Streamlined React Native toolset",
          icon: <SiExpo size={iconSize} color={iconColor} />,
        },
        {
          name: "Android Development",
          description: "Native apps for Android devices",
          icon: <SiAndroid size={iconSize} color={iconColor} />,
        },
        {
          name: "iOS Development",
          description: "Native apps for iOS devices",
          icon: <SiIos size={iconSize} color={iconColor} />,
        },
        {
          name: "Kotlin",
          description: "Modern language for Android apps",
          icon: <SiKotlin size={iconSize} color={iconColor} />,
        },
        {
          name: "Swift",
          description: "Powerful language for iOS",
          icon: <SiSwift size={iconSize} color={iconColor} />,
        },
      ],
    },
    {
      category: "Backend Development",
      items: [
        {
          name: "Node.js",
          description: "Server-side JavaScript runtime",
          icon: <SiNodedotjs size={iconSize} color={iconColor} />,
        },
        {
          name: "Express.js",
          description: "Fast and flexible web server",
          icon: <SiExpress size={iconSize} color={iconColor} />,
        },
        {
          name: "MongoDB",
          description: "NoSQL database for scalable apps",
          icon: <SiMongodb size={iconSize} color={iconColor} />,
        },
        {
          name: "Firebase",
          description: "Cloud-based app backend services",
          icon: <SiFirebase size={iconSize} color={iconColor} />,
        },
        {
          name: "MySQL",
          description: "Relational database for structured data",
          icon: <SiMysql size={iconSize} color={iconColor} />,
        },
        {
          name: "GraphQL",
          description: "Efficient data query language",
          icon: <SiGraphql size={iconSize} color={iconColor} />,
        },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        {
          name: "Git",
          description: "Version control for projects",
          icon: <SiGit size={iconSize} color={iconColor} />,
        },
        {
          name: "GitHub Actions",
          description: "Automate CI/CD workflows easily",
          icon: <SiGithub size={iconSize} color={iconColor} />,
        },
        {
          name: "Postman",
          description: "Test and debug APIs effectively",
          icon: <SiPostman size={iconSize} color={iconColor} />,
        },
        {
          name: "AWS S3",
          description: "Scalable cloud storage solution",
          icon: <SiAmazon size={iconSize} color={iconColor} />,
        },
        {
          name: "Jira",
          description: "Manage and track team projects",
          icon: <SiJira size={iconSize} color={iconColor} />,
        },
        {
          name: "VS Code",
          description: "Powerful code editor by Microsoft",
          icon: <SiVsco size={iconSize} color={iconColor} />,
        },
        {
          name: "Play Store",
          description: "Publish and manage apps",
          icon: <SiGoogleplay size={iconSize} color={iconColor} />,
        },
        {
          name: "EAS",
          description: "Expo App Services for builds",
          icon: <SiExpo size={iconSize} color={iconColor} />,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-20">
      <div className="w-[90%]">
        <h1 className="text-4xl font-bold text-white mb-4">Skills</h1>
        <p className="text-lg text-gray-400 font-light leading-7">
          I bring extensive experience in leveraging diverse technologies to
          deliver impactful projects. From frontend frameworks like React.js and
          Next.js to mobile development with React Native and robust backend
          solutions using Node.js and Express.js, I ensure efficient and
          scalable outcomes. I've developed, maintained, and optimized
          applications, consistently embracing new tools and methodologies to
          enhance performance. My adaptability and passion for learning new
          technologies empower me to contribute effectively to innovative and
          dynamic projects.
        </p>
      </div>
      <div>
        {skills.map((skill, index) => (
          <div key={index} className="my-10">
            <h2 className="text-xl font-semibold text-indigo-400 mb-4">
              {skill.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skill.items.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 ">
                  {item?.icon}
                  <div>
                    <span
                      className="text-xl
                    text-gray-300"
                    >
                      {item?.name}
                    </span>
                    <p
                      className="text-xl
                    text-gray-500"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withHeader(SkillsPage);
