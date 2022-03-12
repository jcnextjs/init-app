import type { NextPage } from 'next';
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

const Contact: NextPage = () => {
    return (
        <MainLayout>
            <h1 className={'title'}>Contact</h1>

            <h2>
                Ir al <Link href="/">Inicio</Link>
            </h2>

            <p className={'description'}>
                Comienza a desarrollar tu sitio en
                <code className={'code'}>pages/contact/index.tsx</code>
            </p>
        </MainLayout>
    );
};

export default Contact;
