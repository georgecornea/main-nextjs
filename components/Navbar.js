import styles from './Navbar.module.css';
import Nav from './Nav';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href='/'>
          <img src='/logo.png' alt='gcornea' style={{ height: '35px' }} />
        </Link>
      </div>
      <Nav />
    </div>
  );
}
