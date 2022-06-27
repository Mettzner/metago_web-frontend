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

export default function CadMaquina(){
    const [DESCRICAO, setDescricao] = useState('')
    
  const [loading, setLoading] = useState(false)

    async function handleRegister(event: FormEvent){
        event.preventDefault();

        if(DESCRICAO === ""){
            return;
        }

        const apiClient = setUpAPIClient();
        await apiClient.post('/cliente', {
            DESCRICAO: DESCRICAO
        })

        toast.success(`Maquina ${DESCRICAO} cadastrada com sucesso`)
        setDescricao('');
    }

    return(
        <>
        <Head>
            <title>Novo Cliente - Metago</title>
        </Head>
            <Header />
    <div className={styles.container}>
        <form  onSubmit={handleRegister}>
            <div className={styles.rightCadMaquina}>
                <div className={styles.cardCliente}>
                <h1>Cadastro de Cliente</h1>
                <div className={styles.elemento}>
                    <Input100
                    placeholder="Nome"
                    type="text"
                    value={DESCRICAO}
                    onChange={ (e) => setDescricao(e.target.value)}
                    />
                    <ButtonPesquisa></ButtonPesquisa>
                    <div className={styles.margin}>
                        <Input50
                        placeholder="CPF/CNPJ"
                        type="text"
                        value={DESCRICAO}
                        onChange={ (e) => setDescricao(e.target.value)}
                        />
                        <Input50
                        placeholder="Telefone"
                        type="text"
                        value={DESCRICAO}
                        onChange={ (e) => setDescricao(e.target.value)}
                        />
                    </div>
                        <Input100
                        placeholder="Email"
                        type="text"
                        value={DESCRICAO}
                        onChange={ (e) => setDescricao(e.target.value)}
                        />
                        <Input80
                        placeholder="Endereço"
                        type="text"
                        value={DESCRICAO}
                        onChange={ (e) => setDescricao(e.target.value)}
                        />
                        <Input20
                        placeholder="CEP"
                        type="text"
                        value={DESCRICAO}
                        onChange={ (e) => setDescricao(e.target.value)}
                        />
                        <div className={styles.margin}>
                            <Input20
                            placeholder="Numero"
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                            <Input20
                            placeholder="Bairro"
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                            <Input20
                            placeholder="Cidade"
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                            <Input20
                            placeholder="UF"
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                        </div>
                        <Input80
                        placeholder="Complemento"
                        type="text"
                        value={DESCRICAO}
                        onChange={ (e) => setDescricao(e.target.value)}
                        />
                        <Input20
                        placeholder="Pais"
                        type="text"
                        value={DESCRICAO}
                        onChange={ (e) => setDescricao(e.target.value)}
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