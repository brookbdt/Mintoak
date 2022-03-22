import { useEffect, useState } from "react"
import Image from "../../components/helpers/Image"
import Carousel from "react-elastic-carousel"
import { Chrono } from "react-chrono"
import { API, endpoints } from "../../components/helpers/API"
import { Row, Col, Input, Select, Form, Upload, Button } from "antd"

export default function CareerDetails() {
  const { Option } = Select
  const [jobOpenings, setJobOpenings] = useState([
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mimbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mimbai",
    },
    {
      designation: "Java Developer",
      department: "Tech & Development",
      timing: "Full Time",
      location: "Mimbai",
    },
  ])

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{ width: 70, height: 30 }}
        defaultValue="91"
        showArrow={false}
      >
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  )
  return (
    <div className="desktop:h-fit w-100% bg-8FC055 mobile:w-100%">
      {/* Top layout with resp */}
      <div className="relative top-bg-container border-b-2 border-A4D77A">
        <div className="desktop:flex items-center justify-between laptop:p-100 py-60 px-180 mobile:pt-39 mobile:px-20 desktop:pb-33 laptop:pb-33">
          <div>
            <div className="text-s44l52_8 mobile:text-s24l31_92  font-bold text-252525 shrink-0 desktop:pt-6 mobile:pt-10">
              Senior Software Developer
            </div>
            <div className="desktop:pt-16 laptop:pt-16 flex items-center mobile:pt-16 mobile:flex-wrap">
              <span className="bg-8FC055 py-9 rounded-lg px-13 flex items-center mr-14">
                <span className="pl-5">Mumbai</span>
              </span>
              <span className="bg-8FC055 py-9 rounded-lg px-13 flex items-center desktop:mr-14">
                <span className="pl-5">Full Time</span>
              </span>
              <div className="mobile:flex mobile:justify-between mobile:items-center mobile:w-100%">
                <span className="bg-8FC055 py-9 rounded-lg px-13 flex items-center desktop:mr-14 mobile:mt-14">
                  <span className="pl-5">Technology & Development</span>
                </span>
                <Image
                  src="/images/icons/share.svg"
                  className="desktop:hidden"
                  type="img"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="button w-163 mobile:w-166 py-30 mobile:px-30 mt-40 mobile:mt-15 mobile:text-s14l16_8 mobile:py-10 text-s14l16_8 mobile:h-40  h-54 cursor-pointer z-20">
              Apply Now
            </div>
            <div className="flex items-center justify-between pt-20 mobile:hidden">
              <Image src="/images/icons/whatsapp.svg" className="" type="img" />
              <Image src="/images/icons/facebook.svg" className="" type="img" />
              <Image src="/images/icons/email.svg" className="" type="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between laptop:p-50 pt-100 mobile:pt-40 px-180 mobile:px-20">
        <div className="desktop:flex laptop:flex items-center justify-between w-100% ">
          <div className="w-50% desktop:pr-14 mobile:w-100% mobile:py-20">
            <div className="text-s32l45 font-semibold mobile:text-s22l44">
              Job description
            </div>
            <ul className="pt-24 list-disc mobile:px-20">
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
          <div className="w-50% desktop:pl-14 mobile:w-100% mobile:py-20">
            <div className="text-s32l45 font-semibold mobile:text-s22l44">
              Technical skills
            </div>
            <ul className="pt-24 list-disc mobile:px-20">
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
                Should be comfortable with Agile methodology and using Agile tools
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
      <div className="flex items-center justify-between laptop:p-100 desktop:pt-60 px-180 mobile:px-20">
        <div className="flex items-center justify-between w-100%">
          <div className="w-50% desktop:pr-14 mobile:w-100% mobile:py-20">
            <div className="text-s32l45 font-semibold mobile:text-s22l44">
              Qualifications
            </div>
            <ul className="pt-24 list-disc mobile:px-20">
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
          <div className="font-normal text-s32l38_4 text-A8FC055 opacity-100 mobile:text-s14l16_8 text-opacity-100 pt-16">
            Senior Software Developer
          </div>
          <div className="job-app-form pt-40">
            <Form>
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item>
                    <label className="text-s20l24 text-C4C4C4">Full Name</label>
                    <Input placeholder="Full Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <label className="text-s20l24 text-C4C4C4">
                      Contact Number
                    </label>
                    <Input
                      addonBefore={prefixSelector}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item>
                    <label className="text-s20l24 text-C4C4C4">
                      Key Skills
                    </label>
                    <Select placeholder="Select key skills">
                      <Option
                        style={{ width: "100%" }}
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
                  <Form.Item>
                    <label className="text-s20l24 text-C4C4C4">
                      Email Address
                    </label>
                    <Input placeholder="Enter email address" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item>
                    <label className="text-s20l24 text-C4C4C4">Location</label>
                    <Input placeholder="Enter location" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item>
                    <label className="text-s20l24 text-C4C4C4">
                      Qualifications
                    </label>
                    <Select placeholder="B.Tech from XYZ College">
                      <Option value="B.Tech.">B.Tech.</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <div className="text-s20l24 text-C4C4C4 pt-48">
                Resume (.pdf, .doc, .docx upto 2mb)
              </div>
              <div className="pt-58">
                <Form.Item>
                  <Upload>
                    <Button icon={false} ><span className="text-F1F1F1">Tap here to upload</span></Button>
                  </Upload>
                </Form.Item>
              </div>
              <div>
                <div className="button w-359 mobile:w-166 py-30 mobile:px-30 mt-40 mobile:text-s14l16_8 mobile:py-10 text-s14l16_8 mobile:h-40  h-54 cursor-pointer z-20">
                  Submit
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div className="desktop:px-180 laptop:px-50 py-150 pt-0 mobile:py-80">
        <div className="text-center font-bold text-s44l45 pb-60 mobile:text-s22l44">
          View similar roles
        </div>
        <div className="custom-row mobile:px-20">
          <Row gutter={24}>
            {jobOpenings.map((data, index) => (
              <Col xs={24} md={8} className="mb-30" key={index}>
                <div className="py-20 px-20 carrer-detail-card hover:bg-8FC055 drop-shadow border border-8FC055 w-full cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="desktop:text-s20l30 laptop:text-s20l30 mobile:text-s12l18 text-8FC0551 font-normal">
                        {data.department}
                      </div>
                      <div className="desktop:text-s30l33 mobile:text-s16l20 text-252525 font-semibold">
                        {data.designation}
                      </div>
                    </div>
                    <div>
                      <Image src="/images/icons/file.svg" type="img" />
                    </div>
                  </div>
                  <div className="flex items-center pt-46">
                    <span className="bg-8FC055 py-9 rounded-lg px-13 flex items-center mr-14">
                      <Image src="/images/icons/bag.svg" type="img" />
                      <span className="pl-5">{data.timing}</span>
                    </span>
                    <span className="bg-8FC055 py-9 rounded-lg px-13 flex items-center">
                      <Image src="/images/icons/location.svg" type="img" />
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
  )
}
