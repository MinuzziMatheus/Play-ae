import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://developers.deezer.com/api/explorer?url=chart',
})