import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Image from "../components/helpers/Image";
import { consts } from "react-elastic-carousel";
import { Collapse } from "antd";
import { API, endpoints } from "../components/helpers/API";

const { Panel } = Collapse;

export default function Home() {
  const [isBORM, setIsBORM] = useState("b");
  const [homeBannerResp, setHomeBannerResp] = useState({});
  const [metricsResp, setMetricsResp] = useState({});
  const [homeForBanksResp, setHomeForBanksResp] = useState({});

  useEffect(() => {
    // home_banner
    API({
      url: endpoints.home_banner,
    }).then((resp) => {
      if (!resp.message) {
        setHomeBannerResp(resp);
      }
    });

    // metrics
    API({
      url: endpoints.metrics,
    }).then((resp) => {
      if (!resp.message) {
        setMetricsResp(resp);
      }
    });

    // homepage_for_banks
    API({
      url: endpoints.homepage_for_banks,
    }).then((resp) => {
      if (!resp.message) {
        setHomeForBanksResp(resp);
      }
    });
  }, []);

  const blackCarouselArrows = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <i className="fa fa-angle-left text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
      ) : (
        <i className="fa fa-angle-right text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
      );
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  };

  return (
    <div className="h-fit w-100% bg-8FC055">
      {/* Top layout with resp */}
      <div className="relative top-bg-container">
        <Image src={homeBannerResp?.Illustration} className="absolute z-minus1" />
        <div className="desktop:w-50% desktop:p-100 laptop:p-100 laptop:w-70% tablet:w-80% tablet:p-30 px-20 mobile:pt-350 pb-40 z-10">
          <div className="text-s44l120 mobile:text-s24l28_8 text-252525 shrink-0">{homeBannerResp?.TittleTop}</div>
          <div className="text-s56l124_5 mobile:text-s34l42 font-bold text-252525 shrink-0">{homeBannerResp?.TitleMiddle}</div>
          <div className="text-s44l120 mobile:text-s24l28_8 text-252525 shrink-0">{homeBannerResp?.TitleBottom}</div>
          <div className="text-s24l150 mobile:text-s14l24 text-525252 shrink-0 mt-37">{homeBannerResp?.Description}</div>
          <div className="button w-216 mobile:w-100% mobile:h-40 h-54 mt-40 cursor-pointer z-20">{homeBannerResp?.Button}</div>
        </div>
      </div>

      {/* Count layout */}
      <div className="flex items-center justify-around px-200 mobile:px-23 mb-150 mobile:mb-80 mobile:hidden">
        <div className="text-center text-s36l43 mobile:text-s14l17 text-252525">
          {metricsResp?.Merchants}
          <span className="text-A4D77A">+</span>
          <div className="text-s20l24 mobile:text-s14l17 text-525252 mt-10">Merchants</div>
        </div>
        <div className="text-center text-s36l43 mobile:text-s20l24 text-252525">
          <span className="mobile:font-semibold">
            {metricsResp?.TransactionsAnnually}
            <span className="text-A4D77A">+</span>
          </span>
          <div className="text-s20l24 mobile:text-s14l17 text-525252 mt-10">Transactions Annually</div>
        </div>
        <div className="text-center text-s36l43 mobile:text-s14l17 text-252525">
          {metricsResp?.GMVAnnuals}
          <span className="text-A4D77A">+</span>
          <div className="text-s20l24 mobile:text-s14l17 text-525252 mt-10">GMV Annuals</div>
        </div>
      </div>
      <div className="flex items-center justify-around px-200 mobile:px-0 mb-150 mobile:mb-80 desktop:hidden">
        <Carousel itemsToShow={3} itemsToScroll={1} itemPadding={[0, 0, 0, 0]} enableMouseSwipe={true} pagination={true} showArrows={false}>
          <div className="text-center text-s36l43 mobile:text-s14l17 text-252525">
            {metricsResp?.Merchants}
            <span className="text-A4D77A">+</span>
            <div className="text-s20l24 mobile:text-s14l17 text-525252 mt-10">Merchants</div>
          </div>
          <div className="text-center text-s36l43 mobile:text-s20l24 text-252525">
            <span className="mobile:font-semibold">
              {metricsResp?.TransactionsAnnually}
              <span className="text-A4D77A">+</span>
            </span>
            <div className="text-s20l24 mobile:text-s14l17 text-525252 mt-10">Transactions Annually</div>
          </div>
          <div className="text-center text-s36l43 mobile:text-s14l17 text-252525">
            {metricsResp?.GMVAnnuals}
            <span className="text-A4D77A">+</span>
            <div className="text-s20l24 mobile:text-s14l17 text-525252 mt-10">GMV Annuals</div>
          </div>
        </Carousel>
      </div>

      {/* Mintoak Advantages */}
      <div className="flex justify-around text-252525 text-s44l120 mobile:text-s20l150 mobile:font-bold mb-60">Mintoak Advantages</div>
      <div className="flex mobile:block justify-around w-100% px-100 mobile:px-0 mb-150">
        <div className="flex flex-col items-center border mobile:border-0 border-8CC63E justify-center  mobile:w-100% p-20 mobile:p-0 mx-20 mobile:mx-0">
          <Image src="/images/icons/cloud.svg" height={135} width={135} />
          <div className="font-bold text-s24l29 mobile:text-s16l19 text-252525 mt-30 text-center">Cloud based toolkit</div>
          <div className="text-s20l150 mobile:text-s14l17 text-525252 mt-15 text-center mobile:w-218">
            Cloud-based toolkit with secure integration for successful payments
          </div>
        </div>
        <div className="flex flex-col items-center border mobile:border-0 border-8CC63E justify-center mobile:w-100% p-20 mx-20 mobile:mx-0">
          <Image src="/images/icons/value.svg" height={135} width={135} />
          <div className="font-bold text-s24l29 mobile:text-s16l19 text-252525 mt-30 text-center">Value added services</div>
          <div className="text-s20l150  mobile:text-s14l17 text-525252 mt-15 text-center">
            Wide-ranging value-added services for comprehensive business growth
          </div>
        </div>
        <div className="flex flex-col items-center border mobile:border-0 border-8CC63E justify-center mobile:w-100% p-20 mx-20 mobile:mx-0">
          <Image src="/images/icons/instant.svg" height={135} width={135} />
          <div className="font-bold text-s24l29 mobile:text-s16l19 text-252525 mt-30 text-center">Instant onboarding</div>
          <div className="text-s20l150  mobile:text-s14l17 text-525252 mt-15 text-center">
            Instant registering and onboarding for merchants through a robust digital interface
          </div>
        </div>
        <div className="flex flex-col items-center border mobile:border-0 border-8CC63E justify-center mobile:w-100% p-20 mx-20 mobile:mx-0">
          <Image src="/images/icons/payment.svg" height={135} width={135} />
          <div className="font-bold text-s24l29 mobile:text-s16l19 text-252525 mt-30 text-center">Payments re-imagined</div>
          <div className="text-s20l150  mobile:text-s14l17 text-525252 mt-15 text-center">
            Reimagining payments through omni-channels with real-time tracking features
          </div>
        </div>
      </div>

      {/* Banks/Merchants */}
      <div className="flex flex-col bg-footer mb-100 w-100%">
        <div className="flex w-100% mobile:hidden">
          <div
            className={
              "flex items-center justify-center w-50% mobile:w-100% py-40 border-b cursor-pointer " +
              (isBORM === "b" ? "border-8CC63E" : "border-8B8B8B")
            }
            onClick={() => setIsBORM("b")}
          >
            <Image src={`/images/icons/radio-${isBORM === "b" ? "selected" : "unselected"}.svg`} height={49} width={49} />
            <div className={"ml-25 font-bold text-s40l60 " + (isBORM === "b" ? "text-FFFFFF" : "text-A2A2A2")}>For Banks</div>
          </div>
          <div className="border-r border-8CC63E"></div>
          <div
            className={
              "flex items-center justify-center w-50% mobile:w-100% py-40 border-b cursor-pointer " +
              (isBORM === "m" ? "border-8CC63E" : "border-8B8B8B")
            }
            onClick={() => setIsBORM("m")}
          >
            <Image src={`/images/icons/radio-${isBORM === "m" ? "selected" : "unselected"}.svg`} height={49} width={49} />
            <div className={"ml-25 font-bold text-s40l60 " + (isBORM === "m" ? "text-FFFFFF" : "text-A2A2A2")}>For Merchants</div>
          </div>
        </div>
        <div className="flex items-center w-100% px-100 mobile:px-20 py-50 mobile:hidden">
          {isBORM === "b" ? (
            <>
              <div className="flex mobile:block flex-col w-50% mobile:w-100% justify-center">
                <div className="text-s24l29 mobile:text-s14l24 text-F1F1F1 mb-80">{homeForBanksResp?.Description1}</div>
                <div className="flex items-center text-s36l43 mobile:text-s16l19 font-bold text-F1F1F1 mb-20">{homeForBanksResp?.Title2}</div>
                <div className="text-s20l150 mobile:text-s14l24 text-F1F1F1">{homeForBanksResp?.Description2}</div>
                <div className="text-s20l150 text-8CC63E cursor-pointer">{homeForBanksResp?.CTA1}</div>
                <div className="button w-216 h-54 mt-40 mobile:w-290 mobile:h-40 mobile:ml-12">{homeForBanksResp?.CTA2}</div>
              </div>
              <div className="w-50% mobile:w-100% flex items-center justify-center">
                <Image src={homeForBanksResp?.BankIllustration} height={650} width={500} />
              </div>
            </>
          ) : (
            <>
              <div className=" flex flex-col w-50% mobile:w-100% justify-center">
                <div className="text-s24l29 mobile:text-s14l24 text-F1F1F1 mb-80">
                  The backbone of any business, merchants require a hassle-free, one-stop ecosystem for conducting their myriad transactions and
                  managing, exploring, and expanding their business. This is what we offer, with superior features of real-time tracking of
                  inventories and a robust payments interface.
                </div>
                <div className="flex items-center text-s36l43 mobile:text-s16l19 font-bold text-F1F1F1 mb-20">Take your business digital today</div>
                <div className="text-s20l150 mobile:text-s14l24 text-F1F1F1">
                  With technology and data-driven platforms to make business management simpler and faster, our solutions help merchants tackle all
                  existing challenges with ease
                </div>
                <div className="text-s20l150 mobile:text-s16l19 text-8CC63E cursor-pointer">Learn More</div>
                <div className="button w-216 h-54 mt-40 mobile:w-290 mobile:h-40 mobile:ml-12">Know More</div>
              </div>
              <div className="w-50% mobile:w-100% flex items-center justify-center">
                <Image src="/images/backgrounds/for_merchants.svg" height={650} width={500} />
              </div>
            </>
          )}
        </div>
        <div className="flex mobile:block w-100% desktop:hidden mobile:px-20">
          <div className={"flex items-center text-F1F1F1 w-50% mobile:w-100% pt-40 pb-24 cursor-pointer"} onClick={() => setIsBORM("b")}>
            <div className={"font-bold text-s20l24"}>For Banks</div>
          </div>
          <div className="flex mobile:block flex-col w-50% mobile:w-100% justify-center">
            <div className="text-s24l29 mobile:text-s14l24 text-F1F1F1 mb-40">{homeForBanksResp?.Description1}</div>
            <div className="flex items-center text-s36l43 mobile:text-s16l19 font-bold text-F1F1F1 mb-20">{homeForBanksResp?.Title2}</div>
            <div className="text-s20l150 mobile:text-s14l24 text-F1F1F1">{homeForBanksResp?.Description2}</div>
            <div className="text-s20l150 text-8CC63E cursor-pointer">{homeForBanksResp?.CTA1}</div>
            <div className="text-s20l150 text-8CC63E cursor-pointer">{homeForBanksResp?.CTA2}</div>
            <div className="w-50% mobile:w-100% flex items-center justify-center">
              <Image src={homeForBanksResp?.BankIllustration} height={650} width={500} />
            </div>
          </div>
          <div className="button w-216 h-54 mobile:w-290 mobile:h-40 mobile:ml-12 mb-40">Partner With Us</div>
          <div className="p-0 border-b border-8B8B8B"></div>
          <div className={"flex items-center text-F1F1F1 w-50% mobile:w-100% pt-40 cursor-pointer "}>
            <div className={"mb-22 font-bold text-s20l24"}>For Merchants</div>
          </div>
          <div className="flex flex-col w-50% mobile:w-100% justify-center">
            <div className="text-s24l29 mobile:text-s14l24 text-F1F1F1 mb-40">
              The backbone of any business, merchants require a hassle-free, one-stop ecosystem for conducting their myriad transactions and managing,
              exploring, and expanding their business. This is what we offer, with superior features of real-time tracking of inventories and a robust
              payments interface.
            </div>
            <div className="flex items-center text-s36l43 mobile:text-s16l19 font-bold text-F1F1F1 mb-20">Take your business digital today</div>
            <div className="text-s20l150 mobile:text-s14l24 text-F1F1F1">
              With technology and data-driven platforms to make business management simpler and faster, our solutions help merchants tackle all
              existing challenges with ease
            </div>
            <div className="text-s20l150 mobile:text-s16l19 text-8CC63E cursor-pointer">Learn More</div>
            <Image src="/images/backgrounds/for_merchants.svg" height={650} width={500} />
          </div>
          <div className="w-50% mobile:w-100% flex items-center justify-center">
            <div className="button w-216 h-54 mb-40 mobile:w-290 mobile:h-40 mobile:ml-12">Know More</div>
          </div>
        </div>
      </div>

      {/* Building a global community */}
      <div className="text-s44l120 mobile:text-s20l150 text-252525 mb-30 font-bold text-center">Building a global community</div>
      <div className="flex justify-center items-center w-100% py-50 px-150 mb-100 mobile:px-0 mobile:mb-0 mobile:hidden">
        <Carousel itemsToShow={3} itemPadding={[0, 20, 0, 20]} enableMouseSwipe={false} pagination={false} renderArrow={blackCarouselArrows}>
          <div className="h-130 w-230 mobile:h-170 mobile:278">
            <Image src="/images/backgrounds/HDFC-Bank-logo.svg" width={231} height={130} />
          </div>
          <div className="sliderItem">
            <Image src="/images/backgrounds/burgan_bank.svg" width={231} height={130} />
            <Image src="/images/backgrounds/burgan_bank_colored.svg" width={231} height={130} className="comunityColouredImage" />
            <div className="comunityContent hidden">
              Burgan Bank is Kuwait's second largest conventional bank by assets. Burgan is one of the youngest banks in Kuwait.
            </div>
          </div>
          <div className="">
            <Image src="/images/backgrounds/sbi-logo-state-bank-india-group-vector-eps-0.svg" width={231} height={130} />
          </div>
          <div className="">
            <Image src="/images/backgrounds/HDFC-Bank-logo.svg" width={231} height={130} />
          </div>
          <div className="">
            <Image src="/images/backgrounds/burgan_bank.svg" width={231} height={130} />
          </div>
          <div className="">
            <Image src="/images/backgrounds/sbi-logo-state-bank-india-group-vector-eps-0.svg" width={231} height={130} />
          </div>
        </Carousel>
      </div>
      <div className="desktop:hidden items-center w-100% pl-42 mb-100 mobile:pr-0 mobile:mb-0">
        <div className="mobile:h-170 mobile:w-278 bg-FFFFFF flex flex-col items-center px-21 mb-20">
          <div className="flex justify-center items-center px-46 w-100%">
            <Image src="/images/backgrounds/HDFC-Bank-logo.svg" width={200} height={100} />
          </div>
          <div className="items-center flex text-s12l18 justify-center w-100% text-center">
            Burgan Bank is Kuwait's second largest conventional bank by assets. Burgan is one of the youngest banks in Kuwait.
          </div>
        </div>
        <div className="mobile:h-170 mobile:w-278 bg-FFFFFF flex flex-col items-center px-21 mb-20">
          <div className="flex justify-center items-center px-46 w-100%">
            <Image src="/images/backgrounds/burgan_bank.svg" width={200} height={100} />
          </div>
          <div className="items-center flex text-s12l18 justify-center w-100% text-center">
            Burgan Bank is Kuwait's second largest conventional bank by assets. Burgan is one of the youngest banks in Kuwait.
          </div>
        </div>
        <div className="mobile:h-170 mobile:w-278 bg-FFFFFF flex flex-col items-center px-21">
          <div className="flex justify-center items-center px-46 w-100%">
            <Image src="/images/backgrounds/sbi-logo-state-bank-india-group-vector-eps-0.svg" width={200} height={100} />
          </div>
          <div className="items-center flex text-s12l18 justify-center w-100% text-center">
            Burgan Bank is Kuwait's second largest conventional bank by assets. Burgan is one of the youngest banks in Kuwait.
          </div>
        </div>
      </div>

      {/* Our achievements */}
      <div className="flex flex-col items-center bg-footer w-100% p-60 mobile:p-0 mobile:pt-40">
        <div className="text-center font-bold text-FAFAFA text-s44l120 mobile:text-s20l150 p-50 mobile:p-0">Our achievements</div>
        <div className="flex items-center w-100% py-50 px-100 mobile:px-0 mobile:py-0 mobile:hidden">
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
            <div className="flex flex-col items-center bg-313131 w-90% p-40 border border-C4C4C4">
              <Image src="/images/backgrounds/fintech_hub.svg" height={110} width={273} />
              <div className="font-bold text-DFDFDF text-center text-s32l38 mt-24">Mumbai Fintech Hub</div>
              <div className="text-DFDFDF text-center mt-12 text-s20l150">Grant Certificate Awarded INR 10,00,000 by the State</div>
            </div>
            <div className="flex flex-col items-center bg-313131 w-90% p-40 border border-C4C4C4">
              <Image src="/images/backgrounds/fintech_hub.svg" height={110} width={273} />
              <div className="font-bold text-DFDFDF text-center text-s32l38 mt-24">Mumbai Fintech Hub</div>
              <div className="text-DFDFDF text-center mt-12 text-s20l150">Grant Certificate Awarded INR 10,00,000 by the State</div>
            </div>
            <div className="flex flex-col items-center bg-313131 w-90% p-40 border border-C4C4C4">
              <Image src="/images/backgrounds/service provider badge.svg" height={148} width={273} />
              <div className="font-bold text-DFDFDF text-center text-s32l38 mt-24">Visa Global</div>
              <div className="text-DFDFDF text-center mt-12 text-s20l150">Visa Global Registry of Service Providers on the list 2020</div>
            </div>
            <div className="flex flex-col items-center bg-313131 w-90% p-40 border border-C4C4C4">
              <Image src="/images/backgrounds/secure_logic.svg" height={145} width={273} />
              <div className="font-bold text-DFDFDF text-center text-s32l38 mt-24">Secure Logic</div>
              <div className="text-DFDFDF text-center mt-12 text-s20l150">PCI DSS Level : 1 Classifcation : Merchant</div>
            </div>
          </Carousel>
        </div>
        <div className="flex items-center w-100% py-50 px-100 mobile:px-0 mobile:py-0 desktop:hidden">
          <Carousel itemsToShow={1} itemPadding={[0, 0]} enableMouseSwipe={true} pagination={true} showArrows={false} outerSpacing={0}>
            <div className="flex flex-col items-center bg-313131 w-88% p-40 border border-C4C4C4">
              <Image src="/images/backgrounds/fintech_hub.svg" height={110} width={273} />
              <div className="font-bold text-DFDFDF text-center text-s32l38 mobile:text-s22l26_4 mt-24">Mumbai Fintech Hub</div>
              <div className="text-DFDFDF text-center mt-12 text-s20l150 mobile:text-s12l14">
                Grant Certificate Awarded INR 10,00,000 by the State
              </div>
            </div>
            <div className="flex flex-col items-center bg-313131 w-88% p-40 border border-C4C4C4">
              <Image src="/images/backgrounds/fintech_hub.svg" height={110} width={273} />
              <div className="font-bold text-DFDFDF text-center text-s32l38 mobile:text-s22l26_4 mt-24">Mumbai Fintech Hub</div>
              <div className="text-DFDFDF text-center mt-12 text-s20l150 mobile:text-s12l14">
                Grant Certificate Awarded INR 10,00,000 by the State
              </div>
            </div>
            <div className="flex flex-col items-center bg-313131 w-90% p-40 border border-C4C4C4">
              <Image src="/images/backgrounds/service provider badge.svg" height={110} width={273} />
              <div className="font-bold text-DFDFDF text-center text-s32l38 mobile:text-s22l26_4 mt-24">Mumbai Fintech Hub</div>
              <div className="text-DFDFDF text-center mt-12 text-s20l150 mobile:text-s12l14">
                Grant Certificate Awarded INR 10,00,000 by the State
              </div>
            </div>
            <div className="flex flex-col items-center bg-313131 w-90% p-40 border border-C4C4C4">
              <Image src="/images/backgrounds/secure_logic.svg" height={148} width={273} />
              <div className="font-bold text-DFDFDF text-center text-s32l38 mobile:text-s22l26_4 mt-24">Visa Global</div>
              <div className="text-DFDFDF text-center mt-12 text-s20l150 mobile:text-s12l14">
                Visa Global Registry of Service Providers on the list 2020
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* In the media */}
      <div className="w-100% flex-col justify-center items-center mt-100">
        <div className="mobile:pl-21 desktop:text-center font-bold text-s44l66 mobile:text-s20l150 text-252525 mb-60 mobile:mb-40 w-100%">
          <span>In the media</span>
          <span className="float-right mr-17 text-s12l14 text-46AC34 border-b border-46AC34 cursor-pointer font-bold desktop:hidden">View All</span>
        </div>
        <div className="w-100% flex flex-col items-center px-150 mobile:hidden">
          <Carousel itemsToShow={3} itemPadding={[0, 20, 0, 20]} enableMouseSwipe={false} pagination={false} renderArrow={blackCarouselArrows}>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-1.svg" height={265} width={320} />
              </div>
              <div div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">Get your money in seconds — 24/7 — with instant transfer</div>
                <div className="text-525252 px-20 mt-15 text-s20l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-2.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">Pandemic drives over half of consumers to shop locally</div>
                <div className="text-525252 px-20 mt-15 text-s20l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer" />
              </div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-3.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20 ">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">Small Business Filmmaker Competition in India</div>
                <div className="text-525252 p-20 mt-5 text-s20l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer" />
              </div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-1.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">Get your money in seconds — 24/7 — with instant transfer</div>
                <div className="text-525252 px-20 mt-15 text-s20l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-2.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">Pandemic drives over half of consumers to shop locally</div>
                <div className="text-525252 px-20 mt-15 text-s20l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
          </Carousel>
          <div className="text-s22l26_4 text-46AC34 border-b border-46AC34 py-5 mt-25 cursor-pointer font-bold">View All</div>
        </div>
        <div className="w-100% block items-center desktop:hidden">
          <Carousel itemPadding={[0, 15]} itemsToShow={1} outerSpacing={0} showArrows={false}>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-1.svg" height={203} width={216} />
              </div>
              <div div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10">6 min read</div>
                <div className="text-252525 px-10 font-bold text-s14l16_8">Get your money in seconds — 24/7 — with instant transfer</div>
                <div className="text-525252 px-10 pb-0 text-s12l14">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-2.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10">6 min read</div>
                <div className="text-252525 px-10 font-bold text-s14l16_8">Pandemic drives over half of consumers to shop locally</div>
                <div className="text-525252 px-10 pb-0 text-s12l14">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-3.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10 ">6 min read</div>
                <div className="text-252525 px-10 font-bold text-s14l16_8">Small Business Filmmaker Competition in India</div>
                <div className="text-525252 p-20 mt-5 text-s12l14">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-1.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10">6 min read</div>
                <div className="text-252525 px-10 font-bold text-s14l16_8">Get your money in seconds — 24/7 — with instant transfer</div>
                <div className="text-525252 px-10 pb-0 text-s12l14">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-2.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10">6 min read</div>
                <div className="text-252525 px-10 font-bold text-s14l16_8">Pandemic drives over half of consumers to shop locally</div>
                <div className="text-525252 px-10 pb-0 text-s12l14">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
          </Carousel>
          <div className="text-s22l26_4 text-46AC34 border-b border-46AC34 py-5 mt-25 cursor-pointer font-bold mobile:hidden">View All</div>
        </div>
      </div>

      {/* Most popular blogs */}
      <div className="w-100% flex-col justify-center items-center mt-100">
        <div className="text-center font-bold text-s44l66 mobile:text-s20l150 text-252525 mb-60">Most popular blogs</div>
        <div className="w-100% flex flex-col items-center justify-around px-150 mobile:hidden">
          <Carousel itemsToShow={3} itemPadding={[0, 20, 0, 20]} enableMouseSwipe={false} pagination={false} renderArrow={blackCarouselArrows}>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-16">
                <Image src="/images/backgrounds/img-4.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">How to standout in digital payments business space</div>
                <div className="text-525252 p-20 mt-10 text-s20l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-5.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">How to fix recurring payments under new RBI guidelines</div>
                <div className="text-525252 px-20 mt-15 text-s20l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-6.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">The tango between banks and fintechs: Rivals turn partners</div>
                <div className="text-525252 px-20 mt-15 text-s20l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-4.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">How to standout in digital payments business space</div>
                <div className="text-525252 p-20 mt-10 text-s20l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-5.svg" height={265} width={320} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">How to fix recurring payments under new RBI guidelines</div>
                <div className="text-525252 px-20 mt-15 text-s20l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
          </Carousel>
          <div className="text-s22l26_4 text-46AC34 border-b border-46AC34 py-5 m-25 cursor-pointer font-bold">View All</div>
        </div>
        <div className="w-100% flex flex-col items-center justify-around desktop:hidden">
          <Carousel itemPadding={[0, 15]} itemsToShow={1} outerSpacing={0} showArrows={false}>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-4.svg" height={203} width={216} />
              </div>
              <div div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10">6 min read</div>
                <div className="text-252525 px-10 font-bold text-s14l16_8">How to standout in digital payments business space</div>
                <div className="text-525252 px-10 pb-0 text-s12l14">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-5.svg" height={203} width={216} />
              </div>
              <div div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10">6 min read</div>
                <div className="text-252525 px-10 font-bold text-s14l16_8">How to fix recurring payments under new RBI guidelines</div>
                <div className="text-525252 px-10 pb-0 text-s12l14">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-6.svg" height={203} width={216} />
              </div>
              <div div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10">6 min read</div>
                <div className="text-252525 px-10 font-bold text-s14l16_8">The tango between banks and fintechs: Rivals turn partners</div>
                <div className="text-525252 px-10 pb-0 text-s12l14">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-4.svg" height={203} width={216} />
              </div>
              <div div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10">6 min read</div>
                <div className="text-252525 px-10 font-bold text-s14l16_8">How to standout in digital payments business space</div>
                <div className="text-525252 px-10 pb-0 text-s12l14">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image src="/images/backgrounds/img-5.svg" height={203} width={216} />
              </div>
              <div div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10">6 min read</div>
                <div className="text-252525 px-10 font-bold text-s14l16_8">How to fix recurring payments under new RBI guidelines</div>
                <div className="text-525252 px-10 pb-0 text-s12l14">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* FAQs */}
      <div className="px-180 py-150 mobile:px-0 mobile:py-0">
        <div className="border-2 border-b-0 border-8CC63E mobile:border-0">
          <div className="mb-40 ml-40 mt-50 mobile:ml-0">
            <div className="text-252525 text-s45l45 mobile:text-s20l150 mobile:align-center mobile:flex mobile:justify-center mobile:font-bold">
              FAQs
            </div>
            <div className="text-000000 text-s30l36 mobile:text-s14l24  mobile:align-center mobile:flex mobile:justify-center mb-48 mt-20 mobile:font-semibold">
              Curious about Mintoak? We’ve got you covered.
            </div>
          </div>

          <Collapse
            expandIcon={({ isActive }) => (isActive ? <i className="fa fa-angle-up text-262626" /> : <i className="fa fa-angle-down text-262626" />)}
            expandIconPosition={"right"}
            bordered={false}
            // defaultActiveKey={["1"]}
          >
            <Panel
              className="text-252525 text-s24l29 mobile:text-s14l24 p-30 mobile:p-0 mobile:ml-20 mobile:mr-20 font-semibold"
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              key="1"
            >
              <p className="text-525252 text-s20l150 mobile:text-s12l14 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisc ing elit, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Panel>
            <Panel
              className="text-252525 text-s24l29 mobile:text-s14l24 p-30 mobile:p-0 mobile:ml-20 mobile:mr-20 font-semibold"
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              key="2"
            >
              <p className="text-525252 text-s20l150 mobile:text-s12l14 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisc ing elit, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Panel>
            <Panel
              className="text-252525 text-s24l29 mobile:text-s14l24 p-30 mobile:p-0 mobile:ml-20 mobile:mr-20 font-semibold"
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              key="3"
            >
              <p className="text-525252 text-s20l150 mobile:text-s12l14 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisc ing elit, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Panel>
            <Panel
              className="text-252525 text-s24l29 mobile:text-s14l24 p-30 mobile:p-0 mobile:ml-20 mobile:mr-20 font-semibold"
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              key="4"
            >
              <p className="text-525252 text-s20l150 mobile:text-s12l14 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisc ing elit, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Panel>
            <Panel
              className="text-252525 text-s24l29 mobile:text-s14l24 p-30 mobile:p-0 mobile:ml-20 mobile:mr-20 font-semibold"
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              key="5"
            >
              <p className="text-525252 text-s20l150 mobile:text-s12l14 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisc ing elit, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Panel>
          </Collapse>
        </div>
        <div className="flex items-center justify-center mt-40">
          <div className="text-s24l29 text-6B6B6B">Still have unanswered questions?</div>
          <div className="text-s22l26_4 text-46AC34 border-b border-46AC34 ml-10 cursor-pointer font-bold">View All</div>
        </div>
      </div>
    </div>
  );
}
