import Item, { UnprocessedItem } from '../interfaces/ItemInterface';
import BcdData from '@/interfaces/BcdDataInterface';
import Status from '@/enums/StatusEnum';
import { v4 as uuidv4 } from 'uuid';


export const findItemById = (itemId: string, items: Item[]): Item | null => {
  if (items === null) return null;
  for (const item of items) {
    if (item.id === itemId) {
      return item; // Found the item with the matching id
    }
    if (item.children.length > 0) {
      const foundItem = findItemById(itemId, item.children);
      if (foundItem) {
        return foundItem; // Found the item in the children's subtree
      }
    }
  }
  return null; // Item with the given id not found
}

const loadJsonForItems = (data: BcdData | null): UnprocessedItem[] => {
  const items = (data?.items ? data.items : []);
  return items;
}

/* Maps over each item in the array and provides it with a unique id, overwriting the previous id (may need to change this later)
   as well as the appropriate enum value for its status property */
const mapPropertiesToItems = (unprocessedItems: UnprocessedItem[], parent_id?: string): Item[] => {
  const mappedItems: Item[] = unprocessedItems.map((item: UnprocessedItem) => {
    const newItemId = uuidv4();
    return {
      ...item,
      status: Status[item.status as keyof typeof Status],
      id: newItemId,
      parent_id: (parent_id) ? parent_id : null,
      is_expanded: (item.children) ? true : false, // Might need to count if more than 0 children rather than check truthyness
      children: mapPropertiesToItems(item.children, newItemId),
    };
  });
  return mappedItems;
}

export const jsonToItemsParser = (data: BcdData | null, loading: boolean): Item[] => {
  if (loading) return [];
  const unprocessedItems = loadJsonForItems(data);
  const items = mapPropertiesToItems(unprocessedItems);
  return items;
}

export const countSiblings = (items: Item[], targetItem: Item | null): number => {
    let count = 0;

    const traverse = (currentItem: Item, parentItems: Item[]) => {
        if (currentItem === targetItem) {
            count = parentItems.length;
            return;
        }

        for (const child of currentItem.children) {
            traverse(child, [...parentItems, child]);
        }
    };

    for (const item of items) {
        traverse(item, []);
    }

    return count;
}

export const countChildren = (items: Item[], targetItem: Item | null): number => {
    let count = 0;
  
    const traverse = (currentItem: Item) => {
      if (currentItem === targetItem) {
        count = currentItem.children.length;
        return;
      }
  
      for (const child of currentItem.children) {
        traverse(child);
      }
    };

    for (const item of items) {
      traverse(item);
    }

    return count;
}; 

export const mergeChanges = (prevItem: Item | null, itemUpdates: Item) => {
  const mergedObject = { ...prevItem, ...itemUpdates};
  return mergedObject;
}

/* For a given Item, determines the initial value for the order property.
   Newly inserted Items are inserted at the end of the array that they belong to.
   The order is 0 based, so the first position is 0. */
export const determineOrderPlacement = (items: Item[], activeItem: Item | null): number => {
    if (items.length === 0) return 0;
    if (activeItem === null) return items.length;
    return countChildren(items, activeItem);
}

export const determineLevelPlacement = (activeItem: Item | null): number => {
    if (activeItem === null) return 1;
    return activeItem.level + 1;
}