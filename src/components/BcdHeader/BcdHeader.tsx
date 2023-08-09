import React, { useContext } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import BcdTitle from '../BcdTitle/BcdTitle';
import BcdOwner from '@/components/BcdOwner/BcdOwner';
import BcdUtilityButtons from '../BcdUtilityButtons/BcdUtilityButtons';
import BcdContext from '@/contexts/BcdContext';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 50px 30px;
  height: 10vh;
  background-color: #fff;
`

const BcdHeader = () => {
  
  const {title, owner} = useContext(BcdContext);

  return (
    <Wrapper>
        <Image src='/images/bcd_logo.png' alt='BCD Logo' width={155} height={63} />
      <BcdTitle title={title}/>
      <BcdOwner owner={owner}/>
      <BcdUtilityButtons />
    </Wrapper>
  )
}

export default BcdHeader