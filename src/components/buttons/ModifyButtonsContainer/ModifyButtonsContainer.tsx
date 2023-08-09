import React from "react";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { CollapseButton } from "../CollapseButton/CollapseButton";
import { EditButton } from "../EditButton/EditButton";
import Styles from './ModifyButtonsContainer.module.css';
import ModifyButtonsContainerProps from "@/interfaces/props/ModifyButtonsContainerProps";

export const ModifyButtonsContainer = ({active, item, handleDeleteItem, handleCollapse}: ModifyButtonsContainerProps) => {

    return (
        <div className={`${Styles.modify_buttons_container} ${active ? Styles.active : ''}`}>
            <DeleteButton handleDelete={handleDeleteItem} />

            {item.children.length > 0 ? (
                <CollapseButton handleCollapse={handleCollapse} />
            ) : ''}
            
            <EditButton />
        </div>
    );
};