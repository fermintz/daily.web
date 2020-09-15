<template>
  <v-app>
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </v-app>
</template>

<script>
import DefaultLayout from '@/layout/default.vue'

export default {
  name: "App",
  
  components:{
    DefaultLayout,
  },
  data: () => ({
    //
  })
};
</script>
