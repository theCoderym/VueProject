<template>
  <a-table :columns="columns" :data-source="formDataList" bordered>
    <template slot="name" slot-scope="text">
      <a>{{ text }}</a>
    </template>
    <template slot="title" slot-scope="currentPageData">
      活动列表
    </template>
<!--    <template slot="footer" slot-scope="currentPageData">-->
<!--      Footer-->
<!--    </template>-->
  </a-table>
</template>
82328129 公积金
82820535 社保
<script>
const columns = [
  {
    title: '活动名称',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '活动详情',
    // className: 'column-money',
    dataIndex: 'desc',
  },
  {
    title: '活动类型',
    dataIndex: 'type',
  },
  {
    title: '活动时间',
    dataIndex: 'actdate',
  },
];

export default {
  mounted() {
    this.getDataList();
  },
  methods:{
    getDataList(){
      this.formDataList = JSON.parse(localStorage.getItem('formArray'));
      console.log('localstorgedata:',this.formDataList);
    }
  },
  data(){
    return{
      formDataList:[],
      columns,
    }
  },
  name: "ShowForm"
}
</script>

<style scoped>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
