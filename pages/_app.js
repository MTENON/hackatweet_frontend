import '../styles/globals.css';
import Head from 'next/head';

//import redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>CAWSER</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
