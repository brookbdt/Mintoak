import React, { useState } from "react";
import Image from "next/image";

export default function MiniHeader(headerProps) {
  const { showMobileMenu, setShowMobileMenu } = headerProps;
  const [activeMenu, setActiveMenu] = useState("menu");
  const [activeProductsMenu, setActiveProductsMenu] = useState("");

  const renderPaymentsStack = () => {
    return (
      <>
        {/* Payments Stack start */}
        <div className="flex pl-8 py-15 items-center justify-between cursor-pointer" onClick={() => setActiveProductsMenu("ps")}>
          <div className="text-s14l17 text-smokyBlack shrink-0">Payments Stack</div>
          <i className={"fa-solid fa-angle-down text-atlantis smooth " + (activeProductsMenu === "ps" ? "origin-center rotate-180" : "")} />
        </div>

        <div className={"smooth " + (activeProductsMenu === "ps" ? "h-175" : "h-0")}>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/omni.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">OMNI</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/mom.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">MOM</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/pay_later.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">Pay Later</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/acron.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">ACORN</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/connect.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">CONNECT</div>
          </div>
        </div>
        {/* Payments Stack end */}

        <div className="w-100% h-1 bg-atlantis opacity-20" />

        {/* Value Added Services start */}
        <div className="flex pl-8 py-15 items-center justify-between cursor-pointer" onClick={() => setActiveProductsMenu("vas")}>
          <div className="text-s14l17 text-smokyBlack shrink-0">Value Added Services</div>
          <i className={"fa-solid fa-angle-down text-atlantis smooth " + (activeProductsMenu === "vas" ? "origin-center rotate-180" : "")} />
        </div>
        <div className={"smooth " + (activeProductsMenu === "vas" ? "h-315" : "h-0")}>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/iku.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">IKU</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/oar.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">OAR</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/aim.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">AIM</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/mac.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">MAC</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/uar.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">UAR</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/bat.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">BAT</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/far.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">FAR</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/sam.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">SAM</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/pam.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">PAM</div>
          </div>
        </div>
        {/* Value Added Services end */}

        <div className="w-100% h-1 bg-atlantis opacity-20" />

        {/* Lending Stack start */}
        <div className="flex pl-8 py-15 items-center justify-between cursor-pointer" onClick={() => setActiveProductsMenu("ls")}>
          <div className="text-s14l17 text-smokyBlack shrink-0">Lending Stack</div>
          <i className={"fa-solid fa-angle-down text-atlantis smooth " + (activeProductsMenu === "ls" ? "origin-center rotate-180" : "")} />
        </div>

        <div className={"smooth " + (activeProductsMenu === "ls" ? "h-70" : "h-0")}>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/xsm.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">XSM</div>
          </div>
          <div className="flex pl-8 pb-15 items-center cursor-pointer">
            <Image src="/icons/xsc.svg" alt="blog" height={20} width={20} />
            <div className="text-s12l14 text-nero shrink-0 ml-8">XSC</div>
          </div>
        </div>
        {/* Lending Stack end */}

        <div className="w-100% h-1 bg-atlantis opacity-20" />
      </>
    );
  };

  const renderResources = () => {
    return (
      <>
        <div className="flex pl-8 py-9 pt-15 items-center cursor-pointer">
          <Image src="/icons/blog.svg" alt="blog" height={20} width={20} />
          <div className="text-s12l14 text-nero shrink-0 ml-8">Blog</div>
        </div>

        <div className="flex pl-8 py-9 items-center cursor-pointer">
          <Image src="/icons/case_studies.svg" alt="case_studies" height={20} width={20} />
          <div className="text-s12l14 text-nero shrink-0 ml-8">Case Studies</div>
        </div>

        <div className="flex pl-8 py-9 items-center cursor-pointer">
          <Image src="/icons/in_the_media.svg" alt="in_the_media" height={20} width={20} />
          <div className="text-s12l14 text-nero shrink-0 ml-8">In the media</div>
        </div>
      </>
    );
  };

  const renderSupport = () => {
    return (
      <>
        <div className="flex pl-8 py-9 pt-15 items-center cursor-pointer">
          <Image src="/icons/faqs.svg" alt="faqs" height={20} width={20} />
          <div className="text-s12l14 text-nero shrink-0 ml-8">FAQs</div>
        </div>

        <div className="flex pl-8 py-9 items-center cursor-pointer">
          <Image src="/icons/contact_us.svg" alt="contact_us" height={20} width={20} />
          <div className="text-s12l14 text-nero shrink-0 ml-8">Contact Us</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex desktop:hidden">
        <Image src="/logo.svg" alt="Logo" height={22} width={109} />
      </div>

      <i className="fa-solid fa-bars flex desktop:hidden cursor-pointer" onClick={() => setShowMobileMenu(true)} />

      {/* Mini Header menu */}
      <div className={"desktop:hidden absolute right-0 top-0 h-100vh smooth bg-hawkesBlue " + (showMobileMenu ? "w-237" : "w-0")}>
        <div className="flex h-54 w-100% justify-end items-center">
          <i
            className="fa-solid fa-xmark cursor-pointer mr-20"
            onClick={() => {
              setShowMobileMenu(false);
              setActiveMenu("menu");
            }}
          />
        </div>

        <div className="mx-16 h-100% w-205">
          {/* Menu title */}
          <div
            className="flex items-center"
            onClick={() => {
              setActiveMenu("menu");
              setActiveProductsMenu("");
            }}
          >
            {activeMenu !== "menu" && <i className="fa-solid fa-angle-left text-atlantis" />}
            <div className="ml-8 text-s12l14 text-matterhorn capitalize">{activeMenu}</div>
          </div>

          {/* Menu items */}
          <div className="flex pl-8 py-15 items-center justify-between cursor-pointer">
            <div className="text-s14l17 text-smokyBlack">About Us</div>
          </div>

          <div className="w-100% h-1 bg-atlantis opacity-20" />

          <div className="flex pl-8 py-15 items-center justify-between cursor-pointer" onClick={() => setActiveMenu("products")}>
            <div className="text-s14l17 text-smokyBlack">Products</div>
            <i className="fa-solid fa-angle-right text-atlantis" />
          </div>

          <div className="w-100% h-1 bg-atlantis opacity-20" />

          <div className="flex pl-8 py-15 items-center justify-between cursor-pointer">
            <div className="text-s14l17 text-smokyBlack">Partner With Us</div>
          </div>

          <div className="w-100% h-1 bg-atlantis opacity-20" />

          <div className="flex pl-8 py-15 items-center justify-between cursor-pointer" onClick={() => setActiveMenu("resources")}>
            <div className="text-s14l17 text-smokyBlack">Resources</div>
            <i className="fa-solid fa-angle-right text-atlantis" />
          </div>

          <div className="w-100% h-1 bg-atlantis opacity-20" />

          <div className="flex pl-8 py-15 items-center justify-between cursor-pointer">
            <div className="text-s14l17 text-smokyBlack">Careers</div>
          </div>

          <div className="w-100% h-1 bg-atlantis opacity-20" />

          <div className="flex pl-8 py-15 items-center justify-between cursor-pointer" onClick={() => setActiveMenu("support")}>
            <div className="text-s14l17 text-smokyBlack">Support</div>
            <i className="fa-solid fa-angle-right text-atlantis" />
          </div>

          <div className="w-100% h-1 bg-atlantis opacity-20" />
        </div>

        {/* Active menu sidebar */}
        <div className={"absolute right-0 top-70 mx-16 h-100% smooth bg-hawkesBlue " + (activeMenu !== "menu" ? "w-205" : "w-0")}>
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
