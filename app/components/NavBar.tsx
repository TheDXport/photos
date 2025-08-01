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
    <div className="sticky top-0 z-20 flex space-y-3 items-center justify-center w-full py-12  px-18 overflow-visible">
      <div
        className="pointer-events-none absolute left-0 top-0 w-full h-full backdrop-blur-xs"
        style={{
          background: "linear-gradient(to bottom, rgba(237,232,215,0.6) 0%, rgba(237,232,215,0) 100% )",
        }}
      />
      <div className={`${OleoScript.className} text-4xl font-bold relative self-start mr-auto z-10`}>DX</div>
      <div className={`${SFPro.className} flex items-center space-x-10 z-10 `}>
        <button className="hover:underline" onClick={() => onSelect("portfolio")}>
          portfolio
        </button>
        <button className="hover:underline" onClick={() => onSelect("about")}>
          about
        </button>
        <button className="hover:underline" onClick={() => onSelect("contact")}>
          contact
        </button>
      </div>
    </div>
  );
}
