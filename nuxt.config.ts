export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@privyid/persona',
    '@privyid/persona-icon',
    '@privyid/nhp',
    '@vee-validate/nuxt',
  ],
  css    : ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      'postcss-hexrgba'       : {},
      'tailwindcss/nesting'   : {},
      'tailwindcss'           : {},
      'postcss-lighten-darken': {},
      'autoprefixer'          : {},
    },
  },
  pinia     : { autoImports: ['defineStore', 'storeToRefs'] },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict          : false,
        strictNullChecks: true,
      },
    },
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
})
