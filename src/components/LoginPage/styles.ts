import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: var(--blue);
    
    display: flex;
    justify-content: center;
    align-items: center;

    .big-logo {
        position: fixed;
        left: 0;
        top: 50%;
        bottom: 50%;
        
        margin: auto 0;
    }

    form {
        transform: translateX(10rem);
    }

    form h2 {
        font-size: 2.3rem;
        font-weight: 600;
        color: var(--white);

        margin-top: 4rem;
    }

    form .text-container {
        display: flex;
        align-items: center;

        margin-top: 1.5rem;
    }

    .text-container img {
        margin-right: 1rem;
    }

    .text-container span {
        color: var(--white);
        width: 60%;
    }

    .input-container {
        margin-top: 3rem;

        display: flex;
        align-items: center;
    }

    .input-container input {
        width: 21rem;
        height: 5rem;

        border: 0;

        background: linear-gradient(90deg, rgba(73,83,184,1) 20%, rgba(89,101,224,1) 100%);

        padding: 1rem;

        font-size: 1.5rem;
        color: var(--white);

        &::placeholder {
            color: var(--text-highlight);
        }
    }

    .input-container button {
        width: 5rem;
        height: 5rem;

        background: var(--green);

        border: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        font-size: 0;

        &:disabled {
            background: var(--blue-dark);
        }
    }

    @media (max-width: 720px) {
        form {
            transform: translateX(0);
        }
    }
`;
