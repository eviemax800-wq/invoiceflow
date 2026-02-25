'use client';

import { useState, useMemo } from 'react';

/* ---- Types ---- */

type ServiceType =
  | 'web-development'
  | 'design'
  | 'marketing'
  | 'copywriting'
  | 'consulting'
  | 'photography'
  | 'video-production'
  | 'general';

type SurveyFormat = 'email' | 'printable';
type SurveyLength = 'quick' | 'standard' | 'comprehensive';

interface SectionOption {
  key: string;
  label: string;
}

const SERVICE_TYPES: { value: ServiceType; label: string }[] = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'copywriting', label: 'Copywriting' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'photography', label: 'Photography' },
  { value: 'video-production', label: 'Video Production' },
  { value: 'general', label: 'General Services' },
];

const SECTIONS: SectionOption[] = [
  { key: 'overall-satisfaction', label: 'Overall satisfaction rating (1-10 scale)' },
  { key: 'communication', label: 'Communication quality' },
  { key: 'timeliness', label: 'Timeliness & deadline adherence' },
  { key: 'deliverable-quality', label: 'Quality of deliverables' },
  { key: 'value-for-money', label: 'Value for money' },
  { key: 'nps', label: 'Likelihood to recommend (NPS question)' },
  { key: 'testimonial', label: 'Testimonial request' },
  { key: 'improvement', label: 'Areas for improvement' },
  { key: 'hire-again', label: 'Would hire again' },
];

/* ---- Helpers ---- */

function getServiceLabel(type: ServiceType): string {
  return SERVICE_TYPES.find((s) => s.value === type)?.label || 'services';
}

function getServiceNoun(type: ServiceType): string {
  switch (type) {
    case 'web-development': return 'website/application';
    case 'design': return 'design work';
    case 'marketing': return 'marketing campaign';
    case 'copywriting': return 'content/copy';
    case 'consulting': return 'consulting engagement';
    case 'photography': return 'photography';
    case 'video-production': return 'video production';
    case 'general': return 'work';
  }
}

function getQuestionCount(length: SurveyLength): number {
  switch (length) {
    case 'quick': return 5;
    case 'standard': return 10;
    case 'comprehensive': return 15;
  }
}

/* ---- Component ---- */

export default function ClientFeedbackSurvey() {
  // Your details
  const [businessName, setBusinessName] = useState('');
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');

  // Survey settings
  const [serviceType, setServiceType] = useState<ServiceType>('web-development');
  const [surveyFormat, setSurveyFormat] = useState<SurveyFormat>('email');
  const [surveyLength, setSurveyLength] = useState<SurveyLength>('standard');

  // Sections to include
  const [selectedSections, setSelectedSections] = useState<string[]>(
    SECTIONS.map((s) => s.key)
  );

  // Optional extras
  const [includeFollowUp, setIncludeFollowUp] = useState(false);
  const [includeReferral, setIncludeReferral] = useState(false);
  const [customQuestion, setCustomQuestion] = useState('');

  // UI
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleSection = (key: string) => {
    setSelectedSections((prev) =>
      prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key]
    );
  };

  // Generate the survey text
  const generatedText = useMemo(() => {
    const business = businessName || '[Your Name / Business Name]';
    const client = clientName || '[Client Name]';
    const project = projectName || '[Project Name]';
    const serviceLabel = getServiceLabel(serviceType);
    const serviceNoun = getServiceNoun(serviceType);
    const maxQuestions = getQuestionCount(surveyLength);
    const isPrintable = surveyFormat === 'printable';

    const divider = isPrintable ? '═'.repeat(55) : '─'.repeat(55);
    const sectionDivider = isPrintable ? '─'.repeat(55) : '';

    let text = '';
    let questionNum = 0;

    // Header
    if (isPrintable) {
      text += `${divider}\n`;
      text += `  CLIENT FEEDBACK SURVEY\n`;
      text += `${divider}\n\n`;
    } else {
      text += `CLIENT FEEDBACK SURVEY\n`;
      text += `${divider}\n\n`;
    }

    text += `From: ${business}\n`;
    text += `To: ${client}\n`;
    text += `Project: ${project}\n`;
    text += `Service: ${serviceLabel}\n`;
    text += `Date: ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}\n\n`;

    text += `${divider}\n\n`;

    // Introduction
    text += `Dear ${client},\n\n`;
    text += `Thank you for choosing ${business} for your recent ${serviceNoun} project. Your feedback is incredibly valuable and helps me continuously improve the quality of service I provide.\n\n`;
    text += `This survey should take approximately ${surveyLength === 'quick' ? '2-3' : surveyLength === 'standard' ? '5' : '8-10'} minutes to complete. Please be as honest as possible — your candid responses help me serve you and future clients better.\n\n`;

    if (isPrintable) {
      text += `INSTRUCTIONS: For rating questions, circle or highlight your chosen number. For open-ended questions, write your response in the space provided.\n\n`;
    } else {
      text += `INSTRUCTIONS: For rating questions, reply with your chosen number. For open-ended questions, type your response below each question.\n\n`;
    }

    text += `${divider}\n\n`;

    // Build questions based on selected sections and length limit
    const addQuestion = (question: string): boolean => {
      if (questionNum >= maxQuestions) return false;
      questionNum++;
      text += `${questionNum}. ${question}\n\n`;
      return true;
    };

    const addRatingScale = (min: number, max: number, lowLabel: string, highLabel: string) => {
      if (isPrintable) {
        const numbers = Array.from({ length: max - min + 1 }, (_, i) => (min + i).toString());
        text += `   [ ${numbers.join(' ]  [ ')} ]\n`;
        text += `   ${lowLabel}${' '.repeat(Math.max(1, (max - min) * 4 - lowLabel.length - highLabel.length + 5))}${highLabel}\n\n`;
      } else {
        text += `   (${min} = ${lowLabel}, ${max} = ${highLabel})\n`;
        text += `   Your rating: ___\n\n`;
      }
    };

    const addOpenEnded = () => {
      if (isPrintable) {
        text += `   ____________________________________________________________\n`;
        text += `   ____________________________________________________________\n`;
        text += `   ____________________________________________________________\n\n`;
      } else {
        text += `   Your response:\n\n`;
      }
    };

    const addMultipleChoice = (options: string[]) => {
      options.forEach((opt) => {
        if (isPrintable) {
          text += `   [ ] ${opt}\n`;
        } else {
          text += `   - ${opt}\n`;
        }
      });
      text += '\n';
    };

    // SECTION: Overall Satisfaction
    if (selectedSections.includes('overall-satisfaction') && questionNum < maxQuestions) {
      if (sectionDivider) text += `--- OVERALL SATISFACTION ---\n\n`;
      addQuestion(`How would you rate your overall satisfaction with the ${serviceNoun} delivered for "${project}"?`);
      addRatingScale(1, 10, 'Very dissatisfied', 'Extremely satisfied');
    }

    // SECTION: Communication Quality
    if (selectedSections.includes('communication') && questionNum < maxQuestions) {
      if (sectionDivider) text += `--- COMMUNICATION ---\n\n`;
      addQuestion(`How would you rate the quality of communication throughout the project?`);
      addRatingScale(1, 10, 'Poor', 'Excellent');

      if (surveyLength !== 'quick' && questionNum < maxQuestions) {
        addQuestion(`Was I responsive enough to your questions and requests? Were updates provided at an appropriate frequency?`);
        addOpenEnded();
      }
    }

    // SECTION: Timeliness
    if (selectedSections.includes('timeliness') && questionNum < maxQuestions) {
      if (sectionDivider) text += `--- TIMELINESS & DEADLINES ---\n\n`;
      addQuestion(`How would you rate the timeliness of project delivery and adherence to deadlines?`);
      addRatingScale(1, 10, 'Significant delays', 'Always on time');

      if (surveyLength === 'comprehensive' && questionNum < maxQuestions) {
        addQuestion('Were project milestones and timelines clearly communicated from the start?');
        addMultipleChoice(['Yes, very clearly', 'Somewhat — could be improved', 'No, timelines were unclear']);
      }
    }

    // SECTION: Quality of Deliverables
    if (selectedSections.includes('deliverable-quality') && questionNum < maxQuestions) {
      if (sectionDivider) text += `--- QUALITY OF DELIVERABLES ---\n\n`;
      addQuestion(`How would you rate the quality of the final ${serviceNoun} delivered?`);
      addRatingScale(1, 10, 'Below expectations', 'Exceeded expectations');

      if (surveyLength !== 'quick' && questionNum < maxQuestions) {
        addQuestion(`Did the final deliverables meet the requirements and expectations set at the beginning of the project?`);
        addMultipleChoice(['Exceeded expectations', 'Met expectations', 'Partially met expectations', 'Did not meet expectations']);
      }
    }

    // SECTION: Value for Money
    if (selectedSections.includes('value-for-money') && questionNum < maxQuestions) {
      if (sectionDivider) text += `--- VALUE FOR MONEY ---\n\n`;
      addQuestion(`How would you rate the value for money of the ${serviceLabel.toLowerCase()} provided?`);
      addRatingScale(1, 10, 'Poor value', 'Excellent value');
    }

    // SECTION: NPS
    if (selectedSections.includes('nps') && questionNum < maxQuestions) {
      if (sectionDivider) text += `--- RECOMMENDATION ---\n\n`;
      addQuestion(`On a scale of 0-10, how likely are you to recommend ${business} to a colleague or friend?`);
      addRatingScale(0, 10, 'Not at all likely', 'Extremely likely');

      if (surveyLength !== 'quick' && questionNum < maxQuestions) {
        addQuestion(`What is the primary reason for your score above?`);
        addOpenEnded();
      }
    }

    // SECTION: Testimonial Request
    if (selectedSections.includes('testimonial') && questionNum < maxQuestions) {
      if (sectionDivider) text += `--- TESTIMONIAL ---\n\n`;
      text += `TESTIMONIAL REQUEST\n`;
      text += `If you were satisfied with the work, I would be grateful if you could provide a brief testimonial. This helps other potential clients understand the value of working together.\n\n`;
      text += `Some prompts to help you get started:\n`;
      text += `  - What was the biggest challenge ${business} helped you solve?\n`;
      text += `  - What specific results or outcomes did the ${serviceNoun} deliver?\n`;
      text += `  - What would you tell someone who is considering hiring ${business}?\n`;
      text += `  - How was the experience of working together compared to your expectations?\n\n`;
      addQuestion(`Would you be willing to provide a testimonial? If yes, please write it below:`);
      addOpenEnded();

      if (surveyLength === 'comprehensive' && questionNum < maxQuestions) {
        addQuestion(`May I use your testimonial on my website, LinkedIn profile, and/or project proposals? (I will always attribute it to you by name and company unless you prefer to remain anonymous.)`);
        addMultipleChoice(['Yes, use my full name and company', 'Yes, but first name only', 'Yes, but keep me anonymous', 'No, please do not publish']);
      }
    }

    // SECTION: Areas for Improvement
    if (selectedSections.includes('improvement') && questionNum < maxQuestions) {
      if (sectionDivider) text += `--- AREAS FOR IMPROVEMENT ---\n\n`;
      addQuestion(`Is there anything I could have done differently or better on this project?`);
      addOpenEnded();

      if (surveyLength === 'comprehensive' && questionNum < maxQuestions) {
        addQuestion(`Which area would benefit most from improvement?`);
        addMultipleChoice(['Communication', 'Technical quality', 'Project management', 'Speed of delivery', 'Pricing transparency', 'Other (please specify below)']);
        addOpenEnded();
      }
    }

    // SECTION: Would Hire Again
    if (selectedSections.includes('hire-again') && questionNum < maxQuestions) {
      if (sectionDivider) text += `--- FUTURE WORK ---\n\n`;
      addQuestion(`Would you hire ${business} again for future projects?`);
      addMultipleChoice(['Definitely yes', 'Probably yes', 'Not sure', 'Probably not', 'Definitely not']);
    }

    // OPTIONAL: Follow-up project interest
    if (includeFollowUp && questionNum < maxQuestions) {
      if (sectionDivider) text += `--- FOLLOW-UP PROJECT ---\n\n`;
      addQuestion(`Do you have any upcoming projects or additional ${serviceLabel.toLowerCase()} needs that ${business} could help with?`);
      addOpenEnded();
    }

    // OPTIONAL: Referral request
    if (includeReferral && questionNum < maxQuestions) {
      if (sectionDivider) text += `--- REFERRAL ---\n\n`;
      addQuestion(`Do you know anyone in your network who could benefit from ${serviceLabel.toLowerCase()} services? If so, I would greatly appreciate an introduction.`);
      addOpenEnded();
    }

    // OPTIONAL: Custom question
    if (customQuestion.trim() && questionNum < maxQuestions) {
      addQuestion(customQuestion.trim());
      addOpenEnded();
    }

    // Closing
    text += `${divider}\n\n`;
    text += `THANK YOU\n\n`;
    text += `Thank you for taking the time to complete this survey, ${client}. Your feedback is invaluable and directly shapes how I improve my ${serviceLabel.toLowerCase()} work.\n\n`;

    if (surveyFormat === 'email') {
      text += `HOW TO RETURN THIS SURVEY:\n`;
      text += `Simply reply to this email with your responses filled in above. You can type your answers directly after each question.\n\n`;
    } else {
      text += `HOW TO RETURN THIS SURVEY:\n`;
      text += `Please complete this form and return it via email or hand it back at our next meeting.\n\n`;
    }

    text += `If you have any additional comments or would like to discuss anything further, please don't hesitate to reach out.\n\n`;
    text += `Warm regards,\n`;
    text += `${business}\n`;

    return text;
  }, [
    businessName, clientName, projectName, serviceType, surveyFormat,
    surveyLength, selectedSections, includeFollowUp, includeReferral,
    customQuestion,
  ]);

  const handleGenerate = () => setGenerated(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/25 transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Your Details */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Your Details</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Your Name / Business Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className={inputClass}
              placeholder="e.g. Sarah Mitchell Design"
            />
          </div>
          <div>
            <label className={labelClass}>Client Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className={inputClass}
              placeholder="e.g. James at Acme Solutions"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Project Name / Description</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className={inputClass}
              placeholder="e.g. E-commerce Website Redesign"
            />
          </div>
        </div>
      </div>

      {/* Survey Settings */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Survey Settings</h3>

        {/* Service Type */}
        <div className="mb-6">
          <label className={labelClass}>Service Type</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {SERVICE_TYPES.map((option) => (
              <button
                key={option.value}
                onClick={() => setServiceType(option.value)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  serviceType === option.value
                    ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/40 text-teal-400'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Survey Format */}
        <div className="mb-6">
          <label className={labelClass}>Survey Format</label>
          <div className="flex gap-2">
            {([
              { value: 'email' as const, label: 'Email-friendly (text)' },
              { value: 'printable' as const, label: 'Printable (structured)' },
            ]).map((option) => (
              <button
                key={option.value}
                onClick={() => setSurveyFormat(option.value)}
                className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  surveyFormat === option.value
                    ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/40 text-teal-400'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Survey Length */}
        <div>
          <label className={labelClass}>Survey Length</label>
          <div className="flex gap-2">
            {([
              { value: 'quick' as const, label: 'Quick (5 questions)' },
              { value: 'standard' as const, label: 'Standard (10 questions)' },
              { value: 'comprehensive' as const, label: 'Comprehensive (15 questions)' },
            ]).map((option) => (
              <button
                key={option.value}
                onClick={() => setSurveyLength(option.value)}
                className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  surveyLength === option.value
                    ? 'bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/40 text-teal-400'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sections to Include */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Sections to Include</h3>
        <div className="space-y-2">
          {SECTIONS.map((section) => (
            <label
              key={section.key}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedSections.includes(section.key)}
                  onChange={() => toggleSection(section.key)}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 peer-checked:bg-teal-500/30 peer-checked:border-teal-500/50 transition-all flex items-center justify-center">
                  <svg
                    className={`w-3 h-3 text-teal-400 transition-opacity ${
                      selectedSections.includes(section.key) ? 'opacity-100' : 'opacity-0'
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
                {section.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Optional Extras */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white heading-font mb-6">Optional Extras</h3>

        {/* Follow-up toggle */}
        <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5 mb-3">
          <div>
            <span className="text-slate-300 text-sm">Include follow-up project interest question</span>
            <p className="text-xs text-slate-500 mt-0.5">Ask if the client has upcoming projects you could help with</p>
          </div>
          <button
            onClick={() => setIncludeFollowUp(!includeFollowUp)}
            className={`relative w-14 h-7 rounded-full transition-all ${
              includeFollowUp ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                includeFollowUp ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Referral toggle */}
        <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5 mb-6">
          <div>
            <span className="text-slate-300 text-sm">Include referral request</span>
            <p className="text-xs text-slate-500 mt-0.5">Ask if the client can recommend you to someone in their network</p>
          </div>
          <button
            onClick={() => setIncludeReferral(!includeReferral)}
            className={`relative w-14 h-7 rounded-full transition-all ${
              includeReferral ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-white/10'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                includeReferral ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Custom question */}
        <div>
          <label className={labelClass}>Custom Question (optional)</label>
          <textarea
            value={customQuestion}
            onChange={(e) => setCustomQuestion(e.target.value)}
            className={`${inputClass} min-h-[80px] resize-y`}
            placeholder="e.g. How did you hear about our services? Was there a specific feature or deliverable that stood out to you?"
          />
          <p className="text-xs text-slate-500 mt-1">
            This will be added as an additional open-ended question at the end of the survey.
          </p>
        </div>
      </div>

      {/* Survey Preview Summary */}
      <div className="bg-white/5 rounded-xl p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Service type</span>
          <span className="text-white font-medium">{getServiceLabel(serviceType)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Format</span>
          <span className="text-white font-medium">{surveyFormat === 'email' ? 'Email-friendly' : 'Printable'}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Max questions</span>
          <span className="text-white font-medium">{getQuestionCount(surveyLength)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Sections selected</span>
          <span className="text-white font-medium">
            {selectedSections.length} of {SECTIONS.length}
            {(includeFollowUp || includeReferral || customQuestion.trim()) && (
              <span className="text-teal-400 ml-1">
                + {[includeFollowUp, includeReferral, customQuestion.trim()].filter(Boolean).length} extra
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all text-lg"
        >
          Generate Feedback Survey
        </button>
      </div>

      {/* Generated Output */}
      {generated && (
        <>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white heading-font">Survey Preview</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 font-medium">
                {getQuestionCount(surveyLength)} questions max
              </span>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 font-mono text-sm whitespace-pre-wrap text-slate-300 leading-relaxed">
              {generatedText}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={handleCopy}
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl px-8 py-4 hover:from-teal-400 hover:to-blue-400 transition-all"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-teal-500/5 border border-teal-500/20 rounded-2xl p-6">
            <h4 className="text-teal-400 font-semibold mb-2">Sending Tips</h4>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>Send the survey 1-3 days after final project delivery — not the same day as your invoice.</li>
              <li>Use a clear email subject line like &ldquo;Quick feedback on our {projectName || '[project name]'} project?&rdquo;</li>
              <li>Keep your email introduction brief — the survey should do the talking.</li>
              <li>Follow up once after 5-7 days if you haven&apos;t received a response. Don&apos;t chase more than twice.</li>
              <li>Always thank the client for their feedback, especially if it includes constructive criticism.</li>
            </ul>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="/tools/price-increase-letter"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Price Increase Letter
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Raise your rates with confidence
                </p>
              </a>
              <a
                href="/tools/project-completion-certificate"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Project Completion Certificate
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Formally close out projects
                </p>
              </a>
              <a
                href="/tools/quote-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                  Quote Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Generate professional project quotes
                </p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool generates client feedback survey templates for freelancers and service providers.
              The generated survey is a template — review and customise it before sending to your client.
              Feedback collection should comply with applicable privacy regulations in your jurisdiction.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
