import type { NextPage } from 'next';
import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

const Home: NextPage = () => {
    return (
        <MainLayout>
            <h1 className={'title'}>Inicio</h1>

            <h2>
                Ir a <Link href="/about">Acerca del sitio</Link>
            </h2>

            <p className={'description'}>
                Comienza a desarrollar tu sitio en
                <code className={'code'}>pages/index.tsx</code>
            </p>
        </MainLayout>
    );
};

export default Home;
