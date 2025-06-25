import Link from "next/link";
import project_data from "../data/project_data.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { ContainerTextFlip } from "./ui/container-text-flip";

const skillset = () => {
  const FeaturedProjects = project_data.Projects.filter((i) => i.isFeatured);
  return (
    <div className="w-full mt-50">
      <div className="text-center ">
        <h1 className="text-2xl text-green-300 ">See my Projects</h1>
        <div className="text-4xl mt-2 ">
          Showcasing My <ContainerTextFlip words={["Craft", "Work"]} />
        </div>
      </div>
      <div className="grid mt-10 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-auto px-4">
          {FeaturedProjects.map((i) =>
            i.isFeatured ? (
              <BackgroundGradient key={i.id} className="rounded-[22px] max-w-sm w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div  className="w-full min-h-110">
                  <img
                    src={i.projectImage}
                    alt="projectImage"
                    className="rounded-[22px] mb-3"
                  />
                  <p className="text-center mb-3 font-semibold">
                    {i.projectName}
                  </p>
                  <p>
                    <span className="font-bold">Tech used :</span>{" "}
                    <span>{i.techStack}</span>{" "}
                  </p>
                  <p>
                    <span className="font-bold">Description :</span>{" "}
                    <span>{i.description}</span>
                  </p>
                  <p>
                    <span className="font-bold">Live on :</span>{" "}
                    <span>{i.liveLink}</span>
                  </p>
                  <div className="  ">
                    <Link href={i.githubLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="bi bi-github absolute bottom-0 ml-34 mb-4 "
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>{" "}
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default skillset;
