const Header = {
    render() {
        return /* html */ `<div class="max-w-5xl mx-auto">
        <header>
        <div class="bg-blue-900 py-4">
          <a href="">
            <img src="https://picsum.photos/150/50" alt="" class="mx-auto" />
          </a>
        </div>
        <nav class="bg-orange-600">
         
            <ul class="flex">
            <li> <a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Trang chủ</a> </li>
            <li> <a href="/about" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Chương trình đào tạo</a> </li>
            <li> <a href="/product" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Góc sinh viên</a> </li>
            <li> <a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Tuyển dụng</a> </li>
            <li> <a href="/signup" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Sign up</a> </li>
            <li> <a href="/signin" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Sign in</a> </li>
            <li> <a href="/admin/dashboard" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Admin</a> </li>

           
           
            <input type="text" placeholder="Tìm kiếm..." class="my-2" />
            <input type="button" class="bg-blue-900 text-gray-100 my-2 ml-2" value="tìm kiếm" />
        
          
             
            </ul>
           
 
        </nav>  
       
      </header>
      <div class="py-2">
      <img src="https://picsum.photos/1050/200" alt="">
   </div>
        
        
        </div>`;
    },
};
export default Header;