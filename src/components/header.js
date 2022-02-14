const Header = {
    render() {
        return /* html */ `
        <header>
        <div class="header-2">
   
           <nav class="bg-white py-2 md:py-4">
             <div class="container px-4 mx-auto md:flex md:items-center">
         
               <div class="flex justify-between items-center">
                 <a href="#" class="font-bold text-xl text-indigo-600">FPT Polytechnic</a>
                 <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                   <i class="fas fa-bars"></i>
                 </button>
               </div>
         
               <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                 <a href="#" class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Trang chủ</a>
                 <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Giỏ hàng</a>
                 <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Sản phẩm</a>
                 <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Liên hệ</a>
                 <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Tin tức</a>
                 <a href="#" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Đăng nhập</a>
                 <a href="#" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Admin</a>
               </div>
             </div>
           </nav>
         
           
              
           
         
   </header>
   <div class="mt-2 w-full m-auto">
   <a href=""><img class="w-full" src="https://picsum.photos/3000/700" alt=""></a>
</div>
        
       `;
    },
};
export default Header;