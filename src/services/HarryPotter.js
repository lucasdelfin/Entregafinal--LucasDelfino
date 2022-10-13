import axios from 'axios';

export const getAll = () => {
    return axios.get('https://hp-api.herokuapp.com/api/characters');
};
