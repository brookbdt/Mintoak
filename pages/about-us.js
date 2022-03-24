import React, { useEffect, useState, useRef } from "react"
import Image from "../components/helpers/Image"
import Carousel from "react-elastic-carousel"
import { API, endpoints } from "../components/helpers/API"
import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Pagination } from "swiper"

export default function About() {
  const [aboutBannerResp, setAboutBannerResp] = useState({})
  const [storyResp, setStoryResp] = useState({})
  const [matricsResp, setMatricsResp] = useState([])
  const [visionResp, setVisionResp] = useState({})
  const [missionResp, setMissionResp] = useState({})
  const [principalResp, setPrincipalResp] = useState([])
  const [founderResp, setFounderResp] = useState([])
  const [teamInfoResp, setTeamInfoResp] = useState({})
  const [activeTab, setActiveTab] = useState(0)
  const founder = useRef()
  useEffect(() => {
    // about_banner
    API({
      url: endpoints.about_us_banner,
    }).then((resp) => {
      if (!resp.message) {
        setAboutBannerResp(resp)
      }
    })
    // story
    API({
      url: endpoints.mintoak_story,
    }).then((resp) => {
      if (!resp.message) {
        setStoryResp(resp)
      }
    })
    // matrics
    API({
      url: endpoints.about_us_metrics,
    }).then((resp) => {
      if (!resp.message) {
        setMatricsResp(resp)
      }
    })
    //misson & visson
    API({
      url: endpoints.about_us_mission,
    }).then((resp) => {
      if (!resp.message) {
        setMissionResp(resp)
      }
    })
    API({
      url: endpoints.about_us_vision,
    }).then((resp) => {
      if (!resp.message) {
        setVisionResp(resp)
      }
    })
    // principal card
    API({
      url: endpoints.about_us_principle_cards,
    }).then((resp) => {
      if (!resp.message) {
        setPrincipalResp(resp)
      }
    })
    // about us our founders
    API({
      url: endpoints.about_us_our_founders,
    }).then((resp) => {
      if (!resp.message) {
        setFounderResp(resp)
      }
    })
    //about us meet the team 1
    API({
      url: endpoints.about_us_meet_the_team_1,
    }).then((resp) => {
      if (!resp.message) {
        setTeamInfoResp(resp)
      }
    })
  }, [])

  return (
    <div className="desktop:h-fit w-100%  laptop:h-fit w-100% bg-home-top mobile:w-100% ">
      {/* Top layout with resp */}
      <div className="relative top-bg-container desktop:h-100% laptop:h-100% ">
        <Image
          src={aboutBannerResp?.Illustration}
          className="absolute z-minus1 mobile:hidden desktop:h-100% laptop:h-100% laptop:w-100% desktop:w-100%"
        />
        <div className="desktop:w-50% laptop:w-50% desktop:px-100 desktop:pt-100 desktop:pb-65  laptop:pl-100 laptop:pt-10 tablet:w-80% tablet:p-30 px-20 mobile:pt-40 pb-40 z-10">
          <div className="ls--3 desktop:text-s45l45 laptop:text-s45l45 mobile:text-s24l29 pr-80 pt-50 text-252525 shrink-0">
            {/* {aboutBannerResp?.Title} */}
            Creating new-age financial solutions for
          </div>
          <div className="ls--3 text-s56l67 mobile:text-s36l43  font-bold text-252525 shrink-0 desktop:pt-6 laptop:pt-6 mobile:pt-10">
            New-age Businesses
          </div>
          <div className="text-s20l30 mobile:text-s14l24 desktop:pt-32 laptop:pt-32 desktop:pb-40 laptop:pb-40 desktop:w-453 laptop:w-453  mobile:py-16 pr-75 text-525252 shrink-0">
            {aboutBannerResp?.Description}
          </div>
          <div className="font-bold button w-216 mobile:w-166 py-30 mobile:px-30 mobile:text-s14l16_8 mobile:py-10 text-s14l16_8 mobile:h-40  h-54 cursor-pointer z-20">
            {aboutBannerResp?.CTA}
          </div>
        </div>
        <Image
          src="/images/backgrounds/mobile_home_banner.png"
          className=" block relative desktop:hidden laptop:hidden"
          type="img"
        />
      </div>
      <div className="border border-A4D77A w-100% global-border"></div>

      {/* The Mintoak Story */}
      <div className="desktop:flex laptop:flex flex-col p-80 desktop:pt-152 laptop:pt-152 justify-center items-center mobile:px-20 ">
        <div className="ls-0_2 text-s44l45 text-000000 font-bold mobile:text-left mobile:text-s22l33">
          {storyResp?.Title}
        </div>
        <div className="desktop:text-s24l36 laptop:text-s24l36 text-525252 text-center desktop:py-40 laptop:py-40 desktop:px-335 laptop:px-100 mobile: py-24 mobile: w-100% mobile:text-left mobile:text-525252 mobile:text-s14l21 mobile:pr-50">
          {storyResp?.Description}
        </div>
        <div className="flex w-100% justify-center desktop:px-100 laptop:px-70 desktop:py-49 laptop:py-49 mobile:w-100% mobile:flex-col">
          {matricsResp &&
            matricsResp.map((item, index) => (
              <div
                key={index}
                className="flex items-center flex-col w-25% mobile:flex-row mobile:w-100%"
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
                  className={`desktop:text-s24l36 laptop:text-s24l36 ls-0_2 text-000000 font-bold  desktop:pb-9 laptop:pb-9 desktop:text-center laptop:text-center desktop:px-50 mobile:pl-23 mobile:text-s16l24 mobile:font-medium `}
                >
                  {/* <div className="text-s24l36 ls-0_2 text-000000 font-bold py-42 desktop:pb-9  text-center desktop:px-50 laptop:px-50 mobile:pl-23 mobile:text-s16l24 mobile:font-medium"> */}
                  {item.Description}
                </div>
                <div
                  className={`desktop:text-s24l36 laptop:text-s24l36 ls-0_2 text-000000 font-bold desktop:pb-9 laptop:pb-9 desktop:text-center laptop:text-center desktop:px-50 mobile:pl-23 mobile:text-s16l24 mobile:font-medium `}
                >
                  {item.Description2}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="flex w-100% bg-footer desktop:px-94 mobile:flex-col desktop:h-412 laptop:h-412">
        <div className="flex mobile:w-100% desktop:w-50% laptop:w-50% flex-col  mobile:py-20 mobile:pl-20 mobile:pr-25 desktop:px-86 laptop:px-86 desktop:pt-84 laptop:pt-84 desktop:pb-94 laptop:pb-94 mobile:border-b desktop:border-r laptop:border-r border-8B8B8B">
          <div className="flex flex-row w-100% items-center desktop:pb-6 mobile:pt-27 mobile:pb-25">
            <div>
              <Image
                src="/images/icons/vision.svg"
                type="img"
                className="desktop:h-49 desktop:w-49 laptop:h-49 laptop:w-49 mobile:h-29 mobile:w-29"
              />
            </div>
            <div className="ls--1_5 text-s45l54 mobile:text-s22l26_4 text-FFFFFF font-bold desktop:px-25 laptop:px-25 mobile:px-8 ">
              {visionResp?.Title}
            </div>
          </div>
          <div className="ls-2 text-F1F1F1 text-s20l30 mobile:text-s14l21 desktop:pt-19 laptop:pt-19 mobile:pb-14 mobile:pr-15">
            {visionResp?.Description}
          </div>
        </div>
        <div className="flex mobile:w-100% desktop:w-50% laptop:w-50% flex-col  mobile:py-20 mobile:pl-20 mobile:pr-25 desktop:pl-169 laptop:pl-86 desktop:pr-177 laptop:pr-177 desktop:pt-85 laptop:pt-85 desktop:pb-94 laptop:pb-94 mobile:border-t desktop:border-l laptop:border-l border-8B8B8B">
          <div className="flex flex-row w-100% items-center desktop:pb-6 mobile:pt-27 mobile:pb-25">
            <div>
              <Image
                src="/images/icons/mission.svg"
                type="img"
                className="desktop:h-49 desktop:w-49 laptop:h-49 laptop:w-49 mobile:h-29 mobile:w-29"
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
      <div className="desktop:w-100% laptop:w-100% desktop:py-70 laptop:py-70 mobile:w-100%">
        <div className="flex desktop:justify-around laptop:justify-around font-bold text-252525 mobile:pl-30 text-s44l120 mobile:text-s22l33 mobile:pt-80 desktop:pt-80 desktop:pb-60 laptop:pt-80 laptop:pb-60 mobile:pb-25">
          Our principles
        </div>
        <div className="flex mobile:flex-col items-center w-100% desktop desktop:px-200 desktop:justify-around laptop:justify-around laptop:px-100 mobile:px-13">
          {principalResp &&
            principalResp.map((item, index) => (
              <div
                key={index}
                className={`flex desktop:flex-col laptop:flex-col items-center desktop:border laptop:border border-8CC63E justify-center desktop:w-345 laptop:w-345 desktop:h-336 laptop:h-336 ${
                  index != principalResp.length - 1 && ""
                } mobile:w-100% desktop:py-25 laptop:py-25 mobile:py-10`}
              >
                <div>
                  <Image src={item.Icon} height={135} width={135} />
                </div>
                <div>
                  <div className="font-bold text-s24l36 ls-0_2  mobile:text-s16l19 text-252525  desktop:text-center laptop:text-center mobile:pl-20">
                    {item.Title}
                  </div>

                  <div className="desktop:text-s20l30 laptop:text-s20l30 mobile:text-s14l21 text-525252 desktop:pt-15 laptop:pt-15 desktop:text-center laptop:text-center px-20">
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
        <div className="w-100% desktop:px-215 laptop:px-215 laptop:pb-150 desktop:pb-150">
          <div className="w-100% pb-60 desktop:pt-40 laptop:pt-40 ">
            <Carousel
              itemsToShow={7}
              itemPadding={[0, 7]}
              showArrows={false}
              enableAutoPlay={false}
              className="flex itmes-center justify-center bg-bg_reel bg-no-repeat h-439"
              pagination={false}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="">
                  <Image
                    src="/images/backgrounds/megha.svg"
                    type="img"
                    className="h-299 w-100%"
                  />
                </div>
                <div className="text-s18l33 text-F1F1F1 text-center absolute desktop:pt-225 laptop:pt-225 mobile:pt-100">
                  Name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute desktop:pt-275 laptop:pt-275 mobile:pt-140">
                  Designation
                </div>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="">
                  <Image
                    src="/images/backgrounds/janine.svg"
                    height={299}
                    width={229}
                    type="img"
                    className="h-299 w-229"
                  />
                </div>
                <div className="text-s18l33 text-F1F1F1 text-center absolute desktop:pt-225 laptop:pt-225 mobile:pt-100">
                  Name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute desktop:pt-275 laptop:pt-275 mobile:pt-140">
                  Designation
                </div>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="">
                  <Image
                    src="/images/backgrounds/kunal.svg"
                    height={299}
                    width={229}
                    type="img"
                    className="h-299 w-229"
                  />
                </div>
                <div className="text-s18l33 text-F1F1F1 text-center absolute desktop:pt-225 laptop:pt-225 mobile:pt-100">
                  Name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute desktop:pt-275 laptop:pt-275 mobile:pt-140">
                  Designation
                </div>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="">
                  <Image
                    src="/images/backgrounds/Abhishek.svg"
                    type="img"
                    className="h-299 w-229"
                  />
                </div>
                <div className="text-s18l33 text-F1F1F1 text-center absolute desktop:pt-225 laptop:pt-225 mobile:pt-100">
                  Name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute desktop:pt-275 laptop:pt-275 mobile:pt-140">
                  Designation
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="">
                  <Image
                    src="/images/backgrounds/Sharad.svg"
                    type="img"
                    className="h-299 w-229"
                  />
                </div>
                <div className="text-s18l33 text-F1F1F1 text-center absolute desktop:pt-225 laptop:pt-225 mobile:pt-100">
                  Name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute desktop:pt-275 laptop:pt-275 mobile:pt-140">
                  Designation
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="">
                  <Image
                    src="/images/backgrounds/megha.jpg"
                    height={299}
                    width={229}
                  />
                </div>
                <div className="text-s18l33 text-F1F1F1 text-center absolute desktop:pt-225 laptop:pt-225 mobile:pt-100">
                  Name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute desktop:pt-275 laptop:pt-275 mobile:pt-140">
                  Designation
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="">
                  <Image
                    src="/images/backgrounds/megha.jpg"
                    height={299}
                    width={229}
                  />
                </div>
                <div className="text-s18l33 text-F1F1F1 text-center absolute desktop:pt-225 laptop:pt-225 mobile:pt-100">
                  Name
                </div>
                <div className="text-s16l33 text-F1F1F1 text-center absolute desktop:pt-275 laptop:pt-275 mobile:pt-140">
                  Designation
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Our founders */}
      <div
        id="founder"
        className="w-100%  bg-footer desktop:px-100 mobile:pb-35 desktop:pb-70 flex mobile:flex-col desktop:h-976 overflow-hidden laptop:h-976"
      >
        <div className=" flex flex-col">
          <div className="text-s45l33 text-F1F1F1 font-bold px-40 pt-142 pb-50 mobile:hidden w-100%">
            Our founders
          </div>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel]}
            className="mySwiper overflow-scroll"
            onSlideChange={(e) => {
              setActiveTab(e.activeIndex)
              console.log(e.activeIndex, "sliderchange")
            }}
          >
            {founderResp.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  id={`founders${index}`}
                  className="flex flex-col desktop:w-70% mobile:w-100% parallax-bg"
                  data-swiper-parallax="-23%"
                  onLoadStart={() => {
                    console.log("first")
                  }}
                >
                  <div className="flex mobile:flex-col">
                    <div className="mobile:pl-20 mobile:pt-40 mobile:pb-40 mobile:pr-45 desktop:p-40 desktop:w-50% mobile:w-100%">
                      <Image
                        src={item?.FounderImage}
                        height={660}
                        width={529}
                      />
                    </div>
                    <div className="flex flex-col mobile:px-25 desktop:px-20 desktop:pt-40 justify-end desktop:w-50% mobile:w-100%">
                      <div className="desktop:text-s30l45 desktop:text-F1F1F1 mobile:text-s20l24 mobile:text-FFFFFF font-bold pb-5">
                        {item?.Name}
                      </div>
                      <div className="mobile:text-s16l19 desktop:text-s24l36 mobile:text-FFFFFF desktop:text-F1F1F1 pt-5 desktop:pb-30 mobile:pb-20">
                        {item?.Designation}
                      </div>
                      <div className="desktop:text-s20l30 mobile:s14l21 desktop:text-F1F1F1 mobile:text-FFFFFF  desktop:py-20 desktop:pr-40 mobile:pr-41">
                        {item?.Description}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-30% pt-80 flex flex-col itmes-center justify-center mobile:hidden sticky top-0">
          <div className="h-700 flex flex-col">
            {founderResp &&
              founderResp.map((item, index) => (
                <div
                  onClick={() => {
                    setActiveTab(index)
                  }}
                  key={index}
                >
                  <span
                    className={`${
                      activeTab == index ? "text-F1F1F1" : "text-848484"
                    } text-s18l33`}
                  >
                    {founderResp[index]?.Name}
                  </span>
                  <span className="items-center flex flex-col mt-minus-22">
                    <span
                      className={`${
                        activeTab == index
                          ? "w-22 h-22 bg-F1F1F1 p-11"
                          : "w-14 h-14 bg-848484 p-7"
                      } rounded-md bg-opacity-100`}
                    ></span>
                    {founderResp && founderResp.length - 1 != index && (
                      <span className="h-90 border-1 border-848484 py-45 min-h-90 border w-1 mt-16"></span>
                    )}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="desktop:hidden mobile:flex flex-col">
        <div className="text-s22l33 text-000000">Our founders</div>
        <div className="flex ">
          {founderResp &&
            founderResp.map((item, index) => (
              <div key={index}>
                <Image src={item.FounderImage} height={660} width={529} />
              </div>
            ))}
        </div>
        <div>
          <div>Raman Khanduja</div>
          <div>Chief Executive</div>
        </div>
      </div>
    </div>
  )
}
