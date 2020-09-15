<template>
  <div>
    <video
      ref="video"
      :src="`/video/${source}`"
      :autoplay="isAutoPlay"
      width="100%"
    />
  </div>
</template>

<script>
export default {
  name: "GuideVideo",
  props: {
    source: String,
    isPlay: Boolean,
    isAutoPlay: Boolean,
  },
  watch: {
    isPlay(newValue) {
      const video = this.$refs.video;
      newValue ? video.play() : video.pause();
    },
  },
};
</script>
