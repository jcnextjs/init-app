import React from 'react';
import { NextPage } from 'next';
import { NextPageWithLayout } from '../../interfaces/interfaces';
import { MainLayout } from '../../components/layouts/MainLayout';
import Link from 'next/link';

const Pricing: NextPageWithLayout = () => {
    return (
        <MainLayout>
            <h1 className={'title'}>Precios</h1>

            <h2>
                Ir al <Link href="/">Inicio</Link>
            </h2>

            <p className={'description'}>
                Comienza a desarrollar tu sitio en
                <code className={'code'}>pages/pricing/index.tsx</code>
            </p>
        </MainLayout>
    );
};

export default Pricing;
