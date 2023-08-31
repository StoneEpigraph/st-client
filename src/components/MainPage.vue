<script lang="ts" setup>
import { ref } from 'vue'

</script>

<template>
  <el-card class="box-card" id="enterprise_base_msg_container">
    <template #header>
      <span>这里放企业名称</span>
    </template>
    <div id="enterpriseBaseMsgContainer">
      <div id="helloMsg"> 欢迎你： 你是谁</div>
      <div id="contactsContainer">
        <span>企业联系人：</span>
        <span>xxxxx</span>
        <span>职务：</span>
        <span>xxxx</span>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
  #enterprise_base_msg_container {
    border: 1px solid pink;
  }
</style>
