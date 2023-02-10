<template>
  <a-button type="outline" @click="handleClick">
    <icon-plus />
    新增黑名单
  </a-button>
  <a-modal
    v-model:visible="visible"
    width="700px"
    title-align="start"
    hide-cancel
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <template #title> {{ props.title }} </template>
    <div>
      <a-form
        ref="formRef"
        size="large"
        :model="form"
        :style="{ width: '600px' }"
      >
        <a-form-item
          field="name"
          label="店铺名"
          :rules="[
            { required: true, message: '必须填写店铺名' },
            { minLength: 5, message: '必须大于5个字符' },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input v-model="form.name" placeholder="请输入店铺名..." />
        </a-form-item>
        <a-form-item
          field="age"
          label="Age"
          :rules="[
            { required: true, message: '必须填写年龄' },
            { type: 'number', max: 100, message: '年龄最大不可超过100岁' },
          ]"
        >
          <a-input-number
            v-model="form.age"
            :min="1"
            placeholder="请输入年龄..."
          />
        </a-form-item>
        <a-form-item
          field="section"
          label="选项"
          :rules="[{ match: /section one/, message: '必须选择第一项' }]"
        >
          <a-select v-model="form.section" placeholder="请选择 ...">
            <a-option value="section one">Section One</a-option>
            <a-option value="section two">Section Two</a-option>
            <a-option value="section three">Section Three</a-option>
          </a-select>
        </a-form-item>
        <a-form-item
          field="options"
          label="Options"
          :rules="[
            {
              type: 'array',
              minLength: 2,
              message: '必须选择两个以上的选项',
            },
          ]"
        >
          <a-checkbox-group v-model="form.options">
            <a-checkbox value="option one">Section One</a-checkbox>
            <a-checkbox value="option two">Option Two</a-checkbox>
            <a-checkbox value="option three">Option Three</a-checkbox>
            <a-checkbox value="option four">Option Four</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item field="date" label="Date">
          <a-date-picker v-model="form.date" placeholder="请选择时间 ..." />
        </a-form-item>
        <a-form-item
          field="radio"
          label="Radio"
          :rules="[{ match: /one/, message: '必须选择第一个' }]"
        >
          <a-radio-group v-model="form.radio">
            <a-radio value="radio one">Radio One</a-radio>
            <a-radio value="radio two">Radio Two</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          field="slider"
          label="Slider"
          :rules="[{ type: 'number', min: 5, message: '最小值为5' }]"
        >
          <a-slider v-model="form.slider" :max="10" />
        </a-form-item>
        <a-form-item field="score" label="Score">
          <a-rate v-model="form.score" allow-clear />
        </a-form-item>
        <a-form-item
          field="switch"
          label="Switch"
          :rules="[{ type: 'boolean', true: true, message: '必须开启' }]"
        >
          <a-switch v-model="form.switch" />
        </a-form-item>
        <a-form-item field="multiSelect" label="Multiple Select">
          <a-select
            v-model="form.multiSelect"
            placeholder="Please select ..."
            multiple
          >
            <a-option value="section one">Section One</a-option>
            <a-option value="section two">Section Two</a-option>
            <a-option value="section three">Section Three</a-option>
          </a-select>
        </a-form-item>
      </a-form>
    </div>
    <template #footer>
      <div>
        <a-space>
          <a-button @click="$refs.formRef.resetFields()">重置</a-button>
          <a-button type="primary" @click="submit()">提交</a-button>
        </a-space>
      </div>
    </template>
  </a-modal>
</template>

<script setup>
  import { ref, reactive } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
  });

  const form = reactive({
    size: 'medium',
    name: '',
    age: undefined,
    section: '',
    province: 'haidian',
    options: [],
    date: '',
    time: '',
    radio: 'radio one',
    slider: 5,
    score: 5,
    switch: false,
    multiSelect: ['section one'],
    treeSelect: '',
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
