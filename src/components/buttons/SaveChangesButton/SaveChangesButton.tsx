import React, {useRef, KeyboardEvent} from 'react';
import Styles from './SaveChangesButton.module.css';

interface SaveChangesButtonProps {
    handleSave: (e: React.MouseEvent<HTMLElement>) => void;
}

export const SaveChangesButton = ( {handleSave}: SaveChangesButtonProps)=> {

    const divRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
          divRef.current?.click();
        }
      };

    return (
        <div 
            className={Styles.save_changes_button} 
            ref={divRef}
            tabIndex={0} 
            onClick={handleSave}
            onKeyDown={handleKeyDown}
        >
            Save Changes
        </div>
    );
};

export default SaveChangesButton;