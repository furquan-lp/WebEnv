import { Platform, Dimensions } from 'react-native';
import envmon from './envmon';

let appVer = '0.9.5-beta.ngrok';
let repoURL = 'https://github.com/furquan-lp/WebEnv';

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
  return appVer;
};

const getRepoURL = () => {
  return repoURL;
}

export default { init, isWeb, isPortrait, getOS, getAppVersion, getRepoURL };