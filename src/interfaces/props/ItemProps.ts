import ItemInterface from '@/interfaces/ItemInterface';

export default interface ItemProps {
    item: ItemInterface;
    active: boolean;
    children?: React.ReactNode;
}