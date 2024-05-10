"use client"

import Head from "next/head"
import { FormEvent, useContext, useState } from "react"
import { toast } from "react-toastify"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { AuthContext } from "../contexts/AuthContext"

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

const SignUp = () => {
  return (
    <>
      <Head>
        <title>
          Sisplan
        </title>
      </Head>
      <div className="w-full h-full justify-around items-center">
        <form onSubmit={handleLogin}>
          <div className='flex'>
            <div className='w-1/2'>
              <h1>Image</h1>
              {/* <Image
                src="/bg-image.jpg"
                alt="Imagem ilustrativa da tela de login"
                layout="fill"
              /> */}
            </div>
            <div className='w-1/2'>
              <h1>Login</h1>
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
              // loading={loading}
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

export default SignUp;