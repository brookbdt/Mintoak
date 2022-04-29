import { useEffect, useState } from "react";
import Image from "../components/helpers/Image";
import Carousel from "react-elastic-carousel";
import { consts } from "react-elastic-carousel";
import { API, endpoints } from "../components/helpers/API";
import { Row, Col, Input, Select, Pagination } from "antd";
import Request_Demo from "./request_demo";
import ImgsViewer from "react-images-viewer";

export default function Career() {
  const { Option } = Select;
  const [homeBannerResp, setHomeBannerResp] = useState({});
  const [careersBannerResp, setCareersBannerResp] = useState(null);
  const [careerPageLifeMintoakResp, setCareerPageLifeMintoakResp] =
    useState(null);
  const [
    careerListingValuePropositionResp,
    setCareerListingValuePropositionResp,
  ] = useState(null);
  const [searchJob, setSearchJob] = useState("");
  const [demoPopup, setDemoPopup] = useState(false);
  const [onBoardData, setOnBoardData] = useState([]);
  const [imageViewer, setImageViewer] = useState(false);
  const [imageViewerData, setImageViewerData] = useState([]);

  const [jobOpenings, setJobOpenings] = useState([
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mumbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mumbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mumbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mumbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mumbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mumbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mumbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mumbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mumbai",
    },
  ]);
  useEffect(() => {
    // home_banner
    API({
      url: endpoints.home_banner,
    }).then((resp) => {
      if (!resp.message) {
        setHomeBannerResp(resp);
      }
    });
    API({
      url: endpoints.careers_banner,
    }).then((resp) => {
      if (!resp.message) {
        setCareersBannerResp(resp);
      }
    });
    API({
      url: endpoints.career_page_life_mintoak,
    }).then((resp) => {
      if (!resp.message) {
        setCareerPageLifeMintoakResp(resp);
      }
    });
    API({
      url: endpoints.career_listing_value_proposition,
    }).then((resp) => {
      if (!resp.message) {
        setCareerListingValuePropositionResp(resp);
      }
    });

    API({
      url: endpoints.career_page_events,
    }).then((resp) => {
      if (!resp.message) {
        setOnBoardData(resp);
      }
    });
  }, []);
  const TogglePopup = () => {
    setDemoPopup(false);
  };

  const viewImage = (status, item) => {
    setImageViewer(status);
    let tempData = [];
    if (item.EventImage.length) {
      tempData.push(
        { "src": "http://uat-content.mintoak.com" + item.EventImage[0].url }
      )
    }
    if (item.EventImage2.length) {
      tempData.push(
        { "src": "http://uat-content.mintoak.com" + item.EventImage2[0].url }
      )
    }
    if (item.EventImage3.length) {
      tempData.push(
        { "src": "http://uat-content.mintoak.com" + item.EventImage3[0].url }
      )
    }
    if (item.EventImage4.length) {
      tempData.push(
        { "src": "http://uat-content.mintoak.com" + item.EventImage4[0].url }
      )
    }
    if (item.EventImage5.length) {
      tempData.push(
        { "src": "http://uat-content.mintoak.com" + item.EventImage5[0].url }
      )
    }
    setImageViewerData(tempData);
  }
  return (
    <div className="desktop:h-fit laptop:h-fit w-100% bg-home-top mobile:w-100%">
      <div className="relative top-bg-container border-b border-A4D77A">
        <div className="w-100% h-100%">
          <Image
            src={careersBannerResp?.banner}
            type="img"
            className="absolute object-cover mobile:hidden h-100% w-100% border-b border-A4D77A"
          />
          <Image
            src={careersBannerResp?.mobile_banner}
            className="absolute desktop:hidden laptop:hidden "
            type="img"
          />
        </div>
        <div className="mobile:h-585 desktop:w-50% relative laptop:w-55% desktop:py-150 desktop:px-100 laptop:p-100 tablet:w-80% tablet:p-30 px-20 mobile:pt-40 pb-40 z-10">
          <div className="text-s44l120 mobile:text-s24l28_8 text-252525 shrink-0">
            {careersBannerResp?.Title}
          </div>
          <div className="text-s56l124_5 mobile:text-s34l42 font-bold text-252525 shrink-0 mobile:pt-2">
            {careersBannerResp?.title2}
          </div>
          <div className="text-s44l120 mobile:text-s24l28_8 text-252525 shrink-0 mobile:pt-2">
            {careersBannerResp?.title3}
          </div>
          <div className="text-s24l150 mobile:text-s14l24 text-525252 shrink-0 mt-37 mobile:mt-16">
            {careersBannerResp?.Description}
          </div>
          <div
            onClick={() => setDemoPopup(true)}
            className="button w-216 mobile:w-166 mobile:h-40 mobile:text-s14l17 h-54 mt-40 mobile:mt-16 cursor-pointer z-20"
          >
            {careersBannerResp?.CTA}
          </div>
        </div>

      </div>
      <div className="py-156 mobile:py-80 flex justify-center items-center">
        <div className="w-full">
          <div className="desktop:text-s44l45 laptop:text-s44l45 mobile:text-s22l33 font-bold flex justify-center">
            Why join Mintoak?
          </div>
          <div className="desktop:flex laptop:flex desktop:pt-69 laptop:pt-69 laptop:justify-center desktop:justify-center mobile:pt-40 mobile:px-25 w-100% desktop:px-100 laptop:px-100">
            {careerListingValuePropositionResp &&
              careerListingValuePropositionResp.map((item, index) => (
                <div
                  key={index}
                  className="desktop:flex-column desktop:mx-70 laptop:flex-column mobile:flex desktop:justify-center laptop:justify-center mobile:justify-start items-center mobile:py-15 "
                >
                  <div className="flex justify-center align-center">
                    <Image
                      src={item.icon}
                      className="mobile:w-40 desktop:w-72 laptop:w-72"
                      type="img"
                    />
                  </div>
                  <div className="mobile:hidden text-center mobile:text-left text-s24l36 font-semibold mobile:pl-19 laptop:pt-49 desktop:pt-49 desktop:text-center desktop:w-270 laptop:w-260 mobile:text-s16l24 mobile:pr-30">
                    {item.Description}
                  </div>
                  <div className="mobile:hidden text-center mobile:text-left text-s24l36 font-semibold mobile:pl-19 desktop:text-center desktop:w-270 laptop:w-260 mobile:text-s16l24 mobile:pr-30">
                    {item.Description2}
                  </div>
                  <div className="mobile:hidden text-center mobile:text-left text-s24l36 font-semibold mobile:pl-19 desktop:text-center desktop:w-270 laptop:w-260 mobile:text-s16l24 mobile:pr-30">
                    {item.Description3}
                  </div>
                  <div className="desktop:hidden laptop:hidden text-center mobile:text-left text-s24l36 font-semibold mobile:pl-19 desktop:text-center desktop:w-270 laptop:w-260 mobile:text-s16l24 mobile:pr-30">
                    {item.Description} {item.Description2} {item.Description3}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-footer mb-100 mobile:mb-0 w-100%">
        <div className="desktop:flex laptop:flex items-center w-100%  mobile:px-20">
          <div className="flex mobile:block flex-col w-50% mobile:w-100% justify-center desktop:pl-180 laptop:pl-100 desktop:py-100 laptop:py-100 desktop:pr-50 laptop:pr-50">
            <div className="flex items-center desktop:text-s36l43 laptop:text-s36l43 mobile:text-s22l33 font-bold text-F1F1F1 desktop:pb-40 laptop:pb-40 mobile:pb-30 pt-40">
              Life at Mintoak
            </div>
            <div className="laptop:text-s20l30 desktop:text-s20l30 mobile:text-s14l24 text-F1F1F1 laptop:text-left desktop:pr-80">
              <span className="font-normal text-s20l30 text-F1F1F1 mobile:text-s14l21 ">
                {careerPageLifeMintoakResp?.Description}
              </span>
            </div>
          </div>
          <div className="w-50% mobile:w-100%  flex items-center justify-center mobile:pt-30 mobile:pb-41">
            <Image
              src="/images/backgrounds/teamwork.svg"
              type="img"
              // height={650}
              // width={486}
              className="w-100% h-fit desktop:py-60 desktop:pl-60 desktop:pr-180 laptop:py-60 laptop:pl-60 laptop:pr-100"
            />
          </div>
        </div>
      </div>

      <div className="desktop:px-180 laptop:px-180 mt-150 mobile:px-20 mobile:py-80 bg-F6FAF2">
        <div className="text-center font-bold text-s44l45 pb-60 mobile:text-s22l33 mobile:px-50 mobile:pb-40">
          Explore opportunities suited for you
        </div>
        <div className="search-input mobile:my-12">
          <Input
            placeholder="Ex. Product Manager"
            // className="h-60 bg-DFEFD4"
            value={searchJob}
            onChange={(e) => setSearchJob(e.target.value)}
            prefix={
              <Image
                src="/images/icons/search-icon.svg"
                type="img"
                className="h-26 w-26"
              />
            }
          />
        </div>
        {/* <div className="custom-row"> */}
        <Row gutter={24} className="my-30 mobile:mt-12 mobile:mb-16">
          <Col xs={24} md={8} className="mobile:my-12">
            <div className="filter-selection">
              <Select
                showArrow={true}
                mode="multiple"
                dropdownStyle={{
                  border: "1px solid #DFEFD4",
                  boxSizing: "border-box",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  background: "#DFEFD4",
                }}
                placeholder="All job title"
                style={{ fontWeight: "bold" }}
              >
                <Option
                  value={"All"}
                  style={{
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  }}
                  className="w-100% career-selector p-0"
                >
                  Select
                  <div className="w-100% flex justify-end absolute pr-24 ">
                    <div className="dammi-space "></div>
                  </div>
                </Option>
              </Select>
            </div>
          </Col>
          <Col xs={24} md={8} className="mobile:my-12">
            <div className="filter-selection">
              <Select
                showArrow={true}
                mode="multiple"
                dropdownStyle={{
                  border: "1px solid #DFEFD4",
                  boxSizing: "border-box",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  background: "#DFEFD4",
                }}
                placeholder="All Location"
                style={{ fontWeight: "bold" }}
              >
                <Option
                  value={"All"}
                  style={{
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  }}
                  className="w-100% career-selector p-0"
                >
                  Select
                  <div className="w-100% flex justify-end absolute pr-24 ">
                    <div className="dammi-space "></div>
                  </div>
                </Option>
              </Select>
            </div>
          </Col>
          <Col xs={24} md={8} className="mobile:my-12">
            <div className="filter-selection ">
              <Select
                mode="multiple"
                showArrow={true}
                placeholder="All Departments"
                style={{ fontWeight: "bold" }}
                dropdownStyle={{
                  border: "1px solid #DFEFD4",
                  boxSizing: "border-box",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  background: "#DFEFD4",
                }}
              >
                <Option
                  value={"All"}
                  style={{
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  }}
                  className="w-100% career-selector p-0"
                >
                  All
                  <div className="w-100% flex justify-end absolute pr-24 ">
                    <div className="dammi-space "></div>
                  </div>
                </Option>
                <Option
                  value={"Tech & Development"}
                  style={{
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  }}
                  className="w-100% career-selector p-0"
                >
                  Tech & Development
                  <div className="w-100% flex justify-end absolute pr-24">
                    <div className="dammi-space "></div>
                  </div>
                </Option>
                <Option
                  value={"Product"}
                  style={{
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  }}
                  className="w-100% career-selector p-0"
                >
                  Product
                  <div className="w-100% flex justify-end absolute pr-24">
                    <div className="dammi-space "></div>
                  </div>
                </Option>
                <Option
                  value={"Finance"}
                  style={{
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  }}
                  className="w-100% career-selector p-0"
                >
                  Finance
                  <div className="w-100% flex justify-end absolute pr-24">
                    <div className="dammi-space "></div>
                  </div>
                </Option>
                <Option
                  value={"Client Delivery"}
                  style={{
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  }}
                  className="w-100% career-selector p-0"
                >
                  Client Delivery
                  <div className="w-100% flex justify-end absolute pr-24">
                    <div className="dammi-space "></div>
                  </div>
                </Option>
              </Select>
            </div>
          </Col>
        </Row>
        {/* </div> */}
        <div className="text-s18l21_6 font-normal text-525252 pb-20 mobile:pb-10 mobile:text-s14l16_8">
          Showing 18 job openings in Mumbai
        </div>
        {/* <div className="flex w-full justify-between"> */}
        {/* <div className="custom-row"> */}
        <Row gutter={24}>
          {jobOpenings
            .filter((d) =>
              d.designation.toLowerCase().includes(searchJob.toLowerCase())
            )
            ?.map((data, index) => (
              <Col xs={24} md={8} className="mb-30" key={index}>
                <div className="px-20 pt-20 shadow-sm hover:bg-8FC055 card-shadow-career border border-A8FC055 w-100% h-100% cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="desktop:text-s20l30 laptop:text-s20l24 mobile:text-s12l18 text-A8FC055">
                        {data.department}
                      </div>
                      <div className="desktop:text-s30l33 mobile:text-s16l20 laptop:text-s30l30 text-252525 font-semibold laptop:pt-5">
                        {data.designation}
                      </div>
                    </div>
                    <div>
                      <Image src="/images/icons/file.svg" type="img" />
                    </div>
                  </div>
                  <div className="flex items-center desktop:pt-46 laptop:pt-30 pb-20 mobile:text-s12l24 w-100%">
                    <span className="bg-8FC055 py-6 mobile:py-6 mobile:px-9 rounded-lg border-box px-13 flex items-center mr-14">
                      <Image
                        src="/images/icons/bag.svg"
                        type="img"
                        className="h-25 w-25"
                      />
                      <span className="pl-5 mobile:text-s12l24 text-s20l40">
                        {data.timing}
                      </span>
                    </span>
                    <span className="bg-8FC055 py-6 mobile:py-6 mobile:px-9 rounded-lg px-13 flex items-center">
                      <Image
                        src="/images/icons/location.svg"
                        type="img"
                        className="h-25 w-25"
                      />
                      <span className="pl-5 mobile:text-s12l24 text-s20l40">
                        {data.location}
                      </span>
                    </span>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
        <div className="custom-pagination flex justify-center">
          <Pagination defaultCurrent={1} total={30} />
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>

      <div className="desktop:px-180 laptop:px-180 desktop:py-150 laptop:py-150 w-100% bg-F6FAF2">
        <div className="text-center font-bold mobile:text-s22l33 desktop:text-s44l45 laptop:text-s44l45 pb-60 mobile:pb-20 mx-70">
          There’s a lot on board for our employees!
        </div>
        <div className="flex justify-center items-center mobile:px-0 mobile:mb-0 mobile:hidden">
          <Carousel
            itemsToShow={3}
            itemPadding={[0, 21, 0, 21]}
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
                <button onClick={onClick} disabled={isEdge}>
                  {pointer}
                </button>
              );
            }}
          >
            {onBoardData.map((data, index) => (
              <div
                className="desktop:w-385 desktop:h-fit bg-FFFFFF board-shadow my-21"
                key={index}
              >
                <div className="pt-10 px-12" onClick={() => { viewImage(true, data); }}>
                  <Image
                    src={data?.EventImage[0]}
                    type="img"
                    className=" w-100% h-100% object-cover"
                  />
                </div>
                <div className="p-20">
                  <div className="desktop:text-s23_7l28_44 laptop:text-s23_7l28_44 mobile:text-s15_22l18_27 pb-12 font-semibold">
                    {data.Title}
                  </div>
                  <div className="text-s18l25 w-100% pr-80">
                    {data.Description}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="pb-80 w-100% flex flex-col items-center justify-around desktop:hidden laptop:hidden">
          <Carousel
            itemPadding={[0, 15]}
            itemsToShow={1}
            outerSpacing={0}
            showArrows={false}
            pagination={true}
            renderPagination={({
              type,
              pages,
              activePage,
              onClick,
              isEdge,
            }) => {
              const pointer = (
                <>
                  <div className="flex">
                    <i className="fa fa-angle-left text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
                    <i className="fa fa-angle-right text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
                  </div>
                </>
              );
              // );
              return (
                <button onClick={onClick} disabled={isEdge}>
                  {pointer}
                </button>
              );
              // return (
              // <div className="flex">
              //   {pages.map((page) => {
              //     const isActivePage = activePage === page;
              //     return (
              //       <div
              //         className={`bg-C4C4C4 w-6 h-6 rounded-full mr-6 ${isActivePage ? "bg-525252" : ""
              //           }`}
              //         key={page}
              //         onClick={() => onClick(page)}
              //         active={isActivePage}
              //       ></div>
              //     );
              //   })}
              // </div>
              // );
            }}
          >
            {onBoardData.map((data, index) => (
              <div className="bg-FFFFFF shadow-lg my-21" key={index}>
                <div className="pt-10 px-12">
                  {/* <Image
                      src="/images/backgrounds/img-11.svg"
                      width={"100%"}
                      type="img"
                    /> */}
                  <ImgsViewer
                    imgs={imageViewerData}
                    isOpen={imageViewer}
                    onClose={() => { setImageViewer(false); }}
                    onClickPrev={() => { }}
                    onClickNext={() => { }}
                  />
                </div>
                <div className="p-20">
                  <div className="font-semibold desktop:text-s23_7l28_44 laptop:text-s23_7l28_44 mobile:text-s15_22l18_27 pb-12">
                    {data.title}
                  </div>
                  <div className="text-s18l25">{data.description}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {demoPopup && (
        <Request_Demo triger={demoPopup} handleClose={TogglePopup} />
      )}
    </div>
  );
}
