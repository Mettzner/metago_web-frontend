import { useState, FormEvent } from 'react'
import Head from 'next/head'
import { Sidebar } from '../../components/Header'
import styles from './pagar.module.scss'
import { setUpAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { Input, Input10, Input20, Input40, Input30, Input50, Input90, Input60, Input70, Input80, Input100 } from '../../components/ui/Input'
import { ButtonPesquisa } from '../../components/ui/Button'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Pagar() {
    async function voltar() {
        event.preventDefault()
        window.location.href = '/acesso_pagar'
    }
    const [ID_CLIENTE, setIdCliente] = useState('')
    const [ID_FUNCIONARIO, setIdFuncionario] = useState('')
    const [VALOR_TOTAL, setValorTotal] = useState('')
    const [PARCELAS, setParcelas] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (ID_CLIENTE === "" || ID_FUNCIONARIO === '' || VALOR_TOTAL === '' || PARCELAS === '') {
            return;
        }

        const apiClient = setUpAPIClient();
        await apiClient.post('/pagar', {
            ID_CLIENTE: ID_CLIENTE,
            ID_FUNCIONARIO: ID_FUNCIONARIO,
            VALOR_TOTAL: VALOR_TOTAL,
            PARCELAS: PARCELAS,
        })

        toast.success(`Cadastrada com sucesso`)
    }

    return (
        <>
            <Head>
                <title> Metago - Contas a pagar</title>
            </Head>
            <Sidebar />
            <div className={styles.container}>
                <form onSubmit={handleRegister}>
                    <div className={styles.right}>
                        <div className={styles.card}>
                            <h1>Contas a Pagar</h1>
                            <div className={styles.elemento}>
                                <Input100
                                    placeholder="Cliente"
                                    type="text"
                                    value={ID_CLIENTE}
                                    onChange={(e) => setIdCliente(e.target.value)}
                                />
                                <Input100
                                    placeholder="Funcionário"
                                    type="text"
                                    value={ID_FUNCIONARIO}
                                    onChange={(e) => setIdFuncionario(e.target.value)}
                                />
                                <Input100
                                    placeholder="Valor Total"
                                    type="text"
                                    value={VALOR_TOTAL}
                                    onChange={(e) => setValorTotal(e.target.value)}
                                />
                                <Input100
                                    placeholder="Num. Parcelas"
                                    type="text"
                                    value={PARCELAS}
                                    onChange={(e) => setParcelas(e.target.value)}
                                />
                            </div>

                            <div className={styles.grupoBotao}>
                                <Button className={styles.btnVoltar} type="submit"
                                    onClick={() => voltar()}>Voltar</Button>
                                <Button onClick={handleRegister} className={styles.btnCadastrar}>Cadastrar</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }

})