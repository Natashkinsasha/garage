import axios from 'axios'
import Promise from 'bluebird';
axios.Promise = Promise;


export function getById(id) {
    return axios.get(`/api/worker/${id}`);
}

export function get({page = 1, number = 10}) {
    return new Promise((resolve, reject) => axios.get(`/api/worker`, {
        params: {
            page,
            number,
        }
    }).then(resolve, reject));
}

export function create(worker) {
    return axios.post(`/api/worker`, worker);
}

export function update(worker) {
    return axios.put(`/api/worker`, worker);
}

export function remove(ids) {
    return axios.delete(`/api/worker`, {
        params: {
            ids,
        }
    });
}