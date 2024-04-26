// import { useState, FormEvent, useEffect } from 'react'
// import Head from 'next/head'
// import { Sidebar } from '../../components/Header'
// import styles from './acesso_cliente.module.scss'
// // import { setUpAPIClient } from '../../services/api'
// // import { toast } from 'react-toastify'
// import { canSSRAuth } from '../../utils/canSSRAuth'
// import { api } from '../../services/apiCliente'
// import { Button40 } from '../../components/ui/Button'

// // import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
// import TablePagination from '@mui/material/TablePagination';


// export default function AcessoCliente() {

//     const [clientes, setClientes] = useState([]);
//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(10);


//     useEffect(() => {
//         async function loadClientes() {
//             const response = await api.get("/cliente/listagem")
//             // console.log(response.data)
//             setClientes(response.data)
//         }
//         loadClientes();
//     }, [])

//     const handleChangePage = (event: unknown, newPage: number) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };

//     // async function handleUpdate(ID_CLIENTE: string) {
//     //     window.location.href = '/editcliente/:?' + ID_CLIENTE
//     // }


//     async function chamaCadastro() {
//         event.preventDefault()
//         window.location.href = '/cliente'
//     }

//     async function handleDelete(ID_CLIENTE: string) {
//         if (confirm("Deseja realmente excluir este cliente?")) {
//             var result = await api.delete('/cliente/delete', {
//                 params: {
//                     ID_CLIENTE: ID_CLIENTE
//                 }
//             })
//             if (result.status === 200) {
//                 window.location.href = '/acesso_cliente'

//             } else {
//                 alert('erro')
//             }
//         }
//     }

//     return (
//         <>
//             <Head>
//                 <title>Metago | Lista de Clientes</title>
//             </Head>
//             <Sidebar />
//             <div className={styles.container}>
//                 <form >
//                     <div className={styles.right}>
//                         <div className={styles.card}>
//                             <div className={styles.bodyTable}><Paper sx={{ width: '100%', overflow: 'hidden' }}>
//                                 <TableContainer className={styles.tabela} component={Paper} sx={{ maxHeight: 600 }}>
//                                     <Table sx={{ minWidth: 650, color: 'white' }} size="small" className={styles.tabela} >
//                                         <TableHead >
//                                             <TableRow className={styles.paginacao}>
//                                                 <TableCell>CODIGO</TableCell>
//                                                 <TableCell>NOME</TableCell>
//                                                 <TableCell>CPF/CNPJ</TableCell>
//                                                 <TableCell>CIDADE</TableCell>
//                                                 <TableCell>TELEFONE</TableCell>
//                                                 <TableCell>DT_CADASTRO</TableCell>
//                                                 <TableCell align='center'>OPÇÕES</TableCell>
//                                             </TableRow>
//                                         </TableHead>
//                                         <TableBody >
//                                             {clientes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//                                                 <TableRow className={styles.row}
//                                                     key={row.ID_CLIENTE}>
//                                                     <TableCell component="th" scope="row">{row.CODCLI}</TableCell>
//                                                     <TableCell>{row.NOME}</TableCell>
//                                                     <TableCell>{row.CNPJ}</TableCell>
//                                                     <TableCell>{row.CIDADE}</TableCell>
//                                                     <TableCell>{row.TELEFONE}</TableCell>
//                                                     <TableCell>{new Date(row.DT_CADASTRO).toLocaleString('pt-br')}</TableCell>
//                                                     <TableCell align='right'>
//                                                         <ButtonGroup variant="contained" aria-label="outlined primary button group">
//                                                             <Button className={styles.btnAlterar} href={'/cliente_editar/' + row.ID_CLIENTE}>Alterar</Button>
//                                                             <Button className={styles.btnExcluir} onClick={() => handleDelete(row.ID_CLIENTE)}>Excluir</Button>
//                                                         </ButtonGroup>
//                                                     </TableCell>
//                                                 </TableRow>
//                                             ))}
//                                         </TableBody>
//                                     </Table>
//                                 </TableContainer>
//                                 <TablePagination className={styles.paginacao}
//                                     rowsPerPageOptions={[10, 25, 100]}
//                                     component="div"
//                                     count={clientes.length}
//                                     rowsPerPage={rowsPerPage}
//                                     page={page}
//                                     onPageChange={handleChangePage}
//                                     onRowsPerPageChange={handleChangeRowsPerPage}
//                                 />
//                             </Paper>
//                                 <Button40 onClick={() => chamaCadastro()}>Incluir</Button40>
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