<template>
  <div>
      <avue-form :option="option" v-model="obj" @submit="submit" @error="error"></avue-form>
  </div>

</template>
<script>
const dic = [{
     value: 'zhinan',
     label: '指南',
     children: [{
       value: 'shejiyuanze',
       label: '设计原则',
       children: [{
         value:'yizhi',
         label:'一致'
       },{
         value:'fankui',
         label:'反馈'
       }]
     }]
}]
export default{
    name:'ziDingYiKaCao',
    data() {
        var validatePass = (rule,value,callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            callback();
          }
        };
        var validatePass2 = (rule,value,callback) =>{
          if (value === ''){
            callback(new Error('请再次输入密码'));
          } else if (value !== this.obj.password) {
            callback(new Error('两次输入密码不一致！'));
          } else {
            callback();
          }
        }
        return {
            obj:{
              name:'张三'
            },
            option:{
              column:[

                {
                  label:'姓名',
                  prop:'name',
                  rules:[{
                    required:true,
                    message:'请输入姓名',
                    trigger:'blur'
                  }]
                  },{
                    label:'性别',
                    prop:'sex',
                    rules:[{
                      required:true,
                      message:'请输入性别',
                      trigger:'blur'
                    }]
                    },{
                      label:'多选',
                      prop:'cascader',
                      type:'cascader',
                      dicData:dic,
                      rules:[{
                        required:true,
                        type:'array',
                        message:'请选择多选',
                        trigger:'blur'
                      }]
                    },{
                      label:'密码',
                      prop:'password',
                      type:'password',
                      rules:[{validator:validatePass,trigger:'blur'}]
                    },{
                      label:'确认密码',
                      prop:'oldpassword',
                      type:'password',
                      rules:[{validator:validatePass2,trigger:'blur'}]
                    }
                  ]
              }

        }
    },
    methods: {
        submit(form,done){
          this.$message.success(JSON.stringify(form));
          done()
        },
        error(err){
          this.$message.success('请查看控制台');
          console.log(err)
        }
    }
}
</script>
<style>

</style>
