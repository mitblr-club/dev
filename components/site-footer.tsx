import { siteConfig } from "@/site.config";
import Image from "next/image";
import mitblr_club from "../public/mitblr_club.png";

const SiteFooter = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2  lg:gap-4  items-center justify-around top-0 z-50  mx-6 lg:mx-20 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-1 lg:p-3">
              
          <div
          className="font-bold text-2xl"
          >
            mitblr.<span className="text-violet-500">club</span>
          </div>         


        <div className="flex items-center">

          <h2>
            <a 
            href={siteConfig.mediaLinks.insitute} 
            className="hover:text-blue-600 hover:underline text-sm font-normal"
            >{siteConfig.institution}</a>
          </h2>

        </div>
  
    </div>
  );
};

export default SiteFooter;
