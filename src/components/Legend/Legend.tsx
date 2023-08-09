import React, {useContext} from 'react';
import styled from 'styled-components';
import LegendEntry from '../LegendEntry/LegendEntry';
import Status, {StatusToLabel} from '@/enums/StatusEnum';
import { defaultStatusColours, defaultBackgroundColours } from '@/styles/colours';
import ItemStatusColours from "@/types/ItemStatusColoursType";
import ItemLevelColours from '@/types/ItemLevelColoursType';
import OverrideColourType from '@/types/OverrideColourType';
import BcdContext from '@/contexts/BcdContext';


const Wrapper = styled.div`
    .legend_container {
        width: 200px;
        min-height: 150px;
        padding: 10px;
        margin-top: 5px;
        margin-left: 5px;
        border-radius: 10px;
        box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.5);
    }

    .legend_title {
        font-weight: normal;
        margin-bottom: 5px;
    }
`

const Legend = () => {

    const { overrideColours, maxLevels } = useContext(BcdContext);

    const renderStatuses = (statusColours: ItemStatusColours) => {

        const statusColoursArray = Object.entries(statusColours)
            .filter(([status]) => status !== Status.None)
            .map(([status, colour]) => (
                <LegendEntry
                    colour={colour}
                    label={StatusToLabel[status as keyof typeof StatusToLabel]}
                />
            ));
        return statusColoursArray
    };

    const renderLevels = (maxLevels: number, defaultLevelsColours: ItemLevelColours, overrideColours: OverrideColourType[]) => {


        const updatedBackgroundColours: ItemLevelColours = { ...defaultLevelsColours };

        if (overrideColours.length > 0) {
            overrideColours.forEach((overrideColour) => {
              const levelKey = `Level ${overrideColour.level}`;
              updatedBackgroundColours[levelKey] = overrideColour.colour;
            });
        }

        const levelsColoursArray = Object.entries(updatedBackgroundColours)
            .map(([level, colour]) => (
                <LegendEntry
                    key={level}
                    colour={colour}
                    label={level}
                />
            ))
            .slice(0, maxLevels);

        return levelsColoursArray;
    }

    return (
        <Wrapper>
            <div className='legend_container'>
                <p className='legend_title'>Legend</p>
                <div className='legend_entries_container'>
                    {renderStatuses(defaultStatusColours)}
                    {renderLevels(maxLevels, defaultBackgroundColours, overrideColours)}
                </div>
                
            </div>
        </Wrapper>
        
    )
}

export default Legend