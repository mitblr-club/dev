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
        <div>
        <div className="text-6xl font-bold">FAQs</div>

        <Accordion type="single" collapsible className="w-full">

        {data.map((item,index) => (

            <FAQ.Content key={index} value={`item-${index.toString()}`}>

            <FAQ.Question>
                {index+1}.{item.Question}
            </FAQ.Question>

            <FAQ.Answer>
                {item.Answer}
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

