import axios from 'axios';

const api = {
    getConfiguration: () =>
        axios(
            'https://snowflake-menu-service-dot-dashboard-menu-service.ew.r.appspot.com/api/menu',
            {
                method: 'GET',
                headers: {
                    'x-tenant-id': 'test',
                },
            }
        ),
    getContent: paras =>
        axios(`https://hipsum.co/api/?type=hipster-centric&paras=${paras}`),
};
export default api;
