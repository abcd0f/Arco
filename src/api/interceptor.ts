import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message, Modal } from '@arco-design/web-vue';
import { useUserStore } from '@/store';
import { getToken } from '@/utils/auth';

export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}

if (import.meta.env.BASE_URL) {
  axios.defaults.baseURL = import.meta.env.BASE_URL;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 让每个请求携带标记
    // 本例使用JWT令牌
    // 授权是一个自定义的头键
    // 请根据实际情况修改
    const token = getToken();
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // do something
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    const res = response.data;
    // 如果自定义代码不是20000，则判定为错误。
    if (res.code !== 20000) {
      Message.error({
        content: res.msg || 'Error',
        duration: 5 * 1000,
      });
      // 50008: Illegal token; 50012: 已登录的其他客户端; 50014: Token expired;
      if (
        [50008, 50012, 50014].includes(res.code) &&
        response.config.url !== '/api/user/info'
      ) {
        Modal.error({
          title: '确认注销',
          content: '您已经登出，您可以取消留在此页面，或重新登录。',
          okText: 'Re-Login',
          async onOk() {
            const userStore = useUserStore();

            await userStore.logout();
            window.location.reload();
          },
        });
      }
      return Promise.reject(new Error(res.msg || 'Error'));
    }
    return res;
  },
  (error) => {
    Message.error({
      content: error.msg || 'Request Error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);
