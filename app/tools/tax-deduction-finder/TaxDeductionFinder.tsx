'use client';

import { useState, useMemo } from 'react';

/* ---- Types & Data ---- */

type Industry =
  | 'it-dev'
  | 'design-creative'
  | 'writing-content'
  | 'consulting'
  | 'trades'
  | 'health-fitness'
  | 'education'
  | 'photography-video';

interface WorkArrangements {
  workFromHome: boolean;
  useVehicle: boolean;
  travelForWork: boolean;
  rentOffice: boolean;
  usePhoneForBusiness: boolean;
  haveEmployeesOrSubcontractors: boolean;
}

interface Deduction {
  name: string;
  description: string;
  typicalRange: [number, number];
  atoRule: string;
  qualifies: boolean;
  category: string;
}

const INDUSTRIES: { value: Industry; label: string; icon: string }[] = [
  { value: 'it-dev', label: 'IT / Software Development', icon: '💻' },
  { value: 'design-creative', label: 'Design / Creative', icon: '🎨' },
  { value: 'writing-content', label: 'Writing / Content', icon: '✍️' },
  { value: 'consulting', label: 'Consulting / Advisory', icon: '📊' },
  { value: 'trades', label: 'Trades / Construction', icon: '🔧' },
  { value: 'health-fitness', label: 'Health / Fitness', icon: '💪' },
  { value: 'education', label: 'Education / Training', icon: '📚' },
  { value: 'photography-video', label: 'Photography / Video', icon: '📷' },
];

const WORK_ARRANGEMENT_OPTIONS: { key: keyof WorkArrangements; label: string; description: string }[] = [
  { key: 'workFromHome', label: 'Work from home', description: 'You regularly work from a home office or dedicated workspace' },
  { key: 'useVehicle', label: 'Use vehicle for business', description: 'You drive to client sites, pick up supplies, or travel between work locations' },
  { key: 'travelForWork', label: 'Travel for work (overnight)', description: 'You travel interstate or regionally and stay overnight for business' },
  { key: 'rentOffice', label: 'Rent office or co-working space', description: 'You pay for a dedicated office, studio, or co-working membership' },
  { key: 'usePhoneForBusiness', label: 'Use phone/internet for business', description: 'You use your personal phone or internet plan for work purposes' },
  { key: 'haveEmployeesOrSubcontractors', label: 'Hire employees or subcontractors', description: 'You pay other people to help deliver your work' },
];

const TAX_BRACKETS_2025_26 = [
  { min: 0, max: 18200, rate: 0 },
  { min: 18201, max: 45000, rate: 0.16 },
  { min: 45001, max: 135000, rate: 0.30 },
  { min: 135001, max: 190000, rate: 0.37 },
  { min: 190001, max: Infinity, rate: 0.45 },
];

function getMarginalRate(income: number): number {
  for (let i = TAX_BRACKETS_2025_26.length - 1; i >= 0; i--) {
    if (income >= TAX_BRACKETS_2025_26[i].min) {
      return TAX_BRACKETS_2025_26[i].rate;
    }
  }
  return 0;
}

function getTaxBracketLabel(income: number): string {
  if (income <= 18200) return '0% (tax-free threshold)';
  if (income <= 45000) return '16%';
  if (income <= 135000) return '30%';
  if (income <= 190000) return '37%';
  return '45%';
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function getIndustryDeductions(industry: Industry): Deduction[] {
  const base: Deduction[] = [];
  switch (industry) {
    case 'it-dev':
      base.push(
        { name: 'Software licences and SaaS tools', description: 'IDE licences, GitHub, AWS/cloud hosting, testing tools, project management platforms', typicalRange: [500, 5000], atoRule: 'Deductible as a business expense if used to produce assessable income. Instant write-off under $20,000.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Technical certifications', description: 'AWS, Azure, Google Cloud, Cisco, or other industry certifications and exam fees', typicalRange: [300, 2000], atoRule: 'Deductible under self-education expenses if related to current income-producing activity.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Developer hardware', description: 'Additional monitors, mechanical keyboards, ergonomic peripherals, testing devices', typicalRange: [200, 3000], atoRule: 'Instant asset write-off if under $20,000. Apportion for business-use percentage.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Open source and community contributions', description: 'Conference tickets, meetup costs, hackathon travel', typicalRange: [100, 1500], atoRule: 'Deductible if directly related to maintaining or improving skills in your current field.', qualifies: true, category: 'Industry-Specific' },
      );
      break;
    case 'design-creative':
      base.push(
        { name: 'Design software subscriptions', description: 'Adobe Creative Cloud, Figma, Sketch, Canva Pro, stock photo and font licences', typicalRange: [600, 4000], atoRule: 'Deductible as a business expense. Subscription costs are fully deductible in the year paid.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Colour calibration and displays', description: 'Colour-accurate monitors, calibration devices, graphics tablets', typicalRange: [300, 3000], atoRule: 'Instant asset write-off if under $20,000. Apportion for business-use percentage.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Printing and proofing', description: 'Print samples, colour proofs, packaging mockups, client presentation materials', typicalRange: [100, 2000], atoRule: 'Deductible as a business expense directly related to delivering client work.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Portfolio and showcase costs', description: 'Behance Pro, Dribbble Pro, personal portfolio hosting, domain registration', typicalRange: [50, 500], atoRule: 'Deductible as marketing and advertising expense.', qualifies: true, category: 'Industry-Specific' },
      );
      break;
    case 'writing-content':
      base.push(
        { name: 'Writing and editing tools', description: 'Grammarly, Hemingway, SEO tools (Ahrefs, SEMrush), CMS subscriptions', typicalRange: [200, 3000], atoRule: 'Deductible as a business expense if used to produce assessable income.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Research materials and subscriptions', description: 'News subscriptions, academic journals, industry reports, books for research', typicalRange: [200, 2000], atoRule: 'Deductible if directly related to current income-producing activity.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Stock media licences', description: 'Stock photo, video, and audio licences for content production', typicalRange: [100, 1500], atoRule: 'Deductible as a business expense in the year incurred.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Transcription and AI tools', description: 'Otter.ai, Descript, AI writing assistants used for content creation', typicalRange: [100, 1000], atoRule: 'Deductible as a business expense if used to produce assessable income.', qualifies: true, category: 'Industry-Specific' },
      );
      break;
    case 'consulting':
      base.push(
        { name: 'Client entertainment', description: 'Meals and drinks with clients for business development (50% deductible for FBT-exempt sole traders under certain conditions)', typicalRange: [200, 3000], atoRule: 'Deductible if directly related to earning income. Subject to substantiation and FBT rules for employers.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Business development and networking', description: 'Industry events, conference tickets, networking group memberships, Chamber of Commerce', typicalRange: [200, 3000], atoRule: 'Deductible if related to maintaining or growing your current business.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Professional wardrobe', description: 'Only deductible if it is a compulsory uniform, protective clothing, or occupation-specific. Conventional business attire is NOT deductible.', typicalRange: [0, 500], atoRule: 'ATO: conventional clothing (suits, business wear) is NOT deductible. Only compulsory uniforms, protective clothing, or occupation-specific clothing qualifies.', qualifies: false, category: 'Industry-Specific' },
        { name: 'Presentation and pitch tools', description: 'Pitch deck software, proposal tools, CRM subscriptions, project management platforms', typicalRange: [200, 2000], atoRule: 'Deductible as a business expense if used to produce assessable income.', qualifies: true, category: 'Industry-Specific' },
      );
      break;
    case 'trades':
      base.push(
        { name: 'Tools of trade', description: 'Power tools, hand tools, safety equipment, measuring instruments', typicalRange: [500, 10000], atoRule: 'Instant asset write-off if each item is under $20,000. Items over threshold are depreciated.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Protective clothing and safety gear', description: 'Steel-capped boots, hi-vis clothing, hard hats, gloves, safety glasses', typicalRange: [200, 2000], atoRule: 'Deductible as protective clothing. Includes laundry costs for protective clothing.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Licences and tickets', description: 'Trade licences, White Card, Elevated Work Platform, forklift licence, electrical licence renewals', typicalRange: [100, 1500], atoRule: 'Deductible if required for your current income-producing activity.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Materials and consumables', description: 'Materials purchased for jobs (if not reimbursed by client), consumables, fasteners, adhesives', typicalRange: [500, 8000], atoRule: 'Deductible as cost of goods or materials. Must be for income-producing purposes.', qualifies: true, category: 'Industry-Specific' },
      );
      break;
    case 'health-fitness':
      base.push(
        { name: 'Fitness equipment and props', description: 'Resistance bands, yoga mats, weights, TRX, massage tables, therapy equipment', typicalRange: [200, 5000], atoRule: 'Instant asset write-off if under $20,000 per item. Apportion for personal use.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Registration and insurance', description: 'AHPRA registration, Fitness Australia membership, professional indemnity, malpractice insurance', typicalRange: [300, 3000], atoRule: 'Deductible as a business expense required to operate in your profession.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Continuing education (CPD)', description: 'Mandatory CPD courses, first aid renewal, industry workshops, health qualifications', typicalRange: [200, 3000], atoRule: 'Deductible under self-education if maintaining or improving skills for current work.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Venue and facility hire', description: 'Gym rental, studio hire, clinic room rental for private practice sessions', typicalRange: [500, 10000], atoRule: 'Deductible as a business expense for premises used to earn income.', qualifies: true, category: 'Industry-Specific' },
      );
      break;
    case 'education':
      base.push(
        { name: 'Teaching materials and resources', description: 'Textbooks, worksheets, digital learning resources, LMS subscriptions', typicalRange: [200, 2000], atoRule: 'Deductible if used in your current income-producing teaching or training activity.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Online platform and hosting', description: 'Course hosting platforms (Teachable, Thinkific), webinar tools, Zoom Pro', typicalRange: [200, 2000], atoRule: 'Deductible as a business expense if used to deliver paid training or courses.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Working with Children Check and clearances', description: 'WWCC renewals, police checks, and other background clearances required for work', typicalRange: [50, 200], atoRule: 'Deductible if required for your current employment or business.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Professional development and accreditation', description: 'Teaching qualifications, TAE upgrades, accreditation renewals, professional association fees', typicalRange: [300, 3000], atoRule: 'Deductible under self-education if directly related to current income-producing activity.', qualifies: true, category: 'Industry-Specific' },
      );
      break;
    case 'photography-video':
      base.push(
        { name: 'Camera and lens equipment', description: 'Camera bodies, lenses, tripods, gimbals, lighting kits, audio equipment', typicalRange: [500, 15000], atoRule: 'Instant asset write-off if each item is under $20,000. Items over threshold are depreciated over effective life.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Editing software', description: 'Adobe Premiere, Final Cut Pro, DaVinci Resolve, Lightroom, Capture One', typicalRange: [300, 2000], atoRule: 'Deductible as a business expense. Subscription costs deductible in year paid.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Storage and backup', description: 'External hard drives, NAS storage, cloud backup services, memory cards', typicalRange: [200, 2000], atoRule: 'Deductible as a business expense. Instant write-off if under $20,000 per item.', qualifies: true, category: 'Industry-Specific' },
        { name: 'Location fees and permits', description: 'Location hire for shoots, council permits, prop hire, studio rental', typicalRange: [200, 5000], atoRule: 'Deductible as a business expense directly related to income-producing activity.', qualifies: true, category: 'Industry-Specific' },
      );
      break;
  }
  return base;
}

function buildDeductions(
  industry: Industry,
  arrangements: WorkArrangements,
  income: number,
): Deduction[] {
  const deductions: Deduction[] = [];

  // --- Home Office ---
  if (arrangements.workFromHome) {
    deductions.push({
      name: 'Home office — fixed rate method (67c/hour)',
      description: 'Claim 67 cents per hour worked from home. Covers electricity, phone, internet, stationery, and computer consumables. Must keep hours record for the full year.',
      typicalRange: [1200, 2800],
      atoRule: 'ATO revised fixed rate: 67c/hour. Must keep record of total hours worked from home for the entire income year. Cannot claim separate deductions for items covered by this rate.',
      qualifies: true,
      category: 'Home Office',
    });
    deductions.push({
      name: 'Home office — actual cost method (alternative)',
      description: 'Calculate the actual cost of running your home office: electricity, internet, phone, depreciation of furniture, and cleaning of dedicated office space. Often yields a higher claim.',
      typicalRange: [2000, 6000],
      atoRule: 'Must have a dedicated workspace. Calculate actual expenses and apportion by floor area or usage. Need receipts for every expense. Cannot use both methods simultaneously.',
      qualifies: true,
      category: 'Home Office',
    });
    deductions.push({
      name: 'Office furniture and equipment',
      description: 'Desk, ergonomic chair, bookshelf, desk lamp, standing desk converter — items used in your home office.',
      typicalRange: [200, 3000],
      atoRule: 'Instant asset write-off if under $20,000 per item. Items over threshold depreciated over effective life. Apportion for business-use percentage.',
      qualifies: true,
      category: 'Home Office',
    });
  } else {
    deductions.push({
      name: 'Home office — fixed rate method (67c/hour)',
      description: 'Claim 67 cents per hour worked from home. You indicated you do not regularly work from home.',
      typicalRange: [0, 500],
      atoRule: 'ATO revised fixed rate: 67c/hour. Only claimable if you work from home.',
      qualifies: false,
      category: 'Home Office',
    });
  }

  // --- Vehicle & Travel ---
  if (arrangements.useVehicle) {
    deductions.push({
      name: 'Vehicle — cents per kilometre method (85c/km)',
      description: 'Claim 85 cents per business kilometre, up to 5,000 km per year without a logbook. Covers fuel, registration, insurance, depreciation, and maintenance.',
      typicalRange: [500, 4250],
      atoRule: 'ATO rate: 85c/km for 2025-26. Maximum 5,000 km without logbook. Must have reasonable basis for estimate. Does not require receipts for running costs.',
      qualifies: true,
      category: 'Vehicle & Travel',
    });
    deductions.push({
      name: 'Vehicle — logbook method (alternative)',
      description: 'Claim the business-use percentage of all vehicle running costs. Requires a 12-week logbook. Better for high-mileage or high business-use situations.',
      typicalRange: [2000, 10000],
      atoRule: 'Must keep a 12-week logbook recording every trip. Business-use percentage applied to total running costs. Logbook valid for 5 years unless circumstances change.',
      qualifies: true,
      category: 'Vehicle & Travel',
    });
  } else {
    deductions.push({
      name: 'Vehicle — cents per kilometre method (85c/km)',
      description: 'Claim 85 cents per business kilometre. You indicated you do not use a vehicle for business.',
      typicalRange: [0, 0],
      atoRule: 'ATO rate: 85c/km for 2025-26. Only claimable for business travel, not commuting.',
      qualifies: false,
      category: 'Vehicle & Travel',
    });
  }

  if (arrangements.travelForWork) {
    deductions.push({
      name: 'Overnight travel — accommodation',
      description: 'Hotel, Airbnb, or other accommodation when travelling overnight for business purposes (client visits, conferences, project work).',
      typicalRange: [500, 5000],
      atoRule: 'Deductible when travelling away from home overnight for work. Must be for income-producing purpose. Receipts required.',
      qualifies: true,
      category: 'Vehicle & Travel',
    });
    deductions.push({
      name: 'Travel meals and incidentals',
      description: 'Meals while travelling overnight for work. Can claim actual costs (with receipts) or reasonable amounts per ATO determination.',
      typicalRange: [300, 3000],
      atoRule: 'ATO publishes reasonable travel allowance amounts annually. If claiming within reasonable limits, no receipts required. Above reasonable amounts, full substantiation needed.',
      qualifies: true,
      category: 'Vehicle & Travel',
    });
    deductions.push({
      name: 'Flights and transport',
      description: 'Airfares, trains, taxis, rideshare, and airport parking for business travel.',
      typicalRange: [300, 8000],
      atoRule: 'Deductible if travel is for income-producing purposes. Must keep booking confirmations, receipts, and record of business purpose.',
      qualifies: true,
      category: 'Vehicle & Travel',
    });
  }

  // --- Equipment & Technology ---
  deductions.push({
    name: 'Laptop or computer',
    description: 'Business laptop, desktop, or tablet. Instant write-off if under $20,000 threshold.',
    typicalRange: [1000, 5000],
    atoRule: 'Instant asset write-off if under $20,000 (2025-26 threshold). Items over threshold depreciated over effective life (4 years for laptops). Apportion for personal use.',
    qualifies: true,
    category: 'Equipment & Technology',
  });
  deductions.push({
    name: 'Printer, scanner, and peripherals',
    description: 'Printer, scanner, external drives, USB hubs, webcam, headset, and other peripherals.',
    typicalRange: [100, 1500],
    atoRule: 'Instant asset write-off if under $20,000 per item. Apportion for business-use percentage.',
    qualifies: true,
    category: 'Equipment & Technology',
  });

  // --- Professional Development ---
  deductions.push({
    name: 'Courses and certifications',
    description: 'Online courses, workshops, certifications, and training programs related to your current work.',
    typicalRange: [200, 5000],
    atoRule: 'Deductible under self-education if directly related to current income-producing activity. Cannot claim for study leading to a new career or first qualification.',
    qualifies: true,
    category: 'Professional Development',
  });
  deductions.push({
    name: 'Books, journals, and publications',
    description: 'Technical books, industry journals, online publication subscriptions relevant to your field.',
    typicalRange: [50, 800],
    atoRule: 'Deductible if content relates to your current income-producing activity.',
    qualifies: true,
    category: 'Professional Development',
  });
  deductions.push({
    name: 'Professional memberships',
    description: 'Industry association fees, professional body memberships, trade union fees.',
    typicalRange: [100, 1000],
    atoRule: 'Deductible if membership relates to your current income-producing activity.',
    qualifies: true,
    category: 'Professional Development',
  });

  // --- Insurance ---
  deductions.push({
    name: 'Professional indemnity insurance',
    description: 'Covers claims of negligence, errors, or omissions in your professional services.',
    typicalRange: [300, 2500],
    atoRule: 'Deductible as a business expense if required for or related to your income-producing activity.',
    qualifies: true,
    category: 'Insurance',
  });
  deductions.push({
    name: 'Public liability insurance',
    description: 'Covers injury to third parties or damage to their property arising from your business activities.',
    typicalRange: [200, 1500],
    atoRule: 'Deductible as a business expense related to your income-producing activity.',
    qualifies: true,
    category: 'Insurance',
  });
  deductions.push({
    name: 'Income protection insurance',
    description: 'Replaces your income if you cannot work due to illness or injury. Premiums are tax deductible.',
    typicalRange: [1000, 3500],
    atoRule: 'Premiums are tax deductible under section 8-1 of the ITAA 1997. Must be an income protection policy (not life or TPD).',
    qualifies: true,
    category: 'Insurance',
  });

  // --- Marketing & Advertising ---
  deductions.push({
    name: 'Website and hosting',
    description: 'Domain registration, web hosting, website maintenance, SSL certificates.',
    typicalRange: [100, 1000],
    atoRule: 'Deductible as a business marketing expense in the year incurred.',
    qualifies: true,
    category: 'Marketing & Advertising',
  });
  deductions.push({
    name: 'Online advertising',
    description: 'Google Ads, Facebook/Instagram ads, LinkedIn ads, sponsored posts for business promotion.',
    typicalRange: [100, 5000],
    atoRule: 'Deductible as advertising and marketing expense in the year incurred.',
    qualifies: true,
    category: 'Marketing & Advertising',
  });
  deductions.push({
    name: 'Business cards and print materials',
    description: 'Business cards, brochures, flyers, signage, branded merchandise for marketing purposes.',
    typicalRange: [50, 500],
    atoRule: 'Deductible as advertising expense. Keep receipts and records of business purpose.',
    qualifies: true,
    category: 'Marketing & Advertising',
  });
  deductions.push({
    name: 'Freelance platform fees',
    description: 'Service fees charged by Upwork, Fiverr, 99designs, Freelancer, Airtasker, and similar platforms.',
    typicalRange: [200, 5000],
    atoRule: 'Deductible as a cost of earning income from the platform. The fee is a business expense.',
    qualifies: true,
    category: 'Marketing & Advertising',
  });

  // --- Software & Subscriptions ---
  deductions.push({
    name: 'Accounting software',
    description: 'Xero, MYOB, QuickBooks, FreshBooks, or other bookkeeping and invoicing software.',
    typicalRange: [200, 800],
    atoRule: 'Deductible as a business expense in the year paid.',
    qualifies: true,
    category: 'Software & Subscriptions',
  });
  deductions.push({
    name: 'Project management and productivity tools',
    description: 'Notion, Asana, Trello, Slack, Monday.com, Microsoft 365, Google Workspace.',
    typicalRange: [100, 1500],
    atoRule: 'Deductible as a business expense if used for income-producing activity. Apportion for personal use.',
    qualifies: true,
    category: 'Software & Subscriptions',
  });
  deductions.push({
    name: 'Cloud storage and backup',
    description: 'Dropbox, Google Drive, iCloud, Backblaze — cloud storage used for business files.',
    typicalRange: [50, 500],
    atoRule: 'Deductible as a business expense. Apportion if also used for personal storage.',
    qualifies: true,
    category: 'Software & Subscriptions',
  });

  // --- Phone & Internet ---
  if (arrangements.usePhoneForBusiness) {
    deductions.push({
      name: 'Phone plan — business portion',
      description: 'Claim the business-use percentage of your phone plan. Keep a 4-week diary to establish the usage pattern, then apply to the full year.',
      typicalRange: [400, 1500],
      atoRule: 'Deductible for the business-use percentage. Must keep a 4-week diary to establish usage pattern. Apply that percentage to the full year.',
      qualifies: true,
      category: 'Software & Subscriptions',
    });
    deductions.push({
      name: 'Internet plan — business portion',
      description: 'Claim the business-use percentage of your internet plan (not already covered if using the 67c/hour home office fixed rate).',
      typicalRange: [300, 1000],
      atoRule: 'If using actual cost method for home office, claim separately. If using fixed rate method, internet is already included in the 67c/hour rate.',
      qualifies: true,
      category: 'Software & Subscriptions',
    });
  }

  // --- Office Rent ---
  if (arrangements.rentOffice) {
    deductions.push({
      name: 'Office or co-working space rent',
      description: 'Rent for a dedicated office, studio, or co-working membership fees.',
      typicalRange: [2000, 15000],
      atoRule: 'Fully deductible as a business expense. Keep lease agreements and payment records.',
      qualifies: true,
      category: 'Home Office',
    });
  }

  // --- Subcontractors & Employees ---
  if (arrangements.haveEmployeesOrSubcontractors) {
    deductions.push({
      name: 'Subcontractor payments',
      description: 'Payments to subcontractors for work delivered as part of your business. Must hold their ABN and issue payment summaries.',
      typicalRange: [2000, 50000],
      atoRule: 'Deductible as a business expense. Must withhold tax if no ABN provided. Keep records of all payments and contractor invoices.',
      qualifies: true,
      category: 'Equipment & Technology',
    });
    deductions.push({
      name: 'Employee wages and super',
      description: 'Wages paid to employees, plus the 11.5% super guarantee contribution (2025-26 rate).',
      typicalRange: [5000, 100000],
      atoRule: 'Deductible as a business expense. Must meet SG obligations (11.5% for 2025-26). Keep payroll records for 7 years.',
      qualifies: true,
      category: 'Equipment & Technology',
    });
  }

  // --- General (always applicable) ---
  deductions.push({
    name: 'Tax agent and accounting fees',
    description: 'Cost of having a tax agent prepare and lodge your return, BAS preparation, bookkeeping fees.',
    typicalRange: [300, 2000],
    atoRule: 'Deductible in the year you pay them. Includes BAS agent fees and accounting software.',
    qualifies: true,
    category: 'Software & Subscriptions',
  });
  deductions.push({
    name: 'Bank fees and merchant charges',
    description: 'Business account fees, Stripe/PayPal transaction fees, credit card annual fees (business portion).',
    typicalRange: [100, 1500],
    atoRule: 'Deductible as a business expense. Apportion for business-use percentage on mixed-use accounts.',
    qualifies: true,
    category: 'Software & Subscriptions',
  });
  deductions.push({
    name: 'Stationery and office supplies',
    description: 'Pens, notebooks, paper, printer cartridges, postage, and other consumables.',
    typicalRange: [50, 500],
    atoRule: 'Deductible as a business expense. If using 67c/hour home office rate, stationery is already included.',
    qualifies: true,
    category: 'Equipment & Technology',
  });

  // --- Industry-Specific ---
  const industryDeductions = getIndustryDeductions(industry);
  deductions.push(...industryDeductions);

  return deductions;
}

/* ---- Component ---- */

export default function TaxDeductionFinder() {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [arrangements, setArrangements] = useState<WorkArrangements>({
    workFromHome: false,
    useVehicle: false,
    travelForWork: false,
    rentOffice: false,
    usePhoneForBusiness: false,
    haveEmployeesOrSubcontractors: false,
  });
  const [annualIncome, setAnnualIncome] = useState<string>('');
  const [showResults, setShowResults] = useState(false);
  const [copied, setCopied] = useState(false);

  const parsedIncome = parseFloat(annualIncome.replace(/[^0-9.]/g, '')) || 0;

  const toggleArrangement = (key: keyof WorkArrangements) => {
    setArrangements((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const deductions = useMemo(() => {
    if (!industry) return [];
    return buildDeductions(industry, arrangements, parsedIncome);
  }, [industry, arrangements, parsedIncome]);

  const qualifyingDeductions = useMemo(() => deductions.filter((d) => d.qualifies), [deductions]);
  const nonQualifyingDeductions = useMemo(() => deductions.filter((d) => !d.qualifies), [deductions]);

  const categories = useMemo(() => {
    const cats: Record<string, Deduction[]> = {};
    for (const d of qualifyingDeductions) {
      if (!cats[d.category]) cats[d.category] = [];
      cats[d.category].push(d);
    }
    return cats;
  }, [qualifyingDeductions]);

  const estimatedTotalLow = useMemo(
    () => qualifyingDeductions.reduce((sum, d) => sum + d.typicalRange[0], 0),
    [qualifyingDeductions],
  );
  const estimatedTotalHigh = useMemo(
    () => qualifyingDeductions.reduce((sum, d) => sum + d.typicalRange[1], 0),
    [qualifyingDeductions],
  );

  const marginalRate = getMarginalRate(parsedIncome);
  const taxSavingsLow = Math.round(estimatedTotalLow * marginalRate);
  const taxSavingsHigh = Math.round(estimatedTotalHigh * marginalRate);

  const handleGenerate = () => {
    setShowResults(true);
    setStep(5);
  };

  const handleCopyResults = () => {
    const lines: string[] = [];
    lines.push('TAX DEDUCTION FINDER — PERSONALISED RESULTS');
    lines.push(`Industry: ${INDUSTRIES.find((i) => i.value === industry)?.label || ''}`);
    lines.push(`Annual Income: ${formatCurrency(parsedIncome)}`);
    lines.push(`Marginal Tax Rate: ${getTaxBracketLabel(parsedIncome)}`);
    lines.push('');
    lines.push(`Qualifying Deductions: ${qualifyingDeductions.length}`);
    lines.push(`Estimated Total Deductions: ${formatCurrency(estimatedTotalLow)} — ${formatCurrency(estimatedTotalHigh)}`);
    lines.push(`Estimated Tax Savings: ${formatCurrency(taxSavingsLow)} — ${formatCurrency(taxSavingsHigh)}`);
    lines.push('');

    for (const [category, items] of Object.entries(categories)) {
      lines.push(`--- ${category} ---`);
      for (const item of items) {
        lines.push(`  [x] ${item.name}`);
        lines.push(`      ${item.description}`);
        lines.push(`      Typical range: ${formatCurrency(item.typicalRange[0])} — ${formatCurrency(item.typicalRange[1])}`);
        lines.push(`      ATO Rule: ${item.atoRule}`);
        lines.push('');
      }
    }

    if (nonQualifyingDeductions.length > 0) {
      lines.push('--- Not Applicable Based on Your Inputs ---');
      for (const item of nonQualifyingDeductions) {
        lines.push(`  [ ] ${item.name}`);
        lines.push(`      ${item.description}`);
        lines.push('');
      }
    }

    lines.push('---');
    lines.push('Generated by InvoiceFlow Tax Deduction Finder — https://www.invoiceflow.au/tools/tax-deduction-finder');
    lines.push('Disclaimer: This is an estimate only. Consult a registered tax agent for personalised advice.');

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const canProceedStep1 = industry !== null;
  const canProceedStep3 = parsedIncome > 0;

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all text-sm';

  return (
    <div className="space-y-8">
      {/* Progress indicator */}
      {!showResults && (
        <div className="flex items-center justify-center gap-2 mb-4">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (s < step) setStep(s);
                }}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  s === step
                    ? 'bg-emerald-500 text-white'
                    : s < step
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 cursor-pointer hover:bg-emerald-500/30'
                    : 'bg-white/5 text-slate-500 border border-white/10'
                }`}
              >
                {s < step ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  s
                )}
              </button>
              {s < 4 && (
                <div className={`w-8 sm:w-12 h-0.5 ${s < step ? 'bg-emerald-500/40' : 'bg-white/10'}`} />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Step 1: Industry Selection */}
      {step === 1 && !showResults && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Step 1: Your Industry</h3>
          <p className="text-sm text-slate-400 mb-6">
            Select the industry that best describes your freelance work. This determines which
            industry-specific deductions apply to you.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.value}
                onClick={() => setIndustry(ind.value)}
                className={`px-4 py-4 rounded-xl text-left transition-all ${
                  industry === ind.value
                    ? 'bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 border border-emerald-500/40'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <p className={`text-sm font-semibold mb-0.5 flex items-center gap-2 ${
                  industry === ind.value ? 'text-emerald-400' : 'text-slate-300'
                }`}>
                  <span className="text-lg">{ind.icon}</span>
                  {ind.label}
                </p>
              </button>
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={() => canProceedStep1 && setStep(2)}
              disabled={!canProceedStep1}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                canProceedStep1
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-white hover:from-emerald-400 hover:to-emerald-300'
                  : 'bg-white/5 text-slate-500 cursor-not-allowed'
              }`}
            >
              Next: Work Arrangements
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Work Arrangements */}
      {step === 2 && !showResults && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Step 2: Work Arrangements</h3>
          <p className="text-sm text-slate-400 mb-6">
            Check all that apply. This determines which expense categories you are eligible to claim.
          </p>
          <div className="space-y-3">
            {WORK_ARRANGEMENT_OPTIONS.map((option) => (
              <label
                key={option.key}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={arrangements[option.key]}
                    onChange={() => toggleArrangement(option.key)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 peer-checked:bg-emerald-500/30 peer-checked:border-emerald-500/50 transition-all flex items-center justify-center">
                    <svg
                      className={`w-3 h-3 text-emerald-400 transition-opacity ${
                        arrangements[option.key] ? 'opacity-100' : 'opacity-0'
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
                <div>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">
                    {option.label}
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">{option.description}</p>
                </div>
              </label>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-3 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-emerald-500 to-emerald-400 text-white hover:from-emerald-400 hover:to-emerald-300 transition-all"
            >
              Next: Annual Income
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Annual Income */}
      {step === 3 && !showResults && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Step 3: Annual Income</h3>
          <p className="text-sm text-slate-400 mb-6">
            Enter your approximate gross annual freelance income. This is used to calculate your
            marginal tax rate and estimate the actual dollar savings from your deductions.
          </p>
          <div className="max-w-md">
            <label className="block text-sm font-medium text-slate-300 mb-1.5">
              Approximate gross annual income (AUD)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
              <input
                type="text"
                value={annualIncome}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, '');
                  setAnnualIncome(val);
                }}
                className={`${inputClass} pl-8`}
                placeholder="e.g. 120000"
              />
            </div>
            {parsedIncome > 0 && (
              <div className="mt-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
                <p className="text-xs text-emerald-400">
                  Your marginal tax rate: <span className="font-semibold">{getTaxBracketLabel(parsedIncome)}</span>
                  {marginalRate > 0 && (
                    <span className="text-slate-400"> — every $1,000 in deductions saves you {formatCurrency(Math.round(marginalRate * 1000))} in tax</span>
                  )}
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={() => canProceedStep3 && setStep(4)}
              disabled={!canProceedStep3}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                canProceedStep3
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-white hover:from-emerald-400 hover:to-emerald-300'
                  : 'bg-white/5 text-slate-500 cursor-not-allowed'
              }`}
            >
              Next: Review
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Review & Generate */}
      {step === 4 && !showResults && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white heading-font mb-2">Step 4: Review Your Details</h3>
          <p className="text-sm text-slate-400 mb-6">
            Confirm your details are correct, then generate your personalised deduction checklist.
          </p>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-500 font-medium mb-1">Industry</p>
              <p className="text-sm text-white font-medium">
                {INDUSTRIES.find((i) => i.value === industry)?.icon}{' '}
                {INDUSTRIES.find((i) => i.value === industry)?.label}
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-500 font-medium mb-1">Work Arrangements</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {WORK_ARRANGEMENT_OPTIONS.filter((o) => arrangements[o.key]).map((o) => (
                  <span
                    key={o.key}
                    className="inline-flex items-center px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs text-emerald-400 font-medium"
                  >
                    {o.label}
                  </span>
                ))}
                {Object.values(arrangements).every((v) => !v) && (
                  <span className="text-xs text-slate-500">None selected</span>
                )}
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-slate-500 font-medium mb-1">Annual Income</p>
              <p className="text-sm text-white font-medium">
                {formatCurrency(parsedIncome)}{' '}
                <span className="text-slate-500">({getTaxBracketLabel(parsedIncome)} marginal rate)</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(3)}
              className="px-6 py-3 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button
              onClick={handleGenerate}
              className="px-8 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-emerald-500 to-emerald-400 text-white hover:from-emerald-400 hover:to-emerald-300 transition-all"
            >
              Find My Deductions
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {showResults && (
        <>
          {/* Summary Card */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 border border-emerald-500/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Your Deduction Summary</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 font-medium mb-1">Qualifying Deductions</p>
                <p className="text-3xl font-bold text-emerald-400">{qualifyingDeductions.length}</p>
                <p className="text-xs text-slate-500 mt-1">of {deductions.length} total</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 font-medium mb-1">Estimated Total Deductions</p>
                <p className="text-xl font-bold text-white">
                  {formatCurrency(estimatedTotalLow)} &ndash; {formatCurrency(estimatedTotalHigh)}
                </p>
                <p className="text-xs text-slate-500 mt-1">typical claim range</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 font-medium mb-1">Estimated Tax Savings</p>
                <p className="text-xl font-bold text-emerald-400">
                  {formatCurrency(taxSavingsLow)} &ndash; {formatCurrency(taxSavingsHigh)}
                </p>
                <p className="text-xs text-slate-500 mt-1">at {getTaxBracketLabel(parsedIncome)} marginal rate</p>
              </div>
            </div>
          </div>

          {/* Categorised Deductions */}
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white heading-font mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                {category}
              </h3>
              <div className="space-y-3">
                {items.map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-emerald-500/30 border border-emerald-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm text-white font-semibold">{item.name}</h4>
                          <span className="text-xs text-emerald-400 font-medium whitespace-nowrap">
                            {formatCurrency(item.typicalRange[0])} &ndash; {formatCurrency(item.typicalRange[1])}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                        <p className="text-xs text-slate-500 mt-2 italic">{item.atoRule}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Non-qualifying deductions */}
          {nonQualifyingDeductions.length > 0 && (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white heading-font mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-500 rounded-full" />
                Not Applicable Based on Your Inputs
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                These deductions did not qualify based on your selections. If your circumstances change, revisit this tool.
              </p>
              <div className="space-y-3">
                {nonQualifyingDeductions.map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 opacity-60">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm text-slate-400 font-semibold">{item.name}</h4>
                        <p className="text-xs text-slate-500 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleCopyResults}
              className="px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-emerald-500 to-emerald-400 text-white hover:from-emerald-400 hover:to-emerald-300 transition-all"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Results to Clipboard'}
            </button>
            <button
              onClick={handlePrint}
              className="px-6 py-3 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-all"
            >
              Print Results
            </button>
            <button
              onClick={() => {
                setShowResults(false);
                setStep(1);
                setIndustry(null);
                setArrangements({
                  workFromHome: false,
                  useVehicle: false,
                  travelForWork: false,
                  rentOffice: false,
                  usePhoneForBusiness: false,
                  haveEmployeesOrSubcontractors: false,
                });
                setAnnualIncome('');
              }}
              className="px-6 py-3 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-all"
            >
              Start Over
            </button>
          </div>

          {/* Related Tools */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white heading-font mb-4">Related Tools</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                href="/tools/wfh-deduction-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                  WFH Deduction Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate your exact home office deduction
                </p>
              </a>
              <a
                href="/tools/vehicle-expense-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                  Vehicle Expense Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Compare cents/km vs logbook methods
                </p>
              </a>
              <a
                href="/tools/expense-deduction-calculator"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                  Expense Deduction Calculator
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Calculate deductions for individual expenses
                </p>
              </a>
              <a
                href="/tools/eofy-checklist"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-xl p-4 transition-all group"
              >
                <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                  EOFY Checklist
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Complete end of financial year preparation
                </p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              This tool provides estimates based on typical freelancer claim ranges and ATO 2025&ndash;26 rules.
              Actual deductions depend on your specific circumstances, records, and the proportion of business use.
              This does not constitute tax or financial advice. Consult a registered tax agent for personalised guidance.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
