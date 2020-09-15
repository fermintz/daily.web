<template>
  <div class="subLayout">
    <SubTop />
    <slot />
    <Footer :visible="true"/>
  </div>
</template>

<script>
import SubTop from '@/components/subTop.vue'
import Footer from '@/components/footer.vue'

export default {
  components:{
    SubTop, Footer,
  }
}
</script>