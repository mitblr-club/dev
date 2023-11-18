import { siteConfig } from "@/site.config";
import Image from "next/image";
import mitblr_club from "../public/mitblr_club.png";

const SiteFooter = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-around top-0 z-50  mx-6 lg:mx-20 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        
        <div className="flex flex-col gap-3 p-2">

          <div
          className="font-bold text-2xl"
          >
            mitblr.<span className="text-violet-500">club</span>
          </div>         

          {/*<div className="flex flex-col gap-2">
            <div className="font-semibold">Contact Us</div>

            <div className="flex flex-col gap-1">
              <div>Contact.No:{siteConfig.contactDetails.number}</div>
              <div>EmailID: {siteConfig.contactDetails.email}</div>
            </div>
          </div>*/}

        </div>

        <div className="flex items-center">

          <h2>
            <a 
            href={siteConfig.mediaLinks.insitute} 
            className="hover:text-blue-600 hover:underline text-sm font-normal"
            >{siteConfig.institution}</a>
          </h2>

          {/*<div className="text-sm">{siteConfig.address}</div>*/}

        </div>
  
    </div>
  );
};

export default SiteFooter;
