import { teamDetails } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full pb-20 bg-gray-100 dark:bg-black flex justify-center items-center">
      <div className="w-full p-2 md:p-0 md:max-w-7xl grid grid-cols-1 gap-y-8 md:grid-cols-2">
        <h1 className="pt-12 pb-20 text-black dark:text-white font-semibold text-3xl md:text-4xl text-center md:col-span-2">
          Meet Our Team
        </h1>
        {/* Mapping TeamDetails Array */}
        {teamDetails.map((item, index) => (
          <Link
            href={item.LinkedinUrl}
            target="_blank"
            key={index}
            className="p-4 md:p-0 flex flex-col items-center w-full md:w-[80%] h-auto md:h-80 space-y-4 hover:bg-gray-300 bg-gray-400 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md border border-gray-200 dark:border-black mx-auto"
          >
            {/* Image */}
            <Image
              src={item.imageUrl}
              alt={`${item.Name} Picture`}
              width={150}
              height={150}
              className="mt-3 rounded-full"
            />
            {/* Name */}
            <h3 className="text-gray-900 dark:text-gray-100 font-bold text-xl">
              {item.Name}
            </h3>

            {/* Tagline */}
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {item.Tagline}
            </p>
            {/* Icons */}
            <div className="flex justify-center mt-2 gap-x-6">
              <Link href={item.GithubUrl} target="_blank">
                <FaGithub
                  size={26}
                  className="text-gray-700 dark:text-gray-300 hover:text-green-900"
                />
              </Link>
              <Link href={item.LinkedinUrl} target="_blank">
                <FaLinkedin
                  size={26}
                  className="text-gray-700 dark:text-gray-300 hover:text-sky-700"
                />
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
