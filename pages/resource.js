import { useEffect, useState } from "react";
import { API, endpoints } from "../components/helpers/API";
import Image from "../components/helpers/Image";
import { Pagination } from "antd";

export default function Resources() {
  return (
    <div>
      <div className="w-100%">
        <div className="flex mobile:flex-col relative top-bg-container bg-bg_resource h-fit laptop:w-fit bg-origin-content">
          {/* <Image
                        src="/images/backgrounds/resource-bg.svg"
                        className="w-100% h-100%  absolute z-minus1 mobile:hidden"
                        layout="fill"
                        width={1920}
                        height={640}
                    // type="img"

                    /> */}
          <div className="desktop:w-50% desktop:p-100 laptop:p-100 laptop:w-70% tablet:w-80% tablet:p-30 px-20 mobile:pt-40 pb-40 z-10">
            <div className="text-s44l120 mobile:text-s20l24 text-FFFFFF shrink-0">
              Get your money in seconds — 24/7 — with instant transfer
            </div>
            <div className="text-s24l36 mobile:text-s14l24 mobile:text-center text-FFFFFF shrink-0 mt-37">
              In the fourth season of the American sitcom Friends, Chandler
              wants to quit his gym membership...
            </div>
            <div>
              <div className="button w-216 mobile:w-100% mobile:h-40 h-54 mt-40 cursor-pointer z-20">
                Request A Demo
              </div>
            </div>
          </div>
          <div className="desktop:w-50% desktop:p-100 mobile:justify-around laptop:p-100 mobile:flex-row laptop:w-70% tablet:w-80% tablet:p-30 px-20  pb-40 z-10 flex flex-col items-end">
            <div className="cursor-pointer btn rounded-md mobile:hidden">
              <Image
                src="/images/backgrounds/resource-bg.svg"
                width={128}
                height={84}
              />
            </div>
            <div className="cursor-pointer btn rounded-md desktop:hidden laptop:hidden">
              <Image
                src="/images/backgrounds/resource-bg.svg"
                width={84}
                height={130}
              />
            </div>
            <div className="cursor-pointer btn pb-16 rounded-md mobile:hidden">
              <Image
                src="/images/backgrounds/resource-bg.svg"
                width={128}
                height={84}
              />
            </div>
            <div className="cursor-pointer btn rounded-md desktop:hidden laptop:hidden">
              <Image
                src="/images/backgrounds/resource-bg.svg"
                width={84}
                height={130}
              />
            </div>
            <div className="cursor-pointer btn pb-16 rounded-md mobile:hidden">
              <Image
                src="/images/backgrounds/resource-bg.svg"
                width={128}
                height={84}
              />
            </div>
            <div className="cursor-pointer btn rounded-md desktop:hidden laptop:hidden">
              <Image
                src="/images/backgrounds/resource-bg.svg"
                width={84}
                height={130}
              />
            </div>
            <div className="cursor-pointer btn pb-16 rounded-md mobile:hidden">
              <Image
                src="/images/backgrounds/resource-bg.svg"
                width={128}
                height={84}
              />
            </div>
            <div className="cursor-pointer btn rounded-md desktop:hidden laptop:hidden">
              <Image
                src="/images/backgrounds/resource-bg.svg"
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
        <div className="flex desktop:py-42 items-center">
          <div className="w-100%">
            <input
              className="outline-none border-2 border-8FC055 bg-DFEFD4 h-54 w-100% pl-70 text-s20l24"
              placeholder="Ex. Future of banking..."
            />
          </div>
          <div className="text-252525 absolute pl-27 pt-8">
            <Image src="/images/icons/search-icon.svg" width={26} height={26} />
          </div>
          <div className="mobile:hidden button w-206 mobile:w-100% mobile:h-40 h-54 cursor-pointer z-20">
            Search
          </div>
          <div className="desktop:hidden laptop:hidden button px-20 py-15">
            <i class="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>

        {/* scroll buttons */}
        <div className="flex desktop:pb-80 laptop:pb-80 mobile:pb-40 mobile:pt-21 desktop:pt-41 laptop:pt-41">
          <div className="flex w-100% overf whitespace-nowrap pb-20">
            <div className="pr-21 w-auto whitespace-nowrap">
              <div className="shadow-md flex inline-block items-center justify-center bg-faqs_bg rounded-lg border border-87BD25 inline-block cursor-pointer">
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
              <div className="shadow-md flex inline-block items-center justify-center bg-DFEFD4 rounded-lg border border-87BD25 inline-block cursor-pointer">
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/merchants-icon.svg"
                    height={25}
                    width={19}
                  />
                </div>
                <div className="text-s20l40 text-252525 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  For Merchants
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap">
              <div className="shadow-md flex inline-block items-center justify-center bg-DFEFD4 rounded-lg border border-87BD25 inline-block cursor-pointer">
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/payment-blog.svg"
                    height={21}
                    width={32}
                  />
                </div>
                <div className="text-s20l40 text-252525 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  Payments
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap">
              <div className="shadow-md flex inline-block items-center justify-center bg-DFEFD4 rounded-lg border border-87BD25 inline-block cursor-pointer">
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/finance.svg"
                    height={21.33}
                    width={24}
                  />
                </div>
                <div className="text-s20l40 text-252525 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  Finance Trends
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap">
              <div className="shadow-md flex inline-block items-center justify-center bg-DFEFD4 rounded-lg border border-87BD25 inline-block cursor-pointer">
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/product.svg"
                    height={22.5}
                    width={20}
                  />
                </div>
                <div className="text-s20l40 text-252525 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  Products
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap">
              <div className="shadow-md flex inline-block items-center justify-center bg-DFEFD4 rounded-lg border border-87BD25 inline-block cursor-pointer">
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/fintech.svg"
                    height={22}
                    width={22}
                  />
                </div>
                <div className="text-s20l40 text-252525 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  Fintech
                </div>
              </div>
            </div>
            <div className="pr-21 w-auto whitespace-nowrap">
              <div className="shadow-md flex inline-block items-center justify-center bg-DFEFD4 rounded-lg border border-87BD25 inline-block cursor-pointer">
                <div className="mobile:hidden w-50 flex justify-center">
                  <Image
                    src="/images/icons/growth.svg"
                    height={18}
                    width={19}
                  />
                </div>
                <div className="text-s20l40 text-252525 desktop:pr-15 laptop:pr-15 mobile:px-15">
                  Growth Strategy
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blogs */}
        <div className="text-s20l24 text-828282 desktop:pb-20 laptop:pb-20 mobile:pb-10">
          Showing 55 Blogs
        </div>
        <div className="pt-24">
          <div className="bg-FFFFFF flex shadow-bankbox ">
            <div className="p-15 mobile:hidden">
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

            <div className="desktop:pl-27 laptop:pl-27 desktop:pt-53 laptop:pt-22 mobile:pt-10">
              <div className="text-46AC34 desktop:text-s20l24 laptop:text-s20l24 mobile:text-s12l14 desktop:pb-24 mobile:pb-5">
                6 min read
              </div>
              <div className="font-semibold desktop:text-s34l42 laptop:text-s24l40_8 mobile:text-s16l19 desktop:pb-31 mobile:pb-19 laptop:pb-15 ">
                Get your money in seconds — 24/7 — with instant transfer
              </div>
              <div className="flex desktop:text-s20l24 laptop:text-s20l24 mobile:text-s12l18 desktop:pb-31 laptop:pb-15 mobile:pb-10">
                <div className="desktop:w-200 laptop:w-200 mobile:w-150">
                  By Raman Kahnduja | Sept 13, 2021
                </div>
                <div className="desktop:pl-14 laptop:pl-14">Economic Times</div>
              </div>
              <div className="text-s20l24 text-525252 laptop:text-s16l19 mobile:hidden">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s...
              </div>
            </div>
            <div className="flex justify-end items-end">
              <i className="fa fa-arrow-right-long bg-button text-FFFFFF px-15 py-20 flex items-center justify-center fa-lg cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="pt-24">
          <div className="bg-FFFFFF flex shadow-bankbox ">
            <div className="p-15 mobile:hidden">
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
            <div className="desktop:pl-27 laptop:pl-27 desktop:pt-53 laptop:pt-22 mobile:pt-10">
              <div className="text-46AC34 desktop:text-s20l24 laptop:text-s20l24 mobile:text-s12l14 desktop:pb-24 mobile:pb-5">
                6 min read
              </div>
              <div className="font-semibold desktop:text-s34l42 laptop:text-s24l40_8 mobile:text-s16l19 desktop:pb-31 mobile:pb-19 laptop:pb-15 ">
                Get your money in seconds — 24/7 — with instant transfer
              </div>
              <div className="flex desktop:text-s20l24 laptop:text-s20l24 mobile:text-s12l18 desktop:pb-31 laptop:pb-15 mobile:pb-10">
                <div className="desktop:w-200 laptop:w-200 mobile:w-150">
                  By Raman Kahnduja | Sept 13, 2021
                </div>
                <div className="desktop:pl-14 laptop:pl-14">Economic Times</div>
              </div>
              <div className="text-s20l24 text-525252 laptop:text-s16l19 mobile:hidden">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s...
              </div>
            </div>
            <div className="flex justify-end items-end">
              <i className="fa fa-arrow-right-long bg-button text-FFFFFF px-15 py-20 flex items-center justify-center fa-lg cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="pt-24">
          <div className="bg-FFFFFF flex shadow-bankbox ">
            <div className="p-15 mobile:hidden">
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
            <div className="desktop:pl-27 laptop:pl-27 desktop:pt-53 laptop:pt-22 mobile:pt-10">
              <div className="text-46AC34 desktop:text-s20l24 laptop:text-s20l24 mobile:text-s12l14 desktop:pb-24 mobile:pb-5">
                6 min read
              </div>
              <div className="font-semibold desktop:text-s34l42 laptop:text-s24l40_8 mobile:text-s16l19 desktop:pb-31 mobile:pb-19 laptop:pb-15 ">
                Get your money in seconds — 24/7 — with instant transfer
              </div>
              <div className="flex desktop:text-s20l24 laptop:text-s20l24 mobile:text-s12l18 desktop:pb-31 laptop:pb-15 mobile:pb-10">
                <div className="desktop:w-200 laptop:w-200 mobile:w-150">
                  By Raman Kahnduja | Sept 13, 2021
                </div>
                <div className="desktop:pl-14 laptop:pl-14">Economic Times</div>
              </div>
              <div className="text-s20l24 text-525252 laptop:text-s16l19 mobile:hidden">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s...
              </div>
            </div>
            <div className="flex justify-end items-end">
              <i className="fa fa-arrow-right-long bg-button text-FFFFFF px-15 py-20 flex items-center justify-center fa-lg cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="pt-24">
          <div className="bg-FFFFFF flex shadow-bankbox ">
            <div className="p-15 mobile:hidden">
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
            <div className="desktop:pl-27 laptop:pl-27 desktop:pt-53 laptop:pt-22 mobile:pt-10">
              <div className="text-46AC34 desktop:text-s20l24 laptop:text-s20l24 mobile:text-s12l14 desktop:pb-24 mobile:pb-5">
                6 min read
              </div>
              <div className="font-semibold desktop:text-s34l42 laptop:text-s24l40_8 mobile:text-s16l19 desktop:pb-31 mobile:pb-19 laptop:pb-15 ">
                Get your money in seconds — 24/7 — with instant transfer
              </div>
              <div className="flex desktop:text-s20l24 laptop:text-s20l24 mobile:text-s12l18 desktop:pb-31 laptop:pb-15 mobile:pb-10">
                <div className="desktop:w-200 laptop:w-200 mobile:w-150">
                  By Raman Kahnduja | Sept 13, 2021
                </div>
                <div className="desktop:pl-14 laptop:pl-14">Economic Times</div>
              </div>
              <div className="text-s20l24 text-525252 laptop:text-s16l19 mobile:hidden">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s...
              </div>
            </div>
            <div className="flex justify-end items-end">
              <i className="fa fa-arrow-right-long bg-button text-FFFFFF px-15 py-20 flex items-center justify-center fa-lg cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="pt-24">
          <div className="bg-FFFFFF flex shadow-bankbox ">
            <div className="p-15 mobile:hidden">
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
            <div className="desktop:pl-27 laptop:pl-27 desktop:pt-53 laptop:pt-22 mobile:pt-10">
              <div className="text-46AC34 desktop:text-s20l24 laptop:text-s20l24 mobile:text-s12l14 desktop:pb-24 mobile:pb-5">
                6 min read
              </div>
              <div className="font-semibold desktop:text-s34l42 laptop:text-s24l40_8 mobile:text-s16l19 desktop:pb-31 mobile:pb-19 laptop:pb-15 ">
                Get your money in seconds — 24/7 — with instant transfer
              </div>
              <div className="flex desktop:text-s20l24 laptop:text-s20l24 mobile:text-s12l18 desktop:pb-31 laptop:pb-15 mobile:pb-10">
                <div className="desktop:w-200 laptop:w-200 mobile:w-150">
                  By Raman Kahnduja | Sept 13, 2021
                </div>
                <div className="desktop:pl-14 laptop:pl-14">Economic Times</div>
              </div>
              <div className="text-s20l24 text-525252  laptop:text-s16l19 mobile:hidden">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s...
              </div>
            </div>
            <div className="flex justify-end items-end">
              <i className="fa fa-arrow-right-long bg-button text-FFFFFF px-15 py-20 flex items-center justify-center fa-lg cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="flex justify-center desktop:pt-60 laptop:pt-60  laptop:pb-150 desktop:pb-150 mobile:pt-24 mobile:pb-80 custom-pagination">
          <Pagination defaultCurrent={1} total={30} pageSize={10} />
        </div>
      </div>
    </div>
  );
}
