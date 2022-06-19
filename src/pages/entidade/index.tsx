import { useState, FormEvent } from 'react'
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './entidade.module.scss'
import { setUpAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

export default function Entidade(){
    // const [DESCRICAO, setDescricao] = useState('')
    
//   const [loading, setLoading] = useState(false)

    // async function handleRegister(event: FormEvent){
    //     event.preventDefault();

    //     if(DESCRICAO === ""){
    //         return;
    //     }

    //     const apiClient = setUpAPIClient();
    //     await apiClient.post('/entidade', {
    //         DESCRICAO: DESCRICAO
    //     })

    //     toast.success(`Maquina ${DESCRICAO} cadastrada com sucesso`)
    //     setDescricao('');
    // }

    return(
        <>
        <Head>
            <title>Nova Máquina - Metago</title>
        </Head>
            <Header />
<div>
    <div className={styles.container}>
        {/* <form  onSubmit={handleRegister}>
            <div className={styles.rightCadMaquina}>
                <div className={styles.cardCadMaquina}>
                <h1>Cadastro de Máquina</h1>

                    <Input
                    placeholder="Nome"
                    type="text"
                    value={DESCRICAO}
                    onChange={ (e) => setDescricao(e.target.value)}
                    />

                    <Button
                    type="submit"
                    loading={loading}
                    >
                    Cadastrar
                </Button>

                </div>
            </div>
        </form> */}
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