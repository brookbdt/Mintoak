import Image from "../components/helpers/Image";
import { Checkbox, Collapse } from "antd";
import { Pagination } from "antd";
import { Input } from "antd";
import { API, endpoints } from "../components/helpers/API";
import { Modal } from "antd";
import { useEffect, useState } from "react";
const { TextArea } = Input;
const { Panel } = Collapse;

export default function Contact() {
  const [modalvisible, setmodalVisible] = useState(false);
  const [modalquerievisible, setmodalquerieVisible] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const [isClicked, setIsClicked] = useState("b");
  const [search, setSearch] = useState(null);
  const [allFaqs, setAllFaqs] = useState(null);
  const [isClickedSearch, setIsClickedSearch] = useState(false);
  const [omniStatus, setOmniStatus] = useState(false);
  const [momStatus, setMomStatus] = useState(false);
  const [paylaterStatus, setPaylaterStatus] = useState(false);
  const [acornStatus, setAcornStatus] = useState(false);
  const [connectStatus, setConnectStatus] = useState(false);
  const [ikuStatus, setIkuStatus] = useState(false);
  const [oarStatus, setOarStatus] = useState(false);
  const [farStatus, setFarStatus] = useState(false);
  const [batStatus, setBatStatus] = useState(false);
  const [uamStatus, setUamStatus] = useState(false);
  const [aimStatus, setAimStatus] = useState(false);
  const [macStatus, setMacStatus] = useState(false);
  const [pamStatus, setPamStatus] = useState(false);
  const [samStatus, setSamStatus] = useState(false);
  const [xsmStatus, setXsmStatus] = useState(false);
  const [xscStatus, setXscStatus] = useState(false);

  useEffect(() => {
    API({
      url: endpoints.faq,
    }).then((resp) => {
      if (!resp.message) {
        setFaqs(resp);
        setAllFaqs(resp);
      }
    });
  }, []);

  useEffect(() => {
    if (search?.length == 0) {
      setIsClickedSearch(false);
      setFaqs(allFaqs);
    }
  }, [search]);

  const clicked = () => {
    setInterval(() => {
      setIsClickedSearch(false);
    }, 500);
  };
  const handleSearch = () => {
    setIsClickedSearch(true);
    if (search && search.length) {
      let list = allFaqs.filter((rList) =>
        rList.Question.toLowerCase().includes(search.toLowerCase())
      );
      setFaqs(list);
    } else {
      setIsClickedSearch(false);
      setFaqs(allFaqs);
    }
  };

  return (
    <>
      <div className="w-100% desktop:px-180 laptop:px-100 mobile:px-20 bg-home-top">
        <div className="flex flex-col">
          <div className="desktop:text-s44l66 laptop:text-s44l66 mobile:text-s22l33 text-252525 font-bold desktop:pt-99 laptop:pt-99 mobile:pt-40">
            FAQs
          </div>
          <div className="flex pt-48 pb-40 mobile:hidden">
            <div className="w-100%">
              <input
                type="text"
                className="outline-none border-2 border-8FC055 bg-DFEFD4 h-54 w-100% pl-90 text-s20l24"
                placeholder="Ex. What is pay later?"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
              />
            </div>
            <div className="absolute pl-27 pt-10">
              <Image
                src="/images/icons/search-icon.svg"
                width={35.15}
                height={37}
              // onClick={() => { handleSearch(); alert(7) }}
              />
            </div>
            <div
              className={`button w-206 text-s22l26_4 ${isClickedSearch && "btn-click-shaddow"
                }`}
              onMouseUp={() => clicked()}
              onClick={() => {
                handleSearch();
              }}
            >
              Search
            </div>
            <div
              className="pl-24 flex items-center justify-center cursor-pointer"
              onClick={() => setmodalVisible(true)}
            >
              <Image
                src="/images/icons/filter-icon.svg"
                width={54}
                height={54}
              />
            </div>
          </div>

          <div className="flex pt-30 pb-40 desktop:hidden laptop:hidden">
            <div className="w-100%">
              <input
                type="text"
                className="outline-none border border-8FC055 bg-DFEFD4 h-48 w-100% pl-50 desktop:text-s20l24 laptop:text-s20l24"
                placeholder="Enter your query here"
              />
            </div>
            <div className="absolute pl-10 pt-9">
              <Image
                src="/images/icons/search-icon.svg"
                width={32}
                height={30}
              />
            </div>
            <div

              className={`${isClickedSearch && "btn-click-shaddow"
                } button w-54 text-s22l26_4 mobile:text-s18l21_6 px-18 mobile:rounded-none`}
              onMouseUp={() => clicked()}
              onClick={() => {
                handleSearch();
              }}
            >
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
            <div
              className="pl-10 flex items-center justify-center cursor-pointer"
              onClick={() => setmodalVisible(true)}
            >
              <Image
                src="/images/icons/filter-icon.svg"
                width={54}
                height={54}
              />
            </div>
          </div>
          {/* scroll buttons */}
          <div className="flex w-100% mobile:overflow-x-scroll mobile:overflow-y-hidden mobile:pb-20 hide-scroll">
            <div className="pr-21 w-auto whitespace-nowrap mobile:pr-10">
              <div
                className={
                  "shadow-md-faq flex inline-block items-center justify-center px-18 rounded-lg border border-87BD25 inline-block cursor-pointer mobile:w-65 mobile:h-26  " +
                  (isClicked === "b" ? "bg-faqs_bg" : "bg-DFEFD4")
                }
                onClick={() => setIsClicked("b")}
              >
                <div className="pt-5 mobile:hidden">
                  <Image
                    src="/images/icons/bank-icon.svg"
                    height={18}
                    width={19}
                  />
                </div>
                <div className="text-s20l40 text-252525 desktop:pl-10 laptop:pl-10 mobile:text-s12l24">
                  For Banks
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap mobile:pr-10">
              <div
                className={
                  "shadow-md-faq flex inline-block items-center justify-center px-18  rounded-lg border border-87BD25 inline-block cursor-pointer mobile:w-95  " +
                  (isClicked === "m" ? "bg-faqs_bg" : "bg-DFEFD4")
                }
                onClick={() => setIsClicked("m")}
              >
                <div className="pt-5 mobile:hidden">
                  <Image
                    src="/images/icons/merchants-icon.svg"
                    height={24.87}
                    width={19.23}
                  />
                </div>
                <div className="text-s20l40 text-252525 desktop:pl-10 laptop:pl-10 mobile:text-s12l24">
                  For Merchants
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap mobile:pr-10 desktop:hidden laptop:hidden">
              <div
                className={
                  "shadow-md-faq flex inline-block items-center justify-center px-18  rounded-lg border border-87BD25 inline-block cursor-pointer mobile:w-115 " +
                  (isClicked === "c" ? "bg-faqs_bg" : "bg-DFEFD4")
                }
                onClick={() => setIsClicked("c")}
              >
                <div className="pt-5 mobile:hidden">
                  <Image
                    src="/images/icons/merchants-icon.svg"
                    height={24.87}
                    width={19.23}
                  />
                </div>
                <div className="text-s20l40 text-252525 desktop:pl-10 mobile:text-s12l24">
                  How to get started
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap mobile:pr-10 desktop:hidden laptop:hidden">
              <div
                className={
                  "shadow-md-faq flex inline-block items-center justify-center px-18  rounded-lg border border-87BD25 inline-block cursor-pointer mobile:w-65 " +
                  (isClicked === "d" ? "bg-faqs_bg" : "bg-DFEFD4")
                }
                onClick={() => setIsClicked("d")}
              >
                <div className="pt-5 mobile:hidden">
                  <Image
                    src="/images/icons/merchants-icon.svg"
                    height={24.87}
                    width={19.23}
                  />
                </div>
                <div className="text-s20l40 text-252525 desktop:pl-10 mobile:text-s12l24">
                  Payments
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* accordian  */}
        <div className="pt-40 desktop:pt-81 laptop:pt-81 mobile:w-100% global-collapse">
          <div className="text-s20l24 text-828282 pb-20 mobile:text-s14l16_8 mobile:pb-10">
            Need help ? We got you covered.
          </div>
          <div className="border-2 border-8CC63E">
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
                {faqs?.map((items, index) => {
                  return (
                    <Panel
                      className="text-252525 desktop:text-s24l29 laptop:text-s24l29 mobile:text-s14l21 desktop:p-30 laptop:p-30 font-semibold"
                      header={items.Question}
                      key={index}
                    >
                      <p className="mobile:text-6B6B6B desktop:text-525252 laptop:text-525252 laptop:text-s20l150 mobile:text-s12l18 desktop:text-s20l150 font-normal desktop:pr-460 laptop:pr-100">
                        {items.Answer}
                      </p>
                    </Panel>
                  );
                })}
              </Collapse>
            </div>
          </div>
          {faqs && faqs.length > 0 && (
            <div className="flex desktop:py-60 laptop:py-60 w-100% justify-center items-center custom-pagination mobile:pt-24 mobile:pb-60">
              <Pagination defaultCurrent={1} total={30} />
            </div>
          )}
        </div>
        {/* more queries */}
        <div className="flex mobile:flex-col w-100% desktop:py-100 laptop:py-100 mobile:pt-20 mobile:pb-28">
          <div className="flex flex-col desktop:w-50% laptop:w-50% mobile:w-100%">
            <div className="desktop:text-s45l45 laptop:text-s45l45 mobile:text-s22l33 font-bold text-252525 pb-16">
              Have more queries?
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
                className="resize-none"
              />
            </div>
            <div className="pt-32 pb-50 custom-textaria-m laptop:hidden desktop:hidden">
              <TextArea
                rows={4}
                placeholder="Ask a question.."
                bordered={false}
                style={{ height: "132px" }}
                className="resize-none"
              />
            </div>
            <div></div>
            <div>
              <div
                onClick={() => setmodalquerieVisible(true)}
                className="button desktop:w-124 laptop:w-124 mobile:w-100% desktop:text-s22l26_4 laptop:text-s22l26_4 mobile:text-s14l16_8 px-28 desktop:py-13 laptop:py-13 mobile:py-10 font-bold"
              >
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
      </div>
      {modalvisible ? (
        <Modal
          className="close-btn"
          bodyStyle={{
            background:
              "linear-gradient(341.98deg, #E9F2DD 21.15%, #8EA56F 184.51%)",
          }}
          centered
          visible={modalvisible}
          onCancel={() => setmodalVisible(false)}
          footer={null}
          width={1400}
        >
          <div className="100% desktop:px-76 laptop:px-76">
            <div className=" mobile:text-s24l29 desktop:text-s36l43 laptop:text-s36l43 text-252525 desktop:pl-10 laptop:pl-10  mobile:pt-35 desktop:pt-80 laptop:pt-80 font-semibold">
              Filters
            </div>
            <div className="mobile:text-s16l19 desktop:text-s24l29 laptop:text-s24l29 text-252525 pt-12 desktop:pl-10 laptop:pl-10 font-semibold">
              Please select the products you have queries for
            </div>
            <div>
              <div className="flex mobile:flex-col w-100% items-center justify-around desktop:pt-40 laptop:pt-40 mobile:pt-35">
                <div
                  className={` flex mobile:mb-12  items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${omniStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setOmniStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/omni.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />
                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      OMNI
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Omni channel transactions with all payment modes
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Omni channel transactions with all payment modes
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox">
                    <Checkbox />
                  </div>
                </div>
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${momStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setMomStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/mom.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      MOM
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        instant merchant onboarding & management
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        instant merchant onboarding & management
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox ">
                    <Checkbox />
                  </div>
                </div>
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${paylaterStatus === true &&
                    "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setPaylaterStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/pay_later.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      Pay Later
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Digital register for customer payment dues
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Digital register for customer payment dues
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox">
                    <Checkbox />
                  </div>
                </div>
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${acornStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setAcornStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/acorn.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      Acorn
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Platform for all the processing
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Platform for all the processing
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox ">
                    <Checkbox />
                  </div>
                </div>
              </div>
              <div className="flex mobile:flex-col w-100% items-center justify-around desktop:pt-40 laptop:pt-40">
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${connectStatus === true &&
                    "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setConnectStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/connect.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      Connect
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Payment and billing integrations
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Payment and billing integrations
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox ">
                    <Checkbox />
                  </div>
                </div>
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${ikuStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setIkuStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/iku.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      IKU
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Instant customer segmentation & recognition
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Instant customer segmentation & recognition
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox  ">
                    <Checkbox />
                  </div>
                </div>
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${oarStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setOarStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/oar.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100  w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      OAR
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Offers and rewards for customers
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Offers and rewards for customers
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox  ">
                    <Checkbox />
                  </div>
                </div>
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${farStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setFarStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/far.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      FAR
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Customer feedback & ratings
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Customer feedback & ratings
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox ">
                    <Checkbox />
                  </div>
                </div>
              </div>
              <div className="flex mobile:flex-col w-100% items-center justify-around desktop:pt-40 laptop:pt-40 ">
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${batStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setBatStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/bat.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      BAT
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Badges, awards and trophies for merchants
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Badges, awards and trophies for merchants
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox ">
                    <Checkbox />
                  </div>
                </div>
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${uamStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setUamStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/uam.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      UAM
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        User access and profile management
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        User access and profile management
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox ">
                    <Checkbox />
                  </div>
                </div>
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${aimStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setAimStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/aim.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      AIM
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Business analytics, insights and metrics
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Business analytics, insights and metrics
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox ">
                    <Checkbox />
                  </div>
                </div>
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${macStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setMacStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/mac.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      MAC
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content ">
                        Marketing and campaigns for latest trends
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Marketing and campaigns for latest trends
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox ">
                    <Checkbox />
                  </div>
                </div>
              </div>
              <div className="flex mobile:flex-col w-100% items-center justify-around desktop:pt-40 laptop:pt-40">
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${pamStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setPamStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/pam.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      PAM
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Portfolio analytics and management
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Portfolio analytics and management
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox">
                    <Checkbox />
                  </div>
                </div>
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${samStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setSamStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/sam.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      SAM
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Service analytics and management
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Service analytics and management
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox ">
                    <Checkbox />
                  </div>
                </div>
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${xsmStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setXsmStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/xsm.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      XSM
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Cross- sell to merchants
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Cross- sell to merchants
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox ">
                    <Checkbox />
                  </div>
                </div>
                <div
                  className={`flex mobile:mb-12 items-center cursor-pointer mobile:w-100%  mobile:border mobile:border-46AC34 mobile:pl-13 laptop:px-15 desktop:px-15 laptop:py-10 desktop:py-10 popup ${xscStatus === true && "desktop:bg-8FC055 laptop:bg-8FC055"
                    }`}
                  onClick={() => {
                    setXscStatus((prev) => !prev);
                  }}
                >
                  <Image
                    src="/images/icons/xsc.svg"
                    type="img"
                    className="desktop:h-72 desktop:w-72 laptop:h-72 laptop:w-72 mobile:h-50 mobile:w-50"
                  />

                  <div className="flex flex-col desktop:h-100 laptop:h-100 w-100% justify-center pl-15 mobile:py-10">
                    <div className="mobile:text-s16l19 desktop:text-s20l24 laptop:text-s20l24 text-252525 font-bold ">
                      XSC
                    </div>
                    <div className="w-153 mobile:hidden ">
                      <div className="text-s16l19 text-525252 popup-content">
                        Cross- sell to customers
                      </div>
                    </div>
                    <div className="w-163 desktop:hidden laptop:hidden pt-5">
                      <div className="text-s12l14 text-525252">
                        Cross- sell to customers
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden laptop:hidden custom-checkbox ">
                    <Checkbox />
                  </div>
                </div>
              </div>
              <div className="w-100% desktop:pt-48 laptop:pt-48 desktop:pb-40 laptop:pt-48 mobile:pt-40 mobile:pb-28 flex items-center justify-center">
                <div
                  className="button w-124 mobile:w-166 text-s22l26_4 mobile:text-s14l16_8 py-15 mobile:py-10 h-54 laptop:w-100 laptop:text-s18l22 laptop:py-10 laptop:h-40"
                  onClick={() => {
                    setmodalquerieVisible(true);
                    setmodalVisible(false);
                  }}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
      {modalquerievisible ? (
        <Modal
          bodyStyle={{
            background:
              "linear-gradient(341.98deg, #E9F2DD 21.15%, #8EA56F 184.51%)",
            transform: "rotate(-180deg)",
          }}
          centered
          visible={modalquerievisible}
          onCancel={() => setmodalquerieVisible(false)}
          footer={null}
          className="shadow-popupShadow close-btn faq-submit-bg"
        >
          <div className="w-100% rotate-180">
            <div className="w-100% flex justify-center  mobile:pt-9 desktop:pt-42 laptop:pt-42">
              <div>
                <Image
                  src="/images/icons/thumb-icon.svg"
                  width={135}
                  height={135}
                />
              </div>
            </div>
            <div className="w-100% text-center mobile:text-s16l24 desktop:text-s22l33 laptop:text-s22l33 text-252525 mobile:38 desktop:px-10 laptop:px-10 mobile:pb-29 desktop:pb-35 laptop:pb-35 font-bold">
              Thank you!
              <br /> Your question has been captured successfully.
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
