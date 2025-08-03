import Image from "next/image";
import { Oleo_Script_Swash_Caps } from "next/font/google";
import localFont from "next/font/local";

const SFProSemi = localFont({
  src: "../../public/fonts/SFSemi.otf",
});

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center px-10">
      {/* Blue div*/}
      <div className={`${SFProSemi.className} text-6xl w-full left-0 mb-5`}>My Work</div>
      <div className="flex flex-col md:flex md:flex-row md:space-x-7 space-y-7 items-center justify-center w-full">
        <div className="flex flex-col space-y-7 md:space-y-5 items-center justify-center w-full">
          <Image
            src="/photos/andrewReading-2.png"
            alt="Portfolio Image"
            className="w-[100%] h-105 md:w-100 md:h-100 lg:w-98 lg:h-135 object-cover lg:object-right borderlands-left "
            width={432}
            height={1008}
          />
          <Image
            src="/photos/andrewBBW 1.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-100 md:h-100 lg:w-96 lg:h-142 object-cover object-center borderlands-left"
            height={884}
            width={432}
          />
          <Image
            src="/photos/jimedalime.png"
            alt="Portfolio Image"
            className="w-[100%] h-100 md:w-95 md:h-100 lg:w-96 lg:h-142 object-cover borderlands-left"
            width={432}
            height={884}
          />
          <Image
            src="/photos/IMG_4917.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:h-70 lg:w-96 lg:h-130 object-cover borderlands-left"
            width={432}
            height={884}
          />
        </div>
        <div className="flex flex-col space-y-7 w-full">
          <Image
            src="/photos/andrewBook.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-100 md:h-110 lg:w-96 lg:h-160 object-cover borderlands-center"
            width={432}
            height={884}
          />
          <Image
            src="/photos/zhiandharry-6.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-60 md:h-90 lg:w-96 lg:h-110 object-cover  borderlands-center"
            width={432}
            height={884}
          />
          <Image
            src="/photos/IMG_2209 1.png"
            alt="wei"
            className="w-[100%] h-90 md:w-60 md:h-90 lg:w-96 lg:h-130 object-cover relative top-0 borderlands-left"
            width={432}
            height={884}
          />
          <Image
            src="/photos/IMG_4914.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-95 md:h-100 lg:w-96 lg:h-142 object-cover borderlands-left"
            width={432}
            height={884}
          />
        </div>
        <div className="flex flex-col space-y-7 w-full">
          <Image
            src="/photos/andrewReadingTypeShit 1.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-100 md:h-100 lg:w-96 lg:h-177 object-cover borderlands-left"
            height={884}
            width={432}
          />
          <Image
            src="/photos/PH_01632.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-100 md:h-100 lg:w-96 lg:h-142 object-cover borderlands-left"
            width={432}
            height={884}
          />

          <Image
            src="/photos/zhiandharry-8.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-96 md:h-60 lg:w-96 lg:h-100 object-cover borderlands-left"
            width={432}
            height={884}
          />

          <Image
            src="/photos/IMG_5242.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:h-70 lg:w-96 lg:h-130 object-cover borderlands-left"
            width={432}
            height={884}
          />
        </div>
      </div>
    </div>
  );
}
