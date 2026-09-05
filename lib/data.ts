export const profile = {
  name: "Aagam Jain",
  title: "Finance | FP&A | Financial Analysis",
  location: "Delhi NCR, India",
  email: "aagammjain24@gmail.com",
  phone: "+91-8931891616",
  phoneHref: "tel:+918931891616",
  linkedin: "https://linkedin.com/in/aagam-jain2408",
  github: "https://github.com/aagamjain24",
  resumePath: "/Aagam_Jain_Resume.pdf",
  summary:
    "Finance professional with 11 months of experience in FP&A, budgeting, forecasting, financial modeling, variance analysis, and management reporting within a manufacturing environment. Experienced in preparing annual budgets, analyzing Budget vs. Actual performance, identifying cost drivers, and developing Excel-based financial models and MIS dashboards. Strong analytical and problem-solving skills with the ability to translate financial data into actionable business insights.",
};

export const highlights = [
  { value: "11 Months", label: "Professional Experience" },
  { value: "FP&A", label: "Budgeting & Forecasting" },
  { value: "Advanced Excel", label: "Financial Models & Dashboards" },
  { value: "Finance", label: "Analysis & Reporting" },
];

export const aboutAreas = [
  "Annual budgeting",
  "Budget vs Actual analysis",
  "Financial forecasting",
  "Cost-driver analysis",
  "Financial modelling",
  "MIS dashboards",
  "Management reporting",
  "Product costing",
  "Expense analysis",
];

export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "dwarka-gems",
    company: "Dwarka Gems LTD",
    role: "Finance Executive – FP&A / AR",
    period: "December 2025 – May 2026",
    location: "Jaipur, India",
    bullets: [
      "Prepared the FY2026 annual budget and financial forecasts across sales, production, marketing, finance, and administrative functions, supporting business planning and FP&A activities.",
      "Performed monthly Budget vs. Actual variance analysis, investigated key cost drivers and financial performance deviations, and provided insights to support management decision-making.",
      "Developed and maintained Excel-based financial models, MIS dashboards, financial reports, and performance trackers for budgeting, forecasting, variance analysis, and management reporting.",
      "Analyzed direct and indirect expenses, performed product costing, and evaluated key cost drivers to support expense control and financial efficiency.",
      "Supported account reconciliations, invoice verification, and month-end reporting, ensuring accurate financial records and timely management reporting.",
    ],
    tags: [
      "FY2026 Budget",
      "Forecasting",
      "Budget vs Actual",
      "Variance Analysis",
      "Cost Analysis",
      "Product Costing",
      "Excel Models",
      "MIS Reporting",
      "Reconciliation",
      "Month-End Reporting",
    ],
  },
  {
    id: "marquee-equity",
    company: "Marquee Equity",
    role: "Investment Banking Fellow — Part Time",
    period: "August 2025 – December 2025",
    location: "Remote, India",
    bullets: [
      "Performed financial and market analysis of global startups, evaluating business models, financial metrics, and growth potential to support fundraising and investment decisions.",
      "Evaluated business models, financial metrics, and market positioning to assist in investor-company matchmaking.",
      "Prepared well-structured research briefs and company summaries to support senior investment team decision-making.",
      "Collaborated with cross-functional teams, demonstrating analytical, communication, and stakeholder coordination skills.",
    ],
    tags: [
      "Financial Analysis",
      "Market Analysis",
      "Investment Analysis",
      "Business Models",
      "Startup Research",
      "Investor Matching",
      "Research Briefs",
      "Stakeholder Coordination",
    ],
  },
];

export type ExpertiseCard = {
  id: string;
  title: string;
  items: string[];
};

export const expertise: ExpertiseCard[] = [
  {
    id: "fpa",
    title: "FP&A",
    items: [
      "Budgeting & Forecasting",
      "Budget vs Actual Analysis",
      "Variance Analysis",
      "Cost Analysis",
      "Expense Management",
      "Financial Performance Analysis",
    ],
  },
  {
    id: "modelling",
    title: "Financial Modelling",
    items: [
      "Financial Models",
      "Business Analysis",
      "Financial Forecasting",
      "Investment Analysis",
    ],
  },
  {
    id: "mis",
    title: "MIS & Reporting",
    items: [
      "MIS Reporting",
      "KPI Tracking",
      "Performance Dashboards",
      "Management Reporting",
      "Financial Performance Analysis",
    ],
  },
  {
    id: "accounting",
    title: "Accounting & Finance",
    items: [
      "Tally ERP",
      "Journal Entry",
      "Account & Bank Reconciliation",
      "Invoice Verification",
      "Product Costing",
    ],
  },
];

export const excelSkills = [
  "Pivot Tables",
  "VLOOKUP / XLOOKUP",
  "INDEX-MATCH",
  "SUMIFS",
  "Financial Models",
  "Dashboard Automation",
];

export const otherTools = ["Power BI", "Tableau", "Tally ERP", "Microsoft Office", "SQL — Basic"];

export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    id: "budget-forecasting",
    number: "01",
    title: "FY2026 Budget & Financial Forecasting",
    description:
      "Prepared the FY2026 annual budget and financial forecasts across sales, production, marketing, finance and administrative functions.",
    skills: ["Budgeting", "Forecasting", "FP&A", "Financial Planning"],
  },
  {
    id: "budget-vs-actual",
    number: "02",
    title: "Budget vs Actual Analysis",
    description:
      "Performed monthly Budget vs Actual variance analysis, investigated key cost drivers and analyzed financial performance deviations to support management decision-making.",
    skills: ["Variance Analysis", "Cost Drivers", "Financial Analysis", "Management Reporting"],
  },
  {
    id: "excel-mis-dashboards",
    number: "03",
    title: "Excel Financial Models & MIS Dashboards",
    description:
      "Developed and maintained Excel-based financial models, MIS dashboards, financial reports and performance trackers for budgeting, forecasting, variance analysis and management reporting.",
    skills: ["Excel", "Financial Modelling", "MIS", "Dashboard Automation"],
  },
  {
    id: "product-costing",
    number: "04",
    title: "Product Costing & Expense Analysis",
    description:
      "Analyzed direct and indirect expenses, performed product costing and evaluated key cost drivers to support expense control and financial efficiency.",
    skills: ["Product Costing", "Cost Analysis", "Expense Management", "Financial Analysis"],
  },
  {
    id: "startup-analysis",
    number: "05",
    title: "Startup Financial & Market Analysis",
    description:
      "During my Investment Banking Fellowship at Marquee Equity, performed financial and market analysis of global startups, evaluating business models, financial metrics and growth potential.",
    skills: ["Investment Analysis", "Market Research", "Financial Analysis", "Business Models"],
  },
];

export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
};

export const education: EducationEntry[] = [
  {
    id: "tmu",
    degree: "Bachelor of Business Administration — Finance",
    institution: "Teerthankar Mahaveer University",
    period: "August 2022 – June 2025",
    location: "Moradabad, India",
  },
  {
    id: "mvm",
    degree: "Senior Secondary — Commerce",
    institution: "Maharishi Vidhya Mandir",
    period: "May 2021 – April 2022",
    location: "Tikamgarh, India",
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  status?: string;
};

export const certifications: Certification[] = [
  { id: "cfa", name: "CFA Level 1", issuer: "CFA Institute", status: "Currently Preparing" },
  { id: "deloitte", name: "Data Analytics Job Simulation", issuer: "Deloitte Australia · Forage" },
  { id: "ey", name: "Audit Job Simulation", issuer: "EY · Forage" },
  { id: "fin-modeling", name: "Financial Modeling", issuer: "" },
  { id: "data-analytics-finance", name: "Data Analytics in Finance", issuer: "" },
  { id: "ms-office", name: "Microsoft Office", issuer: "" },
  { id: "nism", name: "NISM SEBI Investor Certification", issuer: "" },
  { id: "tally", name: "Tally for Financial Accounting", issuer: "Great Learning" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
