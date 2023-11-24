import { ReactNode } from "react";

import data from "./data";

import { 
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

export default function FAQs(){
    return(
        <div className="mt-c25 md:mt-c15 xl:mt-c10 p-c3">

        <div className="text-md font-bold text-purple-700 dark:text-purple-400">FAQs</div>
        <div className="text-4xl font-serif">Have a Question?</div>

        <Accordion type="single" collapsible className="w-full px-c3 py-c1">

        {data.map((item,index) => (

            <FAQ.Content key={index} value={`item-${index.toString()}`}>

            <FAQ.Question>
                <div className="text-left">{index+1}.{item.Question}</div>
            </FAQ.Question>

            <FAQ.Answer>
                <div className="transition-color font-light">{item.Answer}</div>
            </FAQ.Answer>

            </FAQ.Content>

        ))}

        </Accordion>
        </div>
    );
}

function Content({ children,value }: { children: ReactNode,value:string}){
    return(
            <AccordionItem value={value}>
                {children}
            </AccordionItem>
    );
};


function Question({ children }: { children: ReactNode }){
    return(
        <AccordionTrigger>
            {children}
        </AccordionTrigger>
    );
};

function Answer({ children }: { children: ReactNode }){
    return(
        <AccordionContent>
            {children}
        </AccordionContent>
    );
};

const FAQ = {
    Content: Content,
    Question: Question,
    Answer: Answer,
};

