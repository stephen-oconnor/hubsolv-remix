import { FetchOptions } from './hooks/useFetch';

export const url = 'https://api.mixcloud.com/search/';
export const type = 'cloudcast';
export const limit = 24;
export const fetchOptions: FetchOptions = { method: 'GET' };
