import styled from 'styled-components';

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
    
    .left-container .complete-challenges {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & span:nth-child(1){
            font-size: 1.25rem;
        }

        & span:nth-child(2){
            font-size: 1.5rem;
        }
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
