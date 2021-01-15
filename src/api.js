import axios from 'axios';

const api = {
    getConfiguration: () =>
        axios('/api/menu', {
            method: 'GET',
            headers: {
                'x-tenant-id': 'test',
            },
        }),
};
export default api;
