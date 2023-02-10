<template>
  <div class="container">
    <Breadcrumb :items="['menu.tools', 'menu.tools.article']" />
    <!-- <a-card class="general-card" :title="$t('menu.list.searchTable')"> -->
    <a-card class="general-card">
      <a-tabs position="left" lazy-load type="card-gutter" animation>
        <a-tab-pane key="1" title="情感">
          <One />
        </a-tab-pane>
        <a-tab-pane key="2" title="节日"> <Two /> </a-tab-pane>
        <a-tab-pane key="3" title="创意"> Content of Tab Panel 3 </a-tab-pane>
        <a-tab-pane key="4" title="名人名言">
          Content of Tab Panel 1
        </a-tab-pane>
        <a-tab-pane key="5" title="经典语录">
          Content of Tab Panel 2
        </a-tab-pane>
        <a-tab-pane key="6" title="日常"> Content of Tab Panel 3 </a-tab-pane>
        <a-tab-pane key="7" title="生活"> Content of Tab Panel 1 </a-tab-pane>
        <a-tab-pane key="8" title="自然"> Content of Tab Panel 2 </a-tab-pane>
        <a-tab-pane key="9" title="广告"> Content of Tab Panel 3 </a-tab-pane>
        <a-tab-pane key="10" title="月份"> Content of Tab Panel 1 </a-tab-pane>
        <a-tab-pane key="11" title="简短"> Content of Tab Panel 2 </a-tab-pane>
        <a-tab-pane key="12" title="旅行"> Content of Tab Panel 3 </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import One from './components/one.vue';
  import Two from './components/two.vue';
</script>

<script lang="ts">
  export default {
    name: 'ARTICLE',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 40px 20px;
    .general-card {
      padding-top: 20px;
    }
    :deep(.arco-tabs-tab) {
      text-align: center;
    }
  }
</style>
