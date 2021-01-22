import axios from 'axios';

const api = {
    getConfiguration: user =>
        axios('/api/menu', {
            method: 'GET',
            headers: {
                'x-tenant-id': user,
            },
        }),
    getContent: paras =>
        axios(`https://hipsum.co/api/?type=hipster-centric&paras=${paras}`),
};
export default api;
