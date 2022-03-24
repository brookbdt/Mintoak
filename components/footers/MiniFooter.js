import React from "react";
import Image from "../helpers/Image";
import Request_Demo from "../../pages/request_demo";
import { useEffect, useState } from "react";

export default function MiniFooter() {
  const [demoPopup, setDemoPopup] = useState(false);
  const TogglePopup = () => {
    setDemoPopup(false);
  };
  return (
    <div className="flex desktop:hidden laptop:hidden flex-col items-center pb-60 w-100%">
      <div className="p-36 pb-0 w-100% flex flex-col items-center mobile:p-20">
        <div className="text-F1F1F1 text-s18l27">
          Ready to begin your journey with us? Get onboard!
        </div>
        <div
          onClick={() => setDemoPopup(true)}
          className="mobile-button h-40 w-300 m-30  mobile:w-166 mobile:h-40"
        >
          Request A Demo
        </div>

        <div className="w-100%">
          <div className="flex items-center justify-between cursor-pointer py-15">
            <div className="text-FAFAFA text-s14l17">Company</div>
            <i className="fa-solid fa-angle-down text-F1F1F1" />
          </div>

          <div className="w-100% h-1 bg-8B8B8B" />

          <div className="flex items-center justify-between cursor-pointer py-15">
            <div className="text-FAFAFA text-s14l17">Offerings</div>
            <i className="fa-solid fa-angle-down text-F1F1F1" />
          </div>

          <div className="w-100% h-1 bg-8B8B8B" />

          <div className="flex items-center justify-between cursor-pointer py-15">
            <div className="text-FAFAFA text-s14l17">Legals</div>
            <i className="fa-solid fa-angle-down text-F1F1F1" />
          </div>

          <div className="w-100% h-1 bg-8B8B8B" />

          <div className="flex items-center justify-between cursor-pointer py-15">
            <div className="text-FAFAFA text-s14l17">Resources</div>
            <i className="fa-solid fa-angle-down text-F1F1F1" />
          </div>

          <div className="w-100% h-1 bg-8B8B8B" />

          <div className="flex items-center justify-between cursor-pointer py-15">
            <div className="text-FAFAFA text-s14l17">Support</div>
            <i className="fa-solid fa-angle-down text-F1F1F1" />
          </div>
        </div>
      </div>

      <div className="w-100% h-1 bg-E0E0E0 my-50" />

      <Image src="/images/logo_white.svg" width={150} height={30} />
      <div className="mt-40 text-F5FBF3 text-s14l24">Find us on</div>
      <div className="flex mt-17 w-160 justify-between cursor-pointer">
        <Image src="/images/social_media/insta.svg" width={24} height={24} />
        <Image src="/images/social_media/facebook.svg" width={24} height={24} />
        <Image src="/images/social_media/twitter.svg" width={24} height={24} />
      </div>
      <div className="mt-70 text-FAFAFA text-s12l24">
        © Mintoak, Inc. {new Date().getFullYear()}.{" "}
      </div>
      {demoPopup && (
        <Request_Demo triger={demoPopup} handleClose={TogglePopup} />
      )}
    </div>
  );
}
