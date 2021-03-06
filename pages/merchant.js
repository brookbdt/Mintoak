import { useEffect, useState, useRef } from "react";
import { API, endpoints } from "../components/helpers/API";
import Image from "../components/helpers/Image";
import Carousel from "react-elastic-carousel";
import { consts } from "react-elastic-carousel";
import Request_Demo from "./request_demo";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";

SwiperCore.use([Mousewheel, Pagination]);
export default function Merchant() {
  const [demoPopup, setDemoPopup] = useState(false);
  const [merchantBannerResp, setMerchantBannerResp] = useState({});
  const [merchantBenefitsResp, setMerchantBenefitsResp] = useState();
  const [merchantBenefits2, setMerchantBenefits2] = useState();
  const [merchantBenefits3, setMerchantBenefits3] = useState();
  const [merchantAssuredByBanks, setMerchantAssuredByBanks] = useState();
  const [merchantPageOnboarding, setMerchantPageOnboarding] = useState();
  const [merchantPageMockUp2, setMerchantPageMockUp2] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState();
  const [merchantPageMockUp3, setMerchantPageMockUp3] = useState();
  const founder = useRef(null);
  const [val0, setVal0] = useState(merchantBenefits3?.[0]);
  const [val1, setVal1] = useState(merchantBenefits3?.[1]);
  const [val2, setVal2] = useState(merchantBenefits3?.[2]);
  const [desc, setDesc] = useState(merchantBenefits3?.[1]?.Description);
  const [customizclick, setCustomizClick] = useState(1);

  const TogglePopup = () => {
    setDemoPopup(false);
  };

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
      }
    });
    API({
      url: endpoints.merchant_page_benefits_2,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantBenefits2(resp);
      }
    });
    API({
      url: endpoints.merchant_page_benefits_3,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantBenefits3(resp);
        setDesc(resp[1].Description);
        setVal0(resp[0]);
        setVal1(resp[1]);
        setVal2(resp[2]);
      }
    });
    API({
      url: endpoints.merchant_page_assured_by_banks,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantAssuredByBanks(resp);
      }
    });
    API({
      url: endpoints.merchant_page_onboarding,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantPageOnboarding(resp);
      }
    });
    API({
      url: endpoints.merchant_page_mock_up2,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantPageMockUp2(resp);
      }
    });
    API({
      url: endpoints.merchant_page_mock_up3,
    }).then((resp) => {
      if (!resp.message) {
        setMerchantPageMockUp3(resp);
      }
    });
  }, []);
  const handleData = (num) => {
    if (num == 2) {
      let t = val2;
      setVal2(val1);
      setVal1(t);
      // aboutUsCustomization2.map((item) => {
      //   if (item.Title == val2) {
      //     setDesc(item.Description);
      //   }
      // })
    }
    if (num == 0) {
      let t = val0;
      setVal1(t);
      merchantBenefits3.map((item) => {
        if (item.Title == val0) {
          setDesc(item.Description);
        }
      });
    }
  };
  return (
    <div className="h-fit w-100% ">
      {/* Merchant Banner */}
      <div className="relative bg-home-top top-bg-container border-t border-A4D77A border-b-2">
        <Image
          src={merchantBannerResp.Illustration}
          className="absolute mobile:hidden object-cover h-100% w-100% laptop:h-666 laptop:w-1366"
          type="img"
        />
        <Image
          src="/images/backgrounds/merchant_mobile.svg"
          className="absolute desktop:hidden laptop:hidden object-cover h-100% w-100%"
          type="img"
        />
        <div className="desktop:w-50% relative desktop:px-100 desktop:pt-150 laptop:pt-150 laptop:px-100 laptop:w-70% tablet:w-80% tablet:p-30 px-20 mobile:pt-40 pb-115 z-10  mobile:h-580">
          <div className="text-s44l120 mobile:text-s24l29 text-252525 shrink-0">
            Get answers to all your
          </div>
          <div className="text-s56l124_5 mobile:text-s36l43 font-bold text-252525 shrink-0 mobile:pt-2">
            business needs
          </div>
          <div className="text-s44l120 mobile:text-s24l29 text-252525 shrink-0 mobile:pt-2">
            on a single destination
          </div>
          <div className="text-s24l26 mobile:text-s14l24 text-525252 shrink-0 mt-37 desktop:w-500 laptop:w-400 mobile:mt-16">
            {merchantBannerResp.Description}
          </div>
          <div
            onClick={() => setDemoPopup(true)}
            className="button w-216 mobile:w-166 mobile:text-s14l16_8 mobile:h-40 h-54 mt-40 mobile:mt-16 cursor-pointer z-20 font-bold"
          >
            {merchantBannerResp.CTA}
          </div>
        </div>
      </div>
      {/* border */}
      {/* <div className="w-100%"></div> */}
      {/* Benefits for the Merchants */}
      <div className="h-686 mobile:h-auto w-100% merchant-bg desktop:px-250 mobile:pb-44">
        <div className="pt-157 mobile:pt-81">
          <div className="font-bold text-s45l67 mobile:text-s20l24 desktop:text-center laptop:text-center mobile:px-20">
            Benefits for the Merchants
          </div>
        </div>
        <div className="flex pt-40 mobile:block justify-center items-center npm w-100% mobile:px-20 mobile:hidden">
          {merchantBenefitsResp?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-100% flex desktop:flex-col laptop:flex-col desktop:justify-center  mobile:w-100% laptop:px-50 desktop:px-50"
              >
                <div className="w-100% flex items-center justify-center">
                  <Image
                    src={item.Icon[0]}
                    type="img"
                    className="desktop:h-114 desktop:w-92 laptop:h-114 laptop:w-92"
                  />
                </div>
                <div className="w-100% text-s24l36 mobile:text-s16l19 mobile:w-100% mobile:px-40 text-center p-5 desktop:pt-52 laptop:pt-30 laptop:text-s20l30 font-extrabold">
                  {item.Title}
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-26 desktop:hidden laptop:hidden flex justify-center pt-40 mobile:pt-46 mobile:block justify-around mobile:px-20">
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
      <div className="merchant-liner-bg desktop:pb-122 mobile:px-20 w-100%">
        <div className="pt-100 flex justify-center text-center desktop:m-auto laptop:m-auto text-s44l52_8 mobile:text-s22l26_4 text-F1F1F1 desktop:w-714 laptop:w-714 mobile:pt-40 font-bold mobile:px-13">
          {merchantBenefits2?.Title}
        </div>
        <div className="my-40 text-s20l30 font-normal text-F1F1F1 text-center m-auto w-885 mobile:text-s14l21 mobile:w-315">
          {merchantBenefits2?.Description}
        </div>
        <div className="w-100% flex justify-center">
          <Image
            src="/images/backgrounds/line-bg.svg"
            type="img"
            className="w-1049 h-67 mobile:hidden laptop:w-949"
          />
        </div>
        <div className="flex w-100% desktop:px-185 desktop:pt-48 text-center items-center justify-center mobile:hidden">
          {merchantBenefits3 &&
            merchantBenefits3.map((item, index) => (
              <div
                className="flex flex-col items-center w-100% desktop:w-400 desktop:m-auto desktop:px-50 laptop:pt-53 laptop:pb-100"
                key={index}
              >
                <Image
                  type="img"
                  src={item?.Icon[0]}
                  className="desktop:object-cover h-174 w-249 laptop:h-140"
                />

                <div className="text-s24l36 text-F1F1F1 font-semibold text-center pt-48 laptop:w-300">
                  {item?.Title}
                </div>
              </div>
            ))}
        </div>
        <div className="w-100% desktop:hidden laptop:hidden">
          <div className="w-100% flex justify-center">
            <div className="w-244 border-t-2 border-C4C4C4"></div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col items-center w-100%">
              <div className="h-39 border-r-2 border-C4C4C4"></div>
              <div
                onClick={() => {
                  setCustomizClick(0);
                  handleData(0);
                }}
                className="rounded-full absolute mt-37 h-8 w-8 bg-C4C4C4"
              ></div>
              <div className="w-92 text-s12l18 text-FFFFFF text-center mt-15">
                {val0?.Title}
              </div>
            </div>
            <div className="flex flex-col items-center w-100%">
              <div className="h-101 border-r-2 border-C4C4C4"></div>
              <div className="h-12 w-12 bg-B0D472 rounded-full absolute mt-100"></div>
              <div className="w-150 h-100 text-s18l27 text-F1F1F1 text-center mt-15">
                {val1?.Title}
              </div>
            </div>
            <div className="flex flex-col items-center w-100%">
              <div className="h-39 border-r-2 border-C4C4C4"></div>
              <div
                onClick={() => {
                  setCustomizClick(2);
                  handleData(2);
                }}
                className="rounded-full absolute mt-37 h-8 w-8 bg-C4C4C4"
              ></div>
              <div className="w-92 text-s12l18 text-FFFFFF text-center mt-15">
                {val2?.Title}
              </div>
            </div>
          </div>
          <div className="mt-20 h-256">
            <div className="flex flex-col w-100% items-center ">
              {/* <div className="text-s14l21 text-F1F1F1 text-center pt-8 pb-41 w-100% px-35">
                {val1?.Description}
              </div> */}
              {merchantBenefits3 && (
                <Image type="img" src={val1?.Icon[0]} className="w-228 h-131" />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Time to Get Onboard with Mintoak */}
      <div className=" w-100% mobile:mt-0 mobile:pb-0 bg-E0EFD4">
        <div className="w-100% relative desktop:px-100 mobile:hidden mobile:pb-35 bg-currunt flex mobile:flex-col desktop:h-850 overflow-hidden laptop:h-745">
          <div className="flex flex-col laptop:h-745 ">
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              tag="section"
              spaceBetween={30}
              mousewheel={true}
              ref={founder}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper overflow-scroll bg-reel_img_bg bg-cover"
              onSwiper={setSwiperInstance}
              onSlideChange={(e) => {
                setActiveTab(e.activeIndex);
              }}
            >
              <SwiperSlide key={0}>
                <div className="flex w-100% mobile:hidden pl-80 laptop:pl-100 ">
                  <div className="w-33% mt-251">
                    <div className="text-s44l57_2 font-bold">
                      Time to get onboard with Mintoak
                    </div>
                    <div className="pt-40 text-s20l30 text-525252">
                      Not all small businesses and merchants have the right
                      built-in technological resources to foster digital
                      advancements and ease of transactions for them. Bringing
                      this much-needed virtual interface, speed and innovation
                      to SME business finance, Mintoak also offers benefits of
                      real-time analytics and complete flexibility.
                    </div>
                  </div>
                  <div className="w-33% mt-113 ml-100 flex justify-end items-baseline">
                    <Image
                      src="/images/backgrounds/onboarding-1.svg"
                      type="img"
                      className="w-400 h-588"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={1}>
                <div className="flex w-100% mobile:hidden pl-80 laptop:pl-100">
                  <div className="w-33% mt-251">
                    <div className="text-s44l57_2 font-bold">
                      Real-time updates on business performance and transactions
                    </div>
                    <div className="pt-40 text-s20l30 text-525252">
                      Get empowered with Mintoak???s advantage of real-time
                      information access to understand your business performance
                      from all aspects, including transactions and payments,
                      customer experience and reach.
                    </div>
                  </div>
                  <div className="w-33% mt-113 ml-100 flex justify-end items-baseline">
                    <Image
                      src="/images/backgrounds/onboarding-2.svg"
                      type="img"
                      className="w-400 h-588"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={2}>
                <div className="flex w-100% mobile:hidden pl-80 laptop:pl-100">
                  <div className="w-33% mt-251">
                    <div className="text-s44l57_2 font-bold">
                      Myriad benefits to explore!
                    </div>
                    <div className="pt-40 text-s20l30 text-525252">
                      From customer recognition based on robust analytics to
                      segmentation and merchant loyalty plans, there are several
                      benefits for SMEs and merchants to explore and gain on
                      Mintoak.
                    </div>
                  </div>
                  <div className="w-33% mt-113 ml-100 flex justify-end items-baseline">
                    <Image
                      src="/images/backgrounds/onboarding-3.svg"
                      type="img"
                      className="w-400 h-588"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-18% absolute flex flex-col itmes-center justify-center mobile:hidden right-50 desktop:pr-80 laptop:pr-20 pt-65">
            <div className="h-850 justify-center flex flex-col ">
              <div
                onClick={() => {
                  setActiveTab(0);
                  founder.current?.swiper.slideTo(0);
                  // founder.swiper
                }}
                className="flex h-190 cursor-pointer"
              >
                <div className="w-100% text-right">
                  <div
                    className={`text-s28l42 ${
                      activeTab == 0 ? "text-252525" : "text-848484"
                    }`}
                  >
                    Onboarding
                  </div>
                </div>
                <div className="flex flex-col items-center w-30% pt-5">
                  <div className="w-27 h-27 flex justify-center items-center">
                    <div
                      className={`${
                        activeTab == 0
                          ? "w-22 h-21 bg-252525 "
                          : "w-14 h-14 bg-848484"
                      } rounded-full bg-opacity-100 `}
                    ></div>
                  </div>

                  <div className="border-1 border-848484 border w-1 h-109 m-auto"></div>
                </div>
              </div>
              <div
                onClick={() => {
                  setActiveTab(1);
                  founder.current?.swiper.slideTo(1);
                  // founder.swiper
                }}
                className="flex h-190 cursor-pointer"
              >
                <div className="w-100% text-right">
                  <div
                    className={`text-s28l42 ${
                      activeTab == 1 ? "text-252525" : "text-848484"
                    }`}
                  >
                    Real-time information
                  </div>
                </div>
                <div className="flex flex-col items-center w-30% pt-5">
                  <div className="w-27 h-27 flex justify-center items-center">
                    <div
                      className={`${
                        activeTab == 1
                          ? "w-22 h-21 bg-252525 "
                          : "w-14 h-14 bg-848484"
                      } rounded-full bg-opacity-100 `}
                    ></div>
                  </div>

                  <div className="border-1 border-848484 border w-1 h-109 m-auto"></div>
                </div>
              </div>
              <div
                onClick={() => {
                  setActiveTab(2);
                  founder.current?.swiper.slideTo(2);
                  // founder.swiper
                }}
                className="flex h-190 cursor-pointer"
              >
                <div className="w-100% text-right">
                  <div
                    className={`text-s28l42 ${
                      activeTab == 2 ? "text-252525" : "text-848484"
                    }`}
                  >
                    Benefits
                  </div>
                </div>
                <div className="flex flex-col items-center w-30% pt-9">
                  <div className="w-27 h-27 flex justify-center items-center">
                    <div
                      className={`${
                        activeTab == 2
                          ? "w-22 h-21 bg-252525 "
                          : "w-14 h-14 bg-848484"
                      } rounded-full bg-opacity-100 `}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="laptop:hidden desktop:hidden">
          <div className="pt-80 px-30 pl-20 pr-25 pb-65">
            <div className="mobile:text-s22l33 font-bold w-245">
              {/* Time to Get Onboard with Mintoak */}
              {merchantPageOnboarding?.Title}
            </div>
            <div className="mobile:text-s14l21 pt-18">
              {merchantPageOnboarding?.Description}
              {/* Not all small businesses and merchants have the right built-in
              technological resources to foster digital advancements and ease of
              transactions for them. Bringing this much-needed virtual
              interface, speed and innovation to SME business finance, Mintoak
              also offers benefits of real-time analytics and complete
              flexibility. */}
            </div>
            <div className="flex justify-center pt-45 m-auto">
              <Image
                src="/images/backgrounds/onboard_merchant.svg"
                type="img"
                height={500}
                width={270}
              />
            </div>
            <div className="pt-65 mobile:text-s22l33 font-bold w-314">
              <div className="w-270">{merchantPageMockUp2?.Title}</div>
            </div>
            <div className="mobile:text-s14l21 pt-18">
              {merchantPageMockUp2?.Description}
            </div>
            <div className="flex justify-center pt-45 m-auto">
              <Image
                src="/images/backgrounds/mechent_real_time.svg"
                type="img"
                height={500}
                width={270}
              />
            </div>
            <div className="pt-65 mobile:text-s22l33 font-bold w-314">
              {merchantPageMockUp3?.Title}
            </div>
            <div className="mobile:text-s14l21 pt-18">
              {merchantPageMockUp3?.Description}{" "}
            </div>
            <div className="flex justify-center pt-45 m-auto">
              <Image
                src="/images/backgrounds/mybrid.svg"
                type="img"
                height={500}
                width={270}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Features We Offer */}
      <div className="h-670 bg-we_offer_bg px-125 mobile:px-10 mobile:h-auto">
        <div className="text-F1F1F1 ls--1_5 text-s44l52_8 mobile:text-s20l24 font-bold pt-81 pb-60 flex justify-center mobile:pt-40 mobile:pb-34">
          Features We Offer
        </div>
        <div className="">
          <div className="mobile:hidden desktop:px-105 laptop:px-0 cust-pagination">
            {/* <Carousel
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
            > */}
            <Carousel
              itemsToShow={3}
              // verticalMode
              itemPadding={[0, 0, 20, 0]}
              enableMouseSwipe={true}
              pagination={true}
              showArrows={false}
              outerSpacing={0}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className="flex pb-42">
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
              itemPadding={[0, 0, 20, 0]}
              enableMouseSwipe={true}
              pagination={true}
              showArrows={false}
              outerSpacing={0}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className="flex pb-42">
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
              <div className="w-256 h-211 bg-393939 flex flex-col items-center w-311 mobile:h-191 p-20 border border-C4C4C4">
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
              <div className="flex flex-col items-center w-256 h-211 mobile:h-191 p-20 border border-C4C4C4">
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
              <div className="flex flex-col items-center w-256 h-211 mobile:h-191 p-20 border border-C4C4C4">
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
          <div className="w-50% flex flex-col justify-end pb-70 mobile:pb-21 mobile:w-100% desktop:block desktop:pt-268 laptop:block laptop:pt-268">
            <div className="font-bold text-s45l45 laptop:text-s32l38 mobile:text-s22l33 pb-40 mobile:pb-16 mobile:pl-15 mobile:w-252">
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
        {/* <div className="pt-154 laptop:pt-50 mobile:py-80">
          <div className="flex justify-center font-bold text-s44l66 mobile:text-s20l24 mobile:px-34">
            Customers Onboard
          </div>
          <div className="flex mobile:block justify-center items-center w-100% pt-50 pb-169 laptop:pb-100 mobile:px-0 mobile:mb-0 mobile:hidden">
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
          <div className="flex mobile:block justify-center items-center w-100% py-50 mb-100 mobile:px-0 mobile:mb-0 mobile:pb-0 desktop:hidden laptop:hidden">
            <div className="px-20">
              <Carousel
                itemsToShow={1.3}
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
                            className={`bg-C4C4C4 w-6 h-6 rounded-full mr-6 ${
                              isActivePage ? "bg-525252" : ""
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
        </div> */}
      </div>
      {demoPopup && (
        <Request_Demo triger={demoPopup} handleClose={TogglePopup} />
      )}
    </div>
  );
}
