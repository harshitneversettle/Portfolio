import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaPython, FaNodeJs } from "react-icons/fa";

import { FaReact, FaRust, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";

function SkillsSection() {
  return (
    <div>
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
        <h1 className="text-6xl ml-14 -mt-15 ">Skills</h1>
        <div className="w-[32rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <div className="absolute inset-x-1 inset-y-1 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>

        <div className="flex gap-20 flex-wrap text-center ml-35">
          <div className="text-center">
            <SiCplusplus className="text-blue-400 text-6xl" />{" "}
            <span className="text-xl">c++</span>
          </div>
          <div className="text-center">
            <FaHtml5 className="text-orange-600 text-6xl" />{" "}
            <span className="text-xl">HTML</span>
          </div>
          <div className="text-center">
            <FaCss3Alt className=" text-6xl text-blue-400" />{" "}
            <span className="text-xl">CSS</span>
          </div>

          <div className="text-center">
            <SiJavascript className="text-yellow-300 text-6xl" />{" "}
            <span className="text-2xl text-cente">JS</span>
          </div>

          <div className="text-center">
            <FaReact className="text-blue-400 text-6xl" />
            <span className="text-xl">React.js</span>
          </div>

          <div className="text-center">
            <FaNodeJs className="text-green-600 text-6xl" />{" "}
            <span className="text-2xl">Node.js</span>
          </div>

          <div className="text-center items-center ">
            <SiExpress className="text-6xl" />{" "}
            <span className="text-2xl">Express.js</span>
          </div>

          <div className="text-center">
            <SiMongodb className=" text-green-600 text-6xl" />{" "}
            <span className="text-2xl">MongoDb</span>
          </div>

          <div className="text-center">
            <SiTypescript className="text-blue-500 text-6xl" />{" "}
            <span className="text-2xl">TS</span>
          </div>

          <div className="text-center">
            <SiNextdotjs className="text-6xl" />{" "}
            <span className="text-2xl">Next.js </span>
          </div>

          <div className="text-center">
            <FaPython className="text-blue-400 text-6xl" />{" "}
            <span className="text-xl">Python</span>
          </div>

          <div className="text-center">
            <FaRust className="text-6xl" />{" "}
            <span className="text-2xl">Rust</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
