import styled from 'styled-components';
import { AiFillCaretRight } from 'react-icons/ai';

export const AiFillCaretRightIcon = styled(AiFillCaretRight)`
    width: 1.5rem;
    height: 1.5rem;
`;

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .panel {
        width: 100%;
        max-width: 960px;
    }
    
    .panel .xp-bar {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .xp-bar span {
        flex-shrink: 0;
    }
    
    .xp-bar .bar {
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
    }

    .bar .current-xp {
        position: absolute;
        top: 0.5rem;

        transform: translateX(-50%);
    }

    .panel .left-right-container {
        display: grid;
        grid-template-columns: 1fr 1fr;

        margin-top: 3rem;
    }
    
    .panel .left-container {
        width: 100%;
        max-width: 400px;
        height: 31rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .left-container .user {
        display: flex;
        align-items: center;
    }
    
    .left-container .user img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    
    .left-container .user .name-level {
        display: flex;
        flex-direction: column;
        
        margin-left: 20px;

        & span:nth-child(1){
            font-size: 1.5rem;
            font-weight: 600;

            margin-bottom: 10px;
        }
    
        & span:nth-child(2){
            font-size: 1rem;
            font-weight: 400;

            & .arrow {
                width: 1rem;
                height: 1rem;
            }
        }
    }
    
    .left-container .complete-challenges {
        display: flex;
        justify-content: space-between;
    }

    .left-container .countdown-clock {
        display: flex;
        height: 9rem;

        margin-top: 1rem;

        font-family: Rajdhani;
        font-size: 8rem;
        font-weight: 600;

        justify-content: center;
    }

    .left-container .countdown-clock .number {
        background: var(--white);
        height: 100%;

        box-shadow: 0px 0px 4rem rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(1), &:nth-child(4){
            margin-right: 2px;
        }
    }

    .left-container button {
        width: 100%;
        height: 5rem;

        border: 0;
        border-radius: 5px;
        background: var(--blue);

        color: var(--white);
        font-size: 1rem;
        font-weight: 600;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: 0.2s;

        &:hover {
            background: var(--blue-dark);
        }
    }

    .left-container button span {
        margin-right: 10px;
    }

    .right-container {
        width: 100%;
        height: 31rem;

        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .right-container .init-cicle {
        width: 100%;
        max-width: 468px;
        height: 100%;

        background: var(--white);

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .init-cicle img {
        height: 5rem;

        margin-bottom: 1rem;
    }

    .init-cicle h2,
    .init-cicle span {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .init-cicle h2 {
        font-weight: 600;
    }

    @media (max-width: 965px) {

        .panel {
            padding: 10px;
        }
    }

    @media (max-width: 870px) {
        
        .panel .left-right-container {
            grid-template-columns: 1fr;
        }

        .panel .left-container {
            margin: 0 auto;
        }

        .panel .right-container {
            justify-content: center;

            margin-top: 3rem;
        }
    }
`;
