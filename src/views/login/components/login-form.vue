<template>
  <div class="login">
    <a-tabs>
      <a-tab-pane key="1">
        <template #title>账号登录</template>
        <loginID />
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #title>扫码登录</template>
        <loginQR />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
  import loginID from './login/loginID.vue';
  import loginQR from './login/loginQR.vue';
</script>

<style lang="less" scoped>
  .login {
    width: 380px;
  }

  :deep(.arco-tabs-nav-type-line .arco-tabs-tab-title) {
    font-size: 25px;
  }
</style>
