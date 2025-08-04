import Image from "next/image";

import localFont from "next/font/local";
import FadeInImage from "./FadeInImage";

const SFProSemi = localFont({
  src: "../../public/fonts/SFSemi.otf",
});

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center px-8 sm:px-12 md:px-15 lg:px-12 xl:px-15 md:mt-52 lg:mt-0 w-full lg:h-550 xl:h-[200rem] ">
      {/* Blue div*/}
      <div className={`${SFProSemi.className} text-6xl w-full lg:ml-8 `}>here&#39;s some of my work ——</div>
      <div className="flex flex-col lg:flex-row w-full z-50 h-[50rem] xl:h-[185rem] mt-30 gap-y-12 md:space-y-0">
        <div className="flex flex-col w-full lg:w-1/2  lg:h-20 lg:px-5 xl:px-10 items-center relative space-y-20  ">
          <FadeInImage
            src="/photos/andrewBook.jpg"
            alt="andrewBook"
            width={432}
            height={884}
            layout="responsive"
            priority
            loading="eager"
          />
          <FadeInImage
            src="/photos/andrewReading-2.jpg"
            alt="andrewReading"
            height={884}
            width={432}
            layout="responsive"
            priority
            loading="eager"
          />
          <FadeInImage
            src="/photos/andrewBBW.jpg"
            alt="BW"
            width={432}
            height={884}
            layout="responsive"
            priority
            loading="eager"
          />
          <FadeInImage
            src="/photos/zhiandharry-6.jpg"
            alt=""
            width={432}
            height={884}
            layout="responsive"
            priority
            loading="eager"
          />
          <FadeInImage
            src="/photos/PH_01632.jpg"
            alt=""
            height={884}
            width={432}
            layout="responsive"
            priority
            loading="eager"
          />
          <FadeInImage
            src="/photos/IMG_5242.JPG"
            alt="Por"
            width={432}
            height={884}
            layout="responsive"
            priority
            loading="eager"
          />
          <FadeInImage
            src="/photos/IMG_4917.JPG"
            alt=""
            width={400}
            height={184}
            layout="responsive"
            priority
            loading="eager"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/2  lg:h-20 lg:px-5 xl:px-10 items-center relative space-y-20 mt-120">
          <FadeInImage
            src="/photos/andrewReading-5.jpg"
            alt="andrewReading"
            width={432}
            height={1008}
            layout="responsive"
            priority
            loading="eager"
          />
          <FadeInImage
            src="/photos/andrewDark.jpg"
            alt="andrewDark"
            width={432}
            height={884}
            layout="responsive"
            priority
            loading="eager"
          />
          <FadeInImage
            src="/photos/jimedalime.jpg"
            alt="jime"
            width={432}
            height={884}
            layout="responsive"
            priority
            loading="eager"
          />
          <FadeInImage
            src="/photos/zhiandharry-8.jpg"
            alt=""
            width={432}
            height={884}
            layout="responsive"
            priority
            loading="eager"
          />
          <FadeInImage
            src="/photos/IMG_2209.JPG"
            alt="wei"
            width={432}
            height={884}
            layout="responsive"
            priority
            loading="eager"
          />
          <FadeInImage
            src="/photos/IMG_4914.JPG"
            alt="Por"
            width={432}
            height={884}
            layout="responsive"
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
