export default interface EditableFieldProps {
    defaultText: string;
    htmlElementType: string;
    propertySetter: (value: string) => void;
}