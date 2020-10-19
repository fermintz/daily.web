<template>
  <SubLayout>
    <div class="customer contents">
      <div class="section section-01">
        <div class="inner">
          <h4>자주 묻는 질문 (FAQ)</h4>
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
            right
            :show-arrows="false"
          >
            <v-tab v-for="item in tabs" :key="item">
              {{ item.tabTitle }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="(item, index) in tabs" :key="index">
              <dl v-for="col in item.contents" :key="col">
                <dt>
                  <v-icon>mdi-alpha-q-circle-outline</v-icon>
                  <span>{{ col.title }}</span>
                </dt>
                <dd>{{ col.description }}</dd>
              </dl>
            </v-tab-item>
          </v-tabs-items>
        </div>
        <!-- inner -->
      </div>
      <!-- section-01 -->
      <div class="section section-02">
        <div class="section-bg">
          <img src="@/assets/img/customer.jpg" />
        </div>
        <div class="inner">
          <v-row>
            <v-col cols="12" md="4">
              <dl>
                <dt>
                  <span>CUSTOMER</span>
                  <span>CENTER</span>
                </dt>
                <dd>고객센터</dd>
              </dl>
            </v-col>
            <v-col cols="12" md="8">
              <div class="customer-info">
                <v-row>
                  <v-col cols="12" md="6" sm="6">
                    <div class="item operate">
                      <label>평일</label>
                      <span>10:00 ~ 18:00</span>
                    </div>
                    <div class="item operate">
                      <label>점심시간</label>
                      <span>10:00 ~ 18:00</span>
                    </div>
                    <p>(주말&공휴일 제외)</p>
                  </v-col>
                  <v-col cols="12" md="6" sm="6">
                    <div class="item company-number">
                      <v-icon>mdi-phone</v-icon>
                      <span>070-7807-6857</span>
                    </div>
                    <div class="item mail">
                      <v-icon>mdi-email-outline</v-icon>
                      <span>cs@dailywash.co.kr</span>
                    </div>
                    <div class="btns">
                      <v-btn
                        text
                        href="https://pf.kakao.com/_GAFDxb"
                        target="_new"
                      >
                        <v-icon>mdi-message</v-icon>
                        <span>카카오톡 1:1 상담</span>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </SubLayout>
</template>

<script>
import SubLayout from '@/layout/sub.vue';

export default {
  data() {
    return {
      tab: 0,
      tabs: [
        {
          tabTitle: '주문',
          contents: [
            {
              title: '인수증이 무엇인가요?',
              description:
                '세탁물 분실, 사고 피해예방을 위해 데일리세탁은 세탁물 인수증을 발급해드리고 있습니다. 인수증에는 세탁소 정보와 맡기신 세탁품목, 수량 등의 정보를 포함하고 있습니다.',
            },
            {
              title: '주문 수량을 잘못 입력했어요.',
              description:
                '주문수량을 잘못입력 했어도, 추후 검수과정에서 파악하여 추가결제 요청이 진행됩니다.',
            },
            {
              title: '주문 취소는 어떻게 하나요?',
              description:
                '주문 취소 버튼을 누르면 됩니다. 취소는 데일트세탁 배송 기사가 고객님의 물품을 수거하기 전까지만 가능하며, 배송 기사가 수거를 한 후 취소하고 싶다면 데일리세탁 고객센터로 문의주세요 단, 이 경우 수거 과정에서 배송비가 발생하였기 때문에 수거 배송비는 고객 부담이 됩니다.',
            },
          ],
        },
        {
          tabTitle: '세탁',
          contents: [
            {
              title: '세탁은 어디에서 하나요?',
              description:
                '수거 된 세탁물은 전문가가 검수하여, 협력되어있는 세탁업체를 통해 세탁이 진행됩니다.',
            },
            {
              title: '세탁은 얼마나 걸리나요?',
              description:
                '일반적인 세탁물의 경우 3~4일 정도 소요되며, 오염상태나 추가작업 여부에 따라 세탁기간이 달라질 수 있습니다. 진행 상황은 앱을 통해 확인하실 수 있습니다.',
            },
            {
              title: '수선도 가능한가요?',
              description:
                '현재 데일리세탁에서는 ‘수선’ 을 진행하고 있지 않습니다.',
            },
            {
              title: '신발은 어떻게 세탁 되나요?',
              description:
                '수거 된 세탁물은 전문가가 검수하여, 협력되어있는 세탁업체를 통해 세탁이 진행됩니다.',
            },
          ],
        },
        {
          tabTitle: '배송',
          contents: [
            {
              title: '배송 가능 날짜와 시간을 알려주세요.',
              description:
                '수거 된 세탁물은 전문가가 검수하여, 협력되어있는 세탁업체를 통해 세탁이 진행됩니다.',
            },
            {
              title: '배송비를 따로 내야 하나요?',
              description:
                '세탁물 수거 및 배달팁으로 3500원을 부과하고 있습니다.',
            },
            {
              title: '수거지와 배송지가 달라도 되나요?',
              description: '수거지와 배송지가 다른 경우 주문이 불가능합니다.',
            },
            {
              title: '예정 시간에 기사님이 오지 않았습니다',
              description:
                '수거 및 배송일정에 따라 기사님이 움직이지만, 일부 지연이 될 수 있는 점 양해부탁드립니다.',
            },
          ],
        },
        {
          tabTitle: '회원',
          contents: [
            {
              title: '회원 정보를 수정하고 싶어요.',
              description:
                '회원정보는 카카오톡 로그인 연계를 통하므로, 카카오톡 정보변경을 이용하시면 됩니다. 주소 및 등록카드 변경은 가능합니다.',
            },
            {
              title:
                '세탁 후에 세탁물에 문제가 발생하면 A/S나 보상이 가능한가요?',
              description:
                '세탁업 표준약관 제6조에 피해보상 및 손해배상을 진행합니다.',
            },
          ],
        },
      ],
    };
  },
  components: {
    SubLayout,
  },
};
</script>

<style lang="scss" scoped>
.customer {
  .section {
    padding: 100px 0;
  }

  .section-01 {
    h4 {
      font-size: 42px;
      font-weight: 300;
      margin-bottom: 70px;
    }

    .v-tabs {
      border-bottom: 1px solid #e2e2e2;
      .v-tab {
        font-size: 18px;
      }
    }

    dl {
      padding: 40px 0;
      border-bottom: 1px solid #e2e2e2;
      dt {
        display: flex;
        align-items: center;
        font-size: 18px;
        .v-icon {
          margin-right: 10px;
          color: #01a1dd;
        }
      }
      dd {
        font-size: 16px;
        line-height: 26px;
        margin-top: 15px;
        color: #888;
      }
    }
    dl:last-child {
      border-bottom: 0px;
    }
  }

  .section-02 {
    position: relative;
    background: #01a1dd;
    overflow: hidden;

    .section-bg {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
      z-index: 1;
      opacity: 0.05;

      img {
        width: 100%;
      }
    }

    dl {
      position: relative;
      z-index: 2;
      dt {
        font-size: 32px;
        line-height: 42px;
        font-family: 'Roboto';
        font-weight: 600;
        color: #fff;

        span {
          display: block;
        }
      }
      dd {
        color: #fff;
        margin-top: 15px;
      }
    }

    .customer-info {
      position: relative;
      z-index: 2;
      background: #fff;
      border: 1px solid #e2e2e2;
      border-radius: 10px;
      .row {
        padding: 0px;
        margin: 0px;
      }
      .col-md-6 {
        padding: 30px;
        border-right: 1px solid #e2e2e2;
      }
      .col-md-6:last-child {
        border: 0px;
      }

      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        .v-icon {
          font-size: 20px;
          color: #888;
        }
        label {
          color: #888;
        }
      }

      .item:last-child {
        margin-bottom: 0px;
      }

      .btns {
        margin-top: 20px;
        .v-btn {
          display: flex;
          align-items: center;
          width: 100%;
          background: #ffc000;
          min-height: 45px;

          .v-icon {
            margin-right: 5px;
            font-size: 18px;
          }
        }
      }
    }
  }
}

@media screen and(max-width:1264px) {
  .inner {
    padding: 0 15px;
  }
}
@media screen and(max-width:600px) {
  .customer {
    .section-01 {
      h4 {
        font-size: 24px;
      }
      .v-tabs {
        .v-tab {
          font-size: 16px;
        }
      }
    }
    .section-02 {
      .customer-info {
        .col-md-6 {
          border: 0px;
          border-bottom: 1px solid #e2e2e2;
        }
      }
    }
  }
}
</style>
