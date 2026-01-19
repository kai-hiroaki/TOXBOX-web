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
        replacesTitle: true,
      },
      customCss: ["./src/styles/starlight.css"],
      components: {
        Header: "./src/components/Header.astro",
      },
      sidebar: [
        {
          label: "ドキュメント",
          items: [
            { label: "ようこそ", slug: "docs/concept" },
            { label: "クイックスタート", slug: "docs/getting-started" },
            { label: "UIガイド", slug: "docs/ui-guide" },
            { label: "コンセプト", slug: "docs/philosophy" },
            {
              label: "チュートリアル",
              collapsed: true,
              autogenerate: { directory: "docs/tutorials" },
            },
            { label: "toxの作成", slug: "docs/creating-tox" },
            { label: "リファレンス", slug: "docs/reference" },
            { label: "トラブルシューティング", slug: "docs/troubleshooting" },
            { label: "ライセンス", slug: "docs/license" },
          ],
        },
        {
          label: "リリース",
          items: [{ label: "更新履歴", slug: "docs/releases" }],
        },
        {
          label: "リンク",
          items: [
            {
              label: "BOOTHで購入",
              link: "https://simijimishijimi.booth.pm/items/7592348",
            },
          ],
        },
      ],
    }),
  ],
});
