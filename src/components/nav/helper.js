import api from '../../api';

export async function getMenuConfiguration() {
    try{
        return await api.getConfiguration();
    } catch (error) {
    }
}