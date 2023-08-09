import React, { useContext } from 'react';
import BcdTitleProps from '@/interfaces/props/BcdTitleProps';
import Styles from './BcdTitle.module.css';
import BcdContext from '@/contexts/BcdContext';

const BcdTitle = ({ title }: BcdTitleProps) => {
  const { setTitle } = useContext(BcdContext);

  const handleBlur = (e: React.FocusEvent<HTMLHeadingElement>) => {
    const updatedTitle = e.target.innerText;
    setTitle(updatedTitle);
  };

  return (
    <div className={Styles.title_input}>
      <h1 
        contentEditable 
        spellCheck={false}
        suppressContentEditableWarning={true} 
        onBlur={handleBlur}
      >
        {title}
      </h1>
    </div>
  );
};

export default BcdTitle;