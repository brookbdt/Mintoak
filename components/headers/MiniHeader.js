import React, { useState } from "react";
import Image from "../helpers/Image";
import { useRouter } from "next/router";

export default function MiniHeader(headerProps) {
  const iconSize = 20;
  const { showMobileMenu, setShowMobileMenu } = headerProps;
  const [activeMenu, setActiveMenu] = useState("menu");
  const [activeProductsMenu, setActiveProductsMenu] = useState("");
  const router = useRouter();

  const TogglePopup = () => {
    setDemoPopup(false);
  };

  const renderPaymentsStack = () => {
    return (
      <>
        {/* Payments Stack start */}
        <div
          className="flex pl-8 py-15 items-center justify-between cursor-pointer"
          onClick={() => setActiveProductsMenu("ps")}
        >
          <div className="text-s14l17 text-0D0D0D shrink-0">Payments Stack</div>
          <i
            className={
              "fa-solid fa-angle-down text-8CC63E smooth " +
              (activeProductsMenu === "ps" ? "origin-center rotate-180" : "")
            }
          />
        </div>

        <div
          className={
            "smooth " + (activeProductsMenu === "ps" ? "h-175" : "h-0")
          }
        >
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/omni.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">OMNI</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/mom.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">MOM</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/pay_later.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">
              Pay Later
            </div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/acorn.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">ACORN</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/connect.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">CONNECT</div>
          </div>
        </div>
        {/* Payments Stack end */}

        <div className="w-100% h-1 bg-8CC63E opacity-20" />

        {/* Value Added Services start */}
        <div
          className="flex pl-8 py-15 items-center justify-between cursor-pointer"
          onClick={() => setActiveProductsMenu("vas")}
        >
          <div className="text-s14l17 text-0D0D0D shrink-0">
            Value Added Services
          </div>
          <i
            className={
              "fa-solid fa-angle-down text-8CC63E smooth " +
              (activeProductsMenu === "vas" ? "origin-center rotate-180" : "")
            }
          />
        </div>
        <div
          className={
            "smooth " + (activeProductsMenu === "vas" ? "h-315" : "h-0")
          }
        >
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/iku.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">IKU</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/oar.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">OAR</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/aim.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">AIM</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/mac.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">MAC</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/uam.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">UAM</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/bat.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">BAT</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/far.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">FAR</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/sam.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">SAM</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/pam.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">PAM</div>
          </div>
        </div>
        {/* Value Added Services end */}

        <div className="w-100% h-1 bg-8CC63E opacity-20" />

        {/* Lending Stack start */}
        <div
          className="flex pl-8 py-15 items-center justify-between cursor-pointer"
          onClick={() => setActiveProductsMenu("ls")}
        >
          <div className="text-s14l17 text-0D0D0D shrink-0">Lending Stack</div>
          <i
            className={
              "fa-solid fa-angle-down text-8CC63E smooth " +
              (activeProductsMenu === "ls" ? "origin-center rotate-180" : "")
            }
          />
        </div>

        <div
          className={"smooth " + (activeProductsMenu === "ls" ? "h-70" : "h-0")}
        >
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/xsm.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">XSM</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image
              src="/images/icons/xsc.svg"
              height={iconSize}
              width={iconSize}
            />
            <div className="text-s12l14 text-252525 shrink-0 ml-8">XSC</div>
          </div>
        </div>
        {/* Lending Stack end */}

        <div className="w-100% h-1 bg-8CC63E opacity-20" />
      </>
    );
  };

  const renderResources = () => {
    return (
      <>
        <div
          className="flex pl-8 py-9 pt-15 items-center cursor-pointer"
          onClick={() => router.push("/resource")}
        >
          <Image
            src="/images/icons/blog.svg"
            height={iconSize}
            width={iconSize}
          />
          <div className="text-s12l14 text-252525 shrink-0 ml-8">Blog</div>
        </div>

        <div
          className="flex pl-8 py-9 items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/images/icons/case_studies.svg"
            height={iconSize}
            width={iconSize}
          />
          <div className="text-s12l14 text-252525 shrink-0 ml-8">
            Case Studies
          </div>
        </div>

        <div
          className="flex pl-8 py-9 items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/images/icons/in_the_media.svg"
            height={iconSize}
            width={iconSize}
          />
          <div className="text-s12l14 text-252525 shrink-0 ml-8">
            In the media
          </div>
        </div>
      </>
    );
  };

  const renderSupport = () => {
    return (
      <>
        <div className="flex pl-8 py-9 pt-15 items-center cursor-pointer">
          <Image
            src="/images/icons/faqs.svg"
            height={iconSize}
            width={iconSize}
          />
          <div className="text-s12l14 text-252525 shrink-0 ml-8">FAQs</div>
        </div>

        <div className="flex pl-8 py-9 items-center cursor-pointer">
          <Image
            src="/images/icons/contact_us.svg"
            height={iconSize}
            width={iconSize}
          />
          <div className="text-s12l14 text-252525 shrink-0 ml-8">
            Contact Us
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex desktop:hidden laptop:hidden">
        <Image src="/images/logo.svg" height={22} width={109} />
      </div>

      <i
        className="fa-solid fa-bars flex desktop:hidden laptop:hidden cursor-pointer h-20 w-20 text-s20l24"
        onClick={() => setShowMobileMenu(true)}
      />

      {/* Mini Header menu */}
      <div
        className={
          "desktop:hidden laptop:hidden absolute right-0 top-0 h-100vh smooth z-50 bg-E0EFD4 " +
          (showMobileMenu ? "w-237" : "w-0")
        }
      >
        <div className="flex h-54 w-100% justify-end items-center">
          <i
            className="fa-solid fa-xmark cursor-pointer mr-20 w-13 h-13 font-bold text-252525 text-s18l22"
            onClick={() => {
              setShowMobileMenu(false);
              setActiveMenu("menu");
            }}
          />
        </div>

        <div className="mx-16 h-100% w-205">
          {/* Menu title */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              setActiveMenu("menu");
              setActiveProductsMenu("");
            }}
          >
            {activeMenu !== "menu" && (
              <i className="fa-solid fa-angle-left text-8CC63E" />
            )}
            <div className="ml-8 text-s12l14 text-525252 capitalize">
              {activeMenu}
            </div>
          </div>

          {/* Menu items */}
          <div
            className="flex pl-8 py-15 items-center justify-between cursor-pointer"
            onClick={() => router.push("/about-us")}
          >
            <div className="text-s14l17 text-0D0D0D">About Us</div>
          </div>

          <div className="w-100% h-1 bg-8CC63E opacity-20" />

          <div
            className="flex pl-8 py-15 items-center justify-between cursor-pointer"
            onClick={() => setActiveMenu("products")}
          >
            <div className="text-s14l17 text-0D0D0D">Products</div>
            <i className="fa-solid fa-angle-right text-8CC63E" />
          </div>

          <div className="w-100% h-1 bg-8CC63E opacity-20" />

          <div
            className="flex pl-8 py-15 items-center justify-between cursor-pointer"
            onClick={() => router.push("/partner-with-us")}
          >
            <div className="text-s14l17 text-0D0D0D">Partner With Us</div>
          </div>

          <div className="w-100% h-1 bg-8CC63E opacity-20" />

          <div
            className="flex pl-8 py-15 items-center justify-between cursor-pointer"
            onClick={() => setActiveMenu("resources")}
          >
            <div className="text-s14l17 text-0D0D0D">Resources</div>
            <i className="fa-solid fa-angle-right text-8CC63E" />
          </div>

          <div className="w-100% h-1 bg-8CC63E opacity-20" />

          <div
            className="flex pl-8 py-15 items-center justify-between cursor-pointer"
            onClick={() => router.push("/career")}
          >
            <div className="text-s14l17 text-0D0D0D">Careers</div>
          </div>

          <div className="w-100% h-1 bg-8CC63E opacity-20" />

          <div
            className="flex pl-8 py-15 items-center justify-between cursor-pointer"
            onClick={() => setActiveMenu("support")}
          >
            <div className="text-s14l17 text-0D0D0D">Support</div>
            <i className="fa-solid fa-angle-right text-8CC63E" />
          </div>

          <div className="w-100% h-1 bg-8CC63E opacity-20" />
        </div>

        {/* Active menu sidebar */}
        <div
          className={
            "absolute right-0 top-70 mx-16 h-100% smooth bg-E0EFD4 " +
            (activeMenu !== "menu" ? "w-205" : "w-0")
          }
        >
          {activeMenu === "products"
            ? renderPaymentsStack()
            : activeMenu === "resources"
              ? renderResources()
              : activeMenu === "support"
                ? renderSupport()
                : null}
        </div>
      </div>
    </>
  );
}
