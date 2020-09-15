<template>
  <div :class="headerStyle">
    <div class="logo" @click="$router.push('/')">
      <img src="@/assets/img/logo_b.png" v-if="scrollPosition || lightMode" />
      <img src="@/assets/img/logo_w.png" v-else />
    </div>
    <div class="gnb">
      <ul>
        <li @click="$router.push('/about')">
          <label>데일리세탁</label>
          <span />
        </li>
        <li @click="$router.push('/how')">
          <label>이용안내</label>
          <span />
        </li>
        <li @click="$router.push('/customer')">
          <label>자주하는 질문</label>
          <span />
        </li>
      </ul>
    </div>
    <div class="mobile-gnb" :class="{active:lightMode || scrollPosition}">
      <v-btn icon @click="drawerHandle(true)" >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>

let scrollEvent

export default {
  props: {
    lightMode: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      headColor: false,
      scrollPosition: false,
    };
  },
  mounted() {
    scrollEvent = document.addEventListener("scroll", this.stickyChange);
  },
  computed: {
    headerStyle() {
      return { header: true, sticky: this.scrollPosition, light: this.lightMode };
    },
  },
  methods: {
    drawerHandle(value) {
      this.$emit("child", value);
    },
    stickyChange() {
      let nowScroll = window.scrollY;
      this.scrollPosition = nowScroll >= 220;
    },
  },
  destroy(){
    window.removeEventListener(scrollEvent);
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  z-index: 99;
  padding: 0 30px;
  background:rgba(0,0,0,0.0);
  border-bottom:1px solid rgba(255,255,255,0.1);

  .logo {
    img {
      height: 35px;
      display: block;
    }
  }

  .logo:hover {
    cursor: pointer;
  }

  .gnb {
    ul {
      display: flex;
      li {
        position: relative;
        margin-left: 80px;
        padding-right: 10px;
        color: #fff;
        font-size: 18px;
        cursor: pointer;

        label {
          display: block;
        }
        span {
          position: absolute;
          bottom: -10px;
          display: block;
          background: #fff;
          height: 3px;
          width: 0px;
        }
      }
      li:hover {
        label {
          cursor: pointer;
          text-shadow: 0 0 15px rgba(255,255,255,0.7);
        }
        span {
          animation: underlines 0.5s forwards;
          @keyframes underlines {
            100% {
              width: 100%;
            }
          }
        }
      }
    }
  }

  .mobile-gnb {
    display: none;
  }
}

.header.light {
  .gnb {
    ul {
      li {
        color: #292929;
      }
    }
  }
}

.header.sticky {
  background: rgba(255, 255, 255, 0);
  border-bottom: 1px solid #e2e2e2;
  animation: resizeHeader 0.5s forwards;
  @keyframes resizeHeader {
    100% {
      height: 60px;
      background: rgba(255, 255, 255, 1);
    }
  }
  .logo {
    img {
      animation: resizeLogo 0.5s forwards;
      @keyframes resizeLogo {
        100% {
          height: 30px;
        }
      }
    }
  }

  .gnb {
    ul {
      li {
        color: #292929;
      }
    }
  }
}

//xs: 600px, sm:960px, md:1264px, lg:1904px,

@media screen and(max-width:960px) {
  .header {
    .gnb {
      display: none;
    }
    .mobile-gnb {
      display: block;
      .v-btn{
        color:#fff;
      }
    }
    .mobile-gnb.active{
      .v-btn{
        color:#292929;
      }
    }
  }
}

@media screen and(max-width:600px) {
  .header {
    padding: 0px;
    height: 60px;

    .logo {
      padding-left: 15px;
      img {
        height: 26px;
      }
    }

    .mobile-gnb {
      .v-btn {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>
