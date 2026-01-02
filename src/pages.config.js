import Affiliates from './pages/Affiliates';
import Coaches from './pages/Coaches';
import Community from './pages/Community';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Tools from './pages/Tools';
import UK from './pages/UK';
import UKCoaches from './pages/UKCoaches';
import Sitemap from './pages/Sitemap';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Affiliates": Affiliates,
    "Coaches": Coaches,
    "Community": Community,
    "Home": Home,
    "Schedule": Schedule,
    "Services": Services,
    "Testimonials": Testimonials,
    "Tools": Tools,
    "UK": UK,
    "UKCoaches": UKCoaches,
    "Sitemap": Sitemap,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};