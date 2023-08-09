import React ,{ useState } from "react";
import SharedStyles from '../SharedButtonStyles.module.css';
import Styles from './CollapseButton.module.css';
import CollapseButtonProps from "@/interfaces/props/CollapseButtonProps";

export const CollapseButton = (props: CollapseButtonProps) => {

  const [collapsed, setCollapsed] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setCollapsed(!collapsed);
    props.handleCollapse();
  }

    return (
          <button onClick={handleClick} className={`${Styles.collapse_button} ${SharedStyles.modify_button}`}>
            <span className={`fa ${collapsed ? 'fa-chevron-down' : 'fa-chevron-up'}`}></span>
          </button>
    );
};