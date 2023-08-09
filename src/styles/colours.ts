import ItemLevelColours from "@/types/ItemLevelColoursType";
import ItemStatusColours from "@/types/ItemStatusColoursType";
import Status from "@/enums/StatusEnum";

export const defaultBackgroundColours:ItemLevelColours = 
    {
        ["Level 1"]: "#023F81",
        ["Level 2"]: "#3164F4",
        ["Level 3"]: "#AAD3FF",
        ["Level 4"]: "#154c79",
        ["Level 5"]: "#154c79"
    }
        
export const defaultStatusColours:ItemStatusColours =
    {
        [Status.ToDo]: "#e25348",
        [Status.InProgress]: "#da7d2b",
        [Status.Completed]: "#5B8C5A",
        [Status.None]: "none"
    }