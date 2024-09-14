"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Fade } from "react-awesome-reveal";
import { Faq } from "../constants";


const FQA = () => {
  return (
    <Fade>
      <div className="lg:flex lg:gap-10 mt-20 mx-auto px-8">

      <div className="min-w-[50vw] max-lg:hidden">
          <img className='w-full max-h-[500px]' src="/assets/images/faq.jpg" alt="photo" />
         </div>

      <section className="max-w-[1000px] grow">
        <h2 className="half-underline text-[#0d0d4e] text-[24px] font-[900] inline-block ">Frequently asked questions</h2>
        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            {Faq.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="font-normal text-[16px] text-left hover:no-underline">
                  {" "}
                  {item.question}{" "}
                </AccordionTrigger>
                <AccordionContent className="font-normal text-[16px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      </div>
    </Fade>
  );
};

export default FQA;