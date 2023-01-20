import {useWindowSize} from "react-use";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Page} from "./types";
import ScrollToTop from "./ScrollToTop";


import Page404 from "../containers/Page404/Page404";
import PageHome from "../containers/PageHome/PageHome";
import Header from "../components/Header/Header";
//
import ListingStayMapPage from "../containers/ListingStayPage/ListingStayMapPage";
import ListingStayDetailPage from "../containers/ListingDetailPage/ListingStayDetailPage";
import PageSignUp from "../containers/PageSignUp/PageSignUp";
import PageLogin from "../containers/PageLogin/PageLogin";
import CheckOutPage from "../containers/CheckOutPage/CheckOutPage";


export const pages: Page[] = [
    { path: "/", exact: true, component: PageHome },
    { path: "/#", exact: true, component: PageHome },
    { path: "/home-1-header-2", exact: true, component: PageHome },
    //
    { path: "/listing-stay-map", component: ListingStayMapPage },
    { path: "/listing-stay-detail", component: ListingStayDetailPage},
    { path: "/checkout", component: CheckOutPage},
    { path : "/login", component: PageLogin},
    { path: "/signup", component : PageSignUp}
];



const MyRoutes = () => {
    const WIN_WIDTH = useWindowSize().width || window.innerWidth;
    return (
        <BrowserRouter
            basename={process.env.NODE_ENV === "production" ? "" : ""}
        >
            <ScrollToTop />
            <Header/>

            <Routes>
                {pages.map(({ component, path }) => {
                    const Component = component;
                    return <Route key={path} element={<Component />} path={path} />;
                })}
                <Route element={<Page404 />} />
            </Routes>

        </BrowserRouter>
    );
};

export default MyRoutes