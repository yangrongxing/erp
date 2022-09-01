<template>
    <div class="sidebar-logo-container" :class="{'collapse':collapse}">
        <transition name="sidebarLogoFade">
            <a class="sidebar-logo-link">
                <!-- <hanburger class="sidebar-logo" @toggleClick="toggleSideBar" /> -->
                <h1 class="siderbar-title">{{title}}</h1>
            </a>
        </transition>
    </div>
</template>

<script>
import logoImg from '../../../assets/logo/logo.png'

export default {
   components: {
    
   },
   name:'SidebarLogo',
   props: {
    collapse: {
        type: Boolean,
        required: true
    }
   },
   data() {
    return {
        title: '',
        logo: logoImg
    }
   },
   methods: {
    toggleSideBar () {
        this.$store.dispatch('app/toggleSideBar')
    }
   },
}


</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
    transition: opacity 1.5s;
}
.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to{
    opacity:0;
}
.sidebar-logo-container {
    position: relative;
    width:100%;
    height: 50px;
    line-height: 50px;
    background: #202f5f;
    text-align: center;
    overflow: hidden;

    & .sidebar-logo-link {
        height: 100%;
        width: 100%;

        & .sidebar-logo {
            float: right;
            width: 54px;
            height: 50px;
            vertical-align: middle;
        }

        & .sidebar-title {
            display: inline-block;
            margin: 0;
            color: #fff;
            font-weight: 600;
            line-height:50px;
            font-size: 14px;
            font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
            vertical-align: middle;
        }
    }
}

</style>