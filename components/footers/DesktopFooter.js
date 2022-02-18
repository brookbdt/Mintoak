import React from "react";
import Image from "../helpers/Image";

export default function DesktopFooter() {
  return (
    <div className="hidden desktop:flex flex-col">
      <div className="flex justify-between items-center px-80 py-60">
        <div className="text-F1F1F1 text-s40l60">
          Ready to begin your journey with us?
          <br /> Get onboard!
        </div>
        <div className="button w-216 h-54">Request A Demo</div>
      </div>

      <div className="w-100% h-1 bg-E0E0E0" />

      <div className="flex justify-between items-baseline p-80">
        <div>
          <Image src="/images/logo_white.svg" width={250} height={50} />
          <div className="mt-50 text-F5FBF3 text-s20l24">Find us on</div>
          <div className="flex mt-15 w-150 justify-between cursor-pointer">
            <Image src="/images/social_media/insta.svg" width={35} height={35} />
            <Image src="/images/social_media/facebook.svg" width={35} height={35} />
            <Image src="/images/social_media/twitter.svg" width={35} height={35} />
          </div>
          <div className="mt-50 text-FAFAFA text-s20l24">© Mintoak, Inc. {new Date().getFullYear()}. </div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20">Company</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">About Us</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">Partner With Us</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">Careers</div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20">Offerings</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">Products</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">Customise</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">For Merchants</div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20">Legal</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">Privacy</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">Website terms of use</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">T & C</div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20">Resources</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">Blogs</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">Case Studies</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">News & Media</div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20">Support</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">FAQs</div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">Contact Us</div>
        </div>
      </div>
    </div>
  );
}
