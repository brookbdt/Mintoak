import { Modal, Select } from "antd"
import { useState, useEffect } from "react"
import Image from "../components/helpers/Image"
import { API, endpoints } from "../components/helpers/API"

export default function Request_Demo(props) {
  const { Option } = Select
  const [countryList, setCountryList] = useState(null)
  const [productList, setProductList] = useState(null)
  const [modalquerievisible, setmodalquerieVisible] = useState(false)
  useEffect(() => {
    API({
      url: endpoints.dropdown,
    }).then((resp) => {
      if (!resp.message) {
        setCountryList(resp[0])
        setProductList(resp[1])
      }
    })
  }, [])

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
        // width={983}
        className="close-btn shadow-popupShadow"
        width="85%"
        wrapClassName="pt-100"
      >
        <div className="bg-form mobile:px-20 mobile:pt-49 mobile:pb-31 desktop:py-75 laptop:py-75 desktop:px-75 laptop:px-75 flex flex-col justify-center mobile:w-100% desktop:w-100% laptop:w-100%">
          <div className="mobile:text-s24l29 desktop:text-s45l54 laptop:text-s45l54 text-252525 font-bold  desktop:pr-135 laptop:pr-135 pb-40">
            Request A Demo
          </div>
          <div className="w-100% flex mobile:flex-col justify-between">
            <div className="pb-40 w-360 mobile:w-100% mobile:pb-24">
              <div className=" laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24 mobile:pb-14">
                Full Name
              </div>
              <input
                type="text"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text text-252525 w-100% global-input pb-5"
              />
            </div>
            <div className="pb-40 w-360 mobile:w-100% mobile:pb-24">
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
              <div className=" laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24 mobile:pb-14">
                Business Email
              </div>
              <input
                type="text"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 w-100% global-input pb-5"
              />
            </div>
          </div>
          <div className="w-100% flex mobile:flex-col  justify-between">
            <div className="pb-40 global-demo w-360 mobile:w-100%">
              <div className="laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24 mobile:pb-14">
                Country
              </div>
              <Select
                dropdownStyle={{
                  border: "1px solid #DFEFD4",
                  boxSizing: "border-box",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  background: "#DFEFD4",
                  padding: "20px",
                }}
                className="w-100% desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525  pb-5"
                style={{ fontWeight: "bold" }}
              >
                {countryList &&
                  countryList.Data.map((item, index) => (
                    <Option
                      value={item.name}
                      className="global-option-demo"
                      style={{ background: "transparent" }}
                      key={index}
                    >
                      {item.name}
                    </Option>
                  ))}
              </Select>
            </div>
            <div className="pb-40 w-360 mobile:w-100% mobile:pb-24">
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
            <div className="  w-360 mobile:w-100% mobile:pb-24">
              <div className="laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24 mobile:pb-14">
                Job Title
              </div>
              <input
                placeholder="Enter Your Job Title"
                type="text"
                className="desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 w-100% global-input pb-5"
              />
            </div>
            <div className="w-360 mobile:w-100% mobile:pb-24">
              <div className="global-demo w-360 mobile:w-100%">
                <div className="laptop:text-s20l24 laptop:text-8B8B8B mobile:text-s12l14 desktop:text-s20l24 mobile:text-525252 desktop:text-8B8B8B pb-24 mobile:pb-14">
                  Business Category
                </div>
                <Select
                  dropdownStyle={{
                    border: "1px solid #DFEFD4",
                    boxSizing: "border-box",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    background: "#DFEFD4",
                    padding: "20px",
                  }}
                  placeholder="Choose Productsnp"
                  className="w-100% desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525  pb-5"
                >
                  {productList &&
                    productList.Data.map((item, index) => (
                      <Option
                        value={item.title}
                        className="global-option-demo"
                        style={{ background: "transparent" }}
                        key={index}
                      >
                        {item.title}
                      </Option>
                    ))}
                </Select>
              </div>
            </div>
          </div>
          <div className="py-18 flex">
            <Image src="/images/backgrounds/warn.svg" height={20} width={18} />
            <div className="text-EC5F22 text-s18l22 mobile:text-s14l17 pl-10">
              Please enter all the necessary details to submit the form.
            </div>
          </div>
          <div className="w-100% flex justify-between">
            <div className="bg-button pr-3 pl-3 pt-3 pb-2 w-360 flex items-center justify-center">
              <div className="cursor-pointer w-100% bg-form rounded-sm text-center text-525252 desktop:text-s22l26_4  mobile:w-110 laptop:text-s22l26_4 text-525252 mobile:text-s14l16_8 font-bold mobile:py-10  desktop:py-13 laptop:py-13 clear-all-btn">
                Clear All Fields
              </div>
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
            transform: "rotate(-180deg)",
          }}
          centered
          visible={modalquerievisible}
          onCancel={() => setmodalquerieVisible(false)}
          footer={null}
          width={665}
          className="shadow-popupShadow close-btn"
        >
          <div className="w-100% rotate-180">
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
  )
}
