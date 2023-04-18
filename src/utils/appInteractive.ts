import CryptoJS from 'crypto-js';
import { useUserStoreWithOut } from '@/store/modules/user';

const userStore = useUserStoreWithOut();

interface IAppParameters {
  login_token: string | null;
  preid: string | null;
  app_version: string | null;
  platform: string | null;
  user_id: string | null | number;
  use_traditional: string | null;
  ext_json: string | Object | null;
}

const checkIsJSON = function (str: string) {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
};

const appParameters: IAppParameters = {
  login_token: '',
  preid: '',
  app_version: '',
  platform: '',
  user_id: null,
  use_traditional: '',
  ext_json: {},
};

const setAppParameters = function (params: IAppParameters) {
  appParameters.login_token = params.login_token;
  appParameters.preid = params.preid;
  appParameters.app_version = params.app_version;
  appParameters.platform = params.platform;
  appParameters.user_id = params.user_id;
  appParameters.use_traditional = params.use_traditional;
  appParameters.ext_json = params.ext_json;
  userStore.setToken(params.login_token as any);
  userStore.setAppVersion(params.app_version as any);
  userStore.setPlatform(params.platform as any);

  // TODO
  /*
   * 现在是存储了一个token，如果之后需要可以把获取到的参数全部存入store中
   * 另：
   *    如果store中本身已经存储了一份那么就不在存入store。本次没有做该逻辑处理，逻辑处理如下,其他参数同理
   *    userStore.getToken ? null : userStore.setToken(params.login_token as any);
   * */
};

/**
 * 获取URL地址中的参数
 * @param name
 * @return {string|null}
 */
const getQueryString = function (name:any) {
  return (
    decodeURIComponent(
      // @ts-ignore
      (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')
    ) || null
  );
};

/**
 * 解密APP传递过来的参数
 * @param ext_json 额外参数
 */
const encodeAppParam = function (ext_json:any) {
  try {
    const de_str = decodeURIComponent(ext_json);
    const json_str = CryptoJS.enc.Base64.parse(de_str).toString(CryptoJS.enc.Utf8);

    if (checkIsJSON(json_str)) {
      return JSON.parse(json_str);
    }
    return {};
  } catch (error) {
    console.log(error);
    return {};
  }
};

/**
 * 获取APP从URL传递的参数
 */
const getAppParameters = function () {
  if (userStore.getToken) {
    return;
  }
  const login_token = getQueryString('login_token');
  const preid = getQueryString('preid');
  const app_version = getQueryString('app_version');
  const platform = getQueryString('platform');
  const user_id = getQueryString('user_id');
  const use_traditional = getQueryString('use_traditional');
  const ext_json = getQueryString('ext_json');
  const extJson = ext_json ? encodeAppParam(ext_json) : {};
  const params: IAppParameters = {
    login_token: login_token,
    preid: preid,
    app_version: app_version,
    platform: platform,
    user_id: user_id,
    use_traditional: use_traditional,
    ext_json: extJson,
  };
  setAppParameters(params);
};

export {
  getAppParameters,
};
