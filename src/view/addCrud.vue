<template>
  <div>
    <avue-crud
        ref="crud"
       :option="option"
       :data="data"
       v-model="form"
       @row-save="rowSave"
       @row-update="rowUpdate"
       @row-del="rowDel"
       @refresh-change="refreshChange"
       :before-open="beforeOpen"
       :before-close="beforeClose">
          <template slot="menuLeft" slot-scope="scope">
               <el-button
                  type="primary"
                  icon="el-icon-plus"
                  size="small"
                   @click="$refs.crud.rowAdd()">新增</el-button>
          </template>
          <template slot="menu"
                    slot-scope={row,index}>
                       <el-button
                         type="danger"
                         icon="el-icon-edit"
                         size="small"
                         @click="$refs.crud.rowEdit(row,index)">编辑</el-button>
                       <el-button
                         type="success"
                         icon="el-icon-delete"
                         size="small"
                         @click="$refs.crud.rowDel(row,index)">删除</el-button>
          </template>
          <template
             slot="menu"
             slot-scope="{row,index}">
               <el-button type="success"
                 icon="el-icon-delete"
                 size="small"
                 @click="$refs.crud.rowView(row,index)">查看</el-button>
          </template>
          <template slot="menuForm" slot-scope="{row,index,type}">
            <el-button
              type="primary"
              icon="el-icon-check"
              size="small"
              v-if="type=='add'"
              @click="$refs.crud.rowSave()"
              >自定义新增</el-button>
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="small"
              v-if="type=='edit'"
              @click="$refs.curd.rowUpdate()">
              自定义修改</el-button>
             <el-button
               type="primary"
               icon="el-icon-check"
               size="small"
               @click="$refs.curd.closeDialog()">取消</el-button>
          </template>
         <!-- <template slot="menuForm" slot-scope="{row,index}">
            <el-button type="primary"
              icon="el-icon-check"
              size="small"
              plain
              v-if="type=='add'"
              @click="handleNext()">继续添加</el-button>
          </template> -->

       </avue-crud>

  </div>
</template>

<script>
export default{
  name:'addCrud',
  data(){
    return{
      form:{},
      data:[
         {
                    id:1,
                    name:'张三',
                    sex:'男'
                  }, {
                    id:2,
                    name:'李四',
                    sex:'女'
                  }
      ],
      option:{
        // height:100,
        // editBtn:false,
        // delBtn:false,
        addBtnText:'新增数据',
        addBtnIcon:'el-icon-user',
        addBtn:false,
        delBtn:false,
        editBtn:false,
        saveBtn:false,
        updateBtn:false,
        cancelBtn:false,
        viewBtn:true,
        dialogMenuPosition:'left',
        column:[
          {
            label:'姓名',
            prop:'name',
            value:'请输入'
          },{
             label:'性别',
             prop:'sex'
          }
        ]
      }
    }
  },
  methods:{
    rowSave(form,done,loading){
      this.$message.success('模拟网络请求')
      setTimeout(()=>{
        this.$message.success('关闭按钮等待');
        loading();
      },2000)
      setTimeout(()=>{
        this.$message.success('新增数据' + JSON.stringify(form));
        done(form);
      },2000)
    },
    rowUpdate(form,index,done,loading){
      this.$message.success('模拟网络请求')
      setTimeout(()=>{
        this.$message.success('关闭按钮等待');
        loading();
      },1000)
      setTimeout(()=>{
        this.$message.success('编辑数据' + JSON.stringify(form) + '数据序号' + index);
        done(form);
      },2000)
    },
    rowDel(form,index){
      this.$confirm('此操作将永久删除文件，是否继续？','提示',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }).then(()=>{
        this.$message({
          type:'success',
          message:'删除成功！'
        });
      }).cath(()=>{})
    },
    refreshChange(){
      this.$message.success('刷新回调');
    },
    beforeOpen(done,type){
      this.$alert(`我是${type}`,{
        confirmButtonText:'确定',
        callback:action => {
          if(['view','edit'].includes(type)){
            //查看和编辑逻辑


          }else{
            //新增逻辑

            this.form.name = '初始化赋值'
          }
          done();
        }
      })
    },
    beforeClose(done,type){
      this.$confirm('确认关闭？')
      .then(_ => {

        done();
      }).catch(_ => {})
    },
    handleNext(){

    }
  }
}
</script>

<style>
</style>
