import { FC } from 'react';

import styles from './DarkLayout.module.css';

export const DarkLayout: FC = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: '#121212',
                padding: '30px',
                borderRadius: '5px',
                color: '#fff',
            }}
            className={styles['code-dark']}
        >
            {children}
        </div>
    );
};
