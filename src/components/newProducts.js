import { getAllProducts } from "../api/products";

const NewProducts = {
    async  render() {
        const response = await getAllProducts();

        return /* html */`
   
        <section>
        <h1 class="text-center font-bold text-4xl pt-10">Sản phẩm</h1>
     <div class="bg-white">
         <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
           <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              ${response.data.map((product) => `
              
               <a href="/products/${product.id}/detail" class="group">
               <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                 <img src="${product.image}" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-[200px] h-[250px] object-center object-cover group-hover:opacity-75">
               </div>
               <h3 class="mt-4 text-sm text-gray-700">
                ${product.name}
               </h3>
               <p class="mt-1 text-lg font-medium text-gray-900">
               ${product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
              
               </p>
             </a>
              
              `).join("")}
        
           </div>
         </div>
       </div>
       
     </section>
     
        `;
    },
};
export default NewProducts;