import React, { createContext, useContext, useState } from 'react';

import githubAPI from '../services/gitbubAPI';

interface IProps {
    children: React.ReactNode;
}

interface IUserContext {
    fetchGitUser: (username: string) => Promise<boolean>;
    nameState: string;
    photoUrlState: string;
}

const UserContext = createContext({});

export function UserContextProvider({ children }: IProps){

    const [nameState, setName] = useState('');
    const [photoUrlState, setPhotoUrl] = useState('');

    async function fetchGitUser(username: string){

        console.log(username)

        try {
            
            const response = await githubAPI.get(`/${username}`);
    
            setName(response.data.name);
            setPhotoUrl(response.data.avatar_url);

            return true;

        } catch (error) {
            alert('Erro ao buscar usuário');
            return false;
        }
    }

    return (
        <UserContext.Provider 
            value={{ 
                fetchGitUser,
                nameState,
                photoUrlState
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){

    const context = useContext(UserContext) as IUserContext;

    return context;
}
