import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    align-items: center;
    
   img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    
    .name-level {
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
`;
