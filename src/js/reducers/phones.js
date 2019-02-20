const INITIAL_STATE = {
    phones: ["iPhone 7 Plus", "Samsung Galaxy A5"]
};

function phonesReducer(state = INITIAL_STATE, action) {
    let arPhones = [];

    switch (action.type) {
        case "ADD_PHONE":
            arPhones = state.phones.slice();
            if (!arPhones.includes(action.phone)) {
                arPhones.push(action.phone);
            }
            return {
                ...state,
                phones: arPhones
            };

        case "DELETE_PHONE":
            arPhones = state.phones.slice();
            let arPhonesFiltered = arPhones.filter(
                (item) => item !== action.phone
            );
            return {
                ...state,
                phones: arPhonesFiltered
            };

        default:
            return state;
    }
}

export default phonesReducer;