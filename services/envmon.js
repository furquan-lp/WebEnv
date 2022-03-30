import axios from 'axios';

const getAll = (backendURL) => {
  return axios.get(backendURL).then(response => response.data);
}

export default { getAll };