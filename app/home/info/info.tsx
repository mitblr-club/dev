import { 
    Card ,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

import data from "./data"

export default function Info() {
    return(
        <div className="mt-c20 md:mt-c10 lg:mt-c5 xl:mt-c1 p-c6">
            <div className="text-center font-bold text-2xl md:text-4xl p-c3">What's in mitblr.club?<br></br><span className="text-lg font-normal p-c1">Check out our projects</span></div>

            <div className="flex flex-col gap-c3vh justify-center items-center 
                lg:grid lg:grid-cols-2 lg:gap-c3vh">
            
                {data.map((item,index)=>(
                <Card className="w-c70 md:w-fit h-fit" key={index}>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-left">
                            {item.Title}
                        </CardTitle>
                        <CardDescription className="text-md font-medium text-justify">
                            {item.Description}
                        </CardDescription>
                    </CardHeader>
                </Card>
                ))}

            </div>
        </div>
    )
}