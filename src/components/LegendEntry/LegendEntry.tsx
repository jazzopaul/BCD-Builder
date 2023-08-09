import React from 'react';
import styled from 'styled-components';
import LegendEntryProps from '@/interfaces/props/LegendEntryProps';

const Wrapper = styled.div<LegendEntryProps>`
    .legend_entry_container {
        display: flex;
        margin-bottom: 1px;
    }

    .legend_entry_colour_display {
        background-color: ${props => props.colour};
        width: 60px;
        height: 20px;
        border-radius: 15px;
    }

    .legend_entry_label {
        margin-left: 15px;
    }
`

const LegendEntry = ({colour, label}: LegendEntryProps) => {
  return (
    <Wrapper
        colour={colour}
        label={label}
    >
        <div className='legend_entry_container'>
            <div className='legend_entry_colour_display' />
            <p className='legend_entry_label'>{label}</p>
        </div>
    </Wrapper>
  )
}

export default LegendEntry