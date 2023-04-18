import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href='/' className={styles.link}>
        Home
      </Link>
      <Link
        href='https://react.gcornea.ca'
        target='_blank'
        className={styles.link}
      >
        React
      </Link>
      <Link
        href='https://cplus.gcornea.ca'
        target='_blank'
        className={styles.link}
      >
        C++
      </Link>
      <Link href='/about' className={styles.link}>
        About
      </Link>
    </nav>
  );
}
