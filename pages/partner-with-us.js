import Image from "../components/helpers/Image"
import Carousel from "react-elastic-carousel"
import { useEffect, useState } from "react"
import { consts } from "react-elastic-carousel"
import { Modal } from "antd"
import { API, endpoints } from "../components/helpers/API"

export default function Partner() {
  const [modalvisible, setmodalVisible] = useState(false)
  const [comunityCard, setComunityCard] = useState([])

  useEffect(() => {
    // Community card
    API({
      url: endpoints.comminity_cards,
    }).then((resp) => {
      if (!resp.message) {
        console.log(resp, "resp")
        setComunityCard(resp)
      }
    })
  }, [])

  return (
    <>
      <div className="desktop:h-fit laptop:h-fit w-100% bg-8FC055 mobile:w-100%">
        {/* Top layout with resp */}
        <div className="relative desktop:pb-100 laptop:pb-100 top-bg-container flex w-100% border border-A4D77A mobile:flex-col">
          <div className="desktop:w-50% laptop:w-50% pl-100 pr-50 pt-100 z-10 mobile: w-100% mobile:p-20 ">
            <div className="desktop:text-s44l52 laptop:text-s44l52 mobile:text-s24l29 pr-80 pt-50 text-252525 shrink-0">
              Begin your
            </div>
            <div className="text-s56l67 mobile:text-s36l43 font-bold text-252525 w-100% desktop:pt-6 laptop:pt-6 mobile:pt-10">
              exclusive partnership
            </div>
            <div className="desktop:text-s44l52 laptop:text-s44l52 mobile:text-s24l29 pr-80 pt-10 text-252525 shrink-0">
              with mintoak
            </div>
            <div className="text-s20l30 mobile:text-s14l24 desktop:py-32 laptop:py-32 mobile:py-16 pr-75 text-525252 shrink-0">
              Tremendous opportunities for market expansion and networking with
              merchants, with the latest payments technology by your side.
            </div>
            <div className="button w-216 mobile:w-166 py-30 mobile:px-30 mobile:text-s14l16_8 mobile:py-10 text-s14l16_8 mobile:h-40  h-54 cursor-pointer z-20">
              Request a demo
            </div>
          </div>
          <div className="desktop:w-50% laptop:w-50% flex items-center justify-center px-50 pt-50 pb-20 mobile:w-100%">
            <Image
              src="/images/backgrounds/group-2.svg"
              width={550}
              height={550}
            />
          </div>
        </div>
        {/* Take your business  */}
        <div className="desktop:flex laptop:flex flex-col p-80 justify-center items-center mobile:px-20 ">
          <div className="desktop:text-s45l45 laptop:text-s45l45 desktop:text-252525 laptop:text-252525 mobile:text-000000 desktop:pt-78 laptop:pt-78 font-bold mobile:pr-100 mobile:text-left mobile:text-s22l33">
            Take your business to new heights with mintoak
          </div>
          <div className="desktop:text-s24l36 laptop:text-s24l36 text-525252 text-center desktop:py-40 laptop:py-40 desktop:px-50 laptop:px-50 mobile: py-24 mobile: w-100% mobile:text-left mobile:text-525252 mobile:text-s14l21 mobile:pr-50">
            In this era of rampant digitization and rule of the internet, banks
            and financial institutions with less access to advanced technology
            are the ones falling behind.
            <br className="desktop:hidden laptop:hidden" />
            <br className="desktop:hidden laptop:hidden" />
            At Mintoak, our comprehensive range of services and financial
            products ensure that you can serve your customers with the best
            tools by your side.
          </div>
          <div className="flex w-100% justify-center items-center desktop:py-42 laptop:py-42 desktop:px-30 laptop:px-30  mobile:w-100% mobile:flex-col">
            <div className="flex items-center flex-col w-25% mobile:flex-row mobile:w-100%">
              <div>
                <Image
                  src="/images/icons/financial-service-icon.svg"
                  width={54}
                  height={101}
                  type="img"
                  className="desktop:w-54 desktop:h-101 laptop:w-54 laptop:h-101 mobile:w-24 mobile:h-48"
                />
              </div>
              <div className="text-s24l36 desktop:text-252525 laptop:text-252525 font-bold py-37 text-center desktop:px-20 laptop:px-20 mobile:text-000000 mobile:pl-23 mobile:text-s16l24 mobile:font-medium">
                Tailored financial products
              </div>
            </div>
            <div className="flex items-center flex-col w-25% mobile:flex-row mobile:w-100%">
              <div>
                <Image
                  src="/images/icons/devices-icon.svg"
                  width={65}
                  height={95}
                  type="img"
                  className="desktop:w-54 desktop:h-101 laptop:w-54 laptop:h-101 mobile:w-28 mobile:h-51"
                />
              </div>

              <div className="text-s24l36 desktop:text-252525 laptop:text-252525 font-bold py-37 text-center desktop:px-30 laptop:px-30 mobile:text-000000 mobile:pl-23 mobile:text-s16l24 mobile:font-medium">
                Platform-as-a-service model
              </div>
            </div>
            <div className="flex items-center flex-col w-25% mobile:flex-row mobile:w-100%">
              <div>
                <Image
                  src="/images/icons/lamp-icon.svg"
                  width={68}
                  height={95}
                  type="img"
                  className="desktop:w-54 desktop:h-101 laptop:w-54 laptop:h-101 mobile:w-27 mobile:h-40"
                />
              </div>
              <div className="text-s24l36 desktop:text-252525 laptop:text-252525 font-bold py-37 text-center desktop:px-50 laptop:px-50 mobile:text-000000 mobile:pl-23 mobile:text-s16l24 mobile:font-medium">
                Innovative functionality
              </div>
            </div>
            <div className="flex items-center flex-col w-25% mobile:flex-row mobile:w-100%">
              <div>
                <Image
                  src="/images/icons/cart-icon.svg"
                  width={101}
                  height={97}
                  type="img"
                  className="desktop:w-54 desktop:h-101 laptop:w-54 laptop:h-101 mobile:w-39 mobile:h-48"
                />
              </div>
              <div className="text-s24l36 desktop:text-252525 laptop:text-252525 font-bold py-37 text-center desktop:px-50 laptop:px-50 mobile:text-000000 mobile:pl-23 mobile:text-s16l24 mobile:font-medium">
                Cross-selling platform
              </div>
            </div>
          </div>
        </div>
        {/* Customization on the go! */}
        <div className="desktop:flex flex-col laptop:flex desktop:py-80 laptop:py-80 mobile:pt-39 justify-center items-center mobile:px-20 bg-footer">
          <div className="desktop:text-s44l52 laptop:text-s44l52 desktop:text-F1F1F1 laptop:text-F1F1F1 font-bold text-center mobile:text-s22l26_4 mobile:text-FFFFFF">
            Customization on the go!
          </div>
          <div className="desktop:text-s20l30 laptop:text-s20l30 desktop:text-F1F1F1 laptop:text-F1F1F1 text-center desktop:py-40 laptop:py-40 desktop:px-170 laptop:px-170 mobile:pt-39 mobile: w-100% mobile:pb-32 mobile:text-F1F1F1 mobile:text-s14l21 mobile:px-20">
            Our robust and flexible platform can be remodeled both partially and
            completely, as per your specific requirements. The result is a
            cloud-native, agile, one-stop solution powered by valuable data
            analytics and exhaustive service management.
          </div>
          <div className="flex w-100% justify-center mobile:hidden">
            <Image
              src="/images/backgrounds/customization-img.svg"
              height={297}
              width={1049}
            />
          </div>
          <div className="flex w-100% justify-center desktop:hidden laptop:hidden">
            <Image
              src="/images/backgrounds/customization-img-mobile.svg"
              height={151}
              width={217}
            />
          </div>
          <div className="flex w-100% items-center justify-evenly text-center mobile:hidden">
            <div className="flex flex-col w-100% items-center px-30">
              <div className="text-s24l29 text-FFFFFF font-semibold text-center">
                Custom branding & design
              </div>
              <div className="text-s20l30 text-F1F1F1 text-center pt-8 ">
                Our platform can be re-branded with respect to your brand image
                & guidelines
              </div>
            </div>
            <div className="flex flex-col w-100% items-center px-20">
              <div className="text-s24l29 text-FFFFFF font-semibold text-center ">
                Modular product stack
              </div>
              <div className="text-s20l30 text-F1F1F1 text-center pt-8 ">
                Choose different modules from a range of products available
              </div>
            </div>
            <div className="flex flex-col w-100% items-center px-30">
              <div className="text-s24l29 text-FFFFFF font-semibold text-center ">
                Subscription pricing
              </div>
              <div className="text-s20l30 text-F1F1F1 text-center pt-8">
                Pay only for the features you have selected from our pack
              </div>
            </div>
          </div>
          <div className="desktop:hidden laptop:hidden w-100%">
            <div className="w-100% text-center items-center justify-center flex">
              <div className="text-s12l18 text-FFFFFF text-center px-50">
                Custom branding & design
              </div>
              <div className="text-s12l18 text-FFFFFF text-center px-50">
                Subscription pricing
              </div>
            </div>
            <div className="flex flex-col items-center pt-16 px-90">
              <div className="text-s14l21 text-center text-F1F1F1 ">
                Choose different modules from a range of products available
              </div>
              <div className="pt-41 pb-25">
                <Image
                  src="/images/backgrounds/product-stock.svg"
                  height={128.35}
                  width={145.78}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="desktop:py-150 laptop:py-150 mobile:py-80 w-100%">
          <div className="w-100% desktop:text-center laptop:text-center mobile:text-s22l33 mobile:text-000000 desktop:text-s45l45 laptop:text-s45l45 desktop:text-252525 laptop:text-252525 desktop:font-medium laptop:font-medium mobile:font-bold pl-33">
            The Mintoak effect
          </div>
          <div className="flex mobile:flex-col items-center justify-center mobile:pt-23 desktop:pt-60 laptop:pt-60 mobile:w-100%">
            <div className="flex desktop:flex-col laptop:flex-col text-center items-center desktop:px-50 laptop:px-50 mobile:w-100% mobile:pl-33 mobile:pr-50">
              <div className="flex">
                <div className="desktop:h-130 laptop:h-130 desktop:w-130 laptop:w-130 mobile:w-50 mobile:h-50 bg-mintoak_effect rounded-full"></div>
                <div className="absolute mobile:pl-12 mobile:pt-14 desktop:pl-30 laptop:pl-30 desktop:pt-35 laptop:pt-35 desktop:text-s36l54 laptop:text-s36l54 mobile:text-s14l21 mobile:text-000000 desktop:text-252525 laptop:text-252525 font-bold">
                  25%
                </div>
              </div>
              <div className=" mobile:pl-15 desktop:text-s22l26_4 laptop:text-s22l26_4 mobile:text-252525 mobile:text-s16l19 desktop:text-0D0D0D laptop:text-0D0D0D desktop:pt-20 laptop:pt-20">
                Increased activation rates
              </div>
            </div>
            <div className="flex desktop:flex-col laptop:flex-col text-center items-center desktop:px-50 laptop:px-50 mobile:w-100% mobile:pl-33 mobile:pr-50 mobile:pt-20">
              <div className="flex">
                <div className="desktop:h-130 laptop:h-130 desktop:w-130 laptop:w-130 mobile:w-50 mobile:h-50 bg-mintoak_effect rounded-full"></div>
                <div className="absolute mobile:pl-12 mobile:pt-14 desktop:pl-30 laptop:pl-30 desktop:pt-35 laptop:pt-35 desktop:text-s36l54 laptop:text-s36l54 mobile:text-s14l21 mobile:text-000000 desktop:text-252525 laptop:text-252525 font-bold">
                  50%
                </div>
              </div>
              <div className=" mobile:pl-15 desktop:text-s22l26_4 laptop:text-s22l26_4 mobile:text-252525 mobile:text-s16l19 desktop:text-0D0D0D laptop:text-0D0D0D desktop:pt-20 laptop:pt-20">
                Increased digital transactions
              </div>
            </div>
            <div className="flex desktop:flex-col laptop:flex-col text-center items-center desktop:px-50 laptop:px-50 mobile:w-100% mobile:pl-33 mobile:pr-50 mobile:pt-20">
              <div className="flex">
                <div className="desktop:h-130 laptop:h-130 desktop:w-130 laptop:w-130 mobile:w-50 mobile:h-50 bg-mintoak_effect rounded-full"></div>
                <div className="absolute mobile:pl-12 mobile:pt-14 desktop:pl-30 laptop:pl-30 desktop:pt-35 laptop:pt-35 desktop:text-s36l54 laptop:text-s36l54 mobile:text-s14l21 mobile:text-000000 desktop:text-252525 laptop:text-252525 font-bold">
                  35%
                </div>
              </div>
              <div className=" mobile:pl-15 desktop:text-s22l26_4 laptop:text-s22l26_4 mobile:text-252525 mobile:text-s16l19 desktop:text-0D0D0D laptop:text-0D0D0D desktop:pt-20 laptop:pt-20">
                Increased throughout payment
              </div>
            </div>
            <div className="flex desktop:flex-col laptop:flex-col text-center items-center desktop:px-50 laptop:px-50 mobile:w-100% mobile:pl-33 mobile:pr-50 mobile:pt-20">
              <div className="flex">
                <div className="desktop:h-130 laptop:h-130 desktop:w-130 laptop:w-130 mobile:w-50 mobile:h-50 bg-mintoak_effect rounded-full"></div>
                <div className="absolute mobile:pl-12 mobile:pt-14 desktop:pl-30 laptop:pl-30 desktop:pt-35 laptop:pt-35 desktop:text-s36l54 laptop:text-s36l54 mobile:text-s14l21 mobile:text-000000 desktop:text-252525 laptop:text-252525 font-bold">
                  60%
                </div>
              </div>
              <div className=" mobile:pl-15 desktop:text-s22l26_4 laptop:text-s22l26_4 mobile:text-252525 mobile:text-s16l19 desktop:text-0D0D0D laptop:text-0D0D0D desktop:pt-20 laptop:pt-20">
                Increased multi-fold
              </div>
            </div>
          </div>
        </div>
        {/* Partner with us form */}
        <div className="w-100%  bg-footer">
          <div className="desktop:text-s45l45 laptop:text-s45l45 text-FFFFFF desktop:pl-100 laptop:pl-100 desktop:pt-100 laptop:pt-100 pb-48 mobile:pt-48 mobile:pl-20 mobile:text-s22l45">
            Partner with us
          </div>
          <div className="w-100% flex mobile:flex-col mobile:px-20 ">
            <div className="desktop:px-100 laptop:px-100 w-100%">
              <div className="pb-40 ">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                  Full Name
                </div>
                <input
                  type="text"
                  className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% global-input pb-5"
                />
              </div>
              <div className="pb-40 ">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                  Bank Name
                </div>
                <input
                  type="text"
                  className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% global-input pb-5"
                />
              </div>
            </div>
            <div className="desktop:pr-100 laptop:pr-100 w-100%">
              <div className="w-100% ">
                <div className="pb-40 ">
                  <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 w-100% desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                    Contact Number
                  </div>
                  <span className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-8B8B8B border-r border-C4C4C4 pr-5 absolute mobile:pt-3">
                    +91
                  </span>
                  <input
                    type="number"
                    className=" global-input-number desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% mobile:pl-35 desktop:pl-50 laptop:pl-50 global-input pb-3"
                  />
                </div>
              </div>
              <div className="pb-40 ">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                  Job Title
                </div>
                <input
                  type="text"
                  className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% global-input pb-5"
                />
              </div>
            </div>
            <div className="desktop:pr-100 laptop:pr-100 w-100%">
              <div className="pb-40 w-100% ">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                  Business Email
                </div>
                <input
                  type="text"
                  className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% global-input pb-5"
                />
              </div>
              <div className="pb-40">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-10">
                  Country
                </div>
                <select className="w-100% desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-F1F1F1 global-input pb-5">
                  <option className="bg-525252" value="India">
                    India
                  </option>
                  <option className="bg-525252" value="Usa">
                    Usa
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="desktop:px-100 laptop:px-100 mobile:px-20 w-100%">
            <div className="pb-40">
              <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                Message
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-F1F1F1 w-100% global-input pb-5"
              />
            </div>
          </div>
          <div className="desktop:pl-100 laptop:pl-100 w-100% pb-100 mobile:flex mobile:items-center mobile:justify-center">
            <div
              onClick={() => setmodalVisible(true)}
              className="mobile:w-320 desktop:w-359 laptop:w-359 button desktop:text-s22l26_4 laptop:text-s22l26_4 text-FFFFFF mobile:text-s14l16_8 font-bold mobile:py-10 mobile:px-98 desktop:py-15 laptop:py-15 desktop:px-176 laptop:px-176"
            >
              Submit
            </div>
          </div>
        </div>
        {/* our partners */}
        <div className="mobile:py-80">
          <div className="text-s44l120 mobile:text-s20l150 text-252525 mb-30 font-bold text-center desktop:pt-150 laptop:pt-150">
            Our partners
          </div>
          <div className="flex justify-center items-center w-100% py-50 px-150 pb-100 mobile:px-0 mobile:mb-0 mobile:hidden">
            <Carousel
              itemsToShow={3}
              itemPadding={[0, 20, 0, 20]}
              enableMouseSwipe={false}
              pagination={false}
              renderArrow={({ type, onClick, isEdge }) => {
                const pointer =
                  type === consts.PREV ? (
                    <i className="fa fa-angle-left text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
                  ) : (
                    <i className="fa fa-angle-right text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
                  )
                return (
                  <button onClick={onClick} disabled={isEdge} className="h-120">
                    {pointer}
                  </button>
                )
              }}
            >
              {comunityCard.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="h-230 mobile:h-170 mobile:278 sliderItem pt-30 pb-50 carousel-shadow"
                  >
                    <Image
                      src={item.BankLogo}
                      width={231}
                      height={130}
                      className="grayscale h-53 colorImage m-auto"
                    />
                    <div className="">
                      <div className="comunityContent hidden mt-30 text-center text-s20l30">
                        {item.BankInfo}
                      </div>
                    </div>
                  </div>
                )
              })}
            </Carousel>
          </div>
          <div className="px-20">
            <Carousel
              itemsToShow={1}
              // verticalMode
              itemPadding={[0, 0, 28, 0]}
              enableMouseSwipe={true}
              pagination={true}
              showArrows={false}
              outerSpacing={0}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className="flex">
                    {pages.map((page) => {
                      const isActivePage = activePage === page
                      return (
                        <div
                          className={`bg-525252 w-6 h-6 rounded-full mr-6 ${
                            isActivePage ? "bg-active" : ""
                          }`}
                          key={page}
                          onClick={() => onClick(page)}
                          active={isActivePage}
                        ></div>
                      )
                    })}
                  </div>
                )
              }}
            >
              {comunityCard.map((item, index) => {
                return (
                  <div className="" key={index}>
                    <Image src={item.BankLogo} width={167} height={96} />
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </div>
      {modalvisible ? (
        <Modal
          bodyStyle={{
            background:
              "linear-gradient(341.98deg, #E9F2DD 21.15%, #8EA56F 184.51%)",
          }}
          centered
          visible={modalvisible}
          onCancel={() => setmodalVisible(false)}
          footer={null}
        >
          <div className="w-100%">
            <div className="w-100% flex justify-center mobile:pt-9 desktop:pt-42 laptop:pt-42">
              <Image
                src="/images/icons/thumb-icon.svg"
                width={135}
                height={135}
              />
            </div>
            <div className="w-100% text-center mobile:text-s16l24 desktop:text-s22l33 laptop:text-s22l33 text-252525 mobile:38 desktop:px-50 laptop:px-50 mobile:pb-29 desktop:pb-35 laptop:pb-35 font-bold">
              Thank you for getting in touch. We will get back to you shortly.
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  )
}
