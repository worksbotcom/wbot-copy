import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';


const TermsConditionContent = () => {
  return (
    <section className="py-24 md:py-26 lg:py-24 xl:py-28 lg:text-center">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* HEADER SECTION */}
        <RevealAnimation delay={0.3}>
          <header className="space-y-6 max-w-4xl mx-auto mb-16 md:mb-20"> 
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Terms &amp; Conditions
            </h1>

            <p className="text-base text-gray-500 border-l-4 border-indigo-500 pl-4 py-1 lg:text-left">
              <strong>Effective Date:</strong> [Insert Date] 
              <br className="sm:hidden" />
              <strong>Applicable Worldwide:</strong> EU/EEA, UK, USA, India, UAE, Saudi Arabia, Qatar, Oman, Bahrain, Kuwait & All Global Markets
            </p>

            <p className="text-gray-700 leading-relaxed lg:text-left">
              These Terms &amp; Conditions ("Terms") govern your access to and use of Worksbot's website, digital
              platforms, products, and professional services. By engaging with Worksbot, you confirm that you have
              read, understood, and agreed to be bound by these Terms.
            </p>

            <p className="text-red-600 font-medium lg:text-left">
              If you do not agree with these Terms, please discontinue all use of our website and services immediately.
            </p>
          </header>
        </RevealAnimation>

        {/* BODY - TERMS & CONDITIONS ARTICLES */}
        <article className="terms-conditions-body space-y-16 max-w-5xl mx-auto lg:text-left">

          {[...Array(17)].map((_, index) => {
            const termNumber = index + 1;
            const termDelay = 0.35 + (termNumber * 0.05);

            return (
              <RevealAnimation delay={termDelay} key={termNumber}>
                <div className="space-y-5">
                  <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
                    {getTermTitle(termNumber)}
                  </h2>
                  <div className="text-gray-600 leading-relaxed">
                    {renderTermContent(termNumber)}
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        
        </article>
      </div>
    </section>
  );
};

// Function to retrieve the title for each term number
const getTermTitle = (number:number) => {
    switch (number) {
        case 1: return "Scope of Agreement";
        case 2: return "Definitions";
        case 3: return "Eligibility";
        case 4: return "Use of Platform & Services";
        case 5: return "Contract Structure";
        case 6: return "Client Responsibilities";
        case 7: return "Payment Terms";
        case 8: return "Strict No Refund Policy";
        case 9: return "Intellectual Property";
        case 10: return "Data Privacy & Compliance";
        case 11: return "Confidentiality";
        case 12: return "Disclaimers";
        case 13: return "Liability Limitation";
        case 14: return "Service Termination";
        case 15: return "Governing Law";
        case 16: return "Changes to Terms";
        case 17: return "Contact Information";
        default: return "Term Section";
    }
};

// Function to render the specific content for each term number
const renderTermContent = (number:number) => {
    switch (number) {
        case 1:
            return (
                <>
                    <ul className="pl-6 space-y-2"> 
                        <li>All website visitors</li>
                        <li>All business clients and enterprise users</li>
                        <li>Individuals engaging in consulting, engineering, development, or support services</li>
                    </ul>
                    <p className="mt-4 text-sm italic">
                        These Terms apply in addition to any specific contracts, SOWs, proposals, invoices, or NDAs.
                    </p>
                </>
            );
        case 2:
            return (
                <ul className="pl-6 space-y-2">
                    <li><strong>Worksbot / Company:</strong> Worksbot and its subsidiaries, affiliates, employees.</li>
                    <li><strong>Client / User:</strong> Any individual or entity using our services.</li>
                    <li><strong>Services:</strong> AI, software, cloud, embedded, semiconductor, QA, consulting & all other offerings.</li>
                    <li><strong>Deliverables:</strong> Source code, designs, documents, prototypes, models.</li>
                    <li><strong>Agreement:</strong> These Terms + SOWs, contracts, written commitments.</li>
                </ul>
            );
        case 3:
            return (
                <>
                    <ul className="pl-6 space-y-2">
                        <li>Must be at least 18 years old</li>
                        <li>Provide accurate business information</li>
                        <li>Have legal authority to enter contracts</li>
                        <li>Not restricted under global trade laws</li>
                    </ul>
                    <p className="mt-4 font-medium text-indigo-700">Worksbot reserves the right to refuse service at its discretion.</p>
                </>
            );
        case 4:
            return (
                <>
                    <ul className="pl-6 space-y-2">
                        <li>No hacking, malware, or unauthorized access</li>
                        <li>No reverse engineering or cloning Worksbot systems</li>
                        <li>No IP violations or misrepresentation</li>
                        <li>No unlawful usage</li>
                        <li>No disruption of servers or infrastructure</li>
                    </ul>
                    <p className="mt-4 font-bold text-red-600">Violation may result in termination, legal action, and permanent ban.</p>
                </>
            );
        case 5:
            return (
                <ul className=" pl-6 space-y-2">
                    <li>Written agreement or SOW mandatory before service</li>
                    <li>Payment terms, scope, and timelines must be approved</li>
                    <li>Scope changes require formal Change Requests</li>
                    <li>No work starts without advance payment</li>
                </ul>
            );
        case 6:
            return (
                <>
                    <ul className=" pl-6 space-y-2">
                        <li>Provide timely approvals, data, credentials</li>
                        <li>Ensure legal ownership of submitted data</li>
                        <li>Maintain ongoing communication</li>
                    </ul>
                    <p className="mt-4 italic">Client-side delays may cause deadline extensions, added charges, or suspension.</p>
                </>
            );
        case 7:
            return (
                <ul className=" pl-6 space-y-2">
                    <li>Payments are mandatory and binding</li>
                    <li>Bank Transfer, Wire, Cards, Payment Gateways accepted</li>
                    <li>Late payments may cause suspension & legal recovery</li>
                </ul>
            );
        case 8:
            return (
                <p className="p-4 bg-red-50 border-l-4 border-red-500 font-semibold">
                    All payments are final and <strong>non-refundable</strong> including deposits, milestones, subscriptions, retainers,
                    consulting fees, and in-progress or completed work. Only service credits may be issued at Worksbot's
                    discretion.
                </p>
            );
        case 9:
            return (
                <ul className=" pl-6 space-y-2">
                    <li>Worksbot retains all internal libraries, tools, and frameworks</li>
                    <li>Clients receive only IP explicitly transferred in writing</li>
                    <li>No resale, redistribution, or IP abuse permitted</li>
                </ul>
            );
        case 10:
            return (
                <p>
                    Worksbot complies with <strong>GDPR, UK GDPR, CCPA, India DPDP Act 2023, UAE/GCC regulations</strong>. Data is encrypted and
                    never sold.
                </p>
            );
        case 11:
            return (
                <p>All confidential data must be protected <strong>indefinitely</strong> by both parties.</p>
            );
        case 12:
            return (
                <p>Worksbot does not guarantee business profitability, uptime of third-party platforms, or market success.</p>
            );
        case 13:
            return (
                <p>
                    Liability is <strong>strictly limited</strong> to the value specified in the client's contract. Worksbot is not liable
                    for indirect or consequential damages.
                </p>
            );
        case 14:
            return (
                <p>
                    Services may be terminated for non-payment, misuse, fraud, illegal activity, or reputational harm.
                    <strong> Payments remain non-refundable.</strong>
                </p>
            );
        case 15:
            return (
                <p>
                    Jurisdiction applies based on client location (EU, UK, USA, India, UAE/GCC). Arbitration and legal
                    proceedings apply as per contract.
                </p>
            );
        case 16:
            return (
                <p>Worksbot may modify these Terms at any time. <strong>Continued usage confirms acceptance.</strong></p>
            );
        case 17:
            return (
                <div className="bg-gray-50 p-4 rounded-lg border">
                    <strong>Email:</strong> contact@worksbot.com <br />
                    <strong>Website:</strong> www.worksbot.com <br />
                    <strong>Registered Office:</strong> Featherlite The Address, Innov8, 200ft Radial Road, Pallavaram, Chennai - 600044
                </div>
            );
        default:
            return null;
    }
};

export default TermsConditionContent;