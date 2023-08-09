import React, {createContext, useState, useEffect, useContext, ReactNode} from 'react';
import DataContext from '../contexts/DataContext';
import Item from '../interfaces/ItemInterface';
import ItemContextType from '@/types/ItemContextType';
import Status from '@/enums/StatusEnum';
import { determineOrderPlacement, determineLevelPlacement, jsonToItemsParser } from '@/utils/ItemUtils';
import { v4 as uuidv4 } from 'uuid';
import OverrideColourType from '@/types/OverrideColourType';
import ItemLevelColours from '@/types/ItemLevelColoursType';
import BcdContext from './BcdContext';

const itemContextDefaultValues: ItemContextType = {
    items: [],
    nextId: uuidv4(),
    maxItemLevels: 3,
    itemEditorVisibility: false,
    activeItem: null,
    itemBackgroundColours: {},
    itemTitleColours: {},
    setItems: () => {},
    setNextId: () => {},
    setItemEditorVisibility: () => {},
    setActiveItem: () => {},
    setMaxItemLevels: () => {},
    handleAddItem: () => {},
    handleEditItem: () => {},
}

const ItemContext = createContext<ItemContextType>(itemContextDefaultValues);

type Props = {
    children: ReactNode;
};

export const ItemProvider = ({children}: Props) => {
    const [items, setItems] = useState<Item[]>([]);

    const [activeItem, setActiveItem] = useState<Item | null>(null);
    const [nextId, setNextId] = useState<string>(uuidv4());
    const [maxItemLevels, setMaxItemLevels] = useState<number>(3);
    const [itemEditorVisibility, setItemEditorVisibility] = useState<boolean>(false);
    const [itemBackgroundColours, setItemBackgroundColours] = useState<ItemLevelColours>({
        level_1: "#023F81",
        level_2: "#3164F4",
        level_3: "#AAD3FF",
        level_4: "#154c79",
        level_5: "#154c79",
      })
    const [itemTitleColours, setItemTitleColours] = useState<ItemLevelColours>({
        level_1: "#FFF",
        level_2: "#FFF",
        level_3: "#000",
        level_4: "#FFF",
        level_5: "#FFF",  
    })

    const { data, loading } = useContext(DataContext);
    const { overrideColours } = useContext(BcdContext);

    useEffect(() => {
        const uploadedItems = jsonToItemsParser(data, loading);
        setItems(uploadedItems);
    },[data, (loading === false)]);

    useEffect(() => {
        setItemBackgroundColours(
            mapOverrideColoursToItemBackgroundColours(overrideColours)
            );
        setItemTitleColours(
            calculateLevelColours(itemBackgroundColours)
            );
    },[loading === false, data !== null, overrideColours.length > 0 ]);

    useEffect(() => {
            console.log("itemBackgroundColours", itemBackgroundColours);
            console.log(calculateLevelColours(itemBackgroundColours));
            console.log("itemTitleColours", itemTitleColours);
    },[itemBackgroundColours]);

    const createNewItem = (title: string, status: Status, topLevelAdd?: Boolean): Item => {
        const parent_id = (activeItem && !topLevelAdd) ? activeItem.id : null;
        const order = determineOrderPlacement(items, (topLevelAdd ? null : activeItem));
        const level = determineLevelPlacement((topLevelAdd ? null : activeItem));

        const newItem: Item = {
            id: nextId,
            parent_id: parent_id,
            title: title,
            description: '',
            status: status,
            is_expanded: false,
            order: order,
            level: level,
            tags: [],
            children: []
        };

        setNextId(uuidv4());
        return newItem;
    }

    const addItemToItems = (newItem: Item, topLevelAdd?: Boolean) => {
        const updateChildren = (items: Item[]): Item[] => {
            return items.map((item) => {
                if (item.id === activeItem?.id && !topLevelAdd) {
                return {
                    ...item,
                    children: [...item.children, newItem],
                };
                } else if (item.children.length > 0 && !topLevelAdd) {
                return {
                    ...item,
                    children: updateChildren(item.children),
                };
                }
                return item;
            });
        };

        if (activeItem?.id && !topLevelAdd) {
            const updatedItems = updateChildren([...items]);
            setItems(updatedItems);
        } else {
            const updatedItems = [...items, newItem];
            setItems(updatedItems);
        }
    };

    const handleAddItem = (title: string, status: Status, topLevelAdd?: Boolean) => {
        if (topLevelAdd) setActiveItem(null);
        // Function does nothing if attempting to add an Item past the max number of levels.
        if (activeItem != null && !topLevelAdd && activeItem.level >= maxItemLevels) return;
        const newItem = createNewItem(title, status, topLevelAdd);
        addItemToItems(newItem, topLevelAdd);
    }

    const handleEditItem = (newItem: Item) => {

        const updateItem = (items: Item[]): Item[] => {
            return items.map((item) => {
                if (item.id === newItem.id) { // Correct Item Found
                    return {
                        ...newItem,
                        children: [...item.children]
                    }; 
                } else if (item.children.length > 0) { // Not Found and target has children
                    return {
                        ...item,
                        children: updateItem(item.children), // Recursively update children
                    };
                }
                return item; // Keep the item
            });
        };
      
        const updatedItems = updateItem(items);
        setItems(updatedItems);        
    };


    const mapOverrideColoursToItemBackgroundColours = (overrideColours: OverrideColourType[]): ItemLevelColours => {
      
        overrideColours.forEach((overrideColour) => {
          const { level, colour } = overrideColour;
          const levelKey = `level_${level}`;
          if (levelKey in itemBackgroundColours) {
            itemBackgroundColours[levelKey] = colour;
          }
        });
      
        return itemBackgroundColours;
    }

    const calculateLevelColours = (itemBackgroundColours: ItemLevelColours): ItemLevelColours => {
        const updatedColours: ItemLevelColours = {};
      
        for (const levelKey in itemBackgroundColours) {
          if (itemBackgroundColours.hasOwnProperty(levelKey)) {
            const hexCode = itemBackgroundColours[levelKey];
            console.log(levelKey + ' ' + hexCode);
            const [red, green, blue] = hexToRGB(hexCode);
            console.log(red + ' ' + green + ' ' + blue);
            const luminance = red * 0.299 + green * 0.587 + blue * 0.114;
            console.log('luminance', luminance);
      
            const newColour = luminance > 186 ? '#000000' : '#ffffff';
            updatedColours[levelKey] = newColour;
            console.log('newColour', newColour);
          }
        }
      
        return updatedColours;
    }
      
    const hexToRGB = (hexCode: string): [number, number, number] => {
        const hex = hexCode.replace('#', '');
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return [r, g, b];
    };


    const value = {
        items,
        nextId,
        maxItemLevels,
        itemEditorVisibility,
        activeItem,
        itemBackgroundColours,
        itemTitleColours,
        setItems,
        setNextId,
        setItemEditorVisibility,
        setActiveItem,
        setMaxItemLevels,
        handleAddItem,
        handleEditItem
    };

    return <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
}

export default ItemContext;