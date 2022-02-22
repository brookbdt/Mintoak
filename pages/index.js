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
    </div>
  );
}
