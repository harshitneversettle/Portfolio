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
      <div className="grid mt-10 h-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-auto px-4">
          {FeaturedProjects.map((i) =>
            i.isFeatured ? (
              <BackgroundGradient
                key={i.id}
                className="rounded-[22px] max-w-sm w-full p-4 sm:p-10 bg-white dark:bg-zinc-900"
              >
                <div className="w-full min-h-[35rem] ">
                  <img
                    src={i.projectImage}
                    alt="projectImage"
                    className="rounded-[22px] mb-3 "
                  />
                  <p className="text-center mb-3 font-semibold pt-1 ">
                    {i.projectName}
                  </p>
                  <div className="mb-3">
                    <div className="handel flex gap-2 flex-wrap mb-2">
                      <span className="font-bold">Tech used :</span>
                      {i.TechUsed.map((j, index) => {
                        return (
                          <div
                            key={index}
                            className="badge badge-outline badge-accent   "
                          >
                            {j}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <p className="mb-3">
                    <span className="font-bold">Description :</span>{" "}
                    <span>{i.description}</span>
                  </p>
                  <p>
                    <span className="font-bold ">Live on :</span>{" "}
                    <Link href={i.LiveOn} className="text-blue-500 ">
                      click to view
                    </Link>
                  </p>
                 
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
