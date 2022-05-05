import { useState } from "react";

export default function Contact() {
  const [clickStatus, setClickStatus] = useState(false);
  return (
    <>
      <div className="w-100% desktop:pl-180 laptop:pl-70 laptop:pr-200 desktop:pr-540 mobile:px-20 bg-home-top">
        <div className="w-100%">
          <div className="desktop:text-s56l67 laptop:text-s30l30 mobile:text-s22l26_4 text-252525 desktop:py-150 laptop:py-100 mobile:py-30">
            Privacy Policy
          </div>
        </div>
        <div>
          <div className="mobile:text-s16l24 desktop:text-s32l45 laptop:text-s28l42 mobile:text-000000 text-252525 mobile:pt-22 desktop:pb-40 laptop:pb-30 mobile:pb-12 font-semibold">
            We value your trust in Mintoak
          </div>
          <div className="desktop:text-s24l36 laptop:text-s18l33 mobile:text-s14l21 text-525252 desktop:pb-80 laptop:pb-50 mobile:pb-40">
            This Privacy Policy describes the information Mintoak Innovations
            Private Limited (called, “Mintoak” or “we” or “us) collect when a
            person or business (called “covered person” “ or “you” and “your”)
            applies or signs up for Mintoak Account (called, “Merchant Account”
            or “Mintoak Services” or “Services” or “Account”), including through
            an EDC terminal (called, “POS terminal” or “Device”) and mobile
            application and software (called, “App”) or visits{""}
            <div
              className="text-525252 hover:text-8CC63E 
hover:underline"
            >
              http://www.mintoak.com
            </div>{" "}
            (called, “Website”). This Privacy Policy explains how we collect,
            use and share your personal information.
            <br />
            <br /> By applying or signing up for a Mintoak Account online,
            including through the Device or mobile or computer and using our
            device and services, you accept the terms of this Privacy Policy and
            agree to our collection, use, sharing and storing of your
            information as described herein. If you do not agree to the terms of
            this Privacy Policy, please do not use or access our Website/Device
            and/or services. By mere use of or access to our Website/Device
            and/or services, you expressly consent to our use and disclosure of
            your personal information in accordance with this Privacy Policy.
            This Privacy Policy is incorporated into and subject to the Terms of
            Use
          </div>
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
              <div className="mobile:text-s16l24 desktop:text-s32l45 laptop:text-s28l42 mobile:text-000000 text-252525 mobile:pt-22 desktop:pb-40 laptop:pb-30 mobile:pb-12 font-semibold">
                Who is covered in the policy
              </div>
              <div className="desktop:text-s24l36 mobile:text-s14l21 text-525252 desktop:pb-80 laptop:pb-50 mobile:pb-40">
                All persons or business, whose information is either collected/
                received/ possessed/ stored/ dealt in/ handled by Mintoak and
                who visit the site{" "}
                <span
                  className="text-525252 hover:text-8CC63E 
hover:underline"
                >
                  http://www.mintoak.com
                </span>{" "}
                and provide information to Mintoak online are covered under this
                Policy.
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-100% desktop:pl-180 desktop:pr-540  laptop:pl-70 laptop:pr-200 mobile:px-20 ">
            <div className="mobile:text-s16l24 desktop:text-s32l45 laptop:text-s28l42 mobile:text-000000 text-252525 mobile:pt-22 desktop:pb-40 laptop:pb-30 mobile:pb-12 font-semibold">
              Who is covered in the policy
            </div>
            <div className="desktop:text-s24l36 mobile:text-s14l21 text-525252 desktop:pb-80 laptop:pb-50 mobile:pb-40">
              All persons or business, whose information is either collected/
              received/ possessed/ stored/ dealt in/ handled by Mintoak and who
              visit the site{" "}
              <span
                className="text-525252 hover:text-8CC63E 
hover:underline"
              >
                http://www.mintoak.com
              </span>{" "}
              and provide information to Mintoak online are covered under this
              Policy.
            </div>
            <div className="mobile:text-s16l24 desktop:text-s32l45 laptop:text-s28l42 mobile:text-000000 text-252525 mobile:pt-22 desktop:pb-40 laptop:pb-20 mobile:pb-12 font-semibold">
              Information covered by this policy
            </div>
            <div className="desktop:text-s24l36 mobile:text-s14l21 text-525252 desktop:pb-80 laptop:pb-50 mobile:pb-40">
              This Policy seeks to cover “information”, of the Covered Persons,
              provided to Mintoak as also any information collected by the
              Mintoak server from the visitors browser or through the Mintoak
              Device/applications. The ("Information"), i.e. any of the
              following: Personal/private/financial/business/demographic
              information of the covered persons, during signing up process or
              when you apply or sign up for our Services. Sensitive personal
              data or information.
            </div>
            <div className="mobile:text-s16l24 desktop:text-s32l45 laptop:text-s28l42 mobile:text-000000 text-252525 mobile:pt-22 desktop:pb-40 laptop:pb-30 mobile:pb-12 font-semibold">
              Definitions used in this policy
            </div>
            <div className="desktop:text-s24l36 mobile:text-s14l21 text-525252 desktop:pb-20 mobile:pb-12">
              "Information" means any information that relates to a natural or
              legal person, which, either directly or indirectly, in combination
              with other information available or likely to be available with a
              body corporate, is capable of identifying such person/s.
              <div className="pt-10">
                "Sensitive personal data or information" of a person means such
                personal information which consists of information relating to :
              </div>
            </div>
            <div className="w-100% desktop:text-s24l36 mobile:text-s14l21 z-minus1 text-525252 pl-24 relative h-250 laptop:h-150 mobile:h-150">
              <ul className="list-disc">
                <li>Password</li>
                <li> Financial information </li>
                <li>Bank account and card details</li>
                <li>Biometric information </li>
                <li>address, profile, date of birth</li>
                <li>Contact details</li>
              </ul>
            </div>
            <div className="desktop:text-s24l36 mobile:text-s14l21 text-525252 desktop:pb-80 mobile:pb-12 laptop:pb-60">
              Documents issued by Government /Government
              departments/Agencies/PSUs for identification and documents
              evidencing proof of address issued by Government / PSUs / telecom
              / electricity / local bodies; provided that, any information that
              is freely available or accessible in public domain or furnished
              under the Right to Information Act, 2005 or any other law for the
              time being in force shall not be regarded as sensitive personal
              data or information for these purposes
            </div>
            <div className="w-100%">
              <div className="desktop:text-s32l45 laptop:text-s28l42 mobile:text-s16l21 desktop:text-252525 mobile:text-000000 desktop:pb-40 laptop:pb-30 font-semibold">
                Features of the policy
              </div>
              <div>
                <div className="desktop:text-s24l45 laptop:text-s18l27 desktop:text-252525 mobile:text-s14l21 mobile:text-000000 desktop:pb-20 laptop:pb-20 mobile:pb-8 font-semibold">
                  How we use the information :
                </div>
                <div className="desktop:text-s24l36 text-525252 mobile:text-s14l21 desktop:pb-40 mobile:pb-14">
                  We may use information about you to provide, maintain, and
                  improve our Services, such as:Processing or recording payment
                  transactions; Displaying historical transactions; Developing
                  new products and Services; and delivering the information and
                  support you request, including technical notices, security
                  alerts, and support and administrative messages.
                  <br />
                  <br /> We may use information about you to improve,
                  personalize and facilitate your use of our Services. For
                  example, when you sign up for a Mintoak account, we may
                  associate certain information with your new account, such as
                  information about other accounts you had or currently have
                  with Mintoak, and prior transactions you made using our
                  Services. We also may use information about you to measure,
                  customize, and enhance our Services, including the design,
                  content, and functionality of our applications, devices and
                  websites, or to track and analyse trends and usage in
                  connection with our Services.
                  <br />
                  <br /> We may use information you provide to connect you with
                  your customers/buyers and people you already know
                  <br />
                  <br /> Mintoak may utilize the information collected to
                  facilitate the Merchant to use the customer information for
                  its loyalty marketing programs <br />
                  <br />
                  All Information collected by Mintoak, including from
                  customers, in the course of our payment services/aggregation
                  business, shall be used for the relevant lawful purposes
                  connected with various functions or activities of Mintoak,
                  related to services in which the Concerned Person is
                  interested, and/or to help determine the eligibility of the
                  Concerned Persons for the product/services requested/ applied/
                  shown interest in and/or to enable Mintoak the Covered Persons
                  verification and/or process applications, requests,
                  transactions and/or maintain records as per
                  internal/legal/regulatory requirements and shall be used to
                  provide the Concerned Person with the best possible
                  services/products as also to protect interests of Mintoak.{" "}
                  <br />
                  <br />
                  Mintoak also may disclose information about you as permitted
                  or required by regulatory agencies and law. About the
                  information collected from visitors of the website online
                  (“visitor”), Mintoak will use the Information to improve the
                  Covered Persons experience on the site and make subsequent
                  offers to the visitor on products which may be of interest to
                  him / her, if so agreed while giving information.
                </div>
                <div className="desktop:text-s24l45 laptop:text-s18l27 desktop:text-252525 mobile:text-s14l21 mobile:text-000000 desktop:pb-20 laptop:pb-20 mobile:pb-8 font-semibold">
                  How we share your information:
                </div>
                <div className="desktop:text-s24l36 text-525252 mobile:text-s14l21 desktop:pb-40 mobile:pb-14">
                  The Information shall not be shared with any external
                  organisation unless the same is necessary to protect the
                  interests of Mintoak or to enable Mintoak to provide you
                  services or to enable the completion/compilation of a
                  transaction, credit reporting, or the same is necessary or
                  required pursuant to applicable Indian Laws or Statute or
                  Government or Reserve Bank of India or any other regulatory
                  bodies/organisations in India or pursuant to the terms and
                  conditions applicable to such Information as agreed to with
                  Mintoak or pursuant to any requirement of law/regulations or
                  any Government/court/other relevant authority’s
                  directions/orders. Needless to add, confidentiality norms as
                  applicable shall be adhered to. Mintoak may also share
                  Information to provide you with superior services and a range
                  of offers.
                  <br />
                  <br /> We may also share your Information, without obtaining
                  your prior written consent, with government agencies mandated
                  under the law to obtain information for verification of
                  identity, or for prevention, detection, investigation
                  including cyber incidents, prosecution, and punishment of
                  offences, or where disclosure is necessary for compliance of a
                  legal obligation. Any Information may be required to be
                  disclosed to any third party by us by an order under the law
                  for the time being in force.
                  <br />
                  <br /> In this regard, it may be necessary to disclose the
                  Covered Persons information to one or more agents, partners
                  and contractors of Mintoak and their sub-contractors, but such
                  agents, contractors, and sub-contractors will be required to
                  agree to use the information obtained from Mintoak only for
                  these purposes.
                  <br />
                  <br />
                  Mintoak may share the “information” collected with its
                  sponsoring bank/s for transaction processing and settlement of
                  payments due to the Merchant.
                </div>
                <div className="desktop:text-s24l45 laptop:text-s18l27 desktop:text-252525 mobile:text-s14l21 mobile:text-000000 desktop:pb-20 laptop:pb-20 mobile:pb-8 font-semibold">
                  Retention :
                </div>
                <div className="desktop:text-s24l36 text-525252 mobile:text-s14l21 desktop:pb-40 mobile:pb-14">
                  Information provided by you are retained (for later of the)
                  (i) as long as the purposes for which such data were collected
                  continue. Or (ii) for such period to satisfy legal, regulatory
                  or accounting requirements or to protect Mintoak's interests.
                </div>
                <div className="desktop:text-s24l45 desktop:text-252525 mobile:text-s14l21 mobile:text-000000 desktop:pb-20 laptop:pb-20 mobile:pb-8 font-semibold">
                  Covered Persons obligations :
                </div>
                <div className="desktop:text-s24l36 text-525252 mobile:text-s14l21 desktop:pb-40 mobile:pb-14">
                  Please note that the accuracy of the Information provided to
                  us on the Website or on the Mintoak Platform , is essential,
                  among others, to provision of our products and services to
                  you. It is therefore a term and condition governing the access
                  and use of the Website, Mintoak Services & Device, software
                  platforms that you undertake to ensure the accuracy and
                  completeness of all Information disclosed, shared, exchanged
                  or otherwise update and notify Mintoak via e-mail at
                  www.mintoak.com/services of any changes in the Information.
                  The Covered Persons authorises Mintoak to exchange, share,
                  part with all information related to the details and
                  transaction history of the Covered Persons to its Affiliates /
                  banks / financial institutions / credit bureaus /
                  agencies/participation in any telecommunication or electronic
                  clearing network as may be required by law, customary
                  practice, credit reporting, statistical analysis and credit
                  scoring, verification or risk management or any of the
                  aforesaid purposes and shall not hold Mintoak liable for use
                  or disclosure of this information. The Covered Persons shall
                  not disclose to any other person, in any manner whatsoever,
                  any information relating to Mintoak or its Affiliates of a
                  confidential nature obtained during availing the services
                  through the website. Failure to comply with this obligation
                  shall be deemed a serious breach of the terms herein and shall
                  entitle Mintoak or its Affiliates to terminate the services,
                  without prejudice to any damages, to which the Covered Persons
                  may be entitled otherwise.
                </div>
                <div className="desktop:text-s24l45 laptop:text-s18l27 desktop:text-252525 mobile:text-s14l21 mobile:text-000000 desktop:pb-20 laptop:pb-20 mobile:pb-8 font-semibold">
                  We may use cookies to :
                </div>
                <div className="desktop:text-s24l36 text-525252 mobile:text-s14l21 desktop:pb-40 mobile:pb-14">
                  The Mintoak website may uses cookies. Cookies are small data
                  files that a website stores on your computer. We use
                  persistent cookies which are permanently placed on your
                  computer to store non-personal (Browser, ISP, OS, Clickstream
                  information etc) and profiling information (age, gender,
                  income etc). While cookies have unique identification nos,
                  personal information (name, a/c no, contact nos etc) SHALL NOT
                  be stored on the cookies.
                  <br />
                  <br />
                  We will use the information stored in the cookies to improve
                  visitor experience through throwing up relevant content where
                  possible. We will also use the cookies to store visitor
                  preferences to ease visitor navigation on the site.
                  <br />
                  <br />
                  We may in the future implement encryption of the cookies.
                </div>
                <div className="desktop:text-s24l45 laptop:text-s18l27 desktop:text-252525 mobile:text-s14l21 mobile:text-000000 desktop:pb-20 laptop:pb-20 mobile:pb-8 font-semibold">
                  Safeguards :
                </div>
                <div className="desktop:text-s24l36 text-525252 mobile:text-s14l21 desktop:pb-40 mobile:pb-14">
                  We use commercially reasonable safeguards to help keep the
                  information collected through our application secure and take
                  reasonable steps (such as requesting a unique password) to
                  verify your identify before granting you access to your
                  account. However, no method of transmission over internet, or
                  method of electronic storage is 100% secure and so we cannot
                  fully ensure or guarantee the security of any information you
                  transmit to us or guarantee that information on our
                  application may not be accessed, disclosed, altered, or
                  destroyed by any person.
                </div>
                <div className="desktop:text-s24l45 laptop:text-s18l27 desktop:text-252525 mobile:text-s14l21 mobile:text-000000 desktop:pb-20 laptop:pb-20 mobile:pb-8 font-semibold">
                  Amendments :
                </div>
                <div className="desktop:text-s24l36 text-525252 mobile:text-s14l21 desktop:pb-40 mobile:pb-14">
                  Mintoak may, from time to time, amend or change this policy
                  from time to time by posting a revised version on its Website
                  <span
                    className="text-525252 hover:text-8CC63E 
hover:underline"
                  >
                    http://www.mintoak.com
                  </span>{" "}
                  and updating the “Last updated date” above. The revised
                  version will be effective at the time we post it. We will
                  provide you with reasonable prior notice of substantial
                  changes in how we use your information, including by email at
                  the email address you provide. Where these changes would cause
                  material detriment to you, you may of course cancel your
                  account at any time. We encourage you to review this Privacy
                  Policy whenever you access or use in any manner Mintoak
                  Services, Device, application, product, service, feature,
                  technology, content, or website (collectively, “Services”) to
                  stay informed about our information practices and the choices
                  available to you and to contact us if you have any questions
                  about these changes. Your continued use of our Services
                  constitutes your acceptance of any amendment of this Privacy
                  Policy.
                </div>
                <div className="desktop:text-s24l45 laptop:text-s18l27 desktop:text-252525 mobile:text-s14l21 mobile:text-000000 desktop:pb-20 laptop:pb-20 mobile:pb-8 font-semibold">
                  Contact :
                </div>
                <div className="desktop:text-s24l36 text-525252 mobile:text-s14l21 desktop:pb-40 mobile:pb-14">
                  You may contact us with any questions or concerns regarding
                  this Privacy Policy at: privacy@mintoak.com addressed to Rama
                  Tadepalli (Grievance Officer, Mintoak).
                </div>
                <div className="desktop:text-s24l36 text-525252 mobile:text-s14l21 desktop:pb-40 mobile:pb-14 ">
                  At Mintoak, we value your relationship and will always strive
                  to ensure your privacy.
                </div>
              </div>
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
