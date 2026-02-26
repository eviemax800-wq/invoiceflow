'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';

type ScenarioType =
  | 'project-delay'
  | 'scope-change'
  | 'rate-increase'
  | 'project-pause'
  | 'ending-relationship'
  | 'boundary-setting'
  | 'milestone-update'
  | 'new-client-welcome';

type Tone = 'professional' | 'friendly' | 'firm';

interface ScenarioConfig {
  key: ScenarioType;
  label: string;
  description: string;
  icon: string;
}

const SCENARIOS: ScenarioConfig[] = [
  {
    key: 'project-delay',
    label: 'Project Delay Notification',
    description: 'Telling a client work will be delivered late',
    icon: '\u23F3',
  },
  {
    key: 'scope-change',
    label: 'Scope Change Request',
    description: 'Client wants changes outside original scope',
    icon: '\u{1F4CB}',
  },
  {
    key: 'rate-increase',
    label: 'Rate Increase Notice',
    description: 'Informing client of upcoming rate changes',
    icon: '\u{1F4C8}',
  },
  {
    key: 'project-pause',
    label: 'Project Pause / Hold',
    description: 'Pausing work due to non-payment or other reasons',
    icon: '\u23F8\uFE0F',
  },
  {
    key: 'ending-relationship',
    label: 'Ending a Client Relationship',
    description: 'Professionally ending an engagement',
    icon: '\u{1F91D}',
  },
  {
    key: 'boundary-setting',
    label: 'Boundary Setting',
    description: 'Addressing out-of-hours messages or scope creep',
    icon: '\u{1F6E1}\uFE0F',
  },
  {
    key: 'milestone-update',
    label: 'Milestone Update',
    description: 'Progress report with next steps',
    icon: '\u{1F3AF}',
  },
  {
    key: 'new-client-welcome',
    label: 'New Client Welcome',
    description: 'Onboarding email with expectations and process',
    icon: '\u{1F44B}',
  },
];

const TONE_OPTIONS: { key: Tone; label: string; description: string }[] = [
  { key: 'professional', label: 'Professional', description: 'Clear and business-like' },
  { key: 'friendly', label: 'Friendly', description: 'Warm and approachable' },
  { key: 'firm', label: 'Firm', description: 'Direct and assertive' },
];

interface FormData {
  yourName: string;
  businessName: string;
  clientName: string;
  projectName: string;
  // Delay-specific
  originalDeadline: string;
  newDeadline: string;
  delayReason: string;
  // Scope-change-specific
  originalScope: string;
  requestedChange: string;
  additionalCost: string;
  additionalTimeline: string;
  // Rate-increase-specific
  currentRate: string;
  newRate: string;
  rateType: string;
  effectiveDate: string;
  // Project-pause-specific
  pauseReason: string;
  resumeCondition: string;
  // Ending-relationship-specific
  endReason: string;
  lastDay: string;
  handoverNotes: string;
  // Boundary-specific
  boundaryIssue: string;
  desiredBehaviour: string;
  // Milestone-specific
  completedWork: string;
  nextSteps: string;
  nextMilestoneDate: string;
  // Welcome-specific
  startDate: string;
  communicationChannel: string;
  workingHours: string;
  paymentTerms: string;
}

const INITIAL_FORM: FormData = {
  yourName: '',
  businessName: '',
  clientName: '',
  projectName: '',
  originalDeadline: '',
  newDeadline: '',
  delayReason: '',
  originalScope: '',
  requestedChange: '',
  additionalCost: '',
  additionalTimeline: '',
  currentRate: '',
  newRate: '',
  rateType: 'hourly',
  effectiveDate: '',
  pauseReason: '',
  resumeCondition: '',
  endReason: '',
  lastDay: '',
  handoverNotes: '',
  boundaryIssue: '',
  desiredBehaviour: '',
  completedWork: '',
  nextSteps: '',
  nextMilestoneDate: '',
  startDate: '',
  communicationChannel: '',
  workingHours: '',
  paymentTerms: '',
};

function formatDateAU(dateStr: string): string {
  if (!dateStr) return '[DATE]';
  const date = new Date(dateStr + 'T00:00:00');
  if (isNaN(date.getTime())) return '[DATE]';
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleDateString('en-AU', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function formatCurrency(value: string): string {
  if (!value) return '[AMOUNT]';
  const num = parseFloat(value);
  if (isNaN(num)) return '[AMOUNT]';
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

function generateSubject(scenario: ScenarioType, tone: Tone, form: FormData): string {
  const project = form.projectName || '[Project Name]';
  const biz = form.businessName || '[Your Business]';

  switch (scenario) {
    case 'project-delay':
      if (tone === 'friendly') return `Quick update on ${project} timeline`;
      if (tone === 'firm') return `Timeline revision — ${project}`;
      return `${project} — revised delivery timeline`;

    case 'scope-change':
      if (tone === 'friendly') return `Scope discussion — ${project}`;
      if (tone === 'firm') return `Scope change and cost adjustment — ${project}`;
      return `Scope change request — ${project} additional requirements`;

    case 'rate-increase':
      if (tone === 'friendly') return `A note about my rates — effective ${formatDateAU(form.effectiveDate)}`;
      if (tone === 'firm') return `Rate adjustment notice — effective ${formatDateAU(form.effectiveDate)}`;
      return `Rate update — ${biz} pricing from ${formatDateAU(form.effectiveDate)}`;

    case 'project-pause':
      if (tone === 'friendly') return `Pausing work on ${project} — quick update`;
      if (tone === 'firm') return `Work paused — ${project}`;
      return `${project} — temporary hold on work`;

    case 'ending-relationship':
      if (tone === 'friendly') return `Wrapping up our work together — ${project}`;
      if (tone === 'firm') return `Notice of engagement conclusion — ${project}`;
      return `Concluding our engagement — ${project}`;

    case 'boundary-setting':
      if (tone === 'friendly') return `Working together better — a quick note`;
      if (tone === 'firm') return `Communication and availability expectations`;
      return `Clarifying working arrangements — ${project}`;

    case 'milestone-update':
      if (tone === 'friendly') return `Great progress on ${project} — update inside!`;
      if (tone === 'firm') return `Project status report — ${project}`;
      return `Milestone update — ${project} progress report`;

    case 'new-client-welcome':
      if (tone === 'friendly') return `Welcome aboard! Let's get ${project} started`;
      if (tone === 'firm') return `Engagement commencement — ${project}`;
      return `Welcome to ${biz} — ${project} kick-off`;
  }
}

function generateBody(scenario: ScenarioType, tone: Tone, form: FormData): string {
  const client = form.clientName || '[Client Name]';
  const project = form.projectName || '[Project Name]';
  const biz = form.businessName || '[Your Business Name]';
  const you = form.yourName || '[Your Name]';

  const greeting = tone === 'friendly' ? `Hi ${client},` : tone === 'firm' ? `Dear ${client},` : `Hi ${client},`;
  const signoff = tone === 'friendly' ? `Cheers,\n${you}\n${biz}` : tone === 'firm' ? `Regards,\n${you}\n${biz}` : `Kind regards,\n${you}\n${biz}`;

  switch (scenario) {
    case 'project-delay': {
      const origDate = formatDateAU(form.originalDeadline);
      const newDate = formatDateAU(form.newDeadline);
      const reason = form.delayReason || '[reason for delay]';

      if (tone === 'friendly') {
        return `${greeting}

Hope you're doing well! I wanted to give you a heads-up about the timeline for ${project}.

We originally agreed on a delivery date of ${origDate}, but due to ${reason}, I'm going to need a bit more time to deliver the quality we both expect.

Here's the updated timeline:

  Original deadline: ${origDate}
  Revised deadline: ${newDate}

I want to make sure I deliver work I'm proud of and that meets your expectations, so I'd rather be upfront about this now than rush the final deliverables.

Everything else about the project remains the same — scope, pricing, and deliverables are all unchanged.

If you'd like to chat about this or have any questions, I'm happy to jump on a quick call. Otherwise, I'll keep you posted on progress and aim to have everything wrapped up by ${newDate}.

Thanks for your understanding — I really appreciate it!

${signoff}`;
      }
      if (tone === 'firm') {
        return `${greeting}

I am writing to formally advise of a revision to the delivery timeline for ${project}.

The original delivery date of ${origDate} is no longer achievable due to ${reason}. The revised delivery date is ${newDate}.

  Project: ${project}
  Original Deadline: ${origDate}
  Revised Deadline: ${newDate}
  Reason: ${reason}

All other project terms — including scope, pricing, and deliverables — remain unchanged.

This revised timeline ensures the final deliverables meet the agreed quality standards. I have taken steps to prevent further delays and do not anticipate any additional timeline changes.

Please confirm your acknowledgement of this revised timeline at your earliest convenience. If you have any concerns or would prefer to discuss alternative arrangements, please let me know.

${signoff}`;
      }
      return `${greeting}

I'm writing to let you know about a change to the delivery timeline for ${project}.

Due to ${reason}, the original delivery date of ${origDate} needs to be adjusted. The revised delivery date is ${newDate}.

Here's a summary:

  Project: ${project}
  Original Deadline: ${origDate}
  Revised Deadline: ${newDate}

All other project terms remain unchanged — scope, pricing, and deliverables are unaffected.

I want to be transparent about this and ensure you have enough notice to plan accordingly. I'm committed to delivering high-quality work and believe this revised timeline will ensure we achieve that.

Please let me know if you have any questions or would like to discuss this further. I'm happy to jump on a call if that's easier.

${signoff}`;
    }

    case 'scope-change': {
      const origScope = form.originalScope || '[original scope description]';
      const change = form.requestedChange || '[requested change description]';
      const cost = formatCurrency(form.additionalCost);
      const timeline = form.additionalTimeline || '[additional time needed]';

      if (tone === 'friendly') {
        return `${greeting}

Thanks for your message about ${project} — I appreciate you thinking about how to make this even better!

I wanted to have a quick chat about the additional work you've mentioned. The original scope we agreed on covered:

${origScope}

The new request — ${change} — falls outside what was included in the original brief and pricing.

Here's what the additional work would involve:

  Additional Work: ${change}
  Estimated Cost: ${cost} (ex. GST)
  Additional Timeline: ${timeline}

I'm absolutely happy to take this on — I just want to make sure we're both on the same page about the scope, cost, and timeline before I start.

Want me to go ahead with this as an addition to the current project? Or would you prefer to wrap up the original scope first and tackle this as a separate phase?

Let me know your thoughts — happy to chat through the options!

${signoff}`;
      }
      if (tone === 'firm') {
        return `${greeting}

I am writing regarding a scope change for ${project}.

The work you have requested falls outside the scope outlined in our original agreement. For reference, the agreed scope was:

${origScope}

The additional work you have requested is:

${change}

This constitutes a scope change and requires a formal adjustment to our project terms. The details are as follows:

  Additional Work: ${change}
  Additional Cost: ${cost} (ex. GST)
  Additional Timeline: ${timeline}

Work on this additional scope will not commence until written approval is received and, where applicable, a deposit has been paid. The original scope and timeline remain unaffected until this scope change is formally agreed.

Please confirm whether you would like to proceed with this scope change, defer it to a future phase, or remove it from the project requirements.

I require your decision by [response deadline] to maintain the current project schedule.

${signoff}`;
      }
      return `${greeting}

Thank you for your feedback on ${project}. I'd like to discuss the additional work you've requested.

The original scope we agreed on included:

${origScope}

The additional work you've described — ${change} — sits outside the original brief. I'm happy to accommodate this, but I want to be transparent about the impact on cost and timeline.

Here are the details:

  Additional Work: ${change}
  Estimated Additional Cost: ${cost} (ex. GST)
  Additional Timeline: ${timeline}

I'd recommend we handle this in one of two ways:

  1. Add it to the current project — I'll update the scope document and invoice accordingly.
  2. Defer it to a follow-up phase — we complete the original scope first, then tackle this as a separate engagement.

Could you let me know which approach you'd prefer? Once confirmed, I'll update the project plan and send a revised agreement for your approval.

${signoff}`;
    }

    case 'rate-increase': {
      const currentRate = formatCurrency(form.currentRate);
      const newRate = formatCurrency(form.newRate);
      const rateType = form.rateType || 'hourly';
      const effective = formatDateAU(form.effectiveDate);

      if (tone === 'friendly') {
        return `${greeting}

I hope you're well! I wanted to give you plenty of notice about an upcoming change to my rates.

I've really enjoyed working with you on ${project}, and I want to be upfront about this. From ${effective}, my ${rateType} rate will be adjusting from ${currentRate} to ${newRate} (ex. GST).

Here's a summary:

  Current Rate: ${currentRate} ${rateType}
  New Rate: ${newRate} ${rateType}
  Effective From: ${effective}

This is the first rate adjustment I've made in [duration], and it reflects increased demand, additional skills and certifications I've invested in, and the general cost of doing business in Australia.

Any work already agreed or in progress will be honoured at the current rate. The new rate applies to new projects and contract renewals from ${effective} onwards.

I really value our working relationship and want to continue delivering great results for you. If you'd like to discuss this or have any questions, I'm happy to chat.

Thanks for your understanding!

${signoff}`;
      }
      if (tone === 'firm') {
        return `${greeting}

I am writing to formally notify you of an adjustment to my professional rates, effective ${effective}.

  Current Rate: ${currentRate} per ${rateType === 'hourly' ? 'hour' : rateType}
  New Rate: ${newRate} per ${rateType === 'hourly' ? 'hour' : rateType}
  Effective Date: ${effective}

This adjustment reflects current market rates for the services I provide, increased operational costs, and the additional expertise I bring to engagements like ${project}.

The following terms apply:

  - All work currently in progress will be completed at the existing rate.
  - Any new projects or contract renewals from ${effective} will be subject to the new rate.
  - Existing retainer agreements will be adjusted at their next renewal date.

I am providing this notice well in advance to allow you to plan accordingly. If you wish to lock in any additional work at the current rate, I am open to discussing this before ${effective}.

Please confirm your acknowledgement of this rate change. If you have any questions, do not hesitate to contact me.

${signoff}`;
      }
      return `${greeting}

I'm writing to let you know about an upcoming change to my rates, effective ${effective}.

  Current Rate: ${currentRate} per ${rateType === 'hourly' ? 'hour' : rateType}
  New Rate: ${newRate} per ${rateType === 'hourly' ? 'hour' : rateType}
  Effective Date: ${effective}

This adjustment reflects the current market, the value I deliver, and increased operational costs. It's the first rate change I've made in [duration], and I want to give you as much notice as possible.

Here's how this affects our work:

  - Any work already in progress will be completed at the current rate.
  - New projects and contract renewals from ${effective} onwards will be at the new rate.

I value our working relationship and I'm committed to continuing to deliver high-quality work on ${project} and any future engagements. If you'd like to discuss this or plan ahead, I'm happy to arrange a call.

Thank you for your understanding.

${signoff}`;
    }

    case 'project-pause': {
      const reason = form.pauseReason || '[reason for pause]';
      const resumeCondition = form.resumeCondition || '[conditions for resuming work]';

      if (tone === 'friendly') {
        return `${greeting}

I hope you're well. I need to let you know that I'm pausing work on ${project} for the time being.

The reason for this pause is: ${reason}.

I want to be transparent about where things stand. Here's the current status:

  Project: ${project}
  Status: On hold
  Work completed to date: All deliverables up to this point are complete and available.
  Resume condition: ${resumeCondition}

I've made sure everything completed so far is properly documented and saved, so we can pick up exactly where we left off when the time is right.

Once ${resumeCondition}, I'm happy to restart immediately — though I may need to factor in a short ramp-up period depending on how long the pause lasts.

I really value our working relationship and want to get this project across the finish line. Please let me know if you'd like to discuss this further.

${signoff}`;
      }
      if (tone === 'firm') {
        return `${greeting}

I am writing to formally advise that work on ${project} has been placed on hold, effective immediately.

  Project: ${project}
  Status: On hold
  Reason: ${reason}
  Resume condition: ${resumeCondition}

All deliverables completed to date have been properly documented and are available for your review. No further work will be undertaken until ${resumeCondition}.

Please note:

  - All outstanding invoices for work completed to date remain payable under our original terms.
  - Once the resume condition is met, I will require 5 business days' notice to recommence work.
  - If the project remains on hold for more than 30 days, the engagement may need to be re-scoped and re-quoted to account for changed circumstances.

I take this step to ensure transparency and to protect the interests of both parties. I remain available to discuss this matter and am committed to completing the project once the above condition is satisfied.

${signoff}`;
      }
      return `${greeting}

I'm writing to let you know that I need to place ${project} on hold temporarily.

  Project: ${project}
  Status: On hold
  Reason: ${reason}
  Resume condition: ${resumeCondition}

Here's where things stand: all work completed to date has been saved and documented. When we resume, we'll be able to pick up exactly where we left off.

A few practical notes:

  - Any outstanding invoices for work completed remain payable as agreed.
  - Once ${resumeCondition}, I can restart within one week.
  - If the hold extends beyond 30 days, we may need to revisit the timeline and scope to account for any changes.

I understand this is not ideal, and I appreciate your patience. I'm committed to completing ${project} and delivering the results we discussed. Please let me know if you have any questions or would like to arrange a call to discuss.

${signoff}`;
    }

    case 'ending-relationship': {
      const reason = form.endReason || '[reason for ending engagement]';
      const lastDay = formatDateAU(form.lastDay);
      const handover = form.handoverNotes || 'All project files, assets, and documentation will be transferred to you.';

      if (tone === 'friendly') {
        return `${greeting}

I hope you're well. I wanted to reach out about our working arrangement on ${project}.

After careful consideration, I've decided that now is the right time for me to wrap up our engagement. ${reason}

I want to make sure this transition is as smooth as possible for you. Here's my plan:

  Last working day: ${lastDay}
  Handover: ${handover}

Between now and ${lastDay}, I'll focus on completing any work in progress and ensuring a clean handover. I'm happy to brief a replacement if you'd like — or recommend someone from my network who might be a good fit.

I've genuinely enjoyed working with you and I'm grateful for the opportunity. I want to make sure I leave you in the best possible position.

If you'd like to discuss this over a call, I'm happy to arrange that.

All the best,

${signoff}`;
      }
      if (tone === 'firm') {
        return `${greeting}

I am writing to formally notify you that I am concluding my engagement on ${project}.

  Last Working Day: ${lastDay}
  Reason: ${reason}

Between now and ${lastDay}, I will:

  1. Complete any work currently in progress.
  2. Deliver all outstanding deliverables for which payment has been received.
  3. Provide a full handover package: ${handover}
  4. Issue a final invoice for any remaining work completed.

Please note:

  - All outstanding invoices must be settled by ${lastDay}.
  - Any work beyond the agreed scope will not be undertaken during the notice period.
  - I am available to brief a replacement during this period upon request.

This decision is final and has been made after careful consideration. I have fulfilled all obligations under our agreement to date and will continue to do so until ${lastDay}.

I wish you every success with the project going forward.

${signoff}`;
      }
      return `${greeting}

I'm writing to let you know that I'll be wrapping up my involvement in ${project}.

After giving this careful thought, I've decided to conclude our engagement. ${reason}

Here's the transition plan:

  Last Working Day: ${lastDay}
  Handover: ${handover}

During the remaining time, I'll focus on:

  1. Completing any work currently in progress.
  2. Preparing a full handover of all project files, assets, and documentation.
  3. Being available to brief a replacement if you'd like to arrange one.

I'll issue a final invoice for any outstanding work on or before ${lastDay}. All existing invoices remain payable under our original terms.

I appreciate the opportunity to work on ${project} and I want to ensure a clean transition. Please let me know if there's anything specific you'd like included in the handover, or if you'd like to schedule a call to discuss.

${signoff}`;
    }

    case 'boundary-setting': {
      const issue = form.boundaryIssue || '[specific boundary issue]';
      const desired = form.desiredBehaviour || '[desired arrangement]';

      if (tone === 'friendly') {
        return `${greeting}

Hope you're doing well! I wanted to have a quick chat about how we work together on ${project} — not because anything is wrong, but because I want to make sure we're both set up for the best possible working relationship.

I've noticed that ${issue}, and I wanted to address it before it becomes a bigger thing.

To help me deliver my best work for you, here's what works well for me:

${desired}

I find that when I can work within these parameters, the quality and speed of my output is significantly better — which ultimately benefits the project.

I hope this makes sense — it's definitely not a criticism, just a tweak to help us work together more effectively. If any of this doesn't work for you, I'm happy to discuss and find a middle ground.

Thanks for understanding!

${signoff}`;
      }
      if (tone === 'firm') {
        return `${greeting}

I am writing to clarify the working arrangements for ${project}.

I have observed the following pattern: ${issue}. This is impacting my ability to deliver high-quality work efficiently, and it needs to be addressed.

Going forward, the following arrangements apply:

${desired}

These boundaries are consistent with our original agreement and are standard professional practice. They exist to protect the quality of work I deliver and to ensure a sustainable working relationship.

I request that these arrangements be respected from this point forward. If there are urgent matters that genuinely cannot wait, please indicate this clearly in your message and I will respond at the earliest appropriate time.

If you would like to discuss these arrangements, I am available during my stated working hours.

${signoff}`;
      }
      return `${greeting}

I wanted to touch base about our working arrangements on ${project}. I believe a small adjustment will help us work together more effectively.

I've noticed that ${issue}. I understand this may not have been intentional, but I wanted to address it proactively so it doesn't become an issue.

Going forward, here's what I'd suggest:

${desired}

These arrangements help me manage my workload across all clients and deliver the best possible results for ${project}. I find that when I can plan my work within clear boundaries, the quality and turnaround time both improve.

This is standard practice across my client engagements, and I hope it works for you too. If you'd like to discuss any of this, I'm happy to jump on a call during business hours.

Thank you for your understanding.

${signoff}`;
    }

    case 'milestone-update': {
      const completed = form.completedWork || '[completed work description]';
      const nextSteps = form.nextSteps || '[next steps description]';
      const nextDate = formatDateAU(form.nextMilestoneDate);

      if (tone === 'friendly') {
        return `${greeting}

Exciting update on ${project} — we're making great progress!

Here's what's been completed since our last check-in:

${completed}

I'm really happy with how this is shaping up. Everything is on track and the quality is where I want it to be.

Here's what's coming next:

${nextSteps}

  Next milestone date: ${nextDate}

If you'd like to see any of the completed work, I'm happy to send across a preview or jump on a quick call to walk you through it. Otherwise, I'll keep cracking on and update you again at the next milestone.

Let me know if you have any questions or feedback!

${signoff}`;
      }
      if (tone === 'firm') {
        return `${greeting}

Please find below the milestone update for ${project}.

COMPLETED:

${completed}

All completed work has been delivered according to the agreed specifications and quality standards.

NEXT PHASE:

${nextSteps}

  Next Milestone Date: ${nextDate}

STATUS: On track. No current blockers.

If you require any changes to the completed work, please provide feedback within 5 business days. In the absence of feedback, the completed work will be considered approved and the next phase will proceed as scheduled.

Any outstanding milestone payments should be settled in accordance with our agreed payment terms to ensure the project timeline is maintained.

${signoff}`;
      }
      return `${greeting}

I'm writing to provide an update on the progress of ${project}.

Work completed to date:

${completed}

All completed items are on track with the original scope and timeline.

Coming up next:

${nextSteps}

  Next milestone target: ${nextDate}

No blockers at this stage. If anything changes, I'll let you know immediately.

If you'd like to review the completed work or have any feedback, please let me know — I'm happy to make adjustments before moving to the next phase. Otherwise, I'll continue as planned and update you at the next milestone.

${signoff}`;
    }

    case 'new-client-welcome': {
      const start = formatDateAU(form.startDate);
      const channel = form.communicationChannel || 'email';
      const hours = form.workingHours || 'Monday to Friday, 9:00am to 5:00pm AEST';
      const payment = form.paymentTerms || '14 days from invoice date';

      if (tone === 'friendly') {
        return `${greeting}

Welcome aboard — I'm thrilled to be working with you on ${project}! I'm confident we're going to create something great together.

Here's a quick overview of how I work, so we can hit the ground running:

PROJECT KICK-OFF
  Start Date: ${start}
  Project: ${project}

HOW I WORK
  Communication: All project-related communication goes through ${channel}. This keeps everything in one place and ensures nothing gets lost.
  Working Hours: ${hours}. I respond to messages within 4 business hours during these times.
  Updates: I'll send milestone updates at each project checkpoint so you always know where things stand.

PAYMENT
  Terms: ${payment}
  Method: Bank transfer (details provided on each invoice)
  Invoicing: I'll send invoices at each agreed milestone, or monthly for ongoing work.

NEXT STEPS
  1. I'll send through a project brief / scope document for your review and sign-off.
  2. Once approved, I'll send the first invoice (deposit) and begin work.
  3. Our first check-in will be [one week from start date].

If you have any questions before we kick off, don't hesitate to reach out. I'm really looking forward to getting started!

${signoff}`;
      }
      if (tone === 'firm') {
        return `${greeting}

Thank you for engaging ${biz} for ${project}. This email confirms the commencement of our engagement and outlines the key working arrangements.

ENGAGEMENT DETAILS
  Project: ${project}
  Commencement Date: ${start}

COMMUNICATION PROTOCOL
  Primary Channel: ${channel}
  Response Time: Within 1 business day
  Working Hours: ${hours}
  Availability: I am not available outside stated working hours except by prior arrangement.

PAYMENT TERMS
  Terms: ${payment}
  Method: Bank transfer (details on invoice)
  Late Payment: Invoices not paid within terms may result in work being paused. Interest may apply in accordance with our agreement.

PROJECT PROCESS
  1. I will provide a detailed scope document for your review and written approval.
  2. Work commences upon receipt of the signed scope document and deposit invoice payment.
  3. Milestone updates will be provided at each project checkpoint.
  4. Change requests outside the agreed scope will be quoted separately.

NEXT STEPS
  - Review and sign the scope document (to follow).
  - Pay the deposit invoice upon receipt.
  - Schedule our kick-off meeting.

Please confirm receipt of this email and advise if you have any questions before we begin.

${signoff}`;
      }
      return `${greeting}

Thank you for choosing ${biz} for ${project}. I'm looking forward to working with you. Here's everything you need to know to get started.

PROJECT DETAILS
  Project: ${project}
  Start Date: ${start}

HOW WE'LL WORK TOGETHER
  Communication: ${channel} for all project-related discussions. This ensures everything is documented and easy to find.
  Working Hours: ${hours}. I aim to respond to messages within 4 business hours.
  Updates: I'll provide progress updates at each milestone so you always have visibility on where things stand.

PAYMENT
  Payment Terms: ${payment}
  Method: Bank transfer (details provided on each invoice)
  Invoicing: Invoices are issued at agreed milestones or monthly for ongoing work.

NEXT STEPS
  1. I'll prepare and send the project scope document for your review and approval.
  2. Once signed, I'll issue the deposit invoice and work begins upon receipt of payment.
  3. Our first check-in will be scheduled within the first week.

If there's anything you'd like to discuss or any information you need from me before we start, please let me know. I'm looking forward to delivering great results on ${project}.

${signoff}`;
    }
  }
}

function getScenarioFields(scenario: ScenarioType): { key: keyof FormData; label: string; placeholder: string; type?: string; options?: { value: string; label: string }[] }[] {
  const common: { key: keyof FormData; label: string; placeholder: string; type?: string }[] = [
    { key: 'yourName', label: 'Your Name', placeholder: 'Alex Chen' },
    { key: 'businessName', label: 'Business Name', placeholder: 'Chen Design Studio' },
    { key: 'clientName', label: 'Client Name', placeholder: 'Sarah from Acme Corp' },
    { key: 'projectName', label: 'Project Name', placeholder: 'Website Redesign' },
  ];

  switch (scenario) {
    case 'project-delay':
      return [
        ...common,
        { key: 'originalDeadline', label: 'Original Deadline', placeholder: '', type: 'date' },
        { key: 'newDeadline', label: 'Revised Deadline', placeholder: '', type: 'date' },
        { key: 'delayReason', label: 'Reason for Delay', placeholder: 'e.g., unexpected technical complexity with the payment integration' },
      ];
    case 'scope-change':
      return [
        ...common,
        { key: 'originalScope', label: 'Original Scope', placeholder: 'e.g., 5-page marketing website with responsive design and contact form' },
        { key: 'requestedChange', label: 'Requested Change', placeholder: 'e.g., adding an e-commerce section with 20 product listings and Stripe checkout' },
        { key: 'additionalCost', label: 'Additional Cost (AUD, ex. GST)', placeholder: '2500', type: 'number' },
        { key: 'additionalTimeline', label: 'Additional Timeline', placeholder: 'e.g., 2 additional weeks' },
      ];
    case 'rate-increase':
      return [
        ...common,
        { key: 'currentRate', label: 'Current Rate (AUD)', placeholder: '120', type: 'number' },
        { key: 'newRate', label: 'New Rate (AUD)', placeholder: '150', type: 'number' },
        {
          key: 'rateType',
          label: 'Rate Type',
          placeholder: '',
          options: [
            { value: 'hourly', label: 'Per Hour' },
            { value: 'daily', label: 'Per Day' },
            { value: 'project', label: 'Per Project' },
            { value: 'monthly retainer', label: 'Monthly Retainer' },
          ],
        },
        { key: 'effectiveDate', label: 'Effective Date', placeholder: '', type: 'date' },
      ];
    case 'project-pause':
      return [
        ...common,
        { key: 'pauseReason', label: 'Reason for Pause', placeholder: 'e.g., outstanding invoices totalling $4,500 remain unpaid after 30 days' },
        { key: 'resumeCondition', label: 'Condition to Resume', placeholder: 'e.g., all outstanding invoices are settled in full' },
      ];
    case 'ending-relationship':
      return [
        ...common,
        { key: 'endReason', label: 'Reason (for the email)', placeholder: 'e.g., I am restructuring my client portfolio to focus on a specific niche' },
        { key: 'lastDay', label: 'Last Working Day', placeholder: '', type: 'date' },
        { key: 'handoverNotes', label: 'Handover Details', placeholder: 'e.g., All design files, brand assets, CMS credentials, and documentation will be transferred via Google Drive' },
      ];
    case 'boundary-setting':
      return [
        ...common,
        { key: 'boundaryIssue', label: 'The Issue', placeholder: 'e.g., messages are being sent after 9pm and on weekends with an expectation of immediate response' },
        { key: 'desiredBehaviour', label: 'Desired Arrangement', placeholder: 'e.g., All communication during business hours (9am-5pm AEST, Mon-Fri). Non-urgent requests responded to within 4 hours. Weekend messages actioned Monday morning.' },
      ];
    case 'milestone-update':
      return [
        ...common,
        { key: 'completedWork', label: 'Completed Work', placeholder: 'e.g., Homepage design and development, About page, Contact form integration, Mobile responsive testing' },
        { key: 'nextSteps', label: 'Next Steps', placeholder: 'e.g., Services page design, Blog section setup, SEO optimisation, Final QA testing' },
        { key: 'nextMilestoneDate', label: 'Next Milestone Date', placeholder: '', type: 'date' },
      ];
    case 'new-client-welcome':
      return [
        ...common,
        { key: 'startDate', label: 'Project Start Date', placeholder: '', type: 'date' },
        { key: 'communicationChannel', label: 'Primary Communication Channel', placeholder: 'e.g., email, Slack, or project management tool' },
        { key: 'workingHours', label: 'Your Working Hours', placeholder: 'e.g., Monday to Friday, 9:00am to 5:00pm AEST' },
        { key: 'paymentTerms', label: 'Payment Terms', placeholder: 'e.g., 14 days from invoice date, 50% deposit upfront' },
      ];
  }
}

function getTipForScenario(scenario: ScenarioType): { title: string; content: string } {
  switch (scenario) {
    case 'project-delay':
      return {
        title: 'Delay Communication Tips',
        content:
          'Notify the client as soon as you know — not after the deadline has passed. Early communication preserves trust. Always include a revised timeline and explain what steps you are taking to prevent further delays. Never blame the client, even if they caused the delay by providing late feedback.',
      };
    case 'scope-change':
      return {
        title: 'Scope Change Tips',
        content:
          'Document every scope change in writing, no matter how small. Under Australian contract law, verbal agreements can be binding but are nearly impossible to prove. Always provide a written quote for out-of-scope work and wait for written approval before starting. This protects both you and the client.',
      };
    case 'rate-increase':
      return {
        title: 'Rate Increase Tips',
        content:
          'Give at least 30 days notice — 60 days is better for long-term clients. Never apologise for increasing your rates. Frame it as a reflection of your value, expertise, and market rates. Honouring existing work at the old rate shows integrity and makes the increase easier to accept.',
      };
    case 'project-pause':
      return {
        title: 'Project Pause Tips',
        content:
          'When pausing due to non-payment, be direct but not aggressive. Under Australian consumer law, you are within your rights to pause work when payment terms are breached. Document all outstanding invoices and communication attempts. A pause is often more effective than threats — it creates urgency without hostility.',
      };
    case 'ending-relationship':
      return {
        title: 'Ending Engagement Tips',
        content:
          'Always give reasonable notice and never leave a client stranded mid-project. Complete what you can, provide a thorough handover, and offer to recommend a replacement. The freelance community is small — how you end a relationship matters as much as how you start one. Keep it professional, no matter what.',
      };
    case 'boundary-setting':
      return {
        title: 'Boundary Setting Tips',
        content:
          'Set boundaries early — ideally in your welcome email and contract. If you need to reset boundaries mid-engagement, do it calmly and frame it as being in the client\'s interest ("this helps me deliver better work for you"). Never set a boundary when you are angry. Draft it, sleep on it, then send it.',
      };
    case 'milestone-update':
      return {
        title: 'Milestone Update Tips',
        content:
          'Send milestone updates proactively — don\'t wait for the client to ask. Include specific details about what was completed, not vague summaries. Always mention the next milestone date and flag any potential blockers early. Clients who receive regular updates are 4x less likely to micromanage.',
      };
    case 'new-client-welcome':
      return {
        title: 'Onboarding Tips',
        content:
          'Your welcome email sets the tone for the entire engagement. Include your working hours, communication preferences, payment terms, and project process upfront. Clients who receive a thorough onboarding email are 60% less likely to have scope, payment, or communication issues later. Invest the time upfront — it pays dividends.',
      };
  }
}

export default function ClientCommunicationTemplates() {
  const [scenario, setScenario] = useState<ScenarioType>('project-delay');
  const [tone, setTone] = useState<Tone>('professional');
  const [form, setForm] = useState<FormData>(INITIAL_FORM);

  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [copiedBoth, setCopiedBoth] = useState(false);

  const updateField = useCallback((key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const subject = useMemo(() => generateSubject(scenario, tone, form), [scenario, tone, form]);
  const body = useMemo(() => generateBody(scenario, tone, form), [scenario, tone, form]);
  const tip = useMemo(() => getTipForScenario(scenario), [scenario]);
  const fields = useMemo(() => getScenarioFields(scenario), [scenario]);

  const handleCopy = useCallback(
    (text: string, setter: (v: boolean) => void) => {
      navigator.clipboard.writeText(text).then(() => {
        setter(true);
        setTimeout(() => setter(false), 2000);
      });
    },
    []
  );

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500/40 transition-all';
  const textareaClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500/40 transition-all resize-y min-h-[80px]';
  const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5';

  return (
    <div className="space-y-8">
      {/* Scenario Selection */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Choose a Scenario</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SCENARIOS.map((s) => {
            const isSelected = scenario === s.key;
            return (
              <button
                key={s.key}
                onClick={() => setScenario(s.key)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-rose-500/10 border-rose-500/40'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                }`}
              >
                <div className="text-lg mb-1">{s.icon}</div>
                <p className={`font-semibold text-sm mb-1 ${isSelected ? 'text-rose-400' : 'text-white'}`}>
                  {s.label}
                </p>
                <p className="text-xs text-slate-500 leading-tight">{s.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Context Details */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Your Details</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {fields.map((field) => (
            <div key={field.key} className={field.key === 'originalScope' || field.key === 'requestedChange' || field.key === 'completedWork' || field.key === 'nextSteps' || field.key === 'boundaryIssue' || field.key === 'desiredBehaviour' || field.key === 'handoverNotes' ? 'sm:col-span-2' : ''}>
              <label className={labelClass}>{field.label}</label>
              {field.options ? (
                <select
                  value={form[field.key]}
                  onChange={(e) => updateField(field.key, e.target.value)}
                  className={inputClass}
                >
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-slate-900">
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : field.key === 'originalScope' || field.key === 'requestedChange' || field.key === 'completedWork' || field.key === 'nextSteps' || field.key === 'boundaryIssue' || field.key === 'desiredBehaviour' || field.key === 'handoverNotes' ? (
                <textarea
                  value={form[field.key]}
                  onChange={(e) => updateField(field.key, e.target.value)}
                  className={textareaClass}
                  placeholder={field.placeholder}
                  rows={3}
                />
              ) : (
                <input
                  type={field.type || 'text'}
                  value={form[field.key]}
                  onChange={(e) => updateField(field.key, e.target.value)}
                  className={inputClass}
                  placeholder={field.placeholder}
                  min={field.type === 'number' ? '0' : undefined}
                  step={field.type === 'number' ? '0.01' : undefined}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tone Selection */}
      <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white heading-font">Tone</h2>
        <div className="grid grid-cols-3 gap-3">
          {TONE_OPTIONS.map((t) => {
            const isSelected = tone === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setTone(t.key)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-rose-500/10 border-rose-500/40'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                }`}
              >
                <p className={`font-semibold text-sm mb-1 ${isSelected ? 'text-rose-400' : 'text-white'}`}>
                  {t.label}
                </p>
                <p className="text-xs text-slate-500 leading-tight">{t.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Email Preview */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-[1px]">
        <div className="rounded-2xl bg-slate-950/80 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-xl font-bold text-white heading-font">Generated Email</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy(subject, setCopiedSubject)}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              >
                {copiedSubject ? (
                  <span className="text-rose-400">Copied!</span>
                ) : (
                  'Copy Subject'
                )}
              </button>
              <button
                onClick={() => handleCopy(body, setCopiedBody)}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              >
                {copiedBody ? (
                  <span className="text-rose-400">Copied!</span>
                ) : (
                  'Copy Email'
                )}
              </button>
              <button
                onClick={() =>
                  handleCopy(`Subject: ${subject}\n\n${body}`, setCopiedBoth)
                }
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-rose-500/20 to-pink-500/20 hover:from-rose-500/30 hover:to-pink-500/30 border border-rose-500/30 text-rose-400 hover:text-rose-300 transition-all"
              >
                {copiedBoth ? (
                  <span className="text-rose-400">Copied!</span>
                ) : (
                  'Copy Both'
                )}
              </button>
            </div>
          </div>

          {/* Email Container */}
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            {/* Email Header */}
            <div className="border-b border-white/10 px-5 py-3 space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-xs text-slate-500 w-16 pt-0.5 shrink-0">To:</span>
                <span className="text-sm text-slate-300">{form.clientName || 'client@example.com'}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs text-slate-500 w-16 pt-0.5 shrink-0">Subject:</span>
                <span className="text-sm text-white font-medium">{subject}</span>
              </div>
            </div>

            {/* Email Body */}
            <div className="px-5 py-5">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap font-sans leading-relaxed">
                {body}
              </pre>
            </div>
          </div>

          {/* Tip */}
          <div className="rounded-xl p-4 bg-rose-500/10 border border-rose-500/20">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
              {tip.title}
            </p>
            <p className="text-sm text-slate-300">{tip.content}</p>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="glass rounded-2xl p-6 space-y-3">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
          Related Tools
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tools/contract-generator"
            className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Contract Generator
          </Link>
          <Link
            href="/tools/price-increase-letter"
            className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Price Increase Letter
          </Link>
          <Link
            href="/tools/invoice-email-template"
            className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Invoice Email Template
          </Link>
          <Link
            href="/tools/client-feedback-survey"
            className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Client Feedback Survey
          </Link>
        </div>
      </div>
    </div>
  );
}
