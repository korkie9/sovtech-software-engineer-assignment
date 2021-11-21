import { ReactElement, useState } from "react";

export const Reasons = (): ReactElement => {
  const firstText =
    "SovTech has a very interesting approach toward the way it interacts with its employees.I found the foosball tournaments quite interesting. Not neccessarily the foosball itself, but the fact that it encourages such recreational activities.";
  const id = "I'd"
  const [reason, setReaon] = useState<string>(firstText);
  const [selected, setSelected] = useState<number>(1);

  const workCulture = (): void => {
    setSelected(1);
    setReaon(firstText);
  };

  const Company = (): void => {
    setSelected(2);
    setReaon(
      "I quite align with SovTech's company values. The values of learning I especially identify with. I believe that learning new things is the key to innovation."
    );
  };

  const Tech = (): void => {
    setSelected(3);
    setReaon(
      "I love the stack that SovTech has decided on. On the frontend, I am a big React fanboy. On the backend, I like using Node and Express. I am also quite interested in AWS."
    );
  };

  return (
    <div
      className="bg-white 
          grid 
          gap-7 
          grid-cols-4 
          grid-rows-6 
          col-span-7 
          row-span-2 
          rounded-3xl 
          p-7 
          md:col-span-8 
          md:row-span-2 
          lg:col-span-5 
          lg:row-span-6 
          sm:col-span-8
          shadow-2xl"
    >
      <div className="col-span-4 row-span-1 p-2">
        <p className="text-3xl w-min m-auto p-3 font-bold font lg:text-4xl lg:w-max text-center">
          SovTech Assignment
        </p>
        <p className="p-2 overflow-hidden text-center">
          I am very passionate about programming and have therefore made it my
          mission be the best developer I can be. {id} specifically like to be a
          developer at SovTech for the following reasons...
        </p>
      </div>

      <div className="bg-gray-100 grid grid-rows-6 col-span-4 row-span-4 rounded-3xl">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 row-span-1 border-b-2 border-blue-300 pt-1">
          <div
            className={`w-max m-auto px-7 py-2 group cursor-pointer`}
            onClick={workCulture}
          >
            <p
              className={`${
                selected === 1
                  ? "font-bold bg-blue-300 px-7 py-2 text-white rounded-3xl"
                  : ""
              } 
                transform-gpu 
                transition 
                duration-300 
                ease-in-out 
                rounded-3xl
                px-7
                py-2
                group-hover:scale-105 
                group-hover:text-white
                group-hover:font-bold 
                group-hover:bg-blue-300
                group-hover:-translate-y-1 
                `}
            >
              Work Culture{" "}
            </p>
          </div>
          <div
            className="w-max m-auto px-7 py-2 group cursor-pointer"
            onClick={Company}
          >
            <p
              className={`${
                selected === 2
                  ? "font-bold bg-blue-300 px-7 py-2 text-white rounded-3xl"
                  : ""
              } 
                transform-gpu 
                transition 
                duration-300 
                ease-in-out 
                rounded-3xl
                px-7
                py-2
                group-hover:scale-105 
                group-hover:text-white
                group-hover:font-bold 
                group-hover:bg-blue-300
                group-hover:-translate-y-1 
                `}
            >
              Company Values
            </p>
          </div>
          <div
            className="w-max m-auto px-7 py-2 group cursor-pointer"
            onClick={Tech}
          >
            <p
              className={`${
                selected === 3
                  ? "font-bold bg-blue-300 px-7 py-2 text-white rounded-3xl"
                  : ""
              } 
                transform-gpu 
                transition 
                duration-300 
                ease-in-out 
                rounded-3xl
                px-7
                py-2
                group-hover:scale-105 
                group-hover:text-white
                group-hover:font-bold 
                group-hover:bg-blue-300
                group-hover:-translate-y-1 
                `}
            >
              Tech Stack
            </p>
          </div>
        </div>
        <div className="row-span-5">
          <p className="p-10 text-lg leading-10 lg:p20 lg:text-xl">{reason}</p>
        </div>
      </div>
    </div>
  );
};
