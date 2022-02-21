import instance from "./config";

export const signup = (user) => {
    const url = `/signup`;
    return instance.post(url, user);
};
export const signin = (user) => {
    const url = `/signin`;
    return instance.post(url, user);
};
export const getAllUser = () => {
    const url = "/users";
    return instance.get(url);
};
export const removeUser = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url, id);
};
export const addUser = (post) => {
    const url = `/users`;
    return instance.post(url, post);
};
export const editUser = (post) => {
    const url = `/users/${post.id}`;
    return instance.put(url, post);
};
export const getUser = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
};