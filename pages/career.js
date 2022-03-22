import { useEffect, useState } from "react";
import Image from "../components/helpers/Image";
import Carousel from "react-elastic-carousel";
import { consts } from "react-elastic-carousel";
import { Chrono } from "react-chrono";
import { API, endpoints } from "../components/helpers/API";
import { Row, Col, Input, Select, Pagination } from "antd";

export default function Career() {
  const { Option } = Select;
  const [homeBannerResp, setHomeBannerResp] = useState({});
  const [careersBannerResp, setCareersBannerResp] = useState(null);
  const [careerPageLifeMintoakResp, setCareerPageLifeMintoakResp] = useState(null);
  const [careerListingValuePropositionResp, setCareerListingValuePropositionResp] = useState(null);
  const [searchJob, setSearchJob] = useState("");
  const [onBoardData, setOnBoardData] = useState([
    {
      title: "Conference Day",
      description:
        "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit moo comprehensam ne, usu cu stet prompta reformidans. Est tation latine aliquip.",
    },
    {
      title: "Conference Day",
      description:
        "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit moo comprehensam ne, usu cu stet prompta reformidans. Est tation latine aliquip.",
    },
    {
      title: "Conference Day",
      description:
        "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit moo comprehensam ne, usu cu stet prompta reformidans. Est tation latine aliquip.",
    },
    {
      title: "Conference Day",
      description:
        "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit moo comprehensam ne, usu cu stet prompta reformidans. Est tation latine aliquip.",
    },
    {
      title: "Conference Day",
      description:
        "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit moo comprehensam ne, usu cu stet prompta reformidans. Est tation latine aliquip.",
    },
  ]);
  const [jobOpenings, setJobOpenings] = useState([
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mimbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mimbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mimbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mimbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mimbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mimbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mimbai",
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
    // career_listing_value_proposition
  }, []);
  return (
    <div className="desktop:h-fit laptop:h-fit w-100% bg-8FC055 mobile:w-100%">
      <div className="relative top-bg-container border-b-2 border-A4D77A">
        <Image
          src={homeBannerResp?.Illustration}
          className="absolute z-minus1 mobile:hidden"
        />
        <div className="desktop:w-50%  laptop:w-55% desktop:py-150 desktop:px-100 laptop:p-100 tablet:w-80% tablet:p-30 px-20 mobile:pt-40 pb-40 z-10">
          <div className="text-s44l120 mobile:text-s24l28_8 text-252525 shrink-0">
            {careersBannerResp?.Title}
          </div>
          <div className="text-s56l124_5 mobile:text-s34l42 font-bold text-252525 shrink-0">
            {/* a new direction */}
          </div>
          <div className="text-s44l120 mobile:text-s24l28_8 text-252525 shrink-0">
            {/* with Mintoak */}
          </div>
          <div className="text-s24l150 mobile:text-s14l24 text-525252 shrink-0 mt-37">
            {careersBannerResp?.Description}
            {/* Explore various opportunities for enthusiastic, innovative and
            dedicated individuals to join our team. */}
          </div>
          <div className="button w-216 mobile:w-166 mobile:h-40 mobile:text-s14l17 h-54 mt-40 cursor-pointer z-20">
            {careersBannerResp?.CTA}
          </div>
        </div>
        <Image
          src={homeBannerResp?.mobilebanner}
          className=" block relative desktop:hidden laptop:hidden"
          type="img"
        />
      </div>

      <div className="py-156 mobile:py-80 flex justify-center items-center">
        <div className="w-full">
          <div className="desktop:text-s44l45 laptop:text-s44l45 mobile:text-s22l33 font-bold flex justify-center">
            Why join Mintoak?
          </div>
          <div className="desktop:flex laptop:flex desktop:pt-69 laptop:pt-69 laptop:justify-around desktop:justify-around  mobile:py-25 mobile:px-25 w-100% desktop:px-100 laptop:px-100">
            {careerListingValuePropositionResp && careerListingValuePropositionResp.map((item) => (
              <div className="desktop:flex-column laptop:flex-column mobile:flex desktop:justify-center laptop:justify-center mobile:justify-flex-start items-center mobile:py-15 ">
                {console.log('wsdzx', item)}
                <div className="flex justify-center align-center">
                  <Image
                    src={item.icon}
                    className="mobile:w-40 desktop:w-72 laptop:w-72"
                    type="img"
                  />
                </div>
                <div className="text-center text-s24l36 font-semibold mobile:pl-19 laptop:pt-49 desktop:pt-49 desktop:text-center desktop:w-270 laptop:w-260 mobile:text-s16l24 mobile:pr-30">
                  {item.Description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-footer mb-100 mobile:mb-0 w-100%">
        <div className="desktop:flex laptop:flex items-center w-100%  mobile:px-20">
          <div className="flex mobile:block flex-col w-50% mobile:w-100% justify-center desktop:pl-100 laptop:pl-100 desktop:py-100 laptop:py-100 desktop:pr-50 laptop:pr-50">
            <div className="flex items-center desktop:text-s36l43 laptop:text-s36l43 mobile:text-s22l33 font-bold text-F1F1F1 desktop:pb-40 laptop:pb-40 mobile:pb-30 pt-40">
              Life at Mintoak
            </div>
            <div className="laptop:text-s20l30 desktop:text-s20l30 mobile:text-s14l24 text-F1F1F1 laptop:text-left">
              <span className="font-normal text-s20l30 text-F1F1F1 ">
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

      <div className="desktop:px-180 laptop:px-180 mt-150 mobile:px-20 mobile:my-80">
        <div className="text-center font-bold text-s44l45 pb-60 mobile:text-s22l33 mobile:px-50">
          Explore opportunities suited for you
        </div>
        <div className="search-input mobile:my-12">
          <Input
            placeholder="Ex. Product Manager"
            // className="h-60 bg-DFEFD4"
            value={searchJob}
            onChange={(e) => setSearchJob(e.target.value)}
            prefix={<Image src="/images/icons/search-icon.svg" type="img" />}
          />
        </div>
        {/* <div className="custom-row"> */}
        <Row gutter={24} className="my-30">
          <Col xs={24} md={8} className="mobile:my-12">
            <div className="filter-selection">
              <Select
                placeholder="All job title"
                style={{ fontWeight: "bold" }}
              >
                <Option>Select</Option>
              </Select>
            </div>
          </Col>
          <Col xs={24} md={8} className="mobile:my-12">
            <div className="filter-selection">
              <Select placeholder="All Location" style={{ fontWeight: "bold" }}>
                <Option>Select</Option>
              </Select>
            </div>
          </Col>
          <Col xs={24} md={8} className="mobile:my-12">
            <div className="filter-selection">
              <Select
                placeholder="All Departments"
                style={{ fontWeight: "bold" }}
              >
                <Option>Select</Option>
              </Select>
            </div>
          </Col>
        </Row>
        {/* </div> */}
        <div className="text-s18l21_6 font-normal text-525252 pb-20">
          Showing 55 job openings in Mumbai
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
                <div className="p-20 shadow-sm hover:bg-8FC055 drop-shadow border border-8FC055 w-100% cursor-pointer">
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
                  <div className="flex items-center desktop:pt-46 laptop:pt-30">
                    <span className="bg-8FC055 py-9 rounded-lg border-box px-13 flex items-center mr-14">
                      <Image src="/images/icons/bag.svg" type="img" />
                      <span className="pl-5">{data.timing}</span>
                    </span>
                    <span className="bg-8FC055 py-9 rounded-lg px-13 flex items-center">
                      <Image src="/images/icons/location.svg" type="img" />
                      <span className="pl-5">{data.location}</span>
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

      <div className="desktop:px-180 laptop:px-180 desktop:py-150 laptop:py-150 w-100%">
        <div className="text-center font-bold mobile:text-s22l33 desktop:text-s44l45 laptop:text-s44l45 pb-60 mobile:pb-40 mx-70">
          There’s a lot on board for our employees!
        </div>
        <div className="flex justify-center items-center mobile:px-0 mobile:mb-0 mobile:hidden">
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
                className="desktop:w-416 bg-FFFFFF shadow-lg my-21"
                key={index}
              >
                <div className="pt-10 px-12">
                  <Image
                    src="/images/backgrounds/img-11.png"
                    width={"100%"}
                    type="img"
                  />
                </div>
                <div className="p-20">
                  <div className="desktop:text-s23_7l28_44 laptop:text-s23_7l28_44 mobile:text-s15_22l18_27 pb-12 font-semibold">
                    {data.title}
                  </div>
                  <div className="text-s18l25">{data.description}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="w-100% flex flex-col items-center justify-around desktop:hidden laptop:hidden">
          <Carousel
            itemPadding={[0, 15]}
            itemsToShow={1.3}
            outerSpacing={0}
            showArrows={false}
            pagination={false}
          >
            {onBoardData.map((data, index) => (
              <div className="bg-FFFFFF shadow-lg my-21" key={index}>
                <div className="pt-10 px-12">
                  <Image
                    src="/images/backgrounds/img-11.png"
                    width={"100%"}
                    type="img"
                  />
                </div>
                <div className="p-20">
                  <div className="desktop:text-s23_7l28_44 laptop:text-s23_7l28_44 mobile:text-s15_22l18_27 pb-12">
                    {data.title}
                  </div>
                  <div className="text-s18l25">{data.description}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
