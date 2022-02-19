let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}
// eslint-disable-next-line import/prefer-default-export
export const addToCart = (newProduct, next) => {
    const exitsProduct = cart.find((item) => item.id === newProduct.id);
    if (!exitsProduct) {
        cart.push(newProduct);
    } else {
        exitsProduct.quantity += +newProduct.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
    // const tong = exitsProduct.map(item, () => {

    // });
    next();
};
export const increaseQuantity = (id) => {
    // eslint-disable-next-line no-plusplus
    cart.find((item) => item.id === +id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
};
export const decreaseQuantity = (id, next) => {
    // eslint-disable-next-line no-plusplus
    const currentProduct = cart.find((item) => item.id === +id);
    // eslint-disable-next-line no-plusplus
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("bạn có muốn xóa không");
        if (confirm) {
            cart = cart.filter((item) => item.id !== +id);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const removeItemCart = (id, next) => {
    const confirm = window.confirm("bạn có muốn xóa không");
    if (confirm) {
        cart = cart.filter((item) => item.id !== +id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};