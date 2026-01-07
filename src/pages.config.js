import AdminCoaches from './pages/AdminCoaches';
import AdminDashboard from './pages/AdminDashboard';
import AdminResources from './pages/AdminResources';
import AdminSettings from './pages/AdminSettings';
import Affiliates from './pages/Affiliates';
import Coaches from './pages/Coaches';
import Community from './pages/Community';
import Home from './pages/Home';
import Services from './pages/Services';
import Sitemap from './pages/Sitemap';
import TestEmail from './pages/TestEmail';
import Testimonials from './pages/Testimonials';
import Tools from './pages/Tools';
import UK from './pages/UK';
import UKCoaches from './pages/UKCoaches';
import Schedule from './pages/Schedule';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AdminCoaches": AdminCoaches,
    "AdminDashboard": AdminDashboard,
    "AdminResources": AdminResources,
    "AdminSettings": AdminSettings,
    "Affiliates": Affiliates,
    "Coaches": Coaches,
    "Community": Community,
    "Home": Home,
    "Services": Services,
    "Sitemap": Sitemap,
    "TestEmail": TestEmail,
    "Testimonials": Testimonials,
    "Tools": Tools,
    "UK": UK,
    "UKCoaches": UKCoaches,
    "Schedule": Schedule,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};