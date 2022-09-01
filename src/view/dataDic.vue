<template>
      <div>
       <!-- <el-row style="margin-bottom:20px;font-size:15px">
         <el-col :span="4">等待加载框: <el-switch size="small" v-model="showLoading"> </el-switch></el-col>
          <el-col :span="4">显示边框: <el-switch size="small" v-model="showBorder"> </el-switch></el-col>
          <el-col :span="4">显示斑马纹: <el-switch size="small" v-model="showStripe"> </el-switch></el-col>
          <el-col :span="4">显示索引: <el-switch size="small" v-model="showIndex"> </el-switch></el-col>
          <el-col :span="4">显示多选框: <el-switch size="small" v-model="showCheckbox"> </el-switch></el-col>
          <el-col :span="4">显示表头: <el-switch size="small" v-model="showHeader"> </el-switch></el-col>
          <el-col :span="4">显示分页: <el-switch size="small" v-model="showPage"> </el-switch></el-col>
          <el-col :span="4">卡片模式: <el-switch size="small" v-model="showCard"> </el-switch></el-col>
        </el-row> -->
        <!-- <el-row style="margin-bottom:20px">
          类型：<el-radio-group v-model="menuType" size="small">
              <el-radio-button label="text">默认</el-radio-button>
              <el-radio-button label="icon">菜单按钮</el-radio-button>
              <el-radio-button label="text">文本按钮</el-radio-button>
              <el-radio-button label="menu">合并菜单</el-radio-button>
            </el-radio-group>
        </el-row> -->
       <!-- <el-row style="margin-bottom:20px">
           大小：<el-radio-group v-model="sizeValue" size="small">
            <el-radio-button label="small">默认</el-radio-button>
            <el-radio-button label="medium">medium</el-radio-button>
            <el-radio-button label="small">small</el-radio-button>
            <el-radio-button label="mini">mini</el-radio-button>
          </el-radio-group>
        </el-row> -->
       <avue-crud
            :data="data"
            :option="option"
            :table-loading="showLoading"
            :page.sync="page"
            :search.sync="search"
            @size-change="sizeChange"
            @current-change="currentChange">
           <template slot-scope="scope" slot="menuBtn">
             <el-dropdown-item divided >自定义按钮</el-dropdown-item>
           </template>
           <template slot-scope="{type,size}" slot="menu">
             <el-button :type="type" :size="size">自定义按钮</el-button>
           </template>
       </avue-crud>
      </div>

</template>

<script>

  export default{
       name:'dataDic',

       data() {
            return {
              page:{
                total:100,//页面总数
                currentPage: 1,//当前页数
                pageSize:20,//每页选项数
                pageCount:8,//按钮数
                background:false,//背景
                layout:"total, sizes, prev, pager, next, jumper",//复杂模式
              },
              search:{
                name:'small'
              },
              data: [
                {
                  name:'张三',
                  sex:'男'
                }, {
                  name:'李四',
                  sex:'女'
                }, {
                  name:'王五',
                  sex:'女'
                }, {
                  name:'赵六',
                  sex:'男'
                }
              ],
              menuType:'text',//操作菜单类型
              showLoading:false,//加载
              showCard:true,//卡片
              showBorder: true,//边框
              showStripe: true,//条纹
              showHeader: true,//头部
              showIndex: true,//索引
              showCheckbox: true,//多选框
              showPage:true,//分页
              sizeValue:'small',//字号
              


            }
          },
           computed: {
             option(){
               return{
                  title:'标题',
                  titleSize:'h3',
                  titleStyle:{
                    color:'black'
                  },
                  card:this.showCard,
                  border:this.showBorder,
                  stripe:this.showStripe,
                  showHeader:this.showHeader,
                  index:this.showIndex,
                  size:this.sizeValue,
                  selection:this.showCheckbox,
                  page:this.showPage,
                  align:'center',
                  menuAlign:'center',
                  menuType:this.menuType,
                  menuBtnTitle:'自定义名称',
                  column:[
                    {
                      label:'姓名',
                      prop:'name',
                      search:true
                    },
                    {
                      label:'性别',
                      prop:'sex'
                    }
                  ]
               }
             }
           },
           created() {
             this.getList()
           },
           methods:{
             getList(){
               this.page.total = 40
               if(this.page.currentPage === 1){
                 this.data = [
                   {
                     id:1,
                     name:'张三',
                     sex:'男'
                   },
                   {
                     id:2,
                     name:'李四',
                     sex:'女'
                   }
                 ]
               }else if(this.page.currentPage == 2){
                 this.data = [
                   {
                     id:3,
                     name:'王五',
                     sex:'女'
                   },
                   {
                      id:4,
                      name: '赵六',
                      sex: '女'
                   }
                 ]
               }if(this.page.currentPage === 1){
                  this.data = [
                             {
                               id:1,
                               name: '张三',
                               sex: '男'
                             },{
                               id:2,
                               name: '李四',
                               sex: '女'
                             }
                           ]
               }else if(this.page.currentPage === 2){
                  this.data = [
                             {
                               id:3,
                               name: '王五',
                               sex: '女'
                             },{
                               id:4,
                               name: '赵六',
                               sex: '女'
                             }
                           ]
               }
             },
             sizeChange(val){
               this.page.currentPage = 1
               this.page.pageSize = val
               this.getList()
               this.$message.success('行数' + val)

             },
             currentChange(val){
               this.page.currentPage = val
               this.getList()
               this.$message.success('页码' + val)
             }
           }
}
</script>

<style>
</style>
