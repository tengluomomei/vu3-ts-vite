import {
  showNotify,
  showToast,
  showSuccessToast,
  showFailToast,
  showLoadingToast,
  closeToast,
  allowMultipleToast,
  showDialog,
  showConfirmDialog,
} from 'vant';
import type { NotifyOptions, ToastOptions } from 'vant';
import type { Numeric } from 'vant/lib/utils';

const notifyItems = {
  primary: (message: Numeric) => {
    return showNotify({
      type: 'primary',
      message: message,
    });
  },
  success: (message: Numeric) => {
    return showNotify({
      type: 'success',
      message: message,
    });
  },
  warning: (message: Numeric) => {
    return showNotify({
      type: 'warning',
      message: message,
    });
  },
  danger: (message: Numeric) => {
    return showNotify({
      type: 'danger',
      message: message,
    });
  },
  info: (options: NotifyOptions) => {
    return showNotify(options);
  },
};

function createSuccessToast(options: ToastOptions, multiple = false) {
  multiple ? allowMultipleToast() : null;
  return showSuccessToast(options);
}
function createFailToast(options: ToastOptions, multiple = false) {
  multiple ? allowMultipleToast() : null;
  return showFailToast(options);
}
function createInfoToast(options: ToastOptions, multiple = false) {
  multiple ? allowMultipleToast() : null;
  return showToast(options);
}
function createLoadingToast(options: ToastOptions, multiple = false) {
  multiple ? allowMultipleToast() : null;
  const newOptions: ToastOptions = { ...options, duration: 0 };
  return showLoadingToast(newOptions);
}
function clearToast(all = true) {
  closeToast(all);
}

export function useMessage() {
  return {
    createNotify: notifyItems,
    createDialog: {
      alert: showDialog,
      confirm: showConfirmDialog,
    },
    createSuccessToast,
    createFailToast,
    createInfoToast,
    createLoadingToast,
    clearToast,
  };
}
