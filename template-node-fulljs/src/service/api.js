import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/'
});

export const postform = axios.create({
  baseURL: 'https://webhook.site/68e3e6d6-93f3-452f-b5b6-393b8f3d7451'
});
