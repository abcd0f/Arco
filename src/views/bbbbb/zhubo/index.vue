<template>
  <div class="container">
    <Breadcrumb :items="['menu.bbbbb', 'menu.bbbbb.zhubo']" />
    <a-card class="general-card" title="主播黑名单">
      <a-space>
        <Zadd :title="title" />
        <a-button type="outline">Outline</a-button>
      </a-space>
      <a-table
        :columns="columns"
        :data="data"
        :sticky-header="100"
        :bordered="false"
      >
        <template #name> 达利园旗舰店 </template>
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
          <a-button type="text" size="mini"> 移除黑名单 </a-button>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import Zadd from './components/zhuboadd.vue';

  const title = ref('添加主播单商家');

  const columns = [
    {
      title: '店铺名称',
      dataIndex: 'name',
      slotName: 'name',
      width: 200,
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

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
    :deep(.arco-space) {
      margin: 0 0 30px 0;
    }
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
  }
</style>
