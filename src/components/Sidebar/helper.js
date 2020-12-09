import api from '../../api';

export async function getMenuConfiguration(dispatch) {
    // try {
    //     const response = await api.getConfiguration();
    //     dispatch({type: 'FETCH_SUCCESS', menu:response.data, open: true});
    // }
    // catch {
    //     dispatch({type: 'FETCH_ERROR', open: false})
    // }

    try {
        const response = await api.getConfiguration();
        dispatch({ type: 'FETCH_SUCCESS', menu: response.data, open: true });
    } catch {
        dispatch({ type: 'FETCH_ERROR', open: false });
    }
}
