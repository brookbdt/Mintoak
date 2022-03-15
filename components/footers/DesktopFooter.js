import React from "react";
import Image from "../helpers/Image";

export default function DesktopFooter() {
  return (
    <div className="hidden desktop:flex laptop:flex flex-col">
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
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="white"
              className="social-hover"
            >
              <path
                className="social-hover-1"
                d="M23.332 5.8335H11.6654C8.4437 5.8335 5.83203 8.44517 5.83203 11.6668V23.3335C5.83203 26.5552 8.4437 29.1668 11.6654 29.1668H23.332C26.5537 29.1668 29.1654 26.5552 29.1654 23.3335V11.6668C29.1654 8.44517 26.5537 5.8335 23.332 5.8335Z"
                fill="white"
              />
              <path
                d="M17.5 21.875C19.9162 21.875 21.875 19.9162 21.875 17.5C21.875 15.0838 19.9162 13.125 17.5 13.125C15.0838 13.125 13.125 15.0838 13.125 17.5C13.125 19.9162 15.0838 21.875 17.5 21.875Z"
                stroke="#474949"
                stroke-width="2.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.0625 10.9375V10.9385"
                stroke="#484949"
                stroke-width="2.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="34"
              height="35"
              viewBox="0 0 34 35"
              className="social-hover-1"
            >
              <path
                className="social-hover"
                d="M9.91797 14.5833V20.4167H14.168V30.625H19.8346V20.4167H24.0846L25.5013 14.5833H19.8346V11.6667C19.8346 11.2799 19.9839 10.909 20.2496 10.6355C20.5152 10.362 20.8756 10.2083 21.2513 10.2083H25.5013V4.375H21.2513C19.3727 4.375 17.571 5.14323 16.2426 6.51068C14.9142 7.87813 14.168 9.7328 14.168 11.6667V14.5833H9.91797Z"
                fill="white"
              />
            </svg>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              className="social-hover"
            >
              <path
                className="social-hover-1"
                d="M32.0846 5.84781C30.6263 6.5624 29.1971 6.85261 27.7096 7.29156C26.0748 5.44677 23.6511 5.34469 21.3221 6.21677C18.9932 7.08886 17.4678 9.22094 17.5013 11.6666V13.1249C12.769 13.2459 8.55443 11.0905 5.83464 7.29156C5.83464 7.29156 -0.264115 18.1314 11.668 23.3332C8.93797 25.1518 6.21526 26.3782 2.91797 26.2499C7.74214 28.8793 12.9994 29.7834 17.5509 28.4622C22.7717 26.9455 27.0621 23.0328 28.7086 17.1718C29.1997 15.3892 29.4436 13.5476 29.4334 11.6986C29.4305 11.3355 31.6355 7.65615 32.0846 5.84636V5.84781Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="mt-50 text-FAFAFA text-s20l24">
            © Mintoak, Inc. {new Date().getFullYear()}.{" "}
          </div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20">
            Company
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">About Us</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">Partner With Us</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">Careers</span>
          </div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20">
            Offerings
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">Products</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">Customise</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className=" hover-border">For Merchants</span>
          </div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20">
            Legal
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">Privacy</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">Website terms of use</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">T & C</span>
          </div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20">
            Resources
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">Blogs</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">Case Studies</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">News & Media</span>
          </div>
        </div>
        <div>
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-20">
            Support
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">FAQs</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-15 cursor-pointer">
            <span className="hover-border">Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
}
