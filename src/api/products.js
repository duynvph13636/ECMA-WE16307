import instance from "./config";

export const getAllProducts = () => {
    const url = "/products";
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url, id);
};
export const add = (post) => {
    const url = `/products`;
    return instance.post(url, post);
};
export const edit = (post) => {
    const url = `/products/${post.id}`;
    return instance.put(url, post);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const getProduct = (id) => {
    const url = `/catePosts/${id}?_embed=products`;
    return instance.get(url);
};