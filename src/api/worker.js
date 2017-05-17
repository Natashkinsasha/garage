import axios from 'axios'
import Promise from 'bluebird';
axios.Promise = Promise;


export function getById(id) {
    return axios.get(`/api/workers/${id}`);
}

export function get({page = 1, number = 10, sortedColumn, direction}) {
    return new Promise((resolve, reject) => axios.get(`/api/workers`, {
        params: {
            page,
            number,
            sortedColumn,
            direction,
        }
    }).then(resolve, reject));
}

export function create(worker) {
    return new Promise((resolve, reject) => axios.post(`/api/workers`, worker).then(resolve, reject));
}

export function update(worker) {
    return axios.put(`/api/workers`, worker);
}

export function remove(ids) {
    return new Promise((resolve, reject) => axios({
        method: 'delete',
        url: '/api/workers',
        data: {ids},
    })
        .then(resolve, reject));
}

export function getPositions() {
    return new Promise((resolve, reject) => axios
        .get(`/api/workers/positions`)
        .then(resolve, reject));

}