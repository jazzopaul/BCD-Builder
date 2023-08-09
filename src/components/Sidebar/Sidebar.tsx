import React, {useState} from 'react'
import styled from 'styled-components';
import Legend from '../Legend/Legend';

const Wrapper = styled.div`

    .sidebar_container {
        display: flex;
        height: 90vh;
        width: 280px;
        transition: width 0.3s ease;
    }

    .sidebar_container.hidden {
        width: 15px;
    }


    .sidebar {
        width: 100%;
        display: flex;
        justify-content: center;
        transition: width 0.3s ease;
    }

    .sidebar.hidden {
        width: 0;
        overflow: hidden;
    }

    .collapse_button_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-right: 1px solid grey;
        width: 10px;
        background-color: white;
    }

    .collapse_button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: larger;
        border-radius: 15px;
        width: 15px;
        height: 100px;
        background-color: lightgray;
    }

    .collapse_button:hover {
        background-color: gray;
        color: white;
        cursor: pointer;
    }

`

const Sidebar = () => {

    const [hidden, setHidden] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setHidden(!hidden);
    }

    return (
        <Wrapper>
            <div className={`sidebar_container ${hidden ? 'hidden' : ''}`}>
                <div className={`sidebar ${hidden ? 'hidden' : ''}`}>
                    <Legend />
                </div>
                <div className='collapse_button_container'>
                    <div 
                        className='collapse_button'
                        onClick={handleClick}
                    >
                        <i className={`fa ${hidden ? "fa-chevron-right" : "fa-chevron-left"}`}></i>
                    </div>
                </div>
            </div>
        </Wrapper>
        
    )
}

export default Sidebar