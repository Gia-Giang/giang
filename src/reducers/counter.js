export const counterReducer = (state = [], action) => {
    switch (action.type) {
        case "INCREMENT":
            return [...state, action.payload];
        case "DELETEUSER":
            return state.filter((user, index) => index !== action.payload);
        case "EDITUSER":
            return state
        default:
            return state;
    }
};

export default counterReducer;