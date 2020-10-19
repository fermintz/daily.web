<template>
  <SubLayout>
    <div class="about contents">
      <div class="section section-01">
        <div class="inner">
          <div class="line"></div>
          <dl>
            <dt>
              <label>일상에 지친 당신에게 작은 휴식을</label>
              <strong>데일리세탁</strong>
            </dt>
            <dd>
              데일리세탁의 목표는 세탁으로 인한 고객의 삶과 질을 더욱 향상 시키는 것입니다.<br>
              하나부터 열까지 당신의 세탁을 위해 노력하며 최상의 서비스가 이루어 질 수 있도록 관리합니다
            </dd>
          </dl>
        </div>
        <div class="visual" >
          <span class="bg">
            <img src="@/assets/img/about-visual.jpg" />
          </span>
          <span class="man"> 
            <img src="@/assets/img/man.png">
          </span>
          <span class="truck" :class="{ active: truck }">
            <img src="@/assets/img/truck.png" v-intersect="onIntersect"/>
          </span>
        </div>
      </div>
      <!-- section 01 -->

      <div class="section section-02">
        <v-row v-intersect="onSectionSecond">
          <v-col cols="12" md="4" sm="6">
            <div class="item" :class="{animated01:fadeOn}">
              <v-icon>mdi-truck-outline</v-icon>
              <div class="text">
                <strong>수거에서 배달까지</strong>
                <span
                  >세탁물을 직접 수거하고<br> 세탁 후 깔끔하게 배달완료!</span
                >
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" sm="6" class="center-box">
            <div class="item" :class="{animated02:fadeOn}">
              <v-icon>mdi-map-marker-outline</v-icon>
              <div class="text">
                <strong>원하는 장소로</strong>
                <span>
                  고객님이 원하는 장소로<br> 세탁물이 있는 곳이라면
                  어디든지!</span>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <div class="item" :class="{animated03:fadeOn}">
              <v-icon>mdi-credit-card-outline</v-icon>
              <div class="text">
              <strong>편리한 결제</strong>
              <span>카드 한번 등록으로 예약을 <br>가볍고 쉽게!
                자동결제까지</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="section section-03">
        <div class="inner">
          <v-row>
            <v-col cols="12" md="7">
              <div class="image" v-intersect="onImageVisible" :class="{active:onImage}">
                <img src="@/assets/img/about-img02.png">
              </div>
            </v-col>
            <v-col cols="12" md="5">
              <dl>
                <dt>집에서 간편하게 <strong>예약하세요</strong></dt>
                <dd>무거운 짐을 직접 들고 세탁소를 방문할 필요가 없어요
이제 가볍게 차한잔하시면서 데일리세탁을 기다려주세요 </dd>
              </dl>
            </v-col>
          </v-row>
          
        </div>
      </div>

      <div class="section section-04">
        <div class="inner">
          <v-row>
            <v-col cols="12" md="7" class="text-box">
              <dl>
                <dt><strong>데일리세탁은</strong><span>언제나 당신을 기다릴게요</span></dt>
                <dd>
                  데일리세탁을 통해 더욱 여유로운<br>라이프스타일을 만들어보세요 
                </dd>
              </dl>
              <div class="btns">
                <v-btn text>
                  <img src="@/assets/img/play-logo.png" />
                  <span>구글플레이</span>
                </v-btn>
                <v-btn text>
                  <img src="@/assets/img/apple-logo-b.png" />
                  <span>앱스토어</span>
                </v-btn>
              </div>
            </v-col>

            <v-col cols="12" md="5">
              <div class="video-wrap" >
                <div class="video-box" :class="{active:videoAnimaeted}"  v-intersect="onVideoVisible">
                  <video
                    id="myVideo"
                    ref="video"
                    src="@/assets/video/daily.mp4"
                    width="280"
                    height="auto"
                    autoplay="false"
                    loop="true"
                  />
                  <span />
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </SubLayout>
</template>

<script>
import SubLayout from "@/layout/sub.vue";

export default {
  components: {
    SubLayout,
  },
  data() {
    return {
      truck: false,
      videoAnimaeted: false,
      fadeOn: false,
      onImage: false,
    };
  },
  methods: {
    onIntersect(inter, over, state) {
      this.truck = inter[0].isIntersecting;
    },
    onVideoVisible(inter, over, state) {
      const videoTag = this.$refs.video;
      state ? videoTag.play() : videoTag.pause();
      this.videoAnimaeted = state;
    },
    onImageVisible(inter, over, state) {
      this.onImage = state
    },
    onSectionSecond(inter, over, state) {
      this.fadeOn = state;
    }
  },
};
</script>

<style lang="scss" scoped>
.about {
  .section {
    padding: 100px 0;
  }

  .section-01 {
    padding:0px;
    padding-top:100px;

    .line{
      height:3px;
      width:40px;
      background:#01a1dd;
      margin-bottom:30px;
      margin-left:3px;
      border-radius:1.5px;
    }

    .visual {
      position: relative;

      span.bg{
        
        img {
          position:relative;
          left:50%;
          transform: translateX(-50%);
          display: block;
          width: 100%;
          min-width:700px;;
        }
      }

      span.man{
        position:absolute;
        bottom:0px;
        right:24%;
        width:20%;
        min-width:150px;

        img{
          width:100%;
          display:block;
        }
      }

      span.truck {
        position: absolute;
        left: -50px;
        bottom: 15%;
        width: 13%;

        img {
          width: 100%;
          min-width:100px;
          display: block;
        }
      }

      span.truck.active {
        animation: truckMove 2s forwards ease-in-out;
        animation-delay: .5s;
        @keyframes truckMove {
          100% {
            left: 40%;
          }
        }
      }      
    }

    dl {
      dt {
        position:relative;
        display:inline-block;
        font-size: 42px;
        line-height:52px;
        font-weight:400;

        label{
          display:block;
        }

        strong{
          display:block;
          font-weight:600;
        }

    
      }
      dd {
        font-size: 18px;
        color: #888;
        margin-top: 30px;
        max-width:500px;
      }
    }

    .btns {
      margin-top: 50px;
      .v-btn {
        margin: 0 5px;
        border: 1px solid #292929;
      }
    }
  }

  .section-02{
    background:#01a1dd;
    background-blend-mode:multiply;
    padding:150px 0;

    .row{padding:0px;margin:0px;}
    .col-md-4{border-right:1px solid rgba(255,255,255,0.3);}
    .col-md-4:last-child{border-right:0px;}
    .item {
      position:relative;
      top:-50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding:0 30px;
      opacity:0;

      .v-icon {
        border-radius: 40px;
        font-size: 64px;
        color: #fff;
      }

      .text{
        text-align: center;

        strong {
        display:block;
        margin-top: 30px;
        font-weight: 400;
        font-size: 32px;
        color:#fff
        }

        span {
          display:block;
          margin-top: 10px;
          font-size:18px;
          color: rgba(255,255,255,0.6);
        }
      }
    }

    .item.animated01{
      animation:item-fade .5s forwards;
    }
    .item.animated02{
      animation:item-fade .5s forwards;
      animation-delay: .5s;
    }
    .item.animated03{
      animation:item-fade .5s forwards;
      animation-delay: 1s;
    }

    @keyframes item-fade {
      100%{
        opacity:1;
        top:0px;
      }
    }
  }

  .section-03{
    background: rgb(255,255,255);
background: linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(238,250,255,1) 100%);
    .image{
      position: relative;
      left:-50px;
      opacity: 0;
      img{width:100%;}
    }
    .image.active{
      animation: imageOn 1s forwards;
      animation-delay: .5s;
    }

    @keyframes imageOn {
      100%{
        left:0px;
        opacity:1;
      }
    }

    dl{
      display:flex;
      flex-direction: column;
      justify-content: center;
      height:100%;
      text-align:left;
      padding:0 50px;

      dt{
        font-size:42px;
        line-height:52px;
        strong{font-weight:600;}
      }
      dd{
        font-size:18px;
        color:#888;
        margin-top:30px;
      }
    }
  }

  .section-04 {
    background: #fff;

    .text-box{
      display:flex;
      flex-direction: column;
      justify-content: center;

      dl{
        color:#292929;
        
        dt{
          font-size:42px;
          line-height:52px;

          span{
            display:block;
            font-weight:400;
          }
          strong{
            display:block;
            font-weight:600;
          }
        }
        dd{
          font-size:18px;
          margin-top:30px;
          color:#888;
        }
      }
    }

    .btns{
      display:flex;
      margin-top:50px;

      .v-btn{
        color:#292929;
        font-size:16px;
        border:2px solid #292929;
        margin:0 5px;
        height:50px;
        width:180px;
        margin-bottom:10px;
        border-radius:30px;

        img{height:30px;}
        span{margin-left:10px;}
      }
    }

    .video-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      background:url('../assets/img/video-bg.png') no-repeat center / 100%;

      .video-box {
        position: relative;
        display: inline-block;
        border-radius: 30px;
        overflow: hidden;
        border: 10px solid #292929;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
        right:-100px;          
        opacity: 0;
      
        span {
          width: 20px;
          height: 20px;
          position: absolute;
          right: 10px;
          top: 10px;
          display: block;
          border-radius: 50%;
          background: #292929;
 
        }
        video {
          display: block;
        }
      }

      .video-box.active{
        animation: slideRight 1s forwards;
        animation-delay: .5s;

        @keyframes slideRight {
          100%{
            right:0px;
            opacity: 1;
          }
        }
      }
    }
  }


}

@media screen and(max-width: 1260px) {
  .about {
    .section{padding:100px 15px;}
    .section-01{
      padding:0px;padding-top:100px;

      .line{
        margin-left:15px;
      }
      dl{
        padding:0 15px;
        margin-bottom:100px;
      }
    }
    .inner {
      width: 100%;
    }
    .section-02{
      .item{
        margin-bottom:30px;
      }
    }
    .section-04{
      .btns{
        margin-bottom:100px;
      }
    }
  }
}

@media screen and(max-width:600px){
  .about{

    .section-01{
      .visual{
        span.man{
          right:10%;
        }
      }
    }

    .section-02{
      padding:70px 0;

      .item {
        flex-direction: row;
        padding:0px;
        margin-bottom:20px;

        .v-icon{
          width:80px;
          font-size:46px;
        }
        .text{
          flex:1;
          text-align:left;
          margin-left:15px;
          strong{
            font-size:24px;
            margin:0px;
          }
          span{font-size:2}
        }
      }
    }
    .section-03{
      dl{
        padding:0px;
        margin-top:50px;
      }
    }
    .section-04{
      .btns{
        flex-direction: column;
        
      }
    }
  }
}
</style>
