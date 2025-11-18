import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fortune Garden",
  description: "Let's make money together!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Make money now!', link: 'https://uxj.app/pages/login/register?invitation=85FTCH' },
    ],
  },
  outDir: '../dist' 
})
