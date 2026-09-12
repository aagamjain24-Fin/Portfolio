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
      "Performance Analysis",
    ],
  },
  {
    id: "modelling",
    title: "Financial Modelling & Valuation",
    items: [
      "Financial Modelling",
      "Forecasting",
      "Business Analysis",
      "DCF Valuation",
      "Valuation Fundamentals",
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
      "Financial Data Interpretation",
    ],
  },
  {
    id: "accounting",
    title: "Accounting & Finance",
    items: [
      "Account Reconciliation",
      "Bank Reconciliation",
      "Invoice Verification",
      "Product Costing",
      "Tally ERP",
      "Financial Reporting",
    ],
  },
];

export const excelSkills = [
  "Pivot Tables",
  "VLOOKUP / XLOOKUP",
  "INDEX-MATCH",
  "SUMIFS",
  "Financial Modelling",
  "Budgeting Models",
  "Variance Analysis",
  "Dashboard Creation",
  "MIS Reporting",
  "Data Cleaning",
  "Formula-driven Analysis",
];

export type ToolGroup = {
  name: string;
  level?: string;
  skills: string[];
};

export const toolGroups: ToolGroup[] = [
  {
    name: "Power BI",
    level: "Working knowledge",
    skills: [
      "Data Import & Transformation",
      "Basic Data Modelling",
      "DAX Fundamentals",
      "KPI Dashboards",
      "Interactive Visualizations",
      "Report Development",
    ],
  },
  {
    name: "Tally ERP",
    skills: [
      "Ledger & Voucher Handling",
      "Account Reconciliation",
      "Invoice Verification",
      "Financial Transactions",
      "Basic Financial Reporting",
    ],
  },
  {
    name: "Microsoft Office",
    skills: [
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Microsoft Word",
      "Presentation & Report Preparation",
      "Financial / Management Reporting",
    ],
  },
  {
    name: "Tableau",
    level: "Basic",
    skills: ["Basic Data Visualization", "Charts & Dashboards", "Data Exploration", "Basic Reporting"],
  },
  {
    name: "SQL",
    level: "Basic",
    skills: ["Basic SELECT Queries", "Filtering & Sorting", "GROUP BY", "Basic Aggregations", "Basic Data Extraction"],
  },
];

export const aiTools = [
  { name: "ChatGPT", use: "Research & drafting support" },
  { name: "Claude", use: "Data interpretation & documentation" },
  { name: "Google Gemini", use: "Research & workflow support" },
  { name: "Microsoft Copilot", use: "Productivity in Office workflows" },
];

export type CaseStudy = {
  id: string;
  number: string;
  title: string;
  summary: string;
  objective: string;
  myWork: string[];
  analysisPerformed: string[];
  keyOutputs: string[];
  skills: string[];
  tools: string[];
  relatedModelId?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "budget-forecasting",
    number: "01",
    title: "FY2026 Budget & Financial Forecasting",
    summary:
      "Prepared the FY2026 annual budget and financial forecasts across sales, production, marketing, finance and administrative functions.",
    objective:
      "Support annual financial planning at Dwarka Gems by preparing a consolidated FY2026 budget and forecast that management could monitor through the year.",
    myWork: [
      "Prepared department-level budget and forecast inputs across sales, production, marketing, finance, and administrative functions.",
      "Consolidated department-level inputs into a single FY2026 annual budget and forecast.",
      "Maintained financial and sales trackers to support ongoing monitoring against the plan.",
    ],
    analysisPerformed: [
      "Reviewed prior-period trends to inform forecast assumptions.",
      "Consolidated multiple department inputs into one FY2026 planning view.",
    ],
    keyOutputs: [
      "FY2026 annual budget and forecast.",
      "Department-level budget and financial trackers.",
    ],
    skills: ["Budgeting", "Forecasting", "FP&A", "Financial Planning"],
    tools: ["Microsoft Excel"],
    relatedModelId: "budget-vs-actual",
  },
  {
    id: "budget-vs-actual",
    number: "02",
    title: "Budget vs Actual Analysis",
    summary:
      "Performed monthly Budget vs Actual variance analysis, investigated key cost drivers and analyzed financial performance deviations to support management decision-making.",
    objective:
      "Track monthly and year-to-date performance against budget across business segments, and surface the cost drivers behind any deviation.",
    myWork: [
      "Performed monthly Budget vs Actual variance analysis at Dwarka Gems as part of ongoing FP&A responsibilities.",
      "Built and maintain a standalone Excel Budget vs Actual model across three business segments — Export, B2B and B2C — with categorywise variance, an executive dashboard, and a YTM dashboard.",
    ],
    analysisPerformed: [
      "Calculated monthly and year-to-date variance, in both value and percentage, against budget.",
      "Identified which segments and categories were driving favorable or unfavorable variance.",
      "Investigated underlying cost drivers behind performance deviations.",
    ],
    keyOutputs: [
      "Monthly Budget vs Actual variance reporting.",
      "An executive dashboard and a YTM dashboard tracking cumulative achievement — the model's own FY YTM view shows 96% overall achievement against budget.",
    ],
    skills: ["Variance Analysis", "Cost Drivers", "Financial Analysis", "Management Reporting"],
    tools: ["Microsoft Excel (Pivot Tables, SUMIFS)"],
    relatedModelId: "budget-vs-actual",
  },
  {
    id: "excel-mis-dashboards",
    number: "03",
    title: "Excel Financial Modelling & MIS Dashboards",
    summary:
      "Developed and maintained Excel-based financial models, MIS dashboards, financial reports and performance trackers for budgeting, forecasting, variance analysis and management reporting.",
    objective:
      "Give management a reliable, up-to-date view of financial performance without manual rebuilding of reports each period.",
    myWork: [
      "Developed and maintained Excel-based financial models, MIS dashboards, financial reports and performance trackers.",
      "Structured recurring reporting so it updates from underlying data rather than being rebuilt each period.",
    ],
    analysisPerformed: [
      "Built formula-driven models (pivot tables, SUMIFS, lookups) to automate recurring reporting.",
      "Linked dashboard views to underlying monthly data for budgeting, forecasting, and variance analysis.",
    ],
    keyOutputs: ["MIS dashboards.", "Recurring performance trackers and management reports."],
    skills: ["Excel", "Financial Modelling", "MIS", "Dashboard Automation"],
    tools: ["Microsoft Excel"],
    relatedModelId: "budget-vs-actual",
  },
  {
    id: "product-costing",
    number: "04",
    title: "Product Costing & Expense Analysis",
    summary:
      "Analyzed direct and indirect expenses, performed product costing and evaluated key cost drivers to support expense control and financial efficiency.",
    objective:
      "Support expense control and financial efficiency by understanding product-level cost structure across material categories.",
    myWork: [
      "Analyzed direct and indirect expenses at Dwarka Gems.",
      "Performed product costing across the company's jewellery material categories — gold, silver, brass and diamond.",
    ],
    analysisPerformed: [
      "Broke down direct versus indirect expense components.",
      "Assessed product-level cost structure across material categories.",
      "Evaluated key cost drivers affecting expense control and margins.",
    ],
    keyOutputs: ["Product costing workings by material category.", "Expense analysis supporting cost-control discussions."],
    skills: ["Product Costing", "Cost Analysis", "Expense Management", "Financial Analysis"],
    tools: ["Microsoft Excel"],
  },
  {
    id: "startup-analysis",
    number: "05",
    title: "Startup Financial & Market Analysis",
    summary:
      "During my Investment Banking Fellowship at Marquee Equity, supported financial and market analysis of global startups, evaluating business models, financial metrics and growth potential.",
    objective:
      "Support Marquee Equity's investor-company matchmaking process through startup financial and market research.",
    myWork: [
      "Supported financial and market analysis of global startups, evaluating business models, financial metrics, and growth potential to inform fundraising and investment discussions.",
      "Evaluated business models, financial metrics, and market positioning to assist in investor-company matchmaking.",
      "Prepared research briefs and company summaries for the senior investment team.",
      "Collaborated with cross-functional teams throughout the process.",
    ],
    analysisPerformed: [
      "Assessed startup financial metrics and growth potential.",
      "Evaluated business model and market positioning.",
      "Synthesized findings into structured research briefs.",
    ],
    keyOutputs: ["Company research briefs and summaries supporting investor-company matchmaking."],
    skills: ["Investment Analysis", "Market Research", "Financial Analysis", "Business Models", "Stakeholder Coordination"],
    tools: ["Microsoft Excel", "Desk research"],
  },
  {
    id: "cfi-fpa-challenge",
    number: "06",
    title: "CFI 3-Week FP&A Challenge",
    summary:
      "A structured 3-week FP&A challenge — building unit-level financials, consolidating them, forecasting the full year, and reporting results through an executive dashboard.",
    objective:
      "Complete a structured, multi-week FP&A exercise simulating group-level planning: build unit financials, consolidate them, forecast forward, and report the results.",
    myWork: [
      "Week 1 — Built the monthly Income Statement and Balance Sheet for three simulated business units, then consolidated them into a Group view versus YTD budget with written variance commentary.",
      "Week 2 — Extended each unit's actuals into a full-year outlook using Excel's FORECAST.ETS function, then rolled the three units into a consolidated Group forecast versus FY budget.",
      "Week 3 — Built an executive KPI dashboard with FY revenue and net income outlook vs budget, margin, a unit-by-unit performance table, and written executive takeaways.",
    ],
    analysisPerformed: [
      "Group consolidation and YTD variance analysis by income-statement and balance-sheet line.",
      "Time-series forecasting with FORECAST.ETS to project a full-year outlook from four months of actuals.",
      "KPI dashboarding and written variance/performance commentary.",
    ],
    keyOutputs: [
      "A consolidated Group P&L and balance-sheet view versus budget.",
      "A full-year forecast versus FY budget for each business unit and the Group.",
      "An executive dashboard with a unit performance table and written takeaways.",
    ],
    skills: ["Excel", "FP&A", "Group Consolidation", "FORECAST.ETS", "Variance Commentary", "KPI Dashboarding"],
    tools: ["Microsoft Excel"],
    relatedModelId: "cfi-fpa-challenge",
  },
];

export type ModelCategory =
  | "FP&A"
  | "FINANCIAL MODELLING"
  | "BUDGETING"
  | "FINANCIAL ANALYSIS"
  | "INVESTMENT ANALYSIS";

export type ModelMetric = { label: string; value: string };

export type ModelWeek = { label: string; summary: string };

export type FinancialModel = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  categories: ModelCategory[];
  skills: string[];
  sheets: string[];
  weeks?: ModelWeek[];
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
    name: "Budget vs Actual Analysis Model",
    subtitle: "FP&A | Budgeting | Variance Analysis",
    description:
      "An Excel-based Budget vs Actual model built across three business segments — Export, B2B and B2C — tracking monthly and year-to-date performance against budget, with categorywise variance, an executive dashboard, a YTM dashboard, and a written analysis of the results. Supports budget monitoring, variance tracking, and management decision-making.",
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
      "A 3-week FP&A challenge working across three simulated business units, moving from unit-level statements through consolidation, forecasting, and an executive dashboard.",
    categories: ["FP&A", "FINANCIAL MODELLING"],
    skills: [
      "Excel",
      "FP&A",
      "Group Consolidation",
      "FORECAST.ETS",
      "Variance Commentary",
      "KPI Dashboarding",
    ],
    sheets: ["Business A", "Business B", "Business C", "Group Consolidation", "Week 2 Forecast", "Week 3 Dashboard"],
    weeks: [
      {
        label: "Week 1",
        summary:
          "Built the monthly Income Statement and Balance Sheet for three simulated business units, then consolidated them into a Group view comparing YTD Actual to YTD Budget by line item (Revenue, COGS, Gross Profit, SG&A, Net Income, and key balance-sheet items), with written variance commentary identifying which units were driving the group's over- or under-performance.",
      },
      {
        label: "Week 2",
        summary:
          "Extended each unit's actuals into a full-year outlook using Excel's FORECAST.ETS function, then rolled the three units up into a consolidated Group forecast and compared FY Outlook to FY Budget across every income-statement line.",
      },
      {
        label: "Week 3",
        summary:
          "Built an executive KPI dashboard summarizing FY revenue and net income outlook vs budget, net income margin, and YTD variance, plus a unit-by-unit performance table with a Favorable/Unfavorable status flag and written executive takeaways on the key drivers and risks in the forecast.",
      },
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
  { href: "#skills", label: "Skills" },
  { href: "#models", label: "Models" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
