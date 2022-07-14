import { useState, FormEvent } from 'react'
import Head from 'next/head'
import { Sidebar } from '../../components/Header'
import styles from './produto.module.scss'
import { setUpAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { Input, Input20, Input40, Input90, Input80 } from '../../components/ui/Input'
import { ButtonPesquisa, ButtonDelete } from '../../components/ui/Button'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Produto() {
    const [DESCRICAO, setDescricao] = useState('')
    const [PRECO, setPreco] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (DESCRICAO === "") {
            return;
        }
        if (PRECO === "") {
            return;
        }

        const apiClient = setUpAPIClient();
        const response = await apiClient.post('/produto', {
            DESCRICAO: DESCRICAO,
            PRECO: PRECO
        })
        if (response.status != 200) {
            toast.error("Não foi possivel cadastrar o produto, verifique!")
        }

        toast.success(`Produto ${DESCRICAO} cadastrado com sucesso`)
        setDescricao('');
    }

    return (
        <>
            <Head>
                <title>Novo Produto - Metago</title>
            </Head>
            <Sidebar />
            <div className={styles.container}>
                <form onSubmit={handleRegister}>
                    <div className={styles.right}>
                        <div className={styles.card}>
                            <h1>Cadastro de Produto</h1>
                            <div className={styles.grupoBotao}>
                                <Input90
                                    placeholder="Descrição"
                                    type="text"
                                    value={DESCRICAO}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />

                                <Input20
                                    placeholder="Preço"
                                    type="text"
                                    value={PRECO}
                                    onChange={(e) => setPreco(e.target.value)}
                                />
                            </div>

                            <div className={styles.grupoBotao}>
                                <Button className={styles.btnExcluir}>Excluir</Button>
                                <Button className={styles.btnCadastrar}>Cadastrar</Button>
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