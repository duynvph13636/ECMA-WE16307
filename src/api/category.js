import instance from "./config";

export const getAllCate = () => {
    const url = "/catePosts";
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/catePosts/${id}`;
    return instance.delete(url, id);
};
export const add = (post) => {
    const url = `/catePosts`;
    return instance.post(url, post);
};
export const edit = (post) => {
    const url = `/catePosts/${post.id}`;
    return instance.put(url, post);
};
export const get = (id) => {
    const url = `/catePosts/${id}`;
    return instance.get(url);
};