import { Platform, Dimensions } from 'react-native';
import envmon from './envmon';

import { version, repository } from '../package.json';

const init = (setURL) => {
  envmon.getAll(
    'https://api.jsonbin.io/v3/b/6257c74280883c3054e15f27/latest',
    { 'X-Master-Key': '$2b$10$pWNGBg9x/gcFna2bGzV2DO.97lv6XCoK35tPfs4e.HlgJAdpZ8aC.' }
  ).then(webenvData => {
    appVer = webenvData.record.version;
    repoURL = webenvData.record.repositoryURL;
    setURL(webenvData.record.backendURL);
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