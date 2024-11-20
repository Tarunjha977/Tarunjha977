// pages/_app.js
import '../styles/global.css'; // Import global CSS here
import ProductGrid from '../components/ProductGrid'; // Your component import (if needed here)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
