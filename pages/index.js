import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ByVercel from '@/components/ByVercel';
import Nextjs from '@/components/Next';
import Projects from '@/components/Projects';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto+Mono:wght@500&family=Roboto:wght@700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <ByVercel />
      <Nextjs />
      <Projects />
    </>
  );
}
