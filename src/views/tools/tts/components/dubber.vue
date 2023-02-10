<template>
  <a-button type="outline" @click="handleClick">
    小云/活泼俏皮
    <icon-right />
  </a-button>
  <a-modal
    v-model:visible="visible"
    width="1000px"
    title-align="start"
    hide-cancel
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <template #title> {{ props.title }} </template>
    <div>
      <a-tabs type="rounded" size="large">
        <a-tab-pane key="1" title="全部">
          <div class="tab-box">
            <div class="tab-box-child">
              <div class="top">
                <div class="top-left">
                  <icon-music size:22px />
                  <span>蓝雨</span>
                </div>
                <p>温柔知性</p>
              </div>
              <div class="bottom">
                <a-space>
                  <a-button type="outline" shape="round">试听</a-button>
                  <a-button type="outline" shape="round">使用</a-button>
                </a-space>
              </div>
            </div>
            <div class="tab-box-child"></div>
            <div class="tab-box-child"></div>
            <div class="tab-box-child"></div>
            <div class="tab-box-child"></div>
            <div class="tab-box-child"></div>
            <div class="tab-box-child"></div>
            <div class="tab-box-child"></div>
            <div class="tab-box-child"></div>
            <div class="tab-box-child"></div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" title="女声主播"></a-tab-pane>
        <a-tab-pane key="3" title="男声主播"></a-tab-pane>
      </a-tabs>
    </div>
    <template #footer>
      <div>
        <a-pagination :total="200" :page-size="12" hide-on-single-page />
      </div>
    </template>
  </a-modal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
  });

  const visible = ref(false);

  const handleClick = () => {
    visible.value = true;
  };
  const handleOk = () => {
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  };
</script>

<style lang="less" scoped>
  :deep(.arco-pagination) {
    display: block;
    text-align: center;
  }
  .tab-box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .tab-box-child {
      width: calc((100% - 40px) / 4);
      height: 100px;
      margin: 5px;
      border: 1px solid #eee;
      padding: 10px;
      border-radius: 3px;
      transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
      .top {
        width: 100%;
        display: flex;
        margin-top: -18px;
        justify-content: space-between;
        font: 15px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
          Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
          Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji,
          Segoe UI Symbol, Noto Color Emoji;
        .top-left {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .bottom {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
      }
    }
    .tab-box-child:hover {
      border: 1px solid #165dff;
      border-radius: 3px;
      box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
      transform: translate(0, -5px);
      transition-delay: 0s !important;
    }
  }
</style>
