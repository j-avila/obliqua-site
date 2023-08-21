import { defineConfig } from "astro/config"
import react from "@astrojs/react"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://j-avila.github.io",
  base: "/obliqua-site",
  integrations: [react(), tailwind()],
  experimental: {
    assets: true,
  },
})
