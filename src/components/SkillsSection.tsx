import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaPython, FaNodeJs, FaCode } from "react-icons/fa";

import {
  FaReact,
  FaRust,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiMongoose,
} from "react-icons/si";

function SkillsSection() {
  return (
    <div className="">
      <div className="min-h-screen lg:h-[70rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden px-4 py-8 lg:py-0">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center lg:ml-14 lg:-mt-15 mb-8 lg:mb-0">
          Skills
        </h1>
        <div className="w-64 sm:w-80 lg:w-[32rem] h-20 lg:h-40 relative mb-8 lg:mb-0">
          <div className="absolute inset-x-8 sm:inset-x-12 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-8 sm:inset-x-12 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-20 sm:inset-x-28 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 flex-wrap text-center ml-50 lg:-mt-15 w-full">
          <div className="w-full lg:w-108 Languages border-1 p-3 sm:p-4 lg:p-5 rounded-2xl lg:rounded-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4 lg:mb-0">
              Languages
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-4 sm:gap-6 lg:gap-13 pt-4 lg:pt-10 lg:ml-7">
              <div className="text-center">
                <SiCplusplus className="text-blue-400 text-3xl sm:text-4xl lg:text-6xl m-auto" />{" "}
                <span className="text-sm sm:text-base lg:text-xl">c++</span>
              </div>
              <div className="text-center">
                <div className="flex flex-col items-center">
                  <FaHtml5 className="text-orange-600 text-3xl sm:text-4xl lg:text-6xl" />{" "}
                  <span className="text-sm sm:text-base lg:text-xl">HTML</span>
                </div>
              </div>
              <div className="text-center">
                <SiJavascript className="text-yellow-300 text-3xl sm:text-4xl lg:text-6xl m-auto" />{" "}
                <span className="text-sm sm:text-base lg:text-2xl text-cente">
                  JS
                </span>
              </div>
              <div className="text-center">
                <FaPython className="text-blue-400 text-3xl sm:text-4xl lg:text-6xl m-auto" />{" "}
                <span className="text-sm sm:text-base lg:text-xl">Python</span>
              </div>
              <div className="text-center">
                <SiTypescript className="text-blue-500 text-3xl sm:text-4xl lg:text-6xl m-auto" />{" "}
                <span className="text-sm sm:text-base lg:text-2xl">TS</span>
              </div>
              <div className="text-center">
                <FaCss3Alt className="text-3xl sm:text-4xl lg:text-6xl text-blue-400 m-auto" />{" "}
                <span className="text-sm sm:text-base lg:text-xl">CSS</span>
              </div>
              <div className="text-center">
                <FaRust className="text-3xl sm:text-4xl lg:text-6xl m-auto" />{" "}
                <span className="text-sm sm:text-base lg:text-2xl">Rust</span>
              </div>
            </div>
          </div>

          <div className="Frameworks w-full lg:w-108 border-1 rounded-2xl lg:rounded-4xl p-3 sm:p-4 lg:p-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4 lg:mb-0">
              Frameworks
            </h1>

            <div className="text-center grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-4 sm:gap-6 lg:gap-13 pt-4 lg:pt-10 lg:ml-7">
              <div className="text-center items-center">
                <FaReact className="text-blue-400 text-3xl sm:text-4xl lg:text-6xl m-auto" />
                <span className="text-sm sm:text-base lg:text-xl">
                  React.js
                </span>
              </div>

              <div className="text-center items-center">
                <SiExpress className="text-3xl sm:text-4xl lg:text-6xl m-auto" />{" "}
                <span className="text-sm sm:text-base lg:text-2xl">
                  Express.js
                </span>
              </div>
              <div className="text-center">
                <SiNextdotjs className="text-3xl sm:text-4xl lg:text-6xl m-auto" />{" "}
                <span className="text-sm sm:text-base lg:text-2xl">
                  Next.js{" "}
                </span>
              </div>

              <div className="text-center">
                <SiMongoose
                  className="text-red-500 text-3xl sm:text-4xl lg:text-6xl m-auto"
                  title="Git"
                />
                <span className="text-sm sm:text-base lg:text-2xl">
                  Mongoose
                </span>
              </div>
              <div className="text-center">
                <img
                  src="/sol.png"
                  alt="Anchor Framework"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 m-auto"
                />
                <p className="text-center text-sm sm:text-base lg:text-2xl mt-1">
                  Anchor
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-108 border-1 rounded-2xl lg:rounded-4xl p-3 sm:p-4 lg:p-5 lg:mr-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4 lg:mb-0">
              Database / Tools
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-4 sm:gap-6 lg:gap-13 mt-4 lg:mt-10 lg:ml-7">
              <div className="text-center">
                <FaNodeJs className="text-green-600 text-3xl sm:text-4xl lg:text-6xl m-auto" />{" "}
                <span className="text-sm sm:text-base lg:text-2xl">
                  Node.js
                </span>
              </div>

              <div className="text-center">
                <SiMongodb className="text-green-600 text-3xl sm:text-4xl lg:text-6xl m-auto" />{" "}
                <span className="text-sm sm:text-base lg:text-2xl">
                  MongoDb
                </span>
              </div>
              <div className="text-center">
                <FaGitAlt
                  className="text-red-500 text-3xl sm:text-4xl lg:text-6xl m-auto"
                  title="Git"
                />
                <span className="text-sm sm:text-base lg:text-2xl">Git</span>
              </div>
              <div className="text-center">
                <FaGithub
                  className="text-3xl sm:text-4xl lg:text-6xl m-auto"
                  title="Git"
                />
                <span className="text-sm sm:text-base lg:text-2xl">GitHub</span>
              </div>
              <div className="text-center">
                <SiPostman
                  className="text-orange-600 text-3xl sm:text-4xl lg:text-6xl m-auto"
                  title="Git"
                />
                <span className="text-sm sm:text-base lg:text-2xl">
                  Postman
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
