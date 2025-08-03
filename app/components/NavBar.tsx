import localFont from "next/font/local";

const SFPro = localFont({
  src: "../../public/fonts/SFPro.ttf",
});

const SFBold = localFont({
  src: "../../public/fonts/SFBold.ttf",
});

const charcoal = "#222222";

export default function NavBar({ onSelect }: { onSelect: (section: string) => void }) {
  return (
    <div className="sticky top-0 z-20 flex space-y-3  items-center justify-center w-full py-5 md:py-12 px-10 md:px-12 overflow-visible bg-[#ede8d7]/15 backdrop-blur">
      <div
        className={`${SFBold.className} mr-auto relative text-11xl font-bold tracking-tighter text-[${charcoal}] flex items-center justify-center select-none`}>
        XIN DONG
      </div>

      <div className={`${SFPro.className} flex items-center space-x-5 md:space-x-16 z-10 justify-center text-xl`}>
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
