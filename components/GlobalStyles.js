import { useContext } from 'react';
import Head from 'next/head';
import ThemeContext from '~/contexts/ThemeContext';

import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const GlobalStyles = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Oswald&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        body {
          box-sizing: border-box;
          font-family: ${theme.font.body};
          text-align: center;
          margin: 0;
          padding: 0;
          color: ${theme.color.textPrimary};
          background-color: ${theme.color.background};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${theme.font.header};
        }
        h1,
        .h1 {
          font-size: 36px;
          font-weight: 400;
        }
        h2,
        .h2 {
          font-size: 24px;
          font-weight: 400;
        }
        h3,
        .h3 {
          font-size: 20px;
          font-weight: 400;
        }
        label {
          display: block;
          text-align: left;
          font-size: 12px;
        }
      `}</style>
    </>
  );
};

export default GlobalStyles;
