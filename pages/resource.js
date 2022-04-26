import { useEffect, useState } from "react";
import { API, endpoints } from "../components/helpers/API";
import Image from "../components/helpers/Image";
import Request_Demo from "./request_demo";
import { Pagination } from "antd";
import { useRouter } from "next/router";

export default function Resources() {
  const router = useRouter();
  const [demoPopup, setDemoPopup] = useState(false);
  const [resourcesBlogList, setResourcesBlogList] = useState(null);
  const [allList, setAllList] = useState(null);
  const [isClicked, setIsClicked] = useState("b");
  const [search, setSearch] = useState(null);

  const TogglePopup = () => {
    setDemoPopup(false);
  };
  useEffect(() => {
    // resources_blog_list
    API({
      url: endpoints.resources_blog_list,
    }).then((resp) => {
      if (!resp.message) {
        setResourcesBlogList(resp);
        setAllList(resp);
      }
    });
  }, []);

  useEffect(() => {
    if (search && search.length) {
      let list =
        resourcesBlogList &&
        resourcesBlogList.filter((rList) =>
          rList.Title.toLowerCase().includes(search.toLowerCase())
        );
      setResourcesBlogList(list);
    } else {
      setResourcesBlogList(allList);
    }
  }, [search]);

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div>
      <div className="w-100%">
        <div className="flex mobile:flex-col relative top-bg-container desktop:bg-bg_resource laptop:bg-bg_resource mobile:bg-bg_resource_mobile bg-cover h-fit laptop:w-fit bg-origin-content">
          {/* <Image
                        src="/images/backgrounds/resource-bg.svg"
                        className="w-100% h-100%  absolute z-minus1 mobile:hidden"
                        layout="fill"
                        width={1920}
                        height={640}
                    // type="img"

                    /> */}
          <div className="desktop:w-50% desktop:py-100  desktop:pl-180 laptop:py-100 laptop:pl-180  laptop:w-70% tablet:w-80% tablet:p-30 px-20 mobile:pt-40 mobile:w-100%  pb-40 z-10">
            <div className="text-s44l120 mobile:text-s20l24 text-FFFFFF shrink-0 pr-50">
              Get your money in seconds — 24/7 — with instant transfer
            </div>
            <div className="text-s24l36 mobile:text-s14l24 text-FFFFFF shrink-0 mt-37">
              In the fourth season of the American sitcom Friends, Chandler
              wants to quit his gym membership...
            </div>
            <div>
              <div
                onClick={() => setDemoPopup(true)}
                className="button w-216 mobile:w-100% mobile:h-37 mobile:w-166 mobile:text-s14l16_8 h-54 mt-40 cursor-pointer z-20"
              >
                Read More
              </div>
            </div>
          </div>
          <div className="desktop:w-50% desktop:p-100 mobile:justify-between mobile:w-300 laptop:p-100 mobile:flex-row laptop:w-70% tablet:w-80% tablet:p-30 px-20  pb-40 z-10 flex flex-col items-end">
            <div className="cursor-pointer ml-auto mb-16 btn rounded-md mobile:hidden border-2 border-solid border-F1F1F1">
              <Image
                src="/images/backgrounds/Resource_bg1.svg"
                type="img"
                className="h-84 w-128 rounded-md global-img"
              />
            </div>
            <div className="cursor-pointer btn  rounded-md desktop:hidden laptop:hidden">
              <Image
                src="/images/backgrounds/Resource_bg1.svg"
                width={84}
                height={130}
              />
            </div>
            <div className="cursor-pointer btn mb-16 bg-100F0F border-2 border-solid border-100F0F rounded-md mobile:hidden ">
              <Image
                src="/images/backgrounds/Resource_bg2.svg"
                type="img"
                className="h-84 w-128 rounded-md global-img"
              />
            </div>
            <div className="cursor-pointer btn rounded-md desktop:hidden laptop:hidden mt-276">
              <Image
                src="/images/backgrounds/Resource_bg2.svg"
                width={84}
                height={130}
              />
            </div>
            <div className="cursor-pointer btn mb-16 bg-100F0F border-2 border-solid border-100F0F rounded-md mobile:hidden ">
              <Image
                src="/images/backgrounds/Resource_bg3.svg"
                type="img"
                className="h-84 w-128 rounded-md global-img"
              />
            </div>
            <div className="cursor-pointer btn rounded-md desktop:hidden laptop:hidden">
              <Image
                src="/images/backgrounds/Resource_bg3.svg"
                width={84}
                height={130}
              />
            </div>
            <div className="cursor-pointer btn bg-100F0F border-2 border-solid border-100F0F rounded-md mobile:hidden ">
              <Image
                src="/images/backgrounds/Resource_bg3.svg"
                type="img"
                className="h-84 w-128 rounded-md global-img"
              />
            </div>
            <div className="cursor-pointer btn rounded-md desktop:hidden laptop:hidden">
              <Image
                src="/images/backgrounds/Resource_bg3.svg"
                width={84}
                height={130}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-F3FBF5 desktop:px-100 laptop:px-100 mobile:px-20">
        <div className="desktop:pt-80 laptop:pt-80 mobile:pt-40  font-bold text-s44l66 desktop:pb-60 laptop:pb-60 mobile:pb-30 mobile:text-s22l33 mobile:text-000000">
          In the media
        </div>
        <div className="flex items-center">
          <div className="w-100%">
            <input
              className="outline-none border-2 border-8FC055 bg-DFEFD4 h-54 w-100% pl-70 desktop:text-s20l24 laptop:text-s20l24"
              placeholder="Ex. Future of banking..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className="text-252525 absolute pl-27 pt-8">
            <Image src="/images/icons/search-icon.svg" width={26} height={26} />
          </div>
          <div className="mobile:hidden button w-206 mobile:w-100% mobile:h-40 h-54 cursor-pointer z-20">
            Search
          </div>
          <div className="desktop:hidden laptop:hidden button px-20 py-15 ">
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>

        {/* scroll buttons */}
        <div className="flex desktop:pb-80 laptop:pb-80 mobile:pb-40 mobile:pt-21 desktop:pt-41 laptop:pt-41">
          <div className="flex w-100% overf whitespace-nowrap pb-20">
            <div className="pr-21 w-auto whitespace-nowrap">
              <div
                className={
                  "shadow-md flex inline-block items-center justify-center rounded-lg border border-87BD25 inline-block cursor-pointer  " +
                  (isClicked === "b" ? "bg-faqs_bg" : "bg-DFEFD4")
                }
                onClick={() => setIsClicked("b")}
              >
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/bank-icon.svg"
                    height={19}
                    width={19}
                  />
                </div>
                <div className="text-s20l40 text-252525 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  For Banks
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap">
              <div
                className={
                  "shadow-md flex inline-block items-center justify-center rounded-lg border border-87BD25 inline-block cursor-pointer  " +
                  (isClicked === "c" ? "bg-faqs_bg" : "bg-DFEFD4")
                }
                onClick={() => setIsClicked("c")}
              >
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/merchants-icon.svg"
                    height={25}
                    width={19}
                  />
                </div>
                <div className="text-s20l40 text-525252 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  For Merchants
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap">
              <div
                className={
                  "shadow-md flex inline-block items-center justify-center rounded-lg border border-87BD25 inline-block cursor-pointer  " +
                  (isClicked === "d" ? "bg-faqs_bg" : "bg-DFEFD4")
                }
                onClick={() => setIsClicked("d")}
              >
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/payment-bank.svg"
                    height={21}
                    width={32}
                  />
                </div>
                <div className="text-s20l40 text-525252 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  Payments
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap">
              <div
                className={
                  "shadow-md flex inline-block items-center justify-center rounded-lg border border-87BD25 inline-block cursor-pointer  " +
                  (isClicked === "e" ? "bg-faqs_bg" : "bg-DFEFD4")
                }
                onClick={() => setIsClicked("e")}
              >
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/finance.svg"
                    height={21.33}
                    width={24}
                  />
                </div>
                <div className="text-s20l40 text-525252 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  Finance Trends
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap">
              <div
                className={
                  "shadow-md flex inline-block items-center justify-center rounded-lg border border-87BD25 inline-block cursor-pointer  " +
                  (isClicked === "f" ? "bg-faqs_bg" : "bg-DFEFD4")
                }
                onClick={() => setIsClicked("f")}
              >
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/product.svg"
                    height={22.5}
                    width={20}
                  />
                </div>
                <div className="text-s20l40 text-525252 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  Products
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap">
              <div
                className={
                  "shadow-md flex inline-block items-center justify-center rounded-lg border border-87BD25 inline-block cursor-pointer  " +
                  (isClicked === "g" ? "bg-faqs_bg" : "bg-DFEFD4")
                }
                onClick={() => setIsClicked("g")}
              >
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/fintech.svg"
                    height={22}
                    width={22}
                  />
                </div>
                <div className="text-s20l40 text-525252 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  Fintech
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap">
              <div
                className={
                  "shadow-md flex inline-block items-center justify-center rounded-lg border border-87BD25 inline-block cursor-pointer  " +
                  (isClicked === "h" ? "bg-faqs_bg" : "bg-DFEFD4")
                }
                onClick={() => setIsClicked("h")}
              >
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/growth.svg"
                    height={18}
                    width={19}
                  />
                </div>
                <div className="text-s20l40 text-525252 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  Growth Strategy
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blogs */}
        <div className="text-s20l24 text-828282 desktop:pb-20 laptop:pb-20 mobile:pb-10 mobile:text-s14l16_8">
          Showing 10 Blogs
        </div>
        {resourcesBlogList &&
          resourcesBlogList.map((item, index) => (
            <div
              className="pb-80 w-100% mobile:pb-25"
              key={index}
              onClick={() => router.push("/blog-detail")}
            >
              <div className="bg-FFFFFF flex shadow-bankbox h-100%">
                <div className="p-15 mobile:hidden h-290 flex items-center pt-50">
                  <Image
                    src="/images/backgrounds/blog1.svg"
                    height={296}
                    width={388}
                    // layout="fill"
                  />
                </div>
                <Image
                  src="/images/backgrounds/blog-img.svg"
                  type="img"
                  className="h-130 w-3800 py-4 pl-4 pr-10 desktop:hidden laptop:hidden"
                  // layout="fill"
                />
                <div className="desktop:pl-27 laptop:pl-27 desktop:pt-50 laptop:pt-22 mobile:pt-10 desktop:w-70%">
                  <div className="text-46AC34 desktop:text-s20l24 laptop:text-s20l24 mobile:text-s12l14 desktop:pb-24 mobile:pb-5">
                    {item?.ReadTime}
                  </div>
                  <div className="font-semibold desktop:text-s34l42 laptop:text-s24l40_8 mobile:text-s16l19 desktop:pb-31 mobile:pb-19 laptop:pb-15 ">
                    {item?.Title}
                  </div>
                  <div className="flex desktop:text-s20l24 laptop:text-s20l24 mobile:text-s12l18 desktop:pb-31 laptop:pb-15 mobile:pb-10">
                    <div className="desktop:w-200 laptop:w-200 mobile:w-150 font-bold">
                      By <span className="font-extrabold">{item?.Author} </span>
                      |{month[new Date(item?.Date).getMonth()]}{" "}
                      {new Date(item?.Date).getDate()}th{" "}
                      {new Date(item?.Date).getFullYear()}
                    </div>
                    <div className="desktop:pl-14 laptop:pl-14 font-extrabold">
                      {item?.PublicationName}
                    </div>
                  </div>
                  <div className="text-s20l24 text-525252 laptop:text-s16l19 mobile:hidden desktop:w-845 desktop:mb-34">
                    {item?.ArticleGist}
                  </div>
                </div>
                <div className="flex flex-row-reverse justify-end items-end desktop:pl-50 laptop:pl-50">
                  <i className="fa fa-arrow-right-long bg-button text-FFFFFF mobile:px-8 mobile:py-15 desktop:px-20 desktop:py-25 laptop:px-20 laptop:py-25 flex items-center justify-center fa-lg cursor-pointer rounded-sm"></i>
                </div>
              </div>
            </div>
          ))}

        <div className="flex justify-center desktop:pt-60 laptop:pt-60  laptop:pb-150 desktop:pb-150 mobile:pt-24 mobile:pb-80 custom-pagination">
          <Pagination defaultCurrent={1} total={30} />
        </div>
      </div>
      {demoPopup && (
        <Request_Demo triger={demoPopup} handleClose={TogglePopup} />
      )}
    </div>
  );
}
