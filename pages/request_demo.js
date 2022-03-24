import { Modal, Select } from "antd";
import { useState } from "react";
import Image from "../components/helpers/Image";

export default function Request_Demo(props) {
  const { Option } = Select;

  const [modalvisible, setmodalVisible] = useState(props.triger);
  const [modalquerievisible, setmodalquerieVisible] = useState(false);

  return (
    <>
      <Modal
        bodyStyle={{
          background:
            "linear-gradient(341.98deg, #E9F2DD 21.15%, #8EA56F 184.51%)",
        }}
        centered
        visible={props.triger}
        onCancel={() => props.handleClose()}
        footer={null}
        width={983}
      >
        <div className="bg-form mobile:px-40 mobile:pt-49 mobile:pb-31 desktop:py-75 laptop:py-75 desktop:px-75 laptop:px-75 flex flex-col justify-center mobile:w-100% desktop:w-100% laptop:w-100%">
          <div className="mobile:text-s24l29 desktop:text-s45l54 laptop:text-s45l54 text-252525 font-bold  desktop:pr-135 laptop:pr-135 pb-40">
            Request A Demo
          </div>
          <div className="w-100% flex mobile:flex-col justify-between">
            <div className="pb-40 w-360 mobile:w-100%">
              <div className=" laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                Full Name
              </div>
              <input
                type="text"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-252525 w-100% global-input pb-5"
              />
            </div>
            <div className="pb-40 w-360 mobile:w-100%">
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
          </div>
          <div>
            <div className="pb-40">
              <div className=" laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                Business Email
              </div>
              <input
                type="text"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 w-100% global-input pb-5"
              />
            </div>
          </div>
          <div className="w-100% flex mobile:flex-col  justify-between">
            <div className="pb-40 global-select w-360 mobile:w-100%">
              <div className="laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                Country
              </div>
              <Select
                defaultValue={"Select"}
                className="w-100% desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 global-input pb-5"
                style={{ fontWeight: "bold" }}
              >
                <Option>Select</Option>
              </Select>
            </div>
            <div className="pb-40 w-360 mobile:w-100%">
              <div className="laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                Bank Name
              </div>
              <input
                type="text"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 w-100% global-input pb-5"
              />
            </div>
          </div>
          <div className="w-100% flex mobile:flex-col  justify-between">
            <div className="pb-40 w-360 mobile:w-100%">
              <div className="laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                Job Title
              </div>
              <input
                type="text"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 w-100% global-input pb-5"
              />
            </div>
            <div className="pb-40 w-360 mobile:w-100%">
              <div className="pb-40 global-select w-360 mobile:w-100%">
                <div className="laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24">
                  Choose Products
                </div>
                <Select
                  defaultValue={"Select"}
                  className="w-100% desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 global-input pb-5"
                  style={{ fontWeight: "bold" }}
                >
                  <Option>Select</Option>
                </Select>
              </div>
            </div>
          </div>
          <div className="w-100% flex justify-between">
            <div className="border-2 border-95C11F border-solid text-center text-525252 desktop:text-s22l26_4 w-360 mobile:w-110 laptop:text-s22l26_4 text-525252 mobile:text-s14l16_8 font-bold mobile:py-10  desktop:py-13 laptop:py-13">
              Clear All Fields
            </div>
            <div
              onClick={() => setmodalquerieVisible(true)}
              className="button desktop:text-s22l26_4 w-360 laptop:text-s22l26_4 text-FFFFFF mobile:text-s14l16_8 mobile:w-110 font-bold mobile:py-10  desktop:py-13 laptop:py-13"
            >
              Submit
            </div>
          </div>
        </div>
      </Modal>
      {modalquerievisible ? (
        <Modal
          bodyStyle={{
            background:
              "linear-gradient(341.98deg, #E9F2DD 21.15%, #8EA56F 184.51%)",
          }}
          centered
          visible={modalquerievisible}
          onCancel={() => setmodalquerieVisible(false)}
          footer={null}
          width={665}
        >
          <div className="w-100%">
            <div className="w-100% flex justify-center mobile:pt-9 desktop:pt-42 laptop:pt-42">
              <Image
                src="/images/icons/thumb-icon.svg"
                width={135}
                height={135}
              />
            </div>
            <div className="w-100% text-center mobile:text-s16l24 desktop:text-s22l33 laptop:text-s22l33 text-252525 mobile:38 desktop:px-10 laptop:px-10 mobile:pb-29 desktop:pb-35 laptop:pb-35 font-bold">
              Thank you! for your interest!
              <br /> Our team will get back to you shortly.
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}