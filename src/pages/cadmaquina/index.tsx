import { useState, FormEvent } from 'react'
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './cadmaquina.module.scss'
import { setUpAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { Input } from '../../components/ui/Input'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function CadMaquina() {
    const [DESCRICAO, setDescricao] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (DESCRICAO === "") {
            return;
        }

        const apiClient = setUpAPIClient();
        const response = await apiClient.post('/cadmaquina', {
            DESCRICAO: DESCRICAO
        })

        if (response.status != 200) {
            toast.error('Não foi possivel cadastrar, verificar!')
        }

        toast.success(`Maquina ${DESCRICAO} cadastrada com sucesso`)
        setDescricao('');
    }

    return (
        <>
            <Head>
                <title>Metago | Nova Maquina</title>
            </Head>
            <Header />
            <div>
                <div className={styles.container}>
                    <form onSubmit={handleRegister}>
                        <div className={styles.rightCadMaquina}>
                            <div className={styles.cardCadMaquina}>
                                <h1>Cadastro de Máquina</h1>

                                <Input
                                    placeholder="Descrição"
                                    type="text"
                                    value={DESCRICAO}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />

                                <div className={styles.grupoBotao}>
                                    <Button className={styles.btnExcluir}>Excluir</Button>
                                    <Button onClick={handleRegister} className={styles.btnCadastrar}>Cadastrar</Button>
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