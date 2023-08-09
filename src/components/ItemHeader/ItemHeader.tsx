import React, { useContext, useEffect, useState, useRef } from "react";
import { ModifyButtonsContainer } from "../buttons/ModifyButtonsContainer/ModifyButtonsContainer";
import AddButtonContainer from "../buttons/AddButtonContainer/AddButtonContainer";
import ItemHeaderProps from "@/interfaces/props/ItemHeaderProps";
import Styles from './ItemHeader.module.css';
import ItemContext from "@/contexts/ItemContext";
import { mergeChanges } from "@/utils/ItemUtils";
import Item from "@/interfaces/ItemInterface";


export const ItemHeader = ({ item, active, handleAddItem, handleDeleteItem, handleCollapse }: ItemHeaderProps) => {

    const { activeItem, setActiveItem, handleEditItem } = useContext(ItemContext);
    const [newItem, setNewItem] = useState<Item>({} as Item);

    const editableRef = useRef<HTMLParagraphElement>(null);

    const handleFocus = () => {
        if (editableRef.current) {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(editableRef.current);
          selection?.removeAllRanges();
          selection?.addRange(range);
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
    };

    const handleTitleQuickAlter = (e: React.FocusEvent<HTMLParagraphElement>) => {
        const newTitle = e.target.innerText;
        setNewItem((prevState) => ({
            ...prevState,
            "title": newTitle
        }));
    };

    const truncateTitle = (title: string, level: number):string => {
        const lv1CharLimit = 30;
        const lv2CharLimit = 30;
        const lv3CharLimit = 20;

        if(level === 1 && title.length > lv1CharLimit) {
            return title.slice(0, lv1CharLimit) + '...';
        } else if(level === 2 && title.length > lv2CharLimit) {
            return title.slice(0, lv2CharLimit) + '...';
        } else if(level === 3 && title.length > lv3CharLimit) {
            return title.slice(0, lv3CharLimit) + '...';
        }
        return title;
    };

    useEffect(() => {
        const updatedItem = mergeChanges(activeItem, newItem);
        handleEditItem(updatedItem);
        setActiveItem(updatedItem);
    }, [newItem]);

    return (
        <div className={`${Styles.header} ${Styles[`level_${item.level}`]} ${active ? Styles.active : ''}`}>
            <ModifyButtonsContainer
                handleDeleteItem={handleDeleteItem}
                handleCollapse={handleCollapse}
                item={item}
                active={active}
            />
            {active ? (
                <p 
                    className={`${Styles.title} ${Styles[`level_${item.level}`]} ${active ? Styles.active : ''}`}
                    onClick={handleClick}
                    onBlur={handleTitleQuickAlter}
                    onFocus={handleFocus}
                    ref={editableRef}
                    contentEditable
                    suppressContentEditableWarning={true}
                    spellCheck={false}
                >
                    {item.title}
                </p>
            ) : (
                <p 
                    className={`${Styles.title} ${Styles[`level_${item.level}`]} ${active ? Styles.active : ''}`}
                >
                    {truncateTitle(item.title, item.level)}
                </p>
            )}
            <AddButtonContainer 
                level={item.level}
                active={active}
                handleAddItem={handleAddItem}
            />
        </div>
    );
};