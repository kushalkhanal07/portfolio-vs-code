import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Kushal Khanal</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software engineer from Kathmandu, Nepal. I primarily
              work with JavaScript / TypeScript, React, Next.js and the Node.js ecosystem.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with React, but
              you&apos;ll also find me working with Node.js, MongoDB and Express
              while building the backend for my personal projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently working at <span className={styles.highlight}>Hyberlab</span> as a Full-stack Web Developer, where I transitioned from a 3-month internship into a full-time role. I collaborate with a lean and efficient team to build and maintain a scalable SaaS video platform, focusing on performance, responsiveness, and usability.

              Led the development of the Hyberlab company website, showcasing the platform’s capabilities using Next.js and TypeScript.

              Played a key role in frontend architecture, component structuring, and ensuring SEO-friendly, responsive design across devices.

              Built features for collaborative video reviewing, internal component libraries, and dynamic page routing.
            </p>
            
          </section>

          {/* <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing for some amazing
              publications like{' '}
              <span className={styles.highlight}>100ms Blog</span>,{' '}
              <span className={styles.highlight}>LogRocket Blog</span>,{' '}
              <span className={styles.highlight}>DEV.to</span> and more as a
              freelance technical author.
            </p>
          </section> */}

          {/* <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I like to read a good
              dystopian novel, listen to calm piano music or just laze around.
            </p>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
