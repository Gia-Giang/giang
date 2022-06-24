export const increment = (number) => {
    return {
        type: "INCREMENT",
        payload: number,
    };
};
export const decrement = (number) => {
    return {
        type: "DECREMENT",
        payload: number,
    };
};
export const deleteUser = (number) => {
    return {
        type: "DELETEUSER",
        payload: number,
    };
};
export const EditUser = (number) => {
    return {
        type: "EDITUSER",
        payload: number,
    };
};