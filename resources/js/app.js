require('./bootstrap');
import { createApp, h } from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue3'



if(document.getElementById('app')){
  InertiaProgress.init()

  createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    title: title => title ? `${title} - Ping CRM` : 'Ping CRM',
    setup({ el, App, props, plugin }) {
      createApp({ render: () => h(App, props) })
        .use(plugin)
        .mixin({ data(){return{assets:assetp}}, methods: { route,asset(){ return assetp } } })
        .mount(el)
    },
  })
}