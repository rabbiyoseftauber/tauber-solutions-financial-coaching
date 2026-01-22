import AdminCoaches from './pages/AdminCoaches';
import AdminDashboard from './pages/AdminDashboard';
import AdminLegal from './pages/AdminLegal';
import AdminResources from './pages/AdminResources';
import AdminSettings from './pages/AdminSettings';
import Affiliates from './pages/Affiliates';
import Coaches from './pages/Coaches';
import Commercial from './pages/Commercial';
import Community from './pages/Community';
import Home from './pages/Home';
import Investment from './pages/Investment';
import Loan from './pages/Loan';
import Mortgage from './pages/Mortgage';
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
import __Layout from './Layout.jsx';


export const PAGES = {
    "AdminCoaches": AdminCoaches,
    "AdminDashboard": AdminDashboard,
    "AdminLegal": AdminLegal,
    "AdminResources": AdminResources,
    "AdminSettings": AdminSettings,
    "Affiliates": Affiliates,
    "Coaches": Coaches,
    "Commercial": Commercial,
    "Community": Community,
    "Home": Home,
    "Investment": Investment,
    "Loan": Loan,
    "Mortgage": Mortgage,
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
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};