import axios from 'axios';

const getAll = (backendURL, requestHeader) => {
  if (requestHeader === undefined)
    return axios.get(backendURL).then(response => response.data);
  else
    return axios.get(backendURL, { headers: requestHeader }).then(response => response.data);
}

export default { getAll };