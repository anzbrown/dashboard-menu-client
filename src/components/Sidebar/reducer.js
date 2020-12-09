export const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                menu: action.menu,
                open: true,
                loading: false,
                error: '',
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                menu: [],
                open: false,
                loading: false,
                error: 'Something went wrong',
            };
        default:
            console.warn(`Action ${action.type} not handled!`);
            return state;
    }
};

export const initialState = {
    menu: [],
    open: false,
    loading: true,
    error: '',
};
