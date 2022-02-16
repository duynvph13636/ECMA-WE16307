import Navigo from "navigo";
import HomPage from "./page/home";
import productIndex from "./page/products";
import AboutPage from "./page/about";
// import Header from "./components/header";
// import Footer from "./components/footer";
import DetailNewPage from "./page/detailNewList";
import Signin from "./page/singin";
import Signup from "./page/singup";
import Dashboard from "./page/admin/dashboard";
import AdminNewsPage from "./page/admin/news";
import AddNewsPage from "./page/admin/news/add";
import NewsEdit from "./page/admin/news/edit";
import productsDetail from "./page/products/details";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    // document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
    // document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomPage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/products": () => {
        print(productIndex);
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewPage.render(id));
    },
    "/signin": () => {
        print(Signin);
    },
    "/signup": () => {
        print(Signup);
    },
    "/admin/dashboard": () => {
        print(Dashboard);
    },
    "/admin/news": () => {
        print(AdminNewsPage);
    },
    "/admin/news/add": () => {
        print(AddNewsPage);
    },
    "/admin/dashboard/edit/:id": () => {
        print(NewsEdit);
    },
    "/products/details": () => {
        print(productsDetail);
    },
});
router.resolve();