<template>
  <div class="wrap">
    <Header @child="drawerHandle" :lightMode="isLightMode"/>
    <Drawer ref="drawer"/>
    <slot />
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Drawer from '@/components/drawer.vue';

export default {
  components:{
    Header,
    Drawer,
  },
  data(){
    return{
      drawer:true,
    }
  },

  computed: {
    isLightMode() {
      // return this.$route.name === 'home';
      return false
    },
  },
  methods:{
    drawerHandle(value){
      this.$refs.drawer.drawerAction(value);
    },
  }
}
</script>