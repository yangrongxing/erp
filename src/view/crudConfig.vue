<template>
  <div>
      <avue-crud
         ref="crud"
         :data="data"
         :option="option"
         :cell-style="cellStyle"
         :row-style="rowStyle"
         :row-class-name="tableRowClassName"
         @selection-change="selectionChange"
         @current-row-change="handleCurrentRowChange">
              <!-- <template slot="tip">
                <el-tag type="danger">自定义内容</el-tag>
              </template> -->
             <template
               slot="nameHeader" slot-scope="{column}">
                  <el-tag>{{(column  || {}).label}}-{{(column || {}).prop}}</el-tag>
               </template>
               <template slot="menuLeft" slot-scope="{size}">
                 <el-button type="primary" :size="size" icon="el-icon-check" @click="toggleSelection([data[1]])">选中第二行</el-button>
                 <el-button type="danger" :size="size" icon="el-icon-delete" @click="toggleSelection()">取消选择</el-button>
               </template>
               <template slot="menuRight" slot-scope="{size}">
                  <el-button type="primary" icon="el-icon-edit" circle :size="size"></el-button>
               </template>
               <template slot="menu" slot-scope="{type,size}">
                 <el-button icon="el-icon-check" :size="size" :type="type">自定义</el-button>
               </template>
         </avue-crud>
  </div>
</template>

<script>
export default{
    name:'crudConfig',
     data() {
          return {
            data: [
              {
                name:'张三',
                sex:'男'
              }, {
                name:'李四',
                sex:'女'
              },{
                name:'张三',
                sex:'男'
              }, {
                name:'李四',
                sex:'女'
              },{
                name:'张三',
                sex:'男'
              }, {
                name:'李四',
                sex:'女'
              },{
                name:'张三',
                sex:'男'
              }, {
                name:'李四',
                sex:'女'
              }
            ],
            option:{
              height:300,
              showHeader:true,
              border:true,//边框
              stripe:true,//条纹
              selection:true,
              aligin:'center',
              menuAlign:'center',
              // selectable:(row,index)=>{
              //   return index === 1;
              // },//禁止某个选项
              // tip:false,//多选提示
              highlightCurrentRow:true,
              // menu:false,
              menuWidth:200,
              // viewBtn:true,
              // copyBtn:true,
              // delBtn:true,
              // editBtn:true,
              // printBtn:true,
              // excelBtn:true,
              // filterBtn:true,

              column:[
                 {
                  label:'姓名',
                  prop:'name',
                  width:200,
                  fixed:true,
                  headerslot:true
                }, {
                  label:'性别',
                  width:300,
                  prop:'sex'
                }, {
                  label:'日期',
                  width:300,
                  prop:'datetime'
                }, {
                  label:'地址',
                  width:300,
                  prop:'address'
                }
              ]
            },
          };
        },
        methods:{
          rowStyle({row,column,rowIndex}){
            if(rowIndex%2===0){
              return {
                backgroundColor:'#eee',
                color:'blue'
              }
            }
          },
          cellStyle({row,column,rowIndex,columnIndex}){
            if(columnIndex == 1){
              if(row.sex == '女'){
                return{
                  color:'green',
                  fontWeight:'bold',
                  fontSize:'20'
                }
              }else{
                return{
                  color:'red',
                  fontWeight:'bold',
                  fontSize:'20'
                }
              }
            }
          },
          tableRowClassName({row,rowIndex}){
            if(rowIndex === 0){
              return 'warning-row';
            }else if(rowIndex === 1){
              return 'success-row';
            }
            return '';
          },
          selectionChange(list){
            this.$message.success('选中的数据' + JSON.stringify(list));
          },
          toggleSelection(val){
            // console.log(val);
            this.$refs.crud.toggleSelection(val);
          },
          handleCurrentRowChange(val){
            this.$notify({
              showClose:true,
              message:'单选'+JSON.stringify(val),
              type:'success',
            })
          }
        }
}
</script>

<style>
  .warning-row{
    background-color: #F56C6C !important;
    color:#fff;
  }
  .success-row{
    background-color: #67C23A !important;
    color:#fff;
  }
  .warning-row.hover-row td,.success-row.hover-row td{
    background-color: initial !important;
  }
</style>
