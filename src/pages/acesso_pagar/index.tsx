import { useState, FormEvent, useEffect } from 'react'
import Head from 'next/head'
import { Sidebar } from '../../components/Header'
import styles from './acesso_pagar.module.scss'
// import { setUpAPIClient } from '../../services/api'
// import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { api } from '../../services/apiCliente'
import { Button40 } from '../../components/ui/Button'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';


export default function AcessoPagar() {

    const [pagar, setPagar] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    useEffect(() => {
        async function loadPagar() {
            const response = await api.get("/pagar/listagem")
            // console.log(response.data)
            setPagar(response.data)
        }
        loadPagar();
    }, [])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    async function chamaCadastro() {
        event.preventDefault()
        window.location.href = '/pagar'
    }

    async function handleDelete(ID_PAGAR: string) {
        if (confirm("Deseja realmente excluir este cliente?")) {
            var result = await api.delete('/pagar/delete', {
                params: {
                    ID_PAGAR: ID_PAGAR
                }
            })
            if (result.status === 200) {
                window.location.href = '/acesso_pagar'

            } else {
                alert('erro')
            }
        }
    }

    return (
        <>
            <Head>
                <title>Metago | Lista de Pagar</title>
            </Head>
            <Sidebar />
            <div className={styles.container}>
                <form >
                    <div className={styles.right}>
                        <div className={styles.card}>
                            <div className={styles.bodyTable}><Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                <TableContainer className={styles.tabela} component={Paper} sx={{ maxHeight: 600 }}>
                                    <Table sx={{ minWidth: 650, color: 'white' }} size="small" className={styles.tabela} >
                                        <TableHead >
                                            <TableRow className={styles.paginacao}>
                                                <TableCell>NUMERO</TableCell>
                                                <TableCell>PARCELA</TableCell>
                                                <TableCell>VALOR_TOTAL</TableCell>
                                                <TableCell>DT_CADASTRO</TableCell>
                                                <TableCell>DT_VENCIMENTO</TableCell>
                                                <TableCell align='center'>OPÇÕES</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody >
                                            {pagar.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                                <TableRow className={styles.row}
                                                    key={row.ID_PAGAR}>
                                                    <TableCell component="th" scope="row">{row.NUMERO}</TableCell>
                                                    <TableCell>{row.PARCELA}</TableCell>
                                                    <TableCell>{row.VALOR_TOTAL}</TableCell>
                                                    <TableCell>{new Date(row.DT_CADASTRO).toLocaleString('pt-br')}</TableCell>
                                                    <TableCell>{new Date(row.DT_VENCIMENTO).toLocaleString('pt-br')}</TableCell>
                                                    <TableCell align='right'>
                                                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                                            <Button className={styles.btnAlterar} href={'/pagar_editar/' + row.ID_PAGAR}>Alterar</Button>
                                                            <Button className={styles.btnExcluir} onClick={() => handleDelete(row.ID_PAGAR)}>Excluir</Button>
                                                        </ButtonGroup>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination className={styles.paginacao}
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={pagar.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </Paper>
                                <Button40 onClick={() => chamaCadastro()}>Incluir</Button40>
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