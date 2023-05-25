<script setup>
import {onMounted} from 'vue'
import {useLayouterStore} from '@/stores/category'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeater.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';
const category=useLayouterStore()
onMounted(()=>{
  category.gethead()
})
</script>

<template>
  <LayoutFixed/>
  <LayoutNav/>
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>
```