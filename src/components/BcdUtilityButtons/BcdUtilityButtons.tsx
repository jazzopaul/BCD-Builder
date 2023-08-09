import React from 'react'
import styled from 'styled-components';
import { faRotateLeft, faFloppyDisk, faShareNodes, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
display: flex;

.utility_buttons_container {
    position: absolute;
    right: 5%;
}

.undo_button {
    margin-right: 40px;
}

.save_button, .share_button, .download_button {
    margin-left: 20px;
}
`

const BcdUtilityButtons = () => {
  return (
    <Wrapper>
        <div className='utility_buttons_container'>
            <FontAwesomeIcon className='undo_button' icon={faRotateLeft} size='lg'/>
            <FontAwesomeIcon className='save_button' icon={faFloppyDisk} size='lg' />
            <FontAwesomeIcon className='share_button' icon={faShareNodes} size='lg' />
            <FontAwesomeIcon className='download_button' icon={faDownload} size='lg' />
        </div>
    </Wrapper>
  )
}

export default BcdUtilityButtons