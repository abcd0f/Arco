<template>
  <div class="container">
    <Breadcrumb :items="['menu.tools', 'menu.tools.tts']" />
    <a-card class="general-card" title="智能配音">
      <a-textarea
        :placeholder="`\n制作教程\n步骤1：在这里输入或者粘贴要转换的文本，也可选择下方的示例文本\n步骤2：可在下方选择你想要的不同语音配置或背景音乐并选择输出格式\n步骤3：点击合成或者试听`"
        allow-clear
        :max-length="3000"
        show-word-limit
        :auto-size="{
          minRows: 15,
          maxRows: 15,
        }"
      />
      <div class="opts-main">
        <div class="top">
          <p class="title">主播参数</p>
          <div class="audio-opts">
            <div class="audio-opts-player">
              <div>配音演员：<Dubber :title="toptitle" /> </div>
            </div>
            <div class="audio-opts-player"><Slider :title="volume" /></div>
            <div class="audio-opts-player"><Slider :title="speed" /></div>
            <div class="audio-opts-player"><Slider :title="intonation" /></div>
          </div>
        </div>
        <div class="bottom">
          <p class="title">其他参数</p>
          <div class="audio-opts">
            <div class="audio-opts-player">
              <div>示例文本：<Dubber /> </div>
            </div>
            <div class="audio-opts-player">
              <div>背景音乐：<Dubber :title="bgmusic" /> </div>
            </div>
            <div class="audio-opts-player"><Slider :title="intonation" /></div>
            <div class="audio-opts-player"></div>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Dubber from './components/dubber.vue';
  import Slider from './components/slider.vue';

  const toptitle = ref('选择主播类型');
  const bgmusic = ref('选择或者上传背景音乐');
  const volume = ref('音量');
  const speed = ref('语速');
  const intonation = ref('语调');
</script>

<script lang="ts">
  export default {
    name: 'Tts',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 40px 20px;

    :deep(.arco-textarea-wrapper .arco-textarea-clear-btn) {
      top: 93%;
      left: 10px;
    }
    .opts-main {
      .top,
      .bottom {
        .title {
          font-size: 17px;
          font-weight: 700;
        }
        .audio-opts {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;
          font: 400 15px/18px Microsoft YaHei UI-Regular\, Microsoft YaHei UI;
          .audio-opts-player {
            width: 100%;
            height: 65px;
            line-height: 45px;
            margin: 0 10px;
            padding: 10px;
            text-align: center;
          }
        }
      }
    }
  }
</style>
