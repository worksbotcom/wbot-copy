import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const CookiePolicyContent = () => {
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
               Cookie Policy
            </h1>

            <p className="text-base text-gray-500 border-l-4 border-indigo-500 pl-4 py-1 lg:text-left">
              <strong>Last Updated:</strong> [Insert Date] 
              <br className="sm:hidden" />
              <strong>Applies To:</strong> EU/EEA, UK, USA, India, and Gulf Countries (UAE, KSA, Qatar, Oman, Bahrain, Kuwait).
            </p>

            <p className="text-gray-700 leading-relaxed lg:text-left">
              This Cookie Policy explains how Worksbot (“we,” “our,” or “us”) uses cookies and similar technologies to enhance your browsing experience, analyze site performance, and provide personalized services.
            </p>

            <p className="text-indigo-600 font-medium lg:text-left">
              By continuing to use our website, you consent to the use of cookies as outlined in this policy, unless you disable cookies in your browser or adjust your preferences.
            </p>
          </header>
        </RevealAnimation>

        {/* BODY - COOKIE POLICY ARTICLES */}
        <article className="cookie-policy-body space-y-16 max-w-5xl mx-auto lg:text-left">

          {[...Array(10)].map((_, index) => {
            const policyNumber = index + 1;
            const policyDelay = 0.35 + (policyNumber * 0.05);

            return (
              <RevealAnimation delay={policyDelay} key={policyNumber}>
                <div className="space-y-5">
                  <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
                    {policyNumber}. {getCookieTitle(policyNumber)}
                  </h2>
                  <div className="text-gray-600 leading-relaxed">
                    {renderCookieContent(policyNumber)}
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

// Function to retrieve the title for each policy section
const getCookieTitle = (number: number) => {
    switch (number) {
        case 1: return "What Are Cookies?";
        case 2: return "Types of Cookies We Use";
        case 3: return "Cookies We Do NOT Use";
        case 4: return "Legal Basis for Cookie Usage";
        case 5: return "Managing Your Cookie Preferences";
        case 6: return "Data Collected Through Cookies";
        case 7: return "Sharing of Cookie Data";
        case 8: return "How Long Cookies Last";
        case 9: return "Updates to This Cookie Policy";
        case 10: return "Contact Information";
        default: return "Cookie Policy Section";
    }
};

// Function to render the specific content for each policy section
const renderCookieContent = (number: number) => {
    switch (number) {
        case 1:
            return (
                <>
                    <p className='mb-3'>Cookies are small text files stored on your device when you visit a website. They help us:</p>
                    <ul className="pl-6 space-y-2 list-disc"> 
                        <li>Improve functionality, Analyze user behavior, Enhance user experience</li>
                        <li>Deliver personalized content, Provide secure access features</li>
                    </ul>
                    <p className='mt-4 italic'>Cookies do not give us access to your personal files, passwords, or devices.</p>
                </>
            );
        case 2:
            return (
                <>
                    <p className='font-medium mb-3'>Worksbot uses several types of cookies to deliver optimal website performance and user experience.</p>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">2.1. Strictly Necessary Cookies</h3>
                    <p>These cookies are <strong>required</strong> for the website to function properly and support essential operations (Login authentication, Security features, Session management). They <strong>cannot be disabled</strong>.</p>
                    
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">2.2. Performance & Analytics Cookies</h3>
                    <p>Used to collect anonymous data on how users interact with our website (e.g., Pages visited, Traffic sources, Website errors). Typical tools include: <strong>Google Analytics, Matomo, Microsoft Clarity</strong>.</p>
                    <p className='italic'>We anonymize IP addresses as required by GDPR and UK GDPR.</p>

                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">2.3. Functional Cookies</h3>
                    <p>These cookies store user preferences such as <strong>Language, Region, Login details, and Display settings</strong>. They enhance usability and browsing experience.</p>

                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">2.4. Advertising & Targeting Cookies</h3>
                    <p>These cookies deliver relevant advertisements by tracking <strong>Browsing activities, Interests, and Engagement with ads</strong>. Platforms may include: <strong>Google Ads, Facebook Ads, LinkedIn Insight Tag</strong>.</p>
                    <p className='font-bold text-red-600'><strong>These cookies require explicit consent under GDPR.</strong></p>

                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">2.5. Third-Party Cookies</h3>
                    <p>Some cookies are placed by external providers for services like <strong>Video embedding, Social media plugins, Live chat support tools, and CRM systems</strong>. These are subject to their own privacy policies.</p>
                </>
            );
        case 3:
            return (
                <>
                    <p className='font-medium mb-3'>Worksbot does not deploy:</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li><strong>Spyware</strong> or <strong>Malware</strong></li>
                        <li>Cookies that store <strong>sensitive personal information</strong></li>
                        <li>Cookies that <strong>sell personal data</strong></li>
                    </ul>
                    <p className='mt-4 font-bold text-indigo-700'><strong>We strictly adhere to global privacy regulations.</strong></p>
                </>
            );
        case 4:
            return (
                <>
                    <p className='font-medium mb-3'>Our usage is based on the following legal requirements:</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li><strong>EU/EEA (GDPR) & UK (UK GDPR):</strong> Consent is required for all non-essential cookies. Necessary cookies operate under legitimate interest.</li>
                        <li><strong>United States (CCPA/CPRA):</strong> Notice and the right to opt-out are provided.</li>
                        <li><strong>India (DPDP Act):</strong> Transparent data processing and lawful purpose compliance.</li>
                        <li><strong>GCC Countries:</strong> Compliance with regional data protection laws (UAE, KSA, Qatar).</li>
                    </ul>
                </>
            );
        case 5:
            return (
                <>
                    <p className='font-medium mb-3'>You can manage or disable cookies in several ways:</p>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">5.1. Cookie Consent Banner</h3>
                    <p>When you first visit our website, you can <strong>Accept all cookies</strong>, <strong>Reject non-essential cookies</strong>, or <strong>Customize cookie settings</strong>.</p>

                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">5.2. Browser Settings</h3>
                    <p>You can block or delete cookies using your browser controls (<strong>Google Chrome, Firefox, Safari, Microsoft Edge, Opera</strong>).</p>
                    <p className='italic text-red-600'><strong>Note:</strong> Disabling necessary cookies may cause website malfunction.</p>

                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">5.3. Opt-Out of Advertising Cookies</h3>
                    <p>You may opt-out of many third-party advertising cookies via:</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Google Ads Preferences, Facebook Ad Settings, LinkedIn Ad Preferences</li>
                        <li>Digital Advertising Alliance (DAA) / Network Advertising Initiative (NAI)</li>
                    </ul>
                </>
            );
        case 6:
            return (
                <>
                    <p className='font-medium mb-3'>Cookies may collect non-sensitive technical and behavioral data:</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Browser type, Operating system, Device identifiers</li>
                        <li>IP address (anonymized where required), Geographic region (approximate)</li>
                        <li>Pages viewed, Time spent on site, Click behavior</li>
                    </ul>
                    <p className='mt-4 font-bold text-red-600'><strong>Cookies do NOT collect: Passwords, Banking information, or Sensitive personal data.</strong></p>
                </>
            );
        case 7:
            return (
                <>
                    <p className='font-medium mb-3'>Data collected may be shared only with vetted third parties to facilitate our services:</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Analytics providers, Cloud hosting platforms</li>
                        <li>Marketing tools, CRM systems, Customer support tools</li>
                    </ul>
                    <p className='mt-4'>We <strong>do not sell or trade</strong> personal data. Data sharing complies with all relevant international and regional data transfer rules (GDPR, UK ICO, CCPA/CPRA, India DPDP Act, Gulf regional laws).</p>
                </>
            );
        case 8:
            return (
                <>
                    <p className='font-medium mb-3'>Cookies have varying lifespans:</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li><strong>Session cookies:</strong> Deleted when you close the browser.</li>
                        <li><strong>Persistent cookies:</strong> Stored for a predefined period or until manually deleted.</li>
                    </ul>
                    <p className='mt-4 italic'>Retention periods vary depending on the specific cookie purpose.</p>
                </>
            );
        case 9:
            return (
                <>
                    <p className='font-medium mb-3'>We may update this Cookie Policy periodically to reflect:</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Legal changes, Technology updates, Business process improvements</li>
                    </ul>
                    <p className="mt-4 font-bold text-indigo-700"><strong>Updates will be posted with a revised “Last Updated” date. Continued usage of our site means you accept the updated policy.</strong></p>
                </>
            );
        case 10:
            return (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className='font-semibold text-lg mb-2'>For questions about this Cookie Policy or data usage, contact us at:</p>
                    <p className='mb-1'><strong>Worksbot Applications Private Limited</strong></p>
                    <p className='mb-1'><strong>Email:</strong> contact@worksbot.com</p>
                    <p className='mb-1'><strong>Website:</strong> www.worksbot.com</p>
                    <p><strong>Registered Office:</strong> Featherlite The Address, Innov8, 200feet Radial Road, Pallavaram, Chennai - 600044</p>
                </div>
            );
        default:
            return null;
    }
};

export default CookiePolicyContent;