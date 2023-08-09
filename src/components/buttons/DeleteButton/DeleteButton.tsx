import React, { useContext } from "react";
import ItemContext from "../../../contexts/ItemContext";
import SharedStyles from '../SharedButtonStyles.module.css';
import Styles from './DeleteButton.module.css';
import DeleteButtonProps from '@/interfaces/props/DeleteButtonProps';

export const DeleteButton = ( {handleDelete}: DeleteButtonProps ) => {

  const { activeItem, setActiveItem } = useContext(ItemContext);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if(activeItem !== null) {
      handleDelete();
      setActiveItem(null);
    }
  };

    return (
          <button onClick={handleClick} className={`${Styles.delete_button} ${SharedStyles.modify_button}`}>
            <i className="fa fa-close"></i>
          </button>
    );
};