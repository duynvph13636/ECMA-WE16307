import toastr from "toastr";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";
import $ from "jquery";
import jqueryValidate from "jquery-validation";

const Signin = {
    render() {
        return /* html */`
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
           
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in your account
            </h2>
           
          </div>
          <form class="mt-8 space-y-6" id="formSignin">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="">Email address</label>
                <input id="email" name="e-mail" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
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
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
        
        `;
    },
    afterRender() {
        const formSignin = $("#formSignin");

        formSignin.validate({
            rules: {
                "e-mail": {
                    required: true,
                    email: true,
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
                "pass-word": {
                    required: "Không để trống trường này!",
                    minlength: "ít nhất 6 ký tự",
                },
            },
            submitHandler: () => {
                async function handleSingin() {
                    try {
                        const { data } = await signin({
                            email: document.querySelector("#email").value,
                            password: document.querySelector("#password").value,
                        });
                        if (data) {
                            localStorage.setItem("user", JSON.stringify(data.user));
                            toastr.success("Bạn đăng nhập thành công , Chuyển trang sau 2s");
                            setTimeout(() => {
                                document.location.href = "/";
                            }, 2000);
                        }
                        console.log(data);
                    } catch (error) {
                        toastr.error(error.response.data);
                    }
                }
                handleSingin();
            },

        });
    },
};
export default Signin;