import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Image from "../components/helpers/Image";
import { consts } from "react-elastic-carousel";
import { Collapse } from "antd";
import { API, endpoints } from "../components/helpers/API";

export default function BlogDetail() {
  const blackCarouselArrows = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <i className="fa fa-angle-left text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
      ) : (
        <i className="fa fa-angle-right text-s24l150 flex items-center justify-center border border-8B8B8B rounded-full h-63 w-63" />
      );
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  };
  return (
    <div className="h-fit w-100% bg-home-top">
      {/* blog-detail-bg */}
      <div className="relative top-bg-container h-640 bg-contain desktop-blog-detail-banner mobile:hidden">
        <Image
          src="/images/backgrounds/blog-detail-bg.svg"
          className="absolute z-minus1 mobile:hidden bg-cover w-100% h-fit"
          // layout="fill"
          type="img"
        />
        <div className="pl-181 pt-158 z-10">
          <div className="text-s20l24 mobile:text-s20l24 text-C4C4C4 shrink-0">
            <Image src="/images/icons/clock.svg" height={13} width={13} />
            <span className="pl-16">6 min read</span>
          </div>
          <div className="pt-13 text-s20l24 mobile:text-s20l24 text-C4C4C4 shrink-0">
            <Image src="/images/icons/eye.svg" height={11} width={17} />
            <span className="pl-16">200 views</span>
          </div>
          <div className="pt-51 w-144 h-35 flex justify-between text-F1F1F1">
            <div>
              <Image
                src="/images/icons/instagram.svg"
                width={35}
                height={35}
                className="text-F1F1F1"
                type="img"
              />
            </div>
            <div>
              <Image
                src="/images/icons/facebook1.svg"
                width={35}
                height={35}
                className="text-F1F1F1"
                type="img"
              />
            </div>
            <div>
              <Image
                src="/images/icons/twitter.svg"
                width={35}
                height={35}
                className="text-F1F1F1"
                type="img"
              />
            </div>
          </div>
          <div className="pt-116 text-s44l52 text-FFFFFF font-semibold">
            PAAS models ushering an era of bank-fintech partnerships
          </div>
          <div className="pt-40 flex">
            <div className="w-231 h-64 text-C4C4C4 text-s24l36">
              By Raman Kahnduja Sept 13, 2021
            </div>
            <div className="border border-2 h-11 pt-11 w-2 border-C4C4C4 mt-10"></div>
            <div className="pl-21 text-s24l24 font-bold text-46AC34 pt-5">
              Economic Times
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-bg-container h-512 bg-contain bg-blog_detail_banner desktop:hidden laptop:hidden blog-detail-banner">
        <Image
          src="/images/backgrounds/mobile-blog-detail-bg.svg"
          className="absolute z-minus1 mobile:hidden"
          layout="fill"
        />
        <div className="pl-20 pt-46 pr-38">
          <div className="text-s24l31 text-FFFFFF text-semibold">
            PAAS models ushering an era of bank-fintech partnerships
          </div>
          <div className="pt-20 flex">
            <div className="w-126 text-C4C4C4">
              By Raman Kahnduja Sept 13, 2021
            </div>
            <div className="mx-8">
              <div className="border border-1 border-C4C4C4 px-3"></div>
            </div>
            <div className="text-s12l24 text-46AC34 font-semibold">
              Economic Times
            </div>
          </div>
          <div className="pt-230 pb-31">
            <div className="text-s12l14 text-C4C4C4">
              <Image src="/images/icons/clock.svg" height={11} width={11} />
              <span className="pl-16">6 min read</span>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="pt-12">
                  <div className="text-s12l14 text-C4C4C4">
                    <Image src="/images/icons/eye.svg" height={11} width={11} />
                    <span className="pl-16">200 views</span>
                  </div>
                </div>
              </div>
              <div className="flex w-72">
                <div>
                  <Image
                    src="/images/icons/instagram.svg"
                    width={35}
                    height={35}
                  />
                </div>
                <div>
                  <Image
                    src="/images/icons/facebook.svg"
                    width={35}
                    height={35}
                  />
                </div>
                <div>
                  <Image
                    src="/images/icons/twitter.svg"
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-80 mobile:pt-40 px-180 mobile:pl-20 mobile:pr-25 bg-blog_details flex laptop:px-50">
        <div>
          <div className="text-s32l45 font-semibold text-252525 mobile:text-s22l33">
            A brief overview
          </div>
          <div className="w-1200 laptop:w-900 laptop:w-900 mobile:w-315 pt-24 mobile:pt-16 text-s24l36 mobile:text-s14l21 blog-letter-spacing text-525252">
            Small and medium enterprises play a critical role in the economic
            development of any country. Even though their contribution towards a
            country’s GDP as well as employment generation is significant, they
            continue to remain financially excluded due to the unpredictable
            nature of their income and business models.
            <br />
            <br />
            SMEs in different countries may differ in terms of their
            characteristics, size and composition, but they have similar
            aspirations such as better cash flow management, access to external
            financing, omnichannel payments platforms and tools to help them
            grow their business. The enormity of the segment, combined with
            their financially underserved status, presents a massive opportunity
            for various players including banks and fintech players in the
            Financial Ecosystem.
          </div>
          <div className="pt-80 mobile:pt-40">
            <div className="text-s32l45 font-semibold text-252525 mobile:text-s22l33 mobile:w-318">
              Who can solve the SME Financial Inclusion Puzzle: Banks or
              Fintechs?
            </div>
            <div className="w-1200 laptop:w-900 mobile:w-315 pt-24 mobile:pt-16 text-s24l36 mobile:text-s14l21 blog-letter-spacing text-525252">
              Perpetual financial exclusion of SMEs has created a very large
              trust deficit. There is a need for players that can bring forth a
              combination of trust, network distribution and tech agility to
              address this. This poses constraints for many players in the
              current ecosystem. While banking institutions swear by their
              brand, trust and distribution, they lack the nimble tech agility
              and seamless tech-forward platforms to meet the constantly
              increasing digital needs of SMEs. Fintech players on the other
              hand have been able to create responsive, API-first, cloud native
              and easy-to-use propositions but are challenged to match banks on
              trust and distribution.
            </div>
          </div>
          <div className="pt-80 mobile:pt-40">
            <div className="text-s32l45 font-semibold text-252525 mobile:text-s22l33 mobile:w-318">
              Banks and fintech: From competing to collaborating
            </div>
            <div className="w-1200 laptop:w-900 mobile:w-315 pt-24 mobile:pt-16 text-s24l36 mobile:text-s14l21 blog-letter-spacing text-525252">
              The dotcom bubble in 2000 marked the dawn of internet giants like
              Amazon, Facebook, Google, etc., driving a paradigm shift across
              segments. Similarly, the Global Financial Crisis in 2008-2009 led
              to the birth of fintech players like Square (US) and Paytm
              (India). Back then, traditional banks looked at fintech companies
              with concern. For the longest period, they were perceived as
              potential disruptors to banking with banks continuing to believe
              that their own products were best suited for consumers.
              <br />
              <br />
              Fast forward to 2021, although fintech and new-age financial
              start-ups have made large strides, banks continue to stay relevant
              at a much larger scale than they were 10 years ago. The same banks
              no longer necessarily look at fintech as invaders to their domain.
              A lot has changed during this time with the dawn of digitization
              and it has impacted almost every aspect of our life. Platforms
              like Amazon and Flipkart have changed the way we shop and Zomato
              and Swiggy have changed how we dine. Similarly, Uber and Ola have
              transformed the commute, while Amazon Prime has disrupted the
              entertainment consumption space. However one area that has
              remained unchanged is how we use banks to save our monies. When it
              comes to money, consumers including SMEs prefer to stay
              conservative and trust no one except the good old established
              banking institutions despite their experience not being the most
              seamless. The trust that banks command is their biggest strength.
              This trust complemented with an agile and nimble tech platform can
              solve all the financial inclusion challenges including SME that
              have stayed unaddressed for a very long time.
              <br />
              <br />
              Solving the challenge warrants a new approach where banks and
              fintechs collaborate instead of competing to create viable
              solutions for the end customer and sustainable models for the
              participating stakeholders. The model combines banking services,
              trust and distribution with a fintech’s seamless experience and
              delivery to create compelling platforms for the end customer and
              strong moats for the principals involved.
            </div>
          </div>
          <div className="pt-72 mobile:pt-40 desktop:w-1166">
            <div className="text-s32l45 font-semibold text-252525 mobile:text-s22l33 mobile:w-318">
              Platform-as-a-Service (PaaS)- Paving the way for creating optimal
              collaboration models for the Financial Inclusion of SMEs
            </div>
            <div className="w-1200 laptop:w-900 mobile:w-315 pt-24 mobile:pt-16 text-s24l36 mobile:text-s14l21 blog-letter-spacing text-525252">
              The new generation of fintech players compliment the banks’ infra
              with their agile tech platforms to make them smart. Offering
              Platform-as-a-Service (PaaS), such models create cost efficient
              integrated offerings that link the success of fintechs directly to
              banks’ business growth. Merchant payments present an interesting
              use case to demonstrate the power of such collaboration.
              <br />
              <br />
              Merchants’ payments or payment acceptance is a door opener to
              establish a relationship with SME merchants. Always challenged for
              profitability, this business however has remained one of the most
              seamless and successful strategies for penetrating the financially
              underserved SME segment. While payments kickstarts the
              relationship, it needs to be supplemented with engagement and
              cross sell of financial products to create a sustainable
              profitable model.
              <br />
              <br />
              India with its high cash penetration (~80% of Personal Consumption
              Expenditure) and large underserved SME base presents one of the
              most fertile opportunities to leverage merchant payments for
              solving SME financial inclusion. This combined with a supportive
              regulatory regime and favourable pricing policy (for the merchant)
              has led to the space witnessing massive participation and
              significant innovation in the recent years. India is possibly the
              only country where you have the largest tech companies like
              Google, Amazon, FB (Whatsapp) jostling for relevance alongside
              banks to solve for merchant payments. As a result, the merchant
              til today is crowded with multiple QRs, smartphone loaded with
              multiple payment apps (the Pes’ and Khatas) and life complicated
              with tedious reconciliation. On the other side, the payment
              platform providers are struggling for profitable models because
              fragmented til means no one gets comprehensive enough data to
              deliver meaningful financial services. All this is leading to an
              ecosystem where merchants are indifferent to payments, continue to
              be financially excluded and the platform players pursue a struggle
              for relevance. Consolidation of payments at merchant til is one
              likely way forward that can ease the merchant’s pain, solve for
              their financial access and create sustainable profitable models
              for platform providers.
            </div>
          </div>
          <div className="pt-80 mobile:pt-40">
            <div className="text-s32l45 font-semibold text-252525 mobile:text-s22l33">
              Conclusion
            </div>
            <div className="w-1200 laptop:w-900 mobile:w-315 pt-24 mobile:pt-16 text-s24l36 mobile:text-s14l21 blog-letter-spacing text-525252">
              For banks, subscription pricing, a key ingredient of the PaaS
              model turns out to be pocket friendly, whereas the scale makes
              this proposition viable for their fintech partner.
              <br />
              <br />
              Clearly, banks and fintech players can no longer afford to operate
              solo. A collaboration-driven approach can usher in a vibrant new
              era of modern digital banking that can drive SMEs towards
              financial inclusion and transform developing countries into true
              economic powerhouses.
            </div>
          </div>
        </div>
        <div className="pt-20 flex justify-end w-100% mobile:hidden">
          <div>
            <div>
              <Image
                src="/images/backgrounds/related-blog1.svg"
                width={178}
                height={84}
              />
              <div className="pt-8 text-s20l26_6 font-semibold w-181 text-center">
                Standout in digital payments
              </div>
            </div>
            <div className="mt-24 flex justify-center">
              <div className="px-13 border border-2 border-C4C4C4 w-26"></div>
            </div>
            <div className="pt-24">
              <Image
                src="/images/backgrounds/related-blog2.svg"
                width={178}
                height={84}
              />
              <div className="pt-8 text-s20l26_6 font-semibold w-181 text-center">
                Key to Customer satisfaction
              </div>
            </div>
            <div className="mt-24 flex justify-center">
              <div className="px-13 border border-2 border-C4C4C4 w-26"></div>
            </div>
            <div className="pt-24">
              <Image
                src="/images/backgrounds/related-blog3.svg"
                width={178}
                height={84}
              />
              <div className="pt-8 text-s20l26_6 font-semibold w-181 text-center">
                Key to Customer satisfaction
              </div>
            </div>
            <div className="mt-24 flex justify-center">
              <div className="px-13 border border-2 border-C4C4C4 w-26"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-150 mobile:pt-80 desktop:px-180 mobile:pr-16 laptop:px-50 ">
        <div className="flex mobile:pl-21 text-s44l66 mobile:text-s22l33 font-bold desktop:justify-center laptop:justify-center mobile:justify-between">
          Related blogs
          <div className="mobile:text-s12l18 text-8DBF52 desktop:hidden laptop:hidden border-b h-auto">
            View all
          </div>
        </div>
        <div className="pt-39 desktop:hidden laptop:hidden pb-80">
          <Carousel
            itemPadding={[0, 15]}
            itemsToShow={1.3}
            outerSpacing={0}
            showArrows={false}
            pagination={false}
          >
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image
                  src="/images/backgrounds/img-4.svg"
                  height={203}
                  width={216}
                />
              </div>
              <div div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10 mobile:text-s11_14l13_37">
                  6 min read
                </div>
                <div className="text-252525 px-10 font-bold text-s14l16_8 mobile:pt-5">
                  How to standout in digital payments business space
                </div>
                <div className="text-525252 px-10 pb-0 text-s12l14 mobile:text-s11_14l13_37 mobile:pt-20">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image
                  src="/images/backgrounds/img-5.svg"
                  height={203}
                  width={216}
                />
              </div>
              <div div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10 mobile:text-s11_14l13_37">
                  6 min read
                </div>
                <div className="text-252525 px-10 font-bold text-s14l16_8 mobile:pt-5">
                  How to fix recurring payments under new RBI guidelines
                </div>
                <div className="text-525252 px-10 pb-0 text-s12l14 mobile:text-s11_14l13_37 mobile:pt-20">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image
                  src="/images/backgrounds/img-6.svg"
                  height={203}
                  width={216}
                />
              </div>
              <div div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10 mobile:text-s11_14l13_37">
                  6 min read
                </div>
                <div className="text-252525 px-10 font-bold text-s14l16_8 mobile:pt-5">
                  The tango between banks and fintechs: Rivals turn partners
                </div>
                <div className="text-525252 px-10 pb-0 text-s12l14 mobile:text-s11_14l13_37 mobile:pt-20">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image
                  src="/images/backgrounds/img-4.svg"
                  height={203}
                  width={216}
                />
              </div>
              <div div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10 mobile:text-s11_14l13_37">
                  6 min read
                </div>
                <div className="text-252525 px-10 font-bold text-s14l16_8 mobile:pt-5">
                  How to standout in digital payments business space
                </div>
                <div className="text-525252 px-10 pb-0 text-s12l14 mobile:text-s11_14l13_37 mobile:pt-20">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-234 h-315 flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image
                  src="/images/backgrounds/img-5.svg"
                  height={203}
                  width={216}
                />
              </div>
              <div div className="flex flex-col items-start">
                <div className="text-83B449 text-s14l16_8 pt-5 pl-10 mobile:text-s11_14l13_37">
                  6 min read
                </div>
                <div className="text-252525 px-10 font-bold text-s14l16_8 mobile:pt-5">
                  How to fix recurring payments under new RBI guidelines
                </div>
                <div className="text-525252 px-10 pb-0 text-s12l14 mobile:s11_14l13_37 mobile:pt-20">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-33 w-38 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="pt-60 pb-150 mobile:hidden">
          <Carousel
            itemsToShow={3}
            itemPadding={[0, 20, 0, 20]}
            enableMouseSwipe={false}
            pagination={false}
            renderArrow={blackCarouselArrows}
          >
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-16">
                <Image
                  src="/images/backgrounds/img-4.svg"
                  height={265}
                  width={320}
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29 laptop:text-s16l24">
                  How to standout in digital payments business space
                </div>
                <div className="text-525252 p-20 mt-10 text-s20l24 laptop:text-s14l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image
                  src="/images/backgrounds/img-5.svg"
                  height={265}
                  width={320}
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29 laptop:text-s16l24">
                  How to fix recurring payments under new RBI guidelines
                </div>
                <div className="text-525252 px-20 mt-15 text-s20l24 laptop:text-s14l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image
                  src="/images/backgrounds/img-6.svg"
                  height={265}
                  width={320}
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29 laptop:text-s16l24">
                  The tango between banks and fintechs: Rivals turn partners
                </div>
                <div className="text-525252 px-20 mt-15 text-s20l24 laptop:text-s14l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image
                  src="/images/backgrounds/img-4.svg"
                  height={265}
                  width={320}
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29 laptop:text-s16l24">
                  How to standout in digital payments business space
                </div>
                <div className="text-525252 p-20 mt-10 text-s20l24 laptop:text-s14l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
            <div className="w-80% flex flex-col justify-center items-center bg-FFFFFF">
              <div className="px-10">
                <Image
                  src="/images/backgrounds/img-5.svg"
                  height={265}
                  width={320}
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-83B449 text-s20l24 p-20">6 min read</div>
                <div className="text-252525 px-20 font-bold text-s24l29 laptop:text-s16l24">
                  How to fix recurring payments under new RBI guidelines
                </div>
                <div className="text-525252 px-20 mt-15 text-s20l24 laptop:text-s14l24">
                  By <span className="font-bold">Raman Kahnduja</span>
                  <br />
                  Sept 13, 2021
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <i className="fa fa-arrow-right-long bg-button text-FFFFFF h-60 w-70 flex items-center justify-center fa-lg cursor-pointer"></i>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
