<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { invoke } from "@tauri-apps/api/tauri";
import MainPage from "./MainPage.vue";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke("greet", { name: name.value });
}

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="首页" name="main">
      <MainPage />
    </el-tab-pane>
    <el-tab-pane label="企业登记信息填报与核对" name="enterpriseVerify">企业登记信息填报与核对</el-tab-pane>
    <el-tab-pane label="维修信息采集" name="repairRecord">维修信息采集</el-tab-pane>
    <el-tab-pane label="人员管理" name="personManage">人员管理</el-tab-pane>
    <el-tab-pane label="设备管理" name="deviceManage">设备管理</el-tab-pane>
    <el-tab-pane label="维修价格备案" name="repairPriceManage">维修价格备案</el-tab-pane>
    <el-tab-pane label="综合查询" name="comprehensiveQuery">综合查询</el-tab-pane>
    <el-tab-pane label="系统维护" name="settings">系统维护</el-tab-pane>
  </el-tabs>
</template>

<style scoped>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
