'use client'

import Title from "./home/title";
import FAQs from "./home/FAQ/faq";
import Info from "./home/info/info";


export default function IndexPage() {
  return (
    <div className="flex flex-col mt-c3">
      
      <Title />
      <Info />
      <FAQs />
  
    </div>
  );
}

