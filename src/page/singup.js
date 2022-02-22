import toastr from "toastr";
// eslint-disable-next-line import/order
import { signup } from "../api/user";
import "toastr/build/toastr.min.css";
import $ from "jquery";
import jqueryValidate from "jquery-validation";

const Signup = {
    render() {
        return /* html */`
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
           
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up your account
            </h2>
           
          </div>
          <form class="mt-8 space-y-6" action="#" id="formSignup">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="">Email address</label>
                <input id="email" name="e-mail" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="email-address" class="">Address</label>
                <input id="address" name="add-ress" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="email-address" class="">Số điện thoại</label>
                <input id="number" name="s-dt" type="number" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="password" class="">Password</label>
                <input id="password" name="pass-word" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
              </div>
             
            </div>
      
          
      
            <div>
              <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <!-- Heroicon name: solid/lock-closed -->
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
        
        `;
    },
    afterRender() {
        const formSignup = $("#formSignup");

        formSignup.validate({
            rules: {
                "e-mail": {
                    required: true,
                    email: true,
                },
                "add-ress": {
                    required: true,
                    minlength: 5,
                },
                "s-dt": {
                    required: true,
                    digits: true,
                    minlength: 10,
                    maxlength: 10,
                },
                "pass-word": {
                    required: true,
                    minlength: 6,
                },
            },
            messages: {
                "e-mail": {
                    required: "Không để trống trường này!",
                    email: "email không đúng định dạng!",
                },
                "add-ress": {
                    required: "Không để trống trường này!",
                    minlength: "ít nhất 5 ký tự",
                },
                "s-dt": {
                    required: "Không để trống trường này!",
                    digits: "phải là số",
                    minlength: "số điện thoại yêu cầu 10 chữ số",
                    maxlength: "yêu cầu nhập 10 chữ số",
                },
                "pass-word": {
                    required: "Không để trống trường này!",
                    minlength: "ít nhất 6 ký tự",
                },
            },
            submitHandler: () => {
                async function handleSingup() {
                    try {
                        const { data } = await signup({
                            email: document.querySelector("#email").value,
                            password: document.querySelector("#password").value,
                            address: document.querySelector("#address").value,
                            number: document.querySelector("#number").value,
                        });
                        if (data) {
                            toastr.success("Bạn đăng ký thành công , Chuyển trang sau 2s");
                            setTimeout(() => {
                                document.location.href = "/signin";
                            }, 2000);
                        }
                        console.log(data);
                    } catch (error) {
                        toastr.error("Đăng ký thất bại");
                        console.log(error.response.data);
                    }
                }
                handleSingup();
            },
        });

        // formSignup.addEventListener("submit", async (e) => {
        //     e.preventDefault();
        //     try {
        //         const { data } = await signup({
        //             email: document.querySelector("#email").value,
        //             password: document.querySelector("#password").value,
        //             address: document.querySelector("#address").value,
        //             number: document.querySelector("#number").value,
        //         });
        //         if (data) {
        //             toastr.success("Bạn đăng ký thành công , Chuyển trang sau 2s");
        //             setTimeout(() => {
        //                 document.location.href = "/signin";
        //             }, 2000);
        //         }
        //         console.log(data);
        //     } catch (error) {
        //         toastr.error("Đăng ký thất bại");
        //         console.log(error.response.data);
        //     }
        // });
    },
};
export default Signup;