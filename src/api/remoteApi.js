import axios from 'axios';

const remoteApi = axios.create({
    baseURL: process.env.REACT_APP_USERS_SERVICE,
});

export const fetchUsers = () => {
    return remoteApi.get('users');
};


export const fetchTodos = (id) => {
    return remoteApi.get(`users/${id}/todos`);
};
