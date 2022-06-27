import { useState, FormEvent } from 'react'
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './cadproduto.module.scss'
import { setUpAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { Input, Input20, Input40, Input80 } from '../../components/ui/Input'
import { ButtonPesquisa, ButtonDelete, Button } from '../../components/ui/Button'

export default function CadMaquina(){
    const [DESCRICAO, setDescricao] = useState('')
    
  const [loading, setLoading] = useState(false)

    async function handleRegister(event: FormEvent){
        event.preventDefault();

        if(DESCRICAO === ""){
            return;
        }

        const apiClient = setUpAPIClient();
        await apiClient.post('/cadproduto', {
            DESCRICAO: DESCRICAO
        })

        toast.success(`Maquina ${DESCRICAO} cadastrada com sucesso`)
        setDescricao('');
    }

    return(
        <>
        <Head>
            <title>Novo Produto - Metago</title>
        </Head>
            <Header />
<div>
    <div className={styles.container}>
        <form  onSubmit={handleRegister}>
            <div className={styles.rightCadMaquina}>
                <div className={styles.cardCadMaquina}>
                <h1>Cadastro de Produto</h1>
                    <div className={styles.elemento}>
                        <div className={styles.margin}>
                            <Input20
                            placeholder="Cliente"
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />         
                            <ButtonPesquisa></ButtonPesquisa>              
                            <Input80
                            placeholder=""
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.elemento2}>
                        <div className={styles.btnExcluir}>
                            <ButtonDelete
                            type="submit"
                            loading={loading}
                            >
                            Excluir
                            </ButtonDelete>
                        </div>
                        <div className={styles.btnCadastrar}>
                            <Button
                            type="submit"
                            loading={loading}
                            >
                            Cadastrar
                            </Button>
                        </div>
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