import styled from 'styled-components';
import ItemStyleProps from '@/interfaces/props/ItemStyleProps';

const Wrapper = styled.div<ItemStyleProps>`

    .item {
        display: block;
        justify-content: center;
        border: none ;
        border-radius: 0.5rem;
        min-width: 200px;
        max-width: 462px;
        margin: 7px;
        height: fit-content;
        box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.5);
        transition: all 0.2s ease-in-out;
    }

    .item:hover {
        cursor: pointer;
    }

    .item.level_1 {
        background-color: ${(props) => props.itembackgroundcolours.level_1};
        color: ${(props) => props.itemtitlecolours.level_1};
    }

    .item.level_2 {
        background-color: ${(props) => props.itembackgroundcolours.level_2};
        color: ${(props) => props.itemtitlecolours.level_2};
    }

    .item.level_3 {
        background-color: ${(props) => props.itembackgroundcolours.level_3};
        color: ${(props) => props.itemtitlecolours.level_3};
        max-width: 200px;
    }

    .item.level_4 {
        background-color: ${(props) => props.itembackgroundcolours.level_4};
        color: ${(props) => props.itemtitlecolours.level_4};
    }

    .item.level_5 {
        background-color: ${(props) => props.itembackgroundcolours.level_5};
        color: ${(props) => props.itemtitlecolours.level_5};
    }

    .item.status_none {

    }

    .item.status_red {
        background-color: #e25348;
        color: #fff;
    }

    .item.status_amber {
        background-color: #da7d2b;
        color: #fff;
    }

    .item.status_green {
        background-color: #5B8C5A;
        color: #fff;
    }

    .item.active {
        background-color: #C7C7F1;
    }

`

export default Wrapper;