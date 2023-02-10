<!-- 文案库 -->
<template>
  <div class="content">
    <a-collapse :default-active-key="[1]" :bordered="false" accordion>
      <template #expand-icon="{ active }">
        <icon-face-smile-fill v-if="active" />
        <icon-face-frown-fill v-else />
      </template>
      <a-collapse-item key="1" header="醉犯：你吹的所有牛×都会作为呈堂证供">
        <div>11111111111111111111</div>
      </a-collapse-item>
      <a-collapse-item key="2" header="本来就是鸿门宴结果樊哙没带剑">
        <div>2222222222222</div>
      </a-collapse-item>
      <a-collapse-item key="3" header="醉犯：你吹的所有牛×都会作为呈堂证供">
        <div>11111111111111111111</div>
      </a-collapse-item>
      <a-collapse-item key="4" header="本来就是鸿门宴结果樊哙没带剑">
        <div>2222222222222</div>
      </a-collapse-item>
      <a-collapse-item key="5" header="醉犯：你吹的所有牛×都会作为呈堂证供">
        <div>11111111111111111111</div>
      </a-collapse-item>
      <a-collapse-item key="6" header="本来就是鸿门宴结果樊哙没带剑">
        <div>2222222222222</div>
      </a-collapse-item>
      <a-collapse-item key="7" header="醉犯：你吹的所有牛×都会作为呈堂证供">
        <div>11111111111111111111</div>
      </a-collapse-item>
      <a-collapse-item key="8" header="本来就是鸿门宴结果樊哙没带剑">
        <div>2222222222222</div>
      </a-collapse-item>
    </a-collapse>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
  .content {
    width: 100%;
    padding: 10px;
  }
</style>
