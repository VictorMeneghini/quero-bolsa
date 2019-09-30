import axios from 'axios';

export default {
  get $http() {
    return axios.create({
      baseURL: 'https://testapi.io/api/redealumni',
    });
  },
};
