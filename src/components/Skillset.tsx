import Link from "next/link";
import project_data from "../data/project_data.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { ContainerTextFlip } from "./ui/container-text-flip";

const skillset = () => {
  const FeaturedProjects = project_data.Projects.filter((i) => i.isFeatured);
  return (
    <div className="w-full mt-20 sm:mt-30 lg:mt-50">
      <div className="text-center px-4">
        <h1 className="text-lg sm:text-xl lg:text-3xl text-green-500">
          Proof of Work
        </h1>
        <div className="text-2xl sm:text-3xl lg:text-4xl mt-2">
          Showcasing My <ContainerTextFlip words={["Craft", "Work"]} />
        </div>
      </div>
      <div className="grid mt-6 sm:mt-8 lg:mt-10 h-full px-2 sm:px-4 lg:ml-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 m-auto px-2 sm:px-4 max-w-8xl">
          {FeaturedProjects.map((i) =>
            i.isFeatured ? (
              <BackgroundGradient
                key={i.id}
                className="rounded-[22px] h-full p-3 sm:p-6 lg:p-10 bg-white dark:bg-zinc-900"
              >
                <div className="w-full min-h-[28rem] sm:min-h-[32rem] lg:min-h-[35rem]">
                  <img
                    src={i.projectImage}
                    alt="projectImage"
                    className="rounded-[22px] mb-3 sm:mb-4 w-full h-40 sm:h-48 lg:h-auto object-cover"
                  />
                  <p className="text-center text-lg sm:text-xl mb-2 sm:mb-3 font-semibold pt-1">
                    {i.projectName}
                  </p>
                  <div className="mb-2 sm:mb-3">
                    <div className="handel flex gap-1 sm:gap-2 flex-wrap mb-1 text-center">
                      <span className="font-bold text-sm sm:text-base lg:text-lg">
                        Tech used :
                      </span>
                      {i.TechUsed.map((j, index) => {
                        return (
                          <div
                            key={index}
                            className="badge text-xs sm:text-sm text-[#00e6e6] border-1 mr-1 rounded-xl p-1 badge-outline badge-success"
                          >
                            {j}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <p className="mb-2 sm:mb-3 text-sm sm:text-base">
                    <span className="font-bold text-sm sm:text-base lg:text-lg">
                      Description :
                    </span>{" "}
                    <span className="text-sm sm:text-base lg:text-xl">
                      {i.description}
                    </span>
                  </p>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    <span className="font-bold text-sm sm:text-base lg:text-lg">
                      Live on :
                    </span>{" "}
                    <Link
                      href={i.LiveOn}
                      className="text-blue-500 text-sm sm:text-base lg:text-lg"
                    >
                      click to view
                    </Link>
                  </p>
                  <div className="flex justify-center sticky top-0">
                    <Link href={i.githubLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-github mt-2 sm:mt-3 lg:mt-4 hover:scale-110 transition-transform sm:w-9 sm:h-9 lg:w-10 lg:h-10"
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
