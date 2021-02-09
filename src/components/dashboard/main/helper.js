import api from '../../../api/api';

export async function getContent(dispatch) {
    try {
        // generate a random number between 1 and 10
        const paragraphs = Math.floor(Math.random() * 10) + 1;

        const response = await api.getContent(paragraphs);
        dispatch({ type: 'FETCH_SUCCESS', content: response.data });
    } catch {
        dispatch({ type: 'FETCH_ERROR', open: false });
    }
}
