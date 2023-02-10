<template>
  <div class="container">
    <Breadcrumb :items="['menu.tools', 'menu.tools.deleteMark']" />
    <a-card class="general-card" title="在线去水印">
      <div class="imgbox">
        <div class="img-left">
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
        </div>
        <div style="width: 20px"></div>
        <div class="img-right"></div>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup></script>

<script>
  export default {
    name: 'DeleteMark',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 40px 20px;
    .imgbox {
      width: 100%;
      height: calc(100vh - 275px);
      display: flex;
      // background-color: aqua;
      .img-left {
        width: 50%;
        height: calc(100vh - 275px);
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
            height: calc(100vh - 275px);
            width: 100%;
            border-radius: 2px;
            line-height: calc(100vh - 275px);
            text-align: center;
          }
        }
      }
      .img-right {
        width: 50%;
        height: calc(100vh - 275px);
        // background-color: red;
        border: 1px dashed var(--color-fill-4);
        border-radius: 2px;
      }
    }
  }
</style>
