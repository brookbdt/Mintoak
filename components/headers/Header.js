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
    return (
      <>
        <div
          className="h-fit w-100% py-32 pl-65 bg-E0EFD4"
          onMouseEnter={() => setActiveDesktopMenu("products")}
          onMouseLeave={() => setActiveDesktopMenu("")}
        >
          <div className="text-525252 text-s18l21_6 mb-9">Payments Stack</div>
          <div className="flex flex-wrap">
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/omni.svg" alt="omni" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">OMNI</div>
                <div className="text-s16l19 text-525252">Omni channel transactions with all payment modes</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/mom.svg" alt="mom" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">MOM</div>
                <div className="text-s16l19 text-525252">Instant merchant onboarding & management</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/pay_later.svg" alt="pay_later" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">Pay Later</div>
                <div className="text-s16l19 text-525252">Digital register for customer payment dues</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/acorn.svg" alt="acorn" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">Acorn</div>
                <div className="text-s16l19 text-525252">Platform for all the processing</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/connect.svg" alt="connect" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">Connect</div>
                <div className="text-s16l19 text-525252">Payment and billing integrations</div>
              </div>
            </div>
          </div>

          <div className="w-[calc(100%-176px)] ml-176 my-32 h-1 bg-A4D77A opacity-50" />

          <div className="text-525252 text-s18l21_6 mb-9">Value Added Services</div>
          <div className="flex flex-wrap">
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/iku.svg" alt="iku" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">IKU</div>
                <div className="text-s16l19 text-525252">Instant customer segmentation & recognition</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/oar.svg" alt="oar" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">OAR</div>
                <div className="text-s16l19 text-525252">Offers and rewards for customers</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/far.svg" alt="far" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">FAR</div>
                <div className="text-s16l19 text-525252">Customer feedback & ratings</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/bat.svg" alt="bat" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">BAT</div>
                <div className="text-s16l19 text-525252">Badges, awards and trophies for merchants</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/uam.svg" alt="uam" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">UAM</div>
                <div className="text-s16l19 text-525252">User access and profile management</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/aim.svg" alt="aim" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">AIM</div>
                <div className="text-s16l19 text-525252">Business analytics, insights and metrics</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/mac.svg" alt="mac" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">MAC</div>
                <div className="text-s16l19 text-525252">Marketing and campaigns for latest trends</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/sam.svg" alt="sam" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">SAM</div>
                <div className="text-s16l19 text-525252">Service analytics and management</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/pam.svg" alt="pam" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">PAM</div>
                <div className="text-s16l19 text-525252">Portfolio analytics and management</div>
              </div>
            </div>
          </div>

          <div className="w-[calc(100%-176px)] ml-176 my-32 h-1 bg-A4D77A opacity-50" />

          <div className="text-525252 text-s18l21_6 mb-9">Lending Stack</div>
          <div className="flex flex-wrap">
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/xsm.svg" alt="xsm" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">XSM</div>
                <div className="text-s16l19 text-525252">Cross- sell to merchants</div>
              </div>
            </div>
            <div className="flex w-306 items-start cursor-pointer p-15 hover:bg-8FC055_O20 ">
              <Image src="/icons/xsc.svg" alt="xsc" height={iconSize} width={iconSize} />
              <div className="ml-14">
                <div className="text-s20l24 text-252525 mb-5">XSC</div>
                <div className="text-s16l19 text-525252">Cross- sell to customers</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderResources = () => {
    return (
      <div
        className="absolute h-fit w-fit overflow-hidden right-317 px-24 bg-E0EFD4"
        onMouseEnter={() => setActiveDesktopMenu("resources")}
        onMouseLeave={() => setActiveDesktopMenu("")}
      >
        <div className="flex py-10 pt-20 items-center cursor-pointer">
          <Image src="/icons/blog.svg" alt="blog" height={iconSize} width={iconSize} />
          <div className="text-s20l24 text-252525 shrink-0 ml-10">Blog</div>
        </div>

        <div className="flex py-10 items-center cursor-pointer">
          <Image src="/icons/case_studies.svg" alt="case_studies" height={iconSize} width={iconSize} />
          <div className="text-s20l24 text-252525 shrink-0 ml-10">Case Studies</div>
        </div>

        <div className="flex py-10 pb-20 items-center cursor-pointer">
          <Image src="/icons/in_the_media.svg" alt="in_the_media" height={iconSize} width={iconSize} />
          <div className="text-s20l24 text-252525 shrink-0 ml-10">In the media</div>
        </div>
      </div>
    );
  };

  const renderSupport = () => {
    return (
      <div
        className="absolute h-fit w-fit overflow-hidden right-[49.5px] px-24 bg-E0EFD4"
        onMouseEnter={() => setActiveDesktopMenu("support")}
        onMouseLeave={() => setActiveDesktopMenu("")}
      >
        <div className="flex py-10 pt-20 items-center cursor-pointer">
          <Image src="/icons/faqs.svg" alt="faqs" height={iconSize} width={iconSize} />
          <div className="text-s20l24 text-252525 shrink-0 ml-10">FAQs</div>
        </div>

        <div className="flex py-10 pb-20 items-center cursor-pointer">
          <Image src="/icons/contact_us.svg" alt="contact_us" height={iconSize} width={iconSize} />
          <div className="text-s20l24 text-252525 shrink-0 ml-10">Contact Us</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="relative flex items-center justify-between px-18 desktop:px-80 h-54 desktop:h-111 bg-E0EFD4">
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
