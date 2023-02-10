import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';

import localeMonitor from '@/views/dashboard/monitor/locale/zh-CN';

import localeSearchTable from '@/views/list/search-table/locale/zh-CN';
import localeCardList from '@/views/list/card/locale/zh-CN';

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/zh-CN';
import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/zh-CN';

import locale403 from '@/views/exception/403/locale/zh-CN';
import locale404 from '@/views/exception/404/locale/zh-CN';
import locale500 from '@/views/exception/500/locale/zh-CN';

import localeUserInfo from '@/views/user/info/locale/zh-CN';
import localeUserSetting from '@/views/user/setting/locale/zh-CN';

import localeSpeakAweme from '@/views/tools/speakAweme/locale/zh-CN';
import localeArticle from '@/views/tools/article/locale/zh-CN';
import localeOcr from '@/views/tools/ocr/locale/zh-CN';
import localeVideo2text from '@/views/tools/video2text/locale/zh-CN';
import localeAudio2text from '@/views/tools/audio2text/locale/zh-CN';
import localeDeleteMark from '@/views/tools/deleteMark/locale/zh-CN';
import localeTts from '@/views/tools/tts/locale/zh-CN';
import localeForbidden from '@/views/tools/forbidden/locale/zh-CN';

import localeZhubo from '@/views/bbbbb/zhubo/locale/zh-CN';
import localeShangjia from '@/views/bbbbb/shangjia/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '仪表盘',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.list': '列表页',
  'menu.exception': '异常页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'menu.tools': '实用工具',
  'menu.bbbbb': '黑名单',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,

  ...localeMonitor,
  ...localeSearchTable,
  ...localeCardList,
  ...localeDataAnalysis,
  ...localeMultiDAnalysis,
  ...locale403,
  ...locale404,
  ...locale500,
  ...localeUserInfo,
  ...localeUserSetting,
  ...localeSpeakAweme,
  ...localeArticle,
  ...localeOcr,
  ...localeVideo2text,
  ...localeAudio2text,
  ...localeDeleteMark,
  ...localeTts,
  ...localeForbidden,
  ...localeZhubo,
  ...localeShangjia,
};
