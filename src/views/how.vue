<template>
  <SubLayout>
    <div class="how contents">
      <div class="section section-01">
        <div class="inner">
          <h2>
            '데일리세탁' <strong>앱 이용하기</strong>
            <span></span>
          </h2>

          <v-tabs
            v-model="tabIndex"
            background-color="transparent"
            :show-arrows="false"
            right
            grow
          >
            <v-tab 
              v-for="(item, index) in tabs" 
              :key="index"
            >
              {{item.label}}
            </v-tab>
            <v-tabs-items v-model="tabIndex">
              <v-tab-item 
                v-for="(item, index) in tabs" 
                :key="index"
              > 
                <div class="tab-contents">
                  <v-row>
                    
                    <v-col cols="12" md="6">
                      <div class="infomation">
                        <h4>{{'0'+(index+1)}}</h4>
                        <dl>
                          <dt>{{item.label}}</dt>
                          <dd>{{item.description}}</dd>
                        </dl>
                        <div class="step" v-if="index === 1">
                          <v-row>
                            <v-col cols="6">
                              <div class="tip">
                                <label>01. 주소등록</label>
                                <span>
                                  수거 및 배송을 위한 주소를 등록합니다
                                </span>
                              </div>
                            </v-col>
                            <v-col cols="6">
                              <div class="tip">
                                <label>02. 수거 날짜/시간</label>
                                <span>
                                  수거를 희망하는 날짜와 시간때를 선택합니다
                                </span>
                              </div>
                            </v-col>
                            <v-col cols="6">
                              <div class="tip">
                                <label>03. 상품선택</label>
                                <span>
                                  요금표에서 맡기실 상품을 직접 선택합니다.
                                </span>
                              </div>
                            </v-col>
                            <v-col cols="6">
                              <div class="tip">
                                <label>04. 결제완료</label>
                                <span>
                                  결제하실 카드를 등록 후 세탁예약을 진행합니다
                                </span>
                              </div>
                            </v-col>
                          </v-row>
                        </div>
                        <div class="btns" v-if="index === 0">
                          <v-btn text>
                            <img src="@/assets/img/play-logo.png">
                            <span>구글 플레이</span>
                          </v-btn>
                          <v-btn text>
                            <img src="@/assets/img/apple-logo-b.png">
                            <span>앱스토어</span>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6">
                      <div class="visual">
                        <div class="image-box" v-if="item.image">
                          <img :src="/img/+item.image">
                        </div>
                        <div v-if="item.video" class="video-box">
                          <video src="/video/daily.mp4" width="100%" :autoplay="index === 1" loop></video>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>

          <div class="tip-box">
            <v-row>
              <v-col cols="12" md="4">
                <dl>
                  <dt>
                    <strong>Q</strong> 세탁 가방이 없어요. 세탁물을 어디에 담나요?
                  </dt>
                  <dd>
                    가정 내에서 쉽게 찾아볼 수 있는 종이박스, 쇼핑백, 비닐봉지에 자유롭게 담아주세요. 세탁완료된 세탁물과 함께 '데일리세탁' 전용 비닐팩을 동봉해드립니다. 두 번째 주문부터는 '데일리세탁' 전용 비닐을 이용하여 세탁물을 담아주세요
                  </dd>
                </dl>
              </v-col>
              <v-col cols="12" md="8">
                <v-row class="fill-height" align="center">
                  <v-col cols="4" md="4">
                    <div class="item">
                      <span class="image"><img src="@/assets/img/vinyl.png"></span>
                      <span class="text">비닐봉지</span>
                    </div>
                  </v-col>
                  <v-col cols="4" md="4">
                    <div class="item">
                      <span class="image"><img src="@/assets/img/box.png"></span>
                      <span class="text">종이상자</span>
                    </div>
                  </v-col>
                  <v-col cols="4" md="4">
                    <div class="item">
                      <span class="image"><img src="@/assets/img/bag.png"></span>
                      <span class="text">쇼핑백</span>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row> 
            <p></p>
          </div>
        </div> <!-- inner -->
      </div> <!-- section-01 -->


      <div class="section section-02">
        <div class="inner">
          <div class="attention">
            <h4>이용불가 품목 안내</h4>
            <ul>
              <li>
                <v-icon>mdi-check-circle-outline</v-icon>
                <span>천연모피, 천연무스탕, 천연가죽 등 전문 세탁이 필요한 경우</span>
              </li>
              <li>
                <v-icon>mdi-check-circle-outline</v-icon>
                <span>솜류(쿠션, 베게), 가방(에코백 제외), 장식이 많은 커튼</span>
              </li>
              <li>
                <v-icon>mdi-check-circle-outline</v-icon>
                <span>양털 카페 및 우레탄 카페 등 변형이 쉬운 재질의 카펫</span>
              </li>
              <li>
                <v-icon>mdi-check-circle-outline</v-icon>
                <span>드레스류(웨딩, 이브닝, 연주회 드레스등)</span>
              </li>
              <li>
                <v-icon>mdi-check-circle-outline</v-icon>
                <span>기름, 병원 관련 오염류 등 전문 세탁이 필요한 경우</span>
              </li>
              <li>
                <v-icon>mdi-check-circle-outline</v-icon>
                <span>구두, 워커, 부츠, 어그부츠, 바닥이 나무 재질로 되어 있는 샌들, 이염이 우려되는 운동화</span>
              </li>
            </ul>
          </div>
          <div class="attention">
            <h4>이용시 주의사항</h4>
            <ul>
              <li>
                <v-icon>mdi-check-circle-outline</v-icon>
                <span>맡기기 전 세탁 불가 품목을 꼭 확인해주세요</span>
              </li>
              <li>
                <v-icon>mdi-check-circle-outline</v-icon>
                <span>주머니에 남겨진 소지품은 없는 지 잘 확인해주세요</span>
              </li>
              <li>
                <v-icon>mdi-check-circle-outline</v-icon>
                <span>전문가 검수 후 불가 품목 접수가 확인되면 해당 품목은 세탁이 진행되지 않고 개별 포장하여 보내드립니다</span>
              </li>
            </ul>
          </div>
        </div> <!-- inner -->
      </div> <!-- section-02 -->
    </div>
  </SubLayout>
</template>

<script>
import SubLayout from "@/layout/sub.vue";
import GuideVideo from "@/components/GuideVideo.vue";

export default {
  components: {
    SubLayout,
    GuideVideo,
  },
  data() {
    return {
      activeIndex: 0,
      tabIndex:null,
      tabSecondNumber:null,
      tabSecond: ['물빨래','드라이클리닝'],
      tabs: [
        {
          label: "앱 설치",
          description:
            "먼저 플레이스토어, 앱스토어에서 데일리세탁을 검색해 앱을 설치해주세요",
          image: "install.png",
        },
        {
          label: "세탁예약",
          description:
            "세탁물을 수거할 주소, 수거할 날짜 및 시간 등 세탁에 필요한 옵션을 선택 할 수 있습니다. 맡기실 상품을 직접 선택하여 대략적인 세탁요금을 알 수 있습니다.",
          video: "daily.mp4",
        },
        {
          label: "세탁물 수거",
          description:
            "약속된 날짜의 사간때에 맞춰 세탁물을 문 앞에 두시면 기사님이 예약된 주소지로 방문하여 세탁물을 수거합니다. ",
          image: "door.png",
        },
        {
          label: "세탁 중",
          description:
            "세탁은 데일리세탁의 가맹세탁소에서 진행합니다. 데일리세탁의 꼼꼼한 세탁소 검증 프로세스를 통과한 믿을 수 있는 세탁소에서 세탁이 진행됩니다",
          image: "wash.png",
        },
        {
          label: "세탁배송 ",
          description:
            "세탁이 끝나면 다시 고객님의 집 문 앞에 깔끔하게 포장된 상태로 배송됩니다",
          image: "door2.png",
        },
      ],
      
    };
  },
  
  methods: {
  
  },
};
</script>

<style lang="scss" scoped>
.how {
  width:100%;
  overflow-x:hidden;
  .section {
    padding: 100px 0;
    h2 {
      display:inline-block;
      position: relative;
      font-size: 42px;
      font-weight: 300;
      margin-bottom: 50px;
      strong{
        font-weight:600;
      }
      span{
        position:absolute;
        width:100%;
        bottom:10px;
        left:0px;
        height:10px;
        background:rgba(1,161,221,0.2)
      }
    }
  }
  .section-01 {
    .v-tab{
      font-size:18px;
      letter-spacing:0px;
      border-bottom:1px solid #e2e2e2;
    }
    .tab-contents{
      margin-top:100px;
      min-height:500px;
    }

    .infomation{
      padding-left:100px;

      h4{
        font-size:42px;
        font-weight:300;
        color:#01a1dd;
      }

      dl{
        margin-top:10px;
        dt{
          font-size:32px;
          font-weight:500;      
        }
        dd{
          font-size:18px;
          margin-top:10px;
          color:#888;
        }
      }

      .step{
        margin-top:50px;
        .tip{
          border:1px solid #e2e2e2;
          padding:15px;
          min-height:120px;

          label{
            display:block;
            font-size:16px;
          }
          span{
            display:block;
            margin-top:10px;
            font-size:13px;
            color:#888;
          }
        }
      }

      .btns{
        display:flex;
        margin-top:30px;

        .v-btn{
          letter-spacing:0px;
          border:1px solid #d2d2d2;
          flex:1;
          max-width:180px;
          height:40px;
          margin:0 5px;
          img{height:30px;margin-right:5px;}
        }
      }
    }
    .visual{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .video-box {
        border: 8px solid #292929;
        border-radius: 30px;
        overflow: hidden;
        width:260px;
      }
      .image-box{
        text-align:center;
        img{
          max-height:500px;
        }
      }
    }

    .tip-box{
      margin-top:100px;
      border:1px solid #e2e2e2;
      border-radius:10px;
      padding:30px;
      background: #f2f2f2;

      dl{
        dt{
          font-size:24px;
          strong{color:#01a1dd;margin-right:5px;}
        }
        dd{font-size:16px;color:#888;margin-top:15px;}
      }

      .item{
        text-align:center;

        span.image{
          display:block;
          height:100px;
          img{
            height:100%;
          }
        }
        span.text{
          display:block;
          margin-top:20px;
        }
      }
    }
   
  }

  .section-02{
    background:#f2f2f2;
    // background: linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(238,250,255,1) 100%);
    
    .attention{
      margin-bottom:50px;
      h4{
        font-size:20px;
        font-size:20px;
        margin-bottom:10px;
        font-weight:500;
      }
      ul{
        padding:30px;
        border:1px solid #e2e2e2;
        background:#fff;

        li{
          display:flex;
          align-items: center;
          margin-bottom:20px;
          
          .v-icon{margin-right:10px;color:#01a1dd}
          span{font-size:16px;}
        }
        li:last-child{margin-bottom:0px;}
      }
    }
  }
}

@media screen and(max-width:1264px) {
  .how {
    .section {
      padding: 70px 15px;
       h2{
        font-size:32px;
        margin-bottom:20px;
      }
    }
  }
}


@media screen and(max-width:960px){
  .how{
    .section-01{
      .infomation{
        padding:0px;
        dl{
          dt{font-size:24px;}
          dd{font-size:14px;}
        }
      }
    }
  }
}

@media screen and(max-width:600px) {
  .how{
    .section-01{
      h2{font-size:24px;}

      .v-tab{
        font-size:16px;
      }

      .tab-contents{
        margin-top:60px;
      }


      .infomation{
        margin-bottom:30px;
      }

      .visual{
        .video-box {
          width:240px;
        }
        .image-box{
          img{
            width:80%;
            max-height:auto;
          }
        }
      }

      .tip-box{
        dl{margin-bottom:50px;}

        .item{
          margin-bottom:50px;

          span.image{
            img{
     
            }
          }
        }
      }
    }
    
    .section-02{
      .attention{
        ul{
          li{
            span{font-size:14px;}
          }
        }
      }

     
    }
  }
}
</style>
