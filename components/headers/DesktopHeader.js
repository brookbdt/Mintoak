import React from "react"
import Image from "../helpers/Image"
import { useRouter } from "next/router"

export default function DesktopHeader(headerProps) {
  const { activeDesktopMenu, setActiveDesktopMenu, menu } = headerProps
  const router = useRouter()
  console.log("wsxzbhn", menu)
  return (
    <>
      <div className="hidden desktop:flex laptop:flex">
        <Image src="/images/logo.svg" height={54} width={270} />
      </div>

      <div className="h-full items-center justify-center hidden desktop:flex laptop:flex">
        {/* <div className="flex px-26 h-full items-center cursor-pointer hover:bg-8FC055_O20 text-s20l24 text-0D0D0D">About Us</div> */}
        {menu &&
          menu[0] &&
          menu[0].Menu.map((item, index) => (
            <div
              key={index}
              className="flex px-26 h-full items-center cursor-pointer text-s20l24 text-0D0D0D hover:bg-D1E6BA"
              onClick={() => router.push(item?.url ? item?.url : "")}
              onMouseEnter={() => {
                if (item.name === "Products") {
                  setActiveDesktopMenu("products")
                }
                if (item.name === "Resources") {
                  setActiveDesktopMenu("resources")
                }
                if (item.name === "Support") {
                  setActiveDesktopMenu("support")
                }
              }}
              onMouseLeave={() => setActiveDesktopMenu("")}
            >
              {item.name}
              {item.name === "Products" && (
                <i
                  className={
                    "fa-solid ml-5 " +
                    (activeDesktopMenu === "products"
                      ? "fa-angle-up"
                      : "fa-angle-down")
                  }
                />
              )}
              {item.name === "Resources" && (
                <i
                  className={
                    "fa-solid ml-5 " +
                    (activeDesktopMenu === "resources"
                      ? "fa-angle-up"
                      : "fa-angle-down")
                  }
                />
              )}
              {item.name === "Support" && (
                <i
                  className={
                    "fa-solid ml-5 " +
                    (activeDesktopMenu === "support"
                      ? "fa-angle-up"
                      : "fa-angle-down")
                  }
                />
              )}
            </div>
          ))}
      </div>
    </>
  )
}
