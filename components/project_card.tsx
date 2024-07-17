import Link from "next/link";

export default function ProjectCard({
  name,
  desc,
  giturl,
  liveurl,
}: {
  name: String;
  desc: String;
  giturl: String;
  liveurl: String;
}) {
  return (
    <div className="p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-200 text-center md:text-left">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-gray-700 mb-4">{desc}</p>
      <div className="space-y-2">
        <h3 className="text-blue-600 hover:underline">
          <a href={`${giturl}`} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </h3>
        <h3 className="text-blue-600 hover:underline">
          <a href={`${liveurl}`} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </h3>
      </div>
    </div>
  );
}
