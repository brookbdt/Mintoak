import React from "react"
import Image from "../helpers/Image"
import Request_Demo from "../../pages/request_demo"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function DesktopFooter() {
  const router = useRouter()

  const TogglePopup = () => {
    setDemoPopup(false)
  }
  const [demoPopup, setDemoPopup] = useState(false)
  const [slug, setSlug] = useState("")

  useEffect(() => {
    let url = window.location.href
    let slug = url.split("/").pop()
    setSlug(slug)
  }, [])

  return (
    <div className="hidden desktop:flex laptop:flex flex-col">
      {slug == "faqs" || slug == "career" ? null : (
        <div className="flex justify-between items-center px-80 py-60 laptop:px-50">
          <div className="text-F1F1F1 text-s40l60 laptop:text-s30l33">
            {slug == "resource" || slug == "blog-detail" ? (
              <>Ready to join our community?</>
            ) : (
              <>
                Ready to begin your journey with us?
                <br /> Get onboard!
              </>
            )}
          </div>
          <div onClick={() => setDemoPopup(true)} className="button w-216 h-54">
            {slug == "partner-with-us" ? "Partner With us" : "Request A Demo"}
          </div>
        </div>
      )}

      <div className="w-100% h-1 bg-E0E0E0" />

      <div className="flex justify-between px-180  laptop:px-50">
        <div className="pb-175 pt-139">
          <Image src="/images/logo_white.svg" width={250} height={50} />
          <div className="mt-58 text-F5FBF3 text-s20l24">Find us on</div>
          <div className="flex mt-19 w-150 justify-between  cursor-pointer h-40">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="hover:fill-hover"
                d="M23.332 5.8335H11.6654C8.4437 5.8335 5.83203 8.44517 5.83203 11.6668V23.3335C5.83203 26.5552 8.4437 29.1668 11.6654 29.1668H23.332C26.5537 29.1668 29.1654 26.5552 29.1654 23.3335V11.6668C29.1654 8.44517 26.5537 5.8335 23.332 5.8335Z"
                fill="white"
              />
              <path
                d="M17.5 21.875C19.9162 21.875 21.875 19.9162 21.875 17.5C21.875 15.0838 19.9162 13.125 17.5 13.125C15.0838 13.125 13.125 15.0838 13.125 17.5C13.125 19.9162 15.0838 21.875 17.5 21.875Z"
                stroke="#474949"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.0625 10.9375V10.9385"
                stroke="#484949"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              width="34"
              height="35"
              viewBox="0 0 34 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="hover:fill-hover"
                d="M9.91797 14.5833V20.4167H14.168V30.625H19.8346V20.4167H24.0846L25.5013 14.5833H19.8346V11.6667C19.8346 11.2799 19.9839 10.909 20.2496 10.6355C20.5152 10.362 20.8756 10.2083 21.2513 10.2083H25.5013V4.375H21.2513C19.3727 4.375 17.571 5.14323 16.2426 6.51068C14.9142 7.87813 14.168 9.7328 14.168 11.6667V14.5833H9.91797Z"
                fill="white"
              />
            </svg>

            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="hover:fill-hover"
                d="M32.0846 5.84781C30.6263 6.5624 29.1971 6.85261 27.7096 7.29156C26.0748 5.44677 23.6511 5.34469 21.3221 6.21677C18.9932 7.08886 17.4678 9.22094 17.5013 11.6666V13.1249C12.769 13.2459 8.55443 11.0905 5.83464 7.29156C5.83464 7.29156 -0.264115 18.1314 11.668 23.3332C8.93797 25.1518 6.21526 26.3782 2.91797 26.2499C7.74214 28.8793 12.9994 29.7834 17.5509 28.4622C22.7717 26.9455 27.0621 23.0328 28.7086 17.1718C29.1997 15.3892 29.4436 13.5476 29.4334 11.6986C29.4305 11.3355 31.6355 7.65615 32.0846 5.84636V5.84781Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="mt-40 text-FAFAFA text-s20l24">
            © Mintoak, Inc. {new Date().getFullYear()}.{" "}
          </div>
        </div>
        <div className="pb-175 pt-186">
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-37 laptop:mb-35">
            Company
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span
              className="hover-border"
              onClick={() => router.push("/about-us")}
            >
              About Us
            </span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span
              className="hover-border"
              onClick={() => router.push("/partner-with-us")}
            >
              Partner With Us
            </span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span
              className="hover-border"
              onClick={() => router.push("/career")}
            >
              Careers
            </span>
          </div>
        </div>
        <div className="pb-175 pt-186">
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-37 laptop:mb-35">
            Offerings
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span
              className="hover-border"
              onClick={() => router.push("/product")}
            >
              Products
            </span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">Customise</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span
              className=" hover-border"
              onClick={() => router.push("/merchant")}
            >
              For Merchants
            </span>
          </div>
        </div>
        <div className="pb-175 pt-186">
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-37 laptop:mb-35">
            Legal
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span
              className="hover-border"
              onClick={() => router.push("/privacy_policy")}
            >
              Privacy
            </span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span
              className="hover-border"
              onClick={() => router.push("/terms_of_use")}
            >
              Website terms of use
            </span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span
              className="hover-border"
              onClick={() => router.push("/terms_and_condition")}
            >
              T & C
            </span>
          </div>
        </div>
        <div className="pb-175 pt-186">
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-37 laptop:mb-35">
            Resources
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span
              className="hover-border"
              onClick={() => router.push("/resource")}
            >
              Blogs
            </span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">Case Studies</span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border">News & Media</span>
          </div>
        </div>
        <div className="pb-175 pt-186">
          <div className="text-FAFAFA text-s22l140_62 font-bold mb-37 laptop:mb-35">
            Support
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span className="hover-border" onClick={() => router.push("/faqs")}>
              FAQs
            </span>
          </div>
          <div className="text-FAFAFA text-s20l140_62 mb-32 cursor-pointer">
            <span
              className="hover-border"
              onClick={() => router.push("/contact-us")}
            >
              Contact Us
            </span>
          </div>
        </div>
      </div>
      {demoPopup && (
        <Request_Demo triger={demoPopup} handleClose={TogglePopup} />
      )}
    </div>
  )
}
