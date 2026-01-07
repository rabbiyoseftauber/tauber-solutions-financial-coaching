import Affiliates from './pages/Affiliates';
import Coaches from './pages/Coaches';
import Community from './pages/Community';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import Sitemap from './pages/Sitemap';
import TestEmail from './pages/TestEmail';
import Testimonials from './pages/Testimonials';
import UK from './pages/UK';
import UKCoaches from './pages/UKCoaches';
import Tools from './pages/Tools';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Affiliates": Affiliates,
    "Coaches": Coaches,
    "Community": Community,
    "Home": Home,
    "Schedule": Schedule,
    "Services": Services,
    "Sitemap": Sitemap,
    "TestEmail": TestEmail,
    "Testimonials": Testimonials,
    "UK": UK,
    "UKCoaches": UKCoaches,
    "Tools": Tools,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};