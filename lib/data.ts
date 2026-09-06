export const profile = {
  name: "Aagam Jain",
  title: "Finance Professional | FP&A | Financial Analysis",
  tagline: "Open to Opportunities in Finance | FP&A | Financial Analysis",
  location: "Delhi NCR, India",
  email: "aagammjain24@gmail.com",
  phone: "+91-8931891616",
  phoneHref: "tel:+918931891616",
  linkedin: "https://linkedin.com/in/aagam-jain2408",
  github: "https://github.com/aagamjain24-Fin",
  resumePath: "/Aagam_Jain_Resume.pdf",
  summary:
    "Finance professional with 11 months of experience in FP&A, budgeting, forecasting, financial modeling, variance analysis, and management reporting within a manufacturing environment. Experienced in preparing annual budgets, analyzing Budget vs. Actual performance, identifying cost drivers, and developing Excel-based financial models and MIS dashboards. Strong analytical and problem-solving skills with the ability to translate financial data into actionable business insights.",
};

export const highlights = [
  { value: "11 Months", label: "Experience" },
  { value: "FP&A", label: "Budgeting & Forecasting" },
  { value: "Financial Modelling", label: "Excel-based Models" },
  { value: "Variance Analysis", label: "Budget vs Actual" },
  { value: "MIS Reporting", label: "Management Dashboards" },
  { value: "Advanced Excel", label: "Pivot, XLOOKUP, SUMIFS" },
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
  relatedModels?: boolean;
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
    relatedModels: true,
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
      "Financial Forecasting",
      "Business Analysis",
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

export const aiTools = [
  { name: "ChatGPT", use: "Research & drafting support" },
  { name: "Claude", use: "Data interpretation & documentation" },
  { name: "Google Gemini", use: "Research & workflow support" },
  { name: "Microsoft Copilot", use: "Productivity in Office workflows" },
];

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
  {
    id: "cfi-fpa-challenge",
    number: "06",
    title: "CFI FP&A Challenge",
    description:
      "Completed CFI's 3-week Financial Planning & Analysis Challenge, applying core FP&A workflows in Excel.",
    skills: ["Excel", "FP&A", "Financial Analysis", "Financial Modelling"],
  },
];

export type ModelCategory =
  | "FP&A"
  | "FINANCIAL MODELLING"
  | "BUDGETING"
  | "FINANCIAL ANALYSIS"
  | "INVESTMENT ANALYSIS";

export type ModelMetric = { label: string; value: string };

export type FinancialModel = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  categories: ModelCategory[];
  skills: string[];
  sheets: string[];
  status: "available" | "credential" | "coming-soon";
  statusNote: string;
  filePath?: string;
  metrics?: ModelMetric[];
  chart?: { month: string; budget: number; actual: number }[];
};

// Monthly Budget vs Actual figures (₹ Lacs), taken directly from the
// "Dashboard" tab of the actual workbook.
export const budgetVsActualChart = [
  { month: "Jan", budget: 451.28, actual: 238.0 },
  { month: "Feb", budget: 216.7, actual: 117.97 },
  { month: "Mar", budget: 308.56, actual: 238.84 },
  { month: "Apr", budget: 232.14, actual: 153.94 },
  { month: "May", budget: 202.67, actual: 253.21 },
  { month: "Jun", budget: 171.54, actual: 199.44 },
  { month: "Jul", budget: 301.57, actual: 189.59 },
  { month: "Aug", budget: 366.73, actual: 360.64 },
  { month: "Sep", budget: 340.19, actual: 377.79 },
  { month: "Oct", budget: 293.77, actual: 477.61 },
  { month: "Nov", budget: 384.75, actual: 640.52 },
  { month: "Dec", budget: 334.38, actual: 202.82 },
];

export const financialModels: FinancialModel[] = [
  {
    id: "budget-vs-actual",
    number: "01",
    name: "Budget vs Actual Financial Model",
    subtitle: "FP&A | Budgeting | Variance Analysis",
    description:
      "An Excel-based Budget vs Actual model built across three business segments — Export, B2B and B2C — tracking monthly and year-to-date performance against budget, with categorywise variance, an executive dashboard, a YTM dashboard, and a written analysis of the results.",
    categories: ["FP&A", "BUDGETING", "FINANCIAL ANALYSIS"],
    skills: ["Excel", "Variance Analysis", "Budgeting", "Dashboard Design", "SUMIFS", "Pivot Tables"],
    sheets: [
      "Overall_MONTHLY_SALES",
      "Categorywise_Variance",
      "Dashboard",
      "YTM_Dashboard",
      "Analysis",
      "QTY_SOLD_BudVSAct_OVERALL",
      "QTY_SOLD_BudVSAct_Marketwise",
    ],
    status: "available",
    statusNote: "Available",
    filePath: "/models/Budget_vs_Actual_Model_AagamJain.xlsx",
    metrics: [
      { label: "Annual achievement", value: "96%" },
      { label: "Total budget (FY)", value: "₹3,604.3L" },
      { label: "Total actual (FY)", value: "₹3,450.4L" },
      { label: "Strongest segment", value: "B2C" },
    ],
    chart: budgetVsActualChart,
  },
  {
    id: "cfi-fpa-challenge",
    number: "02",
    name: "CFI — FP&A Challenge",
    subtitle: "3-Week Financial Planning & Analysis Challenge",
    description:
      "A 3-week FP&A challenge from Corporate Finance Institute, working across three simulated business units. Built out each unit's Income Statement and Balance Sheet, consolidated them into a group view, produced a forecast using Excel's FORECAST.ETS, and finished with an executive dashboard comparing full-year outlook to budget with written variance commentary.",
    categories: ["FP&A", "FINANCIAL MODELLING"],
    skills: [
      "Excel",
      "FP&A",
      "Group Consolidation",
      "FORECAST.ETS",
      "Variance Commentary",
      "KPI Dashboarding",
    ],
    sheets: [
      "Cover",
      "Instructions",
      "Business A",
      "Business B",
      "Business C",
      "Group Consolidation",
      "Week 2 Forecast",
      "Week 3 Dashboard",
    ],
    status: "credential",
    statusNote: "Completed — workbook not publicly distributed (CFI course material)",
  },
  {
    id: "three-statement-model",
    number: "03",
    name: "Three-Statement Linked Financial Model",
    subtitle: "Financial Modelling",
    description:
      "A linked financial model demonstrating the relationship between the Income Statement, Balance Sheet and Cash Flow Statement.",
    categories: ["FINANCIAL MODELLING"],
    skills: ["Excel", "Financial Modelling", "Forecasting"],
    sheets: [],
    status: "coming-soon",
    statusNote: "Coming Soon",
  },
];

export const modelFilters: ("ALL" | ModelCategory)[] = [
  "ALL",
  "FP&A",
  "FINANCIAL MODELLING",
  "BUDGETING",
  "FINANCIAL ANALYSIS",
  "INVESTMENT ANALYSIS",
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
  { href: "#models", label: "Models" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
