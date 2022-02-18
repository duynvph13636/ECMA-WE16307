import { getAll, remove } from "../../../api/products";
import NavAdmin from "../../../components/NavAdmin";

const AdminNewsProduct = {
    async render() {
        const { data } = await getAll();

        return /* html */ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Quản lý sản phẩm
                        </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/products/add" class="sm:ml-3">
                            <button type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Thêm mới
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-6">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          image
                        </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Mô tả sản phẩm
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Số lượng sản phẩm
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Giá sản phẩm
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                           
                           
                          </tr>
                        </thead>
                         <tbody class="bg-white divide-y divide-gray-200">
                        ${data.map((post) => `
                        <tr>
                          <td class="px-6 py-4">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 h-10 w-10">
                                <img class="h-10 w-10 rounded-full" src="${post.image}" alt="">
                              </div>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                               
                                </div>
                                <div class="text-sm text-gray-500">
                                
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4">
                            <div class="text-sm text-gray-900">  ${post.name} </div>
                            
                          </td>
                          <td class="px-6 py-4">
                            <div class="text-sm text-gray-900">  ${post.description} </div>
                            
                          </td>
                          <td class="px-6 py-4">
                            <div class="text-sm text-gray-900">  ${post.quantity} </div>
                            
                          </td>
                          <td class="px-6 py-4">
                            <div class="text-sm text-gray-900">  ${post.price} </div>
                            
                          </td>
                          <td class="px-6 py-4">
                           
                            <span class="px-6 py-4 text-right text-sm font-medium">
                            <button data-id="${post.id}" class="btne bg-red-500 text-white inline-block py-3 px-5 rounded"> <a href="/admin/product/${post.id}/edit">Edit</a></button>
                          </span>
                            <span class="px-6 py-4 text-right text-sm font-medium">
                            <button data-id="${post.id}" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Delete</button>
                          </span>
                          </td>
                                           
                        </tr>                                    
                        `).join("")}
                       
                          <!-- More people... -->
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                </div>               
                </div>
            </main>
        </div>
                    `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const a = btn.dataset.id;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("bạn có chắc muốn xóa không?");
                if (confirm) {
                    remove(a);
                }
                document.location.href = "/admin/products";
            });
        });
    },
};

export default AdminNewsProduct;