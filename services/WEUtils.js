import { Platform, Dimensions } from 'react-native';
import envmon from './envmon';

import { version, homepage, repository } from '../package.json';

let backendRepo = "unavailable";

const init = (setURL) => {
  envmon.getAll(`${homepage}data/webenv.json`,).then(webenvData => {
    backendRepo = webenvData.backendRepo;
    setURL(webenvData.backendURL);
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

export default { init, isWeb, isPortrait, getOS, getAppVersion, getRepoURL };