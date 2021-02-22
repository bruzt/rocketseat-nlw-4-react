import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

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
        
        background: #DCDDE0;
        border-radius: 5px;
        margin: 0 10px;
        
        box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
    }

    .panel .left-right-container {
        display: grid;
        grid-template-columns: 1fr 1fr;

        margin-top: 50px;
    }
    
    .panel .left-container {
        width: 100%;
        max-width: 400px;
        height: 500px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .left-container .user {
        display: flex;
        align-items: center;
    }
    
    .left-container .user img {
        width: 88px;
        height: 88px;
        border-radius: 50%;
    }
    
    .left-container .user .name-level {
        display: flex;
        flex-direction: column;
        
        margin-left: 20px;

        & span:nth-child(1){
            font-size: 24px;
            font-weight: 600;

            margin-bottom: 10px;
        }
    
        & span:nth-child(2){
            font-size: 16px;
            font-weight: 400;

            & .arrow {
                width: 16px;
                height: 16px;
            }
        }
    }
    
    .left-container .complete-challenges {
        display: flex;
        justify-content: space-between;
    }

    .left-container .countdown-clock {
        display: flex;
        height: 144px;

        margin-top: 20px;

        font-family: Rajdhani;
        font-size: 120px;
        font-weight: 600;

        justify-content: center;
    }

    .left-container .countdown-clock .number {
        background: #fff;
        height: 100%;

        box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
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
        height: 80px;

        border: 0;
        border-radius: 5px;
        background: #5965E0;

        color: #fff;
        font-size: 20px;
        font-weight: 600;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left-container button span {
        margin-right: 10px;
    }

    .right-container {
        width: 100%;

        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .right-container .init-cicle {
        width: 100%;
        max-width: 468px;
        height: 100%;

        background: #fff;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .init-cicle img {
        height: 80px;

        margin-bottom: 10px;
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

            margin-top: 50px;
        }
    }
`;
