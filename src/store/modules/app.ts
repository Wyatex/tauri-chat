import { SetupStoreId } from '@/enum'
import { setLocale } from '@/locales'
import { setDayjsLocale } from '@/locales/dayjs'
import { localStg } from '@/utils/storage'
import { useBoolean } from '@sa/hooks'
import { breakpointsTailwind, useBreakpoints, useEventListener } from '@vueuse/core'
import { defineStore } from 'pinia'
import { effectScope, nextTick, onScopeDispose, ref, watch } from 'vue'
import { useThemeStore } from './theme'

export const useAppStore = defineStore(SetupStoreId.App, () => {
  const themeStore = useThemeStore()
  const scope = effectScope()
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const { bool: themeDrawerVisible, setTrue: openThemeDrawer, setFalse: closeThemeDrawer } = useBoolean()
  const { bool: reloadFlag, setBool: setReloadFlag } = useBoolean(true)
  const { bool: fullContent, toggle: toggleFullContent } = useBoolean()
  const { bool: contentXScrollable, setBool: setContentXScrollable } = useBoolean()
  const { bool: siderCollapse, setBool: setSiderCollapse, toggle: toggleSiderCollapse } = useBoolean()
  const {
    bool: mixSiderFixed,
    setBool: setMixSiderFixed,
    toggle: toggleMixSiderFixed,
  } = useBoolean(localStg.get('mixSiderFixed') === 'Y')

  /** Is mobile layout */
  const isMobile = breakpoints.smaller('sm')
  const activeBreakpoint = breakpoints.active()

  /**
   * Reload page
   *
   * @param duration Duration time
   */
  async function reloadPage(duration = 300) {
    setReloadFlag(false)

    const d = themeStore.page.animate ? duration : 40

    await new Promise((resolve) => {
      setTimeout(resolve, d)
    })

    setReloadFlag(true)
  }

  const locale = ref<App.I18n.LangType>(localStg.get('lang') || 'zh-CN')

  const localeOptions: App.I18n.LangOption[] = [
    {
      label: '中文',
      key: 'zh-CN',
    },
    {
      label: 'English',
      key: 'en-US',
    },
  ]

  function changeLocale(lang: App.I18n.LangType) {
    locale.value = lang
    setLocale(lang)
    localStg.set('lang', lang)
  }

  function init() {
    setDayjsLocale(locale.value)
  }

  // watch store
  scope.run(() => {
    // watch isMobile, if is mobile, collapse sider
    watch(
      isMobile,
      (newValue) => {
        if (newValue) {
          // backup theme setting before is mobile
          localStg.set('backupThemeSettingBeforeIsMobile', {
            layout: themeStore.layout.mode,
            siderCollapse: siderCollapse.value,
          })

          themeStore.setThemeLayout('vertical')
          setSiderCollapse(true)
        }
        else {
          // when is not mobile, recover the backup theme setting
          const backup = localStg.get('backupThemeSettingBeforeIsMobile')

          if (backup) {
            nextTick(() => {
              themeStore.setThemeLayout(backup.layout)
              setSiderCollapse(backup.siderCollapse)

              localStg.remove('backupThemeSettingBeforeIsMobile')
            })
          }
        }
      },
      { immediate: true },
    )

    // watch locale
    watch(locale, () => {
      // set dayjs locale
      setDayjsLocale(locale.value)
    })
  })

  // cache mixSiderFixed
  useEventListener(window, 'beforeunload', () => {
    localStg.set('mixSiderFixed', mixSiderFixed.value ? 'Y' : 'N')
  })

  /** On scope dispose */
  onScopeDispose(() => {
    scope.stop()
  })

  // init
  init()

  return {
    isMobile,
    activeBreakpoint,
    reloadFlag,
    reloadPage,
    fullContent,
    locale,
    localeOptions,
    changeLocale,
    themeDrawerVisible,
    openThemeDrawer,
    closeThemeDrawer,
    toggleFullContent,
    contentXScrollable,
    setContentXScrollable,
    siderCollapse,
    setSiderCollapse,
    toggleSiderCollapse,
    mixSiderFixed,
    setMixSiderFixed,
    toggleMixSiderFixed,
  }
})
