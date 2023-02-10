import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const BBBBB: AppRouteRecordRaw = {
  path: '/bbbbb',
  name: 'bbbbb',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.bbbbb',
    requiresAuth: true,
    icon: 'icon-idcard',
    order: 4,
  },
  children: [
    {
      path: 'zhubo',
      name: 'Zhubo',
      component: () => import('@/views/bbbbb/zhubo/index.vue'),
      meta: {
        locale: 'menu.bbbbb.zhubo',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'shangjia',
      name: 'Shangjia',
      component: () => import('@/views/bbbbb/shangjia/index.vue'),
      meta: {
        locale: 'menu.bbbbb.shangjia',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default BBBBB;
