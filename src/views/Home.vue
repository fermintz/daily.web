<template>
  <div class="home" >
    <v-carousel
      vertical
      :cycle="false"
      :touch="{
        up: () => (mainVisual === 3 ? null : mainVisual++),
        down: () => mainVisual--,
      }"
      hide-delimiters
      :show-arrows="false"
      :height="visualHeight"
      :value="mainVisual"
      @change="mainVisual = $event"
    >
      <v-carousel-item>
        <div class="slide-item slide-item01 fill-height">
          <div class="slide-item-text">
            <div class="text">
              <strong>바쁜 당신을 위한<br />모바일세탁소</strong>
              <span>데일리세탁</span>
            </div>
            <div class="btns">
              <v-btn outlined>
                <img src="@/assets/img/play-logo.png" />
                <span>플레이스토어</span>
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
              <v-btn outlined>    
                <img src="@/assets/img/apple-logo.png" />
                <span>앱스토어</span>
                <v-icon>mdi-arrow-right</v-icon>     
              </v-btn>
            </div>
          </div>
          <div class="slide-bg fill-height">
            <v-img height="100%" src="@/assets/img/slide-bg01.jpg"></v-img>
          </div>
          <div class="black"/>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slide-item slide-item02 fill-height">
          <div class="slide-item-text">
            <div class="text">
              <span>모바일로 간편하게</span>
              <strong>앱으로 주문하면<br />문앞까지 배송</strong>
            </div>
            <div class="btns">
              <v-btn text @click="$router.push('/how')">
                <span>이용방법 바로가기</span>
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="slide-bg fill-height">
            <v-img height="100%" src="@/assets/img/slide-bg02.jpg"></v-img>
          </div>
          <div class="black"/>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slide-item slide-item03 fill-height">
          <div class="slide-item-text">
            <div class="text">
              <strong>매일매일 <br />빨래 걱정없이</strong>
              <span>일상에 여유를</span>
            </div>
            <div class="btns">
              <v-btn text @click="$router.push('/about')">
                <span>회사소개 바로가기</span>
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="slide-bg fill-height">
            <v-img height="100%" src="@/assets/img/slide-bg03.jpg"></v-img>
          </div>
          <div class="black"/>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slide-item slide-item04 fill-height">
          <div class="slide-item-text">
            <div class="text">
              <span>믿고 맡길 수 있는</span>
              <strong>우리 동네<br />세탁전문가</strong>
            </div>
            <div class="btns">
              <v-btn text @click="$router.push('/customer')">
                <span>자주 하는 질문 바로가기</span>
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="slide-bg fill-height">
            <v-img height="100%" src="@/assets/img/slide-bg04.jpg"></v-img>
          </div>
          <div class="black"/>
        </div>
      </v-carousel-item>
    </v-carousel>
    <div class="custom-delimiters">
      <span
        v-for="(label, index) in 4"
        :key="index"
        @click="mainVisual = index"
        :class="{ active: index === mainVisual }"
        v-ripple
      />
    </div>
    <Footer :absolute="this.mainVisual === 3"/>
  </div>
</template>

<script>
import { throttle, debounce } from "lodash";
import Footer from '@/components/footer.vue';

// @ is an alias to /src
let visualHeightEvent;
let mouseWheelEvent;

export default {
  components:{
    Footer,
  },
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red"],
      visualHeight: window.innerHeight,
      mainVisual: 0,
    };
  },
  mounted() {
    visualHeightEvent = window.addEventListener(
      "resize",
      this.screenHeightWatch
    );
    mouseWheelEvent = window.addEventListener("mousewheel", this.visualWheel);
  },

  methods: {
    screenHeightWatch() {
      this.visualHeight = window.innerHeight;
      document.getelement
    },
    visualWheel(event) {
      console.log(event);
      const delta = Math.sign(event.deltaY);
      this.scrollChange(delta === 1 ? 1 : -1);
    },
    scrollChange: debounce(function(index) {
      if (this.mainVisual === 3 && index === 1) return;
      this.mainVisual += index;
    }, 1 * 100),
  },

  destroy() {
    window.removeEventListener(visualHeightEvent);
    window.removeEventListener(mouseWheelEvent);
  },
};
</script>

<style lang="scss" scoped>
.v-window {
  &-x-transition,
  &-x-reverse-transition,
  &-y-transition,
  &-y-reverse-transition {
    &-enter-active,
    &-leave-active {
      transition: 1s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
    }
  }  
}


.home {
  .slide-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #292929;

    .black{
      position:absolute;
      z-index:9;
      width:100%;
      height:100%;
      opacity: 0.25;
    }

    .slide-item-text {
      position: absolute;
      left: 5%;
      z-index: 99;
      padding:30px;
      border-radius:10px;
      animation: slideUp 1s forwards;
      animation-delay: .5s;
      margin-top:150px;
      opacity:0;

      .text {        
        color:#fff;
        text-shadow: 0 0 15px rgba(0,0,0,0.1);

        span {
          display: block;
          font-size: 7rem;
          line-height: 6rem;
          font-family: "cafe24";
          margin: 15px 0;
        }
        strong {
          display: block;
          font-size: 3.5rem;
          line-height: 4rem;
          
        }
      }

      .btns {
        margin-top: 50px;      

        .v-btn {
          color: #fff;
          border: 2px solid #fff;
          margin-right: 10px;
          font-size: 16px;
          margin-bottom: 10px;
          height:auto;
          min-height:auto;
          padding:10px;

          img {
            display:block;
            height: 24px;
            margin-right: 5px;
          }

          .v-icon {
            font-size: 20px;
            margin-left: 10px;
            color:rgba(255,255,255,0.5)
          }
        }
      }

      @keyframes slideUp {
        100%{
          margin-top: 0px;;
          opacity: 1;
        }
      }
    }
  }

  .custom-delimiters {
    position: absolute;
    right: 30px;
    top: 50%;
    z-index: 999;
    transform: translateY(-50%);

    span {
      display: block;
      width: 12px;
      height: 12px;
      background: rgba(0, 0, 0, 0);
      margin: 10px 0;
      border-radius: 6px;
      border: 2px solid #fff;
    }
    span.active {
      animation: heightUp 0.8s forwards;
      background: #fff;
      border: 0px;

      @keyframes heightUp {
        100% {
          height: 36px;
        }
      }
    }
    span:hover {
      cursor: pointer;
    }
  }

  

  
}

@media screen and(max-width:960px) {
  .home {
    .slide-item {
      align-items: flex-start;
      .slide-item-text {
        top: 100px;
        left: 0;
        padding: 0 30px;

        .text {
          span {
            display: block;
            font-size: 4.5rem;
            line-height: 4.5rem;
            font-family: "cafe24";
            margin: 15px 0;
          }
          strong {
            display: block;
            font-size: 2rem;
            line-height: 2.5rem;
          }
        }
        .btns {
          .v-btn {
            font-size: 14px;
          }
        }
      }
    }

    .main-footer {
      position: relative;
      flex-direction: column;
      align-items: flex-start;
      bottom: 0px;
      background: #292929;

      .btns {
        margin-top: 20px;

        .v-btn {
          margin-left: 0px;
          font-size: 11px;
          font-weight: 400;
          margin: 5px;
        }
      }
    }
    .main-footer.active {
      animation: none;
    }
  }
}

@media screen and(max-width: 320px) {
  .home {
    .main-footer {
      text-align: center;
    }
  }
}
</style>
