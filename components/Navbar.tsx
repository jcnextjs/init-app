import { LinkProps } from 'next/link';

import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

interface MenuItem extends Pick<LinkProps, 'href'> {
    name: string;
}

const menuItems: MenuItem[] = [
    {
        name: 'Inicio',
        href: '/',
    },
    {
        name: 'Sobre Nosotros',
        href: '/about',
    },
    {
        name: 'Precios',
        href: '/pricing',
    },
    {
        name: 'Contacto',
        href: '/contact',
    },
];

export const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>
            {menuItems.map((item, ix) => (
                <ActiveLink key={ix} {...item} />
            ))}
        </nav>
    );
};
