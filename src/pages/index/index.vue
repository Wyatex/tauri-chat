<script setup lang="ts">
import { createLayoutCssVars, LayoutStyle } from '@sa/materials'
import ChatView from './components/chat-view/index.vue'
import LayoutHeader from './components/layout/header/index.vue'
import LayoutSider from './components/layout/sider/index.vue'

const appStore = useAppStore()
const themeStore = useThemeStore()

const cssVars = createLayoutCssVars({
  isMobile: appStore.isMobile,
  headerHeight: themeStore.header.height,
})
</script>

<template>
  <div class="relative h-full" :style="cssVars">
    <n-layout has-sider class="h-full">
      <n-layout-sider
        v-model:collapsed="appStore.siderCollapse"
        :width="themeStore.sider.width"
        :collapsed-width="themeStore.sider.collapsedWidth"
        :show-trigger="appStore.isMobile ? false : 'bar'"
        :position="appStore.isMobile ? 'absolute' : 'static'"
        :class="[appStore.isMobile ? LayoutStyle['layout-mobile-sider'] : LayoutStyle['layout-sider']]"
      >
        <LayoutSider />
      </n-layout-sider>
      <n-layout-content content-class="relative h-full flex flex-col">
        <!-- Header -->
        <n-layout-header
          bordered position="absolute"
          :class="[LayoutStyle['layout-header']]"
        >
          <LayoutHeader />
        </n-layout-header>
        <div
          class="flex-shrink-0 overflow-hidden"
          :class="[LayoutStyle['layout-header-placement']]"
        />

        <!-- Content -->
        <ChatView />

        <!-- Mask when is mobile and sider is open -->
        <div
          v-show="appStore.isMobile && !appStore.siderCollapse"
          class="absolute left-0 top-0 h-full w-full bg-[rgba(0,0,0,0.2)]"
          :class="[LayoutStyle['layout-mobile-sider-mask']]"
          @click="appStore.setSiderCollapse(true)"
        />
      </n-layout-content>
    </n-layout>
  </div>
</template>

<style scoped>

</style>
