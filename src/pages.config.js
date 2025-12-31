import Affiliates from './pages/Affiliates';
import Coaches from './pages/Coaches';
import Community from './pages/Community';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Tools from './pages/Tools';
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
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};