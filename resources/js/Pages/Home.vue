<template>
    <app-layaout>
        <h1>Hello World</h1>
          You are logged in as: {{ user.name }}
    </app-layaout>
</template>
<script>
import { computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'
import AppLayaout from '@/components/Layaout.vue'
export default {
  components:{
      AppLayaout
  },
  setup() {
    const user = computed(() => usePage().props.value.auth.user)
    return { user }
  },
}
</script>