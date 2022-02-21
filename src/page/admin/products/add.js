import axios from "axios";
import NavAdmin from "../../../components/NavAdmin";
import { add } from "../../../api/products";
import { getAllCate } from "../../../api/category";

const addProduct = {

    async  render() {
        const { data } = await getAllCate();
        return /* html */`
        <div class="min-h-full">
        ${NavAdmin.render()}
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Thêm mới sản phẩm
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
                       
                        <select name="" id="idCategory" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-[30px] border border-gray-300 rounded-md pl-[10px]">
                        ${data.map((post) => `
                         <option value="${post.id}">${post.name}</option>
                        
                        
                        `).join("")}
                       
                      </select>
                    </div>
                            <div class="col-span-6">
                                <label class="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                <input type="text" id="name_product" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-[30px] border border-gray-300 rounded-md p-1" value="">
                            </div>
                            <div>
                                <label for="about" class="block text-sm font-medium text-gray-700">
                                Giá sản phẩm
                                </label>
                                <div class="mt-1">
                                <input type="number" id="price_product" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-[30px] border border-gray-300 rounded-md p-1" value="">
                                </div>
                            </div>
                            <div>
                                <label for="about" class="block text-sm font-medium text-gray-700">
                                Số lượng sản phẩm
                                </label>
                                <div class="mt-1">
                                <input type="number" id="soluong_product" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-[30px] border border-gray-300 rounded-md p-1" value="">
                                </div>
                            </div>
                            <div>
                                <label for="about" class="block text-sm font-medium text-gray-700">
                                Mô tả sản phẩm
                                </label>
                                <div class="mt-1">
                                    <textarea rows="5" id="description_product" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-1"></textarea>
                                </div>
                            </div>
                        </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">
                                Ảnh sản phẩm
                                </label>
                                 <input type="file" id="file-upload">
                                 <img width="200" src="https://2.bp.blogspot.com/-muVbmju-gkA/Vir94NirTeI/AAAAAAAAT9c/VoHzHZzQmR4/s1600/placeholder-image.jpg" id="img-preview" alt="">
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
        const img_preview = document.querySelector("#img-preview");
        const img_post = document.querySelector("#file-upload");
        const imgLink = "";

        const CLOUDINARY_PRESET = "ck8bz8wq";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/fpolyduy/image/upload";

        img_post.addEventListener("change", (e) => {
            img_preview.src = URL.createObjectURL(e.target.files[0]);
        });

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = document.querySelector("#file-upload").files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);
                // call api cloudinary , để upload ảnh
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                imgLink = data.url;
                console.log(data.url);
            }

            add({
                catePostId: document.querySelector("#idCategory").value,
                name: document.querySelector("#name_product").value,
                price: document.querySelector("#price_product").value,
                description: document.querySelector("#description_product").value,
                quantity: document.querySelector("#soluong_product").value,
                image: imgLink || "",

            });
            // document.location.href = "/admin/products/add";
        });
    },
};
export default addProduct;