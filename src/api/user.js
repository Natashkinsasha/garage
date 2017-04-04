import axios from 'axios'


export function login(user){
    return axios.post('api/login', user);
}

export function singUp(user){
    return axios.post('api/singUp', user);
}

export function test() {
    return axios.get('/api/test');
}
