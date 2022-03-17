import React from "react"
import Image from "../helpers/Image"
import { useRouter } from "next/router"

export default function DesktopHeader(headerProps) {
  const { activeDesktopMenu, setActiveDesktopMenu } = headerProps
  const router = useRouter()
  return (
    <>
      <div className="hidden desktop:flex laptop:flex">
        <Image src="/images/logo.svg" height={53.79} width={270} />
      </div>

      <div className="h-full items-center justify-center hidden desktop:flex laptop:flex">
        {/* <div className="flex px-26 h-full items-center cursor-pointer hover:bg-8FC055_O20 text-s20l24 text-0D0D0D">About Us</div> */}
        <div
          className="flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D hover:bg-D1E6BA"
          onClick={() => router.push("/about-us")}
        >
          About Us
        </div>
        <div
          className="flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D hover:bg-D1E6BA"
          onMouseEnter={() => setActiveDesktopMenu("products")}
          onMouseLeave={() => setActiveDesktopMenu("")}
        >
          Products{" "}
          <i
            className={
              "fa-solid ml-5 " +
              (activeDesktopMenu === "products"
                ? "fa-angle-up"
                : "fa-angle-down")
            }
          />
        </div>
        <div className="flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D hover:bg-D1E6BA">
          Partner With Us
        </div>
        <div
          className="flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D hover:bg-D1E6BA"
          onMouseEnter={() => setActiveDesktopMenu("resources")}
          onMouseLeave={() => setActiveDesktopMenu("")}
        >
          Resources{" "}
          <i
            className={
              "fa-solid ml-5 " +
              (activeDesktopMenu === "resources"
                ? "fa-angle-up"
                : "fa-angle-down")
            }
          />
        </div>
        <div
          className="flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D hover:bg-D1E6BA"
          onClick={() => router.push("/career")}
        >
          Careers
        </div>
        <div
          className="flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D hover:bg-D1E6BA"
          onMouseEnter={() => setActiveDesktopMenu("support")}
          onMouseLeave={() => setActiveDesktopMenu("")}
        >
          Support
          <i
            className={
              "fa-solid ml-5 " +
              (activeDesktopMenu === "support"
                ? "fa-angle-up"
                : "fa-angle-down")
            }
          />
        </div>
      </div>
    </>
  )
}
