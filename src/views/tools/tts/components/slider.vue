<template>
  <div>
    <div class="title-child">{{ props.title }}：</div>
    <a-space direction="vertical" size="mini">
      <a-slider
        :default-value="5"
        :style="{ width: '180px' }"
        show-input
        :max="10"
      />
    </a-space>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="less" scoped>
  .title-child {
    display: inline-block;
    min-width: 55px;
  }
  :deep(.arco-input-number) {
    width: 42px;
    height: 22px;
  }
  //   :deep(.arco-input-wrapper) {
  //     background-color: #fff;
  //   }
  :deep(.arco-slider-track::before) {
    height: 6px;
  }
  :deep(.arco-slider-btn:hover::after) {
    transform: scale(1.5);
  }
  :deep(.arco-slider-bar) {
    height: 5px;
  }
</style>
