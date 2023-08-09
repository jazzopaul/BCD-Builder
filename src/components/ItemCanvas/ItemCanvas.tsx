import React, {useContext, useEffect} from 'react';
import ItemContext from '../../contexts/ItemContext';
import DataContext from '../../contexts/DataContext';
import ItemEditorForm from '../forms/ItemEditorForm/ItemEditorForm';
import ItemContainer from '../ItemContainer/ItemContainer';
import ItemInterface from '@/interfaces/ItemInterface';
import Item from '../Item/Item';
import { AddButton } from '../buttons/AddButton/AddButton';
import Styles from './ItemCanvas.module.css';

function ItemCanvas() {

    const { items, itemEditorVisibility, activeItem, handleAddItem } = useContext(ItemContext);
    const { data, loading } = useContext(DataContext);

    useEffect(() => {
        if (loading) {
            // Data is still being fetched, show a loading state or placeholder
             console.log("Data is still loading...");
        } else {
            console.log("data: ", data);
        }
    }, [data]);

    const renderItems = (items: ItemInterface[]) => {
        return items.map((item) => (
          <Item
            key={item.id}
            item={item}
            active={activeItem?.id === item.id}
          >
            {item.children && renderItems(item.children)}
          </Item>
        ));
      };

    return (
            <div className={Styles.canvas}>
                {itemEditorVisibility ? <ItemEditorForm />: null}
                <ItemContainer
                  level={1}
                  isHidden={false}
                >
                  {renderItems(items)}
                    <AddButton
                      topLevel={true} 
                      handleAddItem={handleAddItem}
                    />
                </ItemContainer>
            </div>
    )
}

export default ItemCanvas