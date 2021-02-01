import axios from 'axios';

const api = {
    getConfiguration: (user, token) =>
        axios('/api/menu', {
            method: 'GET',
            headers: {
                'x-tenant-id': user,
                authorization: `Bearer ${token}`,
            },
        }),
    getContent: paras =>
        axios(`https://hipsum.co/api/?type=hipster-centric&paras=${paras}`),
};
export default api;
