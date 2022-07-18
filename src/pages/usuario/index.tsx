import { useState, FormEvent, useContext } from 'react'
import Head from 'next/head'
import styles from './usuario.module.scss'
import { Input } from '../../components/ui/Input'
import { AuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'

import { Sidebar } from '../../components/Header'

import Button from '@mui/material/Button';

export default function Usuario() {
  async function voltar() {
    event.preventDefault()
    window.location.href = '/acesso_usuario'
  }

  const { Usuario } = useContext(AuthContext)

  const [NOME, setNome] = useState('')
  const [USUARIO, setUsuario] = useState('')
  const [SENHA, setSenha] = useState('')
  const [NIVEL_ACESSO, setNivelAcesso] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleUsuario(event: FormEvent) {
    event.preventDefault();
    console.log(NOME)
    console.log(USUARIO)
    console.log(SENHA)
    console.log(NIVEL_ACESSO)

    if (NOME === '' || USUARIO === '' || SENHA === '' || NIVEL_ACESSO === "nivel") {
      toast.error("Preencha todos os campos")
      return
    }

    setLoading(true)

    let data = {
      NOME,
      USUARIO,
      SENHA,
      NIVEL_ACESSO
    }
    console.log(data)

    await Usuario(data)

    setLoading(false)

  }

  return (
    <>
      <Head>
        <title>
          Cadastro de Usuário - Metago
        </title>
      </Head>
      <Sidebar />

      <div className={styles.container}>
        <div className={styles.login}>
          <form onSubmit={handleUsuario}>
            <div className={styles.right}>
              <div className={styles.card}>
                <h1>Cadastro de Usuário</h1>

                <Input
                  placeholder="Nome"
                  type="text"
                  value={NOME}
                  onChange={(e) => setNome(e.target.value)}
                />

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

                <select value={NIVEL_ACESSO} onChange={(e) => setNivelAcesso(e.target.value)} className={styles.nivelAcesso}>
                  <option selected value="nivel"> Nivel do usuário </option>
                  <option value="Usuário"> Usuário </option>
                  <option value="Supervisor"> Supervisor </option>
                  <option value="Administrador"> Administrador </option>
                </select>

                <div className={styles.grupoBotao}>
                  <Button className={styles.btnVoltar} type="submit"
                    onClick={() => voltar()}>Voltar</Button>
                  <Button onClick={handleUsuario} className={styles.btnCadastrar}>Cadastrar</Button>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props: {}
  }

})