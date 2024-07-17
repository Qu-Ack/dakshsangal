import Link from "next/link";
import back from "@/public/back.png";

export default function LandingPage() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://w.wallhaven.cc/full/85/wallhaven-856dlk.png')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Daksh Sangal welcomes you
        </h1>
        <Link
          href="/projects"
          className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded text-xl transition duration-200"
        >
          See my projects
        </Link>
      </div>
    </div>
  );
}
