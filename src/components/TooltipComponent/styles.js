import styled from 'styled-components';


export const TooltipContainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    justify-content: flex-end;

    :hover{
        .tooltip-text{
            visibility: visible;
        }
    }
`

export const TooltipText = styled.span`
.tooltip-text{
        visibility: hidden;
        background: rgba(255,255,255,0.5);
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        clip-path: polygon(16% 0, 100% 0%, 100% 100%, 17% 100%, 16% 59%, 0 50%, 16% 41%);
        justify-content: center;
        position: absolute;
        width: 15%;
        border-radius: 3px;
        transform: ${props => props.transformTooltip ? props.transformTooltip : ''};
    }    
`