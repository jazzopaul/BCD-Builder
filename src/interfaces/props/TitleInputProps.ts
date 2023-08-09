import { Dispatch, SetStateAction } from 'react';
import ItemInterface from '@/interfaces/ItemInterface';

export default interface TitleInputProps {
    setNewItem: Dispatch<SetStateAction<ItemInterface>>;
}