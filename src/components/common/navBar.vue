<template>
  <div class="navbar">
       <div class="left-menu" ref="leftMenu">
         <!-- logo -->
         <div class="logo" ref="logo">
             <!-- <svg-icon></svg-icon> -->
             <span>资源中心</span>
         </div>
         <ul v-if="routes">
           <li
             v-for="(item,index) in routes"
             :key="index"
             @click="openRouter(item)">
                  <!-- <svg-icon></svg-icon>
                  <svg-icon></svg-icon> -->
                  <span class="name" v-if="item.label">{{item.label}}</span>
                  <!-- <span class="name" v-else>{{ item.children[0].meta.title}}</span> -->
             </li>
         </ul>
       </div>
       <!-- 右侧菜单 -->
       <div class="right-menu">
       <!--  <template v-if="device !== 'mobile'"></template> -->
       </div>
  </div>
</template>

<script>
   export default{
       name:'navBar',
       data(){
         return {
           routes:[{
               label:'机务管理',
               path:'',
               component:''
           },{
               label:'物资管理',
               path:'',
               component:''
           },{
               label:'维修管理',
               path:'',
               component:''
           },{
               label:'营收管理',
               path:'',
               component:''
           }]
         }
       },
       methods:{
         openRouter(){

         }
       }
   }
</script>

<style scoped>
.navbar{
  display: flex;
  height: 72px;
  overflow: hidden;
  position: relative;
  background:#213676;
  box-shadow: 0 1px 4px rgb(0 21 41 8%);
}
.navbar .left-menu{
  display: flex;
  -webkit-box-flex: 1;
  flex:1;
  color: #fff;
}
.navbar .left-menu .logo{
  -webkit-box-flex: 0;
  flex:0 0 auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 0 20px;
}
.navbar .left-menu .logo span{
  padding-top: 8px;
  font-size: 18px;
  font-weight: 700;
  text-indent: 5px;
}
.navbar .left-menu ul{
  -webkit-box-flex:1;
  flex:1;
  overflow: hidden;
  height: 72px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.navbar .left-menu ul li{
  position: relative;
  display: flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  float: left;
  min-width: 95px;
  height: 72px;
  padding: 0 10px;
  cursor: pointer;
}
.navbar .left-menu ul li:active-ment{
  color: #fff;
  background-color: #1985fc;
}
</style>
