import { useState } from "react"
import Image from "../helpers/Image"
import DesktopHeader from "./DesktopHeader"
import MiniHeader from "./MiniHeader"
import { useRouter } from "next/router"

export default function Header() {
  const iconSize = 48
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [activeDesktopMenu, setActiveDesktopMenu] = useState("")
  const headerProps = {
    showMobileMenu,
    setShowMobileMenu,
    activeDesktopMenu,
    setActiveDesktopMenu,
  }
  const router = useRouter()

  const renderProducts = () => {
    return (
      <>
        <div
          className="absolute h-fit w-100% py-32  bg-E0EFD4 z-50"
          onMouseEnter={() => setActiveDesktopMenu("products")}
          onMouseLeave={() => setActiveDesktopMenu("")}
        >
          <div className="pl-65">
            <div className="text-525252 text-s18l21_6 mb-9">Payments Stack</div>
            <div className="flex flex-wrap">
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/omni.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">OMNI</div>
                  <div className="text-s16l19 text-525252">
                    Omni channel transactions with all payment modes
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/mom.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">MOM</div>
                  <div className="text-s16l19 text-525252">
                    Instant merchant onboarding & management
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/pay_later.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">Pay Later</div>
                  <div className="text-s16l19 text-525252">
                    Digital register for customer payment dues
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/acorn.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">Acorn</div>
                  <div className="text-s16l19 text-525252">
                    Platform for all the processing
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/connect.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">Connect</div>
                  <div className="text-s16l19 text-525252">
                    Payment and billing integrations
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100% my-32 h-1 bg-A4D77A opacity-50" />
          <div className="pl-65">
            <div className="text-525252 text-s18l21_6 mb-9">
              Value Added Services
            </div>
            <div className="flex flex-wrap">
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/iku.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">IKU</div>
                  <div className="text-s16l19 text-525252">
                    Instant customer segmentation & recognition
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/oar.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">OAR</div>
                  <div className="text-s16l19 text-525252">
                    Offers and rewards for customers
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/far.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">FAR</div>
                  <div className="text-s16l19 text-525252">
                    Customer feedback & ratings
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/bat.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">BAT</div>
                  <div className="text-s16l19 text-525252">
                    Badges, awards and trophies for merchants
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/uam.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">UAM</div>
                  <div className="text-s16l19 text-525252">
                    User access and profile management
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/aim.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">AIM</div>
                  <div className="text-s16l19 text-525252">
                    Business analytics, insights and metrics
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA ">
                <Image
                  src="/images/icons/mac.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">MAC</div>
                  <div className="text-s16l19 text-525252">
                    Marketing and campaigns for latest trends
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/sam.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">SAM</div>
                  <div className="text-s16l19 text-525252">
                    Service analytics and management
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/pam.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">PAM</div>
                  <div className="text-s16l19 text-525252">
                    Portfolio analytics and management
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100% my-32 h-1 bg-A4D77A opacity-50" />
          <div className="pl-65">
            <div className="text-525252 text-s18l21_6 mb-9">Lending Stack</div>
            <div className="flex flex-wrap">
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/xsm.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">XSM</div>
                  <div className="text-s16l19 text-525252">
                    Cross- sell to merchants
                  </div>
                </div>
              </div>
              <div className="flex w-20% items-start cursor-pointer p-15 hover:bg-8FC055_O20 hover:bg-D1E6BA">
                <Image
                  src="/images/icons/xsc.svg"
                  height={iconSize}
                  width={iconSize}
                />
                <div className="ml-14">
                  <div className="text-s20l24 text-252525 mb-5">XSC</div>
                  <div className="text-s16l19 text-525252">
                    Cross- sell to customers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  const renderResources = () => {
    return (
      <div
        className="absolute h-fit w-fit overflow-hidden right-317  bg-E0EFD4 z-50"
        onMouseEnter={() => setActiveDesktopMenu("resources")}
        onMouseLeave={() => setActiveDesktopMenu("")}
      >
        <div className="flex px-24 py-10 items-center cursor-pointer hover:bg-D1E6BA">
          <Image
            src="/images/icons/blog.svg"
            height={iconSize}
            width={iconSize}
          />
          <div className="text-s20l24 text-252525 shrink-0 ml-10">Blog</div>
        </div>

        <div className="flex px-24 py-10 items-center cursor-pointer hover:bg-D1E6BA">
          <Image
            src="/images/icons/case_studies.svg"
            height={iconSize}
            width={iconSize}
          />
          <div className="text-s20l24 text-252525 shrink-0 ml-10 ">
            Case Studies
          </div>
        </div>

        <div className="flex px-24 py-10  items-center cursor-pointer hover:bg-D1E6BA">
          <Image
            src="/images/icons/in_the_media.svg"
            height={iconSize}
            width={iconSize}
          />
          <div className="text-s20l24 text-252525 shrink-0 ml-10">
            In the media
          </div>
        </div>
      </div>
    )
  }

  const renderSupport = () => {
    return (
      <div
        className="absolute h-fit w-fit overflow-hidden right-[49.5px] bg-E0EFD4 z-50"
        onMouseEnter={() => setActiveDesktopMenu("support")}
        onMouseLeave={() => setActiveDesktopMenu("")}
      >
        <div className="flex px-24 py-10 items-center cursor-pointer hover:bg-D1E6BA">
          <Image
            src="/images/icons/faqs.svg"
            height={iconSize}
            width={iconSize}
          />
          <div
            className="text-s20l24 text-252525 shrink-0 ml-10"
            onClick={() => router.push("/faqs")}
          >
            FAQs
          </div>
        </div>

        <div className="flex px-24 py-10 items-center cursor-pointer hover:bg-D1E6BA">
          <Image
            src="/images/icons/contact_us.svg"
            height={iconSize}
            width={iconSize}
          />
          <div
            className="text-s20l24 text-252525 shrink-0 ml-10"
            onClick={() => router.push("/contact-us")}
          >
            Contact Us
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="relative flex items-center justify-between px-18 z-50 shadow-headerBoxShadow desktop:px-80 laptop:px-80 laptop:h-111 h-54 desktop:h-111 bg-E0EFD4">
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
  )
}
