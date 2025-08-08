import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "IGEN Developer Docs",
  tagline:
    "Explore comprehensive documentation for IGEN Tech, including guides, tutorials, and API references.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true,
  },

  // Set the production url of your site here
  url: "https://docs-igen.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "IGEN Tech Co,Ltd", // Usually your GitHub org/user name.
  projectName: "Developers Site", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  plugins: [["./plugins/tailwind-plugin.cjs", {}]],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        label: "English",
      },
      zh: {
        label: "简体中文",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/xcccxvvv/test-site/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/xcccxvvv/test-site/tree/main",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          editLocalizedFiles: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social car
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Developers",
      logo: {
        alt: "Developers",
        src: "img/light.svg",
        srcDark: "img/dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      logo: {
        href: "/",
        src: "img/footer_light.svg",
        srcDark: "img/footer_dark.svg",
        alt: "IGEN Documentation | IGEN Docs",
        height: "36px",
      },
      links: [
        {
          title: "Product",
          items: [
            {
              label: "Solarman",
              href: "https://www.solarmanpv.com/",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "https://www.igen-tech.com/",
            },
          ],
        },
      ],
      copyright:
        "Copyright © IGEN Tech Co,Ltd since 2025. All rights reserved.",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: {
        plain: prismThemes.vsDark.plain,
        styles: [
          ...prismThemes.vsDark.styles,
          {
            types: ["function", "keyword"],
            style: {
              color: "#f25c7c",
            },
          },
        ],
      },
    },
    additionalLanguages: [
      "dart",
      "ruby",
      "groovy",
      "kotlin",
      "java",
      "swift",
      "objectivec",
      "json",
      "bash",
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
