import axios from "axios";
import NavAdmin from "../../../components/NavAdmin";

const NewsEdit = {
    async  render() {
        const { data } = await axios.get(`https://5e79b4b817314d00161333da.mockapi.io/posts/27`);

        return /* html */`
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                          Chỉnh sửa sản phẩm
                        </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/news/add" class="sm:ml-3">
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
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="md:grid md:grid-cols-3 md:gap-6 ">
                <div class="mt-5 md:mt-0 md:col-span-3 border">
                    <form id="formEdit">
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div class="col-span-6">
                                    <label class="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                    <input type="text" id="name_product" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-[30px] border border-gray-300 rounded-md p-1" value="${data.name}">
                                </div>
                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700">
                                    Giá sản phẩm
                                    </label>
                                    <div class="mt-1">
                                    <input type="number" id="price_product" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-[30px] border border-gray-300 rounded-md p-1" value="${data.price}">
                                    </div>
                                </div>
                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700">
                                    Mô tả sản phẩm
                                    </label>
                                    <div class="mt-1">
                                        <textarea rows="5" id="description_product" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-1" value="">${data.description}</textarea>
                                    </div>
                                </div>
                            </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700">
                                    Ảnh sản phẩm
                                    </label>
                                    <img src="${data.image}" alt="">
                                     <input type="file" id="file-upload" value="">
                            </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <a href="/admin/news" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hủy</a>
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Cập nhật
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
`;
    },
    afterRender() {
        const formEdit = document.querySelector("#formEdit");
        const CLOUDINARY_PRESET = "ck8bz8wq";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/fpolyduy/image/upload";
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = document.querySelector("#file-upload").files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);
            // call api cloudinary , để upload ảnh
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            console.log(data.url);
            axios.put("https://5e79b4b817314d00161333da.mockapi.io/posts/27", {
                name: document.querySelector("#name_product").value,
                price: document.querySelector("#price_product").value,
                description: document.querySelector("#description_product").value,
                image: data.url,

            });
            // document.location.href = "/admin/news";
        });
    },
};
export default NewsEdit;