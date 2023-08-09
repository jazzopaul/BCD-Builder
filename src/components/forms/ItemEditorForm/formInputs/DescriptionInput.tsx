import {  useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Styles from './formInputs.module.css';
import ItemContext from '@/contexts/ItemContext';
import DescriptionInputProps from '@/interfaces/props/DescriptionInputProps';

export const DescriptionInput = ({ setNewItem }: DescriptionInputProps) => {

    const editableRef = useRef<HTMLDivElement>(null);
    const {activeItem} = useContext(ItemContext);

    const handleInputChange = () => {
        if (editableRef.current) {
            const updatedContent = editableRef.current.innerText;
            setNewItem((prevState) => ({
                ...prevState,
                "description": updatedContent,
            }));
          }        
    };

    const handleFocus = () => {
        if (editableRef.current && activeItem?.description === '') {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(editableRef.current);
          selection?.removeAllRanges();
          selection?.addRange(range);
        }
    };

    return (
        <div className={Styles.form_input_container}>
            <div className={Styles.form_input_header}>
                <div className={Styles.icon_holder}>
                    <FontAwesomeIcon icon={faFileAlt} />
                </div>
                <p className={Styles.description_title}>Description</p>
            </div>
            <div className={Styles.field_holder}>
                <div 
                    className={Styles.editable_field} 
                    ref={editableRef} 
                    onInput={handleInputChange}
                    onFocus={handleFocus}
                    contentEditable
                    suppressContentEditableWarning={true}
                >
                    {activeItem?.description === '' ? 'Click here to add a description...' : activeItem?.description}
                </div>
            </div>
        </div>
    );
}

export default DescriptionInput;