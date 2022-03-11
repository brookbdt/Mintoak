import Image from "../components/helpers/Image";
import { Collapse } from "antd";
import { Pagination } from "antd";

const { Panel } = Collapse;

export default function Contact() {
  return (
    <div className="w-100% desktop:px-180 mobile:px-20">
      <div className="flex flex-col">
        <div className="text-s44l66 text-252525 font-bold pt-99">FAQs</div>
        <div className="flex pt-48 pb-40">
          <div className="w-100%">
            <input
              type="text"
              className="outline-none border border-8FC055 bg-DFEFD4 h-54 w-100% pl-90 text-s20l24"
              placeholder="Ex. What is pay later?"
            />
          </div>
          <div className="absolute pl-27 pt-10">
            <Image
              src="/images/icons/search-icon.svg"
              width={35.15}
              height={37}
            />
          </div>
          <div className="button w-206">Search</div>
          <div className="pl-24 flex items-center justify-center">
            <Image src="/images/icons/filter-icon.svg" width={54} height={54} />
          </div>
        </div>
        <div className="flex w-100% pb-40">
          <div className="flex pr-21">
            <div className="flex items-center justify-center pr-10 rounded-lg bg-faqs_bg border border-87BD25 cursor-pointer">
              <div className="flex items-center px-18">
                <Image
                  src="/images/icons/bank-icon.svg"
                  width={19}
                  height={18.9}
                />
              </div>
              <div className="text-s20l40 text-252525 pr-10">For Banks</div>
            </div>
          </div>
          <div className="flex  pr-21">
            <div className="flex items-center justify-center pr-10 rounded-lg bg-DFEFD4 border border-8FC055 cursor-pointer ">
              <div className="flex items-center px-18">
                <Image
                  src="/images/icons/merchants-icon.svg"
                  width={19.23}
                  height={24.87}
                />
              </div>
              <div className="text-s20l40 text-252525 pr-10">For Merchants</div>
            </div>
          </div>
        </div>
      </div>

      {/* accordian  */}
      <div className="pt-40">
        <div className="text-s20l24 text-828282 pb-20">
          Need help ? We got you covered.
        </div>
        <div className="border-2 border-8CC63E bg-8FC055">
          <Collapse
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
              className="text-252525 text-s24l29 p-30 font-semibold"
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              key="1"
            >
              <p className="text-525252 text-s20l150 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisc ing elit, ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Panel>
            <Panel
              className="text-252525 text-s24l29 p-30 font-semibold"
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              key="2"
            >
              <p className="text-525252 text-s20l150 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisc ing elit, ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Panel>
            <Panel
              className="text-252525 text-s24l29 p-30 font-semibold"
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              key="3"
            >
              <p className="text-525252 text-s20l150 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisc ing elit, ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Panel>
            <Panel
              className="text-252525 text-s24l29 p-30 font-semibold"
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              key="4"
            >
              <p className="text-525252 text-s20l150 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisc ing elit, ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Panel>
            <Panel
              className="text-252525 text-s24l29 p-30 font-semibold"
              header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt? "
              key="5"
            >
              <p className="text-525252 text-s20l150 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisc ing elit, ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Panel>
          </Collapse>
        </div>
        <div className="flex py-60 w-100% justify-center items-center">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
}
