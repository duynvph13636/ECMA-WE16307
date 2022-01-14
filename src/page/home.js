import NewList from "../components/newList";
import Header from "../components/header";
import Footer from "../components/footer";

const HomPage = {
    render() {
        return /* html */ `
        
        ${Header.render()}
        <div class="max-w-5xl mx-auto">

        <main> 
       ${NewList.render()}
      </main>
        </div>
        ${Footer.render()}
        `;
    },
};
export default HomPage;