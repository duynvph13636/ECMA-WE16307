// import { getAll, remove } from "../../../api/post";
import toastr from "toastr";
import { getAllCate, remove } from "../../../api/category";
import NavAdmin from "../../../components/NavAdmin";

const AdminNewsCategory = {
    async render() {
        const { data } = await getAllCate();

        return /* html */ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Quản lý danh mục
                        </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/add/category" class="sm:ml-3">
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
                              Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Role
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          
                          </tr>
                        </thead>
                         <tbody class="bg-white divide-y divide-gray-200">
                        ${data.map((post) => `
                        <tr>
                          <td class="px-6 py-4">
                          <div class="text-sm text-gray-900">  ${post.name} </div>

                           </td>
                            
                          <td class="px-6 py-4">
                           
                            <span class="px-6 py-4 text-right text-sm font-medium">
                            <button data-id="${post.id}" class="btne bg-red-500 text-white inline-block py-3 px-5 rounded"> <a href="/admin/news/${post.id}/edit">Edit</a></button>
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
                toastr.success("Bạn xóa thành công");
                setTimeout(() => {
                    document.location.href = "/admin/category/detail";
                }, 2000);
            });
        });
    },
};

export default AdminNewsCategory;