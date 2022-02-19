import instance from "./config";

export const getAll = () => {
    const url = "/categories";
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url, id);
};
export const add = (post) => {
    const url = `/categories`;
    return instance.post(url, post);
};
export const edit = (post) => {
    const url = `/categories/${post.id}`;
    return instance.put(url, post);
};
export const get = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
};