import React, {useState, useEffect, useContext} from 'react';
import { ItemHeader } from '../ItemHeader/ItemHeader';
import ItemContainer from '../ItemContainer/ItemContainer';
import ItemContext from '../../contexts/ItemContext';
import ItemInterface from '@/interfaces/ItemInterface';
import ItemProps from '@/interfaces/props/ItemProps';
import Status from '@/enums/StatusEnum';
import Wrapper from './ItemStyles';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';


export const Item = ({ item, active }: ItemProps) => {

    const [hidden, toggleHidden] = useState(false);
    const { items, activeItem, itemBackgroundColours, itemTitleColours,
            setActiveItem, setItems, handleAddItem } = useContext(ItemContext);

    useEffect(() => {
        if(item.children.length === 0) toggleHidden(true);
    },)

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        (item.id === activeItem?.id) ? setActiveItem(null) : setActiveItem(item);
    };

    const handleCollapse = () => {
        toggleHidden(hidden => !hidden);
    }

    const handleDeleteItem = () => {
        const removeItem = (items: ItemInterface[]) => {
        return items.filter((item) => {
            if (item.id === activeItem?.id) {
                return false; // Remove the item
            } else if (item.children.length > 0) {
                item.children = removeItem(item.children); // Recursively remove from children
            }
            return true; // Keep the item
        });
        };
      
        const updatedItems = removeItem(items);
        setItems(updatedItems);
        setActiveItem(null);
    };

    const handleAddChild = (title: string, status: Status) => {
        if(hidden){
            toggleHidden(false);
            handleAddItem(title, status);
        } else {
            handleAddItem(title, status);
        }
    };

    return (
        <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
            <Wrapper
                itembackgroundcolours = {itemBackgroundColours}
                itemtitlecolours = {itemTitleColours}
            >
                <div
                    className={`item status_${item.status} level_${item.level} ${active ? 'active' : ''}`}
                    onClick={handleClick}
                >
                    <ItemHeader 
                        item={item}
                        active={item.id === activeItem?.id}
                        handleAddItem={handleAddChild}
                        handleDeleteItem={handleDeleteItem}
                        handleCollapse={handleCollapse}
                    />

                    {item.children && (
                        <ItemContainer
                            level={item.level + 1}
                            isHidden={hidden}
                        >
                            {item.children.map(child => (
                                <Item
                                    key={child.id}
                                    item={child}
                                    active={child.id === activeItem?.id}
                                />
                            ))}
                        </ItemContainer>
                    )} 
                </div>
            </Wrapper>
        </StyleSheetManager>
    );
};

export default Item;