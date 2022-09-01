<template>
     <!-- <div :class="{ 'has-logo': showLogo}">
          <logo v-if="showLogo"
                :collapse="isCollapse"/>
          <el-scrollbar wrap-class="scrollbar-warpper">
             <el-menu :default-active="activeMenu"
                      :collapse="isCollapse"
                      :background-color="variables.menubg"
                      :text-color="variables.menuText"
                      :unique-opened="true"
                      :active-text-color="setting.theme"
                      :collapse-transition="false"
                      mode="vertical">

                 <sidebar-item v-for="(route,index) in currentMenu.child"
                               :key="route.path + index"
                               :item="route"
                               :base-path="basePath + '/' + route.path"/>

             </el-menu>
          </el-scrollbar>
     </div> -->
</template>

<script>
// import { mapGetters,mapState } from "vuex";
// import Logo from "./Logo";
  export default {
    name:'sidebar',
    data() {
      return {

      }
    },
    methods:{
      handleOpen() {

      },
      handleClose() {

      }
    }
  }
</script>

<style>
  .el-menu{
    height: 100%;
  }
</style>
