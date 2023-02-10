<template>
  <div class="container">
    <Breadcrumb :items="['menu.tools', 'menu.tools.ocr']" />
    <a-card class="general-card" title="在线图片文字识别">
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
      <div class="discern">
        <span>识别结果</span>
      </div>
      <a-textarea
        :placeholder="`等待识别结果。。。。`"
        allow-clear
        :max-length="3000"
        show-word-limit
        :auto-size="{
          minRows: 15,
          maxRows: 15,
        }"
      />
      <div class="btn">
        <a-space>
          <a-button type="outline" shape="round"><icon-copy />复制</a-button>
        </a-space>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'OCR',
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
    .discern {
      margin: 20px 0;
      font-size: 20px;
      font-weight: 700;
    }
    .btn {
      margin: 20px 0 0 0;
      width: 100%;
      height: 40px;
      line-height: 40px;
      :deep(.arco-space) {
        float: right;
      }
    }
  }
</style>
