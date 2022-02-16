import Header from "../../components/header";
import Footer from "../../components/footer";

const productIndex = {
    render() {
        return /* html */`
        ${Header.render()}
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
                <li>
                  <a href="#">
                    Iphone
                  </a>
                </li>
  
                <li>
                  <a href="#">
                    Samsung
                  </a>
                </li>
  
                <li>
                  <a href="#">
                    Xiaomi
                  </a>
                </li>
  
                <li>
                  <a href="#">
                    Oppo
                  </a>
                </li>
  
                <li>
                  <a href="#">
                 Nokia
                  </a>
                </li>
              </ul>
  
            
  
           
             
            </form>
  
            <!-- Product grid -->
            <div class="lg:col-span-3">
              <!-- Replace with your content -->
              <div class="rounded-lg h-96 lg:h-full">
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
              <!-- /End replace -->
            </div>
          </div>
        </section>
      </main>
        ${Footer.render()}
        
        `;
    },
};
export default productIndex;