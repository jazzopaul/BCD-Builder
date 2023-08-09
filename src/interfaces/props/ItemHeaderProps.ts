import Item from '@/interfaces/ItemInterface';
import Status from '@/enums/StatusEnum';

export default interface ItemHeaderProps {
    item: Item;
    active: boolean;
    handleAddItem: (title: string, status: Status, topLevelAdd?: Boolean) => void;
    handleDeleteItem: () => void;
    handleCollapse: () => void;
}