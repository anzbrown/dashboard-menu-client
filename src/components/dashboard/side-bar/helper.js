import api from '../../../api/api';

export async function getMenuConfiguration(dispatch, currentUser, getToken) {
    try {
        const token = await getToken();
        const response = await api.getConfiguration(currentUser.email, token);
        dispatch({ type: 'FETCH_SUCCESS', menu: response.data, open: true });
    } catch {
        dispatch({ type: 'FETCH_ERROR', open: false });
    }
}
