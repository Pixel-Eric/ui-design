import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Component", link: "../pages/component/index" },
      { text: "Examples", link: "../pages/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "../pages/markdown-examples" },
          { text: "Runtime API Examples", link: "../pages/api-examples" },
        ],
      },
      {
        text: "Component",
        items: [{ text: "Use Stage", link: "../pages/component/index" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
