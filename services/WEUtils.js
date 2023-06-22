import { Platform, Dimensions } from 'react-native';
import axios from 'axios';

import { version, homepage, repository } from '../package.json';

let backendRepo = "unavailable";

const init = (setURL) => {
  axios.get(`${homepage}data/webenv.json`)
    .then(response => {
      backendRepo = response.data.backendRepo;
      setURL(response.data.backendURL);
    });
}

const isWeb = () => {
  return (Platform.OS === 'web');
};

const isPortrait = () => {
  return Dimensions.get('window').height > Dimensions.get('window').width;
};

const getOS = () => {
  return Platform.OS;
};

const getAppVersion = () => {
  return version;
};

const getRepoURL = () => {
  return repository.url;
}

const getChartData = (chartType, env) => {
  switch (chartType) {
    case 0: return env[0].envdata.temp;
    case 1: return env[0].envdata.humidity;
    case 3: return env[0].envdata.co2;
    default: return env[0].envdata.temp;
  }
};

export default { init, isWeb, isPortrait, getOS, getAppVersion, getRepoURL, getChartData };