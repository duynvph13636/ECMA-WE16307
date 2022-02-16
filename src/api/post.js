import instance from "./config";

export const getAll = () => {
    const url = "/posts";
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
};