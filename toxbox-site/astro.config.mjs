// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE,
  base: process.env.ASTRO_BASE ?? "/",
  integrations: [
    starlight({
      title: "TOXBOX",
      favicon: "/favicon.svg",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        alt: "TOXBOX",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/<OWNER>/<REPO>",
        },
      ],
      sidebar: [
        {
          label: "Docs",
          items: [
            { label: "Getting Started", slug: "docs/getting-started" },
            { label: "Concept", slug: "docs/concept" },
            { label: "Tutorials", slug: "docs/tutorials" },
            { label: "Reference", slug: "docs/reference" },
            { label: "Troubleshooting", slug: "docs/troubleshooting" },
            { label: "License", slug: "docs/license" },
            { label: "Changelog", slug: "docs/changelog" },
          ],
        },
        {
          label: "Links",
          items: [
            { label: "Releases", link: "/releases" },
            {
              label: "Buy on Booth",
              link: "https://simijimishijimi.booth.pm/items/7592348",
            },
          ],
        },
      ],
    }),
  ],
});
