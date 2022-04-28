import { useEffect, useState, useRef } from "react";
import Image from "../components/helpers/Image";
import Carousel from "react-elastic-carousel";
import { API, endpoints } from "../components/helpers/API";
import Request_Demo from "./request_demo";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import { useSwiper } from "swiper/react";
SwiperCore.use([Mousewheel, Pagination]);

export default function About() {
  const [aboutBannerResp, setAboutBannerResp] = useState({});
  const [storyResp, setStoryResp] = useState({});
  const [demoPopup, setDemoPopup] = useState(false);
  const [matricsResp, setMatricsResp] = useState([]);
  const [visionResp, setVisionResp] = useState({});
  const [missionResp, setMissionResp] = useState({});
  const [principalResp, setPrincipalResp] = useState([]);
  const [founderResp, setFounderResp] = useState([]);
  const [teamInfoResp, setTeamInfoResp] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [itemView, setItemView] = useState();
  const [swiperInstance, setSwiperInstance] = useState();
  const [activeindex, setActiveIndex] = useState();
  const founder = useRef(null);
  const swiper = useSwiper();
  const TogglePopup = () => {
    setDemoPopup(false);
  };

  const getScreen = () => {
    if (window.innerWidth <= 1366) {
      setItemView(5);
    } else {
      setItemView(6.5);
    }
  };
  useEffect(() => {
    getScreen();
    // about_banner
    API({
      url: endpoints.about_us_banner,
    }).then((resp) => {
      if (!resp.message) {
        setAboutBannerResp(resp);
      }
    });
    // story
    API({
      url: endpoints.mintoak_story,
    }).then((resp) => {
      if (!resp.message) {
        setStoryResp(resp);
      }
    });
    // matrics
    API({
      url: endpoints.about_us_metrics,
    }).then((resp) => {
      if (!resp.message) {
        setMatricsResp(resp);
      }
    });
    //misson & visson
    API({
      url: endpoints.about_us_mission,
    }).then((resp) => {
      if (!resp.message) {
        setMissionResp(resp);
      }
    });
    API({
      url: endpoints.about_us_vision,
    }).then((resp) => {
      if (!resp.message) {
        setVisionResp(resp);
      }
    });
    // principal card
    API({
      url: endpoints.about_us_principle_cards,
    }).then((resp) => {
      if (!resp.message) {
        setPrincipalResp(resp);
      }
    });
    // about us our founders
    API({
      url: endpoints.about_us_our_founders,
    }).then((resp) => {
      if (!resp.message) {
        setFounderResp(resp);
      }
    });
    //about us meet the team 1
    API({
      url: endpoints.about_us_meet_the_team_1,
    }).then((resp) => {
      if (!resp.message) {
        setTeamInfoResp(resp);
      }
    });
  }, []);

  function goToPage(numberPage) {}

  return (
    <div className="desktop:h-fit w-100%  laptop:h-fit w-100% bg-home-top mobile:w-100% ">
      {/* Top layout with resp */}
      <div className="relative top-bg-container desktop:h-100% laptop:h-100% ">
        <Image
          src={aboutBannerResp?.Illustration}
          className="absolute mobile:hidden desktop:h-100% laptop:h-100% laptop:w-100% desktop:w-100%"
        />
        <div className="desktop:w-50% relative laptop:w-50% desktop:px-180 desktop:py-150 laptop:pl-100 tablet:w-80% tablet:p-30 px-20 mobile:pt-40 pb-95 laptop:py-60 z-10">
          <div className="ls--3 desktop:text-s45l45 laptop:text-s45l45 mobile:text-s24l29 text-252525 shrink-0 mobile:pt-0 mobile:font-semibold mobile:w-285">
            {/* {aboutBannerResp?.Title} */}
            Creating new-age financial solutions for
          </div>
          <div className="ls--3 text-s56l67 mobile:text-s35l43 font-bold text-252525 shrink-0 desktop:pt-6 laptop:pt-6 mobile:pt-10">
            New-age Businesses
          </div>
          <div className="text-s20l30 mobile:text-s14l24 desktop:pt-32 laptop:pt-32 desktop:pb-40 laptop:pb-40 desktop:w-453 laptop:w-453  mobile:py-16 pr-75 text-525252 shrink-0">
            {aboutBannerResp?.Description}
          </div>
          <div
            onClick={() => setDemoPopup(true)}
            className="font-bold button w-216 mobile:w-166 py-30 mobile:px-30 mobile:text-s14l16_8 mobile:py-10 text-s14l16_8 mobile:h-40  h-54 cursor-pointer z-20"
          >
            {aboutBannerResp?.CTA}
          </div>
        </div>
        <Image
          src={aboutBannerResp?.mobilebanner}
          className=" block relative desktop:hidden laptop:hidden"
          type="img"
        />
      </div>
      <div className="border border-A4D77A w-100% global-border"></div>

      {/* The Mintoak Story */}
      <div className="desktop:flex laptop:flex flex-col p-80 mobile:pb-30 desktop:pt-152 laptop:pt-100   justify-center items-center mobile:px-20 ">
        <div className="ls-0_2 text-s44l45 text-000000 font-bold mobile:text-left mobile:text-s22l33">
          {storyResp?.Title}
        </div>
        <div className="desktop:text-s24l36 laptop:text-s24l36 text-525252 text-center desktop:py-40 laptop:py-40 desktop:px-335 laptop:px-100 mobile:pt-24 mobile:pb-50 mobile:w-100% mobile:text-left mobile:text-525252 mobile:text-s14l21 mobile:pr-50">
          {storyResp?.Description}
        </div>
        <div className="flex w-100% justify-center desktop:px-100 laptop:px-70 desktop:py-49 laptop:py-30 mobile:w-100% mobile:flex-col">
          {matricsResp &&
            matricsResp.map((item, index) => (
              <div
                key={index}
                className="flex items-center flex-col w-25% mobile:flex-row mobile:w-100% mobile:pb-50"
              >
                <div>
                  <Image
                    src={item.Icon[0]}
                    width={73}
                    height={73}
                    type="img"
                    className="desktop:h-73 desktop:w-73 laptop:h-73 laptop:w-73 mobile:h-40 mobile:w-38"
                  />
                </div>
                <div
                  className={`desktop:text-s24l36 laptop:text-s24l36 ls-0_2 text-000000 font-bold  desktop:pb-9 laptop:pb-9 desktop:text-center laptop:text-center desktop:px-50 mobile:pl-23 mobile:text-s16l24 mobile:font-medium laptop:pt-45 desktop:pt-45`}
                >
                  {/* <div className="text-s24l36 ls-0_2 text-000000 font-bold py-42 desktop:pb-9  text-center desktop:px-50 laptop:px-50 mobile:pl-23 mobile:text-s16l24 mobile:font-medium"> */}
                  {item.Description}
                </div>
                <div
                  className={`desktop:text-s24l36 laptop:text-s24l36 ls-0_2 text-000000 font-bold desktop:pb-9 laptop:pb-9 desktop:text-center laptop:text-center desktop:px-50 mobile:pl-5 mobile:text-s16l24 mobile:font-medium `}
                >
                  {item.Description2}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="flex w-100% bg-footer mobile:flex-col">
        <div className="flex mobile:w-100% desktop:w-50% laptop:w-50% flex-col  mobile:py-20 mobile:pl-20 mobile:pr-25 desktop:pl-190 desktop:pr-114 laptop:px-86 desktop:pt-84 laptop:pt-84 desktop:pb-94 laptop:pb-94 mobile:border-b desktop:border-r laptop:border-r border-8B8B8B">
          <div className="flex flex-row w-100% items-center desktop:pb-6 mobile:pt-27 mobile:pb-25">
            <div>
              <Image
                src="/images/icons/as-vision.svg"
                type="img"
                className="desktop:h-49 desktop:w-49 laptop:h-49 laptop:w-49 mobile:h-40 mobile:w-40"
              />
            </div>
            <div className="ls--1_5 text-s45l54 mobile:text-s22l26_4 text-FFFFFF font-bold desktop:px-25 laptop:px-25 mobile:px-8 ">
              {visionResp?.Title}
            </div>
          </div>
          <div className="ls-2 text-F1F1F1 text-s20l30 mobile:text-s14l21 desktop:pt-19 laptop:pt-19 mobile:pb-14 mobile:pr-15 ">
            {visionResp?.Description}
          </div>
        </div>
        <div className="flex mobile:w-100% desktop:w-50% laptop:w-50% flex-col  mobile:py-20 mobile:pl-20 mobile:pr-25 desktop:pl-169 laptop:pl-86 desktop:pr-177 laptop:pr-177 desktop:pt-85 laptop:pt-85 desktop:pb-120 laptop:pb-94 mobile:border-t desktop:border-l laptop:border-l border-8B8B8B">
          <div className="flex flex-row w-100% items-center desktop:pb-6 mobile:pt-27 mobile:pb-25">
            <div>
              <Image
                src="/images/icons/mission.svg"
                type="img"
                className="desktop:h-49 desktop:w-49 laptop:h-49 laptop:w-49 mobile:h-40 mobile:w-40 "
              />
            </div>
            <div className="ls--1_5 text-s45l54 mobile:text-s22l26_4 text-FFFFFF font-bold desktop:px-25 laptop:px-25 mobile:px-8 ">
              {missionResp?.Title}
            </div>
          </div>
          <div className="ls-2 text-F1F1F1 text-s20l30 mobile:text-s14l21 desktop:pt-19 laptop:pt-19 mobile:pb-14 mobile:pr-15">
            {missionResp?.Description}
          </div>
        </div>
      </div>

      {/* Our Principles */}
      <div className="desktop:w-100% laptop:w-100% desktop:py-70  mobile:w-100%">
        <div className="flex desktop:justify-around laptop:justify-around font-bold text-252525 mobile:pl-30 text-s44l120 mobile:text-s22l33 mobile:pt-80 desktop:pt-80 desktop:pb-60 laptop:pt-80 laptop:pb-60 mobile:pb-25">
          Our principles
        </div>
        <div className="flex mobile:flex-col items-center w-100% desktop:justify-center laptop:justify-center desktop desktop:px-200 laptop:px-100 mobile:px-13">
          {principalResp &&
            principalResp.map((item, index) => (
              <div
                key={index}
                className={`flex desktop:mx-30 laptop:mx-30 desktop:flex-col laptop:flex-col items-center desktop:border laptop:border border-8CC63E justify-center desktop:w-345 laptop:w-345 desktop:h-336 laptop:h-336 ${
                  index != principalResp.length - 1 && ""
                } mobile:w-100% desktop:py-25 laptop:py-25 mobile:py-10`}
              >
                <div>
                  <Image src={item.Icon} height={85} width={85} />
                </div>
                <div>
                  <div className="font-bold text-s24l36 ls-0_2  mobile:text-s16l19 text-252525  desktop:text-center laptop:text-center mobile:pl-9">
                    {item.Title}
                  </div>

                  <div className="desktop:text-s20l30 laptop:text-s20l30 mobile:text-s14l21 text-525252 desktop:pt-15 laptop:pt-15 desktop:text-center laptop:text-center px-20 mobile:px-9">
                    {item.Description}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Meet the Team */}
      <div className="w-100% flex flex-col pt-50 desktop:pt-78 laptop:pt-78">
        <div className="flex flex-col justify-center items-center w-100% ">
          <div className="text-s44l33 ls-2 mobile:text-s22l33 mobile:text-000000 text-252525 font-bold px-40">
            {teamInfoResp?.Title}
          </div>
          <div className="desktop:text-s20l33 laptop:text-s20l33 ls-2 mobile:text-s14l21 mobile:text-525252 text-252525 py-35 text-center desktop:pl-513 laptop:pl-270 desktop:pr-517 laptop:pr-270  mobile:px-30">
            {teamInfoResp?.Description}
          </div>
        </div>
        <div className="w-100% desktop:px-215 laptop:px-130 laptop:pb-40 desktop:pb-150">
          <div className="w-100% pb-60 desktop:pt-40 laptop:pt-40 mobile:hidden">
            <Carousel
              itemsToShow={itemView}
              showArrows={false}
              itemPadding={[0, 4, 0, 0]}
              enableAutoPlay={false}
              className="flex itmes-center justify-center desktop:h-439 mobile:h-169 laptop:h-444 p-0"
              pagination={false}
              style={{
                background: "url(/images/backgrounds/reel-img.svg)",
              }}
            >
              <div className="flex flex-col items-center justify-center px-5">
                <Image
                  src="/images/backgrounds/Megha.svg"
                  type="img"
                  className="h-299 w-229 object-cover rounded-xl "
                />
                <div
                  className="w-229 absolute h-60 bottom-0"
                  style={{
                    backgroundImage: "linear-gradient(#fff0, #252525)",
                  }}
                ></div>
                {/* <div className="text-s18l33 text-F1F1F1 text-center  absolute bottom-25 mobile:pt-100">
                  Name name name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute bottom-0 mobile:pt-140">
                  Designation
                </div> */}
              </div>
              <div className="flex flex-col items-center justify-center  px-5">
                <Image
                  src="/images/backgrounds/Janine.svg"
                  type="img"
                  className="h-299 w-229 object-cover rounded-xl"
                />
                <div
                  className="w-229 absolute h-60 bottom-0"
                  style={{
                    backgroundImage: "linear-gradient(#fff0, #252525)",
                  }}
                ></div>
                {/* <div className="text-s18l33 text-F1F1F1 text-center absolute bottom-25 mobile:pt-100">
                  Name name name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute bottom-0 mobile:pt-140">
                  Designation
                </div> */}
              </div>
              <div className="flex flex-col items-center justify-center  px-5">
                <Image
                  src="/images/backgrounds/kunal.svg "
                  type="img"
                  className="h-299 w-229 object-cover rounded-xl"
                />
                <div
                  className="w-229 absolute h-60 bottom-0"
                  style={{
                    backgroundImage: "linear-gradient(#fff0, #252525)",
                  }}
                ></div>
                {/* <div className="text-s18l33 text-F1F1F1 text-center absolute bottom-25 mobile:pt-100">
                  Name name name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute bottom-0 mobile:pt-140">
                  Designation
                </div> */}
              </div>
              <div className="flex flex-col items-center justify-center  px-5">
                <Image
                  src="/images/backgrounds/Abhishek.svg"
                  type="img"
                  className="h-299 w-229 object-cover rounded-xl"
                />
                <div
                  className="w-229 absolute h-60 bottom-0"
                  style={{
                    backgroundImage: "linear-gradient(#fff0, #252525)",
                  }}
                ></div>
                {/* <div className="text-s18l33 text-F1F1F1 text-center absolute bottom-25 mobile:pt-100">
                  Name name name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute bottom-0 mobile:pt-140">
                  Designation
                </div> */}
              </div>
              <div className="flex flex-col items-center justify-center px-5">
                <Image
                  src="/images/backgrounds/Sharad.svg"
                  type="img"
                  className="h-299 w-229 object-cover rounded-xl"
                />
                <div
                  className="w-229 absolute h-60 bottom-0"
                  style={{
                    backgroundImage: "linear-gradient(#fff0, #252525)",
                  }}
                ></div>
                {/* <div className="text-s18l33 text-F1F1F1 text-center absolute bottom-25 mobile:pt-100">
                  Name name name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute bottom-0 mobile:pt-140">
                  Designation
                </div> */}
              </div>
              <div className="flex flex-col items-center justify-center px-5">
                <Image
                  src="/images/backgrounds/amit.svg"
                  type="img"
                  className="h-299 w-229 object-cover rounded-xl"
                />
                <div
                  className="w-229 absolute h-60 bottom-0"
                  style={{
                    backgroundImage: "linear-gradient(#fff0, #252525)",
                  }}
                ></div>
                {/* <div className="text-s18l33 text-F1F1F1 text-center absolute bottom-25 mobile:pt-100">
                  Name name name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute bottom-0 mobile:pt-140">
                  Designation
                </div> */}
              </div>
              <div className="flex flex-col items-center justify-center px-5">
                <Image
                  src="/images/backgrounds/Image.svg"
                  type="img"
                  className="h-299 w-229 object-cover rounded-xl"
                />
                <div
                  className="w-229 absolute h-60 bottom-0"
                  style={{
                    backgroundImage: "linear-gradient(#fff0, #252525)",
                  }}
                ></div>
                {/* <div className="text-s18l33 text-F1F1F1 text-center absolute bottom-25 mobile:pt-100">
                  Name name name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute bottom-0 mobile:pt-140">
                  Designation
                </div> */}
              </div>
            </Carousel>
          </div>
        </div>
        <div className="w-100% pb-60 desktop:pt-40 laptop:pt-40 desktop:hidden laptop:hidden">
          <Carousel
            itemsToShow={3}
            showArrows={false}
            itemPadding={[0, 0, 0, 0]}
            enableAutoPlay={false}
            className="flex itmes-center justify-center h-169 p-0"
            pagination={false}
            style={{
              background: "url(/images/backgrounds/reel-bg-mobile.svg)",
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/backgrounds/Megha.svg"
                type="img"
                className="h-114 w-114 object-cover rounded-xl "
              />
              <div
                className="w-120 h-38 absolute bottom-0"
                style={{
                  backgroundImage: "linear-gradient(#fff0, #252525)",
                }}
              ></div>
              {/* <div className="text-s18l33 text-F1F1F1 text-center  absolute bottom-25 mobile:pt-100">
                  Name name name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute bottom-0 mobile:pt-140">
                  Designation
                </div> */}
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/backgrounds/Janine.svg"
                type="img"
                className="h-114 w-114 object-cover rounded-xl"
              />
              <div
                className="w-120 h-38 absolute bottom-0"
                style={{
                  backgroundImage: "linear-gradient(#fff0, #252525)",
                }}
              ></div>
              {/* <div className="text-s18l33 text-F1F1F1 text-center absolute bottom-25 mobile:pt-100">
                  Name name name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute bottom-0 mobile:pt-140">
                  Designation
                </div> */}
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/backgrounds/kunal.svg "
                type="img"
                className="h-114 w-114 object-cover rounded-xl"
              />
              <div
                className="w-120 h-38 absolute bottom-0"
                style={{
                  backgroundImage: "linear-gradient(#fff0, #252525)",
                }}
              ></div>
              {/* <div className="text-s18l33 text-F1F1F1 text-center absolute bottom-25 mobile:pt-100">
                  Name name name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute bottom-0 mobile:pt-140">
                  Designation
                </div> */}
            </div>
          </Carousel>
        </div>
      </div>

      {/* Our founders */}
      {/* <Sticky disabled={activeTab + 1 == founderResp.length ? true : false}> */}
      <div
        id="founder"
        className="w-100% bg-footer relative desktop:px-100 mobile:pb-35 desktop:pb-70 flex mobile:flex-col desktop:h-1080  overflow-hidden laptop:h-976"
      >
        <div className="flex flex-col mobile:h-745">
          <div className="text-s45l33 text-F1F1F1 font-bold desktop:px-40 pt-142 pb-50 mobile:hidden w-100% laptop:pl-70">
            Our founders
          </div>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            tag="section"
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            ref={founder}
            modules={[Mousewheel, Pagination]}
            className="mySwiper overflow-scroll mobile:h-845"
            onSwiper={setSwiperInstance}
            onSlideChange={(e) => {
              setActiveTab(e.activeIndex);
            }}
          >
            {founderResp.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  id={`founders${index}`}
                  className="flex flex-col desktop:w-70% mobile:w-100% parallax-bg"
                  data-swiper-parallax="-23%"
                >
                  <div className="flex mobile:flex-col pl-70 mobile:pl-0">
                    <div className="mobile:pl-20 mobile:pt-40 mobile:pb-40 mobile:pr-45 desktop:p-40 desktop:w-50% mobile:w-100%">
                      <Image
                        src={item?.FounderImage}
                        type="img"
                        className="h-663 w-529 mobile:h-368"
                      />
                    </div>
                    <div className="flex flex-col mobile:px-25 desktop:px-20 desktop:pt-40 justify-end laptop:justify-center laptop:w-50% desktop:w-50% mobile:w-100% laptop:pl-50">
                      <div className="text-s30l45 text-F1F1F1 mobile:text-s20l24 mobile:text-FFFFFF font-bold pb-5">
                        {item?.Name}
                      </div>
                      <div className="mobile:text-s16l19 text-s24l36  mobile:text-FFFFFF text-F1F1F1 pt-5 desktop:pb-30 laptop:pb-15 mobile:pb-20">
                        {item?.Designation}
                      </div>
                      <div className="mobile:tracking-widest text-s20l30 mobile:text-s14l21 text-F1F1F1 mobile:text-FFFFFF opacity-70 desktop:py-20 desktop:pr-40 laptop:w-400 mobile:pr-41">
                        {item?.Description}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-18% absolute pt-142 flex flex-col laptop:pt-240 itmes-center justify-center mobile:hidden right-50 laptop:right-5">
          <div className="h-700 flex flex-col">
            {founderResp &&
              founderResp.map((item, index) => (
                <div
                  onClick={() => {
                    setActiveTab(index);
                    founder.current?.swiper.slideTo(index);
                    // founder.swiper
                  }}
                  key={index}
                >
                  <div className="flex h-190 laptop:h-150 laptop:pr-50">
                    <div className="w-55% laptop:w-400 text-right laptop:pr-20">
                      <div
                        className={`${
                          activeTab == index
                            ? "text-s24l150 laptop:text-s20l24"
                            : "text-s20l150 laptop:text-s18l21_6"
                        } text-F1F1F1`}
                      >
                        {founderResp[index]?.Name}
                      </div>
                      <div
                        className={`${
                          activeTab == index ? "text-F1F1F1" : "text-949494"
                        } text-s20l150 laptop:text-s17l25`}
                      >
                        {founderResp[index]?.Designation}
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-30% pt-5">
                      <div className="w-27 h-27 flex justify-center">
                        <div
                          className={`${
                            activeTab == index
                              ? "w-27 h-27 bg-F1F1F1 "
                              : "w-17 h-16 bg-949494"
                          } rounded-full bg-opacity-100`}
                        ></div>
                      </div>
                      {founderResp && founderResp.length - 1 != index && (
                        <div className="border-1 border-848484 border w-1 h-109 m-auto"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* </Sticky> */}
      <div className=" border-F1F1F1 border-t"></div>
      <div className="desktop:hidden laptop:hidden mobile:flex flex-col">
        <div className="text-s22l33 text-000000 font-bold text-center pt-80 pb-40">
          Our founders
        </div>
        <div className="w-100% flex justify-center">
          <div className="flex w-360 overflow-x-scroll">
            {founderResp &&
              founderResp.map((item, index) => (
                <div
                  className="w-205 whitespace-nowrap"
                  onScroll={() => setCurruntIndex(index)}
                  key={index}
                >
                  <div key={index} className="w-205">
                    <Image
                      src={item.FounderImage}
                      type="img"
                      className="h-205 w-201"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="w-100% flex flex-col items-center pt-16">
          <div className="text-252525 text-s17l25 font-bold pb-10">
            Raman Khanduja
          </div>
          <div className="text-525252 text-s16l24 mobile:mb-80">
            Chief Executive
          </div>
        </div>
      </div>
      {/* <div className="desktop:hidden laptop:hidden">
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
          {founderResp &&
            founderResp.map((item, index) => (
              <div key={activeindex} className={` flex flex-col items-center`}>
                <Image src={item.FounderImage} height={205} width={201} />
              </div>
            ))}
        </Carousel>
      </div> */}
      {demoPopup && (
        <Request_Demo triger={demoPopup} handleClose={TogglePopup} />
      )}
    </div>
  );
}
