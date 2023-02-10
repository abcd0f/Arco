<template>
  <div class="container">
    <Breadcrumb :items="['menu.tools', 'menu.tools.video2text']" />
    <a-card class="general-card" title="视频转文字">
      <a-upload action="/">
        <template #upload-button>
          <div class="upload-box">
            <div class="upload-img">
              <img
                src="https://www.buguniaopeiyin.com/images/ocr-pickpic.png"
                alt=""
              />
            </div>
            <div style="height: 50px"
              >拖入文件或&nbsp;
              <a-space>
                <a-button type="primary">
                  <template #icon>
                    <icon-drive-file />
                  </template>
                  点击选择
                </a-button>
              </a-space>
            </div>
            * 请上传需要转换的图片文件，支持
            <span style="color: #3370ff">JPG、JPEG、PNG</span>格式的转换
          </div>
        </template>
      </a-upload>
      <div class="audioset">
        <div class="audioset-top">
          <p class="settitle">转换设置</p>
          <div class="setbox">
            <div>
              <span>识别语种：</span>
              <a-radio-group default-value="1">
                <a-radio value="1">
                  <template #radio="{ checked }">
                    <a-tag :checked="checked" checkable>中文</a-tag>
                  </template>
                </a-radio>
                <a-radio value="2">
                  <template #radio="{ checked }">
                    <a-tag :checked="checked" checkable>English</a-tag>
                  </template>
                </a-radio>
              </a-radio-group>
            </div>
            <div>
              <span>导出格式：</span>
              <a-radio-group default-value="1">
                <a-radio value="1">
                  <template #radio="{ checked }">
                    <a-tag :checked="checked" checkable>TXT</a-tag>
                  </template>
                </a-radio>
                <a-radio value="2">
                  <template #radio="{ checked }">
                    <a-tag :checked="checked" checkable>WORD</a-tag>
                  </template>
                </a-radio>
                <a-radio value="3">
                  <template #radio="{ checked }">
                    <a-tag :checked="checked" checkable>SRT</a-tag>
                  </template>
                </a-radio>
              </a-radio-group>
            </div>
          </div>
        </div>
        <div class="audioset-bottom">
          <p class="settitle">使用场景</p>
          <div>选择专业领域，可提升相对识别效果</div>
          <div>
            <a-radio-group>
              <template v-for="item in 2" :key="item">
                <a-radio :value="item">
                  <template #radio="{ checked }">
                    <a-space
                      align="start"
                      class="custom-radio-card"
                      :class="{ 'custom-radio-card-checked': checked }"
                    >
                      <div className="custom-radio-card-title">
                        通用聊天 {{ item }}
                      </div>
                    </a-space>
                  </template>
                </a-radio>
              </template>
            </a-radio-group>
          </div>
        </div>
      </div>

      <div class="btn">
        <a-space>
          <a-button type="outline" shape="round"><icon-delete />删除</a-button>
          <a-button type="outline" shape="round">
            <icon-sync />开始转换
          </a-button>
        </a-space>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'VideoText',
  };
</script>

<style scoped lang="less">
  .container {
    :deep(.arco-btn-size-medium) {
      padding: 0 10px;
    }
    padding: 0 20px 40px 20px;
    :deep(.arco-upload) {
      width: 100%;
      .upload-img {
        width: 100%;
        height: 40px;
      }
      .upload-box {
        background-color: var(--color-fill-2);
        color: var(--color-text-1);
        border: 1px dashed var(--color-fill-4);
        height: 400px;
        width: 100%;
        border-radius: 2px;
        line-height: 400px;
        text-align: center;
      }
    }
    .audioset {
      width: 100%;
      .settitle {
        font-size: 17px;
        font-weight: 700;
      }
      :deep(.arco-tag-checked) {
        background-color: #165dff;
        color: #fff;
      }
      .setbox {
        display: flex;
        div:nth-child(1) {
          margin-right: 100px;
        }
      }
      .custom-radio-card {
        margin: 25px 0;
        padding: 10px 16px;
        border: 1px solid var(--color-border-2);
        border-radius: 4px;
        box-sizing: border-box;
      }

      .custom-radio-card-title {
        color: var(--color-text-1);
        font-size: 14px;
        font-weight: bold;
      }

      .custom-radio-card:hover,
      .custom-radio-card-checked,
      .custom-radio-card:hover {
        border-color: rgb(var(--primary-6));
      }

      .custom-radio-card-checked {
        background-color: var(--color-primary-light-1);
      }

      .custom-radio-card:hover .custom-radio-card-title,
      .custom-radio-card-checked .custom-radio-card-title {
        color: rgb(var(--primary-6));
      }
    }
    .btn {
      width: 100%;
      height: 40px;
      line-height: 40px;
      :deep(.arco-space) {
        float: right;
      }
    }
  }
</style>
