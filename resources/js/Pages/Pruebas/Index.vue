<template>
    <h1>Hello World Pruebas</h1>
      You are logged in as: {{ user.name }}
</template>
<script>
import { computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'
import AppLayaout from '@/components/Layaout.vue'
export default {
  components:{
      AppLayaout
  },
  layout: AppLayaout,
  setup() {
    const user = computed(() => usePage().props.value.auth.user)
    return { user }
  },
}
</script>