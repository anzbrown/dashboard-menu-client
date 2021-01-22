import api from '../../../api';

export async function getMenuConfiguration(dispatch, currentUser) {
    try {
        const response = await api.getConfiguration(currentUser.email);
        dispatch({ type: 'FETCH_SUCCESS', menu: response.data, open: true });
    } catch {
        dispatch({ type: 'FETCH_ERROR', open: false });
    }
}
