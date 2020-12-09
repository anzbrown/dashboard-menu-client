import axios from 'axios';

const api = {
    getConfiguration: () =>
        axios('http://localhost:8080/api/menu', {
            method: 'GET',
            headers: {
                'x-tenant-id': 'test',
            },
        }),
};
export default api;
