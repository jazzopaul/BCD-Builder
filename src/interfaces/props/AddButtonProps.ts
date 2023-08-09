import Status from "@/enums/StatusEnum";

export default interface AddButtonProps {
    topLevel: boolean;
    handleAddItem: (title: string, status: Status, topLevelAdd?: Boolean) => void;
}