"use client"

import Head from 'next/head'
import { Button } from '@/app/_components/ui/button'
import { useContext, FormEvent, useState } from 'react'
import { AuthContext } from '@/app/contexts/AuthContext'
import { toast } from 'react-toastify'
import { Input } from '@/app/_components/ui/input'

const Home = () => {
  const { signIn } = useContext(AuthContext)

  const [USUARIO, setUsuario] = useState('')
  const [SENHA, setSenha] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (USUARIO === '' || SENHA === '') {
      toast.error("Preencha todos os campos")
      return;
    }

    setLoading(true);

    let data = {
      USUARIO,
      SENHA
    }
    console.log(data)
    await signIn(data)

    setLoading(false);
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleLogin}>
          <div className='flex gap-2'>
            <div className='w-1/2 min-w-1/2 bg-cyan-800 text-black'>
              <h1 className='flex justify-center items-center'>Image</h1>
            </div>
            <div className='w-1/2 min-w-1/2'>
              <h1 className='flex justify-center items-center'>Login</h1>
              <div className='grid gap-2'>
                <Input
                  placeholder="Usuário"
                  type="text"
                  value={USUARIO}
                  onChange={(e) => setUsuario(e.target.value)}
                />

                <Input
                  type="password"
                  placeholder="Senha"
                  value={SENHA}
                  onChange={(e) => setSenha(e.target.value)}
                />

                <Button
                  className='bg-cyan-800 w-full text-cyan-50 hover:bg-cyan-700 rounded'
                  type="submit"
                >
                  Acessar
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Home;
