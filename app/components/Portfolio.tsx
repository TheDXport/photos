import Image from "next/image";
import { Oleo_Script_Swash_Caps } from "next/font/google";
import localFont from "next/font/local";

const SFProSemi = localFont({
  src: "../../public/fonts/SFSemi.otf",
});

{
  /*  */
}

{
  /* */
}

{
  /* 

           */
}

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center px-5 md:mt-52 w-full h-[250rem] ">
      {/* Blue div*/}
      <div className={`${SFProSemi.className} text-6xl w-full lg:ml-8 `}>here's some of my work ——</div>
      <div className="flex flex-col lg:flex-row w-full z-50 h-[245rem] mt-30 gap-y-12 md:space-y-0">
        <div className="flex flex-col w-full lg:w-1/3  lg:h-[240rem] lg:px-5 xl:px-2 items-center relative space-y-12">
          <Image src="/photos/andrewBook.png" alt="Portfolio Image" width={432} height={884} layout="responsive" />
          <Image src="/photos/andrewBBW 1.png" alt="Portfolio Image" height={884} width={432} layout="responsive" />
          <Image src="/photos/jimedalime.png" alt="Portfolio Image" width={432} height={884} layout="responsive" />
          <Image src="/photos/IMG_4917.png" alt="Portfolio Image" width={432} height={884} layout="responsive" />
        </div>
        <div className="flex flex-col w-full lg:w-1/3  lg:h-[240rem] lg:px-5 xl:px-2 items-center relative space-y-12">
          <Image
            src="/photos/andrewReading-2.png"
            alt="Portfolio Image"
            width={432}
            height={1008}
            layout="responsive"
          />
          <Image src="/photos/zhiandharry-6.png" alt="Portfolio Image" width={432} height={884} layout="responsive" />
          <Image src="/photos/IMG_2209 1.png" alt="wei" width={432} height={884} layout="responsive" />
          <Image src="/photos/IMG_4914.png" alt="Portfolio Image" width={432} height={884} layout="responsive" />
        </div>
        <div className="flex flex-col w-full lg:w-1/3  lg:h-[240rem] lg:px-5 xl:px-2 items-center relative space-y-12">
          <Image
            src="/photos/andrewReadingTypeShit 1.png"
            alt="Portfolio Image"
            height={884}
            width={432}
            layout="responsive"
          />
          <Image src="/photos/PH_01632.png" alt="Portfolio Image" width={432} height={884} layout="responsive" />

          <Image src="/photos/zhiandharry-8.png" alt="Portfolio Image" width={432} height={884} layout="responsive" />
          <Image src="/photos/IMG_5242.png" alt="Portfolio Image" width={400} height={184} layout="responsive" />
        </div>
      </div>
    </div>
  );
}
