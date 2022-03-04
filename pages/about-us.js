import Image from "../components/helpers/Image"
import Carousel from "react-elastic-carousel"
import { Chrono } from "react-chrono"

export default function About() {
  return (
    <div className="desktop:h-fit w-100% bg-8FC055 mobile:w-100%">
      {/* Top layout with resp */}
      <div className="relative top-bg-container flex w-100% border border-A4D77A mobile:flex-col">
        <div className="desktop:w-50% pl-100 pr-50 pt-100 z-10 mobile: w-100% mobile:p-20 ">
          <div className="desktop:text-s45l45 mobile:text-s24l29 pr-80 pt-50 text-252525 shrink-0">
            Creating New-age Financial Solutions for
          </div>
          <div className="text-s56l67 mobile:text-s36l43  font-bold text-252525 shrink-0 desktop:pt-6 mobile:pt-10">
            New-age Businesses
          </div>
          <div className="text-s24l29 mobile:text-s14l24 desktop:py-32 mobile:py-16 pr-75 text-525252 shrink-0">
            Designed to Empower Small Businesses with Technology.
          </div>
          <div className="button w-216 mobile:w-166 py-30 mobile:px-30 mobile:text-s14l16_8 mobile:py-10 text-s14l16_8 mobile:h-40  h-54 cursor-pointer z-20">
            Request a demo
          </div>
        </div>
        <div className="desktop:w-50% flex items-center justify-center px-50 pt-50 pb-20 mobile: w-100%">
          <Image
            src="/images/backgrounds/group-2.svg"
            width={550}
            height={550}
          />
        </div>
      </div>

      {/* The Mintoak Story */}
      <div className="desktop:flex flex-col p-80 justify-center items-center mobile:px-20 ">
        <div className="text-s45l45 text-000000 font-bold mobile: text-left text-s22l33">
          The Mintoak Story
        </div>
        <div className="desktop:text-s24l36 text-000000 text-center desktop:py-40 desktop:px-295 mobile: py-24 mobile: w-100% mobile:text-left mobile:text-525252 mobile:text-s14l21 mobile:pr-50">
          Born out of relentless passion for empowering banks and small
          businesses through digital transformation, Mintoak is an innovative
          start-up built on the pillars of a unique technology solution.
          Mintoak’s comprehensive digital ecosystem simplifies payments
          processes for small businesses with the help of banks,thus bridging
          the long-existing gap between the two.
        </div>
        <div className="flex w-100% justify-center desktop:px-100 desktop:py-42  mobile:w-100% mobile:flex-col">
          <div className="flex items-center flex-col w-25% mobile:flex-row mobile:w-100%">
            <div>
              <Image src="/images/icons/flag.svg" width={73} height={73} />
            </div>
            <div className="text-s24l36 text-000000 font-bold py-42 text-center desktop:px-100 mobile:pl-23 mobile:text-s16l24 mobile:font-medium">
              Founded in 2017
            </div>
          </div>
          <div className="flex items-center flex-col w-25% mobile:flex-row mobile:w-100%">
            <div>
              <Image src="/images/icons/users.svg" width={73} height={73} />
            </div>
            <div className="text-s24l36 text-000000 font-bold py-42 text-center desktop:px-70 mobile:pl-23 mobile:text-s16l24 mobile:font-medium">
              10,000+ Active users
            </div>
          </div>
          <div className="flex items-center flex-col w-25% mobile:flex-row mobile:w-100%">
            <div>
              <Image src="/images/icons/world.svg" width={73} height={73} />
            </div>
            <div className="text-s24l36 text-000000 font-bold py-42 text-center desktop:px-50 mobile:pl-23 mobile:text-s16l24 mobile:font-medium">
              10+ Countries of operation
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="flex w-100% bg-footer desktop:px-85 mobile:flex-col">
        <div className="flex mobile:w-100% desktop:w-50% flex-col  mobile:py-20 mobile:pl-20 mobile:pr-25 desktop:px-86 desktop:pt-85 desktop:pb-94 mobile:border-b desktop:border-r border-8B8B8B">
          <div className="flex flex-row w-100% items-center desktop:pb-20 mobile:pt-27 mobile:pb-25">
            <div>
              <Image src="/images/icons/vision.svg" width={49} height={49} />
            </div>
            <div className="text-s45l54 mobile:text-s22l26_4 text-FFFFFF font-bold desktop:px-25 mobile:px-8 ">
              Vision
            </div>
          </div>
          <div className="text-F1F1F1 text-s20l30 mobile:text-s14l21 desktop:pt-20 mobile:pb-14 mobile:pr-15">
            Mintoak was established with a vision to build a cohesive,
            high-performance ecosystem providing complete business solutions for
            small and medium enterprises. We strongly believe in the extensive
            transformation that the SME space can bring about for economies
            through increased digital engagement powered by our flexible
            solutions.
          </div>
        </div>
        <div className="flex mobile:w-100% desktop:w-50% flex-col  mobile:py-20 mobile:pl-20 mobile:pr-25 desktop:px-86 desktop:pt-85 desktop:pb-94 mobile:border-t desktop:border-l border-8B8B8B">
          <div className="flex flex-row w-100% items-center desktop:pb-20 mobile:pt-27 mobile:pb-25">
            <div>
              <Image src="/images/icons/mission.svg" width={49} height={49} />
            </div>
            <div className="text-s45l54 mobile:text-s22l26_4 text-FFFFFF font-bold desktop:px-25 mobile:px-8 ">
              Mission
            </div>
          </div>
          <div className="text-F1F1F1 text-s20l30 mobile:text-s14l21 desktop:pt-20 mobile:pb-14 mobile:pr-15">
            Mintoak aims to empower and elevate small businesses and merchants
            by providing them access to the most competent digital tools that
            place them at par, in terms of proficiency and experience, with
            other players or giants in the organized sector.
          </div>
        </div>
      </div>

      {/* Our Principles */}
      <div className="desktop:w-100% desktop:py-70 mobile:w-100%">
        <div className="flex desktop:justify-around font-bold text-252525 mobile:pl-30 text-s44l120 mobile:text-s22l33 mobile:pt-80 desktop:pt-100 desktop:pb-60 mobile:pb-25">
          Our Principles
        </div>
        <div className="flex mobile:flex-col justify-around w-100% desktop:px-150  mobile:px-13">
          <div className="flex desktop:flex-col items-center desktop:border border-8CC63E justify-center desktop:w-25% mobile:w-100% desktop:py-25 mobile:py-10">
            <div>
              <Image src="/images/icons/cloud.svg" height={135} width={135} />
            </div>
            <div>
              <div className="font-bold text-s24l29 mobile:text-s16l19 text-252525  desktop:text-center mobile:pl-20">
                Innovation
              </div>
              <div className="desktop:text-s20l150 mobile:text-s14l21 text-525252 desktop:pt-15 desktop:text-center px-20">
                Constant endeavor to create and execute fresh ideas
              </div>
            </div>
          </div>
          <div className="flex desktop:flex-col items-center desktop:border border-8CC63E justify-center desktop:w-25% mobile:w-100% desktop:py-25 mobile:py-10">
            <div>
              <Image src="/images/icons/value.svg" height={135} width={135} />
            </div>
            <div>
              <div className="font-bold text-s24l29 mobile:text-s16l19 text-252525  desktop:text-center mobile:pl-20">
                Passion
              </div>
              <div className="desktop:text-s20l150 mobile:text-s14l21 text-525252 desktop:pt-15 desktop:text-center px-20">
                Relentless effort to leave a lasting impact on our users
              </div>
            </div>
          </div>
          <div className="flex desktop:flex-col items-center desktop:border border-8CC63E justify-center desktop:w-25% mobile:w-100% desktop:py-25 mobile:py-10">
            <div>
              <Image src="/images/icons/instant.svg" height={135} width={135} />
            </div>
            <div>
              <div className="font-bold text-s24l29 mobile:text-s16l19 text-252525   desktop:text-center mobile:pl-20">
                Integrity
              </div>
              <div className=" desktop:text-s20l150 mobile:text-s14l21 text-525252 desktop:pt-15 desktop:text-center px-20">
                Unwavering commitments and open communications
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="w-100% flex flex-col py-70">
        <div className="flex flex-col justify-center items-center w-100% ">
          <div className="text-s45l33 mobile:text-s22l33 mobile:text-000000 text-252525 font-bold px-40">
            Meet the Team
          </div>
          <div className="desktop:text-s20l33 mobile:text-s14l21 mobile:text-525252 text-252525 py-35 text-center desktop:px-415  mobile:px-30">
            Mintoak is proud to present its team of young, energetic and driven
            individuals, led by three talented professionals with a vision. At
            the core of the team’s approach is their stanch determination to
            help small businesses through innovative, dynamic and tech-oriented
            products.
          </div>
        </div>
        <div className="w-100% desktop:px-215 pb-60 desktop:pt-40">
          <Carousel
            itemsToShow={3}
            showArrows={false}
            enableAutoPlay={false}
            className="flex itmes-center justify-center"
            pagination={false}
          >
            <div className="flex flex-col items-center justify-center ">
              <div className="">
                <Image
                  src="/images/backgrounds/megha.jpg"
                  height={299}
                  width={229}
                />
              </div>
              <div className="text-s18l33 text-F1F1F1 text-center absolute desktop:pt-225 mobile:pt-100">
                Name
              </div>
              <div className="text-s16l33 text-F1F1F1 text-center absolute desktop:pt-275 mobile:pt-140">
                Designation
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <Image
                  src="/images/backgrounds/megha.jpg"
                  height={299}
                  width={229}
                />
              </div>
              <div className="text-s18l33 text-F1F1F1 text-center absolute desktop:pt-225 mobile:pt-100">
                Name
              </div>
              <div className="text-s16l33 text-F1F1F1 text-center absolute desktop:pt-275 mobile:pt-140">
                Designation
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <Image
                  src="/images/backgrounds/megha.jpg"
                  height={299}
                  width={229}
                />
              </div>
              <div className="text-s18l33 text-F1F1F1 text-center absolute desktop:pt-225 mobile:pt-100">
                Name
              </div>
              <div className="text-s16l33 text-F1F1F1 text-center absolute desktop:pt-275 mobile:pt-140">
                Designation
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <Image
                  src="/images/backgrounds/megha.jpg"
                  height={299}
                  width={229}
                />
              </div>
              <div className="text-s18l33 text-F1F1F1 text-center absolute desktop:pt-225 mobile:pt-100">
                Name
              </div>
              <div className="text-s16l33 text-F1F1F1 text-center absolute desktop:pt-275 mobile:pt-140">
                Designation
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* Our founders */}
      <div className="w-100% bg-footer desktop:px-100 mobile:pb-35 desktop:pb-70 flex mobile:flex-col">
        <div className="flex flex-col desktop:w-70% mobile:w-100%">
          <div className="text-s45l33 text-F1F1F1 font-bold px-40 pt-142 pb-50 mobile:hidden">
            Our founders
          </div>
          <div className="flex mobile:flex-col">
            <div className="mobile:pl-20 mobile:pt-40 mobile:pb-40 mobile:pr-45 desktop:p-40 desktop:w-50% mobile:w-100%">
              <Image
                src="/images/backgrounds/raman khanduja.svg"
                height={660}
                width={529}
              />
            </div>
            <div className="flex flex-col mobile:px-25 desktop:px-20 desktop:pt-40 justify-end desktop:w-50% mobile:w-100%">
              <div className="desktop:text-s30l45 desktop:text-F1F1F1 mobile:text-s20l24 mobile:text-FFFFFF font-bold pb-5">
                Raman Khanduja
              </div>
              <div className="mobile:text-s16l19 desktop:text-s24l36 mobile:text-FFFFFF desktop:text-F1F1F1 pt-5 desktop:pb-30 mobile:pb-20">
                Chief Executive
              </div>
              <div className="desktop:text-s20l30 mobile:s14l21 desktop:text-F1F1F1 mobile:text-FFFFFF  desktop:py-20 desktop:pr-40 mobile:pr-41">
                Raman has over 20+ years of corporate experience in financial
                services and payments. Before taking the entrepreneurial leap,
                Raman was head of Business Development at Visa and worked with
                leading financial institutions in India. Prior to Visa, Raman
                has experience in retail strategy, portfolio management,
                analytics and consulting across HDFC Bank, Centurion Bank,
                American Express and Pricewaterhouse Coopers. Raman has an MBA
                from Indian Institute of Management, Calcutta and a Bachelor in
                Mechanical Engineering from T.I.E.T, Patiala
              </div>
            </div>
          </div>
        </div>
        <div className="w-30% pt-80 flex flex-col itmes-center justify-center mobile:hidden">
          <Chrono
            cardWidth={250}
            cardHeight={120}
            theme={{
              primary: "#848484",
              secondary: "#F1F1F1",
              cardBgColor: "footer",
              outline: "red",
            }}
            flipLayout={true}
            mode="VERTICAL"
            hideControls={true}
          >
            <div className="text-right">
              <div className="text-F1F1F1 text-s24l36 pt-33">
                Raman Khanduja
              </div>
              <div className="text-F1F1F1 text-s20l30 ">Chief Executive</div>
            </div>
            <div className="text-right pr-20">
              <div className="text-F1F1F1 text-s20l30 pt-60">
                Rama Tadepalli
              </div>
              <div className="text-949494 text-s20l30">
                Chief of Product & Marketing
              </div>
            </div>
            <div className="text-right pr-20">
              <div className="text-F1F1F1 text-s20l30 pt-60 pl-40">
                Sanjay Nazareth
              </div>
              <div className="text-949494 text-s20l30  pl-50">
                Chief of Operations
              </div>
            </div>
            <div className="text-right pr-20">
              <div className="text-F1F1F1 text-s20l30 pt-55">Kabeer Jain</div>
              <div className="text-949494 text-s20l30 ">
                Chief of Product Engineering
              </div>
            </div>
            <div className="text-right pr-20">
              <div className="text-F1F1F1 text-s20l30 pt-60 ">Rohit Ramana</div>
              <div className="text-949494 text-s20l30 pl-50">
                Chief Financial Officer
              </div>
            </div>
          </Chrono>
        </div>
      </div>
      <div className="desktop:hidden mobile:flex flex-col">
        <div className="text-s22l33 text-000000">Our founders</div>
        <div className="flex ">
          <div>
            <Image
              src="/images/backgrounds/raman khanduja.svg"
              height={660}
              width={529}
            />
          </div>
          <div>
            <Image
              src="/images/backgrounds/raman khanduja.svg"
              height={660}
              width={529}
            />
          </div>
          <div>
            <Image
              src="/images/backgrounds/raman khanduja.svg"
              height={660}
              width={529}
            />
          </div>
        </div>
        <div>
          <div>Raman Khanduja</div>
          <div>Chief Executive</div>
        </div>
      </div>
    </div>
  )
}
