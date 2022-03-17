import { useEffect, useState } from "react";
import { API, endpoints } from "../components/helpers/API";
import Image from "../components/helpers/Image";
import { Chrono } from "react-chrono";
import Carousel from "react-elastic-carousel";
import { consts } from "react-elastic-carousel";
export default function Merchant() {
  const [merchantBannerResp, setMerchantBannerResp] = useState({});

  useEffect(() => {
    // merchant_banner
    // API({
    //     url: endpoints.merchant_banner,
    // }).then((resp) => {
    //     if (!resp.message) {
    //         setMerchantBannerResp(resp)
    //     }
    // })
  }, []);

  return (
    <div className="h-fit w-100% ">
      {/* Merchant Banner */}
      <div className="relative top-bg-container">
        <Image
          src="/images/backgrounds/home-bg.webp"
          className="absolute z-minus1 mobile:hidden"
          layout="fill"
        />
        <div className="desktop:w-50% desktop:p-100 laptop:p-100 laptop:w-70% tablet:w-80% tablet:p-30 px-20 mobile:pt-40 pb-40 z-10">
          <div className="text-s44l120 mobile:text-s20l24 text-252525 shrink-0">
            Get answers to all your
          </div>
          <div className="text-s56l124_5 mobile:text-s24l29 font-bold text-252525 shrink-0">
            business needs
          </div>
          <div className="text-s44l120 mobile:text-s20l24 text-252525 shrink-0">
            on a single destination
          </div>
          <div className="text-s24l150 mobile:text-s14l24 mobile:text-center text-525252 shrink-0 mt-37">
            Powerful analytics and platform innovation transforming business
            finance
          </div>
          <div className="button w-216 mobile:w-100% mobile:h-40 h-54 mt-40 cursor-pointer z-20">
            Request A Demo
          </div>
        </div>
      </div>
      {/* border */}
      <div className="border-t-1 border-A4D77A w-100%"></div>
      {/* Benefits for the Merchants */}
      <div className="h-686 mobile:h-auto w-100% merchant-bg mobile:pb-150">
        <div className="pt-157 mobile:pt-128">
          <div className="font-bold text-s45l67 mobile:text-s20l24 text-center">
            Benefits for the Merchants
          </div>
        </div>
        <div className="flex justify-center pt-40 mobile:block justify-around px-125 mobile:px-50">
          <div className="w-200 flex flex-col justify-center mr-50 mobile:w-100%">
            <Image
              src="/images/icons/empowering.svg"
              className=""
              width={120}
              height={120}
            />
            <div className="text-s24l36 mobile:text-s16l19 mobile:w-100% mobile:px-40 text-center h-108 p-5 desktop:pt-40 laptop:pt-30 laptop:text-s20l30 desktop:font-bold laptop:font-bold">
              Empowering and elevating small businesses
            </div>
          </div>
          <div className="w-273 flex flex-col justify-center mr-50 mobile:w-100%">
            <Image
              src="/images/icons/partership.svg"
              className=""
              width={120}
              height={120}
            />
            <div className="text-s24l36 mobile:text-s16l19 mobile:w-100% mobile:px-40 text-center h-108 p-5 desktop:pt-40 laptop:pt-30 laptop:text-s20l30 desktop:font-bold laptop:font-bold">
              Partnerships with leading trustworthy banks
            </div>
          </div>
          <div className="w-225 flex flex-col justify-center mr-50 mobile:w-100%">
            <Image
              src="/images/icons/offers.svg"
              className=""
              width={120}
              height={120}
            />
            <div className="text-s24l36 mobile:text-s16l19 mobile:w-100% mobile:px-40 text-center h-108 p-5 desktop:pt-40 laptop:pt-30 laptop:text-s20l30 desktop:font-bold laptop:font-bold">
              Various offers and merchant loyalty on board
            </div>
          </div>
          <div className="w-273 flex flex-col justify-center mobile:w-100%">
            <Image
              src="/images/icons/merchant-exp.svg"
              className=""
              width={120}
              height={120}
            />
            <div className="text-s24l36 mobile:text-s16l19 mobile:w-100% mobile:px-40 text-center h-108 p-5 desktop:pt-40 laptop:pt-30 laptop:text-s20l30">
              Completely customized merchant experience
            </div>
          </div>
        </div>
      </div>
      {/* Decluttering Business Transactions with Reduced Friction */}
      <div className="merchant-liner-bg">
        <div className="pt-100 flex justify-center text-center m-auto text-s45l45 mobile:text-s20l24 text-F1F1F1 w-714 mobile:w-301 mobile:pt-40">
          Decluttering Business Transactions with Reduced Friction
        </div>
        <div className="my-40 text-s20l30 font-normal text-F1F1F1 text-center m-auto w-885 mobile:text-s14l21 mobile:w-315">
          Not all small businesses and merchants have the right built-in
          technological resources to foster digital advancements and ease of
          transactions for them. Bringing this much-needed virtual interface,
          speed and innovation to SME business finance, Mintoak also offers
          benefits of real-time analytics and complete flexibility.
        </div>
        <div className="desktop:mx-100 m-auto laptop:mx-200">
          <div className="desktop:hidden  m-auto">
            <Image
              src="/images/icons/merchant-bussiness-transaction.svg"
              width={1000}
              height={200}
            />
          </div>
          <div className="laptop:hidden mobile:hidden m-auto flex justify-center">
            <Image
              src="/images/icons/merchant-bussiness-transaction.svg"
              width={1000}
              height={500}
              type="img"
              className="w-4000 h-200"
            />
          </div>
        </div>
        <div className="pt-51 laptop:mx-200 text-F1F1F1 flex text-center m-auto pb-122 justify-center">
          <div className="pl-135 desktop:w-417 mobile:text-s14l17 mobile:pl-0">
            No more clunky legacy systems
          </div>
          <div className="w-300 desktop:w-417 mobile:text-s14l17">
            <div>Say no to fragmented and</div>
            scattered businesses
          </div>
          <div className="w-300 desktop:w-417 mobile:text-s14l17">
            Stay away from digital confusion
          </div>
        </div>
      </div>
      {/* Time to Get Onboard with Mintoak */}
      <div className="pb-160 w-100% mt-243 mobile:mt-80">
        <div className="flex w-100% mobile:hidden">
          <div className="w-33%">
            <div className="text-s45l45 font-bold pl-115">
              Time to Get Onboard with Mintoak
            </div>
            <div className="pt-40 text-s20l30 pl-115">
              Working with us is easy! Mintoak welcomes all small and medium
              enterprises and merchants with open arms, helping bridge the gap
              of access between them and banks while also offering powerful
              real-time analytics and decluttered finance as its underlying
              pillars.
            </div>
          </div>
          <div className="w-33% flex justify-end">
            <Image
              src="/images/backgrounds/merchant-mobile.svg"
              type="img"
              height={500}
              width={300}
            />
          </div>
          <div className="w-33% flex justify-center pr-50">
            <Chrono
              cardWidth={250}
              cardHeight={120}
              theme={{
                primary: "#848484",
                secondary: "#F1F1F1",
                cardBgColor: "footer",
                outline: "red",
              }}
              flipLayout={true}
              mode="VERTICAL"
              hideControls={true}
              itemWidth={900}
            >
              <div className="text-right">
                <div className="text-252525 text-s28l42 pt-42">Onboarding</div>
              </div>
              <div className="text-right pr-20">
                <div className="text-848484 text-s20l30 pt-43">Updates</div>
              </div>
              <div className="text-right pr-20">
                <div className="text-848484 text-s20l30 pt-60 pl-40">
                  Recognition
                </div>
              </div>
            </Chrono>
          </div>
        </div>
        <div className="laptop:hidden desktop:hidden">
          <Chrono
            theme={{
              primary: "#848484",
              secondary: "#F1F1F1",
              cardBgColor: "footer",
              outline: "red",
            }}
            mode="HORIZONTAL"
            hideControls={true}
            itemWidth={120}
          >
            <div className="text-right">
              <div className="text-252525 text-s28l42 pt-42 mobile:pt-0">
                Onboarding
              </div>
            </div>
            <div className="text-right pr-20">
              <div className="text-848484 text-s20l30 pt-43 mobile:pt-0">
                Updates
              </div>
            </div>
            <div className="text-right pr-20">
              <div className="text-848484 text-s20l30 pt-60 pl-40 mobile:pt-0">
                Recognition
              </div>
            </div>
          </Chrono>
          <div className="flex text-center">
            <div className="w-33%">
              <div className="text-252525 mobile:text-s18l27 text-s28l42 mobile:pt-0">
                Onboarding
              </div>
            </div>
            <div className="w-33%">
              <div className="text-848484 mobile:text-s18l27 text-s20l30 pt-43 mobile:pt-0">
                Updates
              </div>
            </div>
            <div className="w-33%">
              <div className="text-848484 mobile:text-s18l27 text-s20l30 pt-43 mobile:pt-0">
                Recognition
              </div>
            </div>
          </div>
          <div className="pt-40 px-30">
            <div className="mobile:text-s20l24 font-bold">
              Time to Get Onboard with Mintoak
            </div>
            <div className="mobile:text-s14l21 pt-24">
              Not all small businesses and merchants have the right built-in
              technological resources to foster digital advancements and ease of
              transactions for them. Bringing this much-needed virtual
              interface, speed and innovation to SME business finance, Mintoak
              also offers benefits of real-time analytics and complete
              flexibility.
            </div>
            <div className="pt-45">
              <Image
                src="/images/backgrounds/merchant-mobile.svg"
                type="img"
                height={500}
                width={300}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Features We Offer */}
      <div className="h-670 merchant-liner-bg px-125 mobile:px-10 mobile:h-auto">
        <div className="text-F1F1F1 text-s45l45 mobile:text-s20l24 font-bold pt-81 pb-60 flex justify-center">
          Features We Offer
        </div>
        <div className="pb-60">
          <div className="mobile:hidden">
            <Carousel
              itemsToShow={3}
              itemPadding={[0, 20, 0, 20]}
              enableMouseSwipe={false}
              pagination={false}
              renderArrow={({ type, onClick, isEdge }) => {
                const pointer =
                  type === consts.PREV ? (
                    <i className="fa fa-angle-left text-s24l150 text-F1F1F1 flex items-center justify-center border border-F1F1F1 rounded-full h-63 w-63" />
                  ) : (
                    <i className="fa fa-angle-right text-s24l150 text-F1F1F1 flex items-center justify-center border border-F1F1F1 rounded-full h-63 w-63" />
                  );
                return (
                  <button onClick={onClick} disabled={isEdge}>
                    {pointer}
                  </button>
                );
              }}
            >
              <div className="flex flex-col items-center w-311 h-334 p-28 border border-C4C4C4">
                <Image
                  src="/images/icons/mintoak-omni.svg"
                  height={110}
                  width={273}
                />
                <div className="font-bold text-DFDFDF text-center text-s24l29 mt-24">
                  Mintoak OMNI
                </div>
                <div className="text-DFDFDF text-center mt-12 text-s20l150">
                  Handle all types of digital payments on a single platform
                </div>
              </div>
              <div className="flex flex-col items-center w-311 h-334 p-28 border border-C4C4C4">
                <Image
                  src="/images/icons/pay-later.svg"
                  height={110}
                  width={273}
                />
                <div className="font-bold text-DFDFDF text-center text-s24l29 mt-24">
                  Pay Later
                </div>
                <div className="text-DFDFDF text-center mt-12 text-s20l150">
                  Track customer dues on a robust digital register
                </div>
              </div>
              <div className="flex flex-col items-center w-311 h-334 p-28 border border-C4C4C4">
                <Image
                  src="/images/icons/customer.svg"
                  height={148}
                  width={273}
                />
                <div className="font-bold text-DFDFDF text-center text-s24l29 mt-24">
                  Mintoak IKU
                </div>
                <div className="text-DFDFDF text-center mt-12 text-s20l150">
                  Perform instant customer recognition and segmentation
                </div>
              </div>
            </Carousel>
          </div>
          <div className="desktop:hidden laptop:hidden">
            <Carousel
              itemsToShow={3}
              verticalMode
              itemPadding={[0, 0, 30, 0]}
              enableMouseSwipe={false}
              pagination={false}
              renderArrow={({ type, onClick, isEdge }) => {
                const pointer =
                  type === consts.PREV ? (
                    <i className="fa fa-angle-left text-s24l150 text-F1F1F1 flex items-center justify-center border border-F1F1F1 rounded-full h-24 w-24 text-s12l14" />
                  ) : (
                    <i className="fa fa-angle-right text-s24l150 text-F1F1F1 flex items-center justify-center border border-F1F1F1 rounded-full h-24 w-24 text-s12l14" />
                  );
                return (
                  <button onClick={onClick} disabled={isEdge} className="h-650">
                    {pointer}
                  </button>
                );
              }}
            >
              <div className="flex flex-col items-center w-311 mobile:h-191 p-28 border border-C4C4C4">
                <Image
                  src="/images/icons/mintoak-omni.svg"
                  height={110}
                  width={273}
                />
                <div className="font-bold text-DFDFDF mobile:text-s16l19 text-center text-s24l29 mt-24">
                  Mintoak OMNI
                </div>
                <div className="text-DFDFDF text-center mt-12 mobile:text-s14l17">
                  Handle all types of digital payments on a single platform
                </div>
              </div>
              <div className="flex flex-col items-center w-311 mobile:h-191 p-28 border border-C4C4C4">
                <Image
                  src="/images/icons/pay-later.svg"
                  height={110}
                  width={273}
                />
                <div className="font-bold text-DFDFDF mobile:text-s16l19 text-center text-s24l29 mt-24">
                  Pay Later
                </div>
                <div className="text-DFDFDF text-center mt-12 mobile:text-s14l17">
                  Track customer dues on a robust digital register
                </div>
              </div>
              <div className="flex flex-col items-center w-311  mobile:h-191 p-28 border border-C4C4C4">
                <Image
                  src="/images/icons/customer.svg"
                  height={148}
                  width={273}
                />
                <div className="font-bold text-DFDFDF mobile:text-s16l19 text-center text-s24l29 mt-24">
                  Mintoak IKU
                </div>
                <div className="text-DFDFDF text-center mt-12 mobile:text-s14l17">
                  Perform instant customer recognition and segmentation
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      {/* Get Assured By Your Bank Today! */}
      <div className="pb-51 w-100% px-100 merchant-bg mobile:px-0">
        <div className="flex w-100% mobile:block mobile:pt-80 mobile:text-center">
          <div className="w-50% flex flex-col justify-end pb-70 mobile:w-100%">
            <div className="font-bold text-s45l45 laptop:text-s32l38 mobile:text-s20l24 pb-40">
              Get Assured By Your Bank Today!
            </div>
            <div className="text-s20l30 laptop:text-s16l19 mobile:text-s14l21 mobile:text-center mobile:px-30 font-normal">
              Mintoak has established itself as a brand of repute and immense
              trust when it comes to large contract wins, thanks to our ability
              to upsell dedicated product stacks to esteemed banks like HDFC,
              Burgan and SBI. Looking forward to further expansion and
              affiliation with new partners from across the world, Mintoak has
              already earned the trust of several happy customers and banks that
              rely on us.
            </div>
          </div>
          <div className="pl-100 w-50% mobile:hidden">
            <Image
              src="/images/icons/merchant-bank-today.svg"
              height={1000}
              width={1000}
            />
          </div>
        </div>
        <div className="pt-154 mobile:pt-80">
          <div className="flex justify-center font-bold text-s45l45 mobile:text-s20l24 mobile:px-34">
            Customers Onboard
          </div>
          <div className="flex mobile:block justify-center items-center w-100% py-50 mb-100 mobile:px-0 mobile:mb-0 mobile:hidden">
            <Carousel
              itemsToShow={5}
              itemPadding={[0, 20, 0, 20]}
              enableMouseSwipe={false}
              pagination={false}
              renderArrow={({ type, onClick, isEdge }) => {
                const pointer =
                  type === consts.PREV ? (
                    <i className="fa fa-angle-left text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
                  ) : (
                    <i className="fa fa-angle-right text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
                  );
                return (
                  <button onClick={onClick} disabled={isEdge} className="h-120">
                    {pointer}
                  </button>
                );
              }}
            >
              <div className="">
                <Image
                  src="/images/backgrounds/wellness.svg"
                  width={231}
                  height={130}
                />
              </div>
              <div className="">
                <Image
                  src="/images/backgrounds/food.svg"
                  width={231}
                  height={130}
                />
              </div>
              <div className="">
                <Image
                  src="/images/backgrounds/subway.svg"
                  width={231}
                  height={130}
                />
              </div>
              <div className="">
                <Image
                  src="/images/backgrounds/synk.svg"
                  width={231}
                  height={130}
                />
              </div>
              <div className="">
                <Image
                  src="/images/backgrounds/birdy.svg"
                  width={231}
                  height={130}
                />
              </div>
            </Carousel>
          </div>
          <div className="flex mobile:block justify-center items-center w-100% py-50 mb-100 mobile:px-0 mobile:mb-0 desktop:hidden laptop:hidden">
            <div className="px-20">
              <Carousel
                itemsToShow={3}
                itemPadding={[0, 20, 0, 0]}
                enableMouseSwipe={false}
                pagination={false}
                renderArrow={({ type, onClick, isEdge }) => {
                  const pointer =
                    type === consts.PREV ? (
                      <i className="fa fa-angle-left text-s12l14 flex items-center justify-center border border-8B8B8B rounded-full h-24 w-24 " />
                    ) : (
                      <i className="fa fa-angle-right text-s12l14 flex items-center justify-center border border-8B8B8B rounded-full h-24 w-24" />
                    );
                  return (
                    <button onClick={onClick} disabled={isEdge} className="">
                      {pointer}
                    </button>
                  );
                }}
              >
                <div className="">
                  <Image
                    src="/images/backgrounds/wellness.svg"
                    width={231}
                    height={130}
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/backgrounds/food.svg"
                    width={231}
                    height={130}
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/backgrounds/subway.svg"
                    width={231}
                    height={130}
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/backgrounds/synk.svg"
                    width={231}
                    height={130}
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/backgrounds/birdy.svg"
                    width={231}
                    height={130}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="desktop:hidden laptop:hidden pt-80">
          <div className="text-s20l24 flex justify-center font-bold">
            Hear from our users themselves!
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
