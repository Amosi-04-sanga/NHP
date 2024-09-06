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
      <section className="mt-20 px-8">
        <h2 className="half-underline text-[#0d0d4e] text-[24px] font-[900] inline-block ">Frequency asked questions</h2>
        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            {Faq.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="font-normal text-[16px] text-left hover:no-underline">
                  {" "}
                  {item.question}{" "}
                </AccordionTrigger>
                <AccordionContent className="font-normal indent-2 text-[16px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Fade>
  );
};

export default FQA;