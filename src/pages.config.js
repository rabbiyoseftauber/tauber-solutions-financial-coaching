import AdminCoaches from './pages/AdminCoaches';
import AdminDashboard from './pages/AdminDashboard';
import AdminLegal from './pages/AdminLegal';
import AdminResources from './pages/AdminResources';
import AdminSettings from './pages/AdminSettings';
import Affiliates from './pages/Affiliates';
import Coaches from './pages/Coaches';
import Community from './pages/Community';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import Sitemap from './pages/Sitemap';
import TermsAndConditions from './pages/TermsAndConditions';
import TestEmail from './pages/TestEmail';
import Testimonials from './pages/Testimonials';
import Tools from './pages/Tools';
import UK from './pages/UK';
import UKCoaches from './pages/UKCoaches';
import Pay from './pages/Pay';
import LoanCalculator from './pages/LoanCalculator';
import MortgageCalculator from './pages/MortgageCalculator';
import CommercialCalculator from './pages/CommercialCalculator';
import InvestmentCalculator from './pages/InvestmentCalculator';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AdminCoaches": AdminCoaches,
    "AdminDashboard": AdminDashboard,
    "AdminLegal": AdminLegal,
    "AdminResources": AdminResources,
    "AdminSettings": AdminSettings,
    "Affiliates": Affiliates,
    "Coaches": Coaches,
    "Community": Community,
    "Home": Home,
    "PrivacyPolicy": PrivacyPolicy,
    "Schedule": Schedule,
    "Services": Services,
    "Sitemap": Sitemap,
    "TermsAndConditions": TermsAndConditions,
    "TestEmail": TestEmail,
    "Testimonials": Testimonials,
    "Tools": Tools,
    "UK": UK,
    "UKCoaches": UKCoaches,
    "Pay": Pay,
    "LoanCalculator": LoanCalculator,
    "MortgageCalculator": MortgageCalculator,
    "CommercialCalculator": CommercialCalculator,
    "InvestmentCalculator": InvestmentCalculator,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};