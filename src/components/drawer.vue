<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    temporary
    right
    :disable-resize-watcher="true"
  >
    <div class="logo">
      <img src="@/assets/img/logo_vertical.png" />
    </div>
    <div class="drawer-menu">
      <v-btn text @click="$router.push('/')">홈으로</v-btn>
      <v-btn text @click="$router.push('/about')">데일리세탁</v-btn>
      <v-btn text @click="$router.push('/how')">이용안내</v-btn>
      <v-btn text @click="$router.push('/customer')">자주묻는질문</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  mounted() {
    window.addEventListener("resize", this.drawerResizeCloes);
  },
  methods: {
    drawerAction(value) {
      this.drawer = value;
    },
    drawerResizeCloes() {
      const screenWidth = window.outerWidth;
      if (screenWidth >= 960) {
        this.drawer = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
aside {
  z-index: 9999;
  .logo {
    text-align: center;
    padding: 25px 0;
    background: #e8f4f8;
    img {
      height: 150px;
    }
  }
  .drawer-menu {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .v-btn {
      border-radius: 0px;
      height: 50px;
      font-size: 18px;
    }
  }
}
</style>
