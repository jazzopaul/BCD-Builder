import {  useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight } from '@fortawesome/free-solid-svg-icons'
import Styles from './formInputs.module.css';
import ItemContext from '@/contexts/ItemContext';
import DescriptionInputProps from '@/interfaces/props/DescriptionInputProps';
import Status from '@/enums/StatusEnum';


export const StatusInput = ({ setNewItem }: DescriptionInputProps) => {

    const {activeItem} = useContext(ItemContext);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewItem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className={Styles.form_input_container}>
            <div className={Styles.form_input_header}>
                <div className={Styles.icon_holder}>
                    <FontAwesomeIcon icon={faTrafficLight} />
                </div>
                <p className={Styles.status_title}>Status</p>
            </div>
            <div className={Styles.field_holder}>
                <select name="status" id="status" defaultValue={activeItem?.status} onChange={handleInputChange}>
                    <option value={Status.None}>No status selected</option>
                    <option value={Status.ToDo}>Not started</option>
                    <option value={Status.InProgress}>In progress</option>
                    <option value={Status.Completed}>Done</option>
                </select>
            </div>
        </div>
    );
}

export default StatusInput;