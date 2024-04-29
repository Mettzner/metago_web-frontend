import Head from 'next/head'
import styles from '../../styles/login.module.scss'
import Image from 'next/image'
import logoimg from '../../public/logo.svg'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { useContext, FormEvent, useState } from 'react'
import { AuthContext } from '../_contexts/AuthContext'
import { toast } from 'react-toastify'

// import { canSSRGuest } from '../utils/canSSRGuest'

export default function Home() {
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
      <Head>
        <title>
          Metago - Login
        </title>
      </Head>
      <div className={styles.main}>
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <div className={styles.right}>
              <div className={styles.card}>
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
                  loading={loading}
                >
                  Acessar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


// export const getServerSideProps = canSSRGuest(async (ctx) => {
//   return {
//     props: {}
//   }
// })