import localFont from "next/font/local";
import Image from "next/image";

const SFProSemi = localFont({ src: "../../public/fonts/SFSemi.otf" });
const SFReg = localFont({ src: "../../public/fonts/SFReg.otf" });
const SFBold = localFont({ src: "../../public/fonts/SFBold.ttf" });
const SFMed = localFont({ src: "../../public/fonts/SFMed.otf" });
const MTBold = localFont({ src: "../../public/fonts/MTBold.ttf" });

const charcoal = "#222222";
const beige = "#EDE8D7";

export default function Header() {
  return (
    <div className="md:mt-14 lg:mt-0">
      {/* Top Section */}
      <div className={`flex flex-col lg:flex-row bg-[${beige}] py-10 gap-y-10 lg:gap-y-0 w-full overflow-x-hidden`}>
        {/* Left Content */}
        <div className="flex flex-col lg:w-3/5">
          <div className={`text-[${charcoal}] space-y-7`}>
            <div className="space-y-2">
              <h1
                className={`${SFBold.className} pl-4 sm:px-8 lg:px-10 font-bold text-7xl sm:text-[7rem] md:text-[9rem] lg:text-[7rem] xl:text-10xl sm:leading-30  tracking-tighter`}>
                XIN DONG
              </h1>
              <h2
                className={`${SFMed.className} pl-4 sm:px-8 lg:px-10 text-5xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tightest space-x-4 sm:space-x-6`}>
                <span
                  className={`${MTBold.className} tracking-tightest md:mr-5 lg:mr-6 text-6xl sm:text-7xl md:text-[5rem] xl:text-8xl`}>
                  Visual
                </span>
                <span className="space-x-2 sm:space-x-0 ">
                  <span>Storyteller &</span>
                  <br className="hidden sm:block" />
                  <span>Designer</span>
                </span>
              </h2>
            </div>
            <div
              className={`${SFMed.className} bg-[#222222] text-[#EDE8D7] py-13 sm:py-15 md:py-16 lg:py-14 overflow-x-hidden`}>
              <div className="tracking-tightery flex flex-col gap-y-5 pl-4 sm:px-8 lg:px-10 text-[2.7rem] sm:text-[4rem] lg:text-7xl leading-9.5 sm:leading-16 lg:leading-16 xl:leading-19  ">
                <p className={``}>Currently @</p>
                <p className={`space-x-3`}>
                  <span>NYC</span>
                  <span>/</span>
                  <span>Binghamton</span>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap pl-4 sm:px-8 lg:px-10 space-x-8">
              <button
                className={`bg-[#222] text-[#EDE8D7] px-6 py-3 sm:text-lg font-semibold hover:opacity-90 transition z-60`}>
                View my work
              </button>
              <button className="border-2 border-[${beige}] text-[${beige}] px-6 py-3 sm:text-lg font-semibold hover:bg-[${beige}] hover:text-black transition">
                Get in touch
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-2/5 flex justify-center relative mt-20 hidden sm:hidden lg:block">
          <Image
            src="/photos/Xin.png"
            alt="Xin Dong"
            width={800}
            height={1130}
            className="rounded-xl object-cover absolute min-h-full"
          />
        </div>
      </div>
    </div>
  );
}
