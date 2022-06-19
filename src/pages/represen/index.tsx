import { useState, FormEvent } from 'react'
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './represen.module.scss'
import { setUpAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

export default function CadMaquina(){
    const [NOME, setNome] = useState('')
    
  const [loading, setLoading] = useState(false)

    async function handleRegister(event: FormEvent){
        event.preventDefault();

        if(NOME === ""){
            return;
        }

        const apiClient = setUpAPIClient();
        await apiClient.post('/represen', {
            NOME: NOME
        })

        toast.success(`Funcionário ${NOME} cadastrada com sucesso`)
        setNome('');
    }

    return(
        <>
        <Head>
            <title>Novo Funcionário - Metago</title>
        </Head>
            <Header />
<div>
    <div className={styles.container}>
        <form  onSubmit={handleRegister}>
            <div className={styles.rightRepresen}>
                <div className={styles.cardRepresen}>
                <h1>Cadastro de Funcionários</h1>

                    <Input
                    placeholder="Nome"
                    type="text"
                    value={NOME}
                    onChange={ (e) => setNome(e.target.value)}
                    />

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
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }

})