// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  app: {
    head: {
      link: [
        {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"}
      ],
    }
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],


  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwindcss.config.ts",
  },

  pwa: {
    manifest: {
      name: "goods",
      short_name: "gds",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "naon.png",
          sizes: "924x924",
          type: "image/png"
        },
      ]
    },
    devOptions: {
      enabled: true,
    }
  }
})