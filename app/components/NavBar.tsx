import localFont from "next/font/local";
// Removed next/link, using button for SPA navigation
import { Oleo_Script_Swash_Caps } from "next/font/google";

const SFPro = localFont({
  src: "../../public/fonts/SFPro.ttf",
});

const OleoScript = Oleo_Script_Swash_Caps({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-oleo-script",
});

export default function NavBar({ onSelect }: { onSelect: (section: string) => void }) {
    return (
      <div className="sticky top-0 z-20 flex flex-col space-y-3 items-center justify-center w-full py-14 bg-[#ede8d7]/15 backdrop-blur  ">
        <div className={`${OleoScript.className} text-4xl font-bold`}>
          DX
        </div>
        <div className={`${SFPro.className} flex items-center space-x-10`}>
          <button className="hover:underline" onClick={() => onSelect('portfolio')}>portfolio</button>
          <button className="hover:underline" onClick={() => onSelect('about')}>about</button>
          <button className="hover:underline" onClick={() => onSelect('contact')}>contact</button>
        </div>
      </div>
    );
}