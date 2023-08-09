import { useContext } from 'react';
import Styles from './AddButtonContainer.module.css'
import ItemContext from '@/contexts/ItemContext';
import { AddButton } from '../AddButton/AddButton';
import AddButtonContainerProps from '@/interfaces/props/AddButtonContainerProps'

const AddButtonContainer = ({ level, active, handleAddItem}: AddButtonContainerProps) => {

    const {maxItemLevels} = useContext(ItemContext);

    return (
        <div className={`${Styles.add_button_container} ${(active && level < maxItemLevels) ? Styles.active : ''}`}>
            <AddButton 
                topLevel={false}
                handleAddItem={handleAddItem}
            />
        </div>
    );
};

export default AddButtonContainer;