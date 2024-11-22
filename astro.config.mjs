import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://monumental-bavarois-35be4a.netlify.app/",
  integrations: [preact()],
});
