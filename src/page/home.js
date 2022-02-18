import NewProducts from "../components/newProducts";
import Header from "../components/header";
import Footer from "../components/footer";

const HomPage = {
    async  render() {
        return /* html */ `
        <div id="header">
         ${Header.render()}
        </div>
       
        <div class="max-w-5xl mx-auto">

        <main> 
       ${await NewProducts.render()}
      </main>
        </div>
        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomPage;