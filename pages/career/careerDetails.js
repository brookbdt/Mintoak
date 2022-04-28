import { useEffect, useState } from "react";
import Image from "../../components/helpers/Image";
import Carousel from "react-elastic-carousel";
import { Chrono } from "react-chrono";
import { API, endpoints } from "../../components/helpers/API";
import { Row, Col, Input, Select, Form, Upload, Button } from "antd";

export default function CareerDetails() {
  const { Option } = Select;
  const [jobOpenings, setJobOpenings] = useState([
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mumbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mumbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mumbai",
    },
  ]);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{ width: 70, height: 30 }}
        defaultValue="91"
        showArrow={false}
        className={"border-r"}
      >
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="desktop:h-fit w-100% bg-home-top mobile:w-100%">
      {/* Top layout with resp */}
      <div className="relative top-bg-container border-b-2 border-A4D77A">
        <div className="desktop:flex laptop:flex items-center justify-between laptop:p-100 py-60 px-180 mobile:pt-39 mobile:px-20 desktop:pb-33 laptop:pb-33 mobile:pb-28">
          <div>
            <div className="text-s44l52_8 mobile:text-s24l31_92  font-bold text-252525 shrink-0 desktop:pt-6 ">
              Senior Software Developer
            </div>
            <div className="desktop:pt-16 laptop:pt-16 flex items-center mobile:pt-16 mobile:flex-wrap text-525252">
              <span className="bg-8fc0554d py-5 rounded-lg px-13 flex items-center mr-14 mobile:h-30 mobile:w-83 mobile:px-15">
                <span className=" mobile:text-s14l32">Mumbai</span>
              </span>
              <span className="bg-8fc0554d py-5 rounded-lg px-13 flex items-center desktop:mr-14  mobile:h-30 mobile:w-83">
                <span className=" mobile:text-s14l32">Full Time</span>
              </span>
              <div className="mobile:flex mobile:justify-between mobile:items-center mobile:w-100%">
                <span className="bg-8fc0554d py-5 rounded-lg px-13 mobile:px-20 flex items-center desktop:mr-14 laptop:ml-16 mobile:mt-14 mobile:h-30 mobile:w-222">
                  <span className="pl-5  mobile:text-s15l32">
                    Technology & Development
                  </span>
                </span>
                <Image
                  src="/images/icons/share.svg"
                  className="desktop:hidden laptop:hidden mobile:pt-15"
                  type="img"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="button w-163 mobile:w-166 py-30 mobile:px-30 mt-40 mobile:mt-15 mobile:text-s14l16_8 mobile:py-10 text-s14l16_8 mobile:h-37  h-54 cursor-pointer z-20 font-bold">
              Apply Now
            </div>
            <div className="flex items-center justify-between pt-20 mobile:hidden">
              <Image
                src="/images/icons/career-wp.svg"
                className=""
                type="img"
              />
              <Image
                src="/images/icons/career-fb.svg"
                className=""
                type="img"
              />
              <Image
                src="/images/icons/career-email.svg"
                className=""
                type="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between laptop:p-50 pt-100 mobile:pt-40 px-180 mobile:px-20">
        <div className="desktop:flex laptop:flex items-start justify-between w-100% ">
          <div className="w-50% desktop:pr-14 mobile:w-100%">
            <div className="text-s32l45 font-semibold mobile:text-s22l44">
              Job description
            </div>
            <ul className="pt-24 mobile:pt-12 list-disc mobile:px-20 mobile:text-525252">
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Design overall architecture of the application.
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Work with UI designers
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                API Integration, Database Management and code review
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Maintain quality and ensure responsiveness of applications
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Collaborate with the rest of the engineering team to design
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Maintain code integrity and organization
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                OWASP security implementation
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Understand and implement security and data protection
              </li>
            </ul>
          </div>
          <div className="w-50% desktop:pl-14 mobile:w-100% mobile:py-40">
            <div className="text-s32l45 font-semibold mobile:text-s22l44">
              Technical skills
            </div>
            <ul className="pt-24 mobile:pt-12 list-disc mobile:px-20 mobile:text-525252">
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Minimum 6-9 years
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Proficient in core java, Spring boot, REST Service
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Strong in data structure, JSON parsing, Encryption & Decryption
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Experience with bitbucket and jira tools
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Ability to quickly adapt to most current technology
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Should be comfortable with Agile methodology and using Agile
                tools
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Good verbal and written communication skills
              </li>
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                Good problem-solving skills
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between laptop:p-100 desktop:pt-60 px-180 mobile:px-20 mobile:pb-46">
        <div className="flex items-center justify-between w-100%">
          <div className="w-50% desktop:pr-14 mobile:w-100% mobile:pb-20">
            <div className="text-s32l45 font-semibold mobile:text-s22l44">
              Qualifications
            </div>
            <ul className="pt-24 list-disc mobile:px-20 mobile:text-525252">
              <li className="text-s24l40_8 laptop:text-s20l140_62 mobile:text-s14l23_28">
                BTech, BE, MCA or higher
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-footer desktop:my-150 mb-100 mobile:mb-0  w-100%">
        <div className="w-100% px-180 mobile:px-20 py-100 mobile:py-39">
          <div className="text-s36l43 mobile:text-s22l33 font-bold text-F1F1F1">
            Job application
          </div>
          <div className="font-normal text-s32l38_4 text-A8FC055 opacity-100 mobile:text-s14l16_8 text-opacity-100 pt-16 mobile:pt-10">
            Senior Software Developer
          </div>
          <div className="global-dropdown pt-40">
            <Form>
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item className="job-app-form">
                    <label className="text-s20l24 text-C4C4C4 mobile:text-s14l14 lable_mobile">
                      Full Name
                    </label>
                    <Input placeholder="Full Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    className="job-app-form"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <label className="text-s20l24 text-C4C4C4  mobile:text-s12l14_4">
                      Contact Number
                    </label>
                    <div className="mt-27">
                      {/* <Input
                      addonBefore={prefixSelector}
                      style={{ width: "100%" }}
                    /> */}
                      <span className="desktop:text-s20l24 laptop:text-s20l24 pb-4 mobile:text-s14l16_8 text-8B8B8B border-r border-C4C4C4 h-23 mobile:h-20 pr-5 absolute mobile:pt-3 mobile:text-C4C4C4">
                        +91
                      </span>
                      <input
                        type="number"
                        className=" global-input-number desktop:text-s20l24 laptop:text-s20l24 mobile:text-s14l16_8 text-252525 text-F1F1F1 w-100% global-input mobile:pl-35 desktop:pl-50 laptop:pl-50 pb-3"
                        // value={contactNo}
                        onChange={(e) => {
                          // setContactNo(e.target.value);
                        }}
                      />
                    </div>
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item className="global-career">
                    <label className="text-s20l24 text-C4C4C4 career-label mobile:text-s12l14_4">
                      Key Skills
                    </label>
                    <Select
                      dropdownStyle={{
                        border: "1px solid #9F9FA0",
                        boxSizing: "border-box",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                        background:
                          "linear-gradient(126.9deg, #3F3F3F -3.96%, #000000 136.6%)",
                      }}
                      placeholder="Select key skills"
                    >
                      <Option
                        className="global-option-career"
                        style={{
                          backgroundColor: "transparent",
                        }}
                        value="Frontend Developer"
                      >
                        Frontend Developer
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item className="job-app-form">
                    <label className="text-s20l24 text-C4C4C4 mobile:text-s12l14_4">
                      Email Address
                    </label>
                    <Input placeholder="Enter email address" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item className="job-app-form">
                    <label className="text-s20l24 text-C4C4C4">Location</label>
                    <Input placeholder="Enter location" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item className="global-career">
                    <label className=" text-s20l24 text-C4C4C4 mobile:text-s12l14_4">
                      Qualifications
                    </label>
                    <Select
                      dropdownStyle={{
                        border: "1px solid #9F9FA0",
                        boxSizing: "border-box",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                        background:
                          "linear-gradient(126.9deg, #3F3F3F -3.96%, #000000 136.6%)",
                      }}
                      placeholder="B.Tech from XYZ College"
                    >
                      <Option
                        className="global-option-career"
                        style={{
                          backgroundColor: "transparent",
                        }}
                        value="B.Tech."
                      >
                        B.Tech.
                      </Option>
                      <Option
                        className="global-option-career"
                        style={{
                          backgroundColor: "transparent",
                        }}
                        value="B.Tech."
                      >
                        B.Tech.
                      </Option>
                      <Option
                        className="global-option-career"
                        style={{
                          backgroundColor: "transparent",
                        }}
                        value="B.Tech."
                      >
                        B.Tech.
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <div className="text-s20l24 text-C4C4C4 pt-48 mobile:pt-0 mobile:text-s12l14">
                Resume (.pdf, .doc, .docx upto 2mb)
              </div>
              <div className="pt-58 mobile:pt-0">
                <Form.Item className="job-app-form">
                  <Upload>
                    <Button icon={false}>
                      <span className="text-F1F1F1 mobile:text-s14l17">
                        Tap here to upload
                      </span>
                    </Button>
                  </Upload>
                </Form.Item>
              </div>
              <div>
                <div className="button w-359 mobile:w-100% py-30 mobile:px-30 mt-40 mobile:text-s14l16_8 mobile:py-10 text-s14l16_8 mobile:h-40  h-54 cursor-pointer z-20">
                  Submit
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div className=" py-150 pt-0 mobile:py-80 mobile:pb-66 mobile_carrer_res">
        <div className="text-center font-bold text-s44l45 pb-60 mobile:text-s22l44 mobile:pb-24">
          View similar roles
        </div>
        <div className="custom-row mobile:px-20 w-100% flex flex-col items-center">
          <Row gutter={24}>
            {jobOpenings.map((data, index) => (
              <Col
                key={index}
                className="mb-40 mobile:mb-24 mobile:flex items-center mobile:w-100%"
              >
                <div className="py-20 px-20 carrer-detail-card desktop:mx-24 hover:bg-8FC055 drop-shadow border border-8FC055 desktop:w-488 mobile:w-100% cursor-pointer">
                  <div className="desktop:flex mobile:flex-col justify-between items-center">
                    <div>
                      <div className="desktop:text-s20l30 laptop:text-s20l30 mobile:text-s12l18 text-8FC0551 font-normal">
                        {data.department}
                      </div>
                      <div className="desktop:text-s30l33 mobile:text-s16l20 text-252525 font-semibold">
                        {data.designation}
                      </div>
                    </div>
                    {/* <div className="mobile:hidden">
                      <Image src="/images/icons/file.svg" type="img" />
                    </div> */}
                  </div>
                  <div className="flex items-center pt-46 mobile:pt-30 mobile:text-s12l24">
                    <span className="bg-8FC055 py-9 rounded-lg px-13 mobile:px-8 flex items-center mr-14 w-120 mobile:h-24 mobile:w-87">
                      <Image
                        src="/images/icons/bag.svg"
                        type="img"
                        className="mobile:w-17"
                      />
                      <span className="pl-5">{data.timing}</span>
                    </span>
                    <span className="bg-8FC055 py-9 rounded-lg px-13 mobile:px-8 flex items-center w-120 mobile:h-24 mobile:w-87">
                      <Image
                        src="/images/icons/location.svg"
                        type="img"
                        className="mobile:w-17"
                      />
                      <span className="pl-5">{data.location}</span>
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="text-s22l33 text-8DBF52 text-center cursor-pointer mobile:text-s14l21">
          <span className="border-b-2">View All</span>
        </div>
      </div>
    </div>
  );
}
