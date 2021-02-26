import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    
    span {
        flex-shrink: 0;
    }
    
    .bar {
        width: 100%;
        height: 4px;

        position: relative;
        
        background: var(--gray-line);
        border-radius: 5px;
        margin: 0 10px;
        
        box-shadow: 0px 0px 4rem rgba(0, 0, 0, 0.05);
    }

    .bar .progress {
        width: 0px;
        height: 100%;
        background: var(--blue);

        transition: width 0.2s;
    }

    .bar .current-xp {
        position: absolute;
        top: 0.5rem;

        transform: translateX(-50%);

        white-space: nowrap;

        transition: left 0.2s;
    }
`;
