import axios from 'axios';

export default {
    getConfiguration: () =>
        axios('/resources/menus', {
            method: 'GET',
        })
};
