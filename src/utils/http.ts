import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios"
import CryptoJS from 'crypto-js'
import qs from 'qs'
import { useMessage } from '@/hooks/web/useMessage';
import { useUserStoreWithOut } from '@/store/modules/user';

const { createInfoToast } = useMessage();

/** 创建请求实例 */
function createService() {
  // 创建一个 Axios 实例
  const service = axios.create()

  // 请求拦截
  service.interceptors.request.use(
    (config) => config,
    // 发送失败
    (error) => Promise.reject(error)
  )

  // 响应拦截
  service.interceptors.response.use(
    response => {
      const res = response.data
      if (res.retCode !== 0) {
          createInfoToast({
              message: res.retMsg || '请求错误',
              overlay: true,
          });
        return Promise.reject(new Error(res.retMsg || 'Error'))
      } else {
        return res.data
      }
    },
    error => {
      createInfoToast({
          message: error.response.data.retMsg,
          overlay: true,
      });
      return Promise.reject(error)
    }
  )
  return service
}

/** 创建请求方法 */
function createRequestFunction(service: AxiosInstance) {
  return function <T=any>(config: AxiosRequestConfig): Promise<T> {
    const userStore = useUserStoreWithOut();
    const configDefault = {
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded',
        "Login-Token": userStore.getToken || 'nologin',
        "App-Version": userStore.getAppVersion || '1001',
        "Platform": userStore.getPlatform || 'android',
        "Client-Type": 'ydapp'
      },
      timeout: 5000,
      baseURL: import.meta.env.VITE_GLOB_TOOLS_API_URL,
      data: {}
    }
    if (config.method === 'POST' ||
      config.method === 'PUT' ||
      config.method === 'DELETE') {
      // 接口签名
      config.data['timestamp'] = Date.parse(new Date().toString()) / 1000;
      const paramData = sortObjByASCII(config.data)
      let sign = ''
      for (const item in paramData) {
        sign += `${item}=${paramData[item]}&`
      }
      sign = `${sign}key=${import.meta.env.VITE_GLOB_TOOLS_SECRET_KEY}`
      paramData.sign = CryptoJS.MD5(sign).toString()
      config.data = qs.stringify(paramData)
    }
    if (config.method === 'GET') {
      config.params = {
        ...config.params
      }
    }
    return service(Object.assign(configDefault, config))
  }
}

/**
 * 将参数以ASCII码排序
 * @param params
 * @return {{}}
 */
const sortObjByASCII = function <T extends Record<string, unknown>>(params: T) {
    // @ts-ignore
    params['batch_id'] = 1;
    const keysArr = Object.keys(params).sort();
    const sortObj: Record<string, unknown> = {};
    for (const i in keysArr) {
    if (params[keysArr[i]] !== undefined) {
        sortObj[keysArr[i]] = params[keysArr[i]];
    }
    }
    return sortObj;
}

/** 用于网络请求的实例 */
export const service = createService()
/** 用于网络请求的方法 */
export const request = createRequestFunction(service)