import localFont from "next/font/local";
import Image from "next/image";
import { useCopyToClipboard } from "usehooks-ts";
import { IoClipboardOutline } from "react-icons/io5";
import { toast } from "sonner";

const SFReg = localFont({ src: "../../public/fonts/SFReg.otf" });
const SFBold = localFont({ src: "../../public/fonts/SFBold.ttf" });
const SFMed = localFont({ src: "../../public/fonts/SFMed.otf" });
const MTBold = localFont({ src: "../../public/fonts/MTBold.ttf" });

const charcoal = "#222222";
const beige = "#EDE8D7";

export default function Header() {
  const [copiedText, copy] = useCopyToClipboard();
  const email = "hello@xindong.dev";
  const handleCopy = async () => {
    await copy(email);
    toast.custom(
      (id) => (
        <div className="bg-white text-black border-2 border-black rounded-2xl p-4 shadow-md flex items-center justify-items-center">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="font-medium leading-none">Copied to clipboard!</p>
            </div>
          </div>
        </div>
      ),
      { duration: 2000 }
    );
  };

  return (
    <div className="md:mt-14 lg:mt-0 delay-700 ">
      {/* Top Section */}
      <div className={`flex flex-col lg:flex-row bg-[${beige}] md:py-10 space-y-2 lg:gap-y-6 w-full `}>
        {/* Left Content */}
        <div className="flex flex-col lg:w-3/5">
          <div className={`text-[${charcoal}] space-y-12 md:space-y-20`}>
            <div className="space-y-2">
              <h1
                className={`${SFBold.className} animate-fadeIn opacity-0 pl-4 sm:px-8 lg:px-10 mt-5 md:mt-2 lg:mt-10 font-bold text-8xl sm:text-[7rem] md:text-[9rem] lg:text-[10rem] xl:text-10xl sm:leading-30  tracking-tighter `}>
                XIN DONG
              </h1>
              <h2
                className={`${SFMed.className} animate-fadeIn-h2 opacity-0 pl-4 sm:px-8 lg:px-10 text-5xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tightest space-x-4 sm:space-x-6`}>
                <span
                  className={`${MTBold.className} tracking-tightest md:mr-5 lg:mr-6 text-6xl sm:text-7xl md:text-[5rem] xl:text-[6.9rem]`}>
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
              className={`${SFMed.className} my-auto space-y-0 bg-[#222222] text-[#EDE8D7] py-0 opacity-0 animate-divGrow`}>
              <div className="animate-fadeInCurr opacity-0 tracking-tightery flex flex-col gap-y-5 pl-4 sm:px-8 lg:px-10 py-13 sm:pt-15 md:pt-16 lg:pt-16 xl:pt-24 text-[2.7rem] sm:text-[4rem] lg:text-7xl xl:text-[5.5rem] leading-9.5 sm:leading-16 lg:leading-16 xl:leading-19  ">
                <p className={``}>Currently @</p>
                <p className={`space-x-3`}>
                  <span>NYC</span>
                  <span>/</span>
                  <span>Binghamton</span>
                </p>
              </div>
              <div
                onClick={handleCopy}
                className="flex flex-wrap pl-4 sm:px-8 lg:px-10 md:pt-5 animate-fadeIn-Button opacity-0">
                <button
                  className={`flex gap-x-3 items-center cursor-pointer ${SFReg.className} tracking-wider border-2 border-[${beige}] text-[${beige}] px-6 py-3 md:px-12 md:py-4 sm:text-lg md:text-2xl font-regular hover:bg-[${beige}] hover:-translate-y-2 hover:translate-x-2 hover:bg-[#EDE8D7] hover:text-[#222222] hover:font-medium duration-200 pointer-fine:`}>
                  hello@xindong.dev
                  <IoClipboardOutline fontSize={28} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-2/5 lg:h-auto xl:h-4/5  mr-10 hidden sm:hidden lg:block opacity-0 animate-fadeIn-img drop-shadow-black drop-shadow-2xl">
          <Image
            src="/photos/Xin.png"
            alt="Xin Dong"
            width={800}
            height={1030}
            className="rounded-xl object-cover absolute min-h-full"
            layout="responsive"
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
