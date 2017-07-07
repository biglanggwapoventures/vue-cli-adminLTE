<template>
    <div class="wrapper">
        <header class="main-header">
            <!-- Logo -->
            <a href="../../index2.html" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini">课</span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg">课管系统</span>
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top">
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- User Account: style can be found in dropdown.less -->
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <span class="hidden-xs">欢迎您，lvangroysky</span>
                            </a>
                        </li>
                        <!-- Control Sidebar Toggle Button -->
                    </ul>
                </div>
            </nav>
        </header>
        <!-- =============================================== -->
        <aside class="main-sidebar">
            <section class="sidebar">
                <ul v-for="menu in menuList" class="sidebar-menu" data-widget="tree">
                    <li @click="changeActive(menu.path)" :class="menu.isActive==true?'active':'' ">
                        <router-link :to="{name:menu.path}">
                            <i :class="['fa',menu.icon]"></i> <span>{{menu.name}}</span>
                        </router-link>
                    </li>
                </ul>
            </section>
        </aside>

        <router-view></router-view>

        <footer class="main-footer">
            <div class="pull-right hidden-xs">
                <b>Version</b> 1.0.0
            </div>
            <strong>Copyright &copy; 2017- lvangorysky.</strong>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            menuList:[
                { 
                    name: '主页',
                    isActive:true,
                    path:'homePage',
                    icon:'fa-home'
                },
                { 
                    name: '课程',
                    isActive:false,
                    path:'course',
                    icon:'fa-th'
                },
                { 
                    name: '课件',
                    isActive:false,
                    path:'courseWare',
                    icon:'fa-folder'
                },
            ]
        }
    },
    mounted(){
        
    },
    methods:{
        changeActive: function(path){
            this.menuList.forEach(function(val){
                if(val.path == path){
                    val.isActive = true
                }else{
                    val.isActive = false
                }
                
            })
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
