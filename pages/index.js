import Image from "../components/helpers/Image";

export default function Home() {
  return (
    <div className="h-fit w-100%">
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
        <div className="flex flex-col items-center border border-8CC63E justify-center p-20 mx-20">
          <Image src="/images/icons/cloud.svg" height={135} width={135} />
          <div className="font-bold text-s24l29 text-252525 mt-30">Cloud based toolkit</div>
          <div className="text-s20l150 text-525252 mt-15 text-center">Cloud-based toolkit with secure integration for successful payments</div>
        </div>
        <div className="flex flex-col items-center border border-8CC63E justify-center p-20 mx-20">
          <Image src="/images/icons/value.svg" height={135} width={135} />
          <div className="font-bold text-s24l29 text-252525 mt-30">Value added services</div>
          <div className="text-s20l150 text-525252 mt-15 text-center">Wide-ranging value-added services for comprehensive business growth</div>
        </div>
        <div className="flex flex-col items-center border border-8CC63E justify-center p-20 mx-20">
          <Image src="/images/icons/cloud.svg" height={135} width={135} />
          <div className="font-bold text-s24l29 text-252525 mt-30">Instant onboarding</div>
          <div className="text-s20l150 text-525252 mt-15 text-center">
            Instant registering and onboarding for merchants through a robust digital interface
          </div>
        </div>
        <div className="flex flex-col items-center border border-8CC63E justify-center p-20 mx-20">
          <Image src="/images/icons/cloud.svg" height={135} width={135} />
          <div className="font-bold text-s24l29 text-252525 mt-30">Payments re-imagined</div>
          <div className="text-s20l150 text-525252 mt-15 text-center">
            Reimagining payments through omni-channels with real-time tracking features
          </div>
        </div>
      </div>
    </div>
  );
}
