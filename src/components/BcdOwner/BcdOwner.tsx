import React, {useContext} from 'react'
import styled from 'styled-components';
import BcdOwnerProps from '@/interfaces/props/BcdOwnerProps';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BcdContext from '@/contexts/BcdContext';

const Wrapper = styled.div`
display: flex;
position: absolute;
margin-left: 65%;
padding-top: 20px;

p {
    margin-left: 10px;
    font-weight: bold;
}
`

const BcdOwner = ({ owner }: BcdOwnerProps) => {

  const { setOwner } = useContext(BcdContext);

  const handleBlur = (e: React.FocusEvent<HTMLHeadingElement>) => {
    const updatedOwnerName = e.target.innerText;
    const updatedOwner = {
      id: owner.id,
      name: updatedOwnerName,
      email: owner.email
    }
    setOwner(updatedOwner);
  };

  return (
    <Wrapper>
        <FontAwesomeIcon icon={faUser}  size='lg'/>
        <p 
          contentEditable 
          suppressContentEditableWarning={true}
          onBlur={handleBlur} spellCheck={false}
        >
          {owner.name}
        </p>
    </Wrapper>
    
  )
}

export default BcdOwner