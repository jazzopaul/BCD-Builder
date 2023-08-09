import React, { useContext } from "react";
import ItemContext from '../../../contexts/ItemContext';
import SharedStyles from '../SharedButtonStyles.module.css';
import Styles from './EditButton.module.css';

export const EditButton = () => {

  const { setItemEditorVisibility, activeItem } = useContext(ItemContext);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setItemEditorVisibility(true);
    console.log(activeItem);
  }

  return (
        <button onClick={handleClick} className={`${Styles.edit_button} ${SharedStyles.modify_button}`}>
          <i className="fa fa-pencil"></i>
        </button>
  );
};