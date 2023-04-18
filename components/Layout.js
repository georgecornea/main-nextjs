import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-around p-4'>
        {children}
        <Footer />
      </main>
    </>
  );
}
