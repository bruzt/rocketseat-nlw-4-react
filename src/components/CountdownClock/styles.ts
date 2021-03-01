import styled from 'styled-components';
import { AiFillCaretRight, AiOutlineClose, AiOutlineCheckCircle } from 'react-icons/ai';

export const AiFillCaretRightIcon = styled(AiFillCaretRight)`
    width: 1.5rem;
    height: 1.5rem;

    margin-left: 10px;
`;

export const AiOutlineCloseIcon = styled(AiOutlineClose)`
    width: 1.2rem;
    height: 1.2rem;

    margin-left: 10px;
`;

export const AiOutlineCheckCircleIcon = styled(AiOutlineCheckCircle)`
    width: 1.5rem;
    height: 1.5rem;

    margin-left: 10px;

    color: var(--green);
`;

export const Container = styled.div`

    .countdown {
        height: 9rem;
        
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: Rajdhani;
        font-size: 8rem;
        font-weight: 600;
    }

    .countdown .number-container {
        width: 100%;
        max-width: 5.75rem;
        height: 100%;

        background: var(--white);

        box-shadow: 0px 0px 4rem rgba(0, 0, 0, 0.05);
        //border-radius: 5px;
        
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(1), &:nth-child(4){
            margin-right: 2px;
            border-top-left-radius: 5px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }

        &:nth-child(2), &:nth-child(5){
            border-top-right-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }

    .countdown .colon {
        margin: 0 0.5rem;
    }

    button {
        width: 100%;
        height: 5rem;

        margin-top: 3rem;

        border: 0;
        border-radius: 5px;
        background: var(--blue);

        color: var(--white);
        font-size: 1rem;
        font-weight: 600;


        transition: background-color 0.2s;

        &:hover {
            background: var(--blue-dark);
        }
    }

    button.active {
        color: var(--text);
        background: var(--white);

        position: relative;

        &:hover {
            color: var(--white);
            background: var(--red);
        }

    }

    button.active .time-progress {
        position: absolute;
        bottom: 0;
        left: 0;

        height: 5px;
        background: var(--green);

        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        transition: width 0.2s;
    }

    button.finished {
        color: var(--text);
        background: var(--white);

        border-bottom: 5px solid var(--green);
    }

    button span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
