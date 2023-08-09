import React, {useState, useContext} from 'react';
import ItemContext from '../../../contexts/ItemContext';
import Item from '@/interfaces/ItemInterface';
import Styles from './ItemEditorForm.module.css';
import TitleInput from './formInputs/TitleInput';
import DescriptionInput from './formInputs/DescriptionInput';
import StatusInput from './formInputs/StatusInput';
import SaveChangesButton from '@/components/buttons/SaveChangesButton/SaveChangesButton';
import { DeleteButton } from '@/components/buttons/DeleteButton/DeleteButton';
import { mergeChanges } from '@/utils/ItemUtils';

export const ItemEditorForm = () => {
    const [newItem, setNewItem] = useState<Item>({} as Item);

    const { 
        activeItem,
        setItemEditorVisibility,
        setActiveItem,
        handleEditItem
    } = useContext(ItemContext);

    const handleSave = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setItemEditorVisibility(false);
        const updatedItem = mergeChanges(activeItem, newItem);
        console.log("updatedItem: ", updatedItem);
        handleEditItem(updatedItem);
        setActiveItem(null);
    }

    const handleClose = () => {
        setItemEditorVisibility(false);
        setNewItem({} as Item);
    }

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
    }

  return (
    <div 
        className={Styles.overlay}
        onClick={handleClick}
    >
        <div className={Styles.item_editor_form}>
            <TitleInput 
                setNewItem={setNewItem}
            />
            <div className={Styles.close_button_wrapper}>
                <DeleteButton 
                    handleDelete={handleClose}
                />
            </div>
            <DescriptionInput
                setNewItem={setNewItem}
            />
            <div className={Styles.item_editor_form_lower_body}>
                <StatusInput 
                    setNewItem={setNewItem}
                />
                <SaveChangesButton
                    handleSave={handleSave}
                />
            </div>
        </div>
    </div>
  )
}

export default ItemEditorForm