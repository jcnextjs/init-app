import type { NextPage } from 'next';
import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { NextPageWithLayout } from '../interfaces/interfaces';

const About: NextPageWithLayout = () => {
    return (
        <>
            <h1 className="title">Sobre Nosotros</h1>

            <h2>
                Ir al <Link href="/">Inicio</Link>
            </h2>

            <p className="description">
                Comienza a desarrollar tu sitio en
                <code className="code">pages/about.tsx</code>
            </p>
        </>
    );
};

About.getLayout = (page: React.ReactElement) => (
    <MainLayout>
        <DarkLayout>{page}</DarkLayout>
    </MainLayout>
);

export default About;
