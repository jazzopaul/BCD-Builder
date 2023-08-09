import Status from '../enums/StatusEnum';
import Tag from '../types/TagType';

export default interface Item {
    id: string;
    parent_id: string | null;
    title: string;
    status: Status;
    description: string;
    is_expanded: boolean;
    order: number;
    level: number;
    tags: Tag[];
    children: Item[];
}

export interface UnprocessedItem {
    id: string;
    parent_id: string | null;
    title: string;
    status: string;
    description: string;
    order: number;
    level: number;
    tags: Tag[];
    children: Item[];
}