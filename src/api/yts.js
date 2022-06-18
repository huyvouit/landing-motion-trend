import axiosClient from './axiosClient';

const ytsApi = {
  getMoviesList: (params) => {
    const url = '/list_movies.json';
    return axiosClient.get(url, { params });
  },
};

export default ytsApi;
