<template>
  <div>
    <p>{{search}}</p>
    <avue-crud
       :option="option"
       :search.sync="search"
       :data="data"
       @search-change="searchChange"
       @search-reset="resetChange">
           <template slot="searchMenu" slot-scope="{row,size}">
               <el-button :size="size" @click="searchSubmit(row)">自定义搜索</el-button>
           </template>
           <template slot="search" slot-scope="{row,size}">
                <el-tag>标题</el-tag>
                <el-input
                    placeholder="自定义输入框"
                    :size="size"
                    style="width: 200px;"
                    v-model="search.slot"></el-input>
           </template>
           <template slot-scope="{disabled,size}" slot="ageSearch">
                <el-slider  :disabled="disabled" :size="size" v-model="search.age"></el-slider>
             </template>
       </avue-crud>
  </div>
</template>

<script>
export default{
  name:'searchAvue',
  data() {
    return{
      search:{
        name:'small'
      },
      data:[
        {
          name:'张三',
          sex:'男'
        },
        {
          name:'李四',
          sex:'女'
        }
      ],
      option:{
        // searchBtnText:'查询',
        // searchBtnIcon:'el-icon-user',
        // emptyBtnText:'重置',
        // emptyBtnIcon:'el-icon-close',
        // searchIndex:2,
        // searchIcon:false,
        // searchShowBtn:false,
        searchMenuSpan:8,
        column:[
          {
            label:'姓名',
            prop:'name',
            // search:true,
            searchValue:'small',
            searchTip:'我是一个下边提示语',
            searchTipPlacement:'bottom',
            searchRules:[{
              required:true,
              message:'请输入姓名',
              trigger:'blur'
            }]
          },
          {
            label:'性别',
            prop:'sex',
            // search:true,
            searchOrder:1
          },
          {
            label:'日期',
            prop:'date',
            type:'datetime',
            searchSpan:8,
            searchRange:true,
            // search:true
          },
          {
                      label: '年龄',
                      prop: 'age',
                      search:true,
                    }
        ]
      }
    }
  },
  methods:{
    resetChange(item){
      this.$message.success('清空回调')
    },
    searchChange(params,done){
      this.$message.success('2s后关闭锁定')
      setTimeout(() => {
        done();
        this.$message.success(JSON.stringify(params))
      },2000)
    }
  }
}
</script>

<style>
</style>
