import { useEffect, useState } from "react";
import { API, endpoints } from "../components/helpers/API";
import Image from "../components/helpers/Image";
import { Chrono } from "react-chrono";
import Carousel from "react-elastic-carousel";
import { consts } from "react-elastic-carousel";
export default function Merchant() {
  const [merchantBannerResp, setMerchantBannerResp] = useState({});
  const [merchantBenefitsResp, setMerchantBenefitsResp] = useState();
  const [merchantBenefits2, setMerchantBenefits2] = useState();
  const [merchantBenefits3, setMerchantBenefits3] = useState();
  const [merchantAssuredByBanks, setMerchantAssuredByBanks] = useState();
  const [merchantPageOnboarding, setMerchantPageOnboarding] = useState();
  const [merchantPageMockUp2, setMerchantPageMockUp2] = useState();
  const [merchantPageMockUp3, setMerchantPageMockUp3] = useState();

  useEffect(() => {
    API({
      url: endpoints.merchant_banner,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantBannerResp(resp);
      }
    });
    API({
      url: endpoints.merchant_page_benefits,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantBenefitsResp(resp);
        console.log("dasdasdasdasdasdasds", resp);
      }
    });
    API({
      url: endpoints.merchant_page_benefits_2,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantBenefits2(resp);
        console.log("asdasifasofjaksjd", resp);
      }
    });
    API({
      url: endpoints.merchant_page_benefits_3,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantBenefits3(resp);
        console.log("asfsasdffsdafsadf", resp);
      }
    });
    API({
      url: endpoints.merchant_page_assured_by_banks,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantAssuredByBanks(resp);
        console.log("Aasgdjahgsduasgd", resp);
      }
    });
    API({
      url: endpoints.merchant_page_onboarding,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantPageOnboarding(resp);
        console.log("ASDksljsbsadvasgdashd", resp);
      }
    });
    API({
      url: endpoints.merchant_page_mock_up2,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantPageMockUp2(resp);
        console.log("askduasbdywebnsdhgsds", resp);
      }
    });
    API({
      url: endpoints.merchant_page_mock_up3,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantPageMockUp3(resp);
        console.log("asjklasfdsfhkjhfkjdhfa", resp);
      }
    });
  }, []);

  return (
    <div className="h-fit w-100% ">
      {/* Merchant Banner */}
      <div className="relative top-bg-container">
        <Image
          src={merchantBannerResp.Illustration}
          className="absolute z-minus1 mobile:hidden"
          layout="fill"
        />
        <div className="desktop:w-50% desktop:p-100 desktop:pt-150 laptop:pt-150 laptop:p-100 laptop:w-70% tablet:w-80% tablet:p-30 px-20 mobile:pt-40 pb-40 z-10">
          <div className="text-s44l120 mobile:text-s24l29 text-252525 shrink-0">
            Get answers to all your
          </div>
          <div className="text-s56l124_5 mobile:text-s36l43 font-bold text-252525 shrink-0">
            business needs
          </div>
          <div className="text-s44l120 mobile:text-s24l29 text-252525 shrink-0">
            on a single destination
          </div>
          <div className="text-s24l26 mobile:text-s14l24 text-525252 shrink-0 mt-37 desktop:w-500 laptop:w-400">
            {merchantBannerResp.Description}
          </div>
          <div className="button w-216 mobile:w-166 mobile:text-s14l16_8 mobile:h-40 h-54 mt-40 cursor-pointer z-20 font-bold">
            {merchantBannerResp.CTA}
          </div>
        </div>
      </div>
      {/* border */}
      <div className="border border-1 border-A4D77A w-100%"></div>
      {/* Benefits for the Merchants */}
      <div className="h-686 mobile:h-auto w-100% merchant-bg desktop:px-326">
        <div className="pt-157 mobile:pt-81">
          <div className="font-bold text-s45l67 mobile:text-s20l24 text-center">
            Benefits for the Merchants
          </div>
        </div>
        <div className="flex pt-40 mobile:block justify-center w-100% mobile:px-20 mobile:hidden">
          {merchantBenefitsResp?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-100% flex desktop:flex-col laptop:flex-col justify-center mobile:w-100% laptop:px-30 desktop:px-30"
              >
                <div className="w-100% flex items-center justify-center">
                  <Image
                    src={item.Icon[0]}
                    type="img"
                    className="desktop:h-114 desktop:w-92 laptop:h-114 laptop:w-92"
                  />
                </div>
                <div className="w-100% text-s24l36 mobile:text-s16l19 mobile:w-100% mobile:px-40 text-center p-5 desktop:pt-40 laptop:pt-30 laptop:text-s20l30 desktop:font-bold laptop:font-bold">
                  {item.Title}
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-26 desktop:hidden laptop:hidden flex justify-center  pt-40 mobile:block justify-around mobile:px-20">
          {merchantBenefitsResp?.map((item, index) => {
            return (
              <div key={index} className="flex items-center pb-42">
                <div className="flex items-center">
                  <Image src={item.Icon[0]} type="img" className="h-60 w-48" />
                </div>
                <div className="pl-20 font-medium text-s16l24">
                  {item.Title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Decluttering Business Transactions with Reduced Friction */}
      <div className="merchant-liner-bg mobile:pb-150">
        <div className="pt-100 flex justify-center text-center m-auto text-s44l52_8 mobile:text-s20l24 text-F1F1F1 w-714 mobile:w-301 mobile:pt-40 desktop:font-bold laptop:font-bold">
          {merchantBenefits2?.Title}
        </div>
        <div className="my-40 text-s20l30 font-normal text-F1F1F1 text-center m-auto w-885 mobile:text-s14l21 mobile:w-315">
          {merchantBenefits2?.Description}
        </div>
        <div className="desktop:mx-100 m-auto laptop:mx-200">
          <div className="desktop:hidden m-auto mobile:hidden">
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
          <div className="pt-51 text-F1F1F1 flex text-center items-center justify-center m-auto pb-122 justify-center mobile:hidden">
            <div className="w-300 text-s24l36 font-semibold pr-70">
              No more clunky legacy systems
            </div>
            <div className="w-300 text-s24l36 font-semibold ml-25">
              Say no to fragmented and scattered businesses
            </div>
            <div className="w-300 text-s24l36 font-semibold pl-70">
              Stay away from digital confusion
            </div>
          </div>
        </div>
        {/* <div className="pt-51 laptop:mx-200 text-F1F1F1 flex text-center m-auto pb-122 justify-center">
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
        </div> */}
      </div>
      {/* Time to Get Onboard with Mintoak */}
      <div className="pb-140 w-100% mobile:mt-0 mobile:pb-0">
        <div className="flex w-100% mobile:hidden pl-180 laptop:pl-100">
          <div className="w-33% mt-275">
            <div className="text-s45l45 font-bold">
              {merchantPageOnboarding?.Title}
            </div>
            <div className="pt-40 text-s20l30">
              {merchantPageOnboarding?.Description}
            </div>
          </div>
          <div className="w-33% mt-113 ml-100 flex justify-end items-baseline">
            <Image
              src="/images/backgrounds/merchant-mobile.svg"
              type="img"
              height={600}
              width={500}
            />
          </div>
          <div className="w-33% mt-232 flex justify-center pr-50">
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
          <div className="pt-80 px-30 pl-20 pr-25 pb-65">
            <div className="mobile:text-s22l33 font-bold w-245">
              Time to Get Onboard with Mintoak
            </div>
            <div className="mobile:text-s14l21 pt-18">
              Not all small businesses and merchants have the right built-in
              technological resources to foster digital advancements and ease of
              transactions for them. Bringing this much-needed virtual
              interface, speed and innovation to SME business finance, Mintoak
              also offers benefits of real-time analytics and complete
              flexibility.
            </div>
            <div className="pt-45 m-auto">
              <Image
                src="/images/backgrounds/onboard_merchant.svg"
                type="img"
                height={500}
                width={300}
              />
            </div>
            <div className="pt-65 mobile:text-s22l33 font-bold w-314">
              <div>Real-time updates on</div>
              <div>business performance and</div>
              transactions
            </div>
            <div className="mobile:text-s14l21 pt-18">
              Get empowered with Mintoak’s advantage of real-time information
              access to understand your business performance from all aspects,
              including transactions and payments, customer experience and
              reach.
            </div>
            <div className="pt-45 m-auto">
              <Image
                src="/images/backgrounds/merchant-mobile.svg"
                type="img"
                height={500}
                width={300}
              />
            </div>
            <div className="pt-65 mobile:text-s22l33 font-bold w-314">
              Myriad benefits to explore!
            </div>
            <div className="mobile:text-s14l21 pt-18">
              From customer recognition based on robust analytics to
              segmentation and merchant loyalty plans, there are several
              benefits for SMEs and merchants to explore and gain on Mintoak.{" "}
            </div>
            <div className="pt-45 m-auto">
              <Image
                src="/images/backgrounds/mybrid.svg"
                type="img"
                height={500}
                width={300}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Features We Offer */}
      <div className="h-670 bg-we_offer_bg px-125 mobile:px-10 mobile:h-auto">
        <div className="text-F1F1F1 ls--1_5 text-s44l52_8 mobile:text-s20l24 font-bold pt-81 pb-60 flex justify-center">
          Features We Offer
        </div>
        <div className="pb-60">
          <div className="mobile:hidden desktop:px-105 laptop:px-0 cust-pagination">
            <Carousel
              itemsToShow={3}
              itemPadding={[0, 20, 0, 20]}
              enableMouseSwipe={false}
              pagination={true}
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
              <div className="bg-393939 flex flex-col items-center w-311 h-334 p-28 border border-C4C4C4 ">
                <Image
                  src="/images/icons/mintoak-omni.svg"
                  height={110}
                  width={273}
                />
                <div className="font-semibold text-DFDFDF text-center text-s24l29 mt-24">
                  Mintoak OMNI
                </div>
                <div className="w-100% text-DFDFDF text-center mt-30 text-s20l30">
                  Handle all types of digital payments on a single platform
                </div>
              </div>
              <div className="bg-393939 flex flex-col items-center w-311 h-334 p-28 border border-C4C4C4 ">
                <Image
                  src="/images/icons/pay-later.svg"
                  height={110}
                  width={273}
                />
                <div className="font-semibold text-DFDFDF text-center text-s24l29 mt-24">
                  Pay Later
                </div>
                <div className="text-DFDFDF text-center mt-30 text-s20l30">
                  Track customer dues on a robust digital register
                </div>
              </div>
              <div className="bg-393939 flex flex-col items-center w-311 h-334 p-28 border border-C4C4C4">
                <Image
                  src="/images/icons/customer.svg"
                  height={148}
                  width={273}
                />
                <div className="font-semibold text-DFDFDF text-center text-s24l29 mt-24">
                  Mintoak IKU
                </div>
                <div className="text-DFDFDF text-center mt-30 text-s20l30 ls--1_5">
                  Perform instant customer recognition and segmentation
                </div>
              </div>
            </Carousel>
          </div>
          <div className=" desktop:hidden laptop:hidden">
            <Carousel
              itemsToShow={1}
              // verticalMode
              itemPadding={[0, 0, 30, 0]}
              enableMouseSwipe={true}
              pagination={true}
              showArrows={false}
              outerSpacing={0}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className="flex">
                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      return (
                        <div
                          className={`bg-525252 w-6 h-6 rounded-full mr-6 ${
                            isActivePage ? "bg-active" : ""
                          }`}
                          key={page}
                          onClick={() => onClick(page)}
                          active={isActivePage}
                        ></div>
                      );
                    })}
                  </div>
                );
              }}
            >
              <div className="w-256 h-211 bg-393939 flex flex-col items-center w-311 mobile:h-191 p-28 border border-C4C4C4">
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
      <div className="w-100% px-100 merchant-bg mobile:px-0">
        <div className="flex w-100% mobile:block mobile:pt-80">
          <div className="w-50% flex flex-col justify-end pb-70 mobile:w-100% desktop:block desktop:pt-268 laptop:block laptop:pt-268">
            <div className="font-bold text-s45l45 laptop:text-s32l38 mobile:text-s22l33 pb-40 mobile:pl-15 mobile:w-252">
              {merchantAssuredByBanks?.Title}
            </div>
            <div className="text-s20l30 laptop:text-s16l19 mobile:text-s14l21 mobile:pl-20 mobile:pr-25 font-normal">
              {merchantAssuredByBanks?.Description}
            </div>
          </div>
          <div className="pl-100 w-50% mobile:hidden">
            <Image
              src={merchantAssuredByBanks?.Illustration[0]}
              height={700}
              width={700}
            />
          </div>
          <div className="desktop:hidden laptop:hidden pr-10">
            <Image
              src={merchantAssuredByBanks?.Illustration[0]}
              height={700}
              width={700}
            />
          </div>
        </div>
        <div className="pt-154 mobile:pt-80">
          <div className="flex justify-center font-bold text-s44l66 mobile:text-s20l24 mobile:px-34">
            Customers Onboard
          </div>
          <div className="flex mobile:block justify-center items-center w-100% pt-50 pb-169 mobile:px-0 mobile:mb-0 mobile:hidden">
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
                        const isActivePage = activePage === page;
                        return (
                          <div
                            className={`bg-525252 w-6 h-6 rounded-full mr-6 ${
                              isActivePage ? "bg-active" : ""
                            }`}
                            key={page}
                            onClick={() => onClick(page)}
                            active={isActivePage}
                          ></div>
                        );
                      })}
                    </div>
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
          {/* <div className="text-s20l24 flex justify-center font-bold">
            Hear from our users themselves!
          </div> */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
