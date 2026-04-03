import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const PrivacyPolicyContent = () => {
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
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 text-center">
                Privacy Policy
            </h1>

            <p className="text-base text-gray-500 border-l-4 border-indigo-500 pl-4 py-1 lg:text-left">
              <strong>Last Updated:</strong> [Insert Date] 
              <br className="sm:hidden" />
              <strong>Effective Globally In:</strong> Europe (EU/EEA), United Kingdom, United States, India, GCC Countries, and all international jurisdictions.
            </p>

            <p className="text-gray-700 leading-relaxed lg:text-left">
              Worksbot (“we,” “our,” “us”) is committed to protecting your personal data and maintaining transparency around how we collect, process, and safeguard information. This Privacy Policy explains our global data practices in compliance with <strong>GDPR, UK GDPR, CCPA/CPRA, India DPDP Act 2023,</strong> and <strong>GCC Data Privacy Regulations.</strong>
            </p>

            <p className="text-indigo-600 font-medium lg:text-left">
              By using our website, platforms, or services, you consent to the practices described in this Policy.
            </p>
          </header>
        </RevealAnimation>

        {/* BODY - PRIVACY POLICY ARTICLES */}
        <article className="privacy-policy-body space-y-16 max-w-5xl mx-auto lg:text-left">

          {[...Array(12)].map((_, index) => {
            const policyNumber = index + 1;
            const policyDelay = 0.35 + (policyNumber * 0.05);

            return (
              <RevealAnimation delay={policyDelay} key={policyNumber}>
                <div className="space-y-5">
                  <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
                    {policyNumber}. {getPrivacyTitle(policyNumber)}
                  </h2>
                  <div className="text-gray-600 leading-relaxed">
                    {renderPrivacyContent(policyNumber)}
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
const getPrivacyTitle = (number: number): string => {
    switch (number) {
        case 1: return "Information We Collect";
        case 2: return "How We Use Your Information";
        case 3: return "Legal Basis for Processing (GDPR/UK GDPR)";
        case 4: return "Your Rights";
        case 5: return "Data Retention";
        case 6: return "Sharing of Personal Data";
        case 7: return "Cross-Border Data Transfers";
        case 8: return "Data Security";
        case 9: return "Children’s Privacy";
        case 10: return "Links to Third-Party Websites";
        case 11: return "Updates to This Privacy Policy";
        case 12: return "Contact Us";
        default: return "Privacy Policy Section";
    }
};

// Function to render the specific content for each policy section
const renderPrivacyContent = (number: number) => {
    switch (number) {
        case 1:
            return (
                <>
                    <p className='font-medium mb-3'>We collect information directly from users, automatically through our website, and from authorized third-party sources.</p>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">1.1. Personal Data You Provide</h3>
                    <ul className="pl-6 space-y-2 list-disc"> 
                        <li>Name, email address, phone number</li>
                        <li>Company name, job title, country</li>
                        <li>Service inquiries, contact messages</li>
                        <li>Billing and payment details (processed securely)</li>
                        <li>Uploaded documents or project files</li>
                        <li>Login credentials (hashed and encrypted)</li>
                    </ul>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">1.2. Automatically Collected Data</h3>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>IP address (anonymized where required)</li>
                        <li>Browser type, device type, operating system</li>
                        <li>Pages viewed, time spent on site</li>
                        <li>Click behavior, referring URLs</li>
                        <li>Cookies and tracking data (see Cookie Policy)</li>
                    </ul>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">1.3. Third-Party Data</h3>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Analytics platforms (Google Analytics, etc.)</li>
                        <li>Advertising platforms (Google Ads, Meta Ads, LinkedIn)</li>
                        <li>Payment gateways</li>
                        <li>CRM or communication tools</li>
                    </ul>
                </>
            );
        case 2:
            return (
                <>
                    <p className='font-medium mb-3'>We process data for lawful business purposes including:</p>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">2.1. Service Delivery</h3>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Responding to inquiries and providing customer support</li>
                        <li>Delivering software, engineering, and consulting services</li>
                        <li>Account creation and access management</li>
                        <li>Project communication and collaboration</li>
                    </ul>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">2.2. Business Operations</h3>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Improving website functionality</li>
                        <li>Conducting analytics and performance monitoring</li>
                        <li>Enhancing user experience</li>
                    </ul>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">2.3. Marketing & Communication</h3>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Sending service updates, newsletters, and promotional messages (optional)</li>
                        <li>Retargeting or advertising with user consent where required</li>
                    </ul>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">2.4. Legal Compliance</h3>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Fraud prevention</li>
                        <li>Security monitoring</li>
                        <li>Compliance with global data protection laws</li>
                    </ul>
                </>
            );
        case 3:
            return (
                <>
                    <p className='font-medium mb-3'>We process data under the following legal grounds (for GDPR/UK GDPR):</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li><strong>Consent:</strong> When you subscribe, submit a form, or accept cookies.</li>
                        <li><strong>Contractual Necessity:</strong> To deliver requested services or respond to inquiries.</li>
                        <li><strong>Legitimate Interest:</strong> Analytics, security, marketing (in compliance with GDPR rules).</li>
                        <li><strong>Legal Obligation:</strong> Compliance with tax, auditing, or regulatory authorities.</li>
                    </ul>
                </>
            );
        case 4:
            return (
                <>
                    <p className='font-medium mb-3'>Depending on your region, you may have the following rights:</p>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">4.1. GDPR & UK GDPR Rights</h3>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Right to access, rectification, erasure (“Right to be forgotten”)</li>
                        <li>Right to restrict processing, data portability, and object to processing</li>
                        <li>Rights regarding automated decision-making</li>
                    </ul>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">4.2. CCPA/CPRA (California) Rights</h3>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Right to know what data we collect, to delete personal data, and to correct personal data</li>
                        <li>Right to opt-out of data sharing, and non-discrimination</li>
                        <li className='font-bold'>We do not sell personal data.</li>
                    </ul>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">4.3. India DPDP Act Rights</h3>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Right to access information, correction and erasure</li>
                        <li>Right to grievance redressal and consent withdrawal</li>
                    </ul>
                    <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">4.4. GCC Data Protection Rights</h3>
                    <p className='pl-6'>Subject to UAE, Saudi, and other local data privacy laws.</p>
                    <p className="mt-4 font-medium text-indigo-700">To exercise these rights, contact us at: 📩 [Insert Official Email]</p>
                </>
            );
        case 5:
            return (
                <ul className="pl-6 space-y-2 list-disc">
                    <li>Only as long as necessary for service delivery</li>
                    <li>As required under applicable laws</li>
                    <li>Or until you request deletion (where permitted)</li>
                    <li className='italic'>Retention may vary for legal or contractual obligations.</li>
                </ul>
            );
        case 6:
            return (
                <>
                    <p className='font-medium mb-3'>We may share data with:</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Cloud hosting providers, Analytics tools, Payment processors</li>
                        <li>CRM and communication platforms</li>
                        <li>Legal or regulatory authorities (if required)</li>
                    </ul>
                    <p className="mt-4 font-bold text-red-600">We never sell or rent personal data.</p>
                    <p className='mt-2 italic'>All third parties are vetted for compliance with global privacy laws.</p>
                </>
            );
        case 7:
            return (
                <>
                    <p className='font-medium mb-3'>We may transfer data across countries, including to: EU/EEA, UK, US, India, UAE/GCC regions. Transfers comply with:</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Standard Contractual Clauses (SCCs)</li>
                        <li>GDPR adequacy decisions</li>
                        <li>Encryption & secure transfer protocols</li>
                    </ul>
                </>
            );
        case 8:
            return (
                <>
                    <p className='font-medium mb-3'>We use advanced security measures including:</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>SSL/TLS encryption, Firewalls and intrusion detection</li>
                        <li>Secure access controls, Data anonymization</li>
                        <li>Regular security audits</li>
                    </ul>
                    <p className="mt-4 italic">No system is 100% foolproof, but we maintain strong security standards.</p>
                </>
            );
        case 9:
            return (
                <ul className="pl-6 space-y-2 list-disc">
                    <li>Our services are not intended for children under 16 years in GDPR regions or 13 years in the US.</li>
                    <li className='font-bold'>We do not knowingly collect data from minors.</li>
                </ul>
            );
        case 10:
            return (
                <ul className="pl-6 space-y-2 list-disc">
                    <li>Our website may contain links to external sites.</li>
                    <li className='font-bold'>We are not responsible for the privacy practices of third-party websites.</li>
                </ul>
            );
        case 11:
            return (
                <>
                    <p className='font-medium mb-3'>We may update this Policy to reflect:</p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>Legal requirements, Service updates, New technologies</li>
                    </ul>
                    <p className="mt-4 font-bold text-indigo-700">Changes are effective once posted. Continued use of our services means you accept the updated policy.</p>
                </>
            );
        case 12:
            return (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className='font-semibold text-lg mb-2'>For privacy-related inquiries or data rights requests:</p>
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

export default PrivacyPolicyContent;