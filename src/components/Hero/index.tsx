import { type Variants, motion } from "motion/react";

import styles from "./styles.module.css";

import Translate from "@docusaurus/Translate";

import HeroSvg from "./img/hero2.svg";

const variants: Variants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      duration: 0.3,
      delay: i * 0.3,
    },
  }),
  hidden: {
    opacity: 0,
    y: 30,
  },
};

function Title() {
  return (
    <motion.div
      className={styles.hero_text}
      custom={1}
      initial="hidden"
      animate="visible"
      variants={variants}
      onMouseMove={(e) => {
        e.currentTarget.style.setProperty("--x", `${e.clientX}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY}px`);
      }}
    >
      <Translate id="home.hero.greeting">Meet with</Translate>
      <span
        className={styles.hero_title}
        onMouseMove={(e) => {
          const bounding = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--mouse-x", `${bounding.x}px`);
          e.currentTarget.style.setProperty("--mouse-y", `${bounding.y}px`);
        }}
      >
        <Translate id="home.hero.title"> IGEN!</Translate>
      </span>
    </motion.div>
  );
}

function Subtitle() {
  return (
    <motion.p
      custom={2}
      initial="hidden"
      animate="visible"
      variants={variants}
      className="max-lg:px-4"
    >
      <Translate id="home.hero.subtitle">
        Explore our resources and learn more about our products.
      </Translate>
    </motion.p>
  );
}

function BackgroudCircle() {
  return <div className={styles.circle}></div>;
}

export default function Hero() {
  return (
    <motion.div className={styles.hero}>
      <div className={styles.intro}>
        <Title />
        <Subtitle />
      </div>

      <motion.div className={styles.background}>
        <HeroSvg />
        <BackgroudCircle />
      </motion.div>
    </motion.div>
  );
}
