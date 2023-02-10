<template>
  <div class="container">
    <Breadcrumb :items="['menu.tools', 'menu.tools.forbidden']" />
    <a-card class="general-card" title="违禁词检测">
      <a-checkbox-group :default-value="['1', '2', '3', '4', '5', '6']">
        <a-checkbox value="1">
          <template #checkbox="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-music />&nbsp;通用类
            </a-tag>
          </template>
        </a-checkbox>
        <a-checkbox value="2">
          <template #checkbox="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-music />&nbsp;敏感词
            </a-tag>
          </template>
        </a-checkbox>
        <a-checkbox value="3">
          <template #checkbox="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-music />&nbsp;广告词
            </a-tag>
          </template>
        </a-checkbox>
        <a-checkbox value="4">
          <template #checkbox="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-music />&nbsp;新闻词
            </a-tag>
          </template>
        </a-checkbox>
        <a-checkbox value="5">
          <template #checkbox="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-music />&nbsp;美妆词
            </a-tag>
          </template>
        </a-checkbox>
        <a-checkbox value="6">
          <template #checkbox="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-music />&nbsp;直播间
            </a-tag>
          </template>
        </a-checkbox>
      </a-checkbox-group>
      <div class="tool_textarea">
        <a-textarea
          v-model="textareaVal"
          placeholder="请输入您要检测的内容"
          :auto-size="{
            minRows: 10,
            maxRows: 10,
          }"
        />
        <div style="width: 4%"></div>
        <a-textarea
          v-model="textareaVal"
          disabled
          :auto-size="{
            minRows: 10,
            maxRows: 10,
          }"
        />
      </div>
      <div class="forbidden-btn">
        <div class="btn-left">
          <a-space>
            <a-button type="primary">开始检测</a-button>
            <a-button type="outline" @click="clear">全部清空</a-button>
          </a-space>
        </div>
        <div class="btn-right">
          <a-space>
            <a-button type="outline" @click="copy">一键复制</a-button>
          </a-space>
        </div>
      </div>
      <div class="forbidden_result">
        <div class="forbidden_result_title"> 检测结果 </div>
        <div class="forbidden_result_info">
          <p>通用类：<span style="color: rgb(224, 52, 28)">0</span></p>
          <p>敏感词：<span style="color: rgb(224, 174, 28)">0</span></p>
          <p>广告词：<span style="color: rgb(160, 109, 242)">0</span></p>
          <p>新闻词：<span style="color: rgb(48, 153, 156)">0</span></p>
          <p>美妆词：<span style="color: rgb(229, 149, 76)">0</span></p>
          <p>直播词：<span style="color: rgb(169, 82, 38)">0</span></p>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Notification } from '@arco-design/web-vue';

  const textareaVal = ref('');

  const clear = () => {
    textareaVal.value = '';
  };
  const copy = () => {
    const input = document.createElement('input'); // js创建一个input输入框
    input.value = textareaVal.value; // 将需要复制的文本赋值到创建的input输入框中，this.ruleForm.url这个是我要复制的内容
    document.body.appendChild(input); // 将输入框暂时创建到实例里面
    input.select(); // 选中输入框中的内容
    document.execCommand('Copy'); // 执行复制操作
    document.body.removeChild(input);
    Notification.success({
      title: '复制成功',
      content: '',
      closable: true,
    });
  };
</script>

<script lang="ts">
  export default {
    name: 'ARTICLE',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 40px 20px;
    :deep(.arco-tag) {
      height: 35px;
      line-height: 35px;
      padding: 0 20px;
      border-radius: 100px;
      font-size: 14px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.08);
    }
    :deep(.arco-checkbox:nth-child(1) .arco-tag-checked) {
      background-color: rgb(224, 52, 28);
    }
    :deep(.arco-checkbox:nth-child(2) .arco-tag-checked) {
      background-color: rgb(224, 174, 28);
    }
    :deep(.arco-checkbox:nth-child(3) .arco-tag-checked) {
      background-color: rgb(160, 109, 242);
    }
    :deep(.arco-checkbox:nth-child(4) .arco-tag-checked) {
      background-color: rgb(48, 153, 156);
    }
    :deep(.arco-checkbox:nth-child(5) .arco-tag-checked) {
      background-color: rgb(229, 149, 76);
    }
    :deep(.arco-checkbox:nth-child(6) .arco-tag-checked) {
      background-color: rgb(169, 82, 38);
    }
    .tool_textarea {
      width: 98%;
      margin: 30px 0 30px 1%;
      display: flex;
      justify-content: space-between;
      .arco-textarea-wrapper:nth-child(1) {
        background-color: #fff;
        :deep(.arco-textarea) {
          cursor: text;
        }
      }
      .arco-textarea-wrapper {
        width: 100%;
        border-radius: 10px;
        border-color: #dcdfe6;
        :deep(.arco-textarea) {
          cursor: default;
        }
      }

      .arco-textarea-wrapper:nth-child(1):hover {
        border-color: #dcdfe6;
      }
      .arco-textarea-wrapper:nth-child(2):hover {
        background-color: var(--color-fill-2);
        border-color: #dcdfe6;
      }
    }
    .forbidden-btn {
      width: 98%;
      margin-left: 1%;
      display: flex;
      justify-content: space-between;
    }
    .forbidden_result {
      background: rgba(0, 0, 0, 0.04);
      border-radius: 16px 16px 16px 16px;
      width: 98%;
      height: 116px;
      margin-top: 32px;
      margin-left: 1%;
      padding: 16px 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .forbidden_result_title {
      margin: 8px 0 16px 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 120px;
      font-size: 18px;
    }
    .forbidden_result_info {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .forbidden_result_info p {
      margin: 0 12px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
      line-height: 24px;
      font-size: 16px;
    }
  }
</style>
