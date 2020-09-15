<template>
  <v-dialog
    v-model="this.modal"
    max-width="900"
  >
    <v-card>
      <v-card-title class="headline">
        개인정보수집 및 이용동의 약관
      </v-card-title>

      <v-card-text>
        안녕하센요
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          닫기
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props:[
    'modal'
  ],
}
</script>