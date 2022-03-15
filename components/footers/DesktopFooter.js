import React from "react"
import Image from "../helpers/Image"

export default function DesktopFooter() {
  return (
    <div className="hidden desktop:flex laptop:flex flex-col">
      <div className="flex justify-between items-center px-80 py-60 laptop:px-50">
        <div className="text-F1F1F1 text-s40l60 laptop:text-s30l33">
          Ready to begin your journey with us?
          <br /> Get onboard!
        </div>
        <div className="button w-216 h-54">Request A Demo</div>
      </div>

      <div className="w-100% h-1 bg-E0E0E0" />

      <div className="flex justify-between items-baseline px-180 pt-130 laptop:px-50">
        <div className="pb-175">
          <Image src="/images/logo_white.svg" width={250} height={50} />
          <div className="mt-20 text-F5FBF3 text-s20l24">Find us on</div>
          <div className="flex mt-15 w-150 justify-between cursor-pointer h-40">
            <span className="hover-border">
              <Image
                src="/images/social_media/insta.svg"
                width={35}
                height={35}
              />
            </span>
            <span className="hover-border">
              <Image
                src="/images/social_media/facebook.svg"
                width={35}
                height={35}
              />
            </span>
            <span className="hover-border">
              <Image
                src="/images/social_media/twitter.svg"
                width={35}
                height={35}
              />
            </span>
          </div>
          <div className="mt-40 text-FAFAFA text-s20l24">
            © Mintoak, Inc. {new Date().getFullYear()}.{" "}
          </div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20 laptop:mb-35">
            Company
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">About Us</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">Partner With Us</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">Careers</span>
          </div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20 laptop:mb-35">
            Offerings
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">Products</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">Customise</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className=" hover-border">For Merchants</span>
          </div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20 laptop:mb-35">
            Legal
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">Privacy</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">Website terms of use</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">T & C</span>
          </div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20 laptop:mb-35">
            Resources
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">Blogs</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">Case Studies</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">News & Media</span>
          </div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20 laptop:mb-35">
            Support
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">FAQs</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  )
}
