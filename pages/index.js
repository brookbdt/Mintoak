import Image from "../components/helpers/Image";

export default function Home() {
  return (
    <>
      <div className="relative bg-home-top h-fit w-100%">
        <div className="flex p-100 items-center">
          <div className="w-50% flex flex-col justify-center z-10">
            <div className="text-s44l120 text-252525">A one-stop </div>
            <div className="text-s56l124_5 font-bold text-252525">merchant ecosystem</div>
            <div className="text-s44l120 text-252525">for all your business needs</div>
            <div className="text-s24l150 text-525252 mt-37">
              Powered by real-time analytics and easy access to financial services, our comprehensive digital payment's platform helps bridge the gap
              between banks and small businesses.
            </div>
            <div className="button w-216 h-54 mt-40">Request A Demo</div>
          </div>

          <div className="w-50% flex items-center justify-center z-10">
            <Image src="/images/backgrounds/home_top.svg" height={780} width={1100} />
          </div>
        </div>

        <div className="absolute top-0 z-0 w-100% flex justify-center">
          <Image src="/images/backgrounds/top_center.svg" height={272} width={662} />
        </div>

        <div className="absolute top-100 z-0 w-100% flex justify-end opacity-10">
          <Image src="/images/backgrounds/top_center_bottom.svg" height={641} width={527} />
        </div>
      </div>
    </>
  );
}
