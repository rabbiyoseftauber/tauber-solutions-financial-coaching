import Home from './pages/Home';
import Services from './pages/Services';
import Coaches from './pages/Coaches';
import Schedule from './pages/Schedule';
import Testimonials from './pages/Testimonials';
import Tools from './pages/Tools';
import Affiliates from './pages/Affiliates';
import Community from './pages/Community';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Services": Services,
    "Coaches": Coaches,
    "Schedule": Schedule,
    "Testimonials": Testimonials,
    "Tools": Tools,
    "Affiliates": Affiliates,
    "Community": Community,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};