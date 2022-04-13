import { Platform } from 'react-native';

const appVer = '0.8.5-beta';
const repoURL = 'https://github.com/furquan-lp/WebEnv';

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

export default { isWeb, getOS, getAppVersion, getRepoURL };