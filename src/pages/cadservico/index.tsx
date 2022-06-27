import { useState, FormEvent } from 'react'
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './cadservico.module.scss'
import { setUpAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { Input10, Input20, Input40, Input30, Input50, Input60, Input70, Input80, Input100 } from '../../components/ui/Input'
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
        await apiClient.post('/cadservico', {
            DESCRICAO: DESCRICAO
        })

        toast.success(`Maquina ${DESCRICAO} cadastrada com sucesso`)
        setDescricao('');
    }

    return(
        <>
        <Head>
            <title>Novo Serviço - Metago</title>
        </Head>
            <Header />
    <div className={styles.container}>
        <form  onSubmit={handleRegister}>
            <div className={styles.rightCadMaquina}>
                <div className={styles.cardCliente}>
                <h1>Cadastro de Serviço</h1>
                    <div className={styles.elemento}>
                        <div className={styles.margin}>
                            <Input20
                            placeholder="Cliente"
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />         
                            <ButtonPesquisa></ButtonPesquisa>              
                            <Input40
                            placeholder=""
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                            <Input20
                            placeholder="Funcionário"
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                            <ButtonPesquisa></ButtonPesquisa>
                            <Input40
                            placeholder=""
                            type="text"
                            disabled
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                            <Input20
                            placeholder="Produto"
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                            <ButtonPesquisa></ButtonPesquisa>
                            <Input70
                            placeholder=""
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                            <Input10
                            placeholder="QTDE"
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                            <Input50
                            placeholder="Valor"
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                            <Input50
                            placeholder="Maquina"
                            type="text"
                            value={DESCRICAO}
                            onChange={ (e) => setDescricao(e.target.value)}
                            />
                            <ButtonPesquisa></ButtonPesquisa>
                        </div>
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