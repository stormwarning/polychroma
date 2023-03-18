import { componentStyles } from '~/styles';
import { Box, Footer, Nav, Masthead, Gradient } from '~/components';
import { type ReactNode } from 'react';

const styles = componentStyles.Layout;

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <article className={styles.article}>
      <Box
        className={styles.header}
        position={{ desktop: 'sticky' }}
        top={0}
        height={{ desktop: 'screen-h' }}
      >
        <Masthead className="mix-burn" />
      </Box>
      <main className={styles.main}>
        <Nav />
        <Box
          as="section"
          className={styles.section}
          padding={32}
          paddingTop={{ desktop: 0 }}
          paddingBottom={{ desktop: 64 }}
        >
          {children}
        </Box>
        <Gradient />
      </main>
      <Footer />
    </article>
  );
}
