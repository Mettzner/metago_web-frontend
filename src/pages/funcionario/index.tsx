import { useState, FormEvent } from 'react'
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './funcionario.module.scss'
import { setUpAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { Input } from '../../components/ui/Input'
// import { Button, ButtonDelete40 } from '../../components/ui/Button'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Funcionario() {
    const [NOME, setNome] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (NOME === "") {
            return;
        }

        const apiClient = setUpAPIClient();
        const response = await apiClient.post('/funcionario', {
            NOME: NOME
        })
        if (response.status != 200) {
            toast.error("Não foi possivel realizar o cadastro, verificar!")
        }
        toast.success(`Funcionário ${NOME} cadastrado com sucesso`)
        setNome('');

    }

    return (
        <>
            <Head>
                <title>Novo Funcionário - Metago</title>
            </Head>
            <Header />
            <div>
                <div className={styles.container}>
                    <form onSubmit={handleRegister}>
                        <div className={styles.rightFuncionario}>
                            <div className={styles.cardFuncionario}>
                                <h1>Cadastro de Funcionários</h1>

                                <Input
                                    placeholder="Nome"
                                    type="text"
                                    value={NOME}
                                    onChange={(e) => setNome(e.target.value)}
                                />

                                <div className={styles.grupoBotao}>
                                    <Button className={styles.btnExcluir}>Excluir</Button>
                                    <Button className={styles.btnCadastrar}>Cadastrar</Button>
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