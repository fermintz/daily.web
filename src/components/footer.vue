<template>
  <div
    class="footer"
    :class="{ active: absolute }"
    v-if="(visible || absolute)"
  >
    <div class="company">
      <span
        >(주)페이오티 | 서비스명: 데일리세탁 | 대표: 차경진 | 사업자등록번호:
        599-81-00659</span
      >
      <span
        >주소: 부산광역시 금정구 부산대학로 63번길 2 과학기술연구동
        201호</span
      >
      <span
        >이메일: cs@dailywash.co.kr | 전화 070-7807-6857 | FAX:
        0504-433-6857</span
      >
    </div>
    <div class="btns">
      <v-btn text>개인정보수집 및 이용동의 약관</v-btn>
      <v-btn text>서비스 이용약관</v-btn>
      <!-- <v-btn icon>
        <v-icon>mdi-account-supervisor-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-supervisor-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-supervisor-circle</v-icon>
      </v-btn> -->
    </div>

    <TermsModal :modal="true"/>
  </div>
</template>

<script>
import TermsModal from '@/components/modal/terms.vue'; 

export default {
  props:[
    'visible','absolute',
  ],
  components:{
    TermsModal,
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 30px;
  bottom: 0px;
  width: 100%;
  background: #191919;

  .company {
    span {
      font-size: 11px;
      display: block;
      color: #fff;
      font-weight: 300;
      margin-bottom: 4px;
      letter-spacing: 0;
    }
  }

  .btns {
    .v-btn {
      margin-left: 10px;
      color: #fff;
      background: #191919;
      .v-icon {
        color: #fff;
      }
    }
  }
}

.active {
  position:absolute;
  animation: footerFade 1s forwards;
  animation-delay: .5s;
  opacity: 0;
  background: rgba(0, 0, 0, 0.6);
  @keyframes footerFade {
    100% {
      opacity: 1;
    }
  }
}

@media screen and(max-width:960px) {
  .footer {
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

@media screen and(max-width: 320px) {
  .main-footer {
    text-align: center;
  }
}
</style>