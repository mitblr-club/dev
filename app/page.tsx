import { siteConfig } from "@/site.config";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="flex flex-col p-c6">

      <div 
      className="flex flex-col justify-between items-center h-c60 md:h-c30 lg:h-c30 xl:h-c40 mt-c25 md:mt-c15 xl:mt-c3">

        <h1 className="animate-in fade-in-0 duration-1000 text-center block px-3 text-5xl md:text-6xl xl:text-7xl font-bold">
          {siteConfig.homePage.tagline}
        </h1>

        <div className="text-center sm:text-xs md:text-base lg:text-xl px-c10">
          {siteConfig.description}
        </div>

        <div className="flex justify-between gap-c3 md:gap-c10">

          <div>
          <Link href="/events">
            <button 
            className="inline-flex items-center font-bold rounded-md border-none box-border cursor-pointer text-white font-jetbrains-mono text-base h-12 justify-center overflow-hidden px-4 relative text-left text-decoration-none transition-transform transition-box-shadow user-select-none -webkit-user-select-none touch-action-manipulation whitespace-nowrap will-change-box-shadow will-change-transform bg-gradient-to-r from-cyan-400 to-indigo-600 shadow-md hover:shadow-lg active:shadow-inner-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 active:ring-2 active:ring-blue-500 active:ring-opacity-50 hover:-translate-y-2 active:translate-y-2">
              Current Events 
            </button>
          </Link>
          </div>

          <div>
          <Link href="/about">
            <button className="inline-flex items-center bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-700 font-bold rounded-md border-none box-border cursor-pointer font-jetbrains-mono text-base h-12 justify-center overflow-hidden px-4 relative text-left text-decoration-none transition-transform transition-box-shadow user-select-none -webkit-user-select-none touch-action-manipulation whitespace-nowrap will-change-box-shadow will-change-transform shadow-md hover:shadow-lg active:shadow-inner-lg focus:ring-2 focus:ring-gray-300 focus:outline-none focus:ring-opacity-50 hover:ring-2 hover:ring-gray-300 hover:ring-opacity-50 active:ring-2 active:ring-gray-300 active:ring-opacity-50 hover:-translate-y-2 active:translate-y-2">
              Learn More
            </button>
          </Link>
          </div>

          

        </div>

      </div>

    </div>
  );
}

