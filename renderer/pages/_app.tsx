import { AppProps } from 'next/app';
import { ThemeProviderComponent } from '../components/ThemeContext';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <ThemeProviderComponent>
      <Head>
        <title>ERP-Lite</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProviderComponent>
  );
}

export default MyApp;
