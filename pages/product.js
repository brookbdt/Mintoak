import Image from "../components/helpers/Image";
import { Chrono } from "react-chrono";
import { Collapse, Input } from "antd";
import Carousel from "react-elastic-carousel";
import { consts } from "react-elastic-carousel";
import { useEffect, useState } from "react";

const { Panel } = Collapse;
const { TextArea } = Input;

export default function Product() {
  const [activeindex, setActiveIndex] = useState();

  const itemsToShow = 1;

  return (
    <div className="desktop:h-fit laptop:h-fit w-100% bg-home-top mobile:w-100%">
      {/* Top layout with resp */}
      <div className="relative top-bg-container flex w-100% border-b border-A4D77A mobile:flex-col mobile:border-0">
        <div className="desktop:w-50% desktop:pb-88 laptop:pb-88 laptop:w-50%  pr-50 pt-175 z-10 mobile:w-100% mobile:p-20 ">
          <div className="w-100%">
            <Image
              src="/images/icons/aim.svg"
              type="img"
              className="h-150 w-150 ml-161 mobile:ml-0 mobile:h-67 mobile:w-67"
            />
          </div>
          <div className="pl-181 mobile:pl-10 text-s56l67 mobile:text-s36l43 font-bold text-252525 w-100% desktop:pt-45 laptop:pt-45 mobile:pt-10">
            Mintoak AIM
          </div>
          <div className="pl-181 mobile:pl-10 desktop:text-s44l52 laptop:text-s44l52 mobile:text-s24l29 pr-80 pt-16 text-252525 shrink-0">
            Analytics, Insights & Metrics
          </div>
          <div className="pl-181 mobile:pl-10 text-s20l30 mobile:text-s14l24 desktop:pt-32 laptop:pt-32 mobile:py-16 pr-350 mobile:pr-0 text-525252 shrink-0">
            A real time interactive business performance dashboard for the
            business owner.
          </div>
        </div>
        <div className="desktop:w-50% laptop:w-50% flex items-start justify-center desktop:px-50 desktop:pt-175 desktop:pb-90 mobile:w-100%">
          <div className="flex flex-col justify-between h-100% mobile:h-270 w-100% mobile:px-20">
            <div className="flex items-center ">
              <div>
                <Image
                  src="/images/icons/aim.svg"
                  type="img"
                  className="h-120 w-120 mobile:h-72 mobile:w-72"
                />
              </div>
              <div className="text-252525 text-s24l36 mobile:text-s16l24 pl-16 w-300 mobile:w-142 font-semibold">
                Credit-to-Bank Information
              </div>
            </div>
            <div className="flex items-center ">
              <div>
                <Image
                  src="/images/icons/aim.svg"
                  type="img"
                  className="h-120 w-120 mobile:h-72 mobile:w-72"
                />
              </div>
              <div className="text-252525 text-s24l36 mobile:text-s16l24 pl-16 w-355 mobile:w-200 font-semibold">
                Interactive Dashboards & Business Insights
              </div>
            </div>
            <div className="flex items-center ">
              <div>
                <Image
                  src="/images/icons/aim.svg"
                  type="img"
                  className="h-120 w-120 mobile:h-72 mobile:w-72"
                />
              </div>
              <div className="text-252525 text-s24l36 mobile:text-s16l24 pl-16 w-370 mobile:w-268 font-semibold">
                Multi-location Consolidated View & Location-level Drill Down
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Time to Get Onboard with Mintoak */}
      <div className="pb-140 w-100% mobile:mt-0 mobile:pb-0">
        <div className="flex w-100% mobile:hidden pl-180 laptop:pl-100">
          <div className="w-33% mt-251">
            <div className="text-s45l45 font-bold">
              Track your business progress with our interactive dashboard:
            </div>
            <div className="pt-32 text-s20l30">
              Get real time updates on your business, such as total sales,
              transaction history, one view across payment modes, customizable
              transaction reports, insights on new and repeat customers and also
              customer feedback. Get performance trends to see how your business
              has performed over a period of time.
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
          <div className="pt-92 px-30 pl-20 pr-25 pb-65">
            <div className="mobile:text-s22l33 font-bold w-245">
              Track your business progress with our interactive dashboard:
            </div>
            <div className="mobile:text-s14l21 pt-18">
              Get real time updates on your business, such as total sales,
              transaction history, one view across payment modes, customizable
              transaction reports, insights on new and repeat customers and also
              customer feedback. Get performance trends to see how your business
              has performed over a period of time.
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
            <div className="flex justify-center pt-45 m-auto">
              <Image
                src="/images/backgrounds/merchant-mobile.svg"
                type="img"
                height={500}
                width={270}
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
      {/* accordian  */}
      <div className=" desktop:pt-81 laptop:pt-81 px-181 mobile:px-20 mobile:w-100% global-collapse-p">
        <div className="desktop:pb-58 desktop:pl-40 desktop:pt-50 mobile:ml-0 mobile:mt-96 border border-A4D77A border-b-0 mobile:border-0">
          <div className="text-252525 text-s45l54 font-bold mobile:text-s22l26_4 mobile:align-center mobile:flex mobile:justify-center mobile:font-bold">
            FAQ's
          </div>
          <div className="font-semibold text-000000 text-s30l36 mobile:text-s14l24  mobile:align-center mobile:flex mobile:justify-center mb-48 mt-20 mobile:mt-20 mobile:mb-0 mobile:font-semibold">
            Curious about Mintoak? We’ve got you covered.
          </div>
        </div>
        <div className="border border-A4D77A border-t-0 mobile:w-100% border-b-0 mobile:border-t">
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              }
            >
              <p className="mobile:text-6B6B6B desktop:text-525252 laptop:text-525252 laptop:text-s20l150 mobile:text-s12l18 desktop:text-s20l150 font-normal ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt?
              </p>
            </Panel>
            <Panel
              className="text-252525 desktop:text-s24l29 laptop:text-s24l29 mobile:text-s14l21 desktop:p-30 laptop:p-30 font-semibold"
              header={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              }
            >
              <p className="mobile:text-6B6B6B desktop:text-525252 laptop:text-525252 laptop:text-s20l150 mobile:text-s12l18 desktop:text-s20l150 font-normal ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt?
              </p>
            </Panel>
            <Panel
              className="text-252525 desktop:text-s24l29 laptop:text-s24l29 mobile:text-s14l21 desktop:p-30 laptop:p-30 font-semibold"
              header={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              }
            >
              <p className="mobile:text-6B6B6B desktop:text-525252 laptop:text-525252 laptop:text-s20l150 mobile:text-s12l18 desktop:text-s20l150 font-normal ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt?
              </p>
            </Panel>
            <Panel
              className="text-252525 desktop:text-s24l29 laptop:text-s24l29 mobile:text-s14l21 desktop:p-30 laptop:p-30 font-semibold"
              header={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              }
            >
              <p className="mobile:text-6B6B6B desktop:text-525252 laptop:text-525252 laptop:text-s20l150 mobile:text-s12l18 desktop:text-s20l150 font-normal ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt?
              </p>
            </Panel>
            <Panel
              className="text-252525 desktop:text-s24l29 laptop:text-s24l29 mobile:text-s14l21 desktop:p-30 laptop:p-30 font-semibold"
              header={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              }
            >
              <p className="mobile:text-6B6B6B desktop:text-525252 laptop:text-525252 laptop:text-s20l150 mobile:text-s12l18 desktop:text-s20l150 font-normal ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt?
              </p>
            </Panel>
          </Collapse>
        </div>
        <div className="flex items-center justify-center mt-40 mobile:mt-22">
          <div className="text-s24l29 text-6B6B6B mobile:text-s14l16_8">
            Still have unanswered questions?
          </div>
          <div className="text-s22l26_4 text-46AC34 mobile:text-8DBF52 mobile:text-s12l18 border-b border-46AC34 ml-10 cursor-pointer font-bold">
            View all
          </div>
        </div>
      </div>
      {/* more queries */}
      <div className="flex mobile:flex-col w-100% desktop:py-100 laptop:py-100 px-181 mobile:px-20 mobile:pt-81">
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
          <div className="pt-32 pb-50 custom-textaria-m desktop:hidden">
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
      <div className="h-670 bg-current px-181 mobile:px-10 mobile:h-auto">
        <div className="text-252525 ls--1_5 text-s44l52_8 mobile:text-s20l24 font-bold pt-80 mobile:pb-40 pb-60 flex justify-center">
          Features We Offer
        </div>
        <div className="pb-60">
          <div className="mobile:hidden cust-pagination">
            <Carousel
              itemsToShow={3}
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
              <div className="bg-current hover:bg-FFFFFF hover:border-0 hover:shadow-mediaCard flex flex-col items-center w-311 h-334 p-28 border border-8CC63E ">
                <Image src="/images/icons/omni.svg" height={110} width={273} />
                <div className="font-semibold text-252525 text-center text-s24l29 mt-24">
                  Mintoak OMNI
                </div>
                <div className="w-100% text-252525 text-center mt-30 text-s20l30">
                  Handle all types of digital payments on a single platform
                </div>
              </div>

              <div className="bg-current hover:bg-FFFFFF hover:border-0 hover:shadow-mediaCard flex flex-col items-center w-311 h-334 p-28 border border-8CC63E ">
                <Image
                  src="/images/icons/pay_later.svg"
                  height={110}
                  width={273}
                />
                <div className="font-semibold text-252525 text-center text-s24l29 mt-24">
                  Pay Later
                </div>
                <div className="text-252525 text-center mt-30 text-s20l30">
                  Track customer dues on a robust digital register
                </div>
              </div>
              <div className="bg-current hover:bg-FFFFFF hover:border-0 hover:shadow-mediaCard flex flex-col items-center w-311 h-334 p-28 border border-8CC63E">
                <Image src="/images/icons/iku.svg" height={148} width={273} />
                <div className="font-semibold text-252525 text-center text-s24l29 mt-24">
                  Mintoak IKU
                </div>
                <div className="text-252525 text-center mt-30 text-s20l30 ls--1_5">
                  Perform instant customer recognition and segmentation
                </div>
              </div>
            </Carousel>
          </div>
          <div className=" desktop:hidden laptop:hidden">
            <Carousel
              itemsToShow={itemsToShow}
              // verticalMode
              itemPadding={[0, 0, 30, 0]}
              enableMouseSwipe={true}
              pagination={true}
              initialActiveIndex={1}
              showArrows={false}
              outerSpacing={0}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className="flex">
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
                className={`w-256 h-211 flex flex-col items-center mobile:h-191 p-28 border border-C4C4C4 ${
                  activeindex === 0
                    ? "bg-FFFFFF border border-46AC34 relative shadow-slideShadow"
                    : ""
                }`}
              >
                <Image src="/images/icons/omni.svg" height={110} width={273} />
                <div className="font-bold text-252525 mobile:text-s16l19 text-center text-s24l29 mt-24">
                  Mintoak OMNI
                </div>
                <div className="text-252525 text-center mt-12 mobile:text-s14l17">
                  Handle all types of digital payments on a single platform
                </div>
              </div>
              <div
                className={`w-256 h-211 flex flex-col items-center mobile:h-191 p-28 border border-C4C4C4 ${
                  activeindex === 1
                    ? "bg-FFFFFF border border-46AC34 relative shadow-slideShadow"
                    : ""
                }`}
              >
                <Image
                  src="/images/icons/pay_later.svg"
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
                className={`w-256 h-211 flex flex-col items-center mobile:h-191 p-28 border border-C4C4C4 ${
                  activeindex === 2
                    ? "bg-FFFFFF border border-46AC34 relative shadow-slideShadow"
                    : ""
                }`}
              >
                <Image src="/images/icons/iku.svg" height={148} width={273} />
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
