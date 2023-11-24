'use client'

import Title from "./home/title";
import FAQs from "./home/FAQ/faq";


export default function IndexPage() {
  return (
    <div className="flex flex-col p-c6">
      
      <Title />

      <FAQs />
  
    </div>
  );
}

