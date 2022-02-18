import Navigo from "navigo";
import HomPage from "./page/home";
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
import productsDetail from "./page/admin/products/details";
import addProduct from "./page/admin/products/add";
import AdminNewsProduct from "./page/admin/products";
import productEdit from "./page/admin/products/edit";
import productsDetailpost from "./page/client/productDetail";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    // document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
    // document.getElementById("footer").innerHTML = Footer.render();
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        }
    },
});
router.on({
    "/": () => {
        print(HomPage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/products": () => {
        print();
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
    "/admin/products": () => {
        print(AdminNewsProduct);
    },
    "/admin/news/:id/edit": ({ data }) => {
        print(NewsEdit, data.id);
    },
    "/admin/product/:id/edit": ({ data }) => {
        print(productEdit, data.id);
    },
    "/products/:id/detail": ({ data }) => {
        print(productsDetailpost, data.id);
    },
    "/admin/products/add": () => {
        print(addProduct);
    },

});
router.resolve();