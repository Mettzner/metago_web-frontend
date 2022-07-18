import { useState, FormEvent } from 'react'
import Head from 'next/head'
import { Sidebar } from '../../components/Header'
import styles from './funcionario.module.scss'
import { setUpAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { Input } from '../../components/ui/Input'
// import { Button, ButtonDelete40 } from '../../components/ui/Button'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Funcionario() {
    async function voltar() {
        event.preventDefault()
        window.location.href = '/acesso_funcionario'
    }

    const [NOME, setNome] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (NOME === "") {
            return;
        }

        const apiClient = setUpAPIClient();
        const response = await apiClient.post('/funcionario/create', {
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
                <title> Metago - Novo Funcionário </title>
            </Head>
            <Sidebar />
            <div>
                <div className={styles.container}>
                    <div className={styles.right}>
                        <div className={styles.card}>
                            <h1>Cadastro de Funcionários</h1>

                            <Input
                                placeholder="Nome"
                                type="text"
                                value={NOME}
                                onChange={(e) => setNome(e.target.value)}
                            />

                            <div className={styles.grupoBotao}>
                                <Button className={styles.btnVoltar}
                                    type="submit"
                                    onClick={() => voltar()}
                                >Voltar</Button>
                                <Button onClick={handleRegister} className={styles.btnCadastrar}>Cadastrar</Button>
                            </div>
                        </div>
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