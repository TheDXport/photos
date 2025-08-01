import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center space-y-7 px-10">
      {/* Blue div*/}
      <div className="flex flex-col md:flex md:flex-row md:space-x-7 space-y-7 items-center justify-center">
        <div className="flex flex-col space-y-7 items-center justify-center w-full">
          <Image
            src="/photos/andrewReading-2.png"
            alt="Portfolio Image"
            className="w-[100%] h-100 md:w-100 md:h-100 lg:w-96 lg:h-128 object-cover md:object-right"
            width={432}
            height={1008}
          />
          <Image
            src="/photos/andrewBBW 1.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-100 md:h-100 lg:w-96 lg:h-142 object-cover object-center"
            height={884}
            width={432}
          />
        </div>
        <div className="flex flex-col space-y-7 w-full">
          <Image
            src="/photos/andrewBook.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-100 md:h-110 lg:w-96 lg:h-160 object-cover"
            width={432}
            height={884}
          />
          <Image
            src="/photos/zhiandharry-6.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-60 md:h-90 lg:w-96 lg:h-110 object-cover"
            width={432}
            height={884}
          />
        </div>
        <div className="flex flex-col space-y-7 w-full">
          <Image
            src="/photos/andrewReadingTypeShit 1.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-100 md:h-100 lg:w-96 lg:h-128 object-cover"
            height={884}
            width={432}
          />
          <Image
            src="/photos/PH_01632.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-100 md:h-100 lg:w-96 lg:h-142 object-cover"
            width={432}
            height={884}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex md:flex-row md:space-x-7 space-y-7 w-full">
        <div className="flex flex-col space-y-7 w-full">
          {" "}
          <Image
            src="/photos/jimedalime.png"
            alt="Portfolio Image"
            className="w-[100%] h-100 md:w-95 md:h-100 lg:w-96 lg:h-142 object-cover"
            width={432}
            height={884}
          />
          <Image
            src="/photos/IMG_4917.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:h-70 lg:w-96 lg:h-130 object-cover"
            width={432}
            height={884}
          />
        </div>{" "}
        <div className="flex flex-col space-y-7">
          {" "}
          <Image
            src="/photos/IMG_2209 1.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-55 md:h-90 lg:w-96 lg:h-130 object-cover "
            width={432}
            height={884}
          />
          <Image
            src="/photos/zhiandharry-8.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-96 md:h-60 lg:w-96 lg:h-100 object-cover"
            width={432}
            height={884}
          />
        </div>{" "}
        <div className="flex flex-col md:space-x-7 space-y-7 ">
          {" "}
          <Image
            src="/photos/IMG_4914.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:w-95 md:h-100 lg:w-96 lg:h-142 object-cover"
            width={432}
            height={884}
          />
          <Image
            src="/photos/IMG_5242.png"
            alt="Portfolio Image"
            className="w-[100%] h-90 md:h-70 lg:w-96 lg:h-130 object-cover "
            width={432}
            height={884}
          />
        </div>
      </div>
    </div>
  );
}
