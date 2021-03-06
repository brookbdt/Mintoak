import Image from "../components/helpers/Image";
import Carousel from "react-elastic-carousel";
import { useEffect, useState, useRef } from "react";
import { consts } from "react-elastic-carousel";
import { Modal, Select } from "antd";
import { API, endpoints } from "../components/helpers/API";
import Request_Demo from "./request_demo";
import CircularProgress from "../components/helpers/Prograssbar";

export default function Partner() {
  const { Option } = Select;
  const [modalvisible, setmodalVisible] = useState(false);
  const [comunityCard, setComunityCard] = useState([]);
  const [anime, setAnime] = useState("");
  const [customizclick, setCustomizClick] = useState(1);
  const [demoPopup, setDemoPopup] = useState(false);
  const [partnerWithUsBanner, setPartnerWithUsBanner] = useState(null);
  const [partnerWithUsNewHeights, setPartnerWithUsNewHeights] = useState(null);
  const [partnerWithUsNewHeights2, setPartnerWithUsNewHeights2] =
    useState(null);
  const [aboutUsCustomization2, setAboutUsCustomization2] = useState(null);
  const [aboutUsCustomization, setAboutUsCustomization] = useState(null);
  const [partnerWithUsMintoakEffect, setPartnerWithUsMintoakEffect] =
    useState(null);
  const [countryList, setCountryList] = useState(null);
  const [val0, setVal0] = useState(aboutUsCustomization2?.[0]);
  const [val1, setVal1] = useState(aboutUsCustomization2?.[1]);
  const [val2, setVal2] = useState(aboutUsCustomization2?.[2]);
  const [desc, setDesc] = useState(aboutUsCustomization2?.[1]?.Description);
  const [fullName, setFullName] = useState(null);
  const [contactNo, setContactNo] = useState(null);
  const [email, setEmail] = useState(null);
  const [country, setCountry] = useState(null);
  const [bankName, setBankName] = useState(null);
  const [title, setTitle] = useState(null);
  const [msg, setMsg] = useState(null);
  const [validate, setValidate] = useState(true);
  const scrollPoint = useRef(null);

  const scrollToBottom = () => {
    scrollPoint.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    // Community card
    API({
      url: endpoints.comminity_cards,
    }).then((resp) => {
      if (!resp.message) {
        setComunityCard(resp);
      }
    });

    API({
      url: endpoints.partner_with_us_banner,
    }).then((resp) => {
      if (!resp.message) {
        setPartnerWithUsBanner(resp);
      }
    });
    API({
      url: endpoints.partner_with_us_new_heights,
    }).then((resp) => {
      if (!resp.message) {
        setPartnerWithUsNewHeights(resp);
      }
    });
    API({
      url: endpoints.partner_with_us_new_heights2,
    }).then((resp) => {
      if (!resp.message) {
        setPartnerWithUsNewHeights2(resp);
      }
    });
    API({
      url: endpoints.about_us_customization_2,
    }).then((resp) => {
      if (!resp.message) {
        setAboutUsCustomization2(resp);
        setDesc(resp[1].Description);
        setVal0(resp[1]);
        setVal1(resp[0]);
        setVal2(resp[2]);
      }
    });
    API({
      url: endpoints.about_us_customization,
    }).then((resp) => {
      if (!resp.message) {
        setAboutUsCustomization(resp);
      }
    });
    API({
      url: endpoints.partner_with_us_mintoak_effect,
    }).then((resp) => {
      if (!resp.message) {
        setPartnerWithUsMintoakEffect(resp);
      }
    });
    API({
      url: endpoints.dropdown,
    }).then((resp) => {
      if (!resp.message) {
        setCountryList(resp[0]);
      }
    });
  }, []);
  const TogglePopup = () => {
    setDemoPopup(false);
  };
  // useEffect(scrollToBottom, [partnerWithUsMintoakEffect]);

  // console.log('countery', countryList)

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
      setVal0(val1);
      setVal1(t);
      aboutUsCustomization2.map((item) => {
        if (item.Title == val0) {
          setDesc(item.Description);
        }
      });
    }
  };
  const handleSubmit = () => {
    let tempVal = true;
    if (fullName === null || fullName === "") {
      setValidate(false);
      console.log(1);
      tempVal = false;
    }
    if (contactNo === null || contactNo === "") {
      tempVal = false;
      console.log(2);
      setValidate(false);
    }
    if (email === null || email === "") {
      tempVal = false;
      console.log(3);
      setValidate(false);
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      tempVal = false;
      console.log(4);
      setValidate(false);
    }

    if (bankName === null || bankName === "") {
      setValidate(false);
      tempVal = false;
    }
    if (msg === null || msg === "") {
      setValidate(false);
      console.log(6);
      tempVal = false;
    }
    if (title === null || title === "") {
      setValidate(false);
      console.log(7);
      tempVal = false;
    }
    if (country === null || country === "") {
      setValidate(false);
      console.log(7);
      tempVal = false;
    }
    if (tempVal) {
      setValidate(true);
      handleClearAll();
      setmodalVisible(true);
    }
  };

  const handleClearAll = () => {
    setFullName("");
    setEmail("");
    setContactNo("");
    setBankName("");
    setTitle("");
    setCountry("");
    setMsg("");
  };

  useEffect(scrollToBottom, [partnerWithUsMintoakEffect]);

  return (
    <>
      <div className="desktop:h-fit laptop:h-fit w-100% bg-home-top mobile:w-100%">
        {/* Top layout with resp */}
        <div className="mobile:h-595 relative top-bg-container flex w-100% border-b border-A4D77A mobile:flex-col leptop:h-646 desktop:h-646">
          <Image
            src={partnerWithUsBanner?.ilustration[0]}
            className="absolute mobile:hidden w-100% h-100% object-cover laptop:w-100% laptop:h-600"
          />
          <div className="desktop:w-50% relative desktop:pb-107 laptop:pb-107 laptop:w-50% pl-176 laptop:pl-100 pr-0 pt-150 laptop:pt-41 z-10 mobile: w-100% mobile:p-20 ">
            <div className="desktop:text-s44l52 laptop:text-s44l52 mobile:text-s24l29 pr-80 pt-50 mobile:pt-20 text-252525 shrink-0">
              {partnerWithUsBanner?.Title}
            </div>
            <div className="text-s56l67 mobile:text-s36l43 font-bold text-252525 w-100% desktop:pt-6 laptop:pt-6 mobile:pt-2">
              {partnerWithUsBanner?.Title2}
            </div>
            <div className="desktop:text-s44l52 laptop:text-s44l52 mobile:text-s24l29 pr-80 pt-10 mobile:pt-2 text-252525 shrink-0">
              {partnerWithUsBanner?.Title3}
            </div>
            <div className="text-s20l30 mobile:text-s14l24 desktop:py-32 laptop:py-32 mobile:py-16 pr-75 text-525252 shrink-0">
              {partnerWithUsBanner?.Description}
            </div>
            <div
              onClick={() => setDemoPopup(true)}
              className="button w-216 mobile:w-166 py-30 mobile:px-30 mobile:text-s14l16_8 mobile:py-10 text-s14l16_8 mobile:h-40  h-54 cursor-pointer z-20 font-bold"
            >
              {partnerWithUsBanner?.CTA}
            </div>
          </div>
          <div className="mobile:absolute desktop:w-50% laptop:w-50% flex items-center justify-center mobile:w-100%">
            <Image
              src={partnerWithUsBanner?.mobilebanner}
              type="img"
              className=" h-fit w-100% block relative desktop:hidden laptop:hidden object-cover"
            />
          </div>
        </div>
        {/* Take your business  */}
        <div className="desktop:flex laptop:flex flex-col py-150 desktop:px-333 laptop:py-80 mobile:pb-40 justify-center items-center mobile:py-82 mobile:px-20 ">
          <div className="desktop:text-s45l45 laptop:text-s45l45 desktop:text-252525 laptop:text-252525 mobile:text-000000 font-bold mobile:pr-100 mobile:text-left mobile:text-s22l33">
            {partnerWithUsNewHeights?.Title}
          </div>
          <div className="desktop:text-s24l36 laptop:text-s24l36 text-525252 text-center desktop:py-40 laptop:py-40 desktop:px-50 laptop:px-120 mobile: py-24 mobile: w-100% mobile:text-left mobile:text-525252 mobile:text-s14l21 mobile:pr-50 mobile:text-left">
            {partnerWithUsNewHeights?.Description}

            <br className="desktop:hidden laptop:hidden" />
            <br className="desktop:hidden laptop:hidden" />
            {/* At Mintoak, our comprehensive range of services and financial
            products ensure that you can serve your customers with the best
            tools by your side. */}
          </div>
          <div className="flex w-100% justify-center items-center desktop:pt-60 laptop:pt-60  mobile:w-100% mobile:flex-col">
            {partnerWithUsNewHeights2 &&
              partnerWithUsNewHeights2.map((item, index) => (
                <div
                  className="flex desktop:h-231 laptop:px-100 justify-start items-center flex-col w-25% mobile:flex-row mobile:w-100% mobile:pb-35"
                  key={index}
                >
                  <div>
                    <Image
                      src={item.Icon[0]}
                      type="img"
                      className="desktop:w-54 desktop:h-101 laptop:w-54 laptop:h-80 mobile:w-24 mobile:h-48"
                    />
                  </div>
                  <div className="text-s24l36 laptop:text-s20l24 laptop:pt-37 desktop:pt-37 desktop:px-50  desktop:text-252525 laptop:text-252525 font-bold text-center mobile:text-000000 mobile:pl-23 mobile:text-s16l24 mobile:font-bold mobile:text-left">
                    {item.Functions}
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* Customization on the go! */}
        <div className="desktop:flex flex-col laptop:flex desktop:py-80 laptop:py-80 mobile:pt-39 justify-center items-center mobile:px-20 bg-footer">
          <div className="desktop:text-s44l52 laptop:text-s44l52 desktop:text-F1F1F1 laptop:text-F1F1F1 font-bold text-center mobile:text-s22l26_4 mobile:text-FFFFFF">
            {aboutUsCustomization?.Title}
          </div>
          <div className="desktop:text-s20l30 laptop:text-s20l30 desktop:text-F1F1F1 laptop:text-F1F1F1 text-center desktop:py-40 laptop:py-40 desktop:w-885 laptop:w-885 px-30 mobile:pt-39 mobile:w-100% mobile:pb-32 mobile:text-F1F1F1 mobile:text-s14l21 mobile:px-25">
            {aboutUsCustomization?.Description}
          </div>

          <Image
            src="/images/backgrounds/line-bg.svg"
            type="img"
            className="w-1049 laptop:w-790 h-67 mobile:hidden"
          />

          {/* <div className="flex w-100% justify-center desktop:hidden laptop:hidden ">
            <Image
              src="/images/backgrounds/customization-img-mobile.svg"
              height={151}
              width={217}
            />
          </div> */}
          <div className="flex w-100% px-175 laptop:px-100 desktop:pt-48 text-center mobile:hidden">
            {aboutUsCustomization2 &&
              aboutUsCustomization2.map((item, index) => (
                <div
                  className="flex flex-col laptop:pt-30 w-100% desktop:w-400 items-center px-30 desktop:m-auto desktop:pl-70"
                  key={index}
                >
                  <Image
                    type="img"
                    src={item?.Illustration[0]}
                    className="desktop:object-cover h-174 w-249 laptop:h-140 laptop:w-150"
                  />

                  <div className="text-s24l29 text-FFFFFF font-semibold text-center pt-48">
                    {item?.Title}
                  </div>
                  <div className="text-s20l30 text-F1F1F1 text-center pt-8 desktop:w-400">
                    {item?.Description}
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
                <div className="h-12 w-12 bg-B0D472 rounded-full  absolute mt-100"></div>
                <div className="w-150 text-s18l27 text-F1F1F1 text-center mt-15">
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
            <div className="pt-16 h-270">
              <div className="flex flex-col w-100% items-center">
                <div className="text-s14l21 text-F1F1F1 text-center pt-8 pb-41 w-100% px-35">
                  {val1?.Description}
                </div>
                {aboutUsCustomization2 && (
                  <Image
                    type="img"
                    src={val1?.Illustration[0]}
                    className="h-128 w-175"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="desktop:py-150 laptop:py-100 mobile:py-80 w-100% bg-E0EFD4">
          <div className="w-100% desktop:text-center laptop:text-center mobile:text-s22l33 mobile:text-000000 desktop:text-s45l45 laptop:text-s45l45 desktop:text-252525 laptop:text-252525 desktop:font-medium laptop:font-medium mobile:font-bold pl-33">
            The Mintoak effect
          </div>
          <div className="flex desktop:px-150 mobile:flex-col items-center justify-around mobile:pt-23 desktop:pt-60 laptop:pt-60 mobile:w-100%">
            {partnerWithUsMintoakEffect &&
              partnerWithUsMintoakEffect.map((item, index) => (
                <div
                  className="flex desktop:flex-col laptop:flex-col desktop:text-center laptop:text-center items-center desktop:px-50 laptop:px-50 mobile:w-100% mobile:pl-20 mobile:pr-50 mobile:pb-20"
                  key={index}
                >
                  <CircularProgress
                    size={250}
                    strokeWidth={20}
                    percentage={item?.Count}
                    color="green"
                    animation={anime}
                  />
                  <div className=" mobile:pl-15 desktop:w-200 desktop:text-s22l26_4 laptop:text-s22l26_4 mobile:text-252525 mobile:text-s16l19 desktop:text-0D0D0D laptop:text-0D0D0D desktop:pt-31 laptop:pt-31 font-medium">
                    {item?.Title}
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* Partner with us form */}
        <div className="w-100%  bg-footer desktop:px-80">
          <div ref={scrollPoint} />
          <div className="desktop:text-s45l45 laptop:text-s45l45 text-FFFFFF desktop:pl-180 laptop:pl-100 desktop:pt-100 laptop:pt-100 pb-48 mobile:pt-48 mobile:pl-20 mobile:text-s22l45">
            Partner with us
          </div>
          <div className="w-100% flex mobile:flex-col mobile:px-20 laptop:hidden desktop:hidden">
            <div className="desktop:px-100 laptop:px-100 w-100%">
              <div className="pb-40 ">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                  Full Name
                </div>
                <input
                  type="text"
                  className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% global-input pb-5"
                />
              </div>
              <div className="w-100% ">
                <div className="pb-40 ">
                  <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 w-100% desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                    Contact Number
                  </div>

                  <span className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-8B8B8B pr-5 absolute mobile:pt-3 mobile:border-r">
                    +91
                  </span>
                  <input
                    type="number"
                    className=" global-input-number desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% mobile:pl-35 desktop:pl-50 laptop:pl-50 global-input pb-3"
                  />
                </div>
              </div>
            </div>
            <div className="desktop:pr-100 laptop:pr-100 w-100%">
              <div className="pb-40 w-100% ">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                  Business Email
                </div>
                <input
                  type="text"
                  className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% global-input pb-5"
                />
              </div>
              <div className="pb-40 ">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                  Bank Name
                </div>
                <input
                  type="text"
                  className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% global-input pb-5"
                />
              </div>
            </div>
            <div className="desktop:pr-100 laptop:pr-100 w-100%">
              <div className="pb-40 ">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                  Job Title
                </div>
                <input
                  type="text"
                  className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% global-input pb-5"
                />
              </div>
              <div className="pb-40 w-100% mobile:text-s12l14 mobile:global-partner-m  global-partner">
                <div className="mobile:text-s12l14  desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-10">
                  Country
                </div>
                <Select
                  className="w-100%"
                  dropdownStyle={{
                    border: "1px solid #9F9FA0",
                    boxSizing: "border-box",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    background:
                      "linear-gradient(126.9deg, #3F3F3F -3.96%, #000000 136.6%)",
                  }}
                  placeholder="Select"
                >
                  {countryList &&
                    countryList.Data.map((item, index) => (
                      <Option
                        className="global-option-career"
                        style={{
                          backgroundColor: "transparent",
                        }}
                        value={item.name}
                        key={index}
                      >
                        {item.name}
                      </Option>
                    ))}
                </Select>
              </div>
            </div>
          </div>
          <div className="w-100% flex mobile:flex-col justify-between desktop:pl-180 desktop:pr-312 mobile:px-20 mobile:hidden">
            <div className="w-360">
              <div className="pb-40 ">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                  Full Name
                </div>
                <input
                  type="text"
                  className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% global-input pb-5"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  value={fullName}
                />
              </div>
              <div className="pb-56 ">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15 ">
                  Bank Name
                </div>
                <input
                  type="text"
                  className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% global-input pb-5"
                  onChange={(e) => {
                    setBankName(e.target.value);
                  }}
                  value={bankName}
                />
                <div className="flex text-s20l24 desktop:text-F1F1F1 mt-20">
                  <Image
                    src="/images/icons/Bank_mark.svg"
                    type="img"
                    className="w-25 h-25 mr-8 mobile:hidden"
                  />
                  Customise Your Product
                </div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
            <div className="w-360">
              <div className="w-100% ">
                <div className="pb-40 ">
                  <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 w-100% desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                    Contact Number
                  </div>

                  <span className="desktop:text-s20l24 border-r border-C4C4C4 laptop:text-s20l24 mobile:text-s14l16_8 text-8B8B8B pr-5 absolute mobile:pt-3">
                    +91
                  </span>
                  <input
                    type="number"
                    className=" global-input-number desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% mobile:pl-35 desktop:pl-50 laptop:pl-50 global-input pb-3"
                    onChange={(e) => {
                      setContactNo(e.target.value);
                    }}
                    value={contactNo}
                  />
                </div>
              </div>
              <div className="pb-40 ">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                  Job Title
                </div>
                <input
                  placeholder="Head of Product Team"
                  type="text"
                  className="job_title desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% global-input pb-5"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
              </div>
            </div>
            <div className="w-360">
              <div className="pb-40 w-100% ">
                <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15">
                  Business Email
                </div>
                <input
                  type="text"
                  className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-F1F1F1 w-100% global-input pb-5"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </div>
              <div className="pb-40 w-100% mobile:text-s12l14 mobile:global-partner-m  global-partner">
                <div className="mobile:text-s12l14  desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-10">
                  Country
                </div>
                <Select
                  className="w-100%"
                  dropdownStyle={{
                    border: "1px solid #9F9FA0",
                    boxSizing: "border-box",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    background:
                      "linear-gradient(126.9deg, #3F3F3F -3.96%, #000000 136.6%)",
                  }}
                  placeholder="Select"
                  onChange={(e) => {
                    setCountry(e.target);
                  }}
                  value={country}
                >
                  {countryList &&
                    countryList.Data.map((item, index) => (
                      <Option
                        className="global-option-career"
                        style={{
                          backgroundColor: "transparent",
                        }}
                        value={item.name}
                        key={index}
                      >
                        {item.name}
                      </Option>
                    ))}
                </Select>
              </div>
            </div>
          </div>
          <div>
            <div className="pb-40 desktop:pl-180 desktop:pr-312 mobile:p-20 mobile:pt-0">
              <div className="mobile:text-s12l14 desktop:text-s20l24 laptop:text-s20l24 mobile:text-C4C4C4 desktop:text-C4C4C4 laptop:text-C4C4C4 pb-15 desktop:pb-58">
                Message
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-F1F1F1 w-100% global-input pb-5"
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
              />
            </div>
          </div>
          {validate === false && (
            <>
              <div className="py-18 flex desktop:pl-180 desktop:pr-312 laptop:px-100 w-100%">
                <Image
                  src="/images/backgrounds/warn.svg"
                  height={20}
                  width={18}
                />
                <div className="text-EC5F22 text-s18l22 pl-10">
                  Please enter all the necessary details to submit the form.
                </div>
              </div>
            </>
          )}

          <div className="desktop:pl-180 desktop:pr-312 laptop:pl-180 laptop:pr-312 w-100% pb-100 mobile:flex mobile:items-center mobile:justify-center">
            <div
              onClick={() => handleSubmit()}
              className="mobile:w-320 desktop:w-359 laptop:w-359 button desktop:text-s22l26_4 laptop:text-s22l26_4 text-FFFFFF mobile:text-s14l16_8 font-bold mobile:py-10 mobile:px-98 desktop:py-15 laptop:py-15 desktop:px-176 laptop:px-176"
            >
              Submit
            </div>
          </div>
        </div>
        {/* our partners */}
        <div className="mobile:py-80 bg-E0EFD4">
          <div className="text-s44l120 mobile:text-s20l150 text-252525 mb-30 font-bold text-center desktop:pt-150 laptop:pt-80">
            Our partners
          </div>
          <div className="flex justify-center items-center w-100% py-50 laptop:px-90 px-180 pb-150 laptop:pb-80 mobile:px-0 mobile:mb-0 mobile:hidden">
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
                  <button
                    onClick={onClick}
                    disabled={isEdge}
                    className="h-120 laptop:h-140"
                  >
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
          <div className="px-20 desktop:hidden laptop:hidden">
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
              {comunityCard.map((item, index) => {
                return (
                  <div className="" key={index}>
                    <Image src={item.BankLogo} width={167} height={96} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      {modalvisible ? (
        <Modal
          bodyStyle={{
            background:
              "linear-gradient(341.98deg, #E9F2DD 21.15%, #8EA56F 184.51%)",
          }}
          centered
          visible={modalvisible}
          onCancel={() => setmodalVisible(false)}
          footer={null}
        >
          <div className="w-100%">
            <div className="w-100% flex justify-center mobile:pt-9 desktop:pt-42 laptop:pt-42">
              <Image
                src="/images/icons/thumb-icon.svg"
                width={135}
                height={135}
              />
            </div>
            <div className="w-100% text-center mobile:text-s16l24 desktop:text-s22l33 laptop:text-s22l33 text-252525 mobile:38 desktop:px-50 laptop:px-50 mobile:pb-29 desktop:pb-35 laptop:pb-35 font-bold">
              Thank you for getting in touch. We will get back to you shortly.
            </div>
          </div>
        </Modal>
      ) : null}
      {demoPopup && (
        <Request_Demo triger={demoPopup} handleClose={TogglePopup} />
      )}
    </>
  );
}
