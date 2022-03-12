import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

interface ActiveLinkProps extends LinkProps {
    name: string;
}

const styles: CSSProperties = {
    color: '#0070f3',
};

export const ActiveLink: FC<ActiveLinkProps> = ({ name, href }) => {
    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? styles : undefined}>{name}</a>
        </Link>
    );
};
