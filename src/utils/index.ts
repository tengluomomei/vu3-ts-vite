import type { RouteLocationNormalized, RouteRecordNormalized } from 'vue-router';
import type { App, Plugin } from 'vue';
import { includes, trim, cloneDeep } from 'lodash-es';

import { unref } from 'vue';
import { isObject } from '@/utils/is';
import { useUserStoreWithOut } from '@/store/modules/user';

export const noop = () => {};

/**
 * @description:  Set ui mount node
 */
export function getPopupContainer(node?: HTMLElement): HTMLElement {
  return (node?.parentNode as HTMLElement) ?? document.body;
}

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}

// 深度合并
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  const res: any = cloneDeep(src);
  for (key in target) {
    res[key] = isObject(res[key]) ? deepMerge(res[key], target[key]) : (res[key] = target[key]);
  }
  return res;
}


export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component as any);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};

export function awaitWrap<T, U = any>(promise: Promise<T>): Promise<[U | null, T | null]> {
  return promise.then<[null, T]>((data: T) => [null, data]).catch<[U, null]>((err) => [err, null]);
}

export function getTokenUrl(url: string) {
  const store = useUserStoreWithOut();
  return `${url}?login_token=${store.getToken}`;
  // TODO
  /*
   * 本次只使用该方法时只做了token的拼接，如果需要完全拼接则可以使用 IAppParameters 类型定义，并从store中获取
   * */
}

/**
 * 获取当前设备系统
 * @return {String}
 */
export function judgeSystem() {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // 判断是否是 android终端
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isAndroid) {
    return 'android';
  } else if (isIOS) {
    return 'ios';
  } else {
    return 'web';
  }
}

export function textExtractUrl(str: string) {
  const delimiter =
    /((?:https?:\/\/)?(?:(?:[\da-z]?(?:[\da-z\-]{1,61}[\da-z])?\.[^\s.|])+[.a-z]*[a-z]+|(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})(?::\d{1,5})*[\w#%&()+,./;=?\\~\-]*)/gi;

  str = str.replace(delimiter, function (website) {
    return `<a href="${website}" target="_blank" class="text-blue-500">${website}</a>`;
  });
  return str;
}

export function scrollToBottom() {
  (function smoothscroll() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // 已经被卷掉的高度
    const clientHeight = document.documentElement.clientHeight; // 浏览器高度
    const scrollHeight = document.documentElement.scrollHeight; // 总高度
    if (scrollHeight - 10 > currentScroll + clientHeight) {
      window.requestAnimationFrame(smoothscroll);
      window.scrollTo(0, currentScroll + (scrollHeight - currentScroll - clientHeight) / 2);
    }
  })();
}
