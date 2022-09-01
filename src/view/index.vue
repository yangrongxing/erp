<template>
  <div>
     <!-- <avue-form :option="option" v-model="form"></avue-form> -->
     <el-button type="primary" @click="showDialog">弹窗表单</el-button>
     <el-button type="success" @click="showDialog1">弹窗表单</el-button>
  </div>
</template>

<script>
export default{
    name:'mainIndex',
    data() {
      return {
        form: { },
        // option: {
        //   menuSpan:6,
        //   labelwidth:80,
        //   column: [
        //     {
        //       label: '姓名',
        //       prop: 'name',
        //       span:6
        //     },
        //     {
        //       label: '年龄',
        //       prop: 'age',
        //       span:6
        //     }
        //   ]
        // },
        option: {
          submit: '完成',
          span:24,
          column: [
            {
              label: "姓名",
              prop: "name",
              rules: [
                {
                  required: true,
                  message: "请输入姓名",
                  trigger: "blur"
                }
              ]
            },
            {
              label: "年龄",
              prop: "age"
            }
          ]
        }
      }
      
    },
    methods:{
      showDialog() {
        this.$DialogForm.show({
          title: '弹窗页面',
          width: '30%',
          menuPosition: 'right',
          option: this.option,
          beforClose: (done) => {
            this.$message.success('关闭前方法')
            done()
          },
          callback:(res)=>{
            console.log(res.data);
            this.$message.success('关闭等待框')
            setTimeout(() => {
              res.done()
              setTimeout(() => {
                this.$message.success('关闭弹窗')
              }, 1000);
            }, 1000);
          }
        })


      },
      showDialog1() {
        this.$DialogForm.show({
          title:'弹窗页面（带上数据）',
          width: '50%',
          data: { name: 'small',age:18},
          option:this.option,
          callback: (res) => {
            console.log(res.data);
            this.$message.success('关闭等待框')
            setTimeout(() => {
              res.done()
              setTimeout(() => {
                this.$message.success('关闭弹窗')
              }, 1000);
            }, 1000);
          }
        })
      }
    }
}
</script>

<style>
</style>
