// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    vue: true,
    ignores: [
      'src-tauri',
    ],
    rules: {
      'ts/no-empty-object-type': 'off',
      'regexp/no-unused-capturing-group': 'off',
    },
  },
)
