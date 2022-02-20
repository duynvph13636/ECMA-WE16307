// import axios from "axios";
import { add } from "../../../api/category";
import NavAdmin from "../../../components/NavAdmin";

const AddCategory = {
    render() {
        return /* html */`
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Thêm mới danh mục
                    </h1>
                </div>
            </header>
            <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="md:grid md:grid-cols-3 md:gap-6 ">
                <div class="mt-5 md:mt-0 md:col-span-3 border">
                    <form id="formAdd">
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div class="col-span-6">
                                    <label class="block text-sm font-medium text-gray-700">Tên danh mục</label>
                                    <input type="text" id="name_category" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-[30px] border border-gray-300 rounded-md p-1" value="">
                                </div>
                               
                           
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <a href="/admin/news" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hủy</a>
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                   Thêm
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
        </div>
    

        
                    `;
    },
    afterRender() {
        const formAdd = document.querySelector("#formAdd");

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();

            add({
                name: document.querySelector("#name_category").value,

            });
        });
    },
};
export default AddCategory;