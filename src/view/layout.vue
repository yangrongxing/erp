<template>
  <el-container>
    <el-header style="height:72px">

        <nav-bar></nav-bar>

    </el-header>

    <el-container>
     <!-- <el-aside width="200px">
        <side-bar></side-bar>
      </el-aside> -->
      <el-main>
          <!-- <main-index></main-index> -->
         <!-- <zi-cao></zi-cao> -->
         <!-- <data-dic></data-dic> -->
         <!-- <search-avue></search-avue> -->
         <!-- <crud-config></crud-config> -->
         <!-- <add-crud></add-crud> -->
         <data-pay></data-pay>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import navBar from '../components/common/navBar.vue'
import sideBar from '../components/common/sidebar/index'
import mainIndex from './index.vue'
import ziCao from './zidingyikacao.vue'
import dataDic from './dataDic.vue'
import searchAvue from './searchAvue.vue'
import crudConfig from './crudConfig.vue'
import addCrud from './addCrud.vue'
import dataPay from './dataPay.vue'
export default{
     name:'layout',
     components:{
       navBar,
       sideBar,
       mainIndex,
       ziCao,
       dataDic,
       searchAvue,
       crudConfig,
       addCrud,
       dataPay

     }
}
</script>

<style scoped>
.el-header{

    padding: 0;
    margin: 0;
  }
</style>
