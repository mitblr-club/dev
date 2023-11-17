import { siteConfig } from "@/site.config";
const SiteFooter = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 justify-around top-0 z-50  mx-6 lg:mx-20 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        
        <div className="flex flex-col gap-2 p-2">

          <h2>
            <a 
            href={siteConfig.mediaLinks.insitute} 
            className="hover:text-blue-600 hover:underline text-xl font-semibold"
            >{siteConfig.institution}</a>
          </h2>

          <div className="text-sm">{siteConfig.address}</div>

        </div>

        <div className="flex flex-col gap-1 p-2">

          <div className="font-semibold">Contact Us</div>

          <div className="flex flex-col gap:1">
            <div>Contact.No:{siteConfig.contactDetails.number}</div>
            <div>EmailID: {siteConfig.contactDetails.email}</div>
          </div>
        </div>
  
    </div>
  );
};

export default SiteFooter;
