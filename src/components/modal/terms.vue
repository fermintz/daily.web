<template>
  <v-dialog v-model="visible" max-width="900">
    <v-card>
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>

      <v-card-text v-html="description" />

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="visible = false">
          닫기
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import docs from "@/assets/docs/agree.js";

export default {
  data() {
    return {
      visible: false,
      title: '',
      description: "",
    };
  },
  methods: {
    show(type) {
      this.title = type === 'person' ? '개인정보 이용약관' : '서비스 이용약관';
      this.description = docs[type].replace(/\n/g, '<br />');
      this.visible = true;
    },
  },
};
</script>
