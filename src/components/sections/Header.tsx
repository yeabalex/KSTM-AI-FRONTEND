import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import { Outfit } from "next/font/google";

const nunito = Outfit({
  subsets: ["latin"],
  weight: ["800"],
});

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Top banner */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Your AI sales chatbot that chats, sells & closes deals for you
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Launch your AI assistant now</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Main nav */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <p className={`${nunito.className} font-extrabold italic text-xl`}>
              <span className="text-blue-900">Kool</span>Sales.ai
            </p>

            <MenuIcon className="h-5 w-5 md:hidden" />

            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">How It Works</a>
              <a href="#">Use Cases</a>
              <a href="#">Integrations</a>
              <a href="#">Pricing</a>
              <a href="#">Support</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Try It Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
