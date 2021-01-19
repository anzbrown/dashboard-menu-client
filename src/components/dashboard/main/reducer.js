export const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                content: action.content,
                loading: false,
                error: '',
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                content: [],
                loading: false,
                error: 'Something went wrong',
            };
        default:
            console.warn(`Action ${action.type} not handled!`);
            return state;
    }
};

export const initialState = {
    content: [],
    loading: true,
    error: '',
};
