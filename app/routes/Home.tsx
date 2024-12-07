import React, { Suspense } from "react";
import { ProfileOrganizations } from "../components/orgs";
import Image from "next/image";
import data from "../../data.json";
import { withHeader } from "../components";

function HomeRoute() {
  const UserText = () => {
    return (
      <div className="p-4 sm:p-6 lg:p-8 text-center space-y-2">
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-loose">
          Hi, I’m{" "}
          <span className="font-bold text-indigo-600">Deepak Gupta</span>, a
          passionate software developer specializing in{" "}
          <span className="text-blue-500">
            Mobile Application (React Native)
          </span>{" "}
          and{" "}
          <span className="text-blue-500">Web Application (NextJs,NodeJs)</span>
          .
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-loose">
          I create intuitive, high-performing mobile and web applications that
          solve real-world problems.
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-loose">
          Currently innovating at{" "}
          <span className="font-semibold" style={{ color: "#CD454E" }}>
            Tractor Junction
          </span>{" "}
          <a
            href="https://www.tractorjunction.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="ms-1 inline-block rounded-md"
              src={data.orgs[0].avatarUrl}
              alt={data.orgs[0].name}
              title={[data.orgs[0].name].filter((o) => !!o).join(": ")}
              width={25}
              height={25}
            />
          </a>
          , where my work impacts millions of users.
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-loose">
          I’m always ready to discuss ideas and explore new opportunities to
          drive success.
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-loose">
          With a focus on continuous learning and collaboration
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-loose">
          Let’s connect and bring innovative solutions to life!
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <h1 className="flex items-center z-10 text-4xl hover:scale-110 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white p-5">
        Deepak Gupta
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-lg text-zinc-500">
          <Suspense fallback={<p>Loading...</p>}>
            <UserText />
          </Suspense>
        </h2>
      </div>
    </div>
  );
}
export default withHeader(HomeRoute);
