import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const Banner = {
    render() {
        return /* html */`

        <div class="mt-2 w-full m-auto">
      
 
        <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><a href=""><img class="w-full" src="https://picsum.photos/3000/700" alt=""></a></div>
          <div class="swiper-slide"><a href=""><img class="w-full" src="https://picsum.photos/3000/700" alt=""></a></div>
          <div class="swiper-slide"><a href=""><img class="w-full" src="https://picsum.photos/3000/700" alt=""></a></div>
          <div class="swiper-slide"><a href=""><img class="w-full" src="https://picsum.photos/3000/700" alt=""></a></div>
          <div class="swiper-slide"><a href=""><img class="w-full" src="https://picsum.photos/3000/700" alt=""></a></div>
          <div class="swiper-slide"><a href=""><img class="w-full" src="https://picsum.photos/3000/700" alt=""></a></div>
          <div class="swiper-slide"><a href=""><img class="w-full" src="https://picsum.photos/3000/700" alt=""></a></div>
          <div class="swiper-slide"><a href=""><img class="w-full" src="https://picsum.photos/3000/700" alt=""></a></div>
         
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
  
         </div>
        
        `;
    },
    afterRender() {
        const swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    },
};
export default Banner;