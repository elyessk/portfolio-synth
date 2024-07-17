import React from "react";
import { ArrowUpRight } from "lucide-react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full z-50">
      <h1 className="heading">
        The <span className="text-purple">Value</span> We Add
      </h1>
      <p className="text-md md:text-lg lg:text-xl w-full max-w-4xl text-center text-white-200 mx-auto mt-6">
        AI-powered solutions, turbocharged for max efficiency and strategic
        edge. We streamline workflows and fuel sustainable business growth. And
        hey, we’ve still got your back with smooth{" "}
        <span className="group relative">
          <span className="h-0.5 w-full absolute left-0 -bottom-1 translate-y-5 group-hover:translate-y-0 bg-purple transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
          <span className="hover:text-purple cursor-pointer">
            Full-Stack Development
            <ArrowUpRight className="inline-block ml-1 w-7 h-7 rotate-45 group-hover:-rotate-0 transition-all duration-300" />
          </span>
        </span>
      </p>

      <div className="w-full mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(2,0,36)",
              backgroundColor:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(237,53,53,1) 100%)",
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="flex items-center gap-3 p-4 rounded-full border border-slate-700 w-fit">
                <card.icon className="w-10 h-10" />
              </div>
              <div className="mt-5">
                <h1 className="text-start text-xl md:text-2xl font-space font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
