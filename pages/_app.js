import React from 'react';
import 'tailwindcss/tailwind.css';

import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || React.Fragment;

  return (
    <main className='h-screen flex flex-col'>
      <Header />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
