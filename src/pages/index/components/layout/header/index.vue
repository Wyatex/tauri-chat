<script setup lang="ts">
const appStore = useAppStore()
</script>

<template>
  <div class="h-full flex items-center justify-between px-16px">
    <div>
      <n-button quaternary circle @click="appStore.toggleSiderCollapse()">
        <template #icon>
          <n-icon>
            <i :class="appStore.siderCollapse ? 'i-line-md:menu-fold-right' : 'i-line-md:menu-fold-left'" />
          </n-icon>
        </template>
      </n-button>
    </div>
  </div>
</template>

<style scoped>

</style>
