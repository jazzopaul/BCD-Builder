import Item from "../ItemInterface";

export default interface ModifyButtonsContainerProps {
    item: Item;
    active: boolean;
    handleDeleteItem: () => void;
    handleCollapse: () => void;
}