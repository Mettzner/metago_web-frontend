import { useState, FormEvent } from 'react'
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './cliente.module.scss'
import { setUpAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { Input20, Input80, Input50, Input100 } from '../../components/ui/Input'
import { Button40, ButtonDelete40, ButtonPesquisa } from '../../components/ui/Button'

export default function Cliente() {
    const [NOME, setNome] = useState('')
    const [CNPJ, setCNPJ] = useState('')
    const [TELEFONE, setTelefone] = useState('')
    const [EMAIL, setEmail] = useState('')
    const [ENDERECO, setEndereco] = useState('')
    const [CEP, setCEP] = useState('')
    const [NUMERO, setNumero] = useState('')
    const [BAIRRO, setBairro] = useState('')
    const [CIDADE, setCidade] = useState('')
    const [UF, setUF] = useState('')
    const [COMPLEMENTO, setComplemento] = useState('')
    const [PAIS, setPais] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (NOME === "") {
            return;
        }

        const apiClient = setUpAPIClient();
        await apiClient.post('/cliente', {
            NOME: NOME,
            CNPJ: CNPJ,
            TELEFONE: TELEFONE,
            EMAIL: EMAIL,
            ENDERECO: ENDERECO,
            CEP: CEP,
            NUMERO: NUMERO,
            BAIRRO: BAIRRO,
            CIDADE: CIDADE,
            UF: UF,
            COMPLEMENTO: COMPLEMENTO,
            PAIS: PAIS,
        })

        toast.success(`Cliente ${NOME} cadastrado com sucesso`)
        setNome('');
    }

    return (
        <>
            <Head>
                <title>Novo Cliente - Metago</title>
            </Head>
            <Header />
            <div className={styles.container}>
                <form onSubmit={handleRegister}>
                    <div className={styles.rightCadMaquina}>
                        <div className={styles.cardCliente}>
                            <h1>Cadastro de Cliente</h1>
                            <div className={styles.elemento}>
                                <Input100
                                    placeholder="Nome"
                                    type="text"
                                    value={NOME}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                                <ButtonPesquisa></ButtonPesquisa>
                                <div className={styles.margin}>
                                    <Input50
                                        placeholder="CPF/CNPJ"
                                        type="text"
                                        value={CNPJ}
                                        onChange={(e) => setCNPJ(e.target.value)}
                                    />
                                    <Input50
                                        placeholder="Telefone"
                                        type="text"
                                        value={TELEFONE}
                                        onChange={(e) => setTelefone(e.target.value)}
                                    />
                                </div>
                                <Input100
                                    placeholder="Email"
                                    type="text"
                                    value={EMAIL}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input80
                                    placeholder="Endereço"
                                    type="text"
                                    value={ENDERECO}
                                    onChange={(e) => setEndereco(e.target.value)}
                                />
                                <Input20
                                    placeholder="CEP"
                                    type="text"
                                    value={CEP}
                                    onChange={(e) => setCEP(e.target.value)}
                                />
                                <div className={styles.margin}>
                                    <Input20
                                        placeholder="Numero"
                                        type="text"
                                        value={NUMERO}
                                        onChange={(e) => setNumero(e.target.value)}
                                    />
                                    <Input20
                                        placeholder="Bairro"
                                        type="text"
                                        value={BAIRRO}
                                        onChange={(e) => setBairro(e.target.value)}
                                    />
                                    <Input20
                                        placeholder="Cidade"
                                        type="text"
                                        value={CIDADE}
                                        onChange={(e) => setCidade(e.target.value)}
                                    />
                                    <Input20
                                        placeholder="UF"
                                        type="text"
                                        value={UF}
                                        onChange={(e) => setUF(e.target.value)}
                                    />
                                </div>
                                <Input80
                                    placeholder="Complemento"
                                    type="text"
                                    value={COMPLEMENTO}
                                    onChange={(e) => setComplemento(e.target.value)}
                                />
                                <Input20
                                    placeholder="Pais"
                                    type="text"
                                    value={PAIS}
                                    onChange={(e) => setPais(e.target.value)}
                                />
                            </div>

                            <div className={styles.elemento2}>
                                <div className={styles.btnExcluir}>
                                    <ButtonDelete40
                                        type="submit"
                                        loading={loading}
                                    >
                                        Excluir
                                    </ButtonDelete40>
                                </div>
                                <div className={styles.btnCadastrar}>
                                    <Button40
                                        type="submit"
                                        loading={loading}
                                    >
                                        Cadastrar
                                    </Button40>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }

})