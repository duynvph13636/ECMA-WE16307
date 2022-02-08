import Navigo from "navigo";
import HomPage from "./page/home";
import Product from "./page/product";
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

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content) => {
    // document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = await content.render();
    if (content.afterRender) await content.afterRender();
    // document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomPage);
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(Product.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewPage.render(id));
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/admin/dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/news": () => {
        print(AdminNewsPage);
    },
    "/admin/news/add": () => {
        print(AddNewsPage.render());
    },
    "/admin/dashboard/edit/:id": ({ data }) => {
        const { id } = data;
        print(NewsEdit.render(id));
    },
});
router.resolve();