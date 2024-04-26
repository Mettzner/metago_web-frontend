// import React, { useState, FormEvent, useEffect } from 'react'
// import Head from 'next/head'
// import Sidebar from '../../components/Header'
// import styles from './cliente.module.scss'
// import { setUpAPIClient } from '../../services/api'
// import { toast } from 'react-toastify'
// import { canSSRAuth } from '../../utils/canSSRAuth'
// import { api } from '../../services/apiCliente'
// import { useRouter } from 'next/router';
// import { Input20, Input80, Input50, Input100 } from '../../components/ui/Input'
// import { Button40, ButtonDelete40, ButtonPesquisa } from '../../components/ui/Button'

// export default function Cliente() {
//     const [NOME, setNome] = useState('')
//     const [CNPJ, setCNPJ] = useState('')
//     const [TELEFONE, setTelefone] = useState('')
//     const [EMAIL, setEmail] = useState('')
//     const [ENDERECO, setEndereco] = useState('')
//     const [CEP, setCEP] = useState('')
//     const [NUMERO, setNumero] = useState('')
//     const [BAIRRO, setBairro] = useState('')
//     const [CIDADE, setCidade] = useState('')
//     const [UF, setUF] = useState('')
//     const [COMPLEMENTO, setComplemento] = useState('')
//     const [PAIS, setPais] = useState('')

//     const [loading, setLoading] = useState(false)

//     const router = useRouter();
//     const { ID_CLIENTE } = router.query;

//     async function handleRegister() {
//         event.preventDefault()

//         const apiClient = setUpAPIClient();
//         const response = await apiClient.put(`/cliente/altera/${ID_CLIENTE}`, {
//             ID_CLIENTE: ID_CLIENTE,
//             NOME: NOME,
//             CNPJ: CNPJ,
//             TELEFONE: TELEFONE,
//             EMAIL: EMAIL,
//             ENDERECO: ENDERECO,
//             CEP: CEP,
//             NUMERO: NUMERO,
//             BAIRRO: BAIRRO,
//             CIDADE: CIDADE,
//             UF: UF,
//             COMPLEMENTO: COMPLEMENTO,
//             PAIS: PAIS,
//         })
//         console.log(response)

//         if (response.status != 200) {
//             toast.error('Não foi possivel cadastrar o cliente, verifique!')
//         }

//         await mensagemSucesso()
//         window.location.href = '/acesso_cliente'
//     }

//     async function voltaPagina() {
//         event.preventDefault()
//         window.location.href = '/acesso_cliente'
//     }


//     async function mensagemSucesso() {
//         toast.success(`Cliente ${NOME} alterado com sucesso`)
//         setNome('')
//         setCNPJ('')
//         setTelefone('')
//         setEmail('')
//         setEndereco('')
//         setCEP('')
//         setNumero('')
//         setBairro('')
//         setCidade('')
//         setUF('')
//         setComplemento('')
//         setPais('')
//     }

//     useEffect(() => {
//         async function getCliente() {
//             const response = await api.get(`/cliente/detalhes/${ID_CLIENTE}`);
//             console.log(response.data[0]);
//             setNome(response.data[0].NOME)
//             setCNPJ(response.data[0].CNPJ)
//             setTelefone(response.data[0].TELEFONE)
//             setEmail(response.data[0].EMAIL)
//             setEndereco(response.data[0].ENDERECO)
//             setCEP(response.data[0].CEP)
//             setNumero(response.data[0].NUMERO)
//             setBairro(response.data[0].BAIRRO)
//             setCidade(response.data[0].CIDADE)
//             setUF(response.data[0].UF)
//             setComplemento(response.data[0].COMPLEMENTO)
//             setPais(response.data[0].PAIS)
//         }
//         getCliente()
//     }, [])

//     return (
//         <>
//             <Head>
//                 <title>Metago | Atualização de Clientes </title>
//             </Head>
//             <Sidebar />
//             <div className={styles.container}>
//                 <form>
//                     <div className={styles.right}>
//                         <div className={styles.card}>
//                             <h1>Atualização de Cliente</h1>
//                             <div className={styles.elemento}>
//                                 <Input100
//                                     placeholder="Nome"
//                                     type="text"
//                                     value={(NOME).toUpperCase()}
//                                     onChange={(e) => setNome(e.target.value.toUpperCase())}

//                                 />
//                                 <ButtonPesquisa></ButtonPesquisa>
//                                 <div className={styles.margin}>
//                                     <Input50
//                                         placeholder="CPF/CNPJ"
//                                         type="text"
//                                         value={(CNPJ).toUpperCase()}
//                                         onChange={(e) => setCNPJ(e.target.value.toUpperCase())}
//                                     />
//                                     <Input50
//                                         placeholder="Telefone"
//                                         type="text"
//                                         value={(TELEFONE).toUpperCase()}
//                                         onChange={(e) => setTelefone(e.target.value.toUpperCase())}
//                                     />
//                                 </div>
//                                 <Input100
//                                     placeholder="Email"
//                                     type="text"
//                                     value={EMAIL}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                                 <Input80
//                                     placeholder="Endereço"
//                                     type="text"
//                                     value={(ENDERECO).toUpperCase()}
//                                     onChange={(e) => setEndereco(e.target.value.toUpperCase())}
//                                 />
//                                 <Input20
//                                     placeholder="CEP"
//                                     type="text"
//                                     value={(CEP).toUpperCase()}
//                                     onChange={(e) => setCEP(e.target.value.toUpperCase())}
//                                 />
//                                 <div className={styles.margin}>
//                                     <Input20
//                                         placeholder="Numero"
//                                         type="text"
//                                         value={(NUMERO).toUpperCase()}
//                                         onChange={(e) => setNumero(e.target.value.toUpperCase())}
//                                     />
//                                     <Input20
//                                         placeholder="Bairro"
//                                         type="text"
//                                         value={(BAIRRO).toUpperCase()}
//                                         onChange={(e) => setBairro(e.target.value.toUpperCase())}
//                                     />
//                                     <Input20
//                                         placeholder="Cidade"
//                                         type="text"
//                                         value={(CIDADE).toUpperCase()}
//                                         onChange={(e) => setCidade(e.target.value.toUpperCase())}
//                                     />
//                                     <Input20
//                                         placeholder="UF"
//                                         type="text"
//                                         value={(UF).toUpperCase()}
//                                         onChange={(e) => setUF(e.target.value.toUpperCase())}
//                                     />
//                                 </div>
//                                 <Input80
//                                     placeholder="Complemento"
//                                     type="text"
//                                     value={(COMPLEMENTO).toUpperCase()}
//                                     onChange={(e) => setComplemento(e.target.value.toUpperCase())}
//                                 />
//                                 <Input20
//                                     placeholder="Pais"
//                                     type="text"
//                                     value={(PAIS).toUpperCase()}
//                                     onChange={(e) => setPais(e.target.value.toUpperCase())}
//                                 />
//                             </div>

//                             <div className={styles.elemento2}>
//                                 <div className={styles.btnExcluir}>
//                                     <ButtonDelete40
//                                         onClick={() => voltaPagina()}
//                                     >
//                                         Voltar
//                                     </ButtonDelete40>
//                                 </div>
//                                 <div className={styles.btnCadastrar}>
//                                     <Button40
//                                         type="submit"
//                                         loading={loading}
//                                         onClick={() => handleRegister()}
//                                     >
//                                         Cadastrar
//                                     </Button40>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }

// export const getServerSideProps = canSSRAuth(async (ctx) => {

//     return {
//         props: {}
//     }

// })