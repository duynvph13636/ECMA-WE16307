import toastr from "toastr";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { get } from "../../api/products";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";

const productsDetailpost = {

    async render(id) {
        const { data: product } = await get(id);
        return /* html */ `
        ${Header.render()}
        <div x-data="{ cartOpen: false , isOpen: false }" class="bg-white">
        <main class="my-8">
            <div class="container mx-auto px-6">
                <div class="md:flex md:items-center">
                    <div class="w-full h-64 md:w-1/2 lg:h-96">
                        <img class="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="${product.image}" alt="Nike Air">
                    </div>
                    <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                        <h3 class="text-gray-700 uppercase text-lg">${product.name}</h3>
                        <span class="text-gray-500 mt-3">${product.price}</span>
                        <hr class="my-3">
                        <input type="number" id="inputNumber" placeholder="số lượng">
                      
                        <div class="flex items-center mt-6">
                            <button data-id="${product.id}" id="bntAddToCart" class="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Order Now</button>
                            <button class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-16">
                    <h3 class="text-gray-600 text-2xl font-medium">Sản phẩm liên quan </h3>
                    <div class="bg-white">
                        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                         
                      
                          <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            <a href="#" class="group">
                              <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img src="image/anh1.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
                              </div>
                              <h3 class="mt-4 text-sm text-gray-700">
                                Iphone
                              </h3>
                              <p class="mt-1 text-lg font-medium text-gray-900">
                                $48
                              </p>
                            </a>
                      
                            <a href="#" class="group">
                              <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img src="image/anh2.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="w-full h-full object-center object-cover group-hover:opacity-75">
                              </div>
                              <h3 class="mt-4 text-sm text-gray-700">
                               Samsung 
                              </h3>
                              <p class="mt-1 text-lg font-medium text-gray-900">
                                $35
                              </p>
                            </a>
                      
                            <a href="#" class="group">
                              <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img src="image/anh2.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="w-full h-full object-center object-cover group-hover:opacity-75">
                              </div>
                              <h3 class="mt-4 text-sm text-gray-700">
                               oppo
                              </h3>
                              <p class="mt-1 text-lg font-medium text-gray-900">
                                $89
                              </p>
                            </a>
                      
                            <a href="#" class="group">
                              <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img src="image/anh1.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="w-full h-full object-center object-cover group-hover:opacity-75">
                              </div>
                              <h3 class="mt-4 text-sm text-gray-700">
                                iphone
                              </h3>
                              <p class="mt-1 text-lg font-medium text-gray-900">
                                $35
                              </p>
                            </a>
                      
                            <!-- More products... -->
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        </main>
    
      
    </div>

  

    ${Footer.render()}
    
    `;
    },

    // afterRender() {
    //     Header.afterRender();
    // },
    afterRender() {
        const bntAddToCart = document.querySelector("#bntAddToCart");

        const a = bntAddToCart.dataset.id;
        bntAddToCart.addEventListener("click", async () => {
            const inputNumber = document.querySelector("#inputNumber").value;
            console.log(inputNumber);
            console.log(12);
            const { data } = await get(a);
            console.log(data);
            addToCart({ ...data, quantity: inputNumber || 1 });
            toastr.success("thêm sản phẩm thành công.");
        });
    },
};
export default productsDetailpost;