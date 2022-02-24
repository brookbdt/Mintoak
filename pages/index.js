import { useState } from "react/cjs/react.development";
import Carousel from "react-elastic-carousel";
import Image from "../components/helpers/Image";
import { consts } from 'react-elastic-carousel';

export default function Home() {
  const [isBORM, setIsBORM] = useState('b');
  const arrows = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <i className="fa fa-angle-left text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" /> : <i className="fa fa-angle-right text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }
  const arrows2 = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <i className="fa fa-angle-left text-s24l150 text-F1F1F1 flex items-center justify-center border border-F1F1F1 rounded-full h-63 w-63" /> : <i className="fa fa-angle-right text-s24l150 text-F1F1F1 flex items-center justify-center border border-F1F1F1 rounded-full h-63 w-63" />
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }
  return (
    <div className="h-fit w-100% bg-8FC055">
      {/* Top layout with resp */}
      <div className="relative">
        <Image src="/images/backgrounds/home-bg.webp" layout="fill" className="absolute z-minus1" />
        <div className="desktop:w-50% desktop:p-100 laptop:p-100 laptop:w-70% tablet:w-80% tablet:p-30 px-20 mobile:pt-350 pb-40 z-10">
          <div className="text-s44l120 mobile:text-s24l28_8 text-252525 shrink-0">A one-stop </div>
          <div className="text-s56l124_5 mobile:text-s34l42 font-bold text-252525 shrink-0">merchant ecosystem</div>
          <div className="text-s44l120 mobile:text-s24l28_8 text-252525 shrink-0">for all your business needs</div>
          <div className="text-s24l150 mobile:text-s14l24 text-525252 shrink-0 mt-37">
            Powered by real-time analytics and easy access to financial services, our comprehensive digital payment's platform helps bridge the gap
            between banks and small businesses.
          </div>
          <div className="button w-216 mobile:w-100% mobile:h-40 h-54 mt-40">Request A Demo</div>
        </div>
      </div>
      {/* Count layout */}
      <div className="flex items-center justify-around px-200 mb-150">
        <div className="text-center text-s36l43 text-252525">
          400,000<span className="text-A4D77A">+</span>
          <div className="text-s20l24 text-525252 mt-10">Merchants</div>
        </div>
        <div className="text-center text-s36l43 text-252525">
          30 million<span className="text-A4D77A">+</span>
          <div className="text-s20l24 text-525252 mt-10">Transactions Annually</div>
        </div>
        <div className="text-center text-s36l43 text-252525">
          $1 billion<span className="text-A4D77A">+</span>
          <div className="text-s20l24 text-525252 mt-10">GMV Annuals</div>
        </div>
      </div>

      {/* Mintoak Advantages */}
      <div className="flex justify-around text-252525 text-s44l120 mb-60">Mintoak Advantages</div>
      <div className="flex justify-around w-100% px-100 mb-150">
        <div className="flex flex-col items-center border border-8CC63E justify-center w-40% p-20 mx-20">
          <Image src="/images/icons/cloud.svg" height={135} width={135} />
          <div className="font-bold text-s24l29 text-252525 mt-30 text-center">Cloud based toolkit</div>
          <div className="text-s20l150 text-525252 mt-15 text-center">Cloud-based toolkit with secure integration for successful payments</div>
        </div>
        <div className="flex flex-col items-center border border-8CC63E justify-center w-40% p-20 mx-20">
          <Image src="/images/icons/value.svg" height={135} width={135} />
          <div className="font-bold text-s24l29 text-252525 mt-30 text-center">Value added services</div>
          <div className="text-s20l150 text-525252 mt-15 text-center">Wide-ranging value-added services for comprehensive business growth</div>
        </div>
        <div className="flex flex-col items-center border border-8CC63E justify-center w-40% p-20 mx-20">
          <Image src="/images/icons/instant.svg" height={135} width={135} />
          <div className="font-bold text-s24l29 text-252525 mt-30 text-center">Instant onboarding</div>
          <div className="text-s20l150 text-525252 mt-15 text-center">
            Instant registering and onboarding for merchants through a robust digital interface
          </div>
        </div>
        <div className="flex flex-col items-center border border-8CC63E justify-center w-40% p-20 mx-20">
          <Image src="/images/icons/payment.svg" height={135} width={135} />
          <div className="font-bold text-s24l29 text-252525 mt-30 text-center">Payments re-imagined</div>
          <div className="text-s20l150 text-525252 mt-15 text-center">
            Reimagining payments through omni-channels with real-time tracking features
          </div>
        </div>
      </div>

      {/* Banks/Merchants */}
      <div className="flex flex-col bg-footer mb-100 w-100%">
        <div className="flex w-100%">
          <div className={"flex items-center justify-center w-50% py-40 border-b cursor-pointer " + (isBORM === 'b' ? 'border-8CC63E' : 'border-8B8B8B')}
            onClick={() => setIsBORM('b')}>
            <Image src={`/images/icons/radio-${isBORM === 'b' ? 'selected' : 'unselected'}.svg`} height={49} width={49} />
            <div className={"ml-25 font-bold text-s40l60 " + (isBORM === 'b' ? 'text-FFFFFF' : 'text-A2A2A2')}>For Banks</div>
          </div>
          <div className="border-r border-8CC63E"></div>
          <div className={"flex items-center justify-center w-50% py-40 border-b cursor-pointer " + (isBORM === 'm' ? 'border-8CC63E' : 'border-8B8B8B')}
            onClick={() => setIsBORM('m')}>
            <Image src={`/images/icons/radio-${isBORM === 'm' ? 'selected' : 'unselected'}.svg`} height={49} width={49} />
            <div className={"ml-25 font-bold text-s40l60 " + (isBORM === 'm' ? 'text-FFFFFF' : 'text-A2A2A2')}>For Merchants</div>
          </div>
        </div>
        <div className="flex items-center w-100% px-100 py-50">
          {isBORM === 'b' ? <><div className=" flex flex-col w-50% justify-center">
            <div className="text-s24l29 text-F1F1F1 mb-80">On your path to business growth, unlock new opportunities for saving costs, generating new revenue streams and simplified management with our comprehensive payments ecosystem that enables acceptance across all modes with the benefit of real-time tracking anytime, anywhere.
            </div>
            <div className="flex items-center text-s36l43 font-bold text-F1F1F1 mb-20">
              Customizable solutions for your unique needs
            </div>
            <div className="text-s20l150 text-F1F1F1">
              Our modular interface provides enough flexibility for you to customize solutions as per your needs or choose only the most relevant modules for your business.
            </div>
            <div className="text-s20l150 text-8CC63E cursor-pointer">Know More</div>
            <div className="button w-216 h-54 mt-40" >Partner With Us</div>
          </div>
            <div className="w-50% flex items-center justify-center">
              <Image src="/images/backgrounds/for_bank.svg" height={650} width={500} />
            </div></> : <><div className=" flex flex-col w-50% justify-center">
              <div className="text-s24l29 text-F1F1F1 mb-80">The backbone of any business, merchants require a hassle-free, one-stop ecosystem for conducting their myriad transactions and managing, exploring, and expanding their business. This is what we offer, with superior features of real-time tracking of inventories and a robust payments interface.
              </div>
              <div className="flex items-center text-s36l43 font-bold text-F1F1F1 mb-20">
                Take your business digital today
              </div>
              <div className="text-s20l150 text-F1F1F1">
                With technology and data-driven platforms to make business management simpler and faster, our solutions help merchants tackle all existing challenges with ease
              </div>
              <div className="text-s20l150 text-8CC63E cursor-pointer">Learn More</div>
              <div className="button w-216 h-54 mt-40" >Know More</div>
            </div>
            <div className="w-50% flex items-center justify-center">
              <Image src="/images/backgrounds/for_merchants.svg" height={650} width={500} />
            </div></>}
        </div>
      </div>

      {/* Building a global community */}
      <div className="text-s44l120 text-252525 mb-30 text-center">Building a global community</div>
      <div className="flex justify-center items-center w-100% py-50 px-150 mb-125">
        <Carousel itemsToShow={3} itemPadding={[0, 20, 0, 20]} enableMouseSwipe={false} pagination={false} renderArrow={arrows}>
          <div className="h-130 w-230"><Image src="/images/backgrounds/HDFC-Bank-logo.svg" width={231} height={130} /></div>
          <div className="h-130 w-330"><Image src="/images/backgrounds/burgan_bank.svg" width={231} height={130} /></div>
          <div className="h-130 w-230"><Image src="/images/backgrounds/sbi-logo-state-bank-india-group-vector-eps-0.svg" width={231} height={130} /></div>
          <div className="h-130 w-230"><Image src="/images/backgrounds/HDFC-Bank-logo.svg" width={231} height={130} /></div>
          <div className="h-130 w-230"><Image src="/images/backgrounds/burgan_bank.svg" width={231} height={130} /></div>
          <div className="h-130 w-230"><Image src="/images/backgrounds/sbi-logo-state-bank-india-group-vector-eps-0.svg" width={231} height={130} /></div>
        </Carousel>
      </div>
      {/* Our achievements */}
      <div className="flex flex-col items-center bg-footer w-100% p-60 ">
        <div className="text-center font-bold text-Achivment text-s44l120 p-50 ">Our achievements</div>
        <div className="flex items-center w-100% py-50 px-100">
          <Carousel itemsToShow={3} itemPadding={[0, 20, 0, 20]} enableMouseSwipe={false} pagination={false} renderArrow={arrows2}>
            <div className="flex flex-col items-center bg-313131 w-90% p-40 border border-C4C4C4">
              <Image src="/images/backgrounds/fintech_hub.svg" height={110} width={273} />
              <div className="font-bold text-DFDFDF text-center text-s32l38 mt-20">Mumbai Fintech Hub</div>
              <div className="text-DFDFDF text-center mt-20">Grant Certificate Awarded INR 10,00,000 by the State</div>
            </div>
            <div className="flex flex-col items-center bg-313131 w-90% p-40 border border-C4C4C4">
              <Image src="/images/backgrounds/fintech_hub.svg" height={110} width={273} />
              <div className="font-bold text-DFDFDF text-center text-s32l38 mt-20">Mumbai Fintech Hub</div>
              <div className="text-DFDFDF text-center mt-20">Grant Certificate Awarded INR 10,00,000 by the State</div>
            </div>
            <div className="flex flex-col items-center bg-313131 w-90% p-40 border border-C4C4C4">
              <Image src="/images/backgrounds/service provider badge.svg" height={145} width={273} />
              <div className="font-bold text-DFDFDF text-center text-s32l38 mt-20">Visa Global</div>
              <div className="text-DFDFDF text-center mt-20">Visa Global Registry of Service Providers on the list 2020</div>
            </div>
            <div className="flex flex-col items-center bg-313131 w-90% p-40 border border-C4C4C4 min-h-328
            ">
              <Image src="/images/backgrounds/secure_logic.svg" height={167} width={273} />
              <div className="font-bold text-DFDFDF text-center text-s32l38 mt-20">Secure Logic</div>
              <div className="text-DFDFDF text-center mt-20">PCI DSS Level : 1 Classifcation : Merchant</div>
            </div>
          </Carousel>
        </div>
      </div>
      {/* In the media */}
      <div className="w-100% flex-col justify-center items-center">
        <div className="text-center font-bold text-s44l120 py-50 mt-30">In the media</div>
        <div className="w-100% flex flex-col items-center px-150">
          <Carousel itemsToShow={3} itemPadding={[0, 20, 0, 20]} enableMouseSwipe={false} pagination={false} renderArrow={arrows}>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10"><Image src="/images/backgrounds/img-1.svg" height={265} width={320} /></div>
              <div div className="flex flex-col items-start ">
                <div className="text-83B449 text-s20l24 p-20 ">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">Get your money in seconds — 24/7 — with instant transfer</div>
                <div className="text-525252 px-20 mt-15 ">By <span className="font-bold">Raman Kahnduja</span><br />Sept 13, 2021</div>
              </div>
              <div className="w-full flex items-center justify-end"><i className="fa fa-arrow-right-long bg-A4D77A text-FFFFFF h-50 w-60 flex items-center justify-center fa-lg"></i></div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10"><Image src="/images/backgrounds/img-2.svg" height={265} width={320} /></div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20 ">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">Pandemic drives over half of consumers to shop locally</div>
                <div className="text-525252 px-20 mt-15">By <span className="font-bold">Raman Kahnduja</span><br />Sept 13, 2021</div>
              </div>
              <div className="w-full flex items-center justify-end"><i className="fa fa-arrow-right-long bg-A4D77A text-FFFFFF h-50 w-60 flex items-center justify-center fa-lg"></i></div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10"><Image src="/images/backgrounds/img-3.svg" height={265} width={320} /></div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20 ">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">Small Business Filmmaker Competition in India</div>
                <div className="text-525252 p-20 mt-5">By <span className="font-bold">Raman Kahnduja</span><br />Sept 13, 2021</div>
              </div>
              <div className="w-full flex items-center justify-end"><i className="fa fa-arrow-right-long bg-A4D77A text-FFFFFF h-50 w-60 flex items-center justify-center fa-lg"></i></div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10"><Image src="/images/backgrounds/img-1.svg" height={265} width={320} /></div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20 ">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">Get your money in seconds — 24/7 — with instant transfer</div>
                <div className="text-525252 px-20 mt-15">By <span className="font-bold">Raman Kahnduja</span><br />Sept 13, 2021</div>
              </div>
              <div className="w-full flex items-center justify-end"><i className="fa fa-arrow-right-long bg-A4D77A text-FFFFFF h-50 w-60 flex items-center justify-center fa-lg"></i></div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10"><Image src="/images/backgrounds/img-2.svg" height={265} width={320} /></div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20 ">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">Pandemic drives over half of consumers to shop locally</div>
                <div className="text-525252 px-20 mt-15">By <span className="font-bold">Raman Kahnduja</span><br />Sept 13, 2021</div>
              </div>
              <div className="w-full flex items-center justify-end"><i className="fa fa-arrow-right-long bg-A4D77A text-FFFFFF h-50 w-60 flex items-center justify-center fa-lg"></i></div>
            </div>
          </Carousel>
          <div className="text-s22l26_4 text-8DBF52 border-b border-8DBF52 py-5 mt-25">View All</div>
        </div>
      </div>
      {/* Most popular blogs */}
      <div className="w-100% flex-col justify-center items-center">
        <div className="text-center font-bold text-s44l120 py-50 mt-30">Most popular blogs</div>
        <div className="w-100% flex flex-col items-center justify-around px-150">
          <Carousel itemsToShow={3} itemPadding={[0, 20, 0, 20]} enableMouseSwipe={false} pagination={false} renderArrow={arrows}>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10"><Image src="/images/backgrounds/img-4.svg" height={265} width={320} /></div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20 ">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">How to standout in digital payments business space</div>
                <div className="text-525252 p-20 mt-10 ">By <span className="font-bold">Raman Kahnduja</span><br />Sept 13, 2021</div>
              </div>
              <div className="w-full flex items-center justify-end"><i className="fa fa-arrow-right-long bg-A4D77A text-FFFFFF h-50 w-60 flex items-center justify-center fa-lg"></i></div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10"><Image src="/images/backgrounds/img-5.svg" height={265} width={320} /></div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20 ">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">How to fix recurring payments under new RBI guidelines</div>
                <div className="text-525252 px-20 mt-15">By <span className="font-bold">Raman Kahnduja</span><br />Sept 13, 2021</div>
              </div>
              <div className="w-full flex items-center justify-end"><i className="fa fa-arrow-right-long bg-A4D77A text-FFFFFF h-50 w-60 flex items-center justify-center fa-lg"></i></div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10"><Image src="/images/backgrounds/img-6.svg" height={265} width={320} /></div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20 ">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">The tango between banks and fintechs: Rivals turn partners</div>
                <div className="text-525252 px-20 mt-15">By <span className="font-bold">Raman Kahnduja</span><br />Sept 13, 2021</div>
              </div>
              <div className="w-full flex items-center justify-end"><i className="fa fa-arrow-right-long bg-A4D77A text-FFFFFF h-50 w-60 flex items-center justify-center fa-lg"></i></div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10"><Image src="/images/backgrounds/img-4.svg" height={265} width={320} /></div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20 ">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">How to standout in digital payments business space</div>
                <div className="text-525252 p-20 mt-10">By <span className="font-bold">Raman Kahnduja</span><br />Sept 13, 2021</div>
              </div>
              <div className="w-full flex items-center justify-end"><i className="fa fa-arrow-right-long bg-A4D77A text-FFFFFF h-50 w-60 flex items-center justify-center fa-lg"></i></div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10"><Image src="/images/backgrounds/img-5.svg" height={265} width={320} /></div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20 ">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29">How to fix recurring payments under new RBI guidelines</div>
                <div className="text-525252 px-20 mt-15">By <span className="font-bold">Raman Kahnduja</span><br />Sept 13, 2021</div>
              </div>
              <div className="w-full flex items-center justify-end"><i className="fa fa-arrow-right-long bg-A4D77A text-FFFFFF h-50 w-60 flex items-center justify-center fa-lg"></i></div>
            </div>
          </Carousel>
          <div className="text-s22l26_4 text-8DBF52 border-b border-8DBF52 py-5 m-25">View All</div>
        </div>
      </div>
    </div>
  );
}
