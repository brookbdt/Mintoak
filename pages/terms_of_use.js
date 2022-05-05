import { useState } from "react";
export default function Contact() {
  const [clickStatus, setClickStatus] = useState(false);
  return (
    <>
      <div className="w-100% desktop:px-180 mobile:px-20 bg-home-top">
        <div className="desktop:text-s56l63 text-252525  mobile:text-s24l29 desktop:pb-70 desktop:pt-150 mobile:pb-30 font-bold mobile:pt-30">
          Website Terms Of Use
        </div>
        <div className="desktop:pt-70 desktop:text-525252 mobile:text-000000 desktop:text-s24l29 mobile:text-s14l21 desktop:pb-40 mobile:pb-30 mobile:w-210">
          Web Usage Terms Version 1.0 <br /> First published on 27.06.2018
        </div>
        <div className="desktop:text-s32l45 mobile:text-s16l24 desktop:text-252525 mobile:text-00000 font-semibold desktop:pb-40 mobile:pb-11">
          Web Usage Terms:
        </div>
        <div className="desktop:text-s24l36 mobile:text-s14l21 text-525252 desktop:pr-400">
          By visiting the website{" "}
          <span
            className="text-525252 hover:text-8CC63E 
          hover:underline"
          >
            http://www.mintoak.com
          </span>{" "}
          <br />
          <br />
          You understand and accept that Mintoak Innovations Private Limited
          (called as, “Mintoak”) maintains the web-site{" "}
          <span
            className=" text-525252 hover:text-8CC63E 
          hover:underline"
          >
            http://www.mintoak.com
          </span>
          (going ahead referred to as “the Site” or “the Mintoak website”) to
          provide visitors with information about Mintoak, its services and
          products and to facilitate communication with Mintoak and availing its
          services. You also accept that visitors to the Site are required to
          read the below terms and use of the Site constitutes your acceptance
          and agreement to be bound by such terms, and the changes therein to
          the Website Usage Terms from time to time, relating to your usage of
          the website as communicated and made available on the Mintoak’s
          website.
          <br />
          <br /> You are aware and accept that all information, content,
          materials, products (including, but not limited to text, content,
          photographs, graphics, video and audio content) on the website is
          protected by copyright in the favour of Mintoak under applicable
          copyright laws and is also protected otherwise under general
          intellectual property law.
          <br />
          <br /> You understand and accept that all information submitted by you
          through the Mintoak website shall be deemed the property of Mintoak,
          and Mintoak shall be free to use any ideas, concepts, know-how or
          techniques provided by you at the Site, in any manner whatsoever. On
          initiating a contact through the Mintoak website you agree to being
          contacted by Mintoak or any other entities with whom Mintoak has
          entered into an arrangement.
          <br />
          <br /> You agree that you will not copy, reproduce, sell,
          redistribute, publish, enter into a database, display, perform,
          modify, transmit, license, create derivatives from, transfer or in any
          way exploit any part of any information, content, materials, services
          available from or through the Mintoak website, except that which you
          may download for your own personal, non-commercial use.
          <br />
        </div>
      </div>
      {clickStatus == false ? (
        <>
          <div className="w-100% bg-read_more mobile:h-150">
            <div className="h-250 w-100% mobile:w-100% absolute">
              {/* bg-read_more */}
              <div className="flex justify-center pt-150 mobile:pt-89">
                <span
                  className="text-s24l36 text-center text-46AC34  border-b border-46AC34 cursor-pointer  mobile:text-s14l21"
                  onClick={() => {
                    setClickStatus(true);
                  }}
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="w-100%  desktop:pl-180 desktop:pr-540 laptop:pl-70 laptop:pr-200 desktop:text-s24l36 mobile:text-s14l21 z-minus1 text-525252 pl-24 relative h-250">
              <br /> You acknowledge and agree that the website may contain
              proprietary and confidential information including trademarks,
              service marks and patents protected by intellectual property laws
              and international intellectual property pacts. Any third-party
              trademarks, service marks and logos are the properties of their
              respective owners. Any further rights not specifically granted
              herein, are reserved.
              <br />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-100% desktop:px-180 mobile:px-20">
            <div className="desktop:text-s24l36 mobile:text-s14l21 text-525252 desktop:pr-400">
              <br /> You acknowledge and agree that the website may contain
              proprietary and confidential information including trademarks,
              service marks and patents protected by intellectual property laws
              and international intellectual property pacts. Any third-party
              trademarks, service marks and logos are the properties of their
              respective owners. Any further rights not specifically granted
              herein, are reserved.
              <br />
              <br /> You agree that you will not use the Mintoak website for any
              purpose that is unlawful or prohibited by these Website Usage
              Terms. You also agree you will not use the Mintoak website in any
              manner that could damage, disable or impair the website or
              interfere with any other party’s use or enjoyment of the website.
              <br />
              <br /> You acknowledge that the software and hardware underlying
              the Mintoak Website as well as other Internet related software
              which are required for accessing the website are the legal
              property of the respective Vendors/Mintoak. The permission given
              by Mintoak to access the Mintoak website will not convey any
              proprietary or ownership rights in the above software / hardware.
              You agree that you will not attempt to modify, translate,
              disassemble, decompile or reverse engineer the software / hardware
              underlying the Mintoak website or create any derivative product
              based on the software / hardware.
              <br />
              <br /> You understand and accept that not all the products and
              services offered on this website are available in all geographic
              areas and that you may not be eligible for all the products or
              services offered by Mintoak on the Site. Mintoak reserves the
              right to determine the availability and eligibility for any
              product or service.
              <br />
              <br /> You are aware that Mintoak proposes to use “cookies”
              (Cookies are small data files that a website stores on your
              computer.) for storing visitor preferences, profiling visitors and
              tracking visitor behaviour on the Mintoak website. By visiting the
              website, you acknowledge, accept and expressly authorize Mintoak
              for the placement of cookies on your computer.
              <br />
              <br /> You understand and accept that Mintoak is not responsible
              for the availability of content or other services on third party
              sites linked from the Mintoak website. You are aware that access
              of hyperlinks to other internet sites are at your own risk and the
              content, accuracy, opinions expressed, and other links provided by
              these sites are not verified, monitored or endorsed by Mintoak in
              any way. Mintoak does not make any warranties, and expressly
              disclaims all warranties express or implied, including without
              limitation, those of merchantability and fitness for a particular
              purpose, title or non-infringement with respect to any information
              or services or products that are available or advertised or sold
              through these third party websites.
              <br />
              <br /> Mintoak shall not be liable if any transaction does not
              fructify or may not be completed or for any failure on part of
              Mintoak to perform any of its obligations under these terms and
              conditions or those applicable specifically to its
              services/facilities if performance is prevented, hindered or
              delayed by a Force Majeure event (defined below) and in such case
              its obligations shall be suspended for so long as the Force
              Majeure event continues.
              <br />
              <br /> “Force Majeure Event” means any event due to any cause
              beyond the reasonable control of Mintoak, including without
              limitations, unavailability of any communication systems, breach,
              or virus in the processes or payment or delivery mechanism,
              sabotage, fire, flood, explosion, acts of god, civil commotion,
              strikes or industrial action of any kind, riots, insurrection,
              war, acts of government, computer hacking, unauthorised access to
              computer data and storage devices, computer crashes,
              malfunctioning in the computer terminal or the systems getting
              affected by any malicious, destructive or corrupting code or
              program, mechanical or technical errors/failures or power shut
              down, faults or failures in telecommunication etc.
              <br />
              <br /> You understand and accept Mintoak has the absolute
              discretion to amend or supplement any of the Website Usage Terms
              at any time and will give prior notice of 30 days for such
              changes. Changed Terms and Conditions shall be communicated to you
              on the Mintoak’s website and by other acceptable modes of
              communication. By using the services, you will be deemed to have
              accepted the changed Website Usage Terms.
              <br />
              <br /> You accept that the Courts in Mumbai alone shall have
              exclusive jurisdiction as regards any claims or matters arising
              out of dealings with Mintoak Innovations Private Limited, and all
              disputes will be governed by the laws of India.
              <br />
              <br /> You understand and agree that these Website Usage Terms are
              in addition to, and not in derogation of, the applicable Terms and
              Conditions relating to your usage of any other Mintoak services
              that you may be currently availing or may in the future avail.
              <br />
              <br /> You may contact us with any questions or concerns regarding
              this Privacy Policy at: privacy@mintoak.com addressed to Rama
              Tadepalli (Grievance Officer, Mintoak).
            </div>
          </div>
        </>
      )}
      {clickStatus === true && (
        <>
          <div className="h-150 w-100% mobile:w-100% absolute bg-read_more mobile:h-80">
            {/* bg-read_less */}
            <div className="flex justify-center pt-50 mobile:pt-20">
              <span
                className="text-s24l36 text-center text-46AC34  border-b border-46AC34 cursor-pointer  mobile:text-s14l21"
                onClick={() => {
                  setClickStatus(false);
                }}
              >
                Read Less
              </span>
            </div>
          </div>
          <div className="w-100%  desktop:pl-180 desktop:pr-540 laptop:pl-70 laptop:pr-200 desktop:text-s24l36 mobile:text-s14l21 z-minus1 text-525252 pl-24 relative h-150 mobile:h-80"></div>
        </>
      )}
    </>
  );
}
