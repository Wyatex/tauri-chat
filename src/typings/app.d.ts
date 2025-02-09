/** The global namespace for the app */
declare namespace App {
  /** Theme namespace */
  namespace Theme {
    type ColorPaletteNumber = import('@sa/color').ColorPaletteNumber

    /** Theme setting */
    interface ThemeSetting {
      /** Theme scheme */
      themeScheme: UnionKey.ThemeScheme
      /** grayscale mode */
      grayscale: boolean
      /** colour weakness mode */
      colourWeakness: boolean
      /** Whether to recommend color */
      recommendColor: boolean
      /** Theme color */
      themeColor: string
      /** Other color */
      otherColor: OtherColor
      /** Whether info color is followed by the primary color */
      isInfoFollowPrimary: boolean
      /** Reset cache strategy */
      resetCacheStrategy: UnionKey.ResetCacheStrategy
      /** Layout */
      layout: {
        /** Layout mode */
        mode: UnionKey.ThemeLayoutMode
        /** Scroll mode */
        scrollMode: UnionKey.ThemeScrollMode
        /**
         * Whether to reverse the horizontal mix
         *
         * if true, the vertical child level menus in left and horizontal first level menus in top
         */
        reverseHorizontalMix: boolean
      }
      /** Page */
      page: {
        /** Whether to show the page transition */
        animate: boolean
        /** Page animate mode */
        animateMode: UnionKey.ThemePageAnimateMode
      }
      /** Header */
      header: {
        /** Header height */
        height: number
        /** Header breadcrumb */
        breadcrumb: {
          /** Whether to show the breadcrumb */
          visible: boolean
          /** Whether to show the breadcrumb icon */
          showIcon: boolean
        }
        /** Multilingual */
        multilingual: {
          /** Whether to show the multilingual */
          visible: boolean
        }
      }
      /** Tab */
      tab: {
        /** Whether to show the tab */
        visible: boolean
        /**
         * Whether to cache the tab
         *
         * If cache, the tabs will get from the local storage when the page is refreshed
         */
        cache: boolean
        /** Tab height */
        height: number
        /** Tab mode */
        mode: UnionKey.ThemeTabMode
      }
      /** Fixed header and tab */
      fixedHeaderAndTab: boolean
      /** Sider */
      sider: {
        /** Inverted sider */
        inverted: boolean
        /** Sider width */
        width: number
        /** Collapsed sider width */
        collapsedWidth: number
        /** Sider width when the layout is 'vertical-mix' or 'horizontal-mix' */
        mixWidth: number
        /** Collapsed sider width when the layout is 'vertical-mix' or 'horizontal-mix' */
        mixCollapsedWidth: number
        /** Child menu width when the layout is 'vertical-mix' or 'horizontal-mix' */
        mixChildMenuWidth: number
      }
      /** Footer */
      footer: {
        /** Whether to show the footer */
        visible: boolean
        /** Whether fixed the footer */
        fixed: boolean
        /** Footer height */
        height: number
        /** Whether float the footer to the right when the layout is 'horizontal-mix' */
        right: boolean
      }
      /** Watermark */
      watermark: {
        /** Whether to show the watermark */
        visible: boolean
        /** Watermark text */
        text: string
      }
      /** define some theme settings tokens, will transform to css variables */
      tokens: {
        light: ThemeSettingToken
        dark?: {
          [K in keyof ThemeSettingToken]?: Partial<ThemeSettingToken[K]>;
        }
      }
    }

    interface OtherColor {
      info: string
      success: string
      warning: string
      error: string
    }

    interface ThemeColor extends OtherColor {
      primary: string
    }

    type ThemeColorKey = keyof ThemeColor

    type ThemePaletteColor = {
      [key in ThemeColorKey | `${ThemeColorKey}-${ColorPaletteNumber}`]: string;
    }

    type BaseToken = Record<string, Record<string, string>>

    interface ThemeSettingTokenColor {
      /** the progress bar color, if not set, will use the primary color */
      'nprogress'?: string
      'container': string
      'layout': string
      'inverted': string
      'base-text': string
    }

    interface ThemeSettingTokenBoxShadow {
      header: string
      sider: string
      tab: string
    }

    interface ThemeSettingToken {
      colors: ThemeSettingTokenColor
      boxShadow: ThemeSettingTokenBoxShadow
    }

    type ThemeTokenColor = ThemePaletteColor & ThemeSettingTokenColor

    /** Theme token CSS variables */
    interface ThemeTokenCSSVars {
      colors: ThemeTokenColor & { [key: string]: string }
      boxShadow: ThemeSettingTokenBoxShadow & { [key: string]: string }
    }
  }

  /**
   * I18n namespace
   *
   * Locales type
   */
  namespace I18n {
    type LangType = 'en-US' | 'zh-CN'

    interface LangOption {
      label: string
      key: LangType
    }

    interface FormMsg {
      required: string
      invalid: string
    }

    interface Schema {
      system: {
        title: string
        updateTitle: string
        updateContent: string
        updateConfirm: string
        updateCancel: string
      }
      common: {
        action: string
        add: string
        addSuccess: string
        backToHome: string
        batchDelete: string
        cancel: string
        close: string
        check: string
        expandColumn: string
        columnSetting: string
        config: string
        confirm: string
        delete: string
        deleteSuccess: string
        confirmDelete: string
        edit: string
        warning: string
        error: string
        index: string
        keywordSearch: string
        logout: string
        logoutConfirm: string
        lookForward: string
        modify: string
        modifySuccess: string
        noData: string
        operate: string
        pleaseCheckValue: string
        refresh: string
        reset: string
        search: string
        switch: string
        tip: string
        trigger: string
        update: string
        updateSuccess: string
        userCenter: string
        yesOrNo: {
          yes: string
          no: string
        }
      }
      theme: {
        themeSchema: { title: string } & Record<UnionKey.ThemeScheme, string>
        grayscale: string
        colourWeakness: string
        layoutMode: { title: string, reverseHorizontalMix: string } & Record<UnionKey.ThemeLayoutMode, string>
        recommendColor: string
        recommendColorDesc: string
        themeColor: {
          title: string
          followPrimary: string
        } & Theme.ThemeColor
        scrollMode: { title: string } & Record<UnionKey.ThemeScrollMode, string>
        page: {
          animate: string
          mode: { title: string } & Record<UnionKey.ThemePageAnimateMode, string>
        }
        fixedHeaderAndTab: string
        header: {
          height: string
          breadcrumb: {
            visible: string
            showIcon: string
          }
          multilingual: {
            visible: string
          }
        }
        tab: {
          visible: string
          cache: string
          height: string
          mode: { title: string } & Record<UnionKey.ThemeTabMode, string>
        }
        sider: {
          inverted: string
          width: string
          collapsedWidth: string
          mixWidth: string
          mixCollapsedWidth: string
          mixChildMenuWidth: string
        }
        footer: {
          visible: string
          fixed: string
          height: string
          right: string
        }
        watermark: {
          visible: string
          text: string
        }
        themeDrawerTitle: string
        pageFunTitle: string
        resetCacheStrategy: { title: string } & Record<UnionKey.ResetCacheStrategy, string>
        configOperation: {
          copyConfig: string
          copySuccessMsg: string
          resetConfig: string
          resetSuccessMsg: string
        }
      }
    }

    type GetI18nKey<T extends Record<string, unknown>, K extends keyof T = keyof T> = K extends string
      ? T[K] extends Record<string, unknown>
        ? `${K}.${GetI18nKey<T[K]>}`
        : K
      : never

    type I18nKey = GetI18nKey<Schema>

    type TranslateOptions<Locales extends string> = import('vue-i18n').TranslateOptions<Locales>

    interface $T {
      (key: I18nKey): string
      (key: I18nKey, plural: number, options?: TranslateOptions<LangType>): string
      (key: I18nKey, defaultMsg: string, options?: TranslateOptions<I18nKey>): string
      (key: I18nKey, list: unknown[], options?: TranslateOptions<I18nKey>): string
      (key: I18nKey, list: unknown[], plural: number): string
      (key: I18nKey, list: unknown[], defaultMsg: string): string
      (key: I18nKey, named: Record<string, unknown>, options?: TranslateOptions<LangType>): string
      (key: I18nKey, named: Record<string, unknown>, plural: number): string
      (key: I18nKey, named: Record<string, unknown>, defaultMsg: string): string
    }
  }
}
