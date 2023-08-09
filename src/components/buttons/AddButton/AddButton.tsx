import React from "react";
import Status from "@/enums/StatusEnum";
import SharedStyles from '../SharedButtonStyles.module.css';
import Styles from './AddButton.module.css';
import AddButtonProps from "@/interfaces/props/AddButtonProps";

export const AddButton = ({ handleAddItem, topLevel }: AddButtonProps) => {

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    handleAddItem("New Item", Status.None, topLevel);
  }
    return (
          <button onClick={handleClick} className={`${Styles.add_button} ${SharedStyles.modify_button} ${topLevel ? Styles.top_level : ''}`}>
            <i className="fa fa-plus"></i>
          </button>
    );
};