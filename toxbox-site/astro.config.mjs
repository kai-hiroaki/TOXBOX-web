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
            { label: "UI Guide", slug: "docs/ui-guide" },
            {
              label: "Tutorials",
              collapsed: true,
              autogenerate: { directory: "docs/tutorials" },
            },
            { label: "Creating tox", slug: "docs/creating-tox" },
            { label: "Reference", slug: "docs/reference" },
            { label: "Troubleshooting", slug: "docs/troubleshooting" },
            { label: "Changelog", slug: "docs/changelog" },
            { label: "License", slug: "docs/license" },
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
