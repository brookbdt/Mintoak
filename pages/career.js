import { useEffect, useState } from "react"
import Image from "../components/helpers/Image"
import Carousel from "react-elastic-carousel"
import { consts } from "react-elastic-carousel"
import { Chrono } from "react-chrono"
import { API, endpoints } from "../components/helpers/API"
import { Row, Col, Input, Select, Pagination } from 'antd'

export default function Career() {
    const { Option } = Select
    const [homeBannerResp, setHomeBannerResp] = useState({})
    const [searchJob, setSearchJob] = useState("")
    const [onBoardData, setOnBoardData] = useState([
        {
            title: "Conference Day",
            description: "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit moo comprehensam ne, usu cu stet prompta reformidans. Est tation latine aliquip."
        },
        {
            title: "Conference Day",
            description: "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit moo comprehensam ne, usu cu stet prompta reformidans. Est tation latine aliquip."
        },
        {
            title: "Conference Day",
            description: "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit moo comprehensam ne, usu cu stet prompta reformidans. Est tation latine aliquip."
        },
        {
            title: "Conference Day",
            description: "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit moo comprehensam ne, usu cu stet prompta reformidans. Est tation latine aliquip."
        },
        {
            title: "Conference Day",
            description: "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit moo comprehensam ne, usu cu stet prompta reformidans. Est tation latine aliquip."
        },
    ])
    const [jobOpenings, setJobOpenings] = useState([
        {
            designation: "Java Developer",
            department: "Tech & Development",
            timing: 'Full Time',
            location: "Mimbai"
        },
        {
            designation: "Java Developer",
            department: "Tech & Development",
            timing: 'Full Time',
            location: "Mimbai"
        },
        {
            designation: "Java Developer",
            department: "Tech & Development",
            timing: 'Full Time',
            location: "Mimbai"
        },
        {
            designation: "Java Developer",
            department: "Tech & Development",
            timing: 'Full Time',
            location: "Mimbai"
        },
        {
            designation: "Java Developer",
            department: "Tech & Development",
            timing: 'Full Time',
            location: "Mimbai"
        },
        {
            designation: "Java Developer",
            department: "Tech & Development",
            timing: 'Full Time',
            location: "Mimbai"
        },
        {
            designation: "Java Developer",
            department: "Tech & Development",
            timing: 'Full Time',
            location: "Mimbai"
        }
    ])
    useEffect(() => {
        // home_banner
        API({
            url: endpoints.home_banner,
        }).then((resp) => {
            if (!resp.message) {
                setHomeBannerResp(resp)
            }
        })
    }, [])
    return (
        <div className="desktop:h-fit w-100% bg-8FC055 mobile:w-100%">
            {/* Top layout with resp */}
            <div className="relative top-bg-container border-b-2 border-A4D77A">
                <Image
                    src={homeBannerResp?.Illustration}
                    className="absolute z-minus1 mobile:hidden"
                />
                <div className="desktop:w-50% desktop:p-100 laptop:p-100 laptop:w-70% tablet:w-80% tablet:p-30 px-20 mobile:pt-40 pb-40 z-10">
                    <div className="desktop:text-s45l45 mobile:text-s24l29 pr-80 pt-50 text-252525 shrink-0 font-bold">
                        Give your career
                    </div>
                    <div className="text-s56l67 mobile:text-s36l43  font-bold text-252525 shrink-0 desktop:pt-6 mobile:pt-10">
                        a new direction
                    </div>
                    <div className="desktop:text-s45l45 mobile:text-s24l29 pr-80 text-252525 shrink-0">
                        with Mintoak
                    </div>
                    <div className="text-s24l36 mt-32 text-525252">
                        Explore various opportunities for enthusiastic, innovative and dedicated individuals to join our team.
                    </div>
                    <div className="button w-216 mobile:w-166 py-30 mobile:px-30 mt-40 mobile:text-s14l16_8 mobile:py-10 text-s14l16_8 mobile:h-40  h-54 cursor-pointer z-20">
                        Explore Jobs
                    </div>
                </div>
                <Image
                    src="/images/backgrounds/mobile_home_banner.png"
                    className=" block relative desktop:hidden laptop:hidden"
                    type="img"
                />
            </div>

            <div className="py-156 mobile:py-80 flex justify-center justify-items-center items-center">
                <div className="w-full">
                    <div className="desktop:text-s44l45 mobile:text-s22l33 font-bold flex justify-center">Why join Mintoak?</div>
                    <div className="desktop:flex desktop:justify-around desktop:pt-69 desktop:px-253 mobile:py-25 mobile:px-25">
                        <div className="desktop:flex-column mobile:flex desktop:justify-center mobile:justify-flex-start items-center mobile:py-15">
                            <div className="flex justify-center align-center">
                                <Image
                                    src="/images/icons/stethoscope.svg"
                                    className="mobile:w-40 desktop:w-72"
                                    type="img"
                                />
                            </div>
                            <div className="text-s26l36 font-bold mobile:pl-19 desktop:pt-49">
                                Healthcare and wellness coverage
                            </div>
                        </div>
                        <div className="desktop:flex-column mobile:flex desktop:justify-center mobile:justify-flex-start items-center mobile:py-15">
                            <div className="flex justify-center align-center">
                                <Image
                                    src="/images/icons/umbrella.svg"
                                    className="mobile:w-40 desktop:w-72"
                                    type="img"
                                />
                            </div>
                            <div className="text-s26l36 font-bold mobile:pl-19 desktop:pt-49">
                                Paid time off and holidays
                            </div>
                        </div>
                        <div className="desktop:flex-column mobile:flex desktop:justify-center mobile:justify-flex-start items-center mobile:py-15">
                            <div className="flex justify-center align-center">
                                <Image
                                    src="/images/icons/network.svg"
                                    className="mobile:w-40 desktop:w-72"
                                    type="img"
                                />
                            </div>
                            <div className="text-s26l36 font-bold mobile:pl-19 desktop:pt-49">
                                Employee assistance program
                            </div>
                        </div>
                        <div className="desktop:flex-column mobile:flex desktop:justify-center mobile:justify-flex-start items-center mobile:py-15">
                            <div className="flex justify-center align-center">
                                <Image
                                    src="/images/icons/bulb.svg"
                                    className="mobile:w-40 desktop:w-72"
                                    type="img"
                                />
                            </div>
                            <div className="text-s26l36 font-bold mobile:pl-19 desktop:pt-49">
                                Learning and development resources
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-footer mb-100 mobile:mb-0 w-100%">
                <div className="desktop:flex items-center w-100% px-180 mobile:px-20 py-100">
                    <div className="flex mobile:block flex-col w-50% mobile:w-100% justify-center">
                        <div className="flex items-center text-s36l43 mobile:text-s22l33 font-bold text-F1F1F1 desktop:mb-40 mobile:mb-30">
                            Life at Mintoak
                        </div>
                        <div className="text-s20l30 mobile:text-s14l24 text-F1F1F1">
                            <span className="font-normal text-s20l30 text-FFFFFF">
                                At Mintoak, we are a team of energetic and driven individuals, led by three talented professionals with a vision. We are always on the lookout for passionate individuals, who wish to help small businesses through innovative, dynamic and tech-oriented products.
                            </span>
                        </div>
                    </div>
                    <div className="w-50% mobile:w-100% flex items-center justify-end mobile:pt-30">
                        <Image
                            src="/images/backgrounds/teamwork.svg"
                            type="img"
                            // height={650}
                            width={486}
                        />
                    </div>
                </div>
            </div>

            <div className="desktop:px-180 mt-150 mobile:px-20 mobile:my-80">
                <div className="text-center font-bold text-s44l45 pb-60 mobile:text-s22l33 mobile:px-50">Explore opportunities suited for you</div>
                <div className="search-input mobile:my-12">
                    <Input
                        placeholder="Ex. Product Manager"
                        // className="h-60 bg-DFEFD4"
                        value={searchJob}
                        onChange={(e) => setSearchJob(e.target.value)}
                        prefix={
                            <Image
                                src="/images/icons/search.svg"
                                type="img"
                            />
                        }
                    />
                </div>
                {/* <div className="custom-row"> */}
                <Row gutter={24} className="my-30">
                    <Col xs={24} md={8} className="mobile:my-12">
                        <div className="filter-selection">
                            <Select placeholder="All job title">
                                <Option>Select</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col xs={24} md={8} className="mobile:my-12">
                        <div className="filter-selection">
                            <Select placeholder="All Location">
                                <Option>Select</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col xs={24} md={8} className="mobile:my-12">
                        <div className="filter-selection">
                            <Select placeholder="All Departments">
                                <Option>Select</Option>
                            </Select>
                        </div>
                    </Col>
                </Row>
                {/* </div> */}
                <div className="text-s18l21_6 font-normal text-525252 pb-20">Showing 18 job openings in Mumbai</div>
                {/* <div className="flex w-full justify-between"> */}
                {/* <div className="custom-row"> */}
                <Row gutter={24}>
                    {jobOpenings.filter(d => d.designation.toLowerCase().includes(searchJob.toLowerCase()))?.map((data, index) => (
                        <Col xs={24} md={8} className="mb-30">
                            <div className="py-20 px-20 shadow-sm hover:bg-8FC055 drop-shadow border border-8FC055 w-full cursor-pointer">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="desktop:text-s20l30 mobile:text-s12l18 text-A8FC055 font-normal">{data.department}</div>
                                        <div className="desktop:text-s30l33 mobile:text-s16l20 text-252525 font-semibold">{data.designation}</div>
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/icons/file.svg"
                                            type="img"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center pt-46">
                                    <span className="bg-8FC055 py-9 rounded-lg px-13 flex items-center mr-14">
                                        <Image
                                            src="/images/icons/bag.svg"
                                            type="img"
                                        /><span className="pl-5">{data.timing}</span>
                                    </span>
                                    <span className="bg-8FC055 py-9 rounded-lg px-13 flex items-center">
                                        <Image
                                            src="/images/icons/location.svg"
                                            type="img"
                                        /><span className="pl-5">{data.location}</span>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <div className="job-list-pagination flex justify-center">
                    <Pagination defaultCurrent={1} total={50} />
                </div>
                {/* </div> */}
                {/* </div> */}
            </div>



            <div className="desktop:px-180 desktop:py-150 w-100%">
                <div className="text-center font-bold mobile:text-s22l33 desktop:text-s44l45 pb-60 mobile:pb-40 mx-70">There’s a lot on board for our employees!</div>
                <div className="flex justify-center items-center mobile:px-0 mobile:mb-0 mobile:hidden">
                    <Carousel
                        itemsToShow={3}
                        itemPadding={[0, 20, 0, 20]}
                        enableMouseSwipe={false}
                        pagination={false}
                        renderArrow={({ type, onClick, isEdge }) => {
                            const pointer =
                                type === consts.PREV ? (
                                    <i className="fa fa-angle-left text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
                                ) : (
                                    <i className="fa fa-angle-right text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
                                )
                            return (
                                <button onClick={onClick} disabled={isEdge}>
                                    {pointer}
                                </button>
                            )
                        }}
                    >
                        {onBoardData.map((data) => (
                            <div className="bg-FFFFFF shadow-lg my-21">
                                <div className="pt-10 px-12">
                                    <Image
                                        src="/images/backgrounds/img-11.png"
                                        width={"100%"}
                                        type="img"
                                    />
                                </div>
                                <div className="p-20">
                                    <div className="desktop:text-s23_7l28_44 mobile:text-s15_22l18_27 pb-12">{data.title}</div>
                                    <div className="text-s18l25">
                                        {data.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="w-100% flex flex-col items-center justify-around desktop:hidden laptop:hidden">
                    <Carousel
                        itemPadding={[0, 15]}
                        itemsToShow={1.3}
                        outerSpacing={0}
                        showArrows={false}
                        pagination={false}
                    >
                        {onBoardData.map((data) => (
                            <div className="bg-FFFFFF shadow-lg my-21">
                                <div className="pt-10 px-12">
                                    <Image
                                        src="/images/backgrounds/img-11.png"
                                        width={"100%"}
                                        type="img"
                                    />
                                </div>
                                <div className="p-20">
                                    <div className="desktop:text-s23_7l28_44 mobile:text-s15_22l18_27 pb-12">{data.title}</div>
                                    <div className="text-s18l25">
                                        {data.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

        </div>
    )
}
