'use client';

import { useState, useRef } from 'react';

/* ---- Types ---- */

type Step = 1 | 2 | 3 | 4;

type ServiceType =
  | 'web_design'
  | 'development'
  | 'copywriting'
  | 'graphic_design'
  | 'photography'
  | 'video_production'
  | 'social_media'
  | 'consulting'
  | 'marketing'
  | 'virtual_assistant'
  | 'other';

type Scenario =
  | 'project_completion'
  | 'positive_feedback'
  | 'milestone_achievement'
  | 'quarterly_checkin'
  | 'casual_conversation'
  | 're_engagement';

type Tone = 'warm' | 'professional' | 'direct';

type IncentiveType =
  | 'none'
  | 'discount_referrer'
  | 'discount_referred'
  | 'discount_both'
  | 'custom';

interface UserDetails {
  yourName: string;
  businessName: string;
  serviceType: ServiceType | '';
  clientFirstName: string;
  clientCompany: string;
  projectDescription: string;
}

interface ScenarioTiming {
  scenario: Scenario;
}

interface ToneIncentive {
  tone: Tone;
  incentiveType: IncentiveType;
  customIncentive: string;
  referralType: string;
}

/* ---- Constants ---- */

const SERVICE_TYPE_LABELS: Record<ServiceType, string> = {
  web_design: 'Web Design',
  development: 'Development',
  copywriting: 'Copywriting',
  graphic_design: 'Graphic Design',
  photography: 'Photography',
  video_production: 'Video Production',
  social_media: 'Social Media',
  consulting: 'Consulting',
  marketing: 'Marketing',
  virtual_assistant: 'Virtual Assistant',
  other: 'Other',
};

const SCENARIO_OPTIONS: {
  value: Scenario;
  label: string;
  description: string;
  tip: string;
}[] = [
  {
    value: 'project_completion',
    label: 'Project Completion',
    description: 'Just finished a project and the client is happy',
    tip: 'This is the single best moment to ask. Satisfaction is at its peak, your work is fresh in their mind, and the conversation is natural.',
  },
  {
    value: 'positive_feedback',
    label: 'After Positive Feedback',
    description: 'Client just gave you great feedback or a testimonial',
    tip: "When a client proactively tells you they're happy, they've already opened the door. The referral ask becomes a natural extension of their praise.",
  },
  {
    value: 'milestone_achievement',
    label: 'Milestone Achievement',
    description:
      'Hit a measurable result (e.g., 50% more leads, launched on time)',
    tip: 'Data-backed asks are the most powerful. When you can point to a specific result, the client has something concrete to share with their contact.',
  },
  {
    value: 'quarterly_checkin',
    label: 'Quarterly / Annual Check-In',
    description: 'Regular relationship maintenance touchpoint',
    tip: "Weaving a referral ask into a scheduled review feels natural and professional. It shows you're thinking about the relationship long-term.",
  },
  {
    value: 'casual_conversation',
    label: 'Casual Conversation',
    description: 'Client mentioned they know someone who needs help',
    tip: "The client has already identified a need and connected it to your services. All you have to do is make the introduction easy for them.",
  },
  {
    value: 're_engagement',
    label: 'Re-engagement',
    description:
      "Reaching out to a past client you haven't worked with recently",
    tip: "Past clients who had a great experience are an untapped goldmine. Reconnecting shows you value the relationship, and the referral ask feels like a bonus, not the main purpose.",
  },
];

const TONE_OPTIONS: {
  value: Tone;
  label: string;
  description: string;
  preview: string;
}[] = [
  {
    value: 'warm',
    label: 'Warm & Personal',
    description: 'Conversational, relationship-focused',
    preview:
      '"Hey [name], I loved working on this project with you and your team..."',
  },
  {
    value: 'professional',
    label: 'Professional',
    description: 'Polished but friendly, business-appropriate',
    preview:
      '"Dear [name], Thank you for the opportunity to work together on..."',
  },
  {
    value: 'direct',
    label: 'Direct',
    description: 'Confident, brief, to-the-point',
    preview:
      '"Hi [name], Quick question — do you know anyone who could use..."',
  },
];

const INCENTIVE_OPTIONS: {
  value: IncentiveType;
  label: string;
  description: string;
}[] = [
  {
    value: 'none',
    label: 'No incentive',
    description: 'Just a genuine ask',
  },
  {
    value: 'discount_referrer',
    label: 'Discount for you',
    description: '10% off your next project',
  },
  {
    value: 'discount_referred',
    label: 'Discount for them',
    description: "I'll give them 10% off their first project",
  },
  {
    value: 'discount_both',
    label: 'Both parties',
    description: 'You both get 10% off',
  },
  {
    value: 'custom',
    label: 'Custom incentive',
    description: 'Define your own offer',
  },
];

/* ---- Step Indicator ---- */

function StepIndicator({ step }: { step: Step }) {
  const steps = [
    { num: 1, label: 'Details' },
    { num: 2, label: 'Scenario' },
    { num: 3, label: 'Tone' },
    { num: 4, label: 'Email' },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step > s.num
                  ? 'bg-violet-500 text-white'
                  : step === s.num
                  ? 'bg-gradient-to-br from-violet-400 to-purple-500 text-white ring-4 ring-violet-400/20'
                  : 'bg-white/10 text-slate-500'
              }`}
            >
              {step > s.num ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                s.num
              )}
            </div>
            <span
              className={`text-xs mt-1.5 font-medium whitespace-nowrap ${
                step === s.num
                  ? 'text-violet-400'
                  : step > s.num
                  ? 'text-slate-400'
                  : 'text-slate-600'
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-10 sm:w-16 h-0.5 mb-5 mx-1.5 transition-all ${
                step > s.num ? 'bg-violet-500' : 'bg-white/10'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ---- Field Components ---- */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-sm text-slate-300 font-medium mb-1.5">
      {children}
    </label>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  hint,
  optional,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hint?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {optional && (
          <span className="text-slate-500 font-normal ml-1">(optional)</span>
        )}
      </Label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
      />
      {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
    </div>
  );
}

function SelectField<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T | '';
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all appearance-none"
      >
        <option value="" className="bg-slate-900">
          Select...
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-slate-900">
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ---- Email Generator ---- */

function generateSubjectLine(
  details: UserDetails,
  scenario: Scenario,
  tone: Tone
): string {
  const name = details.clientFirstName || 'there';

  switch (scenario) {
    case 'project_completion':
      if (tone === 'warm')
        return `${name}, a quick favour after our project together`;
      if (tone === 'direct') return `Quick question, ${name}`;
      return `A small request following our ${details.projectDescription || 'project'}`;
    case 'positive_feedback':
      if (tone === 'warm')
        return `Thanks for the kind words, ${name} — and a quick ask`;
      if (tone === 'direct') return `Appreciate the feedback, ${name} — quick question`;
      return `Thank you for your feedback, ${name} — one more thing`;
    case 'milestone_achievement':
      if (tone === 'warm')
        return `Great results, ${name}! Know anyone who'd want the same?`;
      if (tone === 'direct') return `${name} — sharing the results + a quick ask`;
      return `Celebrating your results, ${name} — and a small request`;
    case 'quarterly_checkin':
      if (tone === 'warm') return `Checking in, ${name} — how's everything going?`;
      if (tone === 'direct') return `Quick check-in + a question, ${name}`;
      return `Quarterly check-in and a small request, ${name}`;
    case 'casual_conversation':
      if (tone === 'warm')
        return `Following up on our conversation, ${name}`;
      if (tone === 'direct') return `About the person you mentioned, ${name}`;
      return `Following up on your mention, ${name}`;
    case 're_engagement':
      if (tone === 'warm') return `Been a while, ${name} — hope you're well!`;
      if (tone === 'direct') return `Quick hello and a question, ${name}`;
      return `Reconnecting and a small request, ${name}`;
    default:
      return `A request from ${details.yourName || 'me'}`;
  }
}

function generateEmailBody(
  details: UserDetails,
  scenario: Scenario,
  toneIncentive: ToneIncentive
): string {
  const { tone, incentiveType, customIncentive, referralType } = toneIncentive;
  const clientName = details.clientFirstName || 'there';
  const yourName = details.yourName || '[Your Name]';
  const businessName = details.businessName || '';
  const serviceLabel = details.serviceType
    ? SERVICE_TYPE_LABELS[details.serviceType].toLowerCase()
    : 'services';
  const project = details.projectDescription || 'our recent project';
  const clientCompany = details.clientCompany || '';

  // Greeting
  let greeting = '';
  if (tone === 'warm') {
    greeting = `Hey ${clientName},\n\n`;
  } else if (tone === 'direct') {
    greeting = `Hi ${clientName},\n\n`;
  } else {
    greeting = `Dear ${clientName},\n\n`;
  }

  // Opening (scenario-based)
  let opening = '';
  switch (scenario) {
    case 'project_completion':
      if (tone === 'warm') {
        opening = `I really enjoyed working on the ${project}${clientCompany ? ` with ${clientCompany}` : ''}. It was a great collaboration, and I'm proud of what we put together.\n\n`;
      } else if (tone === 'direct') {
        opening = `Now that the ${project} is wrapped up${clientCompany ? ` for ${clientCompany}` : ''}, I wanted to reach out with a quick question.\n\n`;
      } else {
        opening = `Thank you for the opportunity to work on the ${project}${clientCompany ? ` for ${clientCompany}` : ''}. It was a pleasure collaborating with you, and I hope you're happy with the results.\n\n`;
      }
      break;
    case 'positive_feedback':
      if (tone === 'warm') {
        opening = `Your feedback on the ${project} absolutely made my day. It means a lot to know the work resonated with you${clientCompany ? ` and the team at ${clientCompany}` : ''}.\n\n`;
      } else if (tone === 'direct') {
        opening = `Really appreciate the positive feedback on the ${project}. Glad it hit the mark.\n\n`;
      } else {
        opening = `Thank you for taking the time to share your feedback on the ${project}. It's genuinely rewarding to know the work delivered the value you were looking for${clientCompany ? ` at ${clientCompany}` : ''}.\n\n`;
      }
      break;
    case 'milestone_achievement':
      if (tone === 'warm') {
        opening = `I wanted to share some exciting news — the ${project} has been delivering some fantastic results${clientCompany ? ` for ${clientCompany}` : ''}. It's great to see the hard work paying off!\n\n`;
      } else if (tone === 'direct') {
        opening = `Quick update: the ${project} is producing strong results${clientCompany ? ` for ${clientCompany}` : ''}. The numbers speak for themselves.\n\n`;
      } else {
        opening = `I'm pleased to report that the ${project}${clientCompany ? ` for ${clientCompany}` : ''} has reached a significant milestone. The results we're seeing validate the approach we took, and I'm confident the momentum will continue.\n\n`;
      }
      break;
    case 'quarterly_checkin':
      if (tone === 'warm') {
        opening = `It's been a little while since we last caught up, and I wanted to check in and see how everything is going${clientCompany ? ` at ${clientCompany}` : ''}. I hope the ${project} is still delivering value for you.\n\n`;
      } else if (tone === 'direct') {
        opening = `Time for a quick check-in. How's the ${project} performing${clientCompany ? ` at ${clientCompany}` : ''}? Anything I can help with?\n\n`;
      } else {
        opening = `As part of my regular practice of staying connected with valued clients, I wanted to reach out and see how things are progressing${clientCompany ? ` at ${clientCompany}` : ''} since we completed the ${project}.\n\n`;
      }
      break;
    case 'casual_conversation':
      if (tone === 'warm') {
        opening = `Following up on our recent conversation — you mentioned knowing someone who might need help with ${serviceLabel}. I'd love to connect with them if you think it'd be a good fit.\n\n`;
      } else if (tone === 'direct') {
        opening = `You mentioned someone in your network who could use help with ${serviceLabel}. I'd be keen to chat with them.\n\n`;
      } else {
        opening = `I'm following up on something you mentioned in our recent conversation — that you know someone who may be looking for ${serviceLabel} support. I'd welcome the opportunity to connect with them.\n\n`;
      }
      break;
    case 're_engagement':
      if (tone === 'warm') {
        opening = `It's been a while since the ${project}${clientCompany ? ` with ${clientCompany}` : ''}, and I've been thinking about how well that went. I hope things have been going brilliantly for you since then.\n\n`;
      } else if (tone === 'direct') {
        opening = `Hope all is well. It's been a while since the ${project}${clientCompany ? ` with ${clientCompany}` : ''}, and I wanted to reconnect.\n\n`;
      } else {
        opening = `I hope this message finds you well. It's been some time since we worked together on the ${project}${clientCompany ? ` for ${clientCompany}` : ''}, and I wanted to reconnect and see how things have progressed.\n\n`;
      }
      break;
  }

  // The referral ask
  let ask = '';
  const specificType = referralType
    ? referralType
    : `anyone who could benefit from ${serviceLabel}`;

  if (scenario === 'casual_conversation') {
    // Already covered in opening — lighter ask
    if (tone === 'warm') {
      ask = `If you're comfortable making an introduction, I'd really appreciate it. No pressure at all — even just passing along my details would be great.\n\n`;
    } else if (tone === 'direct') {
      ask = `Would you be open to making an intro? Happy to take it from there.\n\n`;
    } else {
      ask = `If you feel comfortable making an introduction, I would greatly appreciate it. Alternatively, feel free to share my contact details and I'll take it from there.\n\n`;
    }
  } else {
    if (tone === 'warm') {
      ask = `I'm reaching out because I'm looking to work with more people like you. If you happen to know ${specificType}, I'd be so grateful for an introduction. Even a quick "hey, you should talk to ${yourName}" goes a long way.\n\n`;
    } else if (tone === 'direct') {
      ask = `Quick ask: do you know ${specificType}? If so, I'd appreciate an introduction. A quick email intro or forwarding my details is all it takes.\n\n`;
    } else {
      ask = `I have a small request: if you know ${specificType}, I would be grateful for an introduction. A brief email introduction or simply passing along my details would be wonderful.\n\n`;
    }
  }

  // Incentive
  let incentiveText = '';
  switch (incentiveType) {
    case 'discount_referrer':
      if (tone === 'warm') {
        incentiveText = `As a thank you, I'd love to offer you 10% off your next project with me. It's my way of saying thanks for thinking of me.\n\n`;
      } else if (tone === 'direct') {
        incentiveText = `As a thank you: 10% off your next project with me for any successful referral.\n\n`;
      } else {
        incentiveText = `As a token of appreciation, I would like to offer you a 10% discount on your next project with ${businessName || 'me'} for any referral that leads to a new engagement.\n\n`;
      }
      break;
    case 'discount_referred':
      if (tone === 'warm') {
        incentiveText = `To make it even easier, I'll give anyone you refer 10% off their first project with me. It's a nice way to kick things off.\n\n`;
      } else if (tone === 'direct') {
        incentiveText = `Anyone you refer gets 10% off their first project — makes for an easy intro.\n\n`;
      } else {
        incentiveText = `To make the introduction even more valuable, I will offer anyone you refer a 10% discount on their first project with ${businessName || 'me'}.\n\n`;
      }
      break;
    case 'discount_both':
      if (tone === 'warm') {
        incentiveText = `Here's the deal: you get 10% off your next project, and whoever you refer gets 10% off their first project too. Everyone wins!\n\n`;
      } else if (tone === 'direct') {
        incentiveText = `Referral offer: you both get 10% off — your next project and their first.\n\n`;
      } else {
        incentiveText = `I would like to extend a mutual benefit: both you and the referred party will receive a 10% discount — you on your next project, and they on their first engagement with ${businessName || 'me'}.\n\n`;
      }
      break;
    case 'custom':
      if (customIncentive.trim()) {
        if (tone === 'warm') {
          incentiveText = `As a thank you for any referral, I'd like to offer: ${customIncentive}. Just my way of saying thanks.\n\n`;
        } else if (tone === 'direct') {
          incentiveText = `Referral thank-you: ${customIncentive}.\n\n`;
        } else {
          incentiveText = `As a gesture of appreciation, I would like to offer the following for any successful referral: ${customIncentive}.\n\n`;
        }
      }
      break;
    default:
      break;
  }

  // Easy next step
  let nextStep = '';
  if (tone === 'warm') {
    nextStep = `The easiest way is to reply to this email with their name and email, or just forward this message to them. I'll take it from there — no awkwardness, I promise.\n\n`;
  } else if (tone === 'direct') {
    nextStep = `Just reply with their contact details, or forward this email. I'll handle the rest.\n\n`;
  } else {
    nextStep = `The simplest approach would be to reply with their name and contact details, or to forward this email directly to them. I will reach out personally and handle everything from there.\n\n`;
  }

  // Sign-off
  let signoff = '';
  if (tone === 'warm') {
    signoff = `Thanks so much, ${clientName}. Really appreciate you even considering it.\n\nChat soon,\n${yourName}`;
  } else if (tone === 'direct') {
    signoff = `Thanks, ${clientName}. Appreciate it.\n\nBest,\n${yourName}`;
  } else {
    signoff = `Thank you for considering this request, ${clientName}. I truly value our professional relationship.\n\nWarm regards,\n${yourName}`;
  }

  if (businessName) {
    signoff += `\n${businessName}`;
  }

  return (
    greeting + opening + ask + incentiveText + nextStep + signoff
  );
}

/* ---- Main Component ---- */

export default function ReferralRequestGenerator() {
  const [step, setStep] = useState<Step>(1);
  const [copied, setCopied] = useState(false);
  const emailRef = useRef<HTMLPreElement>(null);

  /* Step 1 state */
  const [details, setDetails] = useState<UserDetails>({
    yourName: '',
    businessName: '',
    serviceType: '',
    clientFirstName: '',
    clientCompany: '',
    projectDescription: '',
  });

  /* Step 2 state */
  const [scenarioTiming, setScenarioTiming] = useState<ScenarioTiming>({
    scenario: 'project_completion',
  });

  /* Step 3 state */
  const [toneIncentive, setToneIncentive] = useState<ToneIncentive>({
    tone: 'warm',
    incentiveType: 'none',
    customIncentive: '',
    referralType: '',
  });

  /* Validation */
  const step1Valid =
    details.yourName.trim() !== '' &&
    details.serviceType !== '' &&
    details.clientFirstName.trim() !== '' &&
    details.projectDescription.trim() !== '';

  /* Copy */
  const copyEmail = async () => {
    const subject = generateSubjectLine(
      details,
      scenarioTiming.scenario,
      toneIncentive.tone
    );
    const body = generateEmailBody(
      details,
      scenarioTiming.scenario,
      toneIncentive
    );
    const fullText = `Subject: ${subject}\n\n${body}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement('textarea');
      el.value = fullText;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  /* Print */
  const printEmail = () => {
    const subject = generateSubjectLine(
      details,
      scenarioTiming.scenario,
      toneIncentive.tone
    );
    const body = generateEmailBody(
      details,
      scenarioTiming.scenario,
      toneIncentive
    );
    const fullText = `Subject: ${subject}\n\n${body}`;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Referral Request — ${details.clientFirstName || 'Client'}</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; line-height: 1.7; padding: 40px; color: #1a1a1a; max-width: 700px; margin: 0 auto; }
              @media print { body { padding: 20px; } }
            </style>
          </head>
          <body><pre style="white-space: pre-wrap; font-family: inherit;">${fullText.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  /* Generated email */
  const subjectLine =
    step === 4
      ? generateSubjectLine(
          details,
          scenarioTiming.scenario,
          toneIncentive.tone
        )
      : '';
  const emailBody =
    step === 4
      ? generateEmailBody(details, scenarioTiming.scenario, toneIncentive)
      : '';

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <StepIndicator step={step} />

      {/* ---- STEP 1: Your Details & Client Context ---- */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">
              Your Details & Client Context
            </h2>
            <p className="text-sm text-slate-400">
              Tell us about yourself and the client you&apos;re asking for a
              referral. This personalises the email so it doesn&apos;t feel
              templated.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <InputField
              label="Your name"
              value={details.yourName}
              onChange={(v) => setDetails((p) => ({ ...p, yourName: v }))}
              placeholder="e.g. Sarah Chen"
            />
            <InputField
              label="Business name"
              value={details.businessName}
              onChange={(v) => setDetails((p) => ({ ...p, businessName: v }))}
              placeholder="e.g. Chen Creative Studio"
              optional
            />
            <SelectField
              label="Service type"
              value={details.serviceType}
              onChange={(v) => setDetails((p) => ({ ...p, serviceType: v }))}
              options={Object.entries(SERVICE_TYPE_LABELS).map(
                ([value, label]) => ({
                  value: value as ServiceType,
                  label,
                })
              )}
            />
            <InputField
              label="Client's first name"
              value={details.clientFirstName}
              onChange={(v) =>
                setDetails((p) => ({ ...p, clientFirstName: v }))
              }
              placeholder="e.g. James"
            />
            <InputField
              label="Client's company name"
              value={details.clientCompany}
              onChange={(v) =>
                setDetails((p) => ({ ...p, clientCompany: v }))
              }
              placeholder="e.g. Acme Corporation"
              optional
            />
            <InputField
              label="Project type / description"
              value={details.projectDescription}
              onChange={(v) =>
                setDetails((p) => ({ ...p, projectDescription: v }))
              }
              placeholder="e.g. website redesign, brand identity"
              hint='Brief description of the work you did together'
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setStep(2)}
              disabled={!step1Valid}
              className="px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-violet-400 hover:to-purple-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next: Scenario & Timing
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 2: Scenario & Timing ---- */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">
              Scenario & Timing
            </h2>
            <p className="text-sm text-slate-400">
              When are you asking for this referral? The scenario shapes the
              opening of your email and determines the most natural way to
              frame the request.
            </p>
          </div>

          <div className="space-y-3">
            {SCENARIO_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() =>
                  setScenarioTiming({ scenario: opt.value })
                }
                className={`w-full text-left rounded-xl border p-4 transition-all ${
                  scenarioTiming.scenario === opt.value
                    ? 'bg-violet-500/10 border-violet-500/30 ring-1 ring-violet-500/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                      scenarioTiming.scenario === opt.value
                        ? 'border-violet-400 bg-violet-400'
                        : 'border-slate-600'
                    }`}
                  >
                    {scenarioTiming.scenario === opt.value && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">
                      {opt.label}
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {opt.description}
                    </p>
                    {scenarioTiming.scenario === opt.value && (
                      <div className="mt-3 bg-violet-500/10 border border-violet-500/20 rounded-lg p-3">
                        <p className="text-xs text-violet-300">
                          <span className="font-semibold text-violet-400">
                            Why this works:{' '}
                          </span>
                          {opt.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => setStep(1)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-violet-400 hover:to-purple-400 transition-all"
            >
              Next: Tone & Incentive
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 3: Tone & Incentive ---- */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">
              Tone & Incentive
            </h2>
            <p className="text-sm text-slate-400">
              Choose how the email should feel, and optionally add a referral
              incentive to sweeten the ask.
            </p>
          </div>

          {/* Tone selector */}
          <div>
            <Label>Email tone</Label>
            <div className="space-y-3 mt-2">
              {TONE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() =>
                    setToneIncentive((p) => ({ ...p, tone: opt.value }))
                  }
                  className={`w-full text-left rounded-xl border p-4 transition-all ${
                    toneIncentive.tone === opt.value
                      ? 'bg-violet-500/10 border-violet-500/30 ring-1 ring-violet-500/20'
                      : 'bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                        toneIncentive.tone === opt.value
                          ? 'border-violet-400 bg-violet-400'
                          : 'border-slate-600'
                      }`}
                    >
                      {toneIncentive.tone === opt.value && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">
                        {opt.label}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">
                        {opt.description}
                      </p>
                      <p className="text-slate-500 text-xs mt-2 italic">
                        {opt.preview}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Incentive selector */}
          <div>
            <Label>Referral incentive</Label>
            <p className="text-xs text-slate-500 mb-2">
              Optional — adding an incentive can increase referral rates, but a
              genuine ask works well too.
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {INCENTIVE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() =>
                    setToneIncentive((p) => ({
                      ...p,
                      incentiveType: opt.value,
                    }))
                  }
                  className={`text-left rounded-lg border p-3 transition-all ${
                    toneIncentive.incentiveType === opt.value
                      ? 'bg-violet-500/10 border-violet-500/30'
                      : 'bg-white/5 border-white/10 hover:bg-white/[0.07]'
                  }`}
                >
                  <p
                    className={`text-sm font-medium ${
                      toneIncentive.incentiveType === opt.value
                        ? 'text-violet-300'
                        : 'text-white'
                    }`}
                  >
                    {opt.label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {opt.description}
                  </p>
                </button>
              ))}
            </div>
            {toneIncentive.incentiveType === 'custom' && (
              <div className="mt-3">
                <input
                  type="text"
                  value={toneIncentive.customIncentive}
                  onChange={(e) =>
                    setToneIncentive((p) => ({
                      ...p,
                      customIncentive: e.target.value,
                    }))
                  }
                  placeholder="e.g. free 1-hour consultation, $50 gift card"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                />
              </div>
            )}
          </div>

          {/* Specific referral type */}
          <InputField
            label="Specific type of referral needed"
            value={toneIncentive.referralType}
            onChange={(v) =>
              setToneIncentive((p) => ({ ...p, referralType: v }))
            }
            placeholder="e.g. other e-commerce businesses, startups needing branding"
            hint="Leave blank for a general ask, or get specific to help clients think of the right person"
            optional
          />

          <div className="flex justify-between pt-2">
            <button
              onClick={() => setStep(2)}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-violet-400 hover:to-purple-400 transition-all"
            >
              Generate Email
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 4: Generated Email ---- */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white heading-font mb-1">
              Your Referral Request Email
            </h2>
            <p className="text-sm text-slate-400">
              Ready to send. Copy the full email including the subject line, or
              print a clean version.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={copyEmail}
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
                copied
                  ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                  : 'bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-400 hover:to-purple-400'
              }`}
            >
              {copied ? (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copied to Clipboard
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy to Clipboard
                </>
              )}
            </button>
            <button
              onClick={printEmail}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print
            </button>
          </div>

          {/* Email preview */}
          <div className="bg-slate-950/50 rounded-xl border border-white/10 overflow-hidden">
            <div className="px-5 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">
                  Subject:
                </span>
                <span className="text-sm text-white font-medium">
                  {subjectLine}
                </span>
              </div>
            </div>
            <pre
              ref={emailRef}
              className="p-5 text-sm text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap break-words max-h-[500px] overflow-y-auto"
              style={{ fontFamily: 'inherit' }}
            >
              {emailBody}
            </pre>
          </div>

          {/* Statistics sidebar */}
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-5">
            <p className="text-sm text-violet-400 font-semibold mb-3">
              Did you know?
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">4x</p>
                <p className="text-xs text-slate-400 mt-1">
                  Referred clients are 4x more likely to hire
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">25%</p>
                <p className="text-xs text-slate-400 mt-1">
                  Higher project values from referred clients
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">37%</p>
                <p className="text-xs text-slate-400 mt-1">
                  Longer retention than cold leads
                </p>
              </div>
            </div>
          </div>

          {/* Tip */}
          <div className="bg-white/5 rounded-xl border border-white/10 p-5">
            <p className="text-sm text-violet-400 font-medium mb-2">
              After sending this email
            </p>
            <p className="text-sm text-slate-300">
              If the client makes a referral, thank them immediately — a short
              note or a small gesture goes a long way. If you offered an
              incentive, deliver it promptly. If you don&apos;t hear back within
              a week, don&apos;t follow up on the referral request specifically
              — instead, find another natural touchpoint to stay in their
              orbit.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => setStep(3)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Edit Tone & Incentive
            </button>
            <button
              onClick={() => setStep(2)}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Change Scenario
            </button>
            <button
              onClick={() => {
                setStep(1);
                setDetails({
                  yourName: '',
                  businessName: '',
                  serviceType: '',
                  clientFirstName: '',
                  clientCompany: '',
                  projectDescription: '',
                });
                setScenarioTiming({ scenario: 'project_completion' });
                setToneIncentive({
                  tone: 'warm',
                  incentiveType: 'none',
                  customIncentive: '',
                  referralType: '',
                });
              }}
              className="flex-1 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Start New Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
