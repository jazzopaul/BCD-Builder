import Status from "@/enums/StatusEnum";

export default interface AddButtonContainerProps {
    level: number;
    active: boolean;
    handleAddItem: (title: string, status: Status, topLevelAdd?: Boolean) => void;
}