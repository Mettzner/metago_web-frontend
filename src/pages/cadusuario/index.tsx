import { useState, FormEvent, useContext } from 'react'
import Head from 'next/head'
import styles from '../../../styles/cadusuario.module.scss'
import Image from 'next/image'
import logoimg from '../../../public/logo.svg'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import { AuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'

import { Header } from '../../components/Header'
// import Link from 'next/link';


export default function CadUsuario() {
  const { cadUsuario } = useContext(AuthContext)

  const [NOME, setNome] = useState('')
  const [USUARIO, setUsuario] = useState('')
  const [SENHA, setSenha] = useState('')
  const [NIVEL_ACESSO, setNivelAcesso] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleCadUsuario(event: FormEvent){
    event.preventDefault();
    console.log(NOME)
    console.log(USUARIO)
    console.log(SENHA)
    console.log(NIVEL_ACESSO)

    if(NOME === '' || USUARIO === '' || SENHA === '' || NIVEL_ACESSO === "nivel"){
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

  await cadUsuario(data)

  setLoading(false)

}

  return (
    <>
    <Head>
    <title>
      Faça seu Cadastro
    </title>
    </Head>
    <Header />

    <div>
<div className={styles.mainCadUsuario}>
      <Image src={logoimg} alt="logo sujeito pizzaria"/>
  <div className={styles.login}>
    <form onSubmit={handleCadUsuario}>
      <div className={styles.rightCadUsuario}>
        <div className={styles.cardCadUsuario}>
          <h1>Cadastro de Usuário</h1>

            <Input
            placeholder="Nome"
            type="text"
            value={NOME}
            onChange={ (e) => setNome(e.target.value)}
            />

            <Input
            placeholder="Usuário"
            type="text"
            value={USUARIO}
            onChange={ (e) => setUsuario(e.target.value)}
            />

            <Input
            type="password"
            placeholder="Senha"
            value={SENHA}
            onChange={ (e) => setSenha(e.target.value)}
            />

            <select value={NIVEL_ACESSO} onChange={ (e) => setNivelAcesso(e.target.value)} className={styles.nivelAcesso}>
              <option selected value="nivel"> Nivel do usuário </option>
              <option value="Usuário"> Usuário </option>
              <option value="Supervisor"> Supervisor </option>
              <option value="Administrador"> Administrador </option>
            </select>

            <Button
            type="submit"
            loading={loading}
            >
            Cadastrar
          </Button>

        </div>
      </div>
    </form>
  </div>
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