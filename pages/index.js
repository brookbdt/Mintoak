import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Image from "../components/helpers/Image";
import { consts } from "react-elastic-carousel";
import { Collapse } from "antd";
import { API, endpoints } from "../components/helpers/API";
import Item from "antd/lib/list/Item";

const { Panel } = Collapse;

export default function Home() {
  const [isBORM, setIsBORM] = useState("b");
  const [homeBannerResp, setHomeBannerResp] = useState({});
  const [metricsResp, setMetricsResp] = useState({});
  const [homeForBanksResp, setHomeForBanksResp] = useState({});
  const [homeAdvantagesCard, setHomeAdvantagesCard] = useState([]);
  const [homeForMerchant, setHomeForMerchant] = useState([]);
  const [comunityCard, setComunityCard] = useState([]);
  const [homepageAchievements, setHomepageAchievements] = useState([]);
  const [homepageMediaCards, setHomepageMediaCards] = useState([]);
  const [faq, setFaq] = useState([]);
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

    // Advantages Card
    API({
      url: endpoints.homepage_advantage_cards,
    }).then((resp) => {
      if (!resp.message) {
        console.log(resp, "resp");
        setHomeAdvantagesCard(resp);
      }
    });

    // Home page for merchant
    API({
      url: endpoints.homeoage_for_merchant,
    }).then((resp) => {
      if (!resp.message) {
        console.log(resp, "resp");
        setHomeForMerchant(resp);
      }
    });

    // Community card
    API({
      url: endpoints.comminity_cards,
    }).then((resp) => {
      if (!resp.message) {
        console.log(resp, "resp");
        setComunityCard(resp);
      }
    });

    // Homepage Our Achievements
    API({
      url: endpoints.homepage_achievements,
    }).then((resp) => {
      if (!resp.message) {
        console.log(resp, "resp");
        setHomepageAchievements(resp);
      }
    });

    // Homepage Media Cards
    API({
      url: endpoints.homepage_media_cards,
    }).then((resp) => {
      if (!resp.message) {
        console.log(resp, "resp");
        setHomepageMediaCards(resp);
      }
    });

    // Faq
    API({
      url: endpoints.faq,
    }).then((resp) => {
      if (!resp.message) {
        console.log(resp, "resp");
        setFaq(resp);
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

  const mobileCarouselPagination = ({ pages, activePage, onClick }) => {
    return (
      <>
        <span className="flex w-30 justify-between mt-20">
          <span className="w-6 h-6 bg-C4C4C4 rounded-md bg-opacity-100 pr-6"></span>
          <span className="w-6 h-6 bg-525252 rounded-md bg-opacity-100 pr-6"></span>
          <span className="w-6 h-6 bg-C4C4C4 rounded-md bg-opacity-100"></span>
        </span>
      </>
    );
  };

  return (
    <div className="h-fit w-100% bg-home-top">
      {/* Top layout with resp */}
      <div className="relative top-bg-container">
        <Image
          src={homeBannerResp?.Illustration}
          className="absolute z-minus1 mobile:hidden"
        />
        <div className="desktop:w-50%  laptop:w-55% desktop:py-150 desktop:px-100 laptop:p-100 tablet:w-80% tablet:p-30 px-20 mobile:pt-40 pb-40 z-10">
          <div className="text-s44l120 laptop:text-s32l45 mobile:text-s24l28_8 text-252525 shrink-0">
            {homeBannerResp?.TittleTop}
          </div>
          <div className="text-s56l124_5 laptop:text-s40l60 mobile:text-s34l42 font-bold text-252525 shrink-0">
            {homeBannerResp?.TitleMiddle}
          </div>
          <div className="text-s44l120 laptop:text-s32l45 mobile:text-s24l28_8 text-252525 shrink-0">
            {homeBannerResp?.TitleBottom}
          </div>
          <div className="text-s24l150 laptop:text-s20l30 mobile:text-s14l24 text-525252 shrink-0 mt-37">
            {homeBannerResp?.Description}
          </div>
          <div className="button w-216 mobile:w-166 mobile:h-40 mobile:text-s14l17 h-54 mt-40 cursor-pointer z-20 font-bold">
            {homeBannerResp?.Button}
          </div>
        </div>
        <Image
          src={homeBannerResp?.mobilebanner}
          className=" block relative desktop:hidden laptop:hidden"
          type="img"
        />
      </div>
      <div className="">
        {/* Count layout */}
        <div className="flex desktop:w-70% laptop:w-100% mx-auto items-center justify-around px-200 mobile:px-23 mb-150 mobile:mb-80 mobile:hidden pt-108">
          <div className="text-center text-s36l43 laptop:text-s28l42 mobile:text-s14l17 text-252525">
            {metricsResp?.Merchants}
            <span className="text-A4D77A">+</span>
            <div className="text-s20l24 mobile:text-s14l17 text-525252 mt-10">
              Merchants
            </div>
          </div>
          <div className="text-center text-s36l43 laptop:text-s28l42 mobile:text-s20l24 text-252525">
            <span className="mobile:font-semibold">
              {metricsResp?.TransactionsAnnually}
              <span className="text-A4D77A">+</span>
            </span>
            <div className="text-s20l24 mobile:text-s14l17 text-525252 mt-10">
              Transactions Annually
            </div>
          </div>
          <div className="text-center text-s36l43 laptop:text-s28l42 mobile:text-s14l17 text-252525">
            {metricsResp?.GMVAnnuals}
            <span className="text-A4D77A">+</span>
            <div className="text-s20l24 mobile:text-s14l17 text-525252 mt-10">
              GMV Annuals
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around px-200 mobile:px-0 mb-150 mobile:mb-80 desktop:hidden laptop:hidden">
          <Carousel
            itemsToShow={3}
            itemsToScroll={1}
            itemPadding={[0, 0, 0, 0]}
            enableMouseSwipe={true}
            pagination={true}
            showArrows={false}
            renderPagination={mobileCarouselPagination}
          >
            <div className="text-center text-s36l43 mobile:text-s14l17 text-252525">
              {metricsResp?.Merchants}
              <span className="text-A4D77A">+</span>
              <div className="text-s20l24 mobile:text-s14l17 text-525252 mt-10">
                Merchants
              </div>
            </div>
            <div className="text-center text-s36l43 mobile:text-s20l24 text-252525">
              <span className="mobile:font-semibold">
                {metricsResp?.TransactionsAnnually}
                <span className="text-A4D77A">+</span>
              </span>
              <div className="text-s20l24 mobile:text-s14l17 text-525252 mt-10">
                Transactions Annually
              </div>
            </div>
            <div className="text-center text-s36l43 mobile:text-s14l17 text-252525">
              {metricsResp?.GMVAnnuals}
              <span className="text-A4D77A">+</span>
              <div className="text-s20l24 mobile:text-s14l17 text-525252 mt-10">
                GMV Annuals
              </div>
            </div>
          </Carousel>
        </div>

        {/* Mintoak Advantages */}
        <div className="flex justify-around text-252525 font-semibold text-s44l120 mobile:text-s20l150 mobile:font-bold mb-60">
          The Mintoak Advantages
        </div>
        <div className="flex mobile:block justify-around w-100% px-180 laptop:px-100 mobile:px-0 mb-150">
          {homeAdvantagesCard.map((item, index) => {
            return (
              <div
                key={index}
                className="mobile:flex mobile:mt-10 mobile:flex-row mobile:px-20 flex flex-col items-center justify-center border desktop:w-345 laptop:w-345 laptop:h-361 desktop:h-361 mobile:border-0 border-8CC63E justify-center  mobile:w-100% p-20 mobile:p-0 mx-20 mobile:mx-0"
              >
                <Image
                  src={item.Icon}
                  height={135}
                  width={135}
                  className="mobile:w-80 mobile:h-80"
                />
                <div>
                  <div className="font-bold text-s24l29 laptop:text-s18l33 mobile:text-s16l19 text-252525 mt-30 text-center mobile:text-left mobile:mt-5 responsive-title-text">
                    {item.Tittle}
                  </div>
                  <div className="text-s20l150 mobile:text-s14l17 laptop:text-s18l27 text-525252 mt-15 text-center mobile:mt-10 mobile:text-left laptop:text-s13l18 responsive-desc-text">
                    {item.Description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banks/Merchants */}
        <div className="flex flex-col bg-footer mb-150 w-100%">
          <div className="flex w-100% mobile:hidden">
            <div
              className={
                "flex items-center justify-center w-50% mobile:w-100% py-40 border-b cursor-pointer " +
                (isBORM === "b" ? "border-8CC63E" : "border-8B8B8B")
              }
              onClick={() => setIsBORM("b")}
            >
              <Image
                src={`/images/icons/radio-${isBORM === "b" ? "selected" : "unselected"
                  }.svg`}
                height={49}
                width={49}
              />
              <div
                className={
                  "ml-25 font-bold text-s40l60 " +
                  (isBORM === "b" ? "text-FFFFFF" : "text-A2A2A2")
                }
              >
                {homeForBanksResp?.Title1}
              </div>
            </div>
            <div className="border-r border-8CC63E"></div>
            <div
              className={
                "flex items-center justify-center w-50% mobile:w-100% py-40 border-b cursor-pointer " +
                (isBORM === "m" ? "border-8CC63E" : "border-8B8B8B")
              }
              onClick={() => setIsBORM("m")}
            >
              <Image
                src={`/images/icons/radio-${isBORM === "m" ? "selected" : "unselected"
                  }.svg`}
                height={49}
                width={49}
              />
              <div
                className={
                  "ml-25 font-bold text-s40l60 " +
                  (isBORM === "m" ? "text-FFFFFF" : "text-A2A2A2")
                }
              >
                {homeForMerchant?.Title1}
              </div>
            </div>
          </div>
          <div className="flex items-center w-100% laptop:px-100 desktop:px-180 mobile:px-20 desktop:py-120 laptop:py-100  mobile:hidden">
            {isBORM === "b" ? (
              <>
                <div className="flex mobile:block flex-col w-50% mobile:w-100% justify-center">
                  <div className="text-s24l36 laptop:text-s20l33 tracking-wide mobile:text-s14l24 text-F1F1F1 mb-99 item-center">
                    <div className="text-s24l36 laptop:text-s20l33 tracking-wide mobile:text-s14l24 text-F1F1F1 pb-99 item-center">
                      {homeForBanksResp?.Description1}
                    </div>
                    <div className="flex items-center desktop:text-s36l43 laptop:text-s24l150 mobile:text-s16l19 font-bold text-F1F1F1 mb-20">
                      {homeForBanksResp?.Title2}
                    </div>
                    <div className="text-s20l150 laptop:text-s16l24 mobile:text-s14l24 tracking-wider text-F1F1F1">
                      {homeForBanksResp?.Description2}
                      <span className="text-s20l150 mobile:text-s14l24  text-8CC63E cursor-pointer">
                        {" "}
                        {homeForBanksResp?.CTA1}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-50% mobile:w-100% flex items-center justify-end">
                  <Image
                    src={homeForBanksResp?.BankIllustration}
                    height={633}
                    width={663}
                    className="laptop:w-520"
                  />
                </div>
              </>
            ) : (
              <>
                <div className=" flex flex-col w-50% mobile:w-100% justify-center">
                  <div className="text-s24l36 laptop:text-s20l33 tracking-wide mobile:text-s14l24 text-F1F1F1 mb-99">
                    {homeForMerchant?.Description1}
                  </div>
                  <div className="flex items-center text-s36l43 laptop:text-s28l42 mobile:text-s16l19 font-bold text-F1F1F1 mb-20">
                    {homeForMerchant?.Title2}
                  </div>
                  <div className="text-s20l150 laptop:text-s16l24 mobile:text-s14l24 tracking-wider text-F1F1F1">
                    <div className="text-s20l150 mobile:text-s14l24 tracking-wider text-F1F1F1 w-638">
                      {homeForMerchant?.Description2}
                      <span className="text-s20l150 mobile:text-s16l19 text-8CC63E cursor-pointer">
                        {homeForMerchant?.CTA1}
                      </span>
                    </div>

                    <div className="button w-216 h-54 mt-40 mobile:w-290 mobile:h-40 mobile:ml-12">
                      {homeForMerchant?.CTA2}
                    </div>
                  </div>
                </div>
                <div className="w-50% mobile:w-100% flex items-center justify-end">
                  <Image
                    src={homeForMerchant?.MerchantIllustration}
                    height={633}
                    width={663}
                    className="laptop:w-520"
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex mobile:block w-100% desktop:hidden laptop:hidden mobile:px-20">
            <div
              className={
                "flex items-center text-F1F1F1 w-50% mobile:w-100% pt-40 pb-24 cursor-pointer"
              }
              onClick={() => setIsBORM("b")}
            >
              <div className={"font-bold text-s20l24"}>
                {" "}
                {homeForBanksResp?.Title1}
              </div>
            </div>
            <div className="flex mobile:block flex-col w-50% mobile:w-100% justify-center">
              <div className="text-s24l29 mobile:text-s14l24 text-F1F1F1 mb-40">
                {homeForBanksResp?.Description1}
              </div>
              <div className="flex items-center text-s36l43 mobile:text-s16l19 font-bold text-F1F1F1 mb-20">
                {homeForBanksResp?.Title2}
              </div>
              <div className="text-s20l150 mobile:text-s14l24 text-F1F1F1">
                {homeForBanksResp?.Description2}
                <span className="text-s20l150   mobile:text-s14l24 text-8CC63E cursor-pointer">
                  {homeForBanksResp?.CTA1}
                </span>
              </div>
              <div className="button w-216 mobile:w-166 mobile:h-40 mobile:text-s14l17 h-54 mt-40 mb-40">
                {homeForBanksResp?.CTA2}
              </div>
              <div className="w-50% mobile:w-100% flex items-center justify-center">
                <Image
                  src={homeForBanksResp?.BankIllustration}
                  height={650}
                  width={500}
                />
              </div>
            </div>

            <div className="p-0 border-b border-8B8B8B"></div>
            <div
              className={
                "flex items-center text-F1F1F1 w-50% mobile:w-100% pt-40 cursor-pointer "
              }
            >
              <div className={"mb-22 font-bold text-s20l24 "}>
                {" "}
                {homeForMerchant?.Title1}
              </div>
            </div>
            <div className="flex flex-col w-50% mobile:w-100% justify-center">
              <div className="text-s24l29 mobile:text-s14l24 text-F1F1F1 mb-40">
                {homeForMerchant?.Description1}
              </div>
              <div className="flex items-center text-s36l43 mobile:text-s16l19 font-bold text-F1F1F1 mb-20">
                {homeForMerchant?.Title2}
              </div>
              <div className="text-s20l150 mobile:text-s14l24 text-F1F1F1">
                {homeForMerchant?.Description2}
                <span className="text-s20l150 mobile:text-s14l24 text-8CC63E cursor-pointer">
                  {" "}
                  Learn More
                </span>
              </div>
              <div className="button w-216 mobile:w-166 mobile:h-40 mobile:text-s14l17 h-54 mt-40 mb-40">
                {homeForMerchant?.CTA2}
              </div>
              <Image
                src={homeForMerchant?.MerchantIllustration}
                height={650}
                width={500}
              />
            </div>
          </div>
        </div>

        {/* Building a global community */}
        <div className="text-s44l120 mobile:text-s20l150 text-252525 mb-30 font-bold text-center">
          Building A Global Community
        </div>
        <div className="flex justify-center items-center w-100% py-50 laptop:px-90 px-180 mb-100 mobile:px-0 mobile:mb-0 mobile:hidden">
          <Carousel
            itemsToShow={3}
            itemPadding={[0, 20, 0, 20]}
            enableMouseSwipe={false}
            pagination={false}
            renderArrow={({ type, onClick, isEdge }) => {
              const pointer =
                type === consts.PREV ? (
                  <i className="fa fa-angle-left text-s24l150 flex items-center justify-center border  rounded-full h-63 w-63" />
                ) : (
                  <i className="fa fa-angle-right text-s24l150 flex items-center justify-center border  rounded-full h-63 w-63" />
                );
              return (
                <button onClick={onClick} disabled={isEdge} className="h-120 laptop:h-70">
                  {pointer}
                </button>
              );
            }}
          >
            {comunityCard.map((item, index) => {
              return (
                <div
                  key={index}
                  // className="h-240 mobile:h-170 mobile:278 sliderItem "
                  className="h-230 mobile:h-170 mobile:278 sliderItem pt-35"
                >
                  <Image
                    src={item.BankLogo}
                    width={231}
                    height={130}
                    className="grayscale h-53 colorImage m-auto"
                  />
                  <div className="pt-20">
                    <div className="comunityContent hidden text-s20l30 text-center">
                      {item.BankInfo}
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="desktop:hidden flex flex-col laptop:hidden items-center w-100% mb-100 mobile:pr-0 mobile:mb-0">
          {comunityCard.map((item, index) => {
            return (
              <div
                key={index}
                className=" mobile:w-278 bg-FFFFFF flex flex-col items-center px-21 mb-20 shadow-bankbox"
              >
                <div className="flex justify-center items-center  w-100%">
                  <Image src={item.BankLogo} className="w-150 h-100" />
                </div>
                <div className="items-center py-23 flex text-s12l18 justify-center w-100% text-center">
                  {item.BankInfo}
                </div>
              </div>
            );
          })}
        </div>

        {/* Our achievements */}
        <div className="flex flex-col items-center bg-footer w-100% laptop:px-100 px-180 py-120 mobile:p-0 mobile:pt-40">
          <div className="text-center font-bold text-FAFAFA text-s44l120 mobile:text-s20l150 mobile:p-0 mobile:mb-40">
            Our Achievements
          </div>
          <div className="flex items-center w-100% pt-50  mobile:px-0 mobile:py-0 mobile:hidden">
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
              {homepageAchievements.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-313131 w-90% p-40 border border-C4C4C4 h-390"
                  >
                    <Image
                      src={item.CertificateIcon}
                      height={165}
                      width={273}
                      type="img"
                      className="h-165"
                    />
                    <div className="font-semibold text-DFDFDF text-center text-s32l38 mt-24">
                      {item?.Title}
                    </div>
                    <div className="text-DFDFDF text-center mt-12 text-s20l150">
                      {item?.Description}
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="flex items-center w-100% py-50 px-100 mobile:px-0 mobile:py-0 desktop:hidden laptop:hidden mb-40">
            <Carousel
              itemsToShow={1}
              itemPadding={[0, 0]}
              enableMouseSwipe={true}
              pagination={true}
              showArrows={false}
              outerSpacing={0}
              renderPagination={mobileCarouselPagination}
            >
              {homepageAchievements.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-313131 w-88% p-40 border border-C4C4C4"
                  >
                    <Image
                      src={item.CertificateIcon}
                      height={110}
                      width={273}
                    />
                    <div className="font-bold text-DFDFDF text-center text-s32l38 mobile:text-s22l26_4 mt-24">
                      {item?.Title}
                    </div>
                    <div className="text-DFDFDF text-center mt-12 text-s20l150 mobile:text-s12l14">
                      {item?.Description}
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

        {/* In the media */}
        <div className="w-100% flex-col justify-center items-center  my-150">
          <div className="mobile:pl-21 desktop:text-center laptop:text-center font-bold text-s44l66 mobile:text-s20l150 text-252525 mb-60 mobile:mb-40 w-100%">
            <span>In The Media</span>
            <span className="float-right mr-17 text-s12l14 text-46AC34 border-b border-46AC34 cursor-pointer font-bold desktop:hidden laptop:hidden">
              View all
            </span>
          </div>
          <div className="w-100% flex flex-col items-center laptop:px-100 px-180 mobile:hidden">
            <Carousel
              itemsToShow={3}
              outerSpacing={0}
              itemPadding={[15, 0, 15, 0]}
              enableMouseSwipe={false}
              pagination={false}
              renderArrow={blackCarouselArrows}
            >
              {homepageMediaCards.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-88% flex flex-col justify-center items-center bg-FFFFFF custom-shaddow"
                  >
                    <div className="p-16">
                      <Image
                        src={item.ArticleImage}
                        height={265}
                        width={"100%"}
                        className="grayscale colorImage"
                      />
                    </div>
                    <div div className="flex flex-col items-start">
                      <div className="text-83B449 text-s20l24 pt-20 pb-10 px-20">
                        {item.ReadTime}
                      </div>
                      <div className="text-252525 pt-10 pb-26 px-20 font-semibold text-s24l31">
                        {item.ArticleTitle}
                      </div>
                      <div className="text-525252 px-20  text-s20l24">
                        <span className="font-bold">{item.Author}</span>
                        <br />
                        {item.ArticleDate}
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-end ">
                      <div className="bg-button rounded-sm text-FFFFFF px-10 py-8 flex items-center justify-center cursor-pointer">
                        <Image
                          src="/images/icons/arrow.svg"
                          type="img"
                          height={40}
                          width={40}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
            <div className="text-s22l26_4 text-46AC34 border-b border-46AC34 py-5 mt-25 cursor-pointer font-bold">
              View all
            </div>
          </div>
          <div className="w-100% block items-center desktop:hidden laptop:hidden">
            <Carousel
              itemPadding={[0, 15]}
              itemsToShow={1.3}
              outerSpacing={0}
              showArrows={false}
              pagination={false}
            >
              {homepageMediaCards.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF custom-shaddow"
                  >
                    <div className="px-10">
                      <Image
                        src={item.ArticleImage}
                        height={203}
                        width={216}
                        className="grayscale colorImage"
                      />
                    </div>
                    <div div className="flex flex-col items-start">
                      <div className="text-83B449 text-s14l16_8 pt-5 pl-10">
                        {item.ReadTime}
                      </div>
                      <div className="text-252525 px-10 font-bold text-s14l16_8">
                        {item.ArticleTitle}
                      </div>
                      <div className="text-525252 px-10 pb-0 text-s12l14">
                        <span className="font-bold">{item.Author}</span>
                        <br />
                        {item.ArticleDate}
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-end">
                      <div className="bg-button rounded-sm text-FFFFFF h-60 w-70 flex items-center justify-center cursor-pointer">
                        <Image
                          src="/images/icons/arrow.svg"
                          type="img"
                          height={40}
                          width={40}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
            <div className="text-s22l26_4 text-46AC34 border-b border-46AC34 py-5 mt-25 cursor-pointer font-bold mobile:hidden">
              View all
            </div>
          </div>
        </div>

        {/* Most popular blogs */}
        <div className="w-100% flex-col justify-center items-center mt-100">
          <div className="mobile:pl-21 desktop:text-center laptop:text-center font-bold text-s44l66 mobile:text-s20l150 text-252525 mb-60 mobile:mb-40 w-100%">
            <span>Most Popular Blogs</span>
            <span className="float-right mr-17 text-s12l14 text-46AC34 border-b border-46AC34 cursor-pointer font-bold desktop:hidden laptop:hidden">
              View all
            </span>
          </div>
          <div className="w-100% flex flex-col items-center justify-around laptop:px-100 px-180 mobile:hidden">
            <Carousel
              itemsToShow={3}
              outerSpacing={0}
              itemPadding={[15, 0, 15, 0]}
              enableMouseSwipe={false}
              pagination={false}
              renderArrow={blackCarouselArrows}
            >
              <div className="w-88% flex flex-col justify-center items-center bg-FFFFFF custom-shaddow">
                <div className="p-16">
                  <Image
                    src="/images/backgrounds/img-4.svg"
                    height={265}
                    width={"100%"}
                    type="img"
                    className="grayscale colorImage"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-83B449 text-s20l24 pt-20 pb-10 px-20">
                    6 min read
                  </div>
                  <div className="text-252525 px-20 h-100 font-semibold text-s24l31">
                    How to standout in digital payments business space
                  </div>
                  <div className="text-525252 px-20 laptop:pt-26 text-s20l24">
                    By <span className="font-bold">Raman Kahnduja</span>
                    <br />
                    Sept 13, 2021
                  </div>
                </div>
                <div className="w-full flex items-center justify-end">
                  <div className="rounded-sm bg-button rounded-sm text-FFFFFF h-60 w-70 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/images/icons/arrow.svg"
                      type="img"
                      height={40}
                      width={40}
                    />
                  </div>
                </div>
              </div>
              <div className="w-88% flex flex-col justify-center items-center bg-FFFFFF custom-shaddow">
                <div className="p-16">
                  <Image
                    src="/images/backgrounds/img-5.svg"
                    height={265}
                    width={"100%"}
                    type="img"
                    className="grayscale colorImage"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-83B449 text-s20l24 pt-20 pb-10 px-20">
                    6 min read
                  </div>
                  <div className="text-252525 px-20 h-100 font-semibold text-s24l31">
                    How to fix recurring payments under new RBI guidelines
                  </div>
                  <div className="text-525252 px-20 laptop:pt-26  text-s20l24">
                    By <span className="font-bold">Raman Kahnduja</span>
                    <br />
                    Sept 13, 2021
                  </div>
                </div>
                <div className="w-full flex items-center justify-end">
                  <div className="rounded-sm bg-button rounded-sm text-FFFFFF h-60 w-70 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/images/icons/arrow.svg"
                      type="img"
                      height={40}
                      width={40}
                    />
                  </div>
                </div>
              </div>
              <div className="w-88% flex flex-col justify-center items-center bg-FFFFFF custom-shaddow">
                <div className="p-16">
                  <Image
                    src="/images/backgrounds/img-6.svg"
                    height={265}
                    width={"100%"}
                    type="img"
                    className="grayscale colorImage"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-83B449 text-s20l24 pt-20 pb-10 px-20">
                    6 min read
                  </div>
                  <div className="text-252525 px-20 h-100 font-semibold text-s24l31">
                    The tango between banks and fintechs: Rivals turn partners
                  </div>
                  <div className="text-525252 px-20 laptop:pt-26  text-s20l24">
                    By <span className="font-bold">Raman Kahnduja</span>
                    <br />
                    Sept 13, 2021
                  </div>
                </div>
                <div className="w-full flex items-center justify-end">
                  <div className="rounded-sm bg-button rounded-sm text-FFFFFF h-60 w-70 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/images/icons/arrow.svg"
                      type="img"
                      height={40}
                      width={40}
                    />
                  </div>
                </div>
              </div>
              <div className="w-88% flex flex-col justify-center items-center bg-FFFFFF custom-shaddow">
                <div className="p-16">
                  <Image
                    src="/images/backgrounds/img-4.svg"
                    height={265}
                    width={"100%"}
                    type="img"
                    className="grayscale colorImage"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-83B449 text-s20l24 pt-20 pb-10 px-20">
                    6 min read
                  </div>
                  <div className="text-252525 px-20 h-100 font-semibold text-s24l31">
                    How to standout in digital payments business space
                  </div>
                  <div className="text-525252 px-20 laptop:pt-26  text-s20l24">
                    By <span className="font-bold">Raman Kahnduja</span>
                    <br />
                    Sept 13, 2021
                  </div>
                </div>
                <div className="w-full flex items-center justify-end">
                  <div className="bg-button rounded-sm text-FFFFFF h-60 w-70 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/images/icons/arrow.svg"
                      type="img"
                      height={40}
                      width={40}
                    />
                  </div>
                </div>
              </div>
              <div className="w-88% flex flex-col justify-center items-center bg-FFFFFF custom-shaddow">
                <div className="p-16">
                  <Image
                    src="/images/backgrounds/img-5.svg"
                    height={265}
                    width={"100%"}
                    type="img"
                    className="grayscale colorImage"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-83B449 text-s20l24 pt-20 pb-10 px-20">
                    6 min read
                  </div>
                  <div className="text-252525 px-20 h-100 font-semibold text-s24l31">
                    How to fix recurring payments under new RBI guidelines
                  </div>
                  <div className="text-525252 px-20 laptop:pt-26 text-s20l24">
                    By <span className="font-bold">Raman Kahnduja</span>
                    <br />
                    Sept 13, 2021
                  </div>
                </div>
                <div className="w-full flex items-center justify-end">
                  <div className="bg-button rounded-sm text-FFFFFF h-60 w-70 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/images/icons/arrow.svg"
                      type="img"
                      height={40}
                      width={40}
                    />
                  </div>
                </div>
              </div>
            </Carousel>
            <div className="text-s22l26_4 text-46AC34 border-b border-46AC34 py-5 m-25 cursor-pointer font-bold">
              View all
            </div>
          </div>
          <div className="w-100% flex flex-col items-center justify-around desktop:hidden laptop:hidden">
            <Carousel
              itemPadding={[0, 15]}
              itemsToShow={1.3}
              outerSpacing={0}
              showArrows={false}
              pagination={false}
            >
              <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
                <div className="px-10">
                  <Image
                    src="/images/backgrounds/img-4.svg"
                    height={203}
                    width={216}
                  />
                </div>
                <div div className="flex flex-col items-start">
                  <div className="text-83B449 text-s14l16_8 pt-5 pl-10">
                    6 min read
                  </div>
                  <div className="text-252525 px-10 font-bold text-s14l16_8">
                    How to standout in digital payments business space
                  </div>
                  <div className="text-525252 px-10 pb-0 text-s12l14">
                    By <span className="font-bold">Raman Kahnduja</span>
                    <br />
                    Sept 13, 2021
                  </div>
                </div>
                <div className="w-full flex items-center justify-end">
                  <div className="bg-button rounded-sm text-FFFFFF h-60 w-70 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/images/icons/arrow.svg"
                      type="img"
                      height={40}
                      width={40}
                    />
                  </div>
                </div>
              </div>
              <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
                <div className="px-10">
                  <Image
                    src="/images/backgrounds/img-5.svg"
                    height={203}
                    width={216}
                  />
                </div>
                <div div className="flex flex-col items-start">
                  <div className="text-83B449 text-s14l16_8 pt-5 pl-10">
                    6 min read
                  </div>
                  <div className="text-252525 px-10 font-bold text-s14l16_8">
                    How to fix recurring payments under new RBI guidelines
                  </div>
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
                  <Image
                    src="/images/backgrounds/img-6.svg"
                    height={203}
                    width={216}
                  />
                </div>
                <div div className="flex flex-col items-start">
                  <div className="text-83B449 text-s14l16_8 pt-5 pl-10">
                    6 min read
                  </div>
                  <div className="text-252525 px-10 font-bold text-s14l16_8">
                    The tango between banks and fintechs: Rivals turn partners
                  </div>
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
                  <Image
                    src="/images/backgrounds/img-4.svg"
                    height={203}
                    width={216}
                  />
                </div>
                <div div className="flex flex-col items-start">
                  <div className="text-83B449 text-s14l16_8 pt-5 pl-10">
                    6 min read
                  </div>
                  <div className="text-252525 px-10 font-bold text-s14l16_8">
                    How to standout in digital payments business space
                  </div>
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
                  <Image
                    src="/images/backgrounds/img-5.svg"
                    height={203}
                    width={216}
                  />
                </div>
                <div div className="flex flex-col items-start">
                  <div className="text-83B449 text-s14l16_8 pt-5 pl-10">
                    6 min read
                  </div>
                  <div className="text-252525 px-10 font-bold text-s14l16_8">
                    How to fix recurring payments under new RBI guidelines
                  </div>
                  <div className="text-525252 px-10 pb-0 text-s12l14">
                    By <span className="font-bold">Raman Kahnduja</span>
                    <br />
                    Sept 13, 2021
                  </div>
                </div>
                <div className="w-full flex items-center justify-end">
                  <div className="bg-button rounded-sm text-FFFFFF h-60 w-70 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/images/icons/arrow.svg"
                      type="img"
                      height={40}
                      width={40}
                    />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        {/* FAQs */}
        <div className="px-180 py-150 mobile:px-0 mobile:py-0">
          <div className="border-2 border-b-0 border-8CC63E mobile:border-0 mobile:pb-60">
            <div className="mb-40 ml-40 mt-50 mobile:ml-0">
              <div className="text-252525 text-s45l54 font-bold mobile:text-s20l150 mobile:align-center mobile:flex mobile:justify-center mobile:font-bold">
                FAQ's
              </div>
              <div className="font-semibold text-000000 text-s30l36 mobile:text-s14l24  mobile:align-center mobile:flex mobile:justify-center mb-48 mt-20 mobile:font-semibold">
                Curious about Mintoak? We’ve got you covered.
              </div>
            </div>

            <Collapse
              expandIcon={({ isActive }) =>
                isActive ? (
                  <i className="fa fa-angle-up text-262626" />
                ) : (
                  <i className="fa fa-angle-down text-262626" />
                )
              }
              expandIconPosition={"right"}
              bordered={false}
            // defaultActiveKey={["1"]}
            >
              {faq.map((item, index) => {
                return (
                  <Panel
                    className="text-252525 text-s24l29 mobile:text-s14l24 p-30 mobile:p-0 mobile:ml-20 mobile:mr-20 font-semibold mobile:border"
                    header={item.Question}
                    key={index}
                  >
                    <p className="text-525252 text-s20l150 mobile:text-s12l14 font-normal w-80%">
                      {item.Answer}
                    </p>
                  </Panel>
                );
              })}
            </Collapse>
          </div>
          <div className="flex items-center justify-center mt-40 mobile:hidden">
            <div className="text-s24l29 text-6B6B6B">
              Still have unanswered questions?
            </div>
            <div className="text-s22l26_4 text-46AC34 border-b border-46AC34 ml-10 cursor-pointer font-bold">
              View all
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
