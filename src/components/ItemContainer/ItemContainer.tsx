import React, {ReactNode} from 'react';
import Styles from './ItemContainer.module.css';
import ItemContainerProps from '@/interfaces/props/ItemContainerProps';

const ItemContainer = ({ level, isHidden, children }: ItemContainerProps) => {

    return (
        <div className={`${Styles.container} ${Styles[`level_${level}`]} ${isHidden ? Styles.hidden : ''}`}>
            {children}
        </div>
    );
};

export default ItemContainer;