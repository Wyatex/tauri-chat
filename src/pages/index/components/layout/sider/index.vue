<script setup lang="ts">

</script>

<template>
  <div class="p-16px">
    <div class="flex-y-center text-primary">
      <div class="i-hugeicons:artificial-intelligence-05 text-30px" />
      <h2 class="pl-8px text-18px text-primary font-bold">
        {{ $t('system.title') }}
      </h2>
    </div>
    <div class="mt-16px flex items-center justify-between">
      <h3 class="text-16px font-bold">
        {{ $t('page.index.chatHistory') }}
      </h3>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button quaternary circle>
            <template #icon>
              <n-icon><i class="i-hugeicons:delete-02" /></n-icon>
            </template>
          </n-button>
        </template>
        {{ $t('page.index.clearHistory') }}
      </n-tooltip>
    </div>
    <n-divider />
    <n-button round dashed block size="large" class="mt-16px">
      <template #icon>
        <n-icon>
          <i class="i-hugeicons:bubble-chat-add" />
        </n-icon>
      </template>
      {{ $t('page.index.newChat') }}
    </n-button>
  </div>
</template>

<style scoped>

</style>
