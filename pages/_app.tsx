import type { AppProps } from 'next/app';
import { NextPageWithLayout } from '../interfaces/interfaces';

import '../styles/globals.css';

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(<Component {...pageProps} />);
}

export default MyApp;
