import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    max-width: 468px;
    height: 100%;

    background: var(--white);

    border-radius: 5px;

    & > * {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .active {
        & header {
            width: 100%;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        & header span {
            font-size: 1.5rem;
            font-weight: 600;

            color: var(--blue);

            margin-bottom: 1.5rem;
        }

        & header hr {
            width: 80%;

            border: 1px solid var(--gray-line);
        }

        & main {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        & main img {
            width: 9rem;
            height: 7rem;

            margin-bottom: 1rem;
        }

        & main h2 {
            font-weight: 600;
            font-size: 2rem;

            margin-bottom: 1rem;
        }

        & main p {
            width: 70%;

            line-height: 2rem;
            text-align: center;
        }

        & footer {
            width: 80%;

            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        & footer button {
            width: 11rem;
            height: 3rem;

            border: 0;
            border-radius: 5px;

            color: var(--white);

            font-size: 1rem;
            font-weight: 600;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }

            &.completed {
                background: var(--green);
            }

            &.failed {
                background: var(--red);
            }
        } 
    }
    
    .not-active {
        & h2,
        & span {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        & h2 {
            font-weight: 600;
        }

        & > span {
            width: 50%;

            text-align: center;
        }

        & img {
            height: 5rem;

            margin-bottom: 1rem;
        }
    }
`;
