import React from "react";
import Image from "../helpers/Image";
import Request_Demo from "../../pages/request_demo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function MiniFooter() {
  const [demoPopup, setDemoPopup] = useState(false);
  const [dropdownTab, setDropDownTab] = useState(null);
  const router = useRouter();
  const [slug, setSlug] = useState("");

  useEffect(() => {
    let url = window.location.href;
    let slug = url.split("/").pop();
    setSlug(slug);
  }, []);
  const TogglePopup = () => {
    setDemoPopup(false);
  };
  return (
    <div className="flex desktop:hidden laptop:hidden flex-col items-center pb-60 w-100%">
      <div className="p-36 pb-0 w-100% flex flex-col mobile:p-20">
        {slug !== "career" && slug !== "careerDetails" && slug !== "faqs" && (
          <>
            <div className="text-F1F1F1 text-s18l27 font-bold">
              Ready to begin your journey with us?
              <div> Get onboard!</div>
            </div>
            <div
              onClick={() => setDemoPopup(true)}
              className="mobile-button h-40 w-300 m-30 mobile:ml-0 mobile:w-166 mobile:h-40 font-bold"
            >
              {slug == "partner-with-us" ? "Partner With us" : "Request A Demo"}
            </div>
          </>
        )}

        <div className="w-100%">
          <div
            className="flex items-center justify-between cursor-pointer py-15"
            onClick={() => {
              setDropDownTab(dropdownTab == "company" ? null : "company");
            }}
          >
            <div className="text-FAFAFA text-s14l17">Company</div>
            <i
              className={`fa-solid fa-angle-${
                dropdownTab == "company" ? "up" : "down"
              } text-F1F1F1`}
            />
          </div>
          <div className={`pl-20 ${dropdownTab == "company" ? "" : "hidden"}`}>
            <div
              className="items-center cursor-pointer py-8"
              onClick={() => {
                router.push("/about-us");
              }}
            >
              <div className="text-FAFAFA text-s14l17">About us</div>
            </div>
            <div className="w-100% h-1 bg-8B8B8B" />
            <div
              className="items-center cursor-pointer py-8"
              onClick={() => {
                router.push("/partner-with-us");
              }}
            >
              <div className="text-FAFAFA text-s14l17">Partner with us</div>
            </div>
            <div className="w-100% h-1 bg-8B8B8B" />
            <div
              className="items-center cursor-pointer py-8"
              onClick={() => {
                router.push("/career");
              }}
            >
              <div className="text-FAFAFA text-s14l17">Careers</div>
            </div>
          </div>

          <div className="w-100% h-1 bg-8B8B8B" />

          <div
            className="flex items-center justify-between cursor-pointer py-15"
            onClick={() => {
              setDropDownTab(dropdownTab == "Offerings" ? null : "Offerings");
            }}
          >
            <div className="text-FAFAFA text-s14l17">Offerings</div>
            <i
              className={`fa-solid fa-angle-${
                dropdownTab == "Offerings" ? "up" : "down"
              } text-F1F1F1`}
            />
          </div>
          <div
            className={`pl-20 ${dropdownTab == "Offerings" ? "" : "hidden"}`}
          >
            <div
              className="items-center cursor-pointer py-8"
              onClick={() => {
                router.push("/product");
              }}
            >
              <div className="text-FAFAFA text-s14l17">Products</div>
            </div>
            <div className="w-100% h-1 bg-8B8B8B" />
            <div className="items-center cursor-pointer py-8">
              <div className="text-FAFAFA text-s14l17">Customize</div>
            </div>
            <div className="w-100% h-1 bg-8B8B8B" />
            <div
              className="items-center cursor-pointer py-8"
              onClick={() => {
                router.push("/merchant");
              }}
            >
              <div className="text-FAFAFA text-s14l17">For Merchants</div>
            </div>
          </div>

          <div className="w-100% h-1 bg-8B8B8B" />

          <div
            className="flex items-center justify-between cursor-pointer py-15"
            onClick={() => {
              setDropDownTab(dropdownTab == "Legals" ? null : "Legals");
            }}
          >
            <div className="text-FAFAFA text-s14l17">Legals</div>
            <i
              className={`fa-solid fa-angle-${
                dropdownTab == "Legals" ? "up" : "down"
              } text-F1F1F1`}
            />
          </div>
          <div className={`pl-20 ${dropdownTab == "Legals" ? "" : "hidden"}`}>
            <div
              className="items-center cursor-pointer py-8"
              onClick={() => {
                router.push("/privacy_policy");
              }}
            >
              <div className="text-FAFAFA text-s14l17">Privacy</div>
            </div>
            <div className="w-100% h-1 bg-8B8B8B" />
            <div className="items-center cursor-pointer py-8">
              <div className="text-FAFAFA text-s14l17">
                Website terms of use
              </div>
            </div>
            <div className="w-100% h-1 bg-8B8B8B" />
            <div
              className="items-center cursor-pointer py-8"
              onClick={() => {
                router.push("/terms_and_condition");
              }}
            >
              <div className="text-FAFAFA text-s14l17">T & C</div>
            </div>
          </div>

          <div className="w-100% h-1 bg-8B8B8B" />

          <div
            className="flex items-center justify-between cursor-pointer py-15"
            onClick={() => {
              setDropDownTab(dropdownTab == "Resources" ? null : "Resources");
            }}
          >
            <div className="text-FAFAFA text-s14l17">Resources</div>
            <i
              className={`fa-solid fa-angle-${
                dropdownTab == "Resources" ? "up" : "down"
              } text-F1F1F1`}
            />
          </div>
          <div
            className={`pl-20 ${dropdownTab == "Resources" ? "" : "hidden"}`}
          >
            <div
              className="items-center cursor-pointer py-8"
              onClick={() => {
                router.push("/resource");
              }}
            >
              <div className="text-FAFAFA text-s14l17">Blogs</div>
            </div>
            <div className="w-100% h-1 bg-8B8B8B" />
            <div className="items-center cursor-pointer py-8">
              <div className="text-FAFAFA text-s14l17">Case Studies</div>
            </div>
            <div className="w-100% h-1 bg-8B8B8B" />
            <div className="items-center cursor-pointer py-8">
              <div className="text-FAFAFA text-s14l17">News & Media</div>
            </div>
          </div>

          <div className="w-100% h-1 bg-8B8B8B" />

          <div
            className="flex items-center justify-between cursor-pointer py-15"
            onClick={() => {
              setDropDownTab(dropdownTab == "Support" ? null : "Support");
            }}
          >
            <div className="text-FAFAFA text-s14l17">Support</div>
            <i
              className={`fa-solid fa-angle-${
                dropdownTab == "Support" ? "up" : "down"
              } text-F1F1F1`}
            />
          </div>
          <div className={`pl-20 ${dropdownTab == "Support" ? "" : "hidden"}`}>
            <div
              className="items-center cursor-pointer py-8"
              onClick={() => {
                router.push("/faqs");
              }}
            >
              <div className="text-FAFAFA text-s14l17">FAQ's</div>
            </div>
            <div className="w-100% h-1 bg-8B8B8B" />
            <div
              className="items-center cursor-pointer py-8"
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              <div className="text-FAFAFA text-s14l17">Contact Us</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100% h-1 bg-8B8B8B mb-50" />

      <Image src="/images/logo_white.svg" width={150} height={30} />
      <div className="mt-40 text-F5FBF3 text-s14l24">Find us on</div>
      <div className="flex mt-17 w-160 justify-between cursor-pointer">
        <Image src="/images/social_media/insta.svg" width={24} height={24} />
        <Image src="/images/social_media/facebook.svg" width={24} height={24} />
        <Image src="/images/social_media/twitter.svg" width={24} height={24} />
      </div>
      <div className="mt-70 text-FAFAFA text-s12l24">
        © Mintoak, Inc. {new Date().getFullYear()}.{" "}
      </div>
      {demoPopup && (
        <Request_Demo triger={demoPopup} handleClose={TogglePopup} />
      )}
    </div>
  );
}
