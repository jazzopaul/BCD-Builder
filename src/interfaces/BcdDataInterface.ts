import OverrideColour from "@/types/OverrideColourType";
import Item from "./ItemInterface";
import Tag from "@/types/TagType";

export default interface BcdData {
    id: string;
    title: string;
    description: string;
    owner: {
      id: string;
      name: string;
      email: string;
    }
    users: {
      id: string;
      name: string;
    }[];
    channels: {
      id: string;
      name: string;
    }[];
    max_levels: number;
    overide_colours: OverrideColour[];
    tags: Tag[];
    items: Item[];
}