import { Platform } from 'react-native';
import envmon from './envmon';

let appVer = '0.9.3-beta.ngrok';
let repoURL = 'https://github.com/furquan-lp/WebEnv';

const init = (setURL, URL) => {
  envmon.getAll(
    'https://api.jsonbin.io/v3/b/6257c74280883c3054e15f27/latest',
    { 'X-Master-Key': '$2b$10$pWNGBg9x/gcFna2bGzV2DO.97lv6XCoK35tPfs4e.HlgJAdpZ8aC.' }
  ).then(webenvData => {
    appVer = webenvData.record.version;
    repoURL = webenvData.repositoryURL;
    const ngrokURL = webenvData.record.backendURL;
    if (ngrokURL !== URL)
      setURL(webenvData.record.backendURL);
  });
}

const isWeb = () => {
  return (Platform.OS === 'web');
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

export default { init, isWeb, getOS, getAppVersion, getRepoURL };