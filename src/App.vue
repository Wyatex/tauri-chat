<script setup lang="ts">
import DarkModeContainer from '@/components/dark-mode-container.vue'
import { darkTheme } from 'naive-ui'
import { naiveDateLocales, naiveLocales } from './locales/naive'

const appStore = useAppStore()
const themeStore = useThemeStore()

const naiveDarkTheme = computed(() => (themeStore.darkMode ? darkTheme : undefined))

const naiveLocale = computed(() => {
  return naiveLocales[appStore.locale]
})

const naiveDateLocale = computed(() => {
  return naiveDateLocales[appStore.locale]
})
</script>

<template>
  <NConfigProvider
    :theme="naiveDarkTheme"
    :theme-overrides="themeStore.naiveTheme"
    :locale="naiveLocale"
    :date-locale="naiveDateLocale"
    class="h-full"
  >
    <AppProvider>
      <DarkModeContainer>
        <RouterView class="bg-layout" />
      </DarkModeContainer>
    </AppProvider>
  </NConfigProvider>
</template>
