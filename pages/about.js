import Head from 'next/head';
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto+Mono:wght@500&family=Roboto:wght@700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <div>About</div>
    </>
  );
}
