import { createContext, ReactNode, useState, useEffect } from 'react'
import { api } from '../services/apiCliente'
import { destroyCookie, setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { toast } from 'react-toastify'
type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    Usuario: (credentials: UsuarioProps) => Promise<void>
}

type UserProps = {
    CODIGO: string;
    NOME: string;
    USUARIO: string;
}

type SignInProps = {
    USUARIO: string;
    SENHA: string;
}

type UsuarioProps = {
    NOME: string;
    USUARIO: string;
    SENHA: string;
    NIVEL_ACESSO: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
    try {
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
    } catch {
        console.log('Erro ao deslogar')
    }
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    useEffect(() => {

        //tentar pegar algo no cookie
        const { '@nextauth.token': token } = parseCookies();

        if (token) {
            api.get('/me').then(response => {
                const { CODIGO, NOME, USUARIO } = response.data;

                setUser({
                    CODIGO,
                    NOME,
                    USUARIO
                })
            })
                .catch(() => {
                    //Se deu erro desloga o user
                    signOut();
                })
        }

    }, [])
    async function signIn({ USUARIO, SENHA }: SignInProps) {
        try {
            const response = await api.post('/sessao', {
                //requisitos para realizar o acesso
                USUARIO,
                SENHA
            })
            const { CODIGO, NOME, token } = response.data
            //está setando um cookie para gerenciar os acessos do usuário
            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: "/" //Quais caminhos terão acesso ao cookie
            })
            //está inserido no cookie os dados do usuário que irão receber tratativas ao logar
            setUser({
                CODIGO,
                NOME,
                USUARIO,
            })

            //passar o token para próximas requisições
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            toast.success("Logado com sucesso")

            //Redirecionar o usuario para /home
            Router.push('/home')

        } catch (err) {
            console.log(err)
            toast.error("Erro ao acessar")
        }
    }

    async function Usuario({ NOME, USUARIO, SENHA, NIVEL_ACESSO }: UsuarioProps) {
        try {

            const response = await api.post('/usuario', {
                NOME,
                USUARIO,
                SENHA,
                NIVEL_ACESSO
            })

            Router.push('/')

            toast.success("Criado com sucesso")

        } catch (err) {
            toast.error("Erro ao cadastrar")
        }
    }


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, Usuario }}>
            {children}
        </AuthContext.Provider>
    )
}