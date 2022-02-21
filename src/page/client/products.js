import { getAllCate } from "../../api/category";
import { getProduct, getAllProducts } from "../../api/products";

import Header from "../../components/header";

const productAll = {
    async render(id) {
        let response; let a;
        const { data } = await getAllCate();
        // const { data } = await getAll();
        // const { res } = await getProduct();
        // const { res } = await getProduct();
        console.log(data);
        const urlStr = window.location.href;
        console.log(urlStr);
        const url = new URL(urlStr);
        // eslint-disable-next-line no-underscore-dangle
        const _embed = url.searchParams.get("_embed");
        console.log(_embed);
        if (_embed) {
            response = await getProduct(id);
            a = response.data.products;
        } else {
            response = await getAllProducts();
            a = response.data;
        }
        console.log(a);
        return /* html */`
        ${Header.render()}
        <section>
      
<div class="bg-white">
    <div>
    
     
  
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">Tất cả sản phẩm</h1>
  
          <div class="flex items-center">
            <div class="relative inline-block text-left">
             
  
             
            </div>
  
           
            
          </div>
        </div>
  
        <section aria-labelledby="products-heading" class="pt-6 pb-24">
        
 
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
            <!-- Filters -->
            <form class="hidden lg:block">
              <h3 class="sr-only">Danh mục sản phẩm</h3>
              <ul role="list" class="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                 ${data.map((item) => `
  
  <li>
                  <a href="/catePosts/${item.id}?_embed=products">
                   
                   ${item.name}
                  </a>
                </li>
  
  `).join("")}
  
              
              </ul>
  
            
  
           
             
            </form>
  
            <!-- Product grid -->
            <div class="lg:col-span-3">
              <!-- Replace with your content -->
              <div class="rounded-lg h-96 lg:h-full">
                <div class="bg-white">
                  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                   
                
                    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                   
                    ${a.map((icon) => `
                    
                    <a href="/products/${icon.id}/detail" class="group">
                        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                          <img src="${icon.image}" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-[200px] h-[250px] object-center object-cover group-hover:opacity-75">
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                      ${icon.name}
                        </h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">
                      ${icon.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                        </p>
                      </a>
                    
                    `).join("")}
                     
                    
                  
                     
                
                     
                
                     
                
                     
                
                      <!-- More products... -->
                    </div>
                  </div>
                </div>
               

              
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
  
   

  
 </section>
        
        
        
        `;
    },
};
export default productAll;