import {Dispatch, SetStateAction} from "react";
import ItemInterface from "@/interfaces/ItemInterface";

export default interface DescriptionInputProps {
    setNewItem: Dispatch<SetStateAction<ItemInterface>>;
}