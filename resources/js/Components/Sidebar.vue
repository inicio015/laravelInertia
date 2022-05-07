<template>
  <div>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link">
        <img :src="`${$data.assets}img/AdminLTELogo.png`" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img :src="`${$data.assets}img/user2-160x160.jpg`" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
          </div>
        </div>

        <!-- SidebarSearch Form -->
        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
            <li class="nav-item">
              <Link :href="route('home')" :class=" isUrl('home') ? 'nav-link active' : 'nav-link' " >  
                  <i class="nav-icon fas fa-th"></i>
                <p>
                  home
                  <span class="right badge badge-danger">New</span>
                </p>
              </Link>

            
            </li>
            <li class="nav-item">
              <Link :href="route('pruebas')" :class="isUrl('pruebas') ? 'nav-link active' : 'nav-link' "  >  
                  <i class="nav-icon fas fa-th"></i>
                <p>
                  Pruebas
                  <span class="right badge badge-danger">New</span>
                </p>
              </Link>

            
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  </div>  
</template>
<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
    components:{
        Link
    },
    data(){
        return{
            activeRoute:''
        }
    },
    methods:{
        isUrl(...urls) {
          let currentUrl = this.$page.url.substr(1)

          let currentPart = currentUrl.split('/');
          let count = currentPart.length-1;
          currentUrl = currentPart[count]

          if (urls[0] === '') {
            return currentUrl === ''
          }
          return urls.filter((url) => currentUrl.startsWith(url)).length
        },
    },
    mounted(){
       
    }
}
</script>