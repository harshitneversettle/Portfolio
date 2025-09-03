import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaPython, FaNodeJs } from "react-icons/fa";

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
      <div className="h-[70rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
        <h1 className="text-6xl ml-14 -mt-15 ">Skills</h1>
        <div className="w-[32rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>

        <div className="flex gap-20 flex-wrap text-center ml-10 -mt-15 ">
          <div className="w-100 Languages border-1 p-5 rounded-4xl ">
            <h1 className="text-4xl ">Languages</h1>
            <div className="flex flex-wrap gap-13 pt-10 ml-7 ">
              <div className="text-center">
                <SiCplusplus className="text-blue-400 text-6xl m-auto " />{" "}
                <span className="text-xl">c++</span>
              </div>
              <div className="text-center">
                <div className="flex flex-col items-center ">
                  <FaHtml5 className="text-orange-600 text-6xl " />{" "}
                  <span className="text-xl">HTML</span>
                </div>
              </div>
              <div className="text-center">
                <SiJavascript className="text-yellow-300 text-6xl m-auto" />{" "}
                <span className="text-2xl text-cente">JS</span>
              </div>
              <div className="text-center">
                <FaPython className="text-blue-400 text-6xl m-auto" />{" "}
                <span className="text-xl">Python</span>
              </div>
              <div className="text-center">
                <SiTypescript className="text-blue-500 text-6xl m-auto" />{" "}
                <span className="text-2xl">TS</span>
              </div>
              <div className="text-center">
                <FaCss3Alt className=" text-6xl text-blue-400 m-auto" />{" "}
                <span className="text-xl">CSS</span>
              </div>
              <div className="text-center">
                <FaRust className="text-6xl m-auto" />{" "}
                <span className="text-2xl">Rust</span>
              </div>
            </div>
          </div>

          <div className="Frameworks w-100 border-1 rounded-4xl p-5">
            <h1 className="text-4xl">Frameworks</h1>

            <div className="text-center flex flex-wrap gap-13 pt-10 ml-7">
              <div className="text-center items-center ">
                <FaReact className="text-blue-400 text-6xl m-auto" />
                <span className="text-xl">React.js</span>
              </div>

              <div className="text-center items-center ">
                <SiExpress className="text-6xl m-auto" />{" "}
                <span className="text-2xl">Express.js</span>
              </div>
              <div className="text-center">
                <SiNextdotjs className="text-6xl m-auto" />{" "}
                <span className="text-2xl">Next.js </span>
              </div>

              <div className="text-center">
                <SiMongoose
                  className=" text-red-500 text-6xl m-auto"
                  title="Git"
                />
                <span className="text-2xl">Mongoose</span>
              </div>
            </div>
          </div>

          <div className="w-120 border-1 rounded-4xl p-5 mr-4">
            <h1 className="text-4xl">Platform / Database / Tools</h1>
            <div className="flex flex-wrap gap-13 mt-10 ml-7">
              <div className="text-center">
                <FaNodeJs className="text-green-600 text-6xl m-auto" />{" "}
                <span className="text-2xl">Node.js</span>
              </div>

              <div className="text-center">
                <SiMongodb className=" text-green-600 text-6xl m-auto" />{" "}
                <span className="text-2xl">MongoDb</span>
              </div>
              <div className="text-center">
                <FaGitAlt
                  className="text-red-500 text-6xl m-auto"
                  title="Git"
                />
                <span className="text-2xl">Git</span>
              </div>
              <div className="text-center">
                <FaGithub className=" text-6xl m-auto" title="Git" />
                <span className="text-2xl">GitHub</span>
              </div>
              <div className="text-center">
                <SiPostman
                  className=" text-orange-600 text-6xl m-auto"
                  title="Git"
                />
                <span className="text-2xl">Postman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
