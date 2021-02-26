import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0px;
    
    z-index: 20;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(242, 243, 245, 0.8);

    .card {
        width: 100%;
        max-width: 400px;
        height: 365px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        background: var(--white);
        box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);

        border-radius: 5px;
    }

    .card header {
        width: 100%;
        height: 2rem;

        display: flex;
        justify-content: flex-end;

        padding: 1rem;
    }

    header button {
        width: 2rem;
        height: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 0;

        background: var(--white);
    }

    header button img {
        width: 1rem;
        height: 1rem;
    }

    .card .level {
        width: 50%;
        height: fit-content;
        background: url('icons/laurelWreath.svg') center no-repeat;

        text-align: center;
    }

    .level span {
        font-weight: 600;
        font-size: 9rem;
        color: var(--blue);
    }

    .card h2 {
        margin-top: -1rem;
        font-size: 2rem;

        color: var(--title);
    }

    .card p {
        font-size: 1rem;

        margin-bottom: 2rem;
    }

    .card footer {
        width: 100%;
        height: 5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-top: 1px solid var(--gray-line);

        background: rgba(42, 169, 224, 0.01);
    }

    footer a {
        width: 70%;
        height: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    footer span {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--blue-twitter);
    }

    footer img {
        width: 1.2rem;
        height: 1.2rem;

        margin-left: 0.5rem;
    }
`;
