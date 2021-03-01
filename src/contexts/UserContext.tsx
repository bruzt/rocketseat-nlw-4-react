import React, { createContext, useContext, useState } from 'react';
import cookies from 'js-cookie';
import { useRouter } from 'next/router';

import githubAPI from '../services/gitbubAPI';

interface IProps {
    children: React.ReactNode;
}

interface IUserContext {
    fetchGitUser: (username: string) => Promise<void>;
    nameState: string;
    photoUrlState: string;
    setName: React.Dispatch<string>;
}

const UserContext = createContext({});

export function UserContextProvider({ children }: IProps){

    const router = useRouter();

    const [nameState, setName] = useState('');
    const [photoUrlState, setPhotoUrl] = useState('');

    async function fetchGitUser(username: string){
        try {
            
            if(username == null || username.trim().length == 0) throw new Error('Usuário inválido');
            
            const response = await githubAPI.get(`/${username}`);
    
            setName(response.data.name);
            setPhotoUrl(response.data.avatar_url);

            cookies.set('username', username);
            cookies.set('name', response.data.name);

            router.push('/home');

        } catch (error) {
            // usar offline
            if(nameState){
                router.push('/home');
            } else {
                alert('Erro ao buscar usuário');
            }
        }
    }

    return (
        <UserContext.Provider 
            value={{ 
                fetchGitUser,
                nameState,
                photoUrlState,
                setName
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
