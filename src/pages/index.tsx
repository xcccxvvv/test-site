import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import Head from "@docusaurus/Head";

import styles from "./index.module.css";
import LetterGlitch from "../blocks/Backgrounds/LetterGlitch/LetterGlitch";
import Threads from "../components/Threads";

export default function Home(): ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={translate({
        message: "Welcome to our website!",
        id: "home.description",
      })}
    >
      <Head>
        <title>{siteConfig.title}</title>
      </Head>
      <main></main>
    </Layout>
  );
}
