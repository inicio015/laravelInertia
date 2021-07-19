<template>
    <div class="wrapper">

        <nav-items/>
        <sidebar-items/>
            <!-- Main content -->
        <div class="content-wrapper">
            <div class="content">
                <div class="container-fluid">
                    <div v-if="$page.props.flash.message" class="alert">
                        {{ $page.props.flash.message }}
                    </div>
                    <slot></slot>
                </div><!-- /.container-fluid -->
            </div>
        </div>
        <footerContent/>
    </div>
</template>
<script>
import NavItems from '@/components/Nav.vue'
import SidebarItems from '@/components/Sidebar.vue'
import FooterContent from '@/components/Footer.vue'

export default {
    data(){
        return{
            activeRoute: ''
        }
    },
    components:{
        NavItems,SidebarItems,FooterContent
    }
}
</script>