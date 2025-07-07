import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function SkillsSection() {
  return (
    <div>
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h1 className="text-6xl ml-14 -mt-15 ">Skills</h1>
        <div className="w-[32rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <div className="absolute inset-x-1 inset-y-1 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="-mt-19"
        />
      </div>
    </div>
  );
}
const testimonials = [
  {
    title: "HTML",
  },
  {
    title: "CSS",
  },
  {
    title: "Javascript",
  },
  {
    title: "Tailwind",
  },
  {
    title: "React.js",
  },
  {
    title: "Node.js",
  },
  {
    title: "Express.js",
  },
  {
    title: "MongoDB",
  },
  {
    title: "Mongoose",
  },
  {
    title: "Python",
  },
  {
    title: "Pandas",
  },
  {
    title: "C/C++",
  },
  {
    title: "Data structures",
  },
  {
    title: "Next.js (inprogress)",
  },
];
export default SkillsSection;
