import Image from "next/image";
import { useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MiniHeader from "./MiniHeader";

export default function Header() {
  const iconSize = 48;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState("");
  const headerProps = {
    showMobileMenu,
    setShowMobileMenu,
    activeDesktopMenu,
    setActiveDesktopMenu,
  };

  const renderProducts = () => {
    return <div className="h-100 w-100 bg-red">products</div>;
  };

  const renderResources = () => {
    return (
      <div
        className="absolute h-fit w-fit overflow-hidden right-317 px-24 bg-hawkesBlue"
        onMouseEnter={() => setActiveDesktopMenu("resources")}
        onMouseLeave={() => setActiveDesktopMenu("")}
      >
        <div className="flex py-10 pt-20 items-center cursor-pointer">
          <Image src="/icons/blog.svg" alt="blog" height={iconSize} width={iconSize} />
          <div className="text-s20l24 text-nero shrink-0 ml-10">Blog</div>
        </div>

        <div className="flex py-10 items-center cursor-pointer">
          <Image src="/icons/case_studies.svg" alt="case_studies" height={iconSize} width={iconSize} />
          <div className="text-s20l24 text-nero shrink-0 ml-10">Case Studies</div>
        </div>

        <div className="flex py-10 pb-20 items-center cursor-pointer">
          <Image src="/icons/in_the_media.svg" alt="in_the_media" height={iconSize} width={iconSize} />
          <div className="text-s20l24 text-nero shrink-0 ml-10">In the media</div>
        </div>
      </div>
    );
  };

  const renderSupport = () => {
    return (
      <div
        className="absolute h-fit w-fit overflow-hidden right-[49.5px] px-24 bg-hawkesBlue"
        onMouseEnter={() => setActiveDesktopMenu("support")}
        onMouseLeave={() => setActiveDesktopMenu("")}
      >
        <div className="flex py-10 pt-20 items-center cursor-pointer">
          <Image src="/icons/faqs.svg" alt="faqs" height={iconSize} width={iconSize} />
          <div className="text-s20l24 text-nero shrink-0 ml-10">FAQs</div>
        </div>

        <div className="flex py-10 pb-20 items-center cursor-pointer">
          <Image src="/icons/contact_us.svg" alt="contact_us" height={iconSize} width={iconSize} />
          <div className="text-s20l24 text-nero shrink-0 ml-10">Contact Us</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="relative flex items-center justify-between px-18 desktop:px-80 h-54 desktop:h-111 bg-hawkesBlue">
        {/* For desktop size */}
        <DesktopHeader {...headerProps} />

        {/* Below laptop size  */}
        <MiniHeader {...headerProps} />
      </div>

      {/* Active desktop menu items */}
      {activeDesktopMenu === "products"
        ? renderProducts()
        : activeDesktopMenu === "resources"
        ? renderResources()
        : activeDesktopMenu === "support"
        ? renderSupport()
        : null}
    </>
  );
}
