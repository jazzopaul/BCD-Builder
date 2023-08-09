import React, { useContext } from 'react';
import ItemContext from '../../contexts/ItemContext';
import Styles from './ControlPanel.module.css';

function ControlPanel() {
    const { maxItemLevels, setMaxItemLevels} = useContext(ItemContext);

  return (
    <div className={Styles.button_box}>
          <form>
            <label htmlFor="numLevels">Maximum Number of Levels</label>
            <input 
              type="number" 
              id="numLevels" 
              name="numLevels" 
              min="1" 
              max="5" 
              defaultValue={maxItemLevels}
              onChange={(e) => setMaxItemLevels(parseInt(e.target.value))}
            />
          </form>
    </div>
  )
}

export default ControlPanel