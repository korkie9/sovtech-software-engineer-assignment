import { ReactElement } from "react";
import Image from "next/image";

export const About = (): ReactElement => {
  return (
    <div
      className="bg-white 
      row-span-2
      col-span-7  
      rounded-3xl 
      overflow-hidden 
      md:col-span-8 
      lg:col-span-2 
      lg:row-span-6 
      sm:col-span-8
      shadow-2xl"

    >
      <div
        className="flex 
        justify-center 
        h-2/6 w-5/6 
        m-auto
        rounded-3xl
        overflow-hidden mt-7
        border-4 
        border-blue-300"
      >
        <Image
          src="/me.jpg"
          height={600}
          width={600}
          alt="logo"
          className="object-cover"
        ></Image>
      </div>
      <p className="text-3xl w-max m-auto font-bold font lg:text-4xl p-3">
        Who am I?
      </p>
      <div className="p-7 text-gray-800 text-sm leading-6 lg:text-md overflow-y-scroll h-2/4">
        <p>
          My name is <span className="font-bold">Justin Korkie</span>. I am a
          software developer from Stellenbosch.
        </p>
        <br />
        <p>
          I love both problem solving and exploring my creative side. That is
          why I chose software development as a working field. It allows me to
          explore my creativity through solving problems and to innovate new
          ideas. I have a deep interest in different cultures and in my spare
          time I like to learn new languages and cultural norms.
        </p>
        <br />
        <p>
          I am enthusiastic and highly motivated to be one of the best in
          whatever field I participate. I live my life by the philosophy
          “challenge your definitions”. Simply put, this means considering what
          you can do and what you do know and attempting better.
        </p>
      </div>
      <footer className="p-2">
        <p>Proudly created by</p>
        <p>Justin Korkie</p>
      </footer>
    </div>
  );
};
