import Image from "../components/helpers/Image";
import { useRef, useEffect } from "react";
import { Collapse, Input } from "antd";
import Carousel from "react-elastic-carousel";
import { consts } from "react-elastic-carousel";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";

SwiperCore.use([Mousewheel, Pagination]);
const { TextArea } = Input;
const { Panel } = Collapse;

export default function Product() {
  const [activeindex, setActiveIndex] = useState();
  const [activeindex2, setActiveIndex2] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const [component, setComponent] = useState("AIM");
  const [swiperInstance, setSwiperInstance] = useState();
  const [page, setPage] = useState();
  const itemsToShow = 3;
  const founder = useRef(null);

  useEffect(() => {
    setComponent("PAM");
  }, []);
  return (
    <div className="desktop:h-fit laptop:h-fit w-100% bg-home-top mobile:w-100%">
      {/* Top layout with resp */}
      <Image
        src="/images/backgrounds/product-res-bg.svg"
        className="absolute desktop:hidden laptop:hidden"
        type="img"
      />
      <div className="relative top-bg-container flex w-100% border-b border-A4D77A mobile:flex-col mobile:border-0">
        <Image
          src="/images/backgrounds/product-bg.svg"
          className="w-100% absolute mobile:hidden"
          type="img"
        />
        <div className="desktop:w-50% desktop:pb-88 laptop:pb-88 laptop:w-50%  pr-50 pt-175 laptop:pt-80 z-10 mobile:w-100% mobile:mt-70 mobile:p-20 ">
          <div className="w-100%">
            <Image
              src="/images/icons/aim.svg"
              type="img"
              className="h-150 w-150 ml-161 mobile:ml-0 mobile:h-67 mobile:w-67"
            />
          </div>
          <div className="pl-181 laptop:pl-100 mobile:pl-0 text-s56l67 mobile:text-s36l43 font-bold text-252525 w-100% desktop:pt-45 laptop:pt-45 mobile:pt-10">
            Mintoak{" "}
            {component == "AIM" ? "AIM" : component == "PAM" ? "PAM" : "ACCORN"}
          </div>
          <div className="pl-181 laptop:pl-100 mobile:pl-0 desktop:text-s44l52 laptop:text-s44l52 mobile:text-s24l29 pr-80 mobile:pr-0 pt-16 text-252525 shrink-0 mobile:font-semibold">
            Analytics, Insights & Metrics
          </div>
          <div className="pl-181 laptop:pl-100 desktop:pr-330 mobile:pl-0 text-s20l30 mobile:text-s14l24 desktop:pt-32 laptop:pt-32 mobile:py-16 pr-350 laptop:pr-100 mobile:pr-0 text-525252 shrink-0">
            A real time interactive business performance dashboard for the
            business owner.
          </div>
        </div>
        <div className="desktop:w-50% laptop:w-50% flex items-start justify-center desktop:pl-50 pr-200  mobile:pr-0 desktop:pt-175 desktop:pb-90 mobile:w-100% laptop:py-100">
          <div className="flex flex-col justify-between items-end  mobile:items-start h-100% mobile:h-270 w-100% mobile:px-20">
            <div className="flex items-center">
              <div>
                <Image
                  src="/images/icons/Product_aim.svg"
                  type="img"
                  className="h-70 w-70 desktop:mr-32 mobile:hidden"
                />
                <Image
                  src="/images/icons/ctob_product_logo.svg"
                  type="img"
                  className="h-70 w-70 desktop:hidden laptop:hidden"
                />
              </div>
              <div className="text-252525 text-s24l36 mobile:text-s16l24 pl-16 w-355 mobile:w-142 mobile:font-normal font-semibold">
                Credit-to-Bank <br />
                Information
              </div>
            </div>
            <div className="flex items-center ">
              <div>
                <Image
                  src="/images/icons/Product_aim.svg"
                  type="img"
                  className="h-70 w-70 desktop:mr-32  mobile:hidden"
                />
                <Image
                  src="/images/icons/id_product_logo.svg"
                  type="img"
                  className="h-70 w-70 desktop:hidden laptop:hidden"
                />
              </div>
              <div className="text-252525 text-s24l36 mobile:text-s16l24 pl-16 w-355 mobile:w-200  mobile:font-normal font-semibold">
                Interactive Dashboards & Business Insights
              </div>
            </div>
            <div className="flex items-center ">
              <div>
                <Image
                  src="/images/icons/Product_aim.svg"
                  type="img"
                  className="h-70 w-70 desktop:mr-32  mobile:hidden"
                />
                <Image
                  src="/images/icons/mlcv_product_logo.svg"
                  type="img"
                  className="h-70 w-70 desktop:hidden laptop:hidden"
                />
              </div>
              <div className="text-252525 text-s24l36 mobile:text-s16l24 mobile:pl-16 w-355 mobile:w-260 mobile:font-normal font-semibold">
                Multi-location Consolidated View & Location-level Drill Down
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* AIM */}
      {/* carousle swiper */}
      {component && component === "AIM" ? (
        <>
          <div className="w-100% relative desktop:px-100 mobile:hidden mobile:pb-35 bg-currunt flex mobile:flex-col desktop:h-850 overflow-hidden laptop:h-976">
            <div className="flex flex-col">
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
                className="mySwiper overflow-scroll"
                onSwiper={setSwiperInstance}
                onSlideChange={(e) => {
                  setActiveTab(e.activeIndex);
                }}
              >
                <SwiperSlide key={0}>
                  <div className="flex w-100% mobile:hidden pl-80 laptop:pl-100">
                    <div className="w-33% mt-251">
                      <div className="text-s44l57_2 font-bold">
                        Track your business progress with our interactive
                        dashboard:
                      </div>
                      <div className="pt-40 text-s20l30 text-525252">
                        Get real time updates on your business, such as total
                        sales, transaction history, one view across payment
                        modes, customizable transaction reports, insights on new
                        and repeat customers and also customer feedback. Get
                        performance trends to see how your business has
                        performed over a period of time.
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide key={1}>
                  <div className="flex w-100% mobile:hidden pl-80 laptop:pl-100">
                    <div className="w-33% mt-251">
                      <div className="text-s44l57_2 font-bold">
                        Multi-location Consolidated View & Location-level Drill
                        Down:
                      </div>
                      <div className="pt-40 text-s20l30 text-525252">
                        Have more than one outlet? We have got you covered. You
                        can get a consolidated view across all outlets in one
                        place. A comparative view of outlets helps you
                        understand how each outlet is performing. Get in-depth
                        insights on the performance of a particular outlet or a
                        group of outlets.
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
                        Credit-to-Bank information:
                      </div>
                      <div className="pt-40 text-s20l30 text-525252">
                        Get a quick consolidated and outlet level view of
                        merchant payout details from the settlement or
                        credit-to-bank section. You can see the total amount
                        credited for transactions completed successfully. You
                        get a transparent view of gross amount, transaction fees
                        if any and the net amount.
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
            <div className="w-18% absolute flex flex-col itmes-center justify-center mobile:hidden right-50 pr-80 pt-65">
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
                      Interactive Dashboard
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
                      Consolidated View
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
                      Credit to Bank
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
          <div className="laptop:hidden desktop:hidden p-20 mt-60">
            <div className="text-s22l33 font-bold text-252525">
              Track your business progress with our interactive dashboard:
            </div>
            <div className="mt-16 text-s14l21 text-252525">
              Get real time updates on your business, such as total sales,
              transaction history, one view across payment modes, customizable
              transaction reports, insights on new and repeat customers and also
              customer feedback. Get performance trends to see how your business
              has performed over a period of time.
            </div>
            <Carousel
              itemPadding={[0, 15]}
              itemsToShow={1}
              outerSpacing={0}
              showArrows={false}
              pagination={true}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className="flex">
                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      return (
                        <div
                          className={`bg-C4C4C4 w-6 h-6 rounded-full mr-6 mb-40 ${
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
              <div className="w-100% text-center desktop:hidden laptop:hidden ">
                <Image
                  src="/images/backgrounds/product-mobileA1.svg"
                  height={315}
                  width={160}
                />
              </div>
              <div className="w-100% text-center desktop:hidden laptop:hidden ">
                <Image
                  src="/images/backgrounds/product-mobileA2.svg"
                  height={315}
                  width={160}
                />
              </div>
              <div className="w-100% text-center desktop:hidden laptop:hidden ">
                <Image
                  src="/images/backgrounds/product-mobileA3.svg"
                  height={315}
                  width={160}
                />
              </div>
              <div className="w-100% text-center desktop:hidden laptop:hidden ">
                <Image
                  src="/images/backgrounds/product-mobileA4.svg"
                  height={315}
                  width={160}
                />
              </div>
            </Carousel>
            <div className="text-s22l33 font-bold text-252525">
              Multi-location Consolidated View & Location-level <br /> Drill
              Down:
            </div>
            <div className="mt-16 text-s14l21 text-252525">
              Have more than one outlet? We have got you covered. You can get a
              consolidated view across all outlets in one place. A comparative
              view of outlets helps you understand how each outlet is
              performing. Get in-depth insights on the performance of a
              particular outlet or a group of outlets.
            </div>
            <Carousel
              itemPadding={[0, 15]}
              itemsToShow={1}
              outerSpacing={0}
              showArrows={false}
              pagination={true}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className="flex">
                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      return (
                        <div
                          className={`bg-C4C4C4 w-6 h-6 rounded-full mr-6 mb-40 ${
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
              <div className="w-100% text-center desktop:hidden laptop:hidden ">
                <Image
                  src="/images/backgrounds/product-mobileB1.svg"
                  height={315}
                  width={160}
                />
              </div>
              <div className="w-100% text-center desktop:hidden laptop:hidden ">
                <Image
                  src="/images/backgrounds/product-mobileB2.svg"
                  height={315}
                  width={160}
                />
              </div>
              <div className="w-100% text-center desktop:hidden laptop:hidden ">
                <Image
                  src="/images/backgrounds/product-mobileB3.svg"
                  height={315}
                  width={160}
                />
              </div>
            </Carousel>
            <div className="text-s22l33 font-bold text-252525">
              Credit-to-Bank <br />
              information:
            </div>
            <div className="mt-16 text-s14l21 text-252525">
              Get a quick consolidated and outlet level view of merchant payout
              details from the settlement or credit-to-bank section. You can see
              the total amount credited for transactions completed successfully.
              You get a transparent view of gross amount, transaction fees if
              any and the net amount.
            </div>
            <Carousel
              itemPadding={[0, 15]}
              itemsToShow={1}
              outerSpacing={0}
              showArrows={false}
              pagination={true}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className="flex">
                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      return (
                        <div
                          className={`bg-C4C4C4 w-6 h-6 rounded-full mr-6 mb-40 ${
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
              <div className="w-100% text-center desktop:hidden laptop:hidden ">
                <Image
                  src="/images/backgrounds/product-mobileC1.svg"
                  height={315}
                  width={160}
                />
              </div>
              <div className="w-100% text-center desktop:hidden laptop:hidden ">
                <Image
                  src="/images/backgrounds/product-mobileC1.svg"
                  height={315}
                  width={160}
                />
              </div>
            </Carousel>
          </div>
        </>
      ) : (
        " "
      )}
      {/* PAM */}
      {component && component == "PAM" ? (
        <>
          <div className="w-100% flex items-center justify-around desktop:px-180 desktop:pt-150 mobile:flex-col mobile:pb-80 mobile:pt-92">
            <div className="w-50% flex flex-col desktop:pr-65 mobile:w-100% mobile:px-20">
              <div className="desktop:text-s44l57_2 desktop:text-252525 font-bold mobile:text-s22l33 mobile:pb-16">
                Real-Time Dashboard of Portfolio Trends
              </div>
              <div className="desktop:text-s20l30 desktop:text-525252 desktop:pt-32 mobile:text-s14l21 mobile:pb-40">
                Multiple Trends to Gauge Portfolio Performances across. From
                volume to value to split of transactions, derive insights from
                the wide spectrum of parameters before you.Interactive Dashboard
                helping Cluster Merchants <br />
                <br />
                Based on the domain and the trend you want to visualize, Mintoak
                PAM???s interactive dashboard helps you group merchants together
                for better comparison.
              </div>
            </div>
            <div className="w-50% desktop:pl-65 mobile:w-100% mobile:px-20">
              <Image
                src="/images/backgrounds/portfolio.svg"
                type="img"
                className="desktop:h-486 desktop:w-730 mobile:h-208 mobile:w-311"
              />
            </div>
          </div>
          <div className="w-100% flex desktop:flex-row-reverse items-center justify-around desktop:px-180 desktop:pt-150 mobile:flex-col mobile:pb-80">
            <div className="w-50% flex flex-col desktop:pl-65 mobile:w-100% mobile:px-20">
              <div className="desktop:text-s44l57_2 desktop:text-252525 font-bold mobile:text-s22l33 mobile:pb-16">
                Merchant activation trends across form factors
              </div>
              <div className="desktop:text-s20l30 desktop:text-525252 desktop:pt-32 mobile:text-s14l21 mobile:pb-40">
                Several Business Domains and Trends to Choose from.Create and
                compare your portfolio in your specific business domain with all
                latest trends, each with a vast number of options to look at.
              </div>
            </div>
            <div className="w-50% desktop:pr-65 mobile:w-100% mobile:px-20">
              <Image
                src="/images/backgrounds/trends.svg"
                type="img"
                className="desktop:h-486 desktop:w-730 mobile:h-208 mobile:w-311"
              />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {/* ACCORN */}
      {component && component == "ACCORN" ? (
        <div className="w-100% flex items-center justify-around desktop:px-180 desktop:pt-150 mobile:flex-col mobile:pb-80 mobile:pt-80 mobile:flex-col-reverse">
          <div className="w-50% flex flex-col desktop:pr-54 mobile:w-100% mobile:px-20">
            <div className="desktop:text-s44l57_2 desktop:text-252525 font-bold mobile:text-s22l33 mobile:pb-16 desktop:pr-120">
              Control and conquer transaction risks
            </div>
            <div className="desktop:text-s20l30 desktop:text-525252 desktop:pt-32 mobile:text-s14l21 mobile:pb-40 desktop:pb-50 desktop:pr-130">
              Secure transaction processing with Mintoak ACORN???s on-device,
              in-transit, in-storage feature, you can rest assured of the
              security of your transactions.
            </div>
            <div className="desktop:text-s44l57_2 desktop:text-252525 font-bold mobile:text-s22l33 mobile:pb-16 desktop:pr-70">
              Encryption and Tokenization Tools
            </div>
            <div className="desktop:text-s20l30 desktop:text-525252 desktop:pt-32 mobile:text-s14l21 mobile:pb-40 desktop:pb-50 desktop:pr-50">
              Ensure complete compliance with PCI and DSS with ACORN???s smart
              tokenization and encryption tools.
            </div>
            <div className="desktop:text-s44l57_2 desktop:text-252525 font-bold mobile:text-s22l33 mobile:pb-16 desktop:pr-120">
              Wide Variety of Transactions & Devices Supported
            </div>
            <div className="desktop:text-s20l30 desktop:text-525252 desktop:pt-32 mobile:text-s14l21 mobile:pb-40 desktop:pb-50 desktop:pr-120">
              Helping businesses and merchants diversify with our widely
              compliant platform.
            </div>
          </div>
          <div className="w-50% desktop:pl-54 mobile:w-100% mobile:px-20 mobile:pb-44">
            <Image
              src="/images/backgrounds/product_Acorn.svg"
              type="img"
              className="desktop:h-478 desktop:w-851 mobile:h-168 mobile:w-311"
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className={` desktop:pt-81 laptop:pt-81 mobile:w-100% global-collapse mobile:px-20 desktop:px-180 ${
          component == "PAM"
            ? "desktop:hidden laptop:hidden"
            : component == "ACCORN"
            ? "desktop:hidden laptop:hidden"
            : ""
        }`}
      >
        <div className="mobile:text-s22l26_4 desktop:hidden laptop:hidden mobile:text-252525 font-bold mobile:text-center text-s45l54 desktop:pl-40 desktop:pt-50">
          FAQs
        </div>
        <div className="mobile:text-s20l24 desktop:hidden laptop:hidden text-s30l36 text-000000 pb-20 mobile:text-s14l16_8 mobile:pb-20 mobile:text-center mobile:pt-16 desktop:pl-40 desktop:pt-20 desktop:font-semibold">
          Need help ? We got you covered.
        </div>
        <div className="border-2 border-8CC63E">
          <div className="mobile:text-s22l26_4 mobile:hidden mobile:text-252525 font-bold mobile:text-center text-s45l54 desktop:pl-40 desktop:pt-50">
            FAQs
          </div>
          <div className="mobile:text-s20l24 mobile:hidden text-s30l36 text-000000 pb-20 mobile:text-s14l16_8 mobile:pb-20 mobile:text-center mobile:pt-16 desktop:pl-40 desktop:pt-20 desktop:font-semibold">
            Need help ? We got you covered.
          </div>
          <div className=" border-8CC63E mobile:w-100% border-b-0">
            <Collapse
              accordion
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
              <Panel
                className="text-252525 desktop:text-s24l29 laptop:text-s24l29 mobile:text-s14l21 desktop:p-30 laptop:p-30 font-semibold"
                header={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit? "
                }
              >
                <p className="mobile:text-6B6B6B desktop:text-525252 laptop:text-525252 laptop:text-s20l150 mobile:text-s12l18 desktop:text-s20l150 font-normal desktop:pr-460 laptop:pr-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </Panel>
              <Panel
                className="text-252525 desktop:text-s24l29 laptop:text-s24l29 mobile:text-s14l21 desktop:p-30 laptop:p-30 font-semibold"
                header={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit? "
                }
              >
                <p className="mobile:text-6B6B6B desktop:text-525252 laptop:text-525252 laptop:text-s20l150 mobile:text-s12l18 desktop:text-s20l150 font-normal desktop:pr-460 laptop:pr-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </Panel>
              <Panel
                className="text-252525 desktop:text-s24l29 laptop:text-s24l29 mobile:text-s14l21 desktop:p-30 laptop:p-30 font-semibold"
                header={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit? "
                }
              >
                <p className="mobile:text-6B6B6B desktop:text-525252 laptop:text-525252 laptop:text-s20l150 mobile:text-s12l18 desktop:text-s20l150 font-normal desktop:pr-460 laptop:pr-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </Panel>
              <Panel
                className="text-252525 desktop:text-s24l29 laptop:text-s24l29 mobile:text-s14l21 desktop:p-30 laptop:p-30 font-semibold"
                header={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit? "
                }
              >
                <p className="mobile:text-6B6B6B desktop:text-525252 laptop:text-525252 laptop:text-s20l150 mobile:text-s12l18 desktop:text-s20l150 font-normal desktop:pr-460 laptop:pr-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
      {/* more queries */}
      <div className="flex mobile:flex-col w-100% desktop:py-100 laptop:py-100 px-181 mobile:px-20 mobile:pt-40">
        <div className="flex flex-col desktop:w-50% laptop:w-50% mobile:w-100%">
          <div className="desktop:text-s45l45 laptop:text-s45l45 mobile:text-s22l33 font-bold text-252525 pb-26">
            Leave a thought
          </div>
          <div className="w-100% px-55 desktop:hidden laptop:hidden">
            <Image
              src="/images/backgrounds/queries-img.svg"
              height={400}
              width={480}
            />
          </div>
          <div className="pt-32 pb-50 custom-textaria mobile:hidden">
            <TextArea
              rows={4}
              placeholder="Enter your thoughts or suggestions"
              bordered={false}
              style={{ height: "132px" }}
            />
          </div>
          <div className="pt-32 pb-50 custom-textaria-m desktop:hidden laptop:hidden">
            <TextArea
              rows={4}
              placeholder="Enter your thoughts or suggestions"
              bordered={false}
              style={{ height: "132px" }}
            />
          </div>
          <div></div>
          <div>
            <div className="button desktop:w-124 laptop:w-124 mobile:w-166 desktop:text-s22l26_4 laptop:text-s22l26_4 mobile:text-s14l16_8 px-28 desktop:py-13 laptop:py-13 mobile:py-10">
              Submit
            </div>
          </div>
        </div>
        <div className="w-50% pl-183 mobile:hidden">
          <Image
            src="/images/backgrounds/queries-img.svg"
            height={400}
            width={480}
          />
        </div>
      </div>
      {/* Features We Offer */}
      <div className="h-670 bg-current px-181 laptop:px-80 mobile:px-10 mobile:h-auto">
        <div className="text-252525 ls--1_5 text-s44l52_8 mobile:text-s20l24 font-bold pt-80 mobile:pb-40 pb-60 flex justify-center">
          Features We Offer
        </div>
        <div className="pb-60">
          <div className="mobile:hidden cust-pagination">
            <Carousel
              itemsToShow={3}
              itemPadding={[0, 20, 0, 20]}
              enableMouseSwipe={false}
              // pagination={page}
              pagination={true}
              initialActiveIndex={1}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className="flex pageindex">
                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      setActiveIndex2(pages);
                      if (activeindex2 == 0) {
                        setPage(false);
                      } else {
                        setPage(true);
                      }
                      return (
                        <div
                          className={`mt-60 w-10 h-10 rounded-full mr-6 ${
                            isActivePage ? "bg-525252" : "bg-active"
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
              renderArrow={({ type, onClick, isEdge }) => {
                const pointer =
                  type === consts.PREV ? (
                    <i className="fa fa-angle-left text-s30l36 text-252525 flex items-center justify-center border border-252525 rounded-full h-63 w-63" />
                  ) : (
                    <i className="fa fa-angle-right text-s30l36 text-252525 flex items-center justify-center border border-252525 rounded-full h-63 w-63" />
                  );
                return (
                  <button onClick={onClick} disabled={isEdge}>
                    {pointer}
                  </button>
                );
              }}
            >
              <div className="bg-current my-10 hover:bg-FFFFFF desktop:pt-50 hover:border-0 Product flex flex-col items-center w-311 h-334 p-28 border border-8CC63E ">
                <Image
                  src="/images/icons/product-omni.svg"
                  height={110}
                  width={273}
                />
                <div className="font-semibold text-252525 text-center text-s24l29 mt-24">
                  Mintoak OMNI
                </div>
                <div className="w-100% text-252525 text-center mt-30 text-s19l30">
                  Handle all types of digital payments on a single platform
                </div>
              </div>

              <div className="bg-current my-10 hover:bg-FFFFFF desktop:pt-50 hover:border-0 Product flex flex-col items-center w-311 h-334 p-28 border border-8CC63E ">
                <Image
                  src="/images/icons/product-pay_later.svg"
                  height={110}
                  width={273}
                />
                <div className="font-semibold text-252525 text-center text-s24l29 mt-24">
                  Pay Later
                </div>
                <div className="text-252525 text-center mt-30 text-s19l30">
                  Track customer dues on a robust digital register
                </div>
              </div>
              <div className="bg-current my-10 hover:bg-FFFFFF desktop:pt-50 hover:border-0 Product flex flex-col items-center w-311 h-334 p-28 border border-8CC63E">
                <Image
                  src="/images/icons/product-iku.svg"
                  height={110}
                  width={273}
                />
                <div className="font-semibold text-252525 text-center text-s24l29 mt-24">
                  Mintoak IKU
                </div>
                <div className="text-252525 text-center mt-30 text-s19l30 ls--1_5">
                  Perform instant customer recognition and segmentation
                </div>
              </div>
            </Carousel>
          </div>
          <div className="desktop:hidden laptop:hidden">
            <Carousel
              itemsToShow={1}
              // verticalMode
              itemPadding={[0, 0, 0, 0]}
              enableMouseSwipe={true}
              pagination={true}
              initialActiveIndex={1}
              showArrows={false}
              outerSpacing={0}
              style={{ width: "100%" }}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className="flex pageindex">
                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      setActiveIndex(activePage);
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
              <div
                key={activeindex}
                className={`w-256 h-211 flex flex-col items-center p-28 border border-C4C4C4 absolute ${
                  activeindex === 0
                    ? "bg-FFFFFF border border-46AC34 relative shadow-slideShadow mobile:h-210 mobile:w-256"
                    : "left-280 bottom-0 opacity-60 mobile:h-180 top-15"
                }`}
              >
                <Image
                  src="/images/icons/product-omni.svg"
                  height={110}
                  width={273}
                />
                <div className="font-bold text-252525 mobile:text-s16l19 text-center text-s24l29 mt-24">
                  Mintoak OMNI
                </div>
                <div className="text-252525 text-center mt-12 mobile:text-s14l17">
                  Handle all types of digital payments on a single platform
                </div>
              </div>
              <div
                className={`w-256 h-211 flex flex-col items-center p-28 border border-C4C4C4 absolute ${
                  activeindex === 1
                    ? "bg-FFFFFF border border-46AC34 relative shadow-slideShadow mobile:h-210 mobile:w-256"
                    : activeindex === 0
                    ? "z-minus1 left-220 opacity-60 mobile:h-180 top-15"
                    : "z-minus1 right-220 opacity-60 mobile:h-180 top-15"
                }`}
              >
                <Image
                  src="/images/icons/product-pay_later.svg"
                  height={110}
                  width={273}
                />
                <div className="font-bold text-252525 mobile:text-s16l19 text-center text-s24l29 mt-24">
                  Pay Later
                </div>
                <div className="text-252525 text-center mt-12 mobile:text-s14l17">
                  Track customer dues on a robust digital register
                </div>
              </div>
              <div
                className={`w-256 h-211 flex flex-col items-center mobile:h-191 p-28 border border-C4C4C4 absolute ${
                  activeindex === 2
                    ? "bg-FFFFFF border border-46AC34 relative shadow-slideShadow mobile:h-210 mobile:w-256"
                    : "right-280 bottom-0 z-minus1 opacity-60 mobile:h-180 top-15"
                }`}
              >
                <Image
                  src="/images/icons/product-iku.svg"
                  height={148}
                  width={273}
                />
                <div className="font-bold text-252525 mobile:text-s16l19 text-center text-s24l29 mt-24">
                  Mintoak IKU
                </div>
                <div className="text-252525 text-center mt-12 mobile:text-s14l17">
                  Perform instant customer recognition and segmentation
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
