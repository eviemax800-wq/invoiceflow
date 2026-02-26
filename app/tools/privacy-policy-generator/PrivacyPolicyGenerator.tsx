'use client';

import { useState, useMemo } from 'react';

/* ---- Types ---- */

type BusinessType = 'sole-trader' | 'company' | 'partnership' | 'trust';
type AustralianState = 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'NT' | 'ACT';
type RetentionPeriod = '1' | '2' | '5' | '7' | 'indefinite';

interface BusinessDetails {
  businessName: string;
  abn: string;
  businessType: BusinessType;
  websiteUrl: string;
  contactEmail: string;
  state: AustralianState;
}

interface DataCollectionOptions {
  names: boolean;
  emails: boolean;
  phones: boolean;
  postalAddresses: boolean;
  paymentInfo: boolean;
  ipAddresses: boolean;
  analyticsData: boolean;
  socialMedia: boolean;
  employmentDetails: boolean;
  other: boolean;
}

interface CollectionMethodOptions {
  directFromIndividuals: boolean;
  websiteCookies: boolean;
  thirdPartySources: boolean;
  socialMedia: boolean;
  paymentProcessors: boolean;
}

interface DataUsageOptions {
  providingServices: boolean;
  invoicingPayments: boolean;
  marketingNewsletters: boolean;
  improvingServices: boolean;
  legalCompliance: boolean;
  customerSupport: boolean;
}

interface ThirdPartySharingOptions {
  paymentProcessors: boolean;
  cloudStorage: boolean;
  emailMarketing: boolean;
  analytics: boolean;
  governmentBodies: boolean;
  professionalAdvisors: boolean;
  none: boolean;
}

/* ---- Constants ---- */

const BUSINESS_TYPES: { value: BusinessType; label: string }[] = [
  { value: 'sole-trader', label: 'Sole Trader' },
  { value: 'company', label: 'Company' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'trust', label: 'Trust' },
];

const STATES: { value: AustralianState; label: string }[] = [
  { value: 'VIC', label: 'Victoria' },
  { value: 'NSW', label: 'New South Wales' },
  { value: 'QLD', label: 'Queensland' },
  { value: 'SA', label: 'South Australia' },
  { value: 'WA', label: 'Western Australia' },
  { value: 'TAS', label: 'Tasmania' },
  { value: 'NT', label: 'Northern Territory' },
  { value: 'ACT', label: 'Australian Capital Territory' },
];

const STATE_FULL_NAMES: Record<AustralianState, string> = {
  VIC: 'Victoria',
  NSW: 'New South Wales',
  QLD: 'Queensland',
  SA: 'South Australia',
  WA: 'Western Australia',
  TAS: 'Tasmania',
  NT: 'Northern Territory',
  ACT: 'Australian Capital Territory',
};

const BUSINESS_TYPE_LABELS: Record<BusinessType, string> = {
  'sole-trader': 'sole trader',
  company: 'company',
  partnership: 'partnership',
  trust: 'trust',
};

const DATA_COLLECTION_LABELS: { key: keyof DataCollectionOptions; label: string }[] = [
  { key: 'names', label: 'Names and contact details' },
  { key: 'emails', label: 'Email addresses' },
  { key: 'phones', label: 'Phone numbers' },
  { key: 'postalAddresses', label: 'Postal addresses' },
  { key: 'paymentInfo', label: 'Payment/billing information' },
  { key: 'ipAddresses', label: 'IP addresses and device info' },
  { key: 'analyticsData', label: 'Website usage data (analytics)' },
  { key: 'socialMedia', label: 'Social media profiles' },
  { key: 'employmentDetails', label: 'Employment/business details' },
  { key: 'other', label: 'Other (specify below)' },
];

const COLLECTION_METHOD_LABELS: { key: keyof CollectionMethodOptions; label: string }[] = [
  { key: 'directFromIndividuals', label: 'Directly from individuals (forms, emails, phone)' },
  { key: 'websiteCookies', label: 'Through website cookies and analytics' },
  { key: 'thirdPartySources', label: 'From third-party sources' },
  { key: 'socialMedia', label: 'Through social media' },
  { key: 'paymentProcessors', label: 'Via payment processors' },
];

const DATA_USAGE_LABELS: { key: keyof DataUsageOptions; label: string }[] = [
  { key: 'providingServices', label: 'Providing services' },
  { key: 'invoicingPayments', label: 'Sending invoices and payment processing' },
  { key: 'marketingNewsletters', label: 'Marketing and newsletters' },
  { key: 'improvingServices', label: 'Improving services' },
  { key: 'legalCompliance', label: 'Legal compliance' },
  { key: 'customerSupport', label: 'Customer support' },
];

const THIRD_PARTY_LABELS: { key: keyof ThirdPartySharingOptions; label: string }[] = [
  { key: 'paymentProcessors', label: 'Payment processors (Stripe, PayPal, etc.)' },
  { key: 'cloudStorage', label: 'Cloud storage providers' },
  { key: 'emailMarketing', label: 'Email marketing services' },
  { key: 'analytics', label: 'Analytics services (Google Analytics)' },
  { key: 'governmentBodies', label: 'Government bodies (ATO, tax reporting)' },
  { key: 'professionalAdvisors', label: 'Professional advisors (accountants, lawyers)' },
  { key: 'none', label: 'None' },
];

const RETENTION_OPTIONS: { value: RetentionPeriod; label: string }[] = [
  { value: '1', label: '1 Year' },
  { value: '2', label: '2 Years' },
  { value: '5', label: '5 Years' },
  { value: '7', label: '7 Years (ATO)' },
  { value: 'indefinite', label: 'Indefinite' },
];

/* ---- Helpers ---- */

function todayFormatted(): string {
  const d = new Date();
  return d.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/* ---- Checkbox Component ---- */

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 peer-checked:bg-teal-400/30 peer-checked:border-teal-400/50 transition-all flex items-center justify-center">
          <svg
            className={`w-3 h-3 text-teal-300 transition-opacity ${
              checked ? 'opacity-100' : 'opacity-0'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
        {label}
      </span>
    </label>
  );
}

/* ---- Component ---- */

export default function PrivacyPolicyGenerator() {
  const [step, setStep] = useState(1);
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  // Step 1: Business Details
  const [business, setBusiness] = useState<BusinessDetails>({
    businessName: '',
    abn: '',
    businessType: 'sole-trader',
    websiteUrl: '',
    contactEmail: '',
    state: 'VIC',
  });

  // Step 2: Data Collection
  const [dataCollection, setDataCollection] = useState<DataCollectionOptions>({
    names: true,
    emails: true,
    phones: false,
    postalAddresses: false,
    paymentInfo: true,
    ipAddresses: false,
    analyticsData: false,
    socialMedia: false,
    employmentDetails: false,
    other: false,
  });
  const [otherDataDescription, setOtherDataDescription] = useState('');

  const [collectionMethods, setCollectionMethods] = useState<CollectionMethodOptions>({
    directFromIndividuals: true,
    websiteCookies: false,
    thirdPartySources: false,
    socialMedia: false,
    paymentProcessors: true,
  });

  // Step 3: Data Usage & Sharing
  const [dataUsage, setDataUsage] = useState<DataUsageOptions>({
    providingServices: true,
    invoicingPayments: true,
    marketingNewsletters: false,
    improvingServices: false,
    legalCompliance: true,
    customerSupport: true,
  });

  const [thirdPartySharing, setThirdPartySharing] = useState<ThirdPartySharingOptions>({
    paymentProcessors: true,
    cloudStorage: false,
    emailMarketing: false,
    analytics: false,
    governmentBodies: true,
    professionalAdvisors: false,
    none: false,
  });

  const [transfersOverseas, setTransfersOverseas] = useState(false);
  const [overseasCountries, setOverseasCountries] = useState('');

  // Step 4: Review & Generate
  const [gdprCompliance, setGdprCompliance] = useState(false);
  const [includeCookiePolicy, setIncludeCookiePolicy] = useState(false);
  const [retentionPeriod, setRetentionPeriod] = useState<RetentionPeriod>('7');

  const updateBusiness = (field: keyof BusinessDetails, value: string) => {
    setBusiness((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDataCollection = (key: keyof DataCollectionOptions) => {
    setDataCollection((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCollectionMethod = (key: keyof CollectionMethodOptions) => {
    setCollectionMethods((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleDataUsage = (key: keyof DataUsageOptions) => {
    setDataUsage((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleThirdParty = (key: keyof ThirdPartySharingOptions) => {
    if (key === 'none') {
      setThirdPartySharing({
        paymentProcessors: false,
        cloudStorage: false,
        emailMarketing: false,
        analytics: false,
        governmentBodies: false,
        professionalAdvisors: false,
        none: true,
      });
    } else {
      setThirdPartySharing((prev) => ({ ...prev, [key]: !prev[key], none: false }));
    }
  };

  // Build summary counts
  const selectedDataCount = Object.values(dataCollection).filter(Boolean).length;
  const selectedMethodCount = Object.values(collectionMethods).filter(Boolean).length;
  const selectedUsageCount = Object.values(dataUsage).filter(Boolean).length;
  const selectedSharingCount = Object.values(thirdPartySharing).filter(Boolean).length;

  // Build the privacy policy text
  const generatedText = useMemo(() => {
    const bName = business.businessName || '[Business Name]';
    const bAbn = business.abn ? ` (ABN: ${business.abn})` : '';
    const bType = BUSINESS_TYPE_LABELS[business.businessType];
    const bUrl = business.websiteUrl || '[website URL]';
    const bEmail = business.contactEmail || '[contact@email.com]';
    const bState = STATE_FULL_NAMES[business.state];
    const today = todayFormatted();

    // Build data collection list
    const collectedData: string[] = [];
    if (dataCollection.names) collectedData.push('names and contact details');
    if (dataCollection.emails) collectedData.push('email addresses');
    if (dataCollection.phones) collectedData.push('phone numbers');
    if (dataCollection.postalAddresses) collectedData.push('postal addresses');
    if (dataCollection.paymentInfo) collectedData.push('payment and billing information (including bank details and credit card details)');
    if (dataCollection.ipAddresses) collectedData.push('IP addresses, device information, and browser type');
    if (dataCollection.analyticsData) collectedData.push('website usage data including pages visited, time on site, and referral sources');
    if (dataCollection.socialMedia) collectedData.push('social media profile information');
    if (dataCollection.employmentDetails) collectedData.push('employment and business details');
    if (dataCollection.other && otherDataDescription) collectedData.push(otherDataDescription);

    // Build collection methods list
    const methods: string[] = [];
    if (collectionMethods.directFromIndividuals) methods.push('directly from you when you fill in forms, send us emails, call us, or otherwise interact with us');
    if (collectionMethods.websiteCookies) methods.push('automatically through cookies, web beacons, and similar technologies when you visit our website');
    if (collectionMethods.thirdPartySources) methods.push('from third-party sources such as business partners, referral partners, and publicly available sources');
    if (collectionMethods.socialMedia) methods.push('through social media platforms when you interact with our social media accounts');
    if (collectionMethods.paymentProcessors) methods.push('through payment processors when you make a payment for our services');

    // Build usage list
    const usages: string[] = [];
    if (dataUsage.providingServices) usages.push('providing, managing, and delivering our services to you');
    if (dataUsage.invoicingPayments) usages.push('sending invoices, processing payments, and managing billing');
    if (dataUsage.marketingNewsletters) usages.push('sending marketing communications, newsletters, and promotional material (with your consent)');
    if (dataUsage.improvingServices) usages.push('analysing usage patterns to improve our services, website, and user experience');
    if (dataUsage.legalCompliance) usages.push('complying with our legal and regulatory obligations, including tax reporting to the Australian Taxation Office (ATO)');
    if (dataUsage.customerSupport) usages.push('providing customer support and responding to your enquiries');

    // Build third-party list
    const thirdParties: string[] = [];
    if (thirdPartySharing.paymentProcessors) thirdParties.push('payment processors (such as Stripe, PayPal, or similar services) to process your payments securely');
    if (thirdPartySharing.cloudStorage) thirdParties.push('cloud storage and hosting providers to store and manage our data securely');
    if (thirdPartySharing.emailMarketing) thirdParties.push('email marketing service providers to send newsletters and marketing communications');
    if (thirdPartySharing.analytics) thirdParties.push('analytics services (such as Google Analytics) to understand how our website is used and to improve our services');
    if (thirdPartySharing.governmentBodies) thirdParties.push('government bodies and regulatory authorities (including the ATO) as required by law');
    if (thirdPartySharing.professionalAdvisors) thirdParties.push('professional advisors such as accountants, lawyers, and auditors for the purpose of obtaining professional advice');

    // Retention text
    const retentionText = retentionPeriod === 'indefinite'
      ? 'for as long as necessary to fulfil the purposes for which it was collected'
      : retentionPeriod === '7'
        ? 'for up to seven (7) years, in line with Australian Taxation Office record-keeping requirements'
        : retentionPeriod === '5'
          ? 'for up to five (5) years from the date of collection'
          : retentionPeriod === '2'
            ? 'for up to two (2) years from the date of collection'
            : 'for up to one (1) year from the date of collection';

    let sectionNum = 0;
    const section = () => {
      sectionNum++;
      return sectionNum;
    };

    let text = '';

    // Title
    text += `${'='.repeat(60)}\n`;
    text += `PRIVACY POLICY\n`;
    text += `${'='.repeat(60)}\n\n`;
    text += `${bName}${bAbn}\n`;
    text += `Last Updated: ${today}\n\n`;

    // 1. Introduction
    const introNum = section();
    text += `${introNum}. INTRODUCTION\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `${bName}${bAbn} ("we", "us", "our") operates as a ${bType}\n`;
    text += `in ${bState}, Australia.\n\n`;
    text += `We are committed to protecting the privacy of the personal\n`;
    text += `information we collect and handle. This Privacy Policy sets\n`;
    text += `out how we collect, use, store, disclose, and otherwise\n`;
    text += `handle personal information in accordance with the Privacy\n`;
    text += `Act 1988 (Cth) and the Australian Privacy Principles (APPs).\n\n`;
    text += `This policy applies to all personal information collected\n`;
    text += `through our website (${bUrl}), our services, and\n`;
    text += `any other interactions you have with us.\n\n`;
    text += `By using our website or engaging our services, you\n`;
    text += `acknowledge that you have read and understood this Privacy\n`;
    text += `Policy.\n\n`;

    // 2. Information We Collect
    const collectNum = section();
    text += `${collectNum}. INFORMATION WE COLLECT\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `We may collect and hold the following types of personal\n`;
    text += `information (as defined under the Privacy Act 1988):\n\n`;
    if (collectedData.length > 0) {
      collectedData.forEach((item, i) => {
        text += `  (${String.fromCharCode(97 + i)}) ${item};\n`;
      });
      text += `\n`;
    }
    text += `We only collect personal information that is reasonably\n`;
    text += `necessary for our business functions and activities, in\n`;
    text += `accordance with APP 3.\n\n`;

    // 3. How We Collect Information
    const howNum = section();
    text += `${howNum}. HOW WE COLLECT INFORMATION\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `We collect personal information by lawful and fair means.\n`;
    text += `We may collect your personal information:\n\n`;
    if (methods.length > 0) {
      methods.forEach((item, i) => {
        text += `  (${String.fromCharCode(97 + i)}) ${item};\n\n`;
      });
    }
    text += `Where it is reasonable and practicable to do so, we will\n`;
    text += `collect personal information directly from you (APP 3.5).\n\n`;

    // 4. How We Use Information
    const useNum = section();
    text += `${useNum}. HOW WE USE YOUR INFORMATION\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `We use the personal information we collect for the\n`;
    text += `following purposes:\n\n`;
    if (usages.length > 0) {
      usages.forEach((item, i) => {
        text += `  (${String.fromCharCode(97 + i)}) ${item};\n\n`;
      });
    }
    text += `We will not use your personal information for a purpose\n`;
    text += `other than the purpose for which it was collected, unless\n`;
    text += `you have consented, or an exception under APP 6 applies.\n\n`;
    if (dataUsage.marketingNewsletters) {
      text += `In accordance with APP 7, we will only use your personal\n`;
      text += `information for direct marketing purposes where:\n\n`;
      text += `  (i)   you have consented to receiving marketing\n`;
      text += `        communications from us;\n`;
      text += `  (ii)  we provide a simple way for you to opt out of\n`;
      text += `        receiving such communications; and\n`;
      text += `  (iii) each marketing communication includes an\n`;
      text += `        unsubscribe mechanism.\n\n`;
      text += `You may opt out of receiving marketing communications at\n`;
      text += `any time by contacting us at ${bEmail} or using the\n`;
      text += `unsubscribe link in our emails.\n\n`;
    }

    // 5. Disclosure of Information
    const discNum = section();
    text += `${discNum}. DISCLOSURE OF YOUR INFORMATION\n`;
    text += `${'─'.repeat(45)}\n\n`;
    if (thirdPartySharing.none) {
      text += `We do not share your personal information with any third\n`;
      text += `parties, except where required by law.\n\n`;
    } else {
      text += `We may disclose your personal information to the following\n`;
      text += `third parties in accordance with APP 6:\n\n`;
      if (thirdParties.length > 0) {
        thirdParties.forEach((item, i) => {
          text += `  (${String.fromCharCode(97 + i)}) ${item};\n\n`;
        });
      }
      text += `We take reasonable steps to ensure that any third party\n`;
      text += `that receives your personal information is bound by\n`;
      text += `confidentiality obligations and handles your information\n`;
      text += `in accordance with the APPs.\n\n`;
    }

    // 6. Data Storage and Security
    const secNum = section();
    text += `${secNum}. DATA STORAGE AND SECURITY\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `We take reasonable steps to protect your personal\n`;
    text += `information from misuse, interference, loss, unauthorised\n`;
    text += `access, modification, and disclosure, in accordance with\n`;
    text += `APP 11.\n\n`;
    text += `Our security measures include:\n\n`;
    text += `  (a) using secure, encrypted connections (SSL/TLS) for\n`;
    text += `      data transmission;\n`;
    text += `  (b) storing data on secure servers with access controls;\n`;
    text += `  (c) restricting access to personal information to\n`;
    text += `      authorised personnel only;\n`;
    text += `  (d) using strong passwords and multi-factor\n`;
    text += `      authentication where available; and\n`;
    text += `  (e) regularly reviewing our security practices and\n`;
    text += `      updating them as necessary.\n\n`;
    text += `While we take reasonable steps to protect your information,\n`;
    text += `no method of transmission over the internet or electronic\n`;
    text += `storage is completely secure. We cannot guarantee the\n`;
    text += `absolute security of your information.\n\n`;

    // 7. Data Retention
    const retNum = section();
    text += `${retNum}. DATA RETENTION\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `We retain your personal information ${retentionText},\n`;
    text += `unless a longer retention period is required or permitted\n`;
    text += `by law.\n\n`;
    text += `When your personal information is no longer needed for the\n`;
    text += `purposes for which it was collected, or we are no longer\n`;
    text += `required by law to retain it, we will take reasonable steps\n`;
    text += `to destroy or de-identify the information in accordance\n`;
    text += `with APP 11.2.\n\n`;
    if (retentionPeriod === '7') {
      text += `Note: The Australian Taxation Office (ATO) requires\n`;
      text += `business records, including records containing personal\n`;
      text += `information related to financial transactions, to be\n`;
      text += `retained for a minimum of five (5) years. We retain\n`;
      text += `financial records for seven (7) years to ensure compliance\n`;
      text += `with ATO requirements.\n\n`;
    }

    // 8. Your Rights (APPs)
    const rightsNum = section();
    text += `${rightsNum}. YOUR RIGHTS UNDER THE AUSTRALIAN PRIVACY\n`;
    text += `   PRINCIPLES\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `Under the Privacy Act 1988 and the APPs, you have the\n`;
    text += `following rights:\n\n`;
    text += `  (a) Access (APP 12): You have the right to request\n`;
    text += `      access to the personal information we hold about you.\n`;
    text += `      We will respond to your request within 30 days. We\n`;
    text += `      may charge a reasonable fee for providing access.\n\n`;
    text += `  (b) Correction (APP 13): You have the right to request\n`;
    text += `      that we correct any personal information we hold\n`;
    text += `      about you that is inaccurate, out of date,\n`;
    text += `      incomplete, irrelevant, or misleading. We will\n`;
    text += `      respond to your request within 30 days.\n\n`;
    text += `  (c) Anonymity (APP 2): Where it is lawful and\n`;
    text += `      practicable, you have the option of not identifying\n`;
    text += `      yourself or using a pseudonym when dealing with us.\n\n`;
    text += `  (d) Complaints: If you believe we have breached the\n`;
    text += `      APPs or handled your personal information\n`;
    text += `      inappropriately, you may lodge a complaint with us\n`;
    text += `      using the contact details below. We will investigate\n`;
    text += `      your complaint and respond within 30 days. If you\n`;
    text += `      are not satisfied with our response, you may\n`;
    text += `      escalate your complaint to the Office of the\n`;
    text += `      Australian Information Commissioner (OAIC):\n\n`;
    text += `      Office of the Australian Information Commissioner\n`;
    text += `      Website: www.oaic.gov.au\n`;
    text += `      Phone:   1300 363 992\n`;
    text += `      Email:   enquiries@oaic.gov.au\n\n`;
    text += `To exercise any of these rights, please contact us at\n`;
    text += `${bEmail}.\n\n`;

    // 9. Cookies (if selected)
    if (includeCookiePolicy) {
      const cookieNum = section();
      text += `${cookieNum}. COOKIES AND TRACKING TECHNOLOGIES\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `Our website may use cookies and similar tracking\n`;
      text += `technologies to enhance your browsing experience, analyse\n`;
      text += `website traffic, and understand how our website is used.\n\n`;
      text += `Types of cookies we may use:\n\n`;
      text += `  (a) Essential cookies: Required for the website to\n`;
      text += `      function properly (e.g., session cookies, security\n`;
      text += `      cookies).\n\n`;
      text += `  (b) Analytics cookies: Used to collect information\n`;
      text += `      about how visitors use our website, including which\n`;
      text += `      pages are visited most often and how visitors move\n`;
      text += `      around the site. We use this information to improve\n`;
      text += `      our website. These cookies do not collect\n`;
      text += `      information that identifies individual visitors.\n\n`;
      text += `  (c) Functional cookies: Used to remember your\n`;
      text += `      preferences and provide enhanced features.\n\n`;
      text += `You can control cookies through your browser settings.\n`;
      text += `Most browsers allow you to refuse cookies, delete\n`;
      text += `existing cookies, and set preferences for certain\n`;
      text += `websites. Please note that disabling cookies may affect\n`;
      text += `the functionality of our website.\n\n`;
      if (thirdPartySharing.analytics) {
        text += `We use Google Analytics to analyse website usage. Google\n`;
        text += `Analytics uses cookies to collect information about your\n`;
        text += `use of our website. This information is transmitted to\n`;
        text += `and stored by Google on servers that may be located\n`;
        text += `outside Australia. For more information about how Google\n`;
        text += `uses this data, visit:\n`;
        text += `https://policies.google.com/privacy\n\n`;
        text += `You can opt out of Google Analytics by installing the\n`;
        text += `Google Analytics opt-out browser add-on, available at:\n`;
        text += `https://tools.google.com/dlpage/gaoptout\n\n`;
      }
    }

    // 10. International Transfers (if selected)
    if (transfersOverseas) {
      const intNum = section();
      text += `${intNum}. INTERNATIONAL DATA TRANSFERS\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `In accordance with APP 8, we may transfer your personal\n`;
      text += `information to recipients located outside Australia`;
      if (overseasCountries) {
        text += `,\nincluding recipients in ${overseasCountries}`;
      }
      text += `.\n\n`;
      text += `Before transferring personal information overseas, we\n`;
      text += `will take reasonable steps to ensure that the overseas\n`;
      text += `recipient:\n\n`;
      text += `  (a) complies with the APPs or is subject to a law or\n`;
      text += `      binding scheme that is substantially similar to\n`;
      text += `      the APPs; or\n\n`;
      text += `  (b) has consented to handling your information in\n`;
      text += `      accordance with the APPs.\n\n`;
      text += `We remain accountable for any overseas recipient's\n`;
      text += `handling of your personal information under the Privacy\n`;
      text += `Act 1988.\n\n`;
    }

    // 11. GDPR (if selected)
    if (gdprCompliance) {
      const gdprNum = section();
      text += `${gdprNum}. ADDITIONAL RIGHTS FOR EUROPEAN UNION\n`;
      text += `   RESIDENTS (GDPR)\n`;
      text += `${'─'.repeat(45)}\n\n`;
      text += `If you are a resident of the European Union (EU) or\n`;
      text += `European Economic Area (EEA), you may have additional\n`;
      text += `rights under the General Data Protection Regulation\n`;
      text += `(GDPR), including:\n\n`;
      text += `  (a) Right to access: You can request a copy of the\n`;
      text += `      personal data we hold about you.\n\n`;
      text += `  (b) Right to rectification: You can request that we\n`;
      text += `      correct inaccurate or incomplete personal data.\n\n`;
      text += `  (c) Right to erasure ("right to be forgotten"): You\n`;
      text += `      can request that we delete your personal data in\n`;
      text += `      certain circumstances.\n\n`;
      text += `  (d) Right to restrict processing: You can request\n`;
      text += `      that we restrict the processing of your personal\n`;
      text += `      data in certain circumstances.\n\n`;
      text += `  (e) Right to data portability: You can request a copy\n`;
      text += `      of your personal data in a structured, commonly\n`;
      text += `      used, machine-readable format.\n\n`;
      text += `  (f) Right to object: You can object to the processing\n`;
      text += `      of your personal data for direct marketing\n`;
      text += `      purposes or where processing is based on\n`;
      text += `      legitimate interests.\n\n`;
      text += `  (g) Right to withdraw consent: Where we process your\n`;
      text += `      data based on your consent, you can withdraw that\n`;
      text += `      consent at any time.\n\n`;
      text += `Our lawful basis for processing your personal data under\n`;
      text += `the GDPR may include:\n\n`;
      text += `  - Performance of a contract (providing our services)\n`;
      text += `  - Legitimate interests (improving our services)\n`;
      text += `  - Consent (marketing communications)\n`;
      text += `  - Legal obligation (tax and regulatory compliance)\n\n`;
      text += `To exercise any of these rights, please contact us at\n`;
      text += `${bEmail}. We will respond within 30 days.\n\n`;
    }

    // 12. Changes to Policy
    const changeNum = section();
    text += `${changeNum}. CHANGES TO THIS PRIVACY POLICY\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `We may update this Privacy Policy from time to time to\n`;
    text += `reflect changes in our practices, services, or legal\n`;
    text += `requirements. When we make changes, we will update the\n`;
    text += `"Last Updated" date at the top of this policy.\n\n`;
    text += `We encourage you to review this Privacy Policy periodically\n`;
    text += `to stay informed about how we protect your personal\n`;
    text += `information.\n\n`;
    text += `If we make significant changes that affect your rights or\n`;
    text += `how we use your personal information, we will take\n`;
    text += `reasonable steps to notify you, such as by posting a\n`;
    text += `prominent notice on our website or sending you an email.\n\n`;

    // 13. Contact Information
    const contactNum = section();
    text += `${contactNum}. CONTACT INFORMATION\n`;
    text += `${'─'.repeat(45)}\n\n`;
    text += `If you have any questions, concerns, or requests regarding\n`;
    text += `this Privacy Policy or our handling of your personal\n`;
    text += `information, please contact us:\n\n`;
    text += `  Business:  ${bName}\n`;
    if (business.abn) {
      text += `  ABN:       ${business.abn}\n`;
    }
    text += `  Email:     ${bEmail}\n`;
    text += `  Website:   ${bUrl}\n`;
    text += `  Location:  ${bState}, Australia\n\n`;
    text += `For privacy complaints that are not resolved to your\n`;
    text += `satisfaction, you can contact the Office of the Australian\n`;
    text += `Information Commissioner (OAIC):\n\n`;
    text += `  Website:   www.oaic.gov.au\n`;
    text += `  Phone:     1300 363 992\n`;
    text += `  Email:     enquiries@oaic.gov.au\n`;
    text += `  Post:      GPO Box 5218, Sydney NSW 2001\n\n`;

    // Disclaimer
    text += `${'─'.repeat(60)}\n`;
    text += `DISCLAIMER: This privacy policy is a template generated by\n`;
    text += `InvoiceFlow and is provided for informational purposes only.\n`;
    text += `It does not constitute legal advice. You should review this\n`;
    text += `policy carefully and seek independent legal advice before\n`;
    text += `relying on it. InvoiceFlow accepts no liability for any loss\n`;
    text += `or damage arising from the use of this template.\n`;
    text += `${'─'.repeat(60)}\n`;

    return text;
  }, [
    business,
    dataCollection,
    otherDataDescription,
    collectionMethods,
    dataUsage,
    thirdPartySharing,
    transfersOverseas,
    overseasCountries,
    gdprCompliance,
    includeCookiePolicy,
    retentionPeriod,
  ]);

  const handleGenerate = () => {
    setGenerated(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';
  const selectClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/25 transition-all text-sm appearance-none';

  // Step navigation
  const canGoNext = () => {
    if (step === 1) return true;
    if (step === 2) return true;
    if (step === 3) return true;
    return false;
  };

  // Summaries for Step 4
  const getSelectedDataLabels = () =>
    DATA_COLLECTION_LABELS.filter((d) => dataCollection[d.key]).map((d) => d.label);
  const getSelectedMethodLabels = () =>
    COLLECTION_METHOD_LABELS.filter((m) => collectionMethods[m.key]).map((m) => m.label);
  const getSelectedUsageLabels = () =>
    DATA_USAGE_LABELS.filter((u) => dataUsage[u.key]).map((u) => u.label);
  const getSelectedSharingLabels = () =>
    THIRD_PARTY_LABELS.filter((t) => thirdPartySharing[t.key]).map((t) => t.label);

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {[1, 2, 3, 4].map((s) => (
          <button
            key={s}
            onClick={() => {
              if (s < step || (s === step)) return;
              if (s <= step + 1) setStep(s);
            }}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all ${
              s === step
                ? 'bg-gradient-to-r from-teal-400/20 to-cyan-500/20 border border-teal-400/40 text-teal-300'
                : s < step
                  ? 'bg-teal-400/10 border border-teal-400/20 text-teal-400 cursor-pointer hover:bg-teal-400/20'
                  : 'bg-white/5 border border-white/10 text-slate-500'
            }`}
          >
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
              s === step
                ? 'bg-teal-400/30 text-teal-300'
                : s < step
                  ? 'bg-teal-400/20 text-teal-400'
                  : 'bg-white/10 text-slate-500'
            }`}>
              {s < step ? (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </span>
            <span className="hidden sm:inline">
              {s === 1 ? 'Business' : s === 2 ? 'Data Collection' : s === 3 ? 'Usage & Sharing' : 'Review'}
            </span>
          </button>
        ))}
      </div>

      {/* Step 1: Business Details */}
      {step === 1 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-6">Business Details</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className={labelClass}>Business Name</label>
              <input
                type="text"
                value={business.businessName}
                onChange={(e) => updateBusiness('businessName', e.target.value)}
                className={inputClass}
                placeholder="e.g. Sarah Mitchell Consulting"
              />
            </div>
            <div>
              <label className={labelClass}>ABN <span className="text-slate-500">(optional)</span></label>
              <input
                type="text"
                value={business.abn}
                onChange={(e) => updateBusiness('abn', e.target.value)}
                className={inputClass}
                placeholder="e.g. 12 345 678 901"
              />
            </div>
            <div>
              <label className={labelClass}>Business Type</label>
              <select
                value={business.businessType}
                onChange={(e) => updateBusiness('businessType', e.target.value)}
                className={selectClass}
              >
                {BUSINESS_TYPES.map((bt) => (
                  <option key={bt.value} value={bt.value} className="bg-[#0B1120]">
                    {bt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Website URL</label>
              <input
                type="text"
                value={business.websiteUrl}
                onChange={(e) => updateBusiness('websiteUrl', e.target.value)}
                className={inputClass}
                placeholder="e.g. https://www.yourbusiness.com.au"
              />
            </div>
            <div>
              <label className={labelClass}>Contact Email</label>
              <input
                type="email"
                value={business.contactEmail}
                onChange={(e) => updateBusiness('contactEmail', e.target.value)}
                className={inputClass}
                placeholder="e.g. privacy@yourbusiness.com.au"
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>State / Territory</label>
              <select
                value={business.state}
                onChange={(e) => updateBusiness('state', e.target.value)}
                className={selectClass}
              >
                {STATES.map((s) => (
                  <option key={s.value} value={s.value} className="bg-[#0B1120]">
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Data Collection */}
      {step === 2 && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-2">What Personal Information Do You Collect?</h3>
            <p className="text-sm text-slate-400 mb-6">
              Select all types of personal information your business collects from clients, customers, or website visitors.
            </p>
            <div className="space-y-2">
              {DATA_COLLECTION_LABELS.map((item) => (
                <Checkbox
                  key={item.key}
                  checked={dataCollection[item.key]}
                  onChange={() => toggleDataCollection(item.key)}
                  label={item.label}
                />
              ))}
            </div>
            {dataCollection.other && (
              <div className="mt-4">
                <label className={labelClass}>Specify other information collected</label>
                <input
                  type="text"
                  value={otherDataDescription}
                  onChange={(e) => setOtherDataDescription(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Health information, biometric data"
                />
              </div>
            )}
          </div>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-2">How Do You Collect Data?</h3>
            <p className="text-sm text-slate-400 mb-6">
              Select the methods you use to collect personal information.
            </p>
            <div className="space-y-2">
              {COLLECTION_METHOD_LABELS.map((item) => (
                <Checkbox
                  key={item.key}
                  checked={collectionMethods[item.key]}
                  onChange={() => toggleCollectionMethod(item.key)}
                  label={item.label}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Step 3: Data Usage & Sharing */}
      {step === 3 && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-2">How Do You Use Personal Information?</h3>
            <p className="text-sm text-slate-400 mb-6">
              Select the purposes for which you use the personal information you collect.
            </p>
            <div className="space-y-2">
              {DATA_USAGE_LABELS.map((item) => (
                <Checkbox
                  key={item.key}
                  checked={dataUsage[item.key]}
                  onChange={() => toggleDataUsage(item.key)}
                  label={item.label}
                />
              ))}
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-2">Do You Share Data With Third Parties?</h3>
            <p className="text-sm text-slate-400 mb-6">
              Select which third parties you share personal information with. Select &ldquo;None&rdquo; if you do not share data.
            </p>
            <div className="space-y-2">
              {THIRD_PARTY_LABELS.map((item) => (
                <Checkbox
                  key={item.key}
                  checked={thirdPartySharing[item.key]}
                  onChange={() => toggleThirdParty(item.key)}
                  label={item.label}
                />
              ))}
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Do You Transfer Data Overseas?</h3>
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => setTransfersOverseas(true)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  transfersOverseas
                    ? 'bg-gradient-to-r from-teal-400/20 to-cyan-500/20 border border-teal-400/40 text-teal-300'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => setTransfersOverseas(false)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  !transfersOverseas
                    ? 'bg-gradient-to-r from-teal-400/20 to-cyan-500/20 border border-teal-400/40 text-teal-300'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                No
              </button>
            </div>
            {transfersOverseas && (
              <div>
                <label className={labelClass}>Which countries?</label>
                <input
                  type="text"
                  value={overseasCountries}
                  onChange={(e) => setOverseasCountries(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. United States, United Kingdom, Singapore"
                />
              </div>
            )}
          </div>
        </>
      )}

      {/* Step 4: Review & Generate */}
      {step === 4 && !generated && (
        <>
          {/* Summary */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Review Your Selections</h3>
            <div className="space-y-6">
              {/* Business Summary */}
              <div>
                <h4 className="text-sm font-semibold text-teal-400 mb-2">Business Details</h4>
                <div className="bg-white/5 rounded-xl p-4 space-y-1.5 text-sm">
                  <p className="text-slate-300"><span className="text-slate-500">Name:</span> {business.businessName || 'Not provided'}</p>
                  {business.abn && <p className="text-slate-300"><span className="text-slate-500">ABN:</span> {business.abn}</p>}
                  <p className="text-slate-300"><span className="text-slate-500">Type:</span> {BUSINESS_TYPES.find((t) => t.value === business.businessType)?.label}</p>
                  <p className="text-slate-300"><span className="text-slate-500">Website:</span> {business.websiteUrl || 'Not provided'}</p>
                  <p className="text-slate-300"><span className="text-slate-500">Email:</span> {business.contactEmail || 'Not provided'}</p>
                  <p className="text-slate-300"><span className="text-slate-500">State:</span> {STATE_FULL_NAMES[business.state]}</p>
                </div>
              </div>

              {/* Data Collection Summary */}
              <div>
                <h4 className="text-sm font-semibold text-teal-400 mb-2">Data Collection ({selectedDataCount} types)</h4>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex flex-wrap gap-2">
                    {getSelectedDataLabels().map((label) => (
                      <span key={label} className="px-2.5 py-1 bg-teal-400/10 border border-teal-400/20 rounded-lg text-xs text-teal-300">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Collection Methods Summary */}
              <div>
                <h4 className="text-sm font-semibold text-teal-400 mb-2">Collection Methods ({selectedMethodCount} methods)</h4>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex flex-wrap gap-2">
                    {getSelectedMethodLabels().map((label) => (
                      <span key={label} className="px-2.5 py-1 bg-teal-400/10 border border-teal-400/20 rounded-lg text-xs text-teal-300">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data Usage Summary */}
              <div>
                <h4 className="text-sm font-semibold text-teal-400 mb-2">Data Usage ({selectedUsageCount} purposes)</h4>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex flex-wrap gap-2">
                    {getSelectedUsageLabels().map((label) => (
                      <span key={label} className="px-2.5 py-1 bg-teal-400/10 border border-teal-400/20 rounded-lg text-xs text-teal-300">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Third-Party Sharing Summary */}
              <div>
                <h4 className="text-sm font-semibold text-teal-400 mb-2">Third-Party Sharing ({selectedSharingCount} parties)</h4>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex flex-wrap gap-2">
                    {getSelectedSharingLabels().map((label) => (
                      <span key={label} className="px-2.5 py-1 bg-teal-400/10 border border-teal-400/20 rounded-lg text-xs text-teal-300">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Overseas Transfers */}
              {transfersOverseas && (
                <div>
                  <h4 className="text-sm font-semibold text-teal-400 mb-2">International Transfers</h4>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-sm text-slate-300">{overseasCountries || 'Countries not specified'}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Options */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-6">Additional Options</h3>
            <div className="space-y-4">
              {/* GDPR Toggle */}
              <div className="flex items-start gap-3">
                <button
                  onClick={() => setGdprCompliance(!gdprCompliance)}
                  className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 mt-0.5 ${
                    gdprCompliance ? 'bg-teal-400' : 'bg-white/10'
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      gdprCompliance ? 'translate-x-[22px]' : 'translate-x-0.5'
                    }`}
                  />
                </button>
                <div>
                  <p className="text-sm font-medium text-white">GDPR Compliance Section</p>
                  <p className="text-xs text-slate-500 mt-0.5">Include additional rights for EU/EEA residents under the General Data Protection Regulation</p>
                </div>
              </div>

              {/* Cookie Policy Toggle */}
              <div className="flex items-start gap-3">
                <button
                  onClick={() => setIncludeCookiePolicy(!includeCookiePolicy)}
                  className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 mt-0.5 ${
                    includeCookiePolicy ? 'bg-teal-400' : 'bg-white/10'
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      includeCookiePolicy ? 'translate-x-[22px]' : 'translate-x-0.5'
                    }`}
                  />
                </button>
                <div>
                  <p className="text-sm font-medium text-white">Cookie Policy Section</p>
                  <p className="text-xs text-slate-500 mt-0.5">Include a section about cookies and tracking technologies on your website</p>
                </div>
              </div>

              {/* Data Retention Period */}
              <div className="pt-2">
                <label className={labelClass}>Data Retention Period</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {RETENTION_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setRetentionPeriod(option.value)}
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        retentionPeriod === option.value
                          ? 'bg-gradient-to-r from-teal-400/30 to-cyan-500/30 border border-teal-400/40 text-teal-300'
                          : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                {retentionPeriod === '7' && (
                  <p className="text-xs text-slate-500 mt-2">
                    Recommended: The ATO requires financial records to be kept for at least 5 years. 7 years provides a compliance buffer.
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Navigation Buttons */}
      {!generated && (
        <div className="flex items-center justify-between">
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
              step === 1
                ? 'opacity-0 pointer-events-none'
                : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
            }`}
          >
            Back
          </button>

          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={!canGoNext()}
              className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold rounded-xl px-6 py-3 hover:from-teal-300 hover:to-cyan-400 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next Step
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-300 hover:to-cyan-400 transition-all text-lg"
            >
              Generate Privacy Policy
            </button>
          )}
        </div>
      )}

      {/* Generated Output */}
      {generated && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Privacy Policy Preview</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 font-medium">
                Australian Privacy Act Compliant
              </span>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 font-mono text-sm whitespace-pre-wrap text-slate-300 leading-relaxed max-h-[600px] overflow-y-auto">
              {generatedText}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <button
                onClick={handleCopy}
                className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-300 hover:to-cyan-400 transition-all"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
              </button>
              <button
                onClick={() => {
                  setGenerated(false);
                  setStep(1);
                }}
                className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 transition-all"
              >
                Start Over
              </button>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-teal-400/5 border border-teal-400/20 rounded-2xl p-6">
            <h4 className="text-teal-300 font-semibold mb-2">Before You Publish</h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>Review every section carefully and ensure it accurately reflects your actual data practices. Do not publish a policy that does not match what you do.</li>
              <li>This is a template, not legal advice. For businesses handling sensitive information (health, financial, children&apos;s data), have a solicitor review the policy before publication.</li>
              <li>Add a link to your privacy policy in your website footer, on every page that collects data (contact forms, sign-up pages), and in your email signature.</li>
              <li>Review and update your privacy policy at least annually, or whenever your data practices change (new tools, new services, new data types).</li>
              <li>Keep a record of all versions of your privacy policy with dates, so you can demonstrate compliance history if needed.</li>
            </ul>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/contract-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-300 transition-colors">
                  Contract Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate full service agreements with scope and payment terms
                </p>
              </a>
              <a
                href="/tools/nda-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-300 transition-colors">
                  NDA Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate non-disclosure agreements for client engagements
                </p>
              </a>
              <a
                href="/tools/invoice-generator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-300 transition-colors">
                  Invoice Generator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Create professional invoices for your projects
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool generates privacy policy templates for Australian freelancers and small businesses.
              The generated privacy policy is a template — review and customise it before publishing. This does not
              constitute legal advice. For complex data handling or regulated industries, seek independent legal counsel.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
