<template>
  <div></div>
</template>

<script>
import { isMobile, isIOS, isAndroid } from 'mobile-device-detect';

export default {
  name: 'download',
  data() {
    return {
      platform: isMobile ? 'mobile' : 'web',
      os: isIOS ? 'ios' : isAndroid ? 'android' : null,
    };
  },
  mounted() {
    if (isMobile && isIOS) {
      console.log('is ios');
    } else if (isMobile && isAndroid) {
      const packageName = 'kr.co.dailywash';
      const url = `https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=${packageName}&ddl=1&pcampaignid=web_ddl_1`;
      window.open(url, '_system');
      this.$router.replace('/');
    }
  },
};
</script>
