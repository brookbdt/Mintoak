import Image from "../components/helpers/Image";
import { Modal } from "antd";
import { useState } from "react";

export default function Contact() {
  const [modalvisible, setmodalVisible] = useState(false);
  return (
    <>
      <div className="w-100% bg-footer mobile:px-20 flex mobile:flex-col mobile:pt-50">
        <div className="flex flex-col mobile:bg-464646 desktop:w-50% laptop:w-50% mobile:py-80 justify-center mobile:w-100%">
          <div>
            <div className="mobile:text-s22l26_4 desktop:text-s45l54 laptop:text-s45l54 text-F1F1F1 desktop:pl-106 laptop:pl-106 mobile:px-33">
              Find us at
            </div>
            <div className="mobile:text-s14l21 desktop:text-s20l30 laptop:text-s20l30 mobile:px-33 text-F1F1F1 desktop:pl-106 laptop:pl-106 mobile:pt-16 desktop:pt-41 laptop:pt-41 desktop:pr-300 laptop:pr-300 text-left">
              Mintoak Innovations Private Limited OFFICE 01A110, WeWork
              Chromium, Jogeshwari - Vikhroli Link Rd, Raje Sambhaji Nagar, next
              to L&T flyover, Andheri East, Mumbai, Maharashtra 400076
            </div>
          </div>
          <div>
            <div className="desktop:pl-106 laptop:pl-106 pt-40 w-100% flex mobile:px-33">
              <div className="font-FFFFFF">
                <Image
                  src="/images/icons/call-icon.svg"
                  width={30}
                  height={30}
                />
              </div>
              <div className="mobile:s16l24 desktop:text-s24l36 laptop:text-s24l36 text-F1F1F1 pl-29">
                +91 8884445843
              </div>
            </div>
            <div className="desktop:pl-106 laptop:pl-106 mobile:11 desktop:pt-16 laptop:pt-16 w-100% flex mobile:px-33">
              <div className="font-FFFFFF">
                <Image
                  src="/images/icons/mail-icon.svg"
                  width={30}
                  height={30}
                />
              </div>
              <div className="mobile:s16l24 desktop:text-s24l36 laptop:text-s24l36 text-F1F1F1 pl-29">
                help@mintoak.com
              </div>
            </div>
          </div>
        </div>
        <div className="mobile:w-100% mobile:pb-80 desktop:w-50% laptop:w-50% flex items-center flex-col mobile:pt-129 desktop:py-80 laptop:py-80 desktop:pr-100 laptop:pr-100">
          {/* form */}
          <div className="bg-form mobile:p-40 desktop:py-40 laptop:py-40 desktop:px-75 laptop:px-75 flex flex-col justify-center mobile:w-100% desktop:w-75% laptop:w-100%">
            <div className="mobile:text-s24l29 desktop:text-s45l54 laptop:text-s45l54 text-252525 font-bold  desktop:pr-135 laptop:pr-135 pb-40">
              Contact us
            </div>
            <div className="pb-40 ">
              <div className=" laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                Full Name
              </div>
              <input
                type="text"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-252525 w-100% global-input pb-5"
              />
            </div>
            <div className="pb-40">
              <div className=" laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                Business Email
              </div>
              <input
                type="text"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 w-100% global-input pb-5"
              />
            </div>
            <div className="pb-40 desktop:hidden laptop:hidden">
              <div className="laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                Bank Name
              </div>
              <input
                type="text"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 w-100% global-input pb-5"
              />
            </div>
            <div className="pb-40 desktop:hidden laptop:hidden">
              <div className="laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                Job Title
              </div>
              <input
                type="text"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 w-100% global-input pb-5"
              />
            </div>
            <div className="pb-40">
              <div className="laptop:text-s20l24 laptop:text-8B8B8B laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                Contact Number
              </div>
              <span className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-8B8B8B border-r border-C4C4C4 pr-5 absolute mobile:pt-3">
                +91
              </span>
              <input
                type="number"
                className=" global-input-number desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 w-100% global-input mobile:pl-35 desktop:pl-50 laptop:pl-50 pb-3"
              />
            </div>
            <div className="pb-40">
              <div className="laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                Domain
              </div>
              <select className="w-100% desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 global-input pb-5">
                <option value="India">India</option>
                <option value="Usa">Usa</option>
              </select>
            </div>
            <div className="pb-40">
              <div className="laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                Message
              </div>
              <input
                type="text"
                placeholder="Enter your message here"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 w-100% global-input pb-5"
              />
            </div>
            <div
              onClick={() => setmodalVisible(true)}
              className="button desktop:text-s22l26_4 laptop:text-s22l26_4 text-FFFFFF mobile:text-s14l16_8 font-bold mobile:py-10 mobile:px-98 desktop:py-15 desktop:px-176 laptop:py-15 laptop:px-176"
            >
              Submit
            </div>
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
    </>
  );
}
