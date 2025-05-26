import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import { Outfit } from "next/font/google";

const nunito = Outfit({
  subsets: ["latin"],
  weight: ["800"],
});

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <p className={`${nunito.className} font-extrabold italic text-xl`}>
            <span className="text-blue-900">Kool</span>Sales.ai
          </p>
        </div>

        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>

        <p className="mt-6">
          &copy; 2024 Motion, Inc. All rights reserved. Created by{" "}
          <a
            href="https://sorenblank.com"
            className="underline underline-offset-4"
          >
            Soren
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
