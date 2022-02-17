import React from "react";
import Image from "next/image";

export default function DesktopHeader() {
  return (
    <>
      <div className="hidden desktop:flex">
        <Image src="/logo.svg" alt="Logo" height={53.79} width={270} />
      </div>

      <div className="h-full items-center justify-center hidden desktop:flex">
        <div className="flex px-26 h-full items-center cursor-pointer hover:bg-greenYellow text-s20l24 text-smokyBlack">About Us</div>
        <div className="flex px-26 h-full items-center cursor-pointer hover:bg-greenYellow text-s20l24 text-smokyBlack">
          Products <i className="fa-solid fa-angle-down ml-5" />
        </div>
        <div className="flex px-26 h-full items-center cursor-pointer hover:bg-greenYellow text-s20l24 text-smokyBlack">Partner With Us</div>
        <div className="flex px-26 h-full items-center cursor-pointer hover:bg-greenYellow text-s20l24 text-smokyBlack">
          Resources <i className="fa-solid fa-angle-down ml-5" />
        </div>
        <div className="flex px-26 h-full items-center cursor-pointer hover:bg-greenYellow text-s20l24 text-smokyBlack">Careers</div>
        <div className="flex px-26 h-full items-center cursor-pointer hover:bg-greenYellow text-s20l24 text-smokyBlack">
          Support <i className="fa-solid fa-angle-down ml-5" />
        </div>
      </div>
    </>
  );
}
