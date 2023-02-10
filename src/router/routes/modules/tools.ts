import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const TOOLS: AppRouteRecordRaw = {
  path: '/tools',
  name: 'tools',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.tools',
    requiresAuth: true,
    icon: 'icon-tool',
    order: 3,
    // hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'article', // 文案库
      name: 'ARTICLE',
      component: () => import('@/views/tools/article/index.vue'),
      meta: {
        locale: 'menu.tools.article',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'speakAweme', // 文案提取
      name: 'SpeakAweme',
      component: () => import('@/views/tools/speakAweme/index.vue'),
      meta: {
        locale: 'menu.tools.speakAweme',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'deleteMark', // 去水印
      name: 'DeleteMark',
      component: () => import('@/views/tools/deleteMark/index.vue'),
      meta: {
        locale: 'menu.tools.deleteMark',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'tts', // 智能配音
      name: 'Tts',
      component: () => import('@/views/tools/tts/index.vue'),
      meta: {
        locale: 'menu.tools.tts',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'ocr', // 图片转文字
      name: 'OCR',
      component: () => import('@/views/tools/ocr/index.vue'),
      meta: {
        locale: 'menu.tools.ocr',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'video2text', // 音频转文字
      name: 'Video2text',
      component: () => import('@/views/tools/video2text/index.vue'),
      meta: {
        locale: 'menu.tools.video2text',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'audio2text', // 语音转文案
      name: 'AudioText',
      component: () => import('@/views/tools/audio2text/index.vue'),
      meta: {
        locale: 'menu.tools.audio2text',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'forbidden', // 违禁词
      name: 'Forbidden',
      component: () => import('@/views/tools/forbidden/index.vue'),
      meta: {
        locale: 'menu.tools.forbidden',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default TOOLS;
