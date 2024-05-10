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
      <div className="">
        <form onSubmit={handleLogin}>
          <div className=''>
            <div className=''>
              <h1 className=''>Image</h1>
            </div>
            <div className=''>
              <h1 className=''>Login</h1>
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
                type="submit"
              >
                Acessar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Home;
