<template>
  <div class="container">
    <Breadcrumb :items="['menu.tools', 'menu.tools.speakAweme']" />
    <!-- <a-card class="general-card" :title="$t('menu.list.searchTable')"> -->
    <a-card class="general-card" title="视频文案">
      <a-table
        :columns="columns"
        :data="data"
        :sticky-header="100"
        :bordered="false"
      >
        <template #video>
          <a-image
            width="60"
            height="74"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
          />
          <div class="video">
            <span class="video-title"
              >兄弟们，我这技术还行吧，大杨哥整的一愣一愣的。</span
            >
            <span class="video-time">视频时长: 33秒</span>
          </div>
        </template>
        <template #salary>
          <a-avatar>
            <img
              alt="avatar"
              src="https://cdn-images.chanmama.com/douyin/avatar/24ccad2c761f9aa441c3209898447c34.jpeg"
            />
          </a-avatar>
          <div class="salary">
            <span class="salary-name">疯狂小杨哥</span>
            <span class="salary-fan">粉丝 1.09亿</span>
          </div>
        </template>
        <template #operations>
          <a-button type="text" size="mini"> 播放 </a-button>
          <a-button type="text" size="mini"> 提取文案 </a-button>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';

  const columns = [
    {
      title: '视频',
      dataIndex: 'name',
      slotName: 'video',
      width: 200,
      sortable: {
        sortDirections: ['ascend', 'descend'],
      },
    },

    {
      title: '达人',
      dataIndex: 'salary',
      slotName: 'salary',
      width: 180,
      align: 'center',
    },
    {
      title: '点赞数',
      dataIndex: 'num',
      width: 100,
      align: 'center',
    },
    {
      title: '评论数',
      dataIndex: 'num',
      width: 100,
      align: 'center',
    },
    {
      title: '转发数',
      dataIndex: 'num',
      width: 100,
      align: 'center',
    },
    {
      title: '发布时间',
      dataIndex: 'address',
      align: 'center',
    },
    {
      title: '操作',
      dataindex: 'operations',
      slotName: 'operations',
      align: 'center',
    },
  ];
  const data = reactive([
    {
      key: '1',
      name: '6511',
      address: '32 Park Road, London',
      salary: 23000,
      num: '68.8W',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      num: '68.8W',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      num: '68.8W',
    },
    {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      num: '68.8W',
    },
    {
      key: '5',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      num: '68.8W',
    },
  ]);
</script>

<script lang="ts">
  export default {
    name: 'SpeakAweme',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 40px 20px;
    .salary {
      display: block;
      width: calc(100% - 50px);
      float: right;
      color: #333;
      font-family: SF Pro SC, SF Pro Text, SF Pro Icons, PingFang SC,
        Helvetica Neue, Helvetica, Arial, sans-serif;
      .salary-name {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        line-height: 20px;
        margin: 3px 0 0 0;
      }
      .salary-name:hover {
        color: #165dff;
        cursor: pointer;
      }
      .salary-fan {
        display: block;
        position: relative;
        bottom: -1px;
        font-size: 12px;
        color: #999;
      }
    }
    .video {
      display: block;
      width: calc(100% - 70px);
      float: right;
      color: #333;
      font-family: SF Pro SC, SF Pro Text, SF Pro Icons, PingFang SC,
        Helvetica Neue, Helvetica, Arial, sans-serif;

      .video-title {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        display: box;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 14px;
        line-height: 20px;
        margin: 3px 0 0 0;
      }
      .video-title:hover {
        color: #165dff;
        cursor: pointer;
      }
      .video-time {
        display: block;
        position: relative;
        bottom: -10px;
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>
