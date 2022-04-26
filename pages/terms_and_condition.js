import { useState } from "react";

export default function Contact() {
  const [clickStatus, setClickStatus] = useState(false);
  return (
    <>
      <div className="w-100% desktop:px-180 desktop:pr-540 laptop:pl-100 laptop:pr-300 mobile:px-20 bg-home-top">
        <div className="w-100%">
          <div className="desktop:text-s56l67 laptop:text-s35l43 mobile:text-s24l29 text-252525 desktop:py-150 laptop:py-80 mobile:py-30 ">
            Terms And Conditions
          </div>
          <div className="mobile:text-s14l21 desktop:text-s24l36 laptop:s18l22 text-525252 pb-50">
            These Terms and Conditions (“Terms and Conditions” or “Terms”) are a
            legal agreement between you (“You or Merchant Establishment or
            Merchant) and Mintoak Innovations Private Limited (“Mintoak” or “we”
            or “our” or “us”) and govern your use of the “Services” of Mintoak
            (defined and explained below). <br />
            <br />
            Mintoak is engaged in the business of providing digital payment
            platform comprising of software applications, solutions and payment
            device (also called “Device” or “EDC device” or “Point of Sale
            terminal”) with embedded applications (together called as “Mintoak
            Services” or “Services”) to facilitate the Merchant from accepting
            payments from its customers through any of the Digital Payment
            Instruments (as defined hereinafter) using the digital payment
            platform, towards purchase of goods and/or services.
            <br />
            <br />
            Merchant can also avail the full range of Services of Mintoak by
            downloading the applications, software and solutions on the
            Merchant’s mobile to facilitate payment acceptance by all modes
            described above, except the transactions warranting the physical
            presentment of the Card and its swiping/dipping/tapping on the
            device. <br />
            <br />
            Mintoak and Merchant are hereinafter collectively referred to as
            “Parties” and individually as “Party”.
          </div>
        </div>
        <div>
          <div className="mobile:text-s16l24 desktop:text-s32l45 laptop:text-s18l22 text-252525 mobile:pt-22 desktop:pb-46 laptop:pb-30 mobile:pb-12">
            Detailed terms and conditions
          </div>
          <div className="desktop:text-s24l36 mobile:text-s14l21 text-525252">
            1. Acceptance of terms <br />
            1.1 If you are using the Services on behalf of a business or
            profession, that business or profession accepts these Terms and
            Conditions. Your use of Device and services offered by Mintoak is
            subject to the acceptance of these terms and conditions and is also
            subject to the terms of a legal agreement between you and Mintoak.{" "}
            <br />
            <br />
            1.2 In order to use the Services, you must first agree to the Terms
            and Conditions while signing up for Mintoak’s services online or
            offline. You may not use the Services if you do not accept these
            Terms and Conditions. <br />
            <br />
            1.3 By clicking “I Accept” or “I Agree” on the signup page, where
            this option is made available in Mintoak’s online Merchant Boarding
            Application, or by accessing and using our Device and/or Services in
            any way, you understood and agree to be bound by these Terms and
            Conditions including Terms that limit our liability (See Clause 34)
            and DEFINITIONS. <br />
            <br />
            1.4 Actually, using the Services, in this case, you understand and
            agree that Mintoak will treat your use of the Services as acceptance
            of the Terms and conditions from that point onwards. <br />
            <br />
            1.5 You should read all our Terms and Conditions carefully which are
            also available on our website{" "}
            <span className="text-8CC63E hover:text-8CC63E">
              http://www.mintoak.com
            </span>{" "}
            <br />
            <br />
            1.6 The Merchant, to avail the services provided by Mintoak has to
            electronically execute the Merchant Agreement through Aadhaar eSign
            process during the merchant on boarding process. The Merchant
            confirms reading carefully, the entire agreement and its clauses.
          </div>
        </div>
      </div>
      {clickStatus == false ? (
        <>
          <div className="w-100% bg-read_more">
            <div className="h-200 mobile:h-150 w-100%  bg-read_more absolute laptop:hidden">
              <div className="flex justify-center pt-110 mobile:pt-89 ">
                <span
                  className="text-s24l36 text-center text-46AC34 mobile:text-s14l21 border-b border-46AC34 cursor-pointer"
                  onClick={() => {
                    setClickStatus(true);
                  }}
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="mobile:text-s14l21 desktop:text-s24l36 laptop:s18l22 text-525252 pb-50 desktop:pb-80 laptop:pb-80 w-100% desktop:px-180 desktop:pr-540 laptop:pl-100 laptop:pr-300 mobile:px-20 ">
              <br />
              <br />
              2. Definitions and interpretations <br />
              In these Terms & Conditions, the following terms shall have the
              following meanings:
            </div>
          </div>
        </>
      ) : (
        <>
          {/* <div className="mobile:text-s14l21 desktop:text-s24l36 laptop:s18l22 text-525252 pb-50 desktop:pb-80 laptop:pb-80 w-100% desktop:px-180 desktop:pr-540 laptop:pl-100 laptop:pr-300 mobile:px-20 "></div> */}
          <div className="w-100% desktop:px-180 desktop:pr-540 laptop:pl-100 laptop:pr-300 mobile:px-20">
            <div className="mobile:text-s14l21 desktop:text-s24l36 laptop:s18l22 text-525252  ">
              <br />
              2. Definitions and interpretations <br />
              In these Terms & Conditions, the following terms shall have the
              following meanings: “Aadhaar Number” means 12-digit unique
              identification number issued to a resident Indian by the Unique
              Identification Authority of India (UIDAI). “Aadhaar based eSign”
              means a technology initiated by the Government of India. It allows
              citizens to sign any document remotely. Anyone with a valid
              Aadhaar number and a registered mobile number can use this service
              to sign documents from anywhere any time. Using this service, one
              can sign a document with any number of parties inviting them to
              place their eSign on the document to make the document legally
              valid and enforceable. <br />
              <br />
              “Acquiring Bank or Sponsoring Bank” means any bank or banking
              entity or payment system providers who are defined and licensed
              under the Payment and Settlement Systems Act, 2007 and associated
              with Mintoak for providing transaction processing services to the
              Merchant. <br />
              <br />
              “Agreement” means, the Merchant Agreement and any and all
              schedules, appendices, indemnities, annexures and exhibits
              attached to it or incorporated in it by reference or any future
              modifications made from time to time subject to the acceptance of
              both Parties hereto.
              <br />
              <br /> “Applicable Law” shall mean the law of India and its
              statute, regulations, notification, circular, order, ordinance,
              requirement, direction, guideline, announcement or other binding
              action or requirement of an authority which has the force of law
              in India. <br />
              <br />
              ”Application” means the application, whether in physical or
              digital form, submitted by the Merchant for availing the Services
              of Mintoak including the device and for opening the Merchant
              account and registering the Merchant on Mintoak’s payment
              platform.
              <br />
              <br />
              “Authentication” means the process by which the customer’s
              identification is authenticated in the payment mechanism.
              <br />
              <br />
              “Authentication User Agency (AUA)” means a requesting entity that
              uses the Yes/No authentication facility provided by the Authority.
              <br />
              <br />
              “Authorisation” means the process hereunder by which the Card
              issuing institution and/or the relevant Payment Network/Card
              Association electronically or otherwise convey the approval of a
              payment (subject to the customer of the Merchant has the required
              credit limit/bank account balance) on a Transaction being
              undertaken by the customer for purchase of good and/or services
              from the Merchant.
              <br />
              <br /> “Banned Products” shall include such products as listed in
              the Annexure - A below.
              <br />
              <br />
              “Bharat QR (BQR)” means an integrated payment solution mutually
              derived among the Card association payment networks of Visa, NPCI
              and Mastercard whereby the customer through the mobile/smart phone
              application or wallet scans the BQR code displayed at the Merchant
              and makes payment for the purchase of goods and/or services from
              the Merchant through a valid debit or credit card or pre-paid card
              linked to BQR. <br />
              <br />
              "BHIM or Bharat Interface for Money” is a mobile application
              developed by the National Payments Corporation of India (NPCI) to
              enable cash less digital payments through Uniform Interface for
              Money (UPI) where payments can be made using a QR code or by
              Merchant sending an indent to the customer’s mobile for the
              customer to make payment using this application to the Merchant
              for the products purchased. <br />
              <br />
              “Business Day / Working Day” means any day of the week (excluding
              Saturdays, Sundays and any day which a public holiday for the
              purpose of Section 25 of the Negotiable Instruments Act, 1881 on
              which banks or open for general banking business in Mumbai and
              “Business Days or Working days” shall be construed accordingly.
              “Business/Profession” means the business/profession the Merchant
              is normally engaged in. <br />
              <br />
              “Card” means any unexpired credit card or debit card or prepaid
              card which is issued by a Bank or Financial entity offered through
              the Payment Network/Card Association bearing the trademarks of
              Visa Inc. (“Visa” & “Visa Electron”), Mastercard International
              Inc. (“Mastercard” & “Maestro” ), DFS Services (“Discover” &
              “Diners”), National Payments Corporation of India i.e. NPCI
              (“Rupay”) or any other card as may be specified by Mintoak from
              time to time provided that the card is not listed in a current
              warning or restricted card bulletins or notices and bears the
              signature of the person in whose name the card is issued and shall
              be deemed to include any prepaid payment instrument or digital
              wallet acceptable to Mintoak.
              <br />
              <br /> “Card Association/Payment Network” means any of Visa
              Inc./Mastercard Worldwide/ Discover Financial Services / JCB
              International / Diners Club International / National Payment
              Corporation of India (NPCI) or any other card Payment Networks as
              may be specified by Mintoak from time to time, offering credit,
              debit, pre-paid or any other payment card program to issuers.
              <br />
              <br /> “Card holder or Card member” means an individual to whom a
              valid card is issued or who is authorised to use that valid card.
              <br />
              <br /> “Card Issuing institution” means a bank or a financial
              institution which has issued card to the customer. <br />
              <br />
              “Cash Withdrawal Customer” shall mean any person being the holder
              of a valid debit card or such other card as may be prescribed by
              the Reserve Bank of India and the Sponsoring Bank and advised by
              Mintoak from time to time and to the extent and in the manner as
              may be stipulated by the Reserve Bank of India and the Sponsoring
              Bank and advised by Mintoak, who seeks to withdraw cash at the
              Merchant Establishment, by availing of the Cash Withdrawal
              Facility. <br />
              <br />
              “Cash Withdrawal Facility” shall mean the facility whereby a Cash
              Withdrawal Customer may be allowed by the Merchant to withdraw
              cash at an EDC / POS terminal/ Device only against a valid debit
              card issued in India or such other card as may be prescribed by
              the Reserve Bank of India and the Sponsoring Bank and advised by
              Mintoak from time to time and to the extent and in the manner as
              may be stipulated by the Reserve Bank of India and the Sponsoring
              Bank and advised by Mintoak, through the EDC/POS terminal/ Device,
              subject to the terms and conditions of this Agreement.
              <br />
              <br /> “Cash Withdrawal Transactions” shall mean a transaction
              sought to be effected by a Merchant on the EDC/POS terminal or
              Device so as to permit a Cash Withdrawal Customer to avail of the
              Cash Withdrawal Facility. <br />
              <br />
              “Chargeback” shall mean any dispute regarding a Valid Charge
              raised by a Cardholder with the issuing bank and or the card
              scheme and a requirement to repay the amounts received by the
              Merchant in respect of any transaction on the occurrence of any of
              the events specified in the Annexure - B hereto. <br />
              <br />
              “Charge slip” mean the receipt, whether physical or electronic,
              produced by an electronic record of a transaction generated by the
              Device/ EDC Terminal/POS Terminal / Device at the Merchant
              Establishment on successful completion of Authorisation and
              Authentication of a Transaction, containing such details as may be
              specified by Mintoak from time to time.
              <br />
              <br /> “Customer” shall mean an individual or a legal entity
              who/which is a Card holder, and, from time to time may purchase
              products offered by the Merchant using Digital Payment Instruments
              including Card. “Data Plan” means the service provided by a third
              party that enables the transfer of data over its network. <br />
              <br />
              “Digital Payment Instruments” means non-cash electronic
              instruments such as debit, credit and Prepaid Cards of Payment
              Networks issued by Banks/Financial entities and non-cash and
              paperless electronic instruments such as digital wallets which
              also include payment applications such as Unified Payment
              Interface (UPI) service, SMS/Link pay and Bharat Interface for
              Money (BHIM) of various Banks/ Financial entities or Bharat QR or
              any other acceptable Payment Instrument Mechanism.
              <br />
              <br /> “Effective Date” shall mean the date these Terms and
              conditions are accepted or the Services are accessed by the
              Merchant.
              <br />
              <br /> “e-KYC data” means demographic information and photograph
              of an Aadhaar number holder. ” eKYC User Agency” or “KUA” shall
              mean a requesting entity which, in addition to being an AUA, uses
              e-KYC authentication facility provided by the authority.
              <br />
              <br /> “Device” means Electronic Data Capture (EDC) terminals or
              Point of Sales (POS) Terminals or Devices with the application,
              accessories, whether fixed or portable, including without
              limitation the PIN entry pads and the related software provided by
              Mintoak to the Merchant establishment strictly on right to use on
              monthly/annual fee for the purpose of conducting card payments,
              Bharat QR or payments through digital wallet transactions, BHIM
              UPI Pay, Link Pay or any other payment mode by the customer, which
              are duly approved by the regulatory authorities. For clarity, the
              expression shall include point of sale (POS) machines, mobile
              point of sale (MPOS), electronic data capture terminals or any
              special devices or equipment whether the data is entered or
              captured or processed/transmitted by a local area network or
              General Packet Radio Service (GPRS) or Public Switch Telephone
              Network (PSTN) connectivity, Quick Response Code (QR code), Near
              Field Communication wallet (NFC Wallet) or other technology and
              shall include such other form factors as may be offered by Mintoak
              from time to time. <br />
              <br />
              ”Digital Wallet Holder” means a person holding his money in his
              Digital wallet account with an authorized Digital Wallet Service
              Provider.
              <br />
              <br /> “Goods and Services Tax (GST)” means a Value added Tax
              (VAT) proposed to be a comprehensive indirect tax levy on goods
              and services sold for domestic consumption. It replaced all
              indirect taxes levied on goods and services by the Indian Central
              and State Governments. <br />
              <br />
              “Intellectual Property Rights” shall deem to mean and include all
              copy rights, designs, inventions patents, service marks,
              trademarks (in each case, whether registered or arising at common
              law, or its overseas equivalent) or applications for any of these,
              formulations, trade names, business names, inventions,
              discoveries, trade secrets, know-how, source code, object code,
              technical information, commercial and financial data and all other
              industrial or intellectual property rights (whether or not
              registered). <br />
              <br />
              Issuer shall mean a bank or financial institution or legal entity,
              with which the customer had a customer wallet, a net banking
              account and/or which has issued the valid card to the Customers
              and a licensee of Card Association/Payment Network.
              <br />
              <br /> “Merchant Discount Rate (MDR)” means the commission payable
              to Mintoak by Merchant with respect to each Transaction Amount,
              whether be a percentage thereof or at a flat rate as rate as
              agreed by the Merchant and/or both and specified in the
              Application. Provided however that the MDR may be revised from
              time to time by Mintoak and Mintoak will intimate Merchant of any
              such change not less than 7 days in advance of its effectiveness
              by way of email to the email ID last registered by the Merchant
              with Mintoak. <br />
              <br />
              “Mobile Device or Mobile” means any smart mobile phone or tablet
              with Android or any other operating system with Blue Tooth
              connectivity compatible with the device provided to the Merchant
              by Mintoak.
              <br />
              <br /> “Nodal Account” shall mean an inoperative account held by
              Mintoak with sponsoring/acquiring bank or any other bank for the
              purpose of pooling the monies collected from the Customers of
              Merchant o your behalf and facilitating the transfer of these
              funds n final settlement to you after deducting MDR, fees and
              taxes, pursuant to RBI notification
              DPSS.CO.PD.No.1102/02.14.08/2009-10 dated 24/11/2009 or ay other
              RBI notifications/guidelines amended from time to time.
              <br />
              <br /> “PA-DSS” shall mean Payment Application Data Security
              Standard Council. <br />
              <br />
              “Payment Mechanism” shall mean the mechanism of making payment by
              customers utilizing the payment platform of Mintoak and
              Acquiring/sponsoring bank, card associations, card payment systems
              and through such other modes and mechanisms of payment as may be
              notified by Mintoak from time to time. “PCI-DSS” means Payment
              Card Industry Data Security Standards being an information
              security standard defined by the Payment Card Industry Security
              Standard Council.
              <br />
              <br /> “PCI-PTS” shall mean the Payment Card Industry PIN
              Transaction Security as managed from time to time by the Payment
              Card Industry Security Standards Council.
              <br />
              <br />
              “PCI SSC” shall mean the Payment Card Industry Security Standards
              Council, an international council which provides and publishes
              security standards for securing operations in relation to the
              payment card industry;
              <br />
              <br /> “Point of Sales Terminal or POS” means the Device i.e. EDC
              Terminal or Device used for Card payments, Bharat QR and BHIM UPI
              Pay or digital wallet payments at the location where transaction
              is completed using POS device. <br />
              <br />
              “Products” shall mean goods and/or services offered for sale by
              the Merchants to the Customers. <br />
              <br />
              “Proof of delivery” shall mean sufficient legitimate records
              evidencing delivery of the product to the Customer. <br />
              <br />
              “Refund” shall mean a Transaction by which a refund, either wholly
              or partially, in connection with a prior Transaction is authorised
              by the Merchant and the amount paid by the Customer to such
              Merchant is returned to the Customer via the Payment Mechanism and
              shall mean and include such refund as defined by Mintoak from time
              to time. <br />
              <br />
              “Retrieval Request” means a request made by the Issuer to obtain
              details of the transaction.
              <br />
              <br /> “Rules” means the rules and regulations and/or requirement
              releases, interpretations and other requirements that are
              promulgated, imposed or adopted by Card Associations or Payment
              Network/ RBI / NPCI / Bank etc. as they may from time to time be
              amended. <br />
              <br />
              “Services” shall mean the services rendered by Mintoak which
              enables the Merchant’s customers to make payment for purchase of
              products (Goods and/Services) through the Payment Mechanism by use
              of the Device any other form factor or application that is
              notified and approved by Mintoak from time to time. <br />
              <br />
              “Settlements” means the payments due to the Merchant for all
              successful transactions net of MDR, GST, other taxes, if any, as
              applicable calculated at the end of each business day and also net
              of the charge backs, if any and available for electronic transfer
              to Merchant’s bank account latest by the second working day after
              the transaction i.e. by T+2. <br />
              <br />” Transaction” means the transaction between a Customer and
              Merchant for the payment of goods and/or services resulting in the
              generation of an electronic charge slip for all payments made by
              the customer through Digital Payment Instruments.
              <br />
              <br />
              ”Transaction Amount” shall mean the amount payable by the Customer
              for the goods and/or services offered by the Merchant inclusive of
              all taxes and other costs, if any, and is the amount mentioned in
              the notification received by the customer in respect of payments
              made through other than Cards Bharat QR.
              <br />
              <br /> “Unified Payment Interface or UPI” means a system that
              powers multiple bank accounts into a single mobile application (of
              any participating bank), merging several banking features,
              seamless fund routing & merchant payments into one hood. It also
              caters to the “Peer to Peer” collect request which can be
              scheduled and paid as per requirement and convenience. <br />
              <br />
              “Valid Card” means a VISA/Mastercard/Visa Electron / Discover/
              Maestro / Rupay / JCB /Diners card issued as per the rules of any
              such Payment Network/Card Association as notified by Mintoak from
              time to time bearing signature of the holder permitted by the
              Bank/Issuer for Transactions and that has not been reported lost
              or stolen.
              <br />
              <br />
              “Visa/Master Card/Maestro/Visa Electron/Discover / Rupay / Diners
              Dispute Resolution Rules” means rules defined and mandated from
              time to time as provided by these Payment Networks/Card
              Associations’ websites for settlement of disputes from time to
              time. <br />
              <br />
              3. Mintoak’s role <br />
              3.1 Mintoak is an Aggregator or payment facilitator that allows
              the Merchant to accept Cards, Bharat QR, Digital Payment
              Instruments, BHIM, Link Pay etc. from customers for the payment
              for purchase of goods and/or services from the Merchant. We are
              not a bank and do not offer banking services as defined by Banking
              Regulation Act, 1949 and administered by Reserve Bank of India.
              Our Payment Services (called, Mintoak Services) allow you to
              accept payments from Digital Payment Wallets. You are not required
              to accept any card brand as a condition of receiving the Payment
              Services.
              <br />
              <br /> We may remove or add Cards that we accept at any time
              without prior notice. <br />
              <br />
              3.2 In order to serve in this role, Mintoak shall enter into
              agreements with Networks, processors and Acquiring / Sponsoring
              banks. The Networks require that any person that signs up /
              registers for a Merchant Account with Mintoak to use Mintoak
              Services. <br />
              <br />
              3.3 In connection with the Payment Services, you authorise us to
              act as your agent for the limited purposes of holding, receiving
              and disbursing funds on your behalf. Your authorisation permits us
              to transfer funds to settle the proceeds of each card transaction
              that you authorise and each digital payment you authorise us to
              receive, less merchant discount (as per MDR), monthly fees. Our
              receipt of transaction funds satisfies your customer obligations
              to make payment to you. We will remit to you funds actually
              received by us on your behalf less amounts owed to us, subject to
              any Chargeback (as defined in these terms). <br />
              <br />
              3.4 Mintoak will settle proceeds to the Merchant’s verified
              account designated and authorised by the Merchant to receive the
              proceeds. <br />
              4. Mintoak merchant account registration / opening <br />
              4.1 You must register and open an account with us (a “Mintoak
              Merchant Account” or “Merchant Account” or “Mintoak Account”) to
              use the Services. During registration we will ask you for
              information, including your business/profession, bank account,
              identification contact details, details of individual owner,
              Proprietor in case of a Proprietary concern, Partners in case of
              Partnership firm or Limited Liability Companies or Kart and
              co-parceners in case Hindu Undivided Families (HUF) or Directors
              in case of Companies and personal information of authorised
              signatories of the business /profession. You must provide accurate
              and complete information in response to our questions and keep
              that information current. You are fully responsible for all
              activity that occurs under your Mintoak Account, including for any
              actions taken by persons to whom you have granted access to the
              Mintoak Account. We reserve the right to suspend or terminate the
              Mintoak Account of any user who provides inaccurate, untrue, or
              incomplete information, or who fails to comply with the account
              registration requirements. <br />
              <br />
              5. Merchant establishment representations, warranties and
              covenants <br />
              5.1 Merchant holds valid and subsisting licences, permits and
              consents required under applicable laws/regulations for the
              conduct and operation of the business/profession and there is no
              pending litigation on the business / profession or personnel
              running the business / profession, regarding the Merchant
              Establishment or related activities. <br />
              <br />
              5.2 Merchant agrees and acknowledges that the services provided by
              Mintoak may involve third party provides like Device
              manufacturers, banks, payment processors etc. Merchant agrees that
              it shall abide by all requirements and procedures as supplied by
              Mintoak from time to time and any other applicable rules for those
              services. <br />
              <br />
              5.3 The Merchant shall when requested by a customer facilitate a
              transaction via the Device and in accordance with the terms and
              conditions of this Agreement including the card, BQR, Digital
              Wallet acceptance procedures notified in writing or by electronic
              form as may be amended by Mintoak /Sponsoring Bank/Digital wallet
              service provider from time to time <br />
              <br />
              5.4 The Merchant shall when requested by a customer, facilitate a
              transaction via the Device and in accordance with these terms,
              including the card, BQR, Digital Wallet acceptance procedures
              notified in writing or by electronic form as may be amended by
              Mintoak /Sponsoring Bank/Digital wallet service provider from time
              to time.
              <br />
              <br />
              5.5 The Merchant shall enter into Transactions only in relation to
              goods or services sold by the Merchant. to the customer. The
              Merchant undertakes all responsibilities and shall not dispute for
              any reason to follow all the instructions provided by Mintoak with
              respect to the verification of the customer or transactions done
              through the Device whatsoever. <br />
              <br />
              5.6 The Merchant shall enter into Transactions only in relation to
              goods or services sold by the Merchant. to the customer. The
              Merchant undertakes all responsibilities and shall not dispute for
              any reason to follow all the instructions provided by Mintoak with
              respect to the verification of the customer or transactions done
              through the Device whatsoever. <br />
              <br />
              5.7 The Merchant shall at all times maintain a proper active bank
              account and provide details of such account to Mintoak for
              remittance of settlements. Merchant acknowledges that Mintoak may
              verify these details and ask for further documentation, if
              required.
              <br />
              <br /> 5.8 The Merchant shall at all times abide by the Payment
              Network rules and guidelines and any other laws and regulation
              that may be applicable for the card payment industry and rules and
              regulations issued by time to time by digital wallet industry as
              published and updated from time to time by the members of
              respective industry. <br />
              <br />
              5.9 The utilisation of the Device by the Merchant shall be
              strictly in accordance with these terms and conditions and
              Merchant shall not act contrary to these Terms. <br />
              <br />
              5.10 The Merchant understands and acknowledges that Mintoak
              reserves the right to discontinue the Merchant, if the Bank/
              Mintoak in its reasonable judgement, believes that the Merchant is
              engaging in any suspicious or fraudulent activity, or in the event
              the Bank/ Mintoak receives any complaint against the Merchant from
              a customer.
              <br />
              <br /> 5.11 The Merchant shall not describe itself as an agent or
              representative of the Mintoak / Sponsoring Bank in any way. <br />
              <br />
              5.12 The Merchant shall ensure that it shall not make any
              representations or warranties to any customer, any third party or
              undertake any obligations which may require the Mintoak
              /Sponsoring Bank to undertake to or be liable for, directly or
              indirectly, any obligation and/or responsibility to a customer, or
              any third party. <br />
              <br />
              5.13 The Merchant shall comply with and shall at all times, act in
              accordance with the applicable law and guidelines of RBI. <br />
              <br />
              5.14 The Merchant shall ensure that it has anti-bribery and
              anti-corruption policies and procedures in place so as to ensure
              that the Merchant, its employees, agents, sub-contractors and
              other representatives do not engage in, encourage or solicit any
              acts of corruption, and/or bribery during the conduct of its
              business/professional practices, including inter-alia the sale of
              the products or the performance of its obligations under the terms
              of this Agreement. <br />
              <br />
              5.15 The Merchant shall adopt the security related requirements
              for protecting the customer’s card related information, and such
              other security relate requirements as provided by the Mintoak
              /Sponsoring Bank from time to time.
              <br />
              <br /> 5.16 The Merchant shall honour and effect all Transactions
              which are sought to be made by customers holding cards, the
              processing and settlement of which is supported by the Mintoak /
              Sponsoring Bank. The Merchant shall not engage in any practices or
              procedures that discriminate against or discourage the use of such
              Cards whether in favour of cash or any other competing card brand.
              Without prejudice to the generality of the foregoing, the Merchant
              shall not levy any fees, charges, costs and expenses on any
              customer for permitting usage of the Card or impose any minimum
              Transaction Limit for the use of a Card.
              <br />
              <br /> 5.17 The Merchant shall ensure that it shall not make or
              promise to make payment (whether in currency, property or other
              thing of value) to any third person, firm or entity (including
              without limitation, any Governmental Authority or representative
              thereof) for the purpose of improperly or fraudulently obtaining
              or retaining any business, license, concession, franchise or any
              other benefit, by whatever name called. <br />
              <br />
              6. Prohibition against certain activities <br />
              6.1 The Merchant shall not directly or indirectly, either through
              any form of ownership or in any representative capacity whatsoever
              either for its own benefit or for the benefit of any other person
              or its affiliates, without the prior consent of the Mintoak,
              engage or compete with the Mintoak /Sponsoring Bank, or allow its
              affiliates to engage or compete with Mintoak /Sponsoring Bank
              during the terms of this engagement including, without limitation,
              engage or compete in any of the following acts, which acts will be
              considered as violation of these Terms and conditions” <br />
              <br />
              The Merchant shall not induce or attempt to influence any employee
              of Mintoak or its affiliates to terminate his or her employment
              with the Mintoak or its affiliates.
              <br />
              <br />
              The Merchant shall not employ or cause to be employed, any person
              employed by the Mintoak or its affiliates as a Corporate Officer
              or manager unless otherwise agreed by the Mintoak.
              <br />
              <br /> The Merchant shall not do or perform any act that
              disparages the operations or business of Mintoak. <br />
              <br />
              The Merchant shall not request, advise or attempt to influence any
              person that is a source of materials, supplies, personnel,
              services, funds or information for the Mintoak or its affiliates
              to withdraw, cancel or curtail the sale or furnishing of such
              items to Mintoak or its affiliates. <br />
              <br />
              7. Data security
              <br /> 7.1 The Merchant shall (and shall ensure that its
              employees, agents and sub-contractors shall) be required to
              maintain such administrative, technical and physical safeguards,
              and such processes procedures and checks to secure the information
              which is received from any Customer or comes into the possession
              and knowledge of the Merchant in the course of processing and
              settlement of a Transaction (“Customer Information”) as may be
              required under Applicable Law and/or industry standards or
              regulations issued by any governmental authority, and/or any Card
              Association or digital/mobile wallet issuers, which safeguards
              must be at least equal to or better than (a) the safeguards it
              currently has in place to protect its own data; and (b) generally
              accepted security standards in the financial service industry.{" "}
              <br />
              <br />
              7.2 The administrative, technical and physical safeguards
              mentioned above shall be designated to ensure that the Device is
              protected from any damage or defect, the security and
              confidentiality of the customer information is protected against
              any unauthorized access, such data is properly stored and
              disposed. <br />
              <br />
              7.3 The Merchant shall ensure that the Customer information shall
              be protected from unauthorized or unlawful processing or
              alterations, unauthorized or accidental access, erasure, transfer,
              use, modification, or other misuse and the Merchant shall ensure
              that only authorized personnel bound by adequate confidentiality
              obligations shall have access to the customer information and
              strictly on a ‘need to know’ basis. <br />
              <br />
              7.4 The Merchant shall not transfer the customer information
              outside India or allow persons outside India to have access to it,
              take all reasonable steps to ensure the reliability of the
              personnel who will have access to the Device and any customer
              information and ensure that the personnel of the Merchant (or any
              of the Merchant’s sub-contractors) who access the Device and the
              customer information give a written undertaking not to access, use
              or disclose or retain the customer information except in
              performing their duties of employment. <br />
              <br />
              7.5 The Merchant acknowledges and agrees that the Mintoak /
              Sponsoring Bank shall have the sole ownership of all rights, title
              and interest in customer information, at all times.
              <br />
              <br /> 7.6 The Merchant agrees to comply with all suggestions made
              by the Sponsoring Bank to ensure that the level of protection
              provided for the customer information is in accordance with this
              Agreement including making such changes as may be suggested by the
              Bank, if any at its own cost. <br />
              <br />
              7.7 The Merchant shall ensure that the customer information is
              maintained in such a way that it is protected and is not mixed or
              comingled with any other data including any data of its other
              customers or clients. <br />
              <br />
              7.8 The Merchant acknowledges that any unauthorised access,
              destruction, alteration, addition or impediment to access or use
              of the data when stored in any computer, or the publication or
              communication or any document or any part thereof, by any person
              to whose knowledge or into whose possession or whose custody such
              data has come into (other than such persons to whom Mintoak has
              authorized to publish or disclose the document or any part
              thereof), may be a criminal offence. <br />
              <br />
              7.9 The Merchant shall not disclose, use, lecture upon or publish
              any of the Bank’s confidential information, except as such
              disclosure, use or publication may be required in connection with
              its work on a need to know basis or unless the Sponsoring Bank
              expressly authorizes such disclosure. <br />
              <br />
              The Merchant shall recognize that all information
              created/accessed/processed by it, shall remain the property of
              Mintoak and the Bank and shall be returned to Mintoak /Sponsoring
              Bank upon termination of these Terms.
              <br />
              <br />
              7.10 The Merchant shall comply with provisions of the Information
              Technology Act, 2000 and applicable rules thereunder including
              without limitation the Information Technology (Reasonable security
              practices and procedures and sensitive personal data on
              information) Rules, 2011.
              <br />
              <br /> 7.11 The Merchant shall comply with all notifications,
              guidelines, circulars issued by the RBI, Payment Network /Card
              Associations or the PCI SSC to the extent applicable. <br />
              <br />
              7.12 The Merchant confirms that it has read and understood the
              “acceptable usage policy” posted on the information portal under
              the heading “information security group” of the Sponsoring Bank
              with respect to services being provided onsite and/or offsite
              location and agrees to protect the systems of Mintoak and/or
              Sponsoring Bank and comply with the said Policy. <br />
              <br />
              7.13 The Merchant shall be vigilant and to report any breach of
              this clause, all violations of information security, any breaches
              in the security practices, control processes and checks of the
              Merchant and all suspected security events immediately to
              Mintoak’s Information Security Group at security@Mintoak.com and
              the concerned representatives and employees of Mintoak which
              interact with the Merchant on a regular basis in respect of the
              Services of such violation.
              <br />
              <br /> 8. Mintoak’s representations and undertakings <br />
              8.1 Mintoak represents, warrants and declare that Mintoak hold
              valid and subsisting licences, permits and consents required under
              applicable laws/regulations for the conduct and operations of its
              business and that Mintoak has taken all necessary actions to
              authorize the execution, delivery and consummation of these Terms.
              <br />
              <br /> 8.2 Mintoak agrees to abide by these terms and conditions
              and does hereby consent to the same.
              <br />
              <br /> 8.3 It will provide to Merchant a daily system-generated
              statement setting out settlement made and such statement will show
              the charges as per MDR, taxes deducted as applicable to the
              Merchant which can be accessed by the Merchant online. <br />
              <br />
              8.4 Merchant will be able to access the Transaction data online on
              the device on real time basis.
              <br />
              <br />
              9. Procedure to be followed by the merchant establishment for
              every transaction <br />
              9.1 The Merchant, as a primary verification of the Card on
              presentment by any customer who seeks to make payment for the
              purchase of any Products, shall ensure that it’s authorized
              personnel and concerned employee/s shall ensure that the following
              conditions are fulfilled prior to swiping/dipping/inserting the
              Card or tapping of the card, at the Device: <br />
              <br />
              The Card presented is a Card <br />
              <br />
              The Card is an original Card and that the same bears logo, the
              name of the Card issuing institution, a genuine hologram of the
              Card Association and such other details as may be stipulated by
              Mintoak from time to time;
              <br />
              <br />
              The Card is signed on the signature strip at the back of the
              credit card <br />
              <br />
              The Card is a Valid Card, not mutilated or altered in any way, has
              not expired or been tampered with and is presented by the genuine
              card holder;
              <br />
              <br /> If in doubt, verify the supporting documents of the Card
              Holder to satisfy that the presenter is genuine Card Holder;{" "}
              <br />
              <br />
              9.2 The Merchant or its authorised employees shall after
              completion of the primary verification as above and in the case of
              a device swipe/tap/dip/insert the Card and enter transaction
              details as requested and also allow the Card Holder to enter the
              personal identification number if so required (providing the Card
              Holder sufficient privacy to do so), as to obtain Authorisation
              and generate a digital receipt upon confirmation of the
              Transaction.
              <br />
              <br /> 9.3 The signature on the signature strip/panel provided for
              at the back of the Card, matches the signature of the customer
              whenever signature is obtained on the device or any chargeslip.
              <br />
              <br /> 9.4 The Merchant shall provide to the Card holder a digital
              chargeslip by email or SMS (short message service). <br />
              <br />
              9.5 The Merchant shall not obtain a signature of the customer on
              the Device within the software application, if the Transaction is
              completed using a valid PIN by the Card holder. <br />
              <br />
              9.6 Notwithstanding the aforesaid, the Merchant may obtain
              additional Authorisation for Transactions where the Merchant has
              reason to believe that the Card may be invalid or being used by
              someone other than the Card Holder or that other suspicious
              circumstances exist. <br />
              <br />
              9.7 For Digital Wallet Transactions, Merchant shall follow the
              procedures, regulations and rules as may be stipulated by Mintoak,
              digital wallet Service Providers and the regulatory authorities
              from time to time.
              <br />
              <br />
              9.8 In the event that in respect of a Transaction, all of the Card
              Presentment Conditions provided for herein above, are satisfied
              the Merchant shall ensure that the concerned employee of the
              Merchant shall:
              <br />
              <br /> Swipe/dip/insert/tap the Card, on the Device/Device, in the
              manner provided for in this Agreement and as may be provided for
              by Mintoak from time to time and enter the details of the
              Transaction which is attempted to be affected by the customer.{" "}
              <br />
              <br />
              In the event, any additional factor authentication is required for
              the authentication of the transaction (e.g. insertion of a PIN or
              biometric signature), the Merchant shall require the customer to
              take the action required for the purpose. The Merchant shall
              provide sufficient privacy to the customer for the customer to
              complete the additional factor authentication. In the event,
              authorisation and authentication of the Transaction successful,
              the Merchant shall receive a notification from the Device,
              indicating successful completion of the relevant Transaction.{" "}
              <br />
              <br />
              Provide the customer, a copy of the Chargeslip which may be either
              a physical chargeslip or digital chargeslip. <br />
              <br />
              9.9 All transactions need to be settled not later than 3 (Three)
              calendar days from the date of such transaction, else an
              additional charge of 50 basis points over and above the agreed
              Merchant Discount Rate shall be levied and recoverable by Mintoak
              from the Merchant. All Transactions settled beyond 3 (Three)
              calendar days from the date of such Transaction may consequent to
              a late presentation chargeback for which Mintoak does not have a
              representment right and the amount will be recovered permanently.{" "}
              <br />
              <br />
              9.10 The Merchant shall swipe/dip/tap credit/debit/prepaid cards
              submitted by customers and attempt to process the Transaction only
              on the Device and that the Merchant shall not capture, store or
              transit (or attempt to capture, store or transmit) any Card
              information such as the name of the customer, the Card
              Verification Value (CVV) number and the expiry date of the
              debit/credit card submitted by a customer, to any person.
              <br />
              <br /> 9.11 The Merchant understands and acknowledges that the
              operation of the Device shall involve Mintoak /Sponsoring Bank
              deducting amounts due towards the service charges and/or
              Chargeback (if applicable) and to that extent the amounts
              receivable by a Merchant from a customer in respect of Transaction
              shall stand reduced. <br />
              <br />
              The Merchant shall ensure that the sale of the goods and/or
              services by it is in compliance with applicable law. <br />
              <br />
              9.12 The Merchant shall ensure that it maintains
              confirmation/proof of delivery of the products for a period of at
              least 1 (one) year from the date of delivery by the Merchant and
              shall be submitted to Mintoak /Sponsoring Bank as and when
              requested by Mintoak /Sponsoring Bank. The Merchant shall keep and
              store all Chargeslips for at least for a period of 1 (one) year
              from the date of the relevant Transaction.
              <br />
              <br /> 9.13 The Merchant shall take appropriate measures to
              protect the Device from any damage or defect and prevent any
              tampering or unauthorised modification of the Device. No data or
              information relating to the Card shall be captured or recorded in
              any manner on the Device, including skimming of Card information,
              data phishing, hacking and carding.
              <br />
              <br /> 9.14 The Merchant shall ensure that all data transmitted
              through the Device and/or the Merchant’s systems to Mintoak /
              Sponsoring Bank are not corrupt or deficient in any manner
              whatsoever. The Merchant acknowledges and agrees that Mintoak
              /Sponsoring Bank shall be free to rely on and proceed on the basis
              of the information and data relating to Transactions transmitted
              to it from the Device for processing Transactions.
              <br />
              <br /> 9.15 The Merchant acknowledges and understands that if the
              Merchant acts in contravention of applicable law and/or in a
              manner inconsistent with these Terms and Conditions may, in its
              sole discretion, terminate this Agreement. <br />
              <br />
              10. Device (also called, “POS Terminal” or “EDC Terminal”)
              <br />
              10.1 Mintoak shall provide the Device which is embedded with
              Mintoak’s proprietary application and software (called “Mintoak
              Systems”) to the Merchant on license basis for a monthly or annual
              fee and one-time installation/set up charges as specified in the
              application digitally submitted by the Merchant. <br />
              <br />
              10.2 The Merchant agrees and acknowledges that no rights in such
              Mintoak systems are being sold by Mintoak and the Mintoak Systems
              shall at all times belong to Mintoak. The Merchant shall at all
              times during the use of the Device, avail the Support Services
              provided by or on behalf of Mintoak.
              <br />
              <br /> 10.3 Mintoak provides three options to the Merchant in
              respect of payment of one-time installation charges and monthly
              fees and the Merchant agrees to choose one of the options that
              suits its requirements. The applicable rate chosen by the Merchant
              will be displayed in the Merchant onboarding application. <br />
              <br />
              10.4 The Merchant agrees to pay the charges for repair of the
              Device as may be applicable on case to case basis.
              <br />
              <br />
              10.5 The Merchant shall, in case of loss or damage or upon
              termination of Mintoak Services shall be responsible to pay the
              price of the Device(s) and/or return of the functional Device.{" "}
              <br />
              <br />
              10.6 Mintoak procures the Device from third party manufacturer/s.
              All third-party Device hardware and other products included are
              provided solely according to the warranty and other terms
              specified by the manufacturer. Mintoak provides the hardware
              support through the manufacturers. Mintoak makes no
              representations or warranties express or implied with respect to
              such third-party Device/hardware and expressly disclaims any
              warranty or condition of merchantability, non-infringement, or
              fitness for a particular purpose.
              <br />
              <br />
              <br />
              <br /> 10.7 Notwithstanding anything to the contrary, Mintoak may
              modify the list of Device including upon introduction of any new
              model of Device and shall fix the monthly or annual fee and
              one-time installation charges. One time set up fee at its sole
              discretion which shall be payable by the Merchant for replacing
              the existing equipment. 10.8 At the time of installation,
              Mintoak’s representative shall train the Merchant about the
              procedure for using the Device and accessories, if any. <br />
              <br />
              10.9 To provide Support Services, the Device is embedded with
              Mintoak systems. The Merchant agrees and acknowledges that no
              rights in Mintoak systems provided by Mintoak are being sold by
              Mintoak and all the right, title and interest in such systems
              shall at all times belong to Mintoak It shall further be deemed
              that Mintoak has given limited license to use the Device and the
              Intellectual Property Rights in the systems to the Merchant during
              the period when Mintoak is providing Services to the Merchant. The
              Merchant agrees and acknowledges that the Merchant shall have no
              right on the Mintoak systems including but not limited to the
              Intellectual Property Rights in or to the Device or the Mintoak
              systems.
              <br />
              <br /> 10.10 Mintoak recovers the monthly or annual charges/fee
              and one-time installation fees for the Device, software, systems
              and support services provided, which services can’t be provided in
              the absence of Mintoak systems. Mintoak shall not charge
              separately for the services. <br />
              <br />
              10.11 The Merchant shall not:
              <br />
              <br /> Sell, assign, transfer, lease or otherwise cause or allow
              or attempt to cause or allow, any dealings with the Device or any
              encumbrance on the Device to be created;
              <br />
              <br /> Remove, conceal or alter any markings, tags or plates
              attached to the Device or part of it; <br />
              <br />
              Disallow Mintoak’s right to access, repossess or dispose of the
              Device pursuant to the terms of this Agreement; or (iv) otherwise
              to be encumbered in any way whatsoever. <br />
              <br />
              10.12 The loss or damage arising out of negligence, or misuse of
              the Device and/or default in payment due to any reason whatsoever
              shall be recoverable from the Merchant.
              <br />
              <br /> 10.13 The Merchant shall pay Mintoak the one-time
              installation/set up charges for the Device by way of a cheque or
              electronic funds transfer (NEFT/IMPS) and the delivery. Mintoak
              will deliver and set up the Device post realisation/receipt of the
              one-time installation / set up charges. <br />
              <br />
              11. Device operation <br />
              11.1 The Merchant shall ensure the Device is maintained in good
              condition and the software application is updated as per the
              communication received from Mintoak from time to time. The
              Merchant will be liable for any lapses resulting from not updating
              the software application as per the communication sent by Mintoak
              from time to time.
              <br />
              <br /> 11.2 The Merchant shall ensure that the Device is not
              damaged and is handled with care including but not limited to
              Device transported from one point to another, so as to ensure that
              the transactions are not affected.
              <br />
              <br /> 11.3 The Merchant shall provide the data connection network
              required to complete the transactions, which will be mobile
              network, and shall not hold Mintoak responsible for loss of
              transaction or for failed transactions or for failed transactions
              due to failure of network connectivity.
              <br />
              <br /> 11.4 The Merchant shall promptly report to Mintoak any
              fault or suspected fault in the operation of the Device and at its
              own cost, despatch the Device to Mintoak for diagnosis and where
              possible repair. <br />
              <br />
              11.5 The Merchant shall keep confidential the information received
              from Mintoak in connection with the Device and not disclose to any
              person other than its staff member(s) connected with the operation
              of the Device for effecting transactions. <br />
              <br />
              11.6 The Merchant shall be responsible for any loss or damage or
              failure resulting from a breach of these provisions. For avoiding
              any doubt on this point, it is accepted that Mintoak shall have no
              liability for such loss/damage and/or failure. <br />
              <br />
              11.7 The Merchant shall take all requisite precautions to ensure
              that the Device is housed in safety casings / harnesses, if
              frequently used in transit.
              <br />
              <br /> 11.8 The Merchant shall ensure that white plastic/cards
              without logos of issuing Bank / Mastercard/ Visa/
              JCB/Rupay/Discover/Diner / other Payment Networks are not
              accepted.
              <br />
              <br />
              11.9 The Merchant shall ensure that a single transaction is not
              split into multiple swipes/dips from the same card.
              <br />
              <br /> 11.10 The Merchant shall ensure that sensitive personal
              identification data are not accepted through unsecured mode.
              <br />
              <br /> 11.11 The Merchant shall pay the monthly/annual fee/charges
              due to Mintoak irrespective of whether the equipment is used or
              not. <br />
              <br />
              11.12 The Merchant shall return the Device to Mintoak after the
              expiry or termination of the Agreement. Such returned Device shall
              be in good condition. In the event, the Device is damaged, the
              Merchant shall replace he same at its own cost. <br />
              <br />
              11.13 The Merchant shall return the Device to Mintoak after the
              expiry or termination of the Agreement. Such returned Device shall
              be in good condition. In the event, the Device is damaged, the
              Merchant shall replace he same at its own cost.
              <br />
              <br /> 11.14 The Merchant shall not perform any act or deed, or
              omit to perform such act or deed, to indicate or suggest that
              Mintoak owns or operates the Device. <br />
              <br />
              11.15 The Merchant shall ensure that it shall use the Device, only
              for the purpose of processing and transmitting the details and
              specifics in respect of any Transaction, in the manner and as per
              these terms and conditions and as may be directed from to time by
              Mintoak. <br />
              <br />
              11.16 The Merchant shall ensure that it shall provide to Mintoak /
              Sponsoring Bank or its authorised representatives, access to the
              Device and extend all further cooperation as may be required by
              Mintoak / Sponsoring Bank, for the prevention and detection of
              frauds. <br />
              <br />
              11.17 The Merchant acknowledges that it shall be solely
              responsible for the provision of any facilities and utilities
              which are required for the installation, operation and maintenance
              of the Device including without limitation provision of regular
              electricity connection, secure telephone lines, secure internet
              connection and Mintoak shall not be responsible or liable for
              making payment of any charges and costs in relation to such
              facilities and utilities. <br />
              <br />
              11.18 The Merchant shall ensure that at all times, only trained
              personnel and employees of the Merchant are allowed to operate the
              Device. <br />
              <br />
              11.19 The Merchant shall ensure that the Merchant does not
              swipe/use his/her own card on the Device provided to it. <br />
              <br />
              11.20 The Merchant shall ensure that each Device utilised by the
              Merchant complies with requirements as approved by Mintoak
              /Sponsoring Bank from time to time, and functions on the version
              of the Application approved by Mintoak /Sponsoring Bank. <br />
              <br />
              11.21 The Merchant shall ensure that no additional services are
              activated on the Device and no modifications are made with respect
              to the model of the Device and/or the application utilised without
              the prior written approval of Mintoak.
              <br />
              <br /> 11.22 The Merchant shall ensure that it follows the
              requirements for protection of information related to the Cards as
              per Mintoak’s / Sponsoring Bank’s guidelines in this regard.{" "}
              <br />
              <br />
              11.23 The Merchant acknowledges and agrees that the Sponsoring
              Bank reserves the right, but shall not be obliged, to make any
              modification such as enhancements, patches, upgrades and/or the
              procurement of new releases of any software or any changes in the
              payment mechanism in the Device, the Merchant shall at its own
              cost upgrade, modify and change its systems as may be required to
              integrate the same with the payment mechanism and/or the Device as
              the case may be after such modifications. <br />
              <br />
              12. Card acceptance and digital wallet acceptance <br />
              12.1 Merchant shall honour a Valid Card or Digital Payment
              Instrument when presented for a transaction and must not favour
              any Card issuer or digital wallet Service Provider. <br />
              <br />
              12.2 Merchant shall not engage in any practices or procedures that
              discriminate against the use Valid Cards or other Digital Payment
              Instruments whether in favour of cash or any other competing card
              brand or Digital wallet Service Provider. <br />
              <br />
              12.3 Merchant shall Not levy any service charge on the Customer
              for the use of the Card or Digital wallets which would discourage
              the customer from using the Card or Digital Wallet for the
              transaction and not place any minimum limit on the Transaction to
              accept a Valid Card or Valid digital wallet payment or other
              payment modes. <br />
              <br />
              13. Transaction handling <br />
              13.1 The Merchant shall enter into transactions only in Indian
              Rupees unless otherwise permitted by Mintoak in writing in
              advance. <br />
              <br />
              13.2 The Merchant shall note down, export data pertaining to the
              daily transactions as a report for accounting purposes. <br />
              <br />
              13.3 The Merchant shall retain all Transaction data for a minimum
              period of twelve months and provide in such form and manner as may
              be required by Mintoak / Sponsoring Bank from time to time,
              information and related documents in respect of Transactions;{" "}
              <br />
              <br />
              13.4 The Merchant shall not accept Card Transactions or digital
              payment instruments for goods and/or services that are prohibited
              by law and applicable to ME or the customer, as detailed in
              Annexure – A. <br />
              <br />
              13.5 The Merchant shall not accept Card Transactions or digital
              payment instruments for goods and/or services outside the
              description of Merchant’s business/profession.
              <br />
              <br /> 13.6 The Merchant shall while presenting any transaction
              information, certify to the Mintoak that all statements of facts
              contained therein are true and complete in all respects and that
              Merchant has supplied goods and/or services to which the
              transaction information relates to and the value stated therein is
              at a price not greater or less favourable than the same price and
              terms at which such goods and/or services are supplied by Merchant
              for cash and that the transaction information pertaining to each
              sale has been supplied only once.
              <br />
              <br /> 13.7 The Merchant shall while presenting any transaction
              information, certify to Mintoak that the sale of such goods and/or
              services are not unlawful. <br />
              <br />
              13.8 The Merchant shall accept any decision of Mintoak to remove
              the Device for misrepresentation or non-performance and for
              withdrawal of license for usage of Device by Merchant.
              <br />
              <br /> 13.9 Mintoak shall, at its sole discretion and for any
              reason whatsoever, be entitled to direct the Merchant to replace
              or remove and/or discontinue usage of any Device. The Merchant
              shall comply with such directions forthwith. <br />
              <br />
              13.10 The Merchant hereby agrees and undertakes that it shall
              ensure to swipe/dip or tap credit/debit/prepaid cards submitted by
              customers and attempt to process transactions only on the Device
              and the Merchant shall not capture, store or transmit (or attempt
              to capture, store or transmit) any Card information such as name
              of the customer(s), the Card Verification Value (CVV) number and
              the expiry date of the debit/credit card submitted by a customer,
              to any third party. <br />
              <br />
              14. Refund <br />
              14.1 In the event that any goods are not received by a customer or
              are rejected due to non-compliance by the Merchant or pursuant to
              any terms of contract between the Merchant and the customer or are
              otherwise lawfully rejected or are accepted for return and/or
              services paid for by the customer are not performed or are
              cancelled by the Merchant or the price is lawfully disputed by the
              customer or the price adjustment is disputed by the customer, the
              Merchant shall refund such amounts to the customer within fourteen
              (14) working days.
              <br />
              <br />
              14.2 Cash and other means of refund for a Card sale or digital
              wallet sale is strictly prohibited, and any refund must be paid to
              the same Card and E-wallet account used for the sale Transaction
              within fourteen (14) working days.
              <br />
              <br /> 14.3 Notwithstanding clause 14.1 to 14.2 above, Mintoak may
              in its absolute discretion instruct the Bank to adjust all such
              amounts from the amounts payable to Merchant or provide for such
              other procedure for refund as Mintoak may deem fit from time to
              time. <br />
              <br />
              14.4 The Merchant shall process all refunds (in respect of any
              concluded transactions) to the customers only through the Payment
              Mechanism as per the procedure stipulated by Mintoak and in no
              other manner whatsoever. <br />
              <br />
              15. Merchant Discount Rate (MDR), charges and fees <br />
              <br />
              15.1 The Merchant shall pay Mintoak the MDR set out and agreed
              upon. The MDR will be advised by Mintoak to the Merchant in
              writing by email to the registered email address of the Merchant
              and also inform any revision in the rates, from time to time
              without having to amend these terms through an email.
              <br />
              <br /> 15.2 The Merchant shall pay Mintoak the MDR set out and
              agreed upon. The MDR will be advised by Mintoak to the Merchant in
              writing by email to the registered email address of the Merchant
              and also inform any revision in the rates, from time to time
              without having to amend these terms through an email.
              <br />
              <br /> 15.3 The Merchant shall ensure that MDR and any additional
              fees are paid when the services set out in the application are
              provided. However, Mintoak will, at its sole discretion, deduct
              those amounts from the sums payable to Merchant and the Merchant
              gives its express consent and authorisation to Mintoak to so
              deduct and further Merchant agrees to honour the same and no claim
              of whatever nature shall be raised against Mintoak for such
              deductions. <br />
              <br />
              15.4 The Merchant agrees to reimburse Mintoak for all chargebacks.
              <br />
              <br /> 15.5 The Merchant agrees to pay Mintoak the sum set out as
              monthly fees in the merchant onboarding application at the
              frequency stated therein and all other fees/charges and/or levies
              as agreed by Merchant for payment to Mintoak on account of SMS
              (short messaging service) charges, Bank transfer charges and the
              like as billed to Mintoak by third parties. <br />
              <br />
              16. Provision of cash withdrawal facility <br />
              16.1 Merchant shall allow a Cash Withdrawal Customer to withdraw
              cash at the EDC/POS Terminal against a valid debit card issued in
              India or such other card as may be prescribed by the Reserve Bank
              of India / Sponsoring Bank as informed by Mintoak from time to
              time and to the extent and manner as may be stipulated by the
              Reserve Bank of India and the Sponsoring Bank from time to time
              and advised by Mintoak, subject to these terms and conditions.{" "}
              <br />
              <br />
              16.2 The Merchant shall permit each Cash Withdrawal Customer
              amounts as specified by the RBI and Sponsoring Bank and advised by
              Mintoak from to time. The Cash Withdrawal Facility shall unless
              otherwise specified by Mintoak, be available to an eligible Cash
              Withdrawal Customer whether or not such Cash Withdrawal Customer
              purchase or seeks to purchase the goods and/or services from the
              Merchant. <br />
              <br />
              16.3 The Merchant shall not be charging the customer any fees,
              charges, expenses or other costs whatsoever, for allowing the
              customer to use the Cash Withdrawal Facility. <br />
              <br />
              16.4 The process flow for processing and settlement of the
              Transactions shall apply mutatis mutandis to a Cash Withdrawal
              Transaction and the amount to be settled in favour of Mintoak
              shall be deemed to be part of the POS settlement cycle. <br />
              <br />
              17. Termination of the cash withdrawal facility <br />
              17.1 Without prejudice to the rights of Mintoak under Clauses 24 &
              25 (Term and Termination), Mintoak shall be entitled to terminate
              the Cash Withdrawal Facility for the Merchant, by notice in
              writing to the Merchant, by way of email to the registered email
              address of the Merchant, if the Merchant commits any breach of any
              of the terms and conditions of this Cash Withdrawal Facility and,
              in case of a breach capable of remedy, fails to remedy the same
              within three (3) days of the occurrence of such breach subject a
              shorter period, if mentioned elsewhere in these terms or any
              Agreement or under the Applicable Law. For the purpose of this
              paragraph, a breach shall be considered capable of remedy if the
              Merchant can comply with the provision in question in all respects
              other than as to the time of performance (provided that the time
              of performance is not of the essence). <br />
              <br />
              17.2 Mintoak’s right to terminate the Cash Withdrawal Facility as
              above shall be in addition to the right of Mintoak to terminate
              these terms or other related Agreement/s as a whole under Clauses
              24 &25 (Term and Termination) of these Terms and any other rights
              or remedies that Mintoak may have at law or in equity as a result
              of any breach of these clauses. <br />
              <br />
              17.3 Either party shall be entitled to terminate the Cash
              Withdrawal Facility without cause at any time. <br />
              <br />
              18. Interest <br />
              18.1 Mintoak shall charge the Merchant interest at the rate of 2%
              per month on any amounts outstanding.
              <br />
              <br /> 19. Indemnity <br />
              19.1 Merchant hereby undertakes and agrees to indemnify Mintoak
              and hold Mintoak harmless from and against all actions,
              proceedings, claims, liabilities (including statutory
              liabilities), penalties, Chargebacks, costs (including without
              limitation, legal costs of Mintoak on solicitor/attorney and own
              client basis), awards, damages, demands, expenses and/or losses
              and injuries made against, suffered or incurred by Mintoak however
              arising directly or indirectly as a result of or in connection
              with: Any breach, failure or non-performance by Merchant or any of
              the Merchant’s undertakings, warranties, covenants, declarations
              or obligations under these Terms; or Any claim or proceeding
              brought by a customer or any other person or statutory authority
              against Mintoak/ Sponsoring Bank in respect of any services
              offered by Merchant; or Any act, neglect or default Merchant’s
              officers, employees or agents licensees or customers; or Customers
              or the Merchant being under suspicion by VISA, Mastercard,
              Discover, Diners, JCB or NPCI or any other Payment Networks or any
              digital/e-Wallet Service Providers for encouraging or indulging in
              fraudulent practices. <br />
              <br />
              19.2 Merchant shall also fully indemnify and hold harmless Mintoak
              against any losses, costs, expenses, demands or liabilities
              whether direct or indirect arising out of a claim by a third party
              that the Merchant’s services infringe upon any Intellectual
              Property Rights or industrial property rights of that third party.{" "}
              <br />
              <br />
              19.3 Notwithstanding any other provisions or these terms, in no
              event shall Mintoak be liable to Merchant for loss of profits or
              revenues or for any indirect, consequential or special or similar
              loss or damage arising out of or in connection with a
              Transaction(s), or any other matter under these Terms.
              <br />
              <br /> 19.4 The indemnities under this provision are in addition
              to and without prejudice to the indemnities given elsewhere in the
              terms or in any Agreement and all the indemnities provided shall
              survive the termination or expiration of these terms. <br />
              <br />
              20. Confidentiality <br />
              20.1 Merchant shall not, store, or use or disclose the name of the
              Card Holder, Card number, expiry date, CVV number including
              without limitation, any other confidential information relating to
              any transaction or the Device or Mintoak and each of their
              respective businesses/professions including legal, financial,
              technical, commercial, marketing and Transaction and Device
              related records, data, documents, reports, these terms and the
              details of the negotiations between the Parties etc.
              (“information”) to a third party, unless such disclosure is
              compelled by applicable law and in adherence with all the relevant
              data security policies by any of the regulatory commissions, as
              mandated by the Government of India. 20.2 The Merchant agrees and
              undertakes that it shall keep all information and materials
              passing from Mintoak and/or the customer to the Merchant
              confidential and shall not, without the prior written consent of
              Mintoak or the customer as appropriate, divulge such information
              to any other person or use such information other than for the
              purpose of complying with these terms.
              <br />
              <br /> 20.3 The Merchant agrees and undertakes that it shall take
              all steps as may be reasonably necessary to protect the integrity
              of the information and to protect against unauthorized disclosure
              thereof. <br />
              <br />
              20.4 The Merchant agrees and undertakes that it shall promptly
              inform Mintoak or the customer as appropriate of any potential or
              accidental disclosure of the information as it pertains to any of
              them and take all steps, together with Mintoak and/or the customer
              as appropriate to retrieve and protect the information. <br />
              <br />
              20.5 The Merchant agrees and undertakes that it shall ensure that
              the employees and/or representatives of Merchant who are given
              access to the information shall at all times be bound by the same
              confidentiality obligations as Merchant and comply with legally
              valid and written non-disclosure obligations under their
              employment contracts.
              <br />
              <br /> 20.6 The Merchant agrees and undertakes that it shall
              ensure that the Sponsoring Bank or its authorised representatives
              shall have access to the Device and provide cooperation as may be
              required by the Bank, for prevention and detection of frauds.{" "}
              <br />
              <br />
              20.7 The Merchant agrees and undertakes that use the information
              only for the purpose for which it was provided and not profit from
              the same in an unauthorised manner.
              <br />
              <br /> 20.8 The Merchant agrees and undertakes to ensure that the
              payment application software version used for processing Card
              payments is PA-DSS (Payment Application Data Security Standard
              Council) approved and other global security standards for card
              present scenarios <br />
              <br />
              20.9 The aforesaid clauses 20.1 to 20.8 shall survive the
              termination of these Terms and Conditions. <br />
              <br />
              21. Chargeback <br />
              21.1 Any Transaction entered by Merchant in any of the following
              circumstances shall be the final responsibility of Merchant not
              withstanding that the Transaction was accepted or paid by Mintoak/
              Sponsoring Bank and Merchant agrees to Mintoak / Sponsoring Bank
              charging back the Transaction without any demur or protest:
              Transactions which are not in conformity with the provisions of
              this Agreement; <br />
              <br />
              Transactions beyond the validity date shown on the Card;
              Transactions where the Card is altered or mutilated or the Card
              face or signature panel strip is defaced or faded;
              <br />
              <br /> Transactions which are fraudulent, collusive, illegal or
              otherwise irregular in any manner whatsoever; Transactions
              incurred outside the territory authorised for use of the Card;{" "}
              <br />
              <br />
              Transactions where the signature of the customer on the digitised
              Chargeslip is not the same as that on the Card; Transactions
              incurred by forgery of the Card Holder’s signature on the
              Chargeslip;
              <br />
              <br /> if such Transaction is received by the Sponsoring/Acquiring
              Bank within 5 (five) working days from the date appearing on the
              Chargeslip;
              <br />
              <br /> any charge for good and/or services sold or provided to the
              customer at a price which is in excess of the price charged to the
              general public for the goods and/or service;
              <br />
              <br />
              Transactions for undelivered goods and/or service; <br />
              <br />
              Transactions for which the customer refuses to pay because the
              goods and/or service were not as promised or were defective;
              <br />
              <br /> Transactions where the customer asserts a claim for set off
              or counter claim against the Merchant or disputes customer
              liability for any reason whatsoever; Transactions where the
              transaction is split by the Merchant into more than one
              transaction with a view to circumvent the approval parameters of
              the user; <br />
              <br />
              Transactions where the customer claims that multiple or duplicate
              transactions have been erroneously charged by the Merchant;
              Transactions in respect of which a customer’s complaint or request
              for an adjustment has not been resolved; transactions which are
              transacted, recorded or submitted or otherwise than in accordance
              with this Agreement; Merchant agrees to submit the transaction
              documents as required by the Card Associations / digital wallets
              service provider in the event of any disputes on any of the
              reasons allowed by the Payment Networks / digital wallet service
              providers to dispute; <br />
              <br />
              21.2 A chargeback or any payment or reimbursement from the
              Merchant of any amount under this Agreement may at Mintoak’s
              discretion, be given effect throughout any or more of the
              following methods: Deduction of the relevant amount or any part
              thereof from the future settlement without prejudice or limitation
              to Mintoak’s right to set-off;
              <br />
              <br /> The obtaining of Court Order; <br />
              <br />
              Billing Merchant for the relevant amount or any part thereof and
              Merchant agreeing to pay the amount of the bill forthwith upon
              receipt of the same without any demur or protest. <br />
              <br />
              21.3 Where Merchant is a partnership or a proprietary concern and
              a partner(s) / proprietor is a Customer in an individual /
              personal capacity, such partner/proprietor shall not use his/her
              Card or digital/e-wallet for the purchase of goods and/or services
              from the Merchant thereby utilizing the payment received from the
              Bank against such purchase, such Transaction shall not constitute
              valid charges.
              <br />
              <br />
              21.4 The Merchant hereby agrees that all Chargebacks shall be the
              sole responsibly of the Merchant and Mintoak shall not be liable
              for any claims or disputes which may arise in connection with such
              Chargebacks in particular, if any penalties or fines are imposed
              on Mintoak/Sponsoring Bank by the Payment Network/Card Association
              or any governmental authority, as a result of any act or omission
              of the Merchant in relation to any Chargeback, the Merchant shall
              indemnify Mintoak/ Sponsoring Bank in respect of the same. <br />
              <br />
              21.5 It is hereby agreed and acknowledged by the Merchant that the
              service charges charged by the Bank in respect of the Transaction
              in relation to which a direction has been issued and shall not be
              repaid by Mintoak/Sponsoring Bank to the Merchant or any other
              person.
              <br />
              <br /> 21.6 Without prejudice to the obligation of the Merchant to
              make payment of the Chargeback upon receipt of a direction from
              Mintoak / Sponsoring Bank, the Merchant agrees and acknowledges
              that Mintoak / Sponsoring Bank may recover the Chargeback from the
              Merchant by: <br />
              <br />
              (a) deducting the same in the manner contemplated by the process
              flow above;
              <br />
              <br /> (b) deducting the same from the ME’s account;
              <br />
              <br /> (c) deducting the same from the fixed deposit created;
              and/or <br />
              <br />
              (d) deducting the same from any account held or deposit made by
              the Merchant, whether jointly or singly. <br />
              <br />
              22. Audit
              <br /> 22.1 The Merchant shall ensure that at all points in time
              during the term of this arrangement of Mintoak providing the
              Services, Mintoak /Sponsoring Bank shall be entitled to either by
              itself, or through its internal or external auditors or any
              external specialists appointed by it in this behalf, to audit,
              review, monitor and assess the use of any software, data or other
              materials, all the documents, records, (including copies of any
              audit carried out or review reports and findings made with regard
              to the services) information, books or transactions, the security
              practices, control processes and other necessary information in
              the nature of operations, financial and business records which
              Mintoak/Sponsoring Bank or Mintoak /Sponsoring Bank’s employees
              and representatives in their absolute discretion deem to be
              relevant to Mintoak / Sponsoring Bank and/or compliance by Mintoak
              of these Terms. <br />
              <br />
              The Merchant shall forthwith upon being thus required, permit
              taking copies of any records, documents, books or other writings
              of the Merchant by Mintoak / Sponsoring Bank, its employees and
              representatives and its internal or external auditors. <br />
              <br />
              22.2 Without prejudice to the rights of Mintoak / Sponsoring Bank
              to require an audit as provided in the clause above, the Merchant
              shall <br />
              <br />
              (a) regularly provide updates to Mintoak / Sponsoring Bank and{" "}
              <br />
              <br />
              (b) meet with its officials designated by Mintoak / Sponsoring
              Bank to discuss and review the performance of the Merchant at such
              intervals as may be agreed between the parties.
              <br />
              <br /> In addition, in the event of any instance of any security
              breach or data compromise in relation to the Merchant coming to
              Mintoak / Sponsoring Bank’s attention, Mintoak / Sponsoring Bank
              shall be entitled to appoint forensic auditors and conduct a
              forensic audit of the premises and data centres of the Merchant,
              at the cost of the Merchant and the Merchant shall provide such
              assistance and provide access to such data, records hardware and
              software as Mintoak / Sponsoring Bank may require. <br />
              <br />
              22. The Merchant shall preserve/maintain in good order and as per
              generally accepted industry practices all documents, data and
              records as contemplated under these terms shall at all times in
              accordance with the applicable law.
              <br />
              <br /> 22.3 The Merchant shall co-operate in good faith with
              Mintoak / Sponsoring Bank and its employees, representatives and
              personal to correct any practice which is found to be deficient
              during any audit or monitoring and assessment process.
              Additionally, the Merchant shall make available reasonable time of
              a qualified professional towards responding to queries that may
              arise in the course of such monitoring or assessment process on
              mutually agreed terms.
              <br />
              <br /> 22.4 Notwithstanding anything contained in this section
              (Audit), it is hereby agreed between the parties that any
              regulator who is entitled to regulate and supervise the activities
              of Mintoak / Sponsoring Bank, including without limitation, the
              RBI and/or any persons authorised by such regulator shall be
              entitled to require the Merchant to furnish and submit such data,
              documents and records, and/or inspect/cause an inspection to be
              made of the Merchant and its operations or books and accounts by
              one or more of its offices or employees or other persons, or enter
              upon the premises of the Merchant and access, inspect, examine,
              audit and call for all the documents, records or transactions and
              other necessary information given to, stored or processed by the
              Merchant in the nature of operations and business records which
              the regulator may, in its sole an absolute discretion deems to be
              relevant to the terms and conditions, as set forth in these Terms,
              with or without provision of prior notice as the regulator may
              deem fit and necessary. <br />
              <br />
              22.5 In the event that any data, information, documents or
              records, which are required by Mintoak / Sponsoring Bank or its
              employees, representatives and personnel, as the case may be,
              and/or any regulator is stored or maintained at any location other
              than the premises of the Merchant (whether in India or abroad),
              the Merchant shall ensure that Mintoak / Sponsoring Bank, or its
              employees, representatives and personnel, and/or the concerned
              regulator, as the case may be, has access to such data,
              information or records to the same extent as if such data
              information and records were maintained by the Merchant at their
              own premises. <br />
              <br />
              23. Mintoak’s covenants and rights <br />
              23.1 Based on the representations, warranties, indemnities and
              covenants made herein by Merchant, Mintoak hereby permits Merchant
              to enter into Transactions with customers using a Valid Cad and
              the Device or the digital wallet or any other digital Payment mode
              and adhering to the procedure stated herein above and thereby
              Mintoak agrees to instruct the Bank to pay to Merchant the amount
              of such Transaction subject to these Terms. <br />
              <br />
              23.2 Based on the representations, warranties, indemnities and
              covenants made herein by Merchant, Mintoak hereby permits Merchant
              to enter into Transactions with customers using a Valid Cad and
              the Device or the digital wallet or any other digital Payment mode
              and adhering to the procedure stated herein above and thereby
              Mintoak agrees to instruct the Bank to pay to Merchant the amount
              of such Transaction subject to these Terms.
              <br />
              <br /> 23.3 Mintoak shall, towards Authorised Transactions
              complete in all respects, instruct the Sponsoring Bank to pay to
              the Merchant by crediting the appropriate account of the Merchant
              as provided to Mintoak, the amount net of (i) the MDR and taxes as
              applicable, computed at the rate as stated in the Schedule, on the
              Transaction amount and (ii) any other amounts due from the
              Merchant to Mintoak including but not limited to fees for bank
              transfer charges, SMS charges and monthly fee, as and when the
              same becomes due for payment.
              <br />
              <br />
              23.4 No amount on a Transaction shall be payable to the Merchant
              unless Mintoak has received a receipt of that Transaction. <br />
              <br />
              For example: In case of Transactions via the Device, Merchant has
              used “settlement function” within the software application and
              follows such further procedures as may be stipulated by Mintoak
              from time to time.
              <br />
              <br />
              23.5 Payment of amounts due to the Merchant on Transactions shall
              be made within 2 (two) working days after receipt of the
              Transactions by the Sponsoring Bank (i.e. by T+2), unless the
              Mintoak Services are under termination notice period in which case
              such payments will be made only after the expiration of one
              hundred eighty (180) business days following the termination of
              the Mintoak Services. <br />
              <br />
              23.6 Merchant acknowledges and agrees that Mintoak shall be
              entitled, in cases where a refund claimed exceeds the amount due
              to Merchant, to debit the said excess amount from sums payable by
              Mintoak to Merchant. <br />
              <br />
              23.7 Payments to Merchant shall be without prejudice to any claims
              or rights, which Mintoak may have against the Merchant and shall
              not constitute any admission by Mintoak as to the performance by
              the Merchant of its obligations under these Terms and the amount
              payable to the Merchant.
              <br />
              <br />
              Merchant acknowledge and agrees that Mintoak shall be entitled to
              shuffle and deduct the amounts payable to the Merchant with:{" "}
              <br />
              <br />
              The amount of refund due to any customer in accordance with the
              procedure for refund set out under this Agreement;
              <br />
              <br /> Over payment made due to errors or otherwise; <br />
              <br />
              Any other sum due from or payable by the Merchant to Mintoak
              including without limitation any Chargebacks herein; Any taxes or
              claims required to be paid under law or in terms of the directions
              of any competent regulatory or legal authority and;
              <br />
              <br /> Any fees, penalties or fines imposed by Payment Network or
              digital wallet service providers and any regulatory/competent
              authority resulting from required compliances and/or violation of
              applicable rules and regulations or Merchant’s acts or omissions.{" "}
              <br />
              <br />
              23.8 If Mintoak suspects that the Merchant has committed a breach
              of these Terms and Conditions or has acted dishonestly or that
              fraud has been committed against Mintoak, the Sponsoring Bank, any
              customer or third party or Merchant has in connivance with any
              other person or groups of persons done the same or assisted in the
              same, Mintoak has the right to suspend all payments under the
              Mintoak Services, to the Merchant, pending enquiries by Mintoak
              and/or the Sponsoring Bank. <br />
              <br />
              23.9 Mintoak reserves the right to hold back the transaction
              amounts for any suspected/fraudulent transactions. <br />
              <br />
              24. Termination <br />
              24.1 The Services may be discontinued by Mintoak without assigning
              any reason whatsoever by giving to the Merchant a notice in
              writing of a minimum of 10 (ten) days prior to the date proposed
              for discontinuation/termination.
              <br />
              <br /> 24.2 The Services may be terminated by Mintoak forthwith,
              without there being a necessity to give a prior notice thereof to
              the Merchant as contemplated in the preceding clause upon
              happening of any of the following:
              <br />
              <br /> if any of Merchant’s representations and warranties herein
              contained are found to be incorrect or untrue;
              <br />
              <br /> if the Merchant breaches any of the terms and conditions or
              procedures contained herein; <br />
              <br />
              if the Merchant becomes bankrupt or insolvent or likely to be so
              in the sole discretion of Mintoak;
              <br />
              <br /> if the Merchant is, in the sole discretion of Mintoak,
              involved in or has facilitated any suspicious Transaction or fraud
              or intent of defrauding;
              <br />
              <br /> if there is no Transaction activity by the Merchant for a
              continuous period of thirty (30) days, unless absence from
              business/profession for a period of more than thirty (30) days has
              been approved by Mintoak; <br />
              <br />
              24.3 The Mintoak Services shall be deemed to be automatically
              terminated by Mintoak without there being a necessity to give a
              prior notice thereof to the Merchant if the Agreement between
              Mintoak and the Bank is terminated during the currency of the
              Agreement/these Terms or when the arrangement between payment
              processing platform provider and Mintoak is terminated or
              undergoes any modification that affects the subject matter of
              these Terms. <br />
              <br />
              24.4 In the event of termination of the Services, the Merchant
              shall disclose all completed Transactions to Mintoak. <br />
              <br />
              24.5 Termination shall not affect any liabilities incurred prior
              to it or any provision expressed to survive or be effective on
              termination and the same shall continue to remain in full force
              and effect.
              <br />
              <br /> 24.6 Notwithstanding termination, Mintoak may in its
              absolute discretion suspend the authority of the Merchant to enter
              into a Transaction(s) after service of notice of termination by
              either Party.
              <br />
              <br />
              24.7 The Merchant shall terminate this Agreement provided, the
              Merchant has made payment of his outstanding dues including
              monthly charges and any other amounts due to Mintoak. <br />
              <br />
              24.8 The Merchant upon termination shall: <br />
              <br />
              immediately cease to use in any manner whatsoever, the name of
              Mintoak/Sponsoring Bank; <br />
              <br />
              immediately cease to use in any manner whatsoever the Device of
              Mintoak; <br />
              <br />
              forthwith handover to Mintoak, possession of all Chargeslips which
              come into the possession of the Merchant or any of its employees,
              agents or officers. forthwith hand over to Mintoak, possession of
              all documents, materials, instructions, manuals, guidelines or
              other writings (including any copies thereof) and any other
              property belonging to Mintoak, whether provided in relation to the
              utilisation of the Transactions that may be in possession of the
              Merchant or any of its employees, agents or officers; forthwith
              hand over to Mintoak, possession of the Device Mintoak may, at its
              sole discretion, pass on such Device along with Mintoak Systems to
              other merchants. <br />
              <br />
              25. Term or tenure of mintoak services <br />
              25.1 These Terms and Conditions shall come into force from the
              Effective date and shall remain in full force, unless terminated
              by either Party.
              <br />
              <br /> 26. Waiver <br />
              26.1 Not exercising or delay in exercising any power or remedy
              available to Mintoak hereunder or any other documents pursuant
              hereto shall not impair or prejudice any such right, power or
              recourse and shall not be constructed to be a waiver thereof or
              any acquiescence therein by Mintoak. <br />
              <br />
              27. Severability <br />
              27.1 If any provision of these Terms and Conditions is illegal,
              invalid or unenforceable for any reason, it will be served from
              the remaining provisions, which will remain unaffected.
              <br />
              <br /> 28. Jurisidiction <br />
              28.1 All disputes and differences relating to the Services and
              these Terms and Conditions, Transactions hereunder and any other
              matters related hereto or as to the interpretation or enforcement
              of these Terms or Agreements shall be subject to the exclusive
              jurisdiction of the Courts in Mumbai to the exclusion of any other
              courts. <br />
              <br />
              29. Forcemajeure <br />
              <br />
              29.1 If at any time during the term of the Mintoak Services and
              the Terms, the performance in whole or in part of either Party’s
              obligation under these Terms/Agreement is prevented or delayed by
              any reason beyond the control of the Parties hereto, including but
              not limited to fire, storm, flood earthquake, explosion, accident,
              military operation, war, rebellion, riot, wreck, epidemic, embargo
              or any virus in the system or any other electronic delay or any
              laws, major failure in electronic communication systems,
              regulations or other Governmental actions, neither Party shall be
              entitled to terminate the Services under these Terms/ Agreement
              nor shall either Party have any claim for damages against the
              other in respect of such non-performance or delay in performance,
              and shall be entitled to resume as soon as practicable after any
              such event has come to an end or ceased to exist, provided that if
              the performance in whole or part of any obligation under these
              Terms/ Agreement is prevented or delayed by reason of any such
              event for a period exceeding 30 (thirty) days, the Parties shall
              jointly discuss the feasibility of a rescheduling of performance.{" "}
              <br />
              <br />
              If either of the Parties cannot with reasonable diligence be
              expected to continue performance, either Party may at its option
              elect to terminate the Services under these Terms/ Agreement or
              such part thereof as can be severed therefore without affecting
              the performance of the remaining portion. <br />
              <br />
              Nothing contained in this clause shall be construed as relieving
              either Party from its obligation to pay any sum due to the other
              Party.
              <br />
              <br /> 30.Publicity <br />
              30.1 Merchant shall not use the name and/or trademark/logo/
              tradename of Mintoak and the Sponsoring or Acquiring Bank, their
              respective group companies, subsidiaries, or associates in any
              States or marketing publications or advertisements or in any other
              manner without the prior written consent of Mintoak and the
              Sponsoring Bank, as the case may be. Where such consent is grated,
              Merchant expressly agrees to prominently display and maintain
              Mintoak’s/Sponsoring Bank’s promotional material as supplied by
              Mintoak from time to time. 30.2 Merchant expressly agrees for the
              (a) inclusion of the Merchant’s name in any directory or
              promotional material produced in connection with the Cards and
              digital wallets and (b) display of Visa, Mastercard, Visa
              Electron, Maestro, Rupay, Discover, other Card brand, UPI pay,
              BHIM UPI, BQR and E-Wallet logos on the Device/device and premises
              publicising the acceptance of all Cards, Bharat QR, UPI Pay and
              all other digital Wallets. <br />
              <br />
              31. Interpretation <br />
              31.1 In these terms and conditions unless the context otherwise
              requires: The headings of the clauses, provisions and other
              sub-divisions are for convenience of reference only and bear no
              effect on the interpretation of these terms and Agreement. <br />
              <br />
              Mintoak reserves the right at all times to amend the terms and
              conditions hereof in writing (including procedures stated
              hereunder) which shall become effective upon such recommendation.
              If the context so requires, words importing the masculine gender
              shall include the feminine and neutral genders and words in the
              singular numbers shall include the plural and vice versa. <br />
              <br />
              The terms ‘hereof’, ‘herein’, ‘hereby’, ‘hereto’ and derivatives
              are similar words The term ‘person’ includes an individual,
              proprietary firm, a partnership firm, a Company, a body corporate,
              a cooperative society, a trust, an association of persons whether
              incorporated or not. <br />
              <br />
              32. Cash advance and/or cash refunds <br />
              32.1 In case any Valid Charges of any Card Member required to be
              credited back to such Card member in accordance with these terms
              and condition, the Merchant will not allow such Card member to
              encash in any cheque and/or the Merchant will not make any cash
              advance and Cash refunds directly to such card member.
              <br />
              <br /> Further Mintoak will not be responsible or held liable for
              refund of such Valid Charges, by the Merchant directly to the Card
              member. <br />
              <br />
              Merchant will not do cash refund for card swiped/dipped/tapped at
              its establishment. <br />
              <br />
              33. Transfer and assignment
              <br /> 33.1 The Merchant will immediately notify Mintoak of any
              sale, assignment, lease or transfer in any way of the Merchant’s
              establishment or business or profession or all or a significant
              material part of its assets. The rights obtained under this
              Agreement are not assignable. <br />
              <br />
              33.2 Where the Merchant proposes to change the nature of business
              or profession or merchandise sold, which may result in the
              merchant category to be changed in the books of the Visa/
              Mastercard/Visa Electron/ Maestro / Rupay / Discover / Digital
              wallets etc, the Device and the support services shall be used
              only after such change is informed to Mintoak and acceptance
              thereof is conveyed to the Merchant. <br />
              <br />
              33.3 Merchant undertakes not to swipe/dip/tap its own Cards for
              funding its own business Limitation of liability <br />
              <br />
              34.1 In no event will be liable for any direct, indirect,
              punitive, incidental, special, consequential, or exemplary
              damages, including without limitation damages for loss of profits,
              goodwill, use, data, or other intangible losses, that result from
              the use of, inability to use, or unavailability of the service.
              34.2 Under no circumstances will Mintoak be responsible for any
              damage, loss, or injury resulting from hacking, tampering, or
              other unauthorized access or use of the services or merchant’s
              account, or the information contained therein. <br />
              <br />
              34.3 This limitation of liability section applies whether the
              alleged liability is based on contract, tort, negligence, strict
              liability, or any other basis, in no event will the aggregator be
              liable for <br />
              <br />
              (i) any indirect, special, consequential or incidental damages or
              loss of revenue or loss of business profits, however caused, even
              f advised of the possibility of such damages, or <br />
              <br />
              (ii) damages relating to any claim that accrued more than one year
              before the institution of adversarial proceedings thereon. subject
              to the above and notwithstading anything to the contrary herein,
              the maximum aggregate liability, for any and all direct damages
              (whether in contract, tort (including negligence) of Mintoak,
              regardless of the form of claim shall not exceed the sum total of
              monthly fee/ charges for six (6) months. <br />
              <br />
              35. Arbitration <br />
              35.1 In the event of a dispute, difference or claim between the
              parties hereto, arising out of the Services and these Terms or
              Agreement or in any way relating hereto, or any term, condition or
              provision herein mentioned or the construction or interpretation
              thereof or otherwise in relation hereto, the parties shall first
              endeavour to settle such difference, dispute, claim or question by
              mutual discussion. <br />
              <br />
              If a mutual settlement fails within 30 days of the Parties
              settlement efforts, then the dispute shall be referred to
              arbitration of a sole Arbitrator in accordance with the
              Arbitration & Conciliation Act, 1996, or any statutory
              modification or re-enactment thereof for the time being in force
              and such arbitration proceedings shall be held in English at
              Mumbai. <br />
              <br />
              36. Additional terms <br />
              36.1 The Merchant hereby acknowledges that Mintoak may from time
              to time procure, extract or obtain credit related information
              about the Merchant from various credit bureaus including but not
              limited to Credit Information Bureau (India) Limited (CIBIL).
              <br />
              <br /> The Merchant hereby agrees, authorizes and permits Mintoak
              to procure, extract and or obtain such information without prior
              intimation to the Merchant.
              <br />
              <br /> 36.2 The authorized signatory of the Merchant who is
              accepting these Term and Conditions, on behalf of the Merchant do
              hereby confirm on behalf of the Merchant and on his/her behalf:{" "}
              <br />
              <br />
              Submission of all documents pertaining to the constitution of the
              firm/company/entity including KYC documents and photographs of the
              Merchant establishment and Submission of valid proof of identity,
              proof of address and photograph of the authorised signatory for
              registering/onboarding the Merchant with Mintoak Innovations
              Private Limited (called as Mintoak) for availing the services
              (Device and services) called as “Mintoak Services. <br />
              <br />
              That the details and information provided in the Merchant
              Onboarding Application and the documents provided online are up to
              date, true and correct and you undertake to inform Mintoak of any
              changes, therein, immediately. <br />
              <br />
              In case of any of the information is found to be false or untrue
              or misleading or misrepresenting, the Merchant and Authorised
              Signatory are aware that they may be held liable for it; <br />
              <br />
              That they have no objection in Mintoak validating the entity’s and
              the authorized signatory’s PAN details or any other documents
              submitted to Mintoak with the issuing authority’s data base, by
              itself or through a third-party agency/service provider. <br />
              <br />
              That they have no objection in Mintoak Innovations Pvt Ltd using
              the Authorize Signatory’s Aadhar number, demographic
              details/information against Unique Identification Authority of
              India’s (UIDAI) data base by itself or through an authorised
              Authentication User Agency (AUA) and/or eKYC Authentication User
              Agency (KUA) duly licensed by UIDAI for carrying out “Yes/No”
              Authentication and/or eKYC authentication before updating your
              records for the purpose of registering/onboarding us as Merchant.
              I hereby consent to provide my Aadhaar number, OTP and/or
              Biometrics for the purpose of the said authentications for the
              purpose of completing the transaction. <br />
              <br />
              37. Documents <br />
              37.1 The Merchant agrees and undertakes to provide all such true
              and correct documents including but not limited to proof of
              identification, declaration in case of proprietorship concern,
              address proof etc. <br />
              <br />
              as and in the form required by Mintoak at the time of submitting
              the Application and from time to time. <br />
              <br />
              37.2 The Merchant agrees to execute and eSign separately a legal
              agreement (called, “Agreement” or “Merchant Agreement”) for
              availing the Mintoak Services.
              <br />
              <br /> 38. Revisions, disclosures and notices <br />
              38.1 Mintoak may amend the Terms, at any time with notice that it
              deems reasonable in the circumstances, by posting the revised
              version of the Terms (each a Revised Version) on its website or
              communicating it to the Merchant through an email to the email ID
              registered by the Merchant. <br />
              <br />
              38.2 The Revised Version of the Terms and Conditions will be
              effective as of the time it is posted but will not apply
              retrospectively. Your continued use of the Services after the
              posting of a Revised Version constitutes your acceptance of such
              Revised Version. <br />
              <br />
              38.3 Any notices/communication to be given by either Party to the
              other shall be sent by registered letter or email at the
              address/email ID last notified by Party. <br />
              <br />
              38.4 We may provide disclosures and notices required by law,
              Sponsoring Bank, Reserve Bank of India or other regulators,
              Government and other information about your Mintoak Account to you
              electronically, by posting in our Website or through email to your
              email address registered with us or pushing notifications through
              the Services. Electronic disclosures and notices are considered
              received by you within 24 (Twenty-four) hours of the time posted
              of the time poste to our website or within 24 (twenty-four) hours
              of the time emailed to you. <br />
              <br />
              If you wish to withdraw your consent to receiving electronic
              communications, contact Mintoak Support at help@mintoak.com. If we
              are not able to support your request, you may need to terminate
              your Mintoak account.
              <br />
              <br /> 38. Miscellaneous <br />
              <br />
              38.1 These Terms and Conditions (along with the Application)
              constitute the entire agreement between the parties with respect
              to the subject matter herein and supersedes all prior arrangements
              between the parties regarding such subject matter.
              <br />
              <br /> The arrangement between Mintoak and the Merchant is
              non-exclusive and on principal to principal basis and nothing
              contained herein creates any agency or partnership or joint
              venture relationship between the Mintoak and the Merchant. <br />
              <br />
              38.2 No failure on the part of Mintoak to exercise or delay in
              exercising any of its rights will be deemed a waiver thereof, nor
              will any single or partial exercise preclude any further or other
              exercise of such or any other right. <br />
              <br />
              38.3 If any part of these Terms and Conditions is unenforceable
              because of any rule of law, public policy or for any other reason,
              such unenforceable provision shall be severed from these Terms and
              Conditions, and the remaining provisions of these Terms and
              Conditions shall remain in full force and effect.
              <br />
              <br /> The provisions of these Terms and Conditions which by its
              nature survives shall survive the termination of the arrangement
              between the Merchant and Mintoak <br />
              <br />
              38.4 These Terms and Conditions are published and available on
              Mintoak’s website{" "}
              <span className="text-8CC63E hover:text-8CC63E">
                http://www.mintoak.com
              </span>{" "}
              and any changes / amendments to these Terms and conditions shall
              be updated on the website too.
              <br />
              <br /> All annexures and schedules form part and parcel of these
              terms. <br />
              <br />
              ANNEXURE – A BANNED
              <br />
              PRODUCT AND SERVICE CHARGES <br />
              Adult goods and services which includes pornography and other
              sexually suggestive materials (including literature, imagery and
              other media); escort or prostitution services.
              <br />
              <br />
              Alcohol, which includes Alcohol or alcoholic beverages such as
              beer, liquor, wine, or champagne. Body parts, which includes
              organs or other body parts. <br />
              <br />
              Bulk marketing tools, which include email lists, software, or
              other products enabling unsolicited email messages (spam).
              <br />
              <br /> Cable descramblers and black boxes which includes devices
              intended to obtain cable and satellite signals for free. <br />
              <br />
              Child pornography, which includes pornographic materials involving
              minors. <br />
              <br />
              Copyright unlocking devices, which includes mod chips, or other
              devices designed to circumvent copyright protection. Copyrighted
              media, which includes unauthorised copies of books, music, movies,
              and other licensed or protected materials. <br />
              <br />
              Copyrighted software, which includes unauthorised copies of
              software, video games and other licensed or protected materials,
              including OEM or bundled software.
              <br />
              <br /> Counterfeit and unauthorised goods, which include replicas
              or imitations of designer goods; items without a celebrity
              endorsement that would normally require such an association, fake
              autographs, counterfeit stamps, and other potentially unauthorised
              goods. <br />
              <br />
              Drugs and drug paraphernalia, which include illegal drugs and drug
              accessories, including herbal drugs, like salvia and magic
              mushrooms. <br />
              <br />
              Drug test circumvention aids, which includes drug cleansing
              shakes, urine test additives, and related items. <br />
              <br />
              Endangered species, which includes plants, animals or other
              organisms (including product derivatives) in danger of extinction.{" "}
              <br />
              <br />
              Gaming/gambling, which includes lottery tickets, sports bets,
              memberships/ enrolment in online gambling sites, and related
              content. <br />
              <br />
              Government IDs or documents, which includes fake IDs, passports,
              diplomas, and noble titles. <br />
              <br />
              Hacking and cracking materials, which include manuals, how-to
              guides, information.
              <br />
              <br /> Device enabling illegal access to software, servers,
              watomites, or other protected property.
              <br />
              <br /> Illegal goods, which includes materials, products, or
              information promoting illegal goods or enabling illegal acts.{" "}
              <br />
              <br />
              Miracle cures, which include unsubstantiated cures, remedies or
              other items, marketed as quick health fixes. <br />
              <br />
              Offensive goods which includes literature, products or other
              materials that: a) Defame or slander any person or groups of
              people based on race, ethnicity, national origin, religion, sex,
              or other factors; b) Encourage or incite violent acts; and/or c)
              Promote intolerance or hatred. <br />
              <br />
              Offensive goods, crime which includes crime scene photos or items,
              such as personal belongings, associated with criminals.
              <br />
              <br /> Prescription drugs or herbal drugs or any kind of online
              pharmacies, which includes drugs or other products requiring a
              prescription by a licensed medical practitioner.
              <br />
              <br />
              Pyrotechnic devices and hazardous materials which includes
              fireworks and related goods; toxic, flammable, and radioactive
              materials and substances. <br />
              <br />
              Regulated goods which includes air bags; batteries containing
              mercury; Freon or similar substances/refrigerants,
              chemical/industrial solvents, government uniforms, car titles or
              logos, license plates, police badges and law enforcement
              equipment, lock-picking devices, pesticides; postage meters,
              recalled items, slot machines, surveillance equipment, goods
              regulated by government or other agency specifications.
              <br />
              <br /> Securities, which includes stocks, bonds, or related
              financial products. <br />
              <br />
              Tobacco and cigarettes, which includes cigarettes, cigars, chewing
              tobacco, and related products. <br />
              <br />
              Traffic devices, which includes radar detectors/ jammers, license
              plate covers, traffic signal changers, and related products.{" "}
              <br />
              <br />
              Weapons, which includes firearms, ammunition, knives, brass
              knuckles, gun parts, and other armaments. <br />
              <br />
              Wholesale currency, which includes discounted currencies or
              currency exchanges. <br />
              <br />
              Live animals or hides/skins/teeth, nails and other parts etc of
              animals. <br />
              <br />
              Multi-Level Marketing collection fees. Matrix sites or sites using
              a matrix scheme approach.
              <br />
              <br />
              Work-at-home information. <br />
              <br />
              Drop-shipped merchandise. <br />
              <br />
              Any product or service which is not in compliance with all
              applicable laws and regulations whether federal, state, local or
              international, including the laws of India. <br />
              <br />
              ANNEXURE – B <br />
              CHARGE BACK EVENTS
              <br /> Any charge/debit on a Card, which is suspect charge/debit
              or is thought to be irregular or fraudulent in nature by
              Mintoak/Sponsoring Bank, in its sole opinion and assessment.{" "}
              <br />
              <br />
              Any charge/debit on a Card arising out of any hacking, beach of
              Security encryption (if any) that may be attributable by the Bank
              to the Merchant due to the manner in which the Merchant handled
              the customer information or Cardholder/ transaction details.
              <br />
              <br /> Any other events or circumstances under which a chargeback
              is required to be effected under the Network Rules or applicable
              law. The transaction is for any reason unlawful or unenforceable.{" "}
              <br />
              <br />
              Any information presented electronically to Mintoak / Sponsoring
              Bank in respect of the Transaction is not received in accordance
              with Mintoak’s / Sponsoring Bank’s requirements from time to time.{" "}
              <br />
              <br />
              Transaction is posted more than once to customer’s account. <br />
              <br />
              The Transaction is doubtful or erroneously paid to the Merchant.
              <br />
              <br /> Any Transaction made through a Card outside the territory
              authorized for the use of the card. <br />
              <br />
              The product is rejected or returned or the customer disputes the
              nature, quality and quantity of the product. <br />
              <br />
              The Transaction is validly cancelled or terminated by the
              customer. <br />
              <br />
              The customer disputes or denies the occurrence of the Transaction
              or the sale of delivery of the product covered by the Transaction.{" "}
              <br />
              <br />
              Any other event or circumstances in which Mintoak shall from time
              to time notify to the Merchant in writing shall have occurred at
              the date of the Transaction.
              <br />
              <br /> The Transaction is for any reason unlawful or
              unenforceable. <br />
              <br />
              Any charge/debit on a Card for a product in amount of excess of
              the price that product stated on packaging
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
