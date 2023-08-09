import {  useContext } from 'react';
import TitleInputProps from '@/interfaces/props/TitleInputProps';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './formInputs.module.css';
import ItemContext from '@/contexts/ItemContext';


library.add(faBook);

export const TitleInput = ({ setNewItem }: TitleInputProps) => {

    const {activeItem} = useContext(ItemContext);

    const setActiveItemTitle = (newTitle: string) => {
        setNewItem((prevState) => ({
            ...prevState,
            "title": newTitle
        }));
    }

    const handleBlur = (e: React.FocusEvent<HTMLHeadingElement>) => {
        const updatedTitle = e.target.innerText;
        setActiveItemTitle(updatedTitle);
    };

    return (
        <div className={Styles.title_input_container}>
            <div className={Styles.icon_holder}>
                <FontAwesomeIcon icon={faBook} />
            </div>
            <div className={Styles.title_field_holder}>
                <p
                    contentEditable
                    spellCheck={false}
                    suppressContentEditableWarning={true}
                    onBlur={handleBlur}
                >
                    {activeItem ? activeItem.title : ''}
                </p>
            </div>
        </div>
    );
}

export default TitleInput;