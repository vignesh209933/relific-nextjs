import agri from "../assets/images_home/agriculture.png";
import envi from "../assets/images_home/environment.png";
import edu from "../assets/images_home/education.png";
import heal from "../assets/images_home/healthcare.png";
import grant from "../assets/images_home/grant.png";
import kyai from "../assets/images_home/kyai.png";

import farmer from "../assets/OurProducts/farmer.svg";
import Gdash from "../assets/OurProducts/grant_dash.svg";
import Edash from "../assets/OurProducts/edu_dash.svg";
import Leaf from "../assets/OurProducts/Leafledger.svg";
import Health_dash from "../assets/OurProducts/health_dash.svg";
import Tracseed from "../assets/OurProducts/Tracseed.svg";
import sample1 from "../assets/sample_video.mp4";

import akshay_seed from "../assets/clients/Akshay-seed.jpg";
import akshaya from "../assets/clients/akshaya-seeds-logo.jpg";
import ecoagri from "../assets/clients/ECOAgri.jpg";
import idf from "../assets/clients/idf.jpg";
import Kalike from "../assets/clients/Kalike.jpg";
import sehgal from "../assets/clients/sehgal.png";
import SGIF from "../assets/clients/SGIF-logo.jpg";
import tata from "../assets/clients/tata-trusts.jpg";

import manjunatha from "../assets/team/Manjunatha.jpg";
import naganagouda from "../assets/team/Naganagouda.jpg";
import priyesh from "../assets/team/Priyesh.jpg";

import balance from "../assets/icons/balance1.svg";
import strategic from "../assets/icons/strategy-play.svg";
import friendly from "../assets/icons/userfriendly.svg";
import holistic from "../assets/icons/holistic.svg";

import row1a from "../assets/impact_images/row1_a.svg";
import row1b from "../assets/impact_images/row1_b.svg";
import row1c from "../assets/impact_images/row1_c.svg";
import row1d from "../assets/impact_images/row1_d.svg";
import row2a from "../assets/impact_images/row2_a.svg";
import row2b from "../assets/impact_images/row2_b.svg";
import row2c from "../assets/impact_images/row2_c.svg";
import row2d from "../assets/impact_images/row2_d.svg";
import row3a from "../assets/impact_images/row3_a.svg";
import row3b from "../assets/impact_images/row3_b.svg";
import row3c from "../assets/impact_images/row3_c.svg";
import row3d from "../assets/impact_images/row3_d.svg";

import r1a from "../assets/tracseed_images/row1a.svg";
import r1b from "../assets/tracseed_images/row1b.svg";
import r1c from "../assets/tracseed_images/row1c.svg";
import r2a from "../assets/tracseed_images/row2a.svg";
import r2b from "../assets/tracseed_images/row2b.svg";
import r2c from "../assets/tracseed_images/row2c.svg";

import f1a from "../assets/farmer_platform_images/row1a.svg";
import f1b from "../assets/farmer_platform_images/row1b.svg";
import f1c from "../assets/farmer_platform_images/row1c.svg";
import f2a from "../assets/farmer_platform_images/row2a.svg";
import f2b from "../assets/farmer_platform_images/row2b.svg";
import f2c from "../assets/farmer_platform_images/row2c.svg";

export const navLinks = [
  { name: "Solutions", path: "/solutions", hasDropdown: true },
  { name: "Products", path: "/products", hasDropdown: true },
  { name: "Who we serve", path: "/whoweserve", hasDropdown: false },
  { name: "About Us", path: "/aboutus", hasDropdown: false },
  { name: "Contact Us", path: "/contact", hasDropdown: false },
];

export const productDropdownItems = [
  "Farmer Platform",
  "Tracseed",
  "LeafLedger",
  "Healthcare",
  "Education",
  "Grant Management",
  "KY-AI",
];

export const solutionsDropdownItems = [
  "Agriculture",
  "Environment",
  "Healthcare",
  "Education",
  "Donor Management",
];

export const solutionsLinks = [
  { drop: "Agriculture", path: "/agri_solutions" },
  { drop: "Environment", path: "/envi_solutions" },
  { drop: "Healthcare", path: "/health_solutions" },
  { drop: "Education", path: "/edu_solutions" },
  { drop: "Donor Management", path: "/donor_solutions" },
];
export const productLinks = [
  { drop: "Farmer Platform", path: "/farmer_platform" },
  { drop: "Tracseed", path: "/tracseed" },
  { drop: "LeafLedger", path: "/leafledger" },
  { drop: "Healthcare", path: "/healthcare_platform" },
  { drop: "Education", path: "/education_platform" },
  { drop: "Grant Management", path: "/grant_platform" },
  { drop: "KY-AI", path: "/ky_ai" },
];

export const solutions = [
  {
    title: "Environment",
    image: envi,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Agriculture",
    image: agri,
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Education",
    image: edu,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    title: "Healthcare",
    image: heal,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
  {
    title: "Grant Management",
    image: grant,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
  },
  {
    title: "Ky-AI",
    image: kyai,
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
  },
];

export const segments = [
  {
    title: "Farmer Platform",
    d_title: "We help you to get advisories",
    description:
      "Our solutions are easy to use, affordable, scalable and is created keeping your challenges in mind, thus ensuring it remains a unique solution for your needs.",
    image: farmer,
    video: sample1,
  },
  {
    title: "Education Platform",
    d_title: "We design your kid's progress",
    description:
      "Our solutions are easy to use, affordable, scalable and is created keeping your challenges in mind, thus ensuring it remains a unique solution for your needs.",
    image: Edash,
    video: sample1,
  },
  {
    title: "Grant Management",
    d_title: "We help you to manage your grants",
    description:
      "Our solutions are easy to use, affordable, scalable and is created keeping your challenges in mind, thus ensuring it remains a unique solution for your needs.",
    image: Gdash,
    video: sample1,
  },
  {
    title: "Leaf Ledger",
    d_title: "We help you track your Afforestation",
    description:
      "Our solutions are easy to use, affordable, scalable and is created keeping your challenges in mind, thus ensuring it remains a unique solution for your needs.",
    image: Leaf,
    video: sample1,
  },
  {
    title: "Health Management",
    d_title: "We help manage your patients and healthcare projects",
    description:
      "Our solutions are easy to use, affordable, scalable and is created keeping your challenges in mind, thus ensuring it remains a unique solution for your needs.",
    image: Health_dash,
    video: sample1,
  },
  {
    title: "Tracseed",
    d_title: "We help trace progress of Seed organisers",
    description:
      "Our solutions are easy to use, affordable, scalable and is created keeping your challenges in mind, thus ensuring it remains a unique solution for your needs.",
    image: Tracseed,
    video: sample1,
  },
];

export const testimonials = [
  {
    text: "The digital farm management system has transformed how we track crop progress. Real-time insights and detailed analytics have helped us make better decisions. Their support team is always responsive and knowledgeable.",
    person: "Navaneeth Kumar",
    company: "Tata Trusts",
  },
  {
    text: "As an agricultural foundation, we needed a solution that could scale across multiple farmer groups. Their platform seamlessly integrated with our existing processes and the mobile app's offline functionality is particularly valuable in remote areas.",
    person: "Prasad Menon",
    company: "SGIF",
  },
  {
    text: "The precision agriculture features are outstanding. We've seen a 30% reduction in water usage and significant improvement in yield quality. Their AI recommendations for crop management are surprisingly accurate and practical.",
    person: "Akshun Verma",
    company: "Shroffs Foundation",
  },
  {
    text: "Implementation was smooth and the training support was excellent. Our farmer network adapted quickly to the system. The data insights have been invaluable for optimizing our agricultural programs and resource allocation.",
    person: "Rajesh Shinde",
    company: "Selco Foundation",
  },
  {
    text: "The grant management module has streamlined our entire funding process. We can now efficiently track impact metrics and generate comprehensive reports. It's made a significant difference in how we manage our agricultural initiatives.",
    person: "Aruna Reddy",
    company: "IFHD",
  },
  {
    text: "What stands out is their commitment to rural connectivity issues. The platform works reliably even with limited internet access, and the local language support has made it accessible to all our farmer members.",
    person: "Suresh Patel",
    company: "BAIF Development",
  },
  {
    text: "The weather integration and crop advisory services have been game-changers for our small-holder farmers. We've seen improved decision-making and risk management across our network.",
    person: "Meera Shenoy",
    company: "ACF",
  },
  {
    text: "Their blockchain solution for supply chain transparency has helped us build trust with buyers. The digital documentation and traceability features have opened new market opportunities for our farmer produce.",
    person: "Vijay Mahajan",
    company: "PRADAN",
  },
];

export const clients = [
  { id: 1, logo: akshay_seed, name: "Akshay Seedpreneurs" },
  { id: 2, logo: akshaya, name: "Akshaya Seeds" },
  { id: 3, logo: ecoagri, name: "ECO agripreneurs" },
  { id: 4, logo: idf, name: "IDF" },
  { id: 5, logo: Kalike, name: "Kalike" },
  { id: 6, logo: sehgal, name: "Sehgal Foundation" },
  { id: 7, logo: SGIF, name: "SGI Foundation" },
  { id: 8, logo: tata, name: "Tata Trusts" },
  // Add more clients as needed
];

export const teamMembers = [
  {
    name: "Manjunatha Thyagaraj",
    designation: "CEO & Founder",
    image: manjunatha,
    linkedin: "https://www.linkedin.com/in/manjunathathyagaraj/",
  },
  {
    name: "Naganagouda Malkaji",
    designation: "Co-founder & Chief Agri Advisor",
    image: naganagouda,
    linkedin: "https://www.linkedin.com/in/naganagouda-malkaji-18244a8/",
  },
  {
    name: "Priyesh Raghavan",
    designation: "Technology Lead",
    image: priyesh,
    linkedin: "https://www.linkedin.com/in/priyesh-raghavan-2528b9a/",
  },
];

export const coreValues = [
  {
    title: "Holistic approach",
    image: holistic, // Replace with actual icon if needed
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
  },
  {
    title: "Strategic insight",
    image: strategic, // Replace with actual icon if needed
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
  },
  {
    title: "Balance",
    image: balance, // Replace with actual icon if needed
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
  },
  {
    title: "User friendly",
    image: friendly, // Replace with actual icon if needed
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
  },
];

export const categories = [
  {
    title: "Farmer producer",
    items: [
      "Farmer communities",
      "Input providers",
      "Agri consortia",
      "Agri innovations",
      "Agri branding",
      "Fertiliser research companies",
    ],
  },
  {
    title: "Government",
    items: [
      "Agro boards",
      "Rice development",
      "Pulse development",
      "Krisi vistara",
      "Nabard",
    ],
  },
  {
    title: "NGOs",
    items: [
      "Skill development",
      "Sustainable practice",
      "Farmer welfare",
      "Krisi vistara",
    ],
  },
  {
    title: "Co-operatives",
    items: ["Development co-op", "Farmer co-operatives"],
  },
  {
    title: "Healthcare",
    items: [
      "Agri innovations",
      "Agri branding",
      "Fertiliser research companies",
    ],
  },
  {
    title: "Financial services",
    items: [
      "Skill development",
      "Sustainable practice",
      "Farmer welfare",
      "Krisi vistara",
    ],
  },
  {
    title: "Education",
    items: [
      "Skill development",
      "Sustainable practice",
      "Farmer welfare",
      "Krisi vistara",
    ],
  },
  {
    title: "Livelihood missions",
    items: [
      "Agro boards",
      "Rice development",
      "Pulse development",
      "Krisi vistara",
      "Nabard",
    ],
  },
];

export const impactStories = [
  {
    id: "farmer-producer", // ✅ Unique ID for navigation
    title: "Farmer Producer",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row1a,
  },
  {
    id: "input-providers",
    title: "Input Providers",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row1b,
  },
  {
    id: "ngos",
    title: "NGOs",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row1c,
  },
  {
    id: "cooperatives",
    title: "Co-operatives",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row1d,
  },
  {
    id: "agri-research",
    title: "Agri Research",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row2a,
  },
  {
    id: "agri-consortia",
    title: "Agri Consortia",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row2b,
  },
  {
    id: "government",
    title: "Government",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row2c,
  },
  {
    id: "agri-innovations",
    title: "Agri Innovations",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row2d,
  },
  {
    id: "farmer-cooperative",
    title: "Farmer Co-operative",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row3a,
  },
  {
    id: "agri-coop",
    title: "Agri Co-op",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row3b,
  },
  {
    id: "international-agri",
    title: "International Agri",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row3c,
  },
  {
    id: "livelihood-mission",
    title: "Livelihood Mission",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row3d,
  },
];

export const tracseedFeatures = [
  { title: "Connect with agriculture scientists 24x7", image: r1a },
  {
    title: "Build a network with farmers across the country.",
    image: r1b,
  },
  { title: "The complete profile management", image: r1c },
  { title: "Get real-time weather and price updates.", image: r2a },
  { title: "Feeds and other posts for your circle", image: r2b },
  { title: "Other services and support for farmers", image: r2c },
];

export const farmerPlatformFeatures = [
  { title: "Access best farming practices and techniques", image: f1a },
  { title: "Connect with agri-experts for personalized advice", image: f1b },
  { title: "Market insights and demand forecasting", image: f1c },
  { title: "Government schemes and subsidy updates", image: f2a },
  { title: "Seamless farm-to-market integration", image: f2b },
  { title: "Community forums for farmers and stakeholders", image: f2c },
];

export const leafLedgerFeatures = [
  { title: "Smart farm financial management", image: l1a },
  { title: "Track and analyze farm expenses in real-time", image: l1b },
  { title: "Automated invoicing and payment tracking", image: l1c },
  { title: "Yield-based financial planning tools", image: l2a },
  { title: "Connect with banks and financial institutions", image: l2b },
  { title: "Comprehensive reports and insights", image: l2c },
];

export const healthcareFeatures = [
  { title: "AI-driven health monitoring and insights", image: h1a },
  { title: "Seamless integration with wearable devices", image: h1b },
  { title: "Personalized nutrition and wellness plans", image: h1c },
  { title: "Secure telehealth consultations", image: h2a },
  { title: "Electronic medical records and analytics", image: h2b },
  { title: "Community support for mental well-being", image: h2c },
];

export const educationFeatures = [
  { title: "AI-powered adaptive learning", image: e1a },
  { title: "Interactive and immersive course modules", image: e1b },
  { title: "Personalized skill development roadmap", image: e1c },
  { title: "Integration with industry mentors and experts", image: e2a },
  { title: "Automated assessment and feedback system", image: e2b },
  { title: "Access to research and academic resources", image: e2c },
];

export const grantManagementFeatures = [
  { title: "AI-driven grant matching and recommendations", image: g1a },
  { title: "Streamlined application submission process", image: g1b },
  { title: "Real-time tracking of grant applications", image: g1c },
  { title: "Automated compliance and reporting tools", image: g2a },
  { title: "Secure document storage and collaboration", image: g2b },
  { title: "Insights and analytics for funding optimization", image: g2c },
];

export const kyAIFeatures = [
  { title: "AI-driven knowledge management system", image: k1a },
  { title: "Smart search and contextual recommendations", image: k1b },
  { title: "Automated knowledge tagging and categorization", image: k1c },
  { title: "Collaborative tools for research and innovation", image: k2a },
  { title: "Deep insights and predictive analytics", image: k2b },
  { title: "Secure and scalable AI infrastructure", image: k2c },
];
