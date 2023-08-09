import { Dispatch, SetStateAction } from 'react';
import Item from "@/interfaces/ItemInterface";
import Status from '@/enums/StatusEnum';
import ItemLevelColours from '@/types/ItemLevelColoursType';

type ItemContext = {
    items: Item[];
    nextId: string;
    maxItemLevels: number;
    itemEditorVisibility: boolean;
    activeItem: Item | null;
    itemBackgroundColours: ItemLevelColours;
    itemTitleColours: ItemLevelColours;
    setItems: Dispatch<SetStateAction<Item[]>>;
    setNextId: Dispatch<SetStateAction<string>>;
    setItemEditorVisibility: Dispatch<SetStateAction<boolean>>;
    setActiveItem: Dispatch<SetStateAction<Item | null>>;
    setMaxItemLevels: Dispatch<SetStateAction<number>>;
    handleAddItem: (title: string, status: Status) => void;
    handleEditItem: (newItem: Item) => void;
};

export default ItemContext;